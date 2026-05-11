import * as CANNON from 'cannon-es'

export function createPhysicsWorld() {
  const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.82, 0),
  })
  world.broadphase = new CANNON.SAPBroadphase(world)
  world.allowSleep = true

  const groundMaterial = new CANNON.Material('ground')
  const groundBody = new CANNON.Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Plane(),
    material: groundMaterial,
  })
  groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
  world.addBody(groundBody)

  function step(dt) {
    world.step(1 / 60, dt, 3)
  }

  return { world, step, groundMaterial }
}
