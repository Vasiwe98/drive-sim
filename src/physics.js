import * as CANNON from 'cannon-es'

export function createPhysicsWorld() {
  const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.82, 0),
  })
  world.broadphase = new CANNON.SAPBroadphase(world)
  world.allowSleep = true

  const groundMaterial = new CANNON.Material('ground')
  // Use a large Box rather than CANNON.Plane — Plane has had raycast
  // quirks in some configurations (wheels failing to register contact).
  // 500x1x500 box centered at y=-0.5 has its top face at y=0, identical
  // surface to the Plane but with reliable raycast hits.
  const groundBody = new CANNON.Body({
    type: CANNON.Body.STATIC,
    shape: new CANNON.Box(new CANNON.Vec3(250, 0.5, 250)),
    material: groundMaterial,
  })
  groundBody.position.set(0, -0.5, 0)
  world.addBody(groundBody)

  function step(dt) {
    world.step(1 / 60, dt, 3)
  }

  return { world, step, groundMaterial }
}
