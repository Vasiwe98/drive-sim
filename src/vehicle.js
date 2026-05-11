import * as CANNON from 'cannon-es'
import * as THREE from 'three'

// Convention: +X is forward (headlights / hood), +Y is up, +Z is left.
// W produces positive engine force, pushing the car in +X.
const MAX_STEER = 0.5
const MAX_ENGINE_FORCE = 2200
const REVERSE_FORCE = -1000
const HANDBRAKE_FORCE = 1000000
const ROLLING_BRAKE = 4

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
  const chassisBody = new CANNON.Body({ mass: 220 })
  // Collider offset 0.5m up so it sits at cabin level — well above any
  // ramp's leading edge. Wheels hang at chassis local y=-0.15 and raycast
  // freely down through empty space.
  chassisBody.addShape(chassisShape, new CANNON.Vec3(0, 0.5, 0))
  chassisBody.position.copy(spawnPos)
  chassisBody.angularVelocity.set(0, 0, 0)
  chassisBody.allowSleep = false
  // Lock pitch + roll. Only yaw allowed (for steering). The chassis stays
  // visually horizontal — ramps are handled by rampController.js which
  // drives the chassis Y position directly when the car is in a ramp zone.
  chassisBody.angularFactor.set(0, 1, 0)
  chassisBody.angularDamping = 0.3
  world.addBody(chassisBody)

  const vehicle = new CANNON.RaycastVehicle({
    chassisBody,
    indexRightAxis: 2,
    indexForwardAxis: 0,
    indexUpAxis: 1,
  })

  const wheelOptions = {
    radius: WHEEL_RADIUS,
    directionLocal: new CANNON.Vec3(0, -1, 0),
    suspensionStiffness: 40,
    suspensionRestLength: 0.3,
    frictionSlip: 2.5,
    dampingRelaxation: 5,
    dampingCompression: 8,
    maxSuspensionForce: 100000,
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
      // Zero out wheel state so cannon doesn't apply residual forces.
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

    const steer = inputState.left ? MAX_STEER : inputState.right ? -MAX_STEER : 0

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
