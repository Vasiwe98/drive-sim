import * as THREE from 'three'
import CannonDebugger from 'cannon-es-debugger'
import { createScene } from './scene.js'
import { createPhysicsWorld } from './physics.js'
import { createVehicle } from './vehicle.js'
import { buildWorld } from './world.js'
import { CameraRig } from './cameras.js'
import { input } from './input.js'
import { ui } from './ui.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls } = createScene(canvas)
const { world, step } = createPhysicsWorld()

const useDebugger = new URLSearchParams(location.search).has('debug')
const cannonDebugger = useDebugger ? new CannonDebugger(scene, world, { color: 0xff00ff }) : null

const { spawnPos } = buildWorld(scene, world)
const car = createVehicle(world, scene, spawnPos)

const cameraRig = new CameraRig(camera, controls)
cameraRig.setTarget(car.chassisBody)

const clock = new THREE.Clock()

function loop() {
  const dt = Math.min(clock.getDelta(), 0.1)

  if (ui.isStarted()) car.applyInput(input)
  step(dt)
  car.syncMeshes()
  cameraRig.update(dt)

  if (cannonDebugger) cannonDebugger.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
loop()
