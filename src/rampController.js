// Scripted ramp handler. Each frame, checks whether the chassis is inside
// any ramp's footprint. If yes, drives the chassis Y position toward the
// ramp surface and applies direct horizontal force based on input (cannon's
// RaycastVehicle suspension is suspended via car.setSuspendVehicleControl).
// This is how arcade racing games (Mario Kart, Burnout) handle ramps:
// scripted kinematic transforms, not real physics. It sidesteps every
// failure mode we hit with cannon-es RaycastVehicle on tilted surfaces.

import * as CANNON from 'cannon-es'

const BLEND_IN_SEC = 0.20
const ENTER_GATE = 1.5
// Match the natural wheel-supported equilibrium height: wheel radius (0.5)
// + suspension at rest equilibrium compression (≈0.239) + connection offset
// (0.15) = 0.889. With this, when the car exits a ramp onto a flat surface
// (e.g. bridge deck) the wheel suspension transitions cleanly — no bounce.
const RIDE_HEIGHT = 0.889
const RAMP_ENGINE_FORCE = 13000
const RAMP_REVERSE_FORCE = -6000
// On a KINEMATIC body, applyForce is a no-op — cannon moves kinematic
// bodies only by velocity. So while engaged we set velocity directly.
// These cap the forward/reverse speed (m/s) the controller will produce.
const RAMP_MAX_FWD_SPEED = 80   // ~290 km/h, matches flat-ground top
const RAMP_MAX_REV_SPEED = 25   // ~90 km/h reverse cap
// Speed-sensitive yaw — at standstill we barely turn, at speed we steer
// like a real car. Avoids the "spin in place" feel at low speed.
const MAX_YAW_RATE_FAST = 0.9    // rad/s at top of the speed scale
const YAW_SPEED_SCALE_MPS = 20   // speed at which yaw factor hits 1.0
const YAW_MIN_FACTOR = 0.08      // floor so you can still inch around at crawl

// Target world-space yaw so chassis-forward (+X local) is aligned with the
// ramp's axis. A ramp has TWO valid alignments — facing the high end
// (climbing) or facing the low end (descending). We must pick the one
// closer to the chassis's current yaw, otherwise the snap reverses the
// car's facing 180° on entry. (Ramp 1 — bridge entry — is approached
// from its low end going up. Ramp 2 — bridge exit — is approached from
// its high end going down. Both share the same low/high definition, but
// the entry side differs, and so does the correct facing.)
//
// Our forward convention: chassis +X in world is reached by yaw=0.
// Rotation around +Y by yaw rotates +X toward +Z, so yaw=-π/2 makes
// chassis-forward = +Z.
function targetYawForRamp(ramp, currentChassisYaw) {
  let yawHigh, yawLow
  if (ramp.axis === 'x') {
    yawHigh = ramp.axisSign > 0 ? 0 : Math.PI
    yawLow = ramp.axisSign > 0 ? Math.PI : 0
  } else {
    yawHigh = ramp.axisSign > 0 ? -Math.PI / 2 : Math.PI / 2
    yawLow = ramp.axisSign > 0 ? Math.PI / 2 : -Math.PI / 2
  }
  return angleDist(yawHigh, currentChassisYaw) <= angleDist(yawLow, currentChassisYaw)
    ? yawHigh
    : yawLow
}

function angleDist(a, b) {
  let d = a - b
  while (d > Math.PI) d -= 2 * Math.PI
  while (d < -Math.PI) d += 2 * Math.PI
  return Math.abs(d)
}

// Reads current yaw from chassis quaternion via forward-vector atan2.
// Cheaper and more numerically stable than Euler extraction.
function readChassisYaw(car, fwdLocal, fwdScratch) {
  car.chassisBody.vectorToWorldFrame(fwdLocal, fwdScratch)
  return Math.atan2(-fwdScratch.z, fwdScratch.x)
}

export function createRampController(car, ramps, input) {
  let activeRamp = null
  let blendT = 0
  let exiting = false
  // Explicit yaw scalar. While the controller is engaged the chassis
  // quaternion is overwritten from this value every frame, so cannon's
  // internal angular integration cannot accumulate tiny drift between
  // frames. (Zeroing angularVelocity isn't sufficient — torques applied
  // during the physics step still rotate the quaternion before the next
  // controller tick can zero them.) This eliminates the slow-climb
  // sideways drift.
  let currentYaw = 0

  const _fwdLocal = new CANNON.Vec3(1, 0, 0)
  const _fwdWorld = new CANNON.Vec3()
  const _forceScratch = new CANNON.Vec3()
  const _yawAxis = new CANNON.Vec3(0, 1, 0)

  function update(dt) {
    const cx = car.chassisBody.position.x
    const cy = car.chassisBody.position.y
    const cz = car.chassisBody.position.z

    // --- Pick the best ramp the chassis is inside (highest surface wins) ---
    // For the currently active ramp we use the EXIT footprint (includes
    // extendLow) so the chassis stays kinematically guided until the
    // trailing wheels have cleared the visual ramp. For new candidates we
    // use the ENTRY footprint (visual + extendHigh only) so casual ground
    // traffic past a ramp's low edge isn't snapped onto it.
    let bestRamp = null
    let bestSurface = -Infinity
    for (const r of ramps) {
      const inFootprint = activeRamp === r ? r.containsForExit(cx, cz) : r.contains(cx, cz)
      if (!inFootprint) continue
      const surf = r.surfaceYAt(cx, cz)
      if (Math.abs(cy - surf) > ENTER_GATE && activeRamp !== r) continue
      if (surf > bestSurface) {
        bestSurface = surf
        bestRamp = r
      }
    }

    // --- State transitions ---
    if (bestRamp && !activeRamp) {
      activeRamp = bestRamp
      exiting = false
      // Switch chassis to KINEMATIC. Eliminates the tug-of-war between
      // gravity + suspension impulses and the controller's direct position
      // writes. Kinematic bodies move only by velocity; cannon's
      // applyImpulse is a no-op on them. Wheel raycasts still update wheel
      // state each step (so at release the suspension data is fresh).
      car.chassisBody.type = CANNON.Body.KINEMATIC
      // SNAP chassis yaw to the ramp's axis direction, but choose the
      // orientation closer to the chassis's CURRENT facing so a downhill
      // approach isn't flipped 180° on entry.
      const yawBefore = readChassisYaw(car, _fwdLocal, _fwdWorld)
      currentYaw = targetYawForRamp(activeRamp, yawBefore)
      car.chassisBody.quaternion.setFromAxisAngle(_yawAxis, currentYaw)
      car.chassisBody.angularVelocity.set(0, 0, 0)
      // Also zero lateral velocity at snap so any pre-entry sideways
      // motion (from flat-ground steering) doesn't carry one frame into
      // the climb before the regular zero-lateral block kicks in.
      car.chassisBody.vectorToWorldFrame(_fwdLocal, _fwdWorld)
      _fwdWorld.y = 0
      const _len = Math.sqrt(_fwdWorld.x * _fwdWorld.x + _fwdWorld.z * _fwdWorld.z)
      if (_len > 0.0001) {
        _fwdWorld.x /= _len
        _fwdWorld.z /= _len
        const v0 = car.chassisBody.velocity
        const fwdDot0 = v0.x * _fwdWorld.x + v0.z * _fwdWorld.z
        v0.x = _fwdWorld.x * fwdDot0
        v0.z = _fwdWorld.z * fwdDot0
      }
    } else if (bestRamp && activeRamp && bestRamp !== activeRamp) {
      activeRamp = bestRamp
      exiting = false
      const yawBefore = readChassisYaw(car, _fwdLocal, _fwdWorld)
      currentYaw = targetYawForRamp(activeRamp, yawBefore)
      car.chassisBody.quaternion.setFromAxisAngle(_yawAxis, currentYaw)
      car.chassisBody.angularVelocity.set(0, 0, 0)
    } else if (!bestRamp && activeRamp) {
      // INSTANT RELEASE on exit. For ramps with extendHigh (bridge approach
      // ramps that hand off onto a flat platform), zero chassis vy so the
      // car coasts onto the deck instead of launching upward and bouncing
      // on landing. The featured red launch ramp has no extendHigh, so it
      // keeps the slope-inherited vy and still produces a satisfying jump.
      if (activeRamp.extendHigh) {
        car.chassisBody.velocity.y = 0
      }
      // Switch back to DYNAMIC. Pre-set the wheel suspension state to the
      // settled equilibrium so the first physics step after release applies
      // a spring force equal to gravity, not a transient that bounces the
      // chassis. (Without this, cannon's first raycast might see stale
      // wheelInfo state and the spring/damper computes a wrong transient.)
      const gAccel = 9.82
      for (const w of car.vehicle.wheelInfos) {
        const eqCompression = gAccel / (4 * w.suspensionStiffness)
        w.suspensionLength = w.suspensionRestLength - eqCompression
        w.suspensionRelativeVelocity = 0
        w.clippedInvContactDotSuspension = 1
        w.isInContact = true
      }
      car.chassisBody.type = CANNON.Body.DYNAMIC
      car.chassisBody.wakeUp()
      activeRamp = null
      exiting = false
      blendT = 0
      car.setSuspendVehicleControl(false)
      return
    }

    // --- Blend in (entry fade only) ---
    if (activeRamp && !exiting) {
      blendT = Math.min(1, blendT + dt / BLEND_IN_SEC)
    }

    if (!activeRamp || blendT <= 0) return

    // --- Drive chassis Y exactly to ramp surface ---
    // Direct blend (not asymptotic). At blendT=1, position is *exactly*
    // targetY each frame. The previous asymptotic follow let position lag
    // by a few cm at moderate speed; combined with the slope-vy below,
    // that lag drifted the chassis upward in the extended-engagement zone
    // (past the visual ramp top, on the flat deck), eventually blowing
    // past the tiny wheel-raycast margin so the deck ray missed and the
    // chassis sank. Direct-set kills the lag entirely.
    const surfY = activeRamp.surfaceYAt(cx, cz)
    const targetY = surfY + RIDE_HEIGHT
    const newY = cy * (1 - blendT) + targetY * blendT
    car.chassisBody.position.y = newY
    // Sync previousPosition so cannon's interpolation/broadphase doesn't
    // see a phantom velocity injected by the direct position write.
    car.chassisBody.previousPosition.y = newY

    // Set chassis vy to the slope's natural rate of climb (= horizontal
    // velocity along the ramp axis × dy/dAxis). When the car later exits
    // the ramp footprint, this vy persists and the car arcs into the air
    // realistically — no artificial impulse needed.
    //
    // CRITICAL: this also cancels gravity-velocity accumulation each frame.
    // Ramps have no physics body so wheel raycasts miss during the climb;
    // suspension force is zero; gravity is unopposed. Without this reset
    // velocity.y grows unboundedly negative — visible as the chassis body
    // sinking below the tyres during the climb.
    //
    // EXCEPTION: in the extended zone of an extendHigh ramp (chassis past
    // the visual ramp top, on a flat platform), the surface is flat — vy
    // should be 0, not slope-vy. Slope-vy in this zone lifts the chassis
    // off the deck and the wheel raycasts only have a tiny (~6cm) margin
    // before they miss the deck — bouncing the chassis and producing the
    // visible sink at the ramp→deck handoff.
    if (blendT > 0.4) {
      const r = activeRamp
      const axisHigh = r.axis === 'x' ? r.high.x : r.high.z
      const axisLow = r.axis === 'x' ? r.low.x : r.low.z
      const slopeSlope = (r.high.y - r.low.y) / (axisHigh - axisLow)
      const v = car.chassisBody.velocity
      const horizontalV = r.axis === 'x' ? v.x : v.z
      const axisCoord = r.axis === 'x' ? cx : cz
      const axisSpan = axisHigh - axisLow
      const t = axisSpan !== 0 ? (axisCoord - axisLow) / axisSpan : 0
      // In either extension zone the controller is keeping the chassis on
      // a flat surface (deck at high.y, ground-level platform at low.y),
      // so the slope-inheritance vy is wrong — zero it instead. Inside the
      // visual ramp (0 <= t <= 1) the slope-vy keeps the climb stable.
      const inExtendedHigh = r.extendHigh > 0 && t >= 1
      const inExtendedLow = r.extendLow > 0 && t <= 0
      car.chassisBody.velocity.y = (inExtendedHigh || inExtendedLow) ? 0 : horizontalV * slopeSlope
    }

    // --- Direct chassis force/yaw while engaged ---
    if (blendT > 0.3) {
      car.setSuspendVehicleControl(true)

      // Forward direction in world (from chassis yaw)
      car.chassisBody.vectorToWorldFrame(_fwdLocal, _fwdWorld)
      _fwdWorld.y = 0
      const len = Math.sqrt(_fwdWorld.x * _fwdWorld.x + _fwdWorld.z * _fwdWorld.z)
      if (len > 0.0001) {
        _fwdWorld.x /= len
        _fwdWorld.z /= len
      }

      // Chassis is KINEMATIC while engaged → applyForce does nothing. Set
      // velocity directly along chassis-forward. Treat input force as a
      // target acceleration (force/mass) and integrate signed speed each
      // frame, clamped to the ramp speed caps. This lets the player
      // accelerate, decelerate, and reverse direction on a ramp — none of
      // which worked before because the engine force was a no-op.
      let force = 0
      if (input.forward) force = RAMP_ENGINE_FORCE
      else if (input.backward) force = RAMP_REVERSE_FORCE
      {
        const v = car.chassisBody.velocity
        let speedFwd = v.x * _fwdWorld.x + v.z * _fwdWorld.z
        if (force !== 0) {
          const accel = force / car.chassisBody.mass
          speedFwd += accel * dt
          speedFwd = Math.max(-RAMP_MAX_REV_SPEED, Math.min(RAMP_MAX_FWD_SPEED, speedFwd))
        } else {
          // No input: coast with mild friction.
          speedFwd *= 0.97
        }
        v.x = _fwdWorld.x * speedFwd
        v.z = _fwdWorld.z * speedFwd
      }

      // ---- Yaw + lateral grip (fully manual; bypass cannon's angular
      // dynamics so nothing can perturb the chassis on the ramp). ----
      const v = car.chassisBody.velocity
      const horizontalSpeed = Math.sqrt(v.x * v.x + v.z * v.z)

      // Speed-sensitive yaw rate.
      const yawFactor = Math.max(
        YAW_MIN_FACTOR,
        Math.min(1, horizontalSpeed / YAW_SPEED_SCALE_MPS)
      )
      let yawRate = 0
      if (input.left) yawRate = MAX_YAW_RATE_FAST * yawFactor
      else if (input.right) yawRate = -MAX_YAW_RATE_FAST * yawFactor

      // Integrate yaw into a SCALAR, then overwrite the chassis quaternion
      // from that scalar every frame. This guarantees no quaternion drift
      // can accumulate from the physics step's integration — the chassis
      // orientation is exactly currentYaw, always.
      currentYaw += yawRate * dt
      car.chassisBody.quaternion.setFromAxisAngle(_yawAxis, currentYaw)
      // Zero ALL angular velocity each frame so nothing accumulates.
      car.chassisBody.angularVelocity.set(0, 0, 0)

      // ZERO lateral velocity. Project horizontal velocity onto
      // chassis-forward and discard anything perpendicular. The chassis
      // can only move in the direction it's currently facing — no
      // spurious sideways drift is possible. Intentional steering still
      // works because yaw rotates chassis-forward, and the velocity
      // projection follows the new forward.
      const fwdDot = v.x * _fwdWorld.x + v.z * _fwdWorld.z
      v.x = _fwdWorld.x * fwdDot
      v.z = _fwdWorld.z * fwdDot
    } else {
      car.setSuspendVehicleControl(false)
    }
  }

  function getOverride() {
    if (!activeRamp || blendT <= 0) return null
    return { ramp: activeRamp, blendT }
  }

  function getDebugInfo() {
    return {
      activeRamp: activeRamp ? `${activeRamp.axis} ${activeRamp.axisMin.toFixed(0)}-${activeRamp.axisMax.toFixed(0)}` : 'none',
      blendT: blendT.toFixed(2),
    }
  }

  return { update, getOverride, getDebugInfo }
}
