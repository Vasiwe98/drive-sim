import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import { createScene } from './scene.js'
import { createPhysicsWorld } from './physics.js'
import { createVehicle } from './vehicle.js'
import { input } from './input.js'
import { ui } from './ui.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls } = createScene(canvas)
const { world, step } = createPhysicsWorld()

const useDebugger = new URLSearchParams(location.search).has('debug')
const cannonDebugger = useDebugger ? new CannonDebugger(scene, world, { color: 0xff00ff }) : null

const spawnPos = new CANNON.Vec3(0, 4, 0)
const car = createVehicle(world, scene, spawnPos)

controls.target.copy(car.chassisBody.position)

const clock = new THREE.Clock()

function loop() {
  const dt = Math.min(clock.getDelta(), 0.1)

  if (ui.isStarted()) car.applyInput(input)
  step(dt)
  car.syncMeshes()

  controls.target.lerp(car.chassisBody.position, 0.1)

  if (cannonDebugger) cannonDebugger.update()
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
loop()
