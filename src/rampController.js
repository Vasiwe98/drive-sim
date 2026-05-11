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
// Speed-sensitive yaw — at standstill we barely turn, at speed we steer
// like a real car. Avoids the "spin in place" feel at low speed.
const MAX_YAW_RATE_FAST = 0.9    // rad/s at top of the speed scale
const YAW_SPEED_SCALE_MPS = 20   // speed at which yaw factor hits 1.0
const YAW_MIN_FACTOR = 0.08      // floor so you can still inch around at crawl

// Target world-space yaw (rotation around +Y) so the chassis-forward (+X local)
// points along the ramp's climbing direction. Our forward convention: chassis
// +X in world is reached by yaw=0. Rotation around +Y by yaw rotates +X
// toward +Z, so a yaw of -π/2 makes chassis-forward = +Z.
function targetYawForRamp(ramp) {
  if (ramp.axis === 'x') return ramp.axisSign > 0 ? 0 : Math.PI
  return ramp.axisSign > 0 ? -Math.PI / 2 : Math.PI / 2
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
    let bestRamp = null
    let bestSurface = -Infinity
    for (const r of ramps) {
      if (!r.contains(cx, cz)) continue
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
      // SNAP chassis yaw to the ramp's axis direction so the chassis starts
      // perfectly aligned. Without this, any small pre-entry yaw causes
      // the chassis to drift sideways off the ramp over its length.
      currentYaw = targetYawForRamp(activeRamp)
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
      currentYaw = targetYawForRamp(activeRamp)
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
      const inExtendedZone = r.extendHigh > 0 && t >= 1
      car.chassisBody.velocity.y = inExtendedZone ? 0 : horizontalV * slopeSlope
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

      let force = 0
      if (input.forward) force = RAMP_ENGINE_FORCE
      else if (input.backward) force = RAMP_REVERSE_FORCE
      if (force !== 0) {
        _forceScratch.set(_fwdWorld.x * force, 0, _fwdWorld.z * force)
        // applyForce(force, relativePoint) — relativePoint is the OFFSET
        // from body center to the application point, NOT a world position.
        // Passing chassisBody.position would compute torque = pos × force,
        // which creates a phantom yaw torque proportional to chassis X
        // (T_y = -x * F_z) and a runaway feedback loop that pushes the
        // car off the ramp side. Omit the second arg to apply at center.
        car.chassisBody.applyForce(_forceScratch)
      } else {
        // Apply some friction to slow the car when no input
        const v = car.chassisBody.velocity
        v.x *= 0.97
        v.z *= 0.97
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
