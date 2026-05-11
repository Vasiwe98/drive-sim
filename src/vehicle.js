import * as CANNON from 'cannon-es'

// Verbatim from cannon-es examples/raycast_vehicle.html — do not invent.
const MAX_STEER = 0.5
const MAX_ENGINE_FORCE = 1500
const REVERSE_FORCE = -700
const HANDBRAKE_FORCE = 1000000
const ROLLING_BRAKE = 5 // tiny brake when not accelerating, prevents perpetual coasting

export function createVehicle(world, scene, spawnPos = new CANNON.Vec3(0, 4, 0)) {
  const chassisShape = new CANNON.Box(new CANNON.Vec3(2, 0.5, 1))
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
    radius: 0.5,
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

  // Wheel positions in chassis local space. Convention from cannon-es example:
  // X is forward axis. FL=(-1,0,1) makes -X the forward direction.
  // Indices: 0=FL, 1=FR, 2=RL, 3=RR. Front wheels steer; rear wheels drive.
  wheelOptions.chassisConnectionPointLocal.set(-1, 0, 1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(-1, 0, -1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(1, 0, 1)
  vehicle.addWheel(wheelOptions)
  wheelOptions.chassisConnectionPointLocal.set(1, 0, -1)
  vehicle.addWheel(wheelOptions)

  vehicle.addToWorld(world)

  function update(inputState, dt) {
    const engineForce = inputState.forward
      ? -MAX_ENGINE_FORCE // -X is forward in this convention
      : inputState.backward
        ? -REVERSE_FORCE // negate the negation: reverse = +X
        : 0

    const steer = inputState.left ? MAX_STEER : inputState.right ? -MAX_STEER : 0

    // Rear-wheel drive
    vehicle.applyEngineForce(engineForce, 2)
    vehicle.applyEngineForce(engineForce, 3)

    // Front-wheel steer
    vehicle.setSteeringValue(steer, 0)
    vehicle.setSteeringValue(steer, 1)

    // Brake: handbrake on space, otherwise tiny rolling drag
    const brake = inputState.brake ? HANDBRAKE_FORCE : engineForce === 0 ? ROLLING_BRAKE : 0
    for (let i = 0; i < 4; i++) vehicle.setBrake(brake, i)
  }

  return { chassisBody, vehicle, update }
}
