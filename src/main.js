import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import { createScene } from './scene.js'
import { createPhysicsWorld } from './physics.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls } = createScene(canvas)
const { world, step } = createPhysicsWorld()

const cannonDebugger = new CannonDebugger(scene, world, { color: 0xff00ff })

// Temporary test box — falls onto the ground to confirm physics is wired up.
// Will be removed in Task 3 when the vehicle replaces it.
const boxBody = new CANNON.Body({
  mass: 5,
  shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
})
boxBody.position.set(0, 8, 0)
world.addBody(boxBody)

const boxMesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xff6b35 })
)
boxMesh.castShadow = true
scene.add(boxMesh)

const clock = new THREE.Clock()

function loop() {
  const dt = Math.min(clock.getDelta(), 0.1)
  step(dt)

  boxMesh.position.copy(boxBody.position)
  boxMesh.quaternion.copy(boxBody.quaternion)

  cannonDebugger.update()
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
loop()
