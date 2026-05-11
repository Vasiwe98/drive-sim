// Scripted ramp handler. Each frame, checks whether the chassis is inside
// any ramp's footprint. If yes, drives the chassis Y position toward the
// ramp surface and applies direct horizontal force based on input (cannon's
// RaycastVehicle suspension is suspended via car.setSuspendVehicleControl).
// This is how arcade racing games (Mario Kart, Burnout) handle ramps:
// scripted kinematic transforms, not real physics. It sidesteps every
// failure mode we hit with cannon-es RaycastVehicle on tilted surfaces.

import * as CANNON from 'cannon-es'

const BLEND_IN_SEC = 0.20
const BLEND_OUT_SEC = 0.30
const FOLLOW_RATE = 18           // exponential follow toward target Y
const ENTER_GATE = 1.5           // max vertical distance from ramp surface to "enter"
const RIDE_HEIGHT = 0.85         // chassis center Y above ramp surface when "on" the ramp
// Scaled for mass 1500 (Porsche). At F/m=8.7 m/s² these match flat-ground feel.
const RAMP_ENGINE_FORCE = 13000
const RAMP_REVERSE_FORCE = -6000
const MAX_YAW_RATE = 1.4         // rad/s, slightly tamer than flat ground

export function createRampController(car, ramps, input) {
  let activeRamp = null
  let blendT = 0
  let exiting = false

  const _fwdLocal = new CANNON.Vec3(1, 0, 0)
  const _fwdWorld = new CANNON.Vec3()
  const _forceScratch = new CANNON.Vec3()

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
    } else if (bestRamp && activeRamp && bestRamp !== activeRamp) {
      activeRamp = bestRamp
      exiting = false
    } else if (!bestRamp && activeRamp) {
      // INSTANT RELEASE on exit. If we fade out over a few hundred ms, the
      // controller keeps pulling the chassis toward the (clamped) ramp Y
      // even while the wheels are trying to lift the car to whatever's
      // below — e.g. landing on a bridge deck at a slightly different
      // height. The fight causes the car to get stuck. Releasing
      // immediately lets gravity + suspension take over cleanly. The
      // chassis keeps its slope-inherited vy from the last set, so the
      // hand-off into the air / onto the next surface still looks natural.
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

    // --- Drive chassis Y toward ramp surface ---
    const surfY = activeRamp.surfaceYAt(cx, cz)
    const targetY = surfY + RIDE_HEIGHT
    const follow = 1 - Math.exp(-FOLLOW_RATE * dt)
    const newY = cy + (targetY - cy) * follow * blendT
    car.chassisBody.position.y = newY

    // Set chassis vy to the slope's natural rate of climb (= horizontal
    // velocity along the ramp axis × dy/dAxis). When the car later exits
    // the ramp footprint, this vy persists and the car arcs into the air
    // realistically — no artificial impulse needed.
    if (blendT > 0.4) {
      const r = activeRamp
      const axisHigh = r.axis === 'x' ? r.high.x : r.high.z
      const axisLow = r.axis === 'x' ? r.low.x : r.low.z
      const slopeSlope = (r.high.y - r.low.y) / (axisHigh - axisLow)
      const v = car.chassisBody.velocity
      const horizontalV = r.axis === 'x' ? v.x : v.z
      car.chassisBody.velocity.y = horizontalV * slopeSlope
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
        car.chassisBody.applyForce(_forceScratch, car.chassisBody.position)
      } else {
        // Apply some friction to slow the car when no input
        const v = car.chassisBody.velocity
        v.x *= 0.97
        v.z *= 0.97
      }

      // Yaw steering (direct angular velocity for snappy ramp control)
      let yawRate = 0
      if (input.left) yawRate = MAX_YAW_RATE
      else if (input.right) yawRate = -MAX_YAW_RATE
      car.chassisBody.angularVelocity.y = yawRate
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
