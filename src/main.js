import * as THREE from 'three'
import CannonDebugger from 'cannon-es-debugger'
import { createScene } from './scene.js'
import { createPhysicsWorld } from './physics.js'
import { createVehicle } from './vehicle.js'
import { buildWorld } from './world.js'
import { CameraRig } from './cameras.js'
import { input } from './input.js'
import { ui, onStop, onStart } from './ui.js'
import { createDebugPanel, updateDebugPanel } from './debug.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls } = createScene(canvas)
const { world, step } = createPhysicsWorld()

const useDebugger = new URLSearchParams(location.search).has('debug')
const cannonDebugger = useDebugger ? new CannonDebugger(scene, world, { color: 0xff00ff }) : null

const { spawnPos } = buildWorld(scene, world)
const car = createVehicle(world, scene, spawnPos)

const cameraRig = new CameraRig(camera, controls)
cameraRig.setTarget(car.chassisBody)

// Always-on debug panel — left side — so we can diagnose live state.
// Hide later by passing false / making conditional once driving works.
createDebugPanel(true)

function resetCar() {
  car.chassisBody.position.copy(spawnPos)
  car.chassisBody.velocity.setZero()
  car.chassisBody.angularVelocity.setZero()
  car.chassisBody.quaternion.set(0, 0, 0, 1)
  // Reset wheel angular state too
  for (const w of car.vehicle.wheelInfos) {
    w.steering = 0
    w.rotation = 0
    w.brake = 0
    w.engineForce = 0
  }
}

onStop(resetCar)
onStart(resetCar) // any pre-Start drift is wiped before the user takes control

let lastMode = -1
const clock = new THREE.Clock()

function loop() {
  const dt = Math.min(clock.getDelta(), 0.1)

  if (ui.isStarted()) car.applyInput(input)
  step(dt)
  car.syncMeshes()
  cameraRig.update(dt)

  if (cameraRig.mode !== lastMode) {
    lastMode = cameraRig.mode
    ui.setCameraMode(cameraRig.getModeName())
  }
  ui.setSpeed(car.getSpeedKmh())
  updateDebugPanel(car)

  if (cannonDebugger) cannonDebugger.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
loop()
