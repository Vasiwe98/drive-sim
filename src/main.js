import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import { createScene } from './scene.js'
import { createPhysicsWorld } from './physics.js'
import { createVehicle } from './vehicle.js'
import { input } from './input.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls } = createScene(canvas)
const { world, step } = createPhysicsWorld()

const cannonDebugger = new CannonDebugger(scene, world, { color: 0xff00ff })

// Vehicle. spawnPos will eventually come from buildWorld(); for now use a default.
const spawnPos = new CANNON.Vec3(0, 4, 0)
const { chassisBody, vehicle, update: updateVehicle } = createVehicle(world, scene, spawnPos)

// Temporary chassis mesh until Task 4 wires up proper visuals (chassis + wheels).
const chassisMesh = new THREE.Mesh(
  new THREE.BoxGeometry(4, 1, 2),
  new THREE.MeshStandardMaterial({ color: 0xff6b35 })
)
chassisMesh.castShadow = true
scene.add(chassisMesh)

// Aim OrbitControls at the car so it stays in frame while we test driving.
controls.target.copy(chassisBody.position)

const clock = new THREE.Clock()

function loop() {
  const dt = Math.min(clock.getDelta(), 0.1)

  updateVehicle(input, dt)
  step(dt)

  chassisMesh.position.copy(chassisBody.position)
  chassisMesh.quaternion.copy(chassisBody.quaternion)

  controls.target.lerp(chassisBody.position, 0.1)

  cannonDebugger.update()
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
loop()
