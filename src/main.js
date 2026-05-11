import * as THREE from 'three'
import CannonDebugger from 'cannon-es-debugger'
import { createScene } from './scene.js'
import { createPhysicsWorld } from './physics.js'
import { createVehicle } from './vehicle.js'
import { buildWorld } from './world.js'
import { CameraRig } from './cameras.js'
import { createRampController } from './rampController.js'
import { input } from './input.js'
import { ui, onStop, onStart } from './ui.js'
import { createDebugPanel, updateDebugPanel } from './debug.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls } = createScene(canvas)
const { world, step } = createPhysicsWorld()

const useDebugger = new URLSearchParams(location.search).has('debug')
const cannonDebugger = useDebugger ? new CannonDebugger(scene, world, { color: 0xff00ff }) : null

const { spawnPos, ramps } = buildWorld(scene, world)
const car = createVehicle(world, scene, spawnPos)
const rampController = createRampController(car, ramps, input)

const cameraRig = new CameraRig(camera, controls)
cameraRig.setTarget(car.chassisBody)

createDebugPanel(true)

function resetCar() {
  car.chassisBody.position.copy(spawnPos)
  car.chassisBody.velocity.setZero()
  car.chassisBody.angularVelocity.setZero()
  car.chassisBody.quaternion.set(0, 0, 0, 1)
  for (const w of car.vehicle.wheelInfos) {
    w.steering = 0
    w.rotation = 0
    w.brake = 0
    w.engineForce = 0
  }
  car.setSuspendVehicleControl(false)
}

onStop(resetCar)
onStart(resetCar)

let lastMode = -1
const clock = new THREE.Clock()

function loop() {
  const dt = Math.min(clock.getDelta(), 0.1)

  // Order matters:
  // 1. Ramp controller updates first: figures out if we're on a ramp,
  //    sets suspendVehicleControl, and applies direct chassis forces.
  // 2. applyInput respects suspendVehicleControl (zeros wheel forces while
  //    on a ramp so cannon's suspension doesn't fight the controller).
  // 3. Physics step.
  // 4. Sync visual meshes (wheel meshes may be overridden by ramp surface).
  if (ui.isStarted()) {
    rampController.update(dt)
    car.applyInput(input)
  }
  step(dt)
  car.syncMeshes(rampController.getOverride())
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
