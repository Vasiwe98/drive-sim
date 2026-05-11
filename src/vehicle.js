import * as CANNON from 'cannon-es'
import * as THREE from 'three'

// Verbatim from cannon-es examples/raycast_vehicle.html — do not invent.
const MAX_STEER = 0.5
const MAX_ENGINE_FORCE = 1500
const REVERSE_FORCE = -700
const HANDBRAKE_FORCE = 1000000
const ROLLING_BRAKE = 5 // tiny brake when not accelerating, prevents perpetual coasting

const CHASSIS_HALF = { x: 2, y: 0.5, z: 1 } // matches CANNON.Box half-extents
const WHEEL_RADIUS = 0.5
const WHEEL_WIDTH = 0.3

export function createVehicle(world, scene, spawnPos = new CANNON.Vec3(0, 4, 0), color = 0xff6b35) {
  const chassisShape = new CANNON.Box(new CANNON.Vec3(CHASSIS_HALF.x, CHASSIS_HALF.y, CHASSIS_HALF.z))
  const chassisBody = new CANNON.Body({ mass: 150 })
  chassisBody.addShape(chassisShape)
  chassisBody.position.copy(spawnPos)
  chassisBody.angularVelocity.set(0, 0, 0)
  world.addBody(chassisBody)

  const vehicle = new CANNON.RaycastVehicle({
    chassisBody,
    indexRightAxis: 2, // Z
    indexForwardAxis: 0, // X
    indexUpAxis: 1, // Y
  })

  const wheelOptions = {
    radius: WHEEL_RADIUS,
    directionLocal: new CANNON.Vec3(0, -1, 0),
    suspensionStiffness: 30,
    suspensionRestLength: 0.3,
    frictionSlip: 1.4,
    dampingRelaxation: 2.3,
    dampingCompression: 4.4,
    maxSuspensionForce: 100000,
    rollInfluence: 0.01,
    axleLocal: new CANNON.Vec3(0, 0, 1),
    chassisConnectionPointLocal: new CANNON.Vec3(),
    maxSuspensionTravel: 0.3,
    customSlidingRotationalSpeed: -30,
    useCustomSlidingRotationalSpeed: true,
  }

  // Indices: 0=FL, 1=FR, 2=RL, 3=RR. -X is "front" in this convention.
  wheelOptions.chassisConnectionPointLocal.set(-1, 0, 1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(-1, 0, -1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(1, 0, 1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(1, 0, -1)
  vehicle.addWheel(wheelOptions)

  vehicle.addToWorld(world)

  // --- Visuals ---
  const chassisGroup = new THREE.Group()
  scene.add(chassisGroup)

  // Main body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(CHASSIS_HALF.x * 2, CHASSIS_HALF.y * 2, CHASSIS_HALF.z * 2),
    new THREE.MeshStandardMaterial({ color, metalness: 0.3, roughness: 0.5 })
  )
  body.castShadow = true
  chassisGroup.add(body)

  // Cabin/roof — a smaller box on top, slightly forward (toward -X).
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(2, 0.7, 1.7),
    new THREE.MeshStandardMaterial({ color: 0x222233, metalness: 0.2, roughness: 0.4 })
  )
  cabin.position.set(-0.3, 0.85, 0)
  cabin.castShadow = true
  chassisGroup.add(cabin)

  // Headlight markers on the -X (forward) face so direction is obvious.
  const headlightGeo = new THREE.SphereGeometry(0.15, 12, 8)
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfff2a0, emissive: 0xfff2a0, emissiveIntensity: 0.8 })
  for (const z of [-0.7, 0.7]) {
    const hl = new THREE.Mesh(headlightGeo, headlightMat)
    hl.position.set(-CHASSIS_HALF.x + 0.05, 0, z)
    chassisGroup.add(hl)
  }

  // Wheels: CylinderGeometry default axis is Y. Cannon's wheel local frame
  // puts the axle along its local X (built from axleLocal). Rotate the
  // geometry once so Y→X; the per-frame quaternion from updateWheelTransform
  // then orients it correctly in world space.
  const wheelMeshes = []
  const wheelGeo = new THREE.CylinderGeometry(WHEEL_RADIUS, WHEEL_RADIUS, WHEEL_WIDTH, 24)
  wheelGeo.rotateZ(Math.PI / 2)
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 })

  for (let i = 0; i < 4; i++) {
    const m = new THREE.Mesh(wheelGeo, wheelMat)
    m.castShadow = true
    scene.add(m)
    wheelMeshes.push(m)
  }

  function applyInput(inputState) {
    const engineForce = inputState.forward
      ? -MAX_ENGINE_FORCE
      : inputState.backward
        ? -REVERSE_FORCE
        : 0

    const steer = inputState.left ? MAX_STEER : inputState.right ? -MAX_STEER : 0

    vehicle.applyEngineForce(engineForce, 2)
    vehicle.applyEngineForce(engineForce, 3)

    vehicle.setSteeringValue(steer, 0)
    vehicle.setSteeringValue(steer, 1)

    const brake = inputState.brake ? HANDBRAKE_FORCE : engineForce === 0 ? ROLLING_BRAKE : 0
    for (let i = 0; i < 4; i++) vehicle.setBrake(brake, i)
  }

  function syncMeshes() {
    chassisGroup.position.copy(chassisBody.position)
    chassisGroup.quaternion.copy(chassisBody.quaternion)

    for (let i = 0; i < vehicle.wheelInfos.length; i++) {
      vehicle.updateWheelTransform(i)
      const t = vehicle.wheelInfos[i].worldTransform
      wheelMeshes[i].position.copy(t.position)
      wheelMeshes[i].quaternion.copy(t.quaternion)
    }
  }

  function setColor(c) {
    body.material.color.set(c)
  }

  return { chassisBody, vehicle, chassisGroup, wheelMeshes, applyInput, syncMeshes, setColor }
}
