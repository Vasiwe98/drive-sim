import * as CANNON from 'cannon-es'
import * as THREE from 'three'

// Monkey-patch CANNON.RaycastVehicle.castRay to extend the wheel ray length
// from `restLength + radius` to `restLength + maxTravel + radius`.
//
// Why: cannon-es hardcodes the ray length as restLength + radius. At our
// equilibrium (suspension compressed by mg/(4k) ≈ 6cm), the wheel raycast
// tip reaches only ~6cm past the ground. Any transient that lifts the
// chassis by >6cm — slope-vy on release, oscillation on landing, slight
// drift in the extended-engagement zone — makes the ray miss entirely.
// On miss, cannon clamps suspensionLength to restLength → length_diff=0
// → suspensionForce=0. With no support, the chassis falls. We see this
// as the bridge-deck "sink." Adding maxTravel into the ray length gives
// ~36cm of margin — 6× more — so transient lift doesn't break contact.
// Per agent #2 research: this is the canonical fix in Bullet/cannon-es
// for the "raycast vehicle sinks on landing" class of bug.
//
// We faithfully reproduce cannon-es's castRay (see node_modules/cannon-es/
// dist/cannon-es.js around line 7429) with the single change to `raylen`.
{
  const _rv = new CANNON.Vec3()
  const _tgt = new CANNON.Vec3()
  const _chassisVel = new CANNON.Vec3()
  CANNON.RaycastVehicle.prototype.castRay = function patchedCastRay(wheel) {
    this.updateWheelTransformWorld(wheel)
    const chassisBody = this.chassisBody
    let depth = -1
    // PATCHED LINE: include maxSuspensionTravel in ray length.
    const raylen = wheel.suspensionRestLength + wheel.maxSuspensionTravel + wheel.radius
    wheel.directionWorld.scale(raylen, _rv)
    const source = wheel.chassisConnectionPointWorld
    source.vadd(_rv, _tgt)
    const raycastResult = wheel.raycastResult
    raycastResult.reset()
    const oldState = chassisBody.collisionResponse
    chassisBody.collisionResponse = false
    this.world.rayTest(source, _tgt, raycastResult)
    chassisBody.collisionResponse = oldState
    const object = raycastResult.body
    wheel.raycastResult.groundObject = 0
    if (object) {
      depth = raycastResult.distance
      wheel.raycastResult.hitNormalWorld = raycastResult.hitNormalWorld
      wheel.isInContact = true
      const hitDistance = raycastResult.distance
      wheel.suspensionLength = hitDistance - wheel.radius
      const minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel
      const maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel
      if (wheel.suspensionLength < minSuspensionLength) {
        wheel.suspensionLength = minSuspensionLength
      }
      if (wheel.suspensionLength > maxSuspensionLength) {
        wheel.suspensionLength = maxSuspensionLength
        wheel.raycastResult.reset()
      }
      const denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld)
      chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, _chassisVel)
      const projVel = wheel.raycastResult.hitNormalWorld.dot(_chassisVel)
      if (denominator >= -0.1) {
        wheel.suspensionRelativeVelocity = 0
        wheel.clippedInvContactDotSuspension = 1 / 0.1
      } else {
        const inv = -1 / denominator
        wheel.suspensionRelativeVelocity = projVel * inv
        wheel.clippedInvContactDotSuspension = inv
      }
    } else {
      wheel.suspensionLength = wheel.suspensionRestLength
      wheel.suspensionRelativeVelocity = 0.0
      wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld)
      wheel.clippedInvContactDotSuspension = 1.0
    }
    return depth
  }
}

// Convention: +X is forward (headlights / hood), +Y is up, +Z is left.
// W produces positive engine force, pushing the car in +X.
//
// Tuning target: Porsche 911 (992 Carrera S).
//   mass 1500 kg, 0-100 km/h ~3.5s, top speed ~310 km/h, high tire grip.
//   At F=13000N / m=1500kg average accel ≈ 8.7 m/s² → 0-100 km/h ≈ 3.2s.
//   Top speed at equilibrium: F_engine = m * linearDamping * v
//      → v_top = 13000 / (1500 * 0.10) = 87 m/s ≈ 313 km/h.
const MAX_STEER = 0.5
const MAX_ENGINE_FORCE = 13000
const REVERSE_FORCE = -6000
const HANDBRAKE_FORCE = 50000
const ROLLING_BRAKE = 20
// Steering reduces at high speed for stability (real cars + Porsche-like).
const STEER_HIGH_SPEED_KMH = 220   // above this, steering scales down hard
const STEER_MIN_FACTOR = 0.3

// Chassis collider sits at cabin level (offset upward in chassis local frame).
const CHASSIS_HALF = { x: 1.9, y: 0.25, z: 0.95 }
export const WHEEL_RADIUS = 0.5
const WHEEL_WIDTH = 0.35

// Wheel mount positions in chassis local frame. Exposed so the ramp
// controller can override wheel mesh positions to sit on ramp surfaces.
export const WHEEL_MOUNTS = [
  new CANNON.Vec3(1.65, -0.15, 0.95),   // 0 = FL (front-left)
  new CANNON.Vec3(1.65, -0.15, -0.95),  // 1 = FR
  new CANNON.Vec3(-1.65, -0.15, 0.95),  // 2 = RL
  new CANNON.Vec3(-1.65, -0.15, -0.95), // 3 = RR
]

export function createVehicle(world, scene, spawnPos = new CANNON.Vec3(0, 4, 0), color = 0xc23b22) {
  const chassisShape = new CANNON.Box(new CANNON.Vec3(CHASSIS_HALF.x, CHASSIS_HALF.y, CHASSIS_HALF.z))
  const chassisBody = new CANNON.Body({ mass: 1500 }) // Porsche-like mass
  // No collider offset. A previous +0.5m offset (to sit at cabin level)
  // created a "trap zone" at the bridge deck: when the collider rested on
  // the deck top (chassis_y=3.0 with offset=0.5), the wheel mounts at
  // chassis_y - 0.15 = 2.85 sat BELOW the deck top (3.25). Wheel raycasts
  // started inside the deck box, hit the deck UNDERSIDE, returned
  // hitNormalWorld = (0,-1,0), and the spring force was applied DOWNWARD
  // — the chassis got pulled into the deck and stuck. With offset=0, the
  // collider rests at chassis_y=3.5 where wheel mounts (3.35) are above
  // the deck top, so raycasts hit the top face normally and the spring
  // force pushes the chassis UP out of the trap. Ramps have no physics
  // body (controller-driven), so the original "above ramp edge" rationale
  // for the offset is moot.
  chassisBody.addShape(chassisShape)
  chassisBody.position.copy(spawnPos)
  chassisBody.angularVelocity.set(0, 0, 0)
  chassisBody.allowSleep = false
  // Lock pitch + roll. Only yaw allowed (for steering).
  chassisBody.angularFactor.set(0, 1, 0)
  chassisBody.angularDamping = 0.3
  // linearDamping doubles as our air-resistance proxy. With mass 1500 and
  // engine 13000N, this sets the top speed (~87 m/s ≈ 310 km/h).
  chassisBody.linearDamping = 0.10
  world.addBody(chassisBody)

  const vehicle = new CANNON.RaycastVehicle({
    chassisBody,
    indexRightAxis: 2,
    indexForwardAxis: 0,
    indexUpAxis: 1,
  })

  // Wheel params tuned for a 1500 kg sports car. Stiffness * compression *
  // mass = quarter-weight → equilibrium compression is independent of mass
  // (stays around 6 cm at stiffness 40), so the same stiffness works.
  // Damping and maxSuspensionForce scale up for the heavier load.
  // frictionSlip = 6 gives Porsche-like high-grip tire behaviour.
  const wheelOptions = {
    radius: WHEEL_RADIUS,
    directionLocal: new CANNON.Vec3(0, -1, 0),
    suspensionStiffness: 40,
    suspensionRestLength: 0.3,
    frictionSlip: 6,
    dampingRelaxation: 9,
    dampingCompression: 14,
    maxSuspensionForce: 500000,
    rollInfluence: 0.01,
    axleLocal: new CANNON.Vec3(0, 0, 1),
    chassisConnectionPointLocal: new CANNON.Vec3(),
    maxSuspensionTravel: 0.3,
    customSlidingRotationalSpeed: -30,
    useCustomSlidingRotationalSpeed: true,
  }

  for (const mount of WHEEL_MOUNTS) {
    wheelOptions.chassisConnectionPointLocal.copy(mount)
    vehicle.addWheel(wheelOptions)
  }

  vehicle.addToWorld(world)

  // --- Visuals ---
  const chassisGroup = new THREE.Group()
  scene.add(chassisGroup)

  const bodyMat = new THREE.MeshStandardMaterial({ color, metalness: 0.55, roughness: 0.35 })
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1d, metalness: 0.4, roughness: 0.6 })
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x2a3a55, metalness: 0.1, roughness: 0.15, transparent: true, opacity: 0.7 })

  const hood = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 1.95), bodyMat)
  hood.position.set(1.3, 0.0, 0)
  hood.castShadow = true
  chassisGroup.add(hood)

  const trunk = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.65, 1.95), bodyMat)
  trunk.position.set(-1.4, -0.025, 0)
  trunk.castShadow = true
  chassisGroup.add(trunk)

  const mid = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 1.95), bodyMat)
  mid.position.set(0, 0.05, 0)
  mid.castShadow = true
  chassisGroup.add(mid)

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.75, 1.78), bodyMat)
  cabin.position.set(0.15, 0.7, 0)
  cabin.castShadow = true
  chassisGroup.add(cabin)

  const sideWin = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.55, 0.02), glassMat)
  sideWin.position.set(0.15, 0.7, 0.9)
  chassisGroup.add(sideWin)
  const sideWin2 = sideWin.clone()
  sideWin2.position.z = -0.9
  chassisGroup.add(sideWin2)

  const frontWin = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.55, 1.65), glassMat)
  frontWin.position.set(1.16, 0.7, 0)
  chassisGroup.add(frontWin)
  const rearWin = frontWin.clone()
  rearWin.position.x = -0.86
  chassisGroup.add(rearWin)

  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 1.7), bodyMat)
  roof.position.set(0.15, 1.1, 0)
  roof.castShadow = true
  chassisGroup.add(roof)

  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.4, 1.95), trimMat)
  frontBumper.position.set(2.0, -0.15, 0)
  frontBumper.castShadow = true
  chassisGroup.add(frontBumper)

  const rearBumper = frontBumper.clone()
  rearBumper.position.x = -2.0
  chassisGroup.add(rearBumper)

  const headlightGeo = new THREE.SphereGeometry(0.18, 16, 10)
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfff5c2, emissive: 0xfff5c2, emissiveIntensity: 1.2 })
  for (const z of [-0.7, 0.7]) {
    const hl = new THREE.Mesh(headlightGeo, headlightMat)
    hl.position.set(1.98, 0.05, z)
    chassisGroup.add(hl)
  }

  const taillightMat = new THREE.MeshStandardMaterial({ color: 0xff3a3a, emissive: 0xff1010, emissiveIntensity: 0.8 })
  for (const z of [-0.7, 0.7]) {
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.18, 0.45), taillightMat)
    tl.position.set(-1.98, 0.1, z)
    chassisGroup.add(tl)
  }

  // Wheel meshes
  const wheelMeshes = []
  const tireGeo = new THREE.CylinderGeometry(WHEEL_RADIUS, WHEEL_RADIUS, WHEEL_WIDTH, 28)
  tireGeo.rotateX(Math.PI / 2)
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.85 })

  const hubGeo = new THREE.CylinderGeometry(WHEEL_RADIUS * 0.55, WHEEL_RADIUS * 0.55, WHEEL_WIDTH + 0.02, 12)
  hubGeo.rotateX(Math.PI / 2)
  const hubMat = new THREE.MeshStandardMaterial({ color: 0xb0b0b6, metalness: 0.85, roughness: 0.3 })
  const spokeMat = new THREE.MeshStandardMaterial({ color: 0x7a7a80, metalness: 0.7, roughness: 0.4 })

  for (let i = 0; i < 4; i++) {
    const w = new THREE.Group()
    const tire = new THREE.Mesh(tireGeo, tireMat)
    tire.castShadow = true
    w.add(tire)
    const hub = new THREE.Mesh(hubGeo, hubMat)
    w.add(hub)
    for (let s = 0; s < 3; s++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(WHEEL_RADIUS * 0.95, 0.04, 0.04), spokeMat)
      spoke.rotation.z = (s * Math.PI) / 3
      w.add(spoke)
    }
    scene.add(w)
    wheelMeshes.push(w)
  }

  // suspendVehicleControl: when true, applyInput zeroes wheel forces so
  // the ramp controller's direct chassis force isn't fought by suspension.
  let suspendVehicleControl = false
  function setSuspendVehicleControl(v) { suspendVehicleControl = v }

  function applyInput(inputState) {
    if (suspendVehicleControl) {
      for (let i = 0; i < 4; i++) {
        vehicle.applyEngineForce(0, i)
        vehicle.setSteeringValue(0, i)
        vehicle.setBrake(0, i)
      }
      return
    }

    const engineForce = inputState.forward
      ? MAX_ENGINE_FORCE
      : inputState.backward
        ? REVERSE_FORCE
        : 0

    // Speed-sensitive steering: less wheel turn at high speed = stable.
    const speedKmh = getSpeedKmh()
    const steerFactor = Math.max(
      STEER_MIN_FACTOR,
      1 - speedKmh / STEER_HIGH_SPEED_KMH * (1 - STEER_MIN_FACTOR)
    )
    const rawSteer = inputState.left ? MAX_STEER : inputState.right ? -MAX_STEER : 0
    const steer = rawSteer * steerFactor

    vehicle.applyEngineForce(engineForce, 2)
    vehicle.applyEngineForce(engineForce, 3)
    vehicle.setSteeringValue(steer, 0)
    vehicle.setSteeringValue(steer, 1)

    const brake = inputState.brake ? HANDBRAKE_FORCE : engineForce === 0 ? ROLLING_BRAKE : 0
    for (let i = 0; i < 4; i++) vehicle.setBrake(brake, i)
  }

  // Scratch vectors for ramp wheel placement
  const _wheelWorldMount = new CANNON.Vec3()

  function syncMeshes(rampOverride = null) {
    chassisGroup.position.copy(chassisBody.position)
    chassisGroup.quaternion.copy(chassisBody.quaternion)

    for (let i = 0; i < vehicle.wheelInfos.length; i++) {
      vehicle.updateWheelTransform(i)
      const t = vehicle.wheelInfos[i].worldTransform
      // Default: physics-determined position
      wheelMeshes[i].position.copy(t.position)
      wheelMeshes[i].quaternion.copy(t.quaternion)

      // Override Y when on a ramp: place wheel on the ramp surface.
      if (rampOverride && rampOverride.blendT > 0) {
        chassisBody.pointToWorldFrame(WHEEL_MOUNTS[i], _wheelWorldMount)
        const surfY = rampOverride.ramp.surfaceYAt(_wheelWorldMount.x, _wheelWorldMount.z)
        const targetY = surfY + WHEEL_RADIUS
        const blend = rampOverride.blendT
        wheelMeshes[i].position.x = _wheelWorldMount.x
        wheelMeshes[i].position.y = t.position.y * (1 - blend) + targetY * blend
        wheelMeshes[i].position.z = _wheelWorldMount.z
      }
    }
  }

  function setColor(c) {
    bodyMat.color.set(c)
  }

  function getSpeedKmh() {
    const v = chassisBody.velocity
    const speedMs = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
    return speedMs * 3.6
  }

  return {
    chassisBody,
    vehicle,
    chassisGroup,
    wheelMeshes,
    applyInput,
    syncMeshes,
    setColor,
    getSpeedKmh,
    setSuspendVehicleControl,
  }
}
