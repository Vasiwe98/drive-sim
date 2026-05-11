import * as CANNON from 'cannon-es'
import * as THREE from 'three'

// Tuned for smooth arcade feel — derived from cannon-es example then adjusted.
const MAX_STEER = 0.5
const MAX_ENGINE_FORCE = 2500   // bumped from 1500; with frictionSlip=5 we have grip to use it
const REVERSE_FORCE = -1200
const HANDBRAKE_FORCE = 1000000
const ROLLING_BRAKE = 4

const CHASSIS_HALF = { x: 2, y: 0.5, z: 1 }
const WHEEL_RADIUS = 0.5
const WHEEL_WIDTH = 0.35

export function createVehicle(world, scene, spawnPos = new CANNON.Vec3(0, 4, 0), color = 0xc23b22) {
  const chassisShape = new CANNON.Box(new CANNON.Vec3(CHASSIS_HALF.x, CHASSIS_HALF.y, CHASSIS_HALF.z))
  const chassisBody = new CANNON.Body({ mass: 220 })
  chassisBody.addShape(chassisShape)
  chassisBody.position.copy(spawnPos)
  chassisBody.angularVelocity.set(0, 0, 0)
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
    suspensionStiffness: 30,
    suspensionRestLength: 0.35,
    frictionSlip: 5,        // bumped from 1.4 — wheels grip instead of slipping
    dampingRelaxation: 2.3,
    dampingCompression: 4.4,
    maxSuspensionForce: 100000,
    rollInfluence: 0.01,
    axleLocal: new CANNON.Vec3(0, 0, 1),
    chassisConnectionPointLocal: new CANNON.Vec3(),
    maxSuspensionTravel: 0.5,
    useCustomSlidingRotationalSpeed: false,
  }

  // Indices 0=FL, 1=FR, 2=RL, 3=RR. -X is forward (cabin/headlights side).
  wheelOptions.chassisConnectionPointLocal.set(-1, 0, 1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(-1, 0, -1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(1, 0, 1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(1, 0, -1)
  vehicle.addWheel(wheelOptions)

  vehicle.addToWorld(world)

  // --- Visuals
  const chassisGroup = new THREE.Group()
  scene.add(chassisGroup)

  const bodyMat = new THREE.MeshStandardMaterial({ color, metalness: 0.55, roughness: 0.35 })
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1d, metalness: 0.4, roughness: 0.6 })
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x2a3a55, metalness: 0.1, roughness: 0.15, transparent: true, opacity: 0.7 })

  const hood = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 1.95), bodyMat)
  hood.position.set(-1.3, 0.0, 0)
  hood.castShadow = true
  chassisGroup.add(hood)

  const trunk = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.65, 1.95), bodyMat)
  trunk.position.set(1.4, -0.025, 0)
  trunk.castShadow = true
  chassisGroup.add(trunk)

  const mid = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 1.95), bodyMat)
  mid.position.set(0, 0.05, 0)
  mid.castShadow = true
  chassisGroup.add(mid)

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.75, 1.78), bodyMat)
  cabin.position.set(-0.15, 0.7, 0)
  cabin.castShadow = true
  chassisGroup.add(cabin)

  const sideWin = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.55, 0.02), glassMat)
  sideWin.position.set(-0.15, 0.7, 0.9)
  chassisGroup.add(sideWin)
  const sideWin2 = sideWin.clone()
  sideWin2.position.z = -0.9
  chassisGroup.add(sideWin2)

  const frontWin = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.55, 1.65), glassMat)
  frontWin.position.set(-1.16, 0.7, 0)
  chassisGroup.add(frontWin)
  const rearWin = frontWin.clone()
  rearWin.position.x = 0.86
  chassisGroup.add(rearWin)

  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 1.7), bodyMat)
  roof.position.set(-0.15, 1.1, 0)
  roof.castShadow = true
  chassisGroup.add(roof)

  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.4, 1.95), trimMat)
  frontBumper.position.set(-2.0, -0.15, 0)
  frontBumper.castShadow = true
  chassisGroup.add(frontBumper)

  const rearBumper = frontBumper.clone()
  rearBumper.position.x = 2.0
  chassisGroup.add(rearBumper)

  const headlightGeo = new THREE.SphereGeometry(0.18, 16, 10)
  const headlightMat = new THREE.MeshStandardMaterial({ color: 0xfff5c2, emissive: 0xfff5c2, emissiveIntensity: 1.2 })
  for (const z of [-0.7, 0.7]) {
    const hl = new THREE.Mesh(headlightGeo, headlightMat)
    hl.position.set(-1.98, 0.05, z)
    chassisGroup.add(hl)
  }

  const taillightMat = new THREE.MeshStandardMaterial({ color: 0xff3a3a, emissive: 0xff1010, emissiveIntensity: 0.8 })
  for (const z of [-0.7, 0.7]) {
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.18, 0.45), taillightMat)
    tl.position.set(1.98, 0.1, z)
    chassisGroup.add(tl)
  }

  // Wheels: pre-rotate CylinderGeometry so its (Y) axis aligns with the
  // cannon wheel's local axle direction (Z, because axleLocal=(0,0,1)).
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
    bodyMat.color.set(c)
  }

  function getSpeedKmh() {
    const v = chassisBody.velocity
    const speedMs = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
    return speedMs * 3.6
  }

  return { chassisBody, vehicle, chassisGroup, wheelMeshes, applyInput, syncMeshes, setColor, getSpeedKmh }
}
