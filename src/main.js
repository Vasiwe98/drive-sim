import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import { createScene } from './scene.js'
import { createPhysicsWorld } from './physics.js'
import { createVehicle } from './vehicle.js'
import { buildWorld } from './world.js'
import { CameraRig } from './cameras.js'
import { createRampController } from './rampController.js'
import { input, onKeyDownOnce } from './input.js'
import { ui, onStop, onStart } from './ui.js'
import { createDebugPanel, updateDebugPanel } from './debug.js'
import { loadSettings, onSettingsChange } from './settings.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls, setTimeOfDay } = createScene(canvas)
const { world, step } = createPhysicsWorld()

const initialSettings = loadSettings()
setTimeOfDay(initialSettings.time)

// Cannon debugger: wrap in a group so we can toggle wireframe visibility
// without recreating it. Press P at runtime to flip.
const debugGroup = new THREE.Group()
scene.add(debugGroup)
const cannonDebugger = new CannonDebugger(debugGroup, world, { color: 0xff00ff })
debugGroup.visible = false
onKeyDownOnce('KeyP', () => { debugGroup.visible = !debugGroup.visible })

const { spawnPos: defaultSpawn, ramps } = buildWorld(scene, world)

// Isolation test: ?spawn=deck drops the car 5m above the bridge deck centre.
// Bypasses every ramp entirely. If the car still sinks here, the bug is in
// the deck/suspension/collider — not the ramp→deck transition.
const spawnMode = new URLSearchParams(location.search).get('spawn')
const spawnPos = spawnMode === 'deck'
  ? new CANNON.Vec3(0, 5, -70)
  : defaultSpawn

const car = createVehicle(world, scene, spawnPos, initialSettings.color, initialSettings.style)
const rampController = createRampController(car, ramps, input)

onSettingsChange((s) => {
  car.setColor(s.color)
  car.setBodyStyle(s.style)
  setTimeOfDay(s.time)
})

const cameraRig = new CameraRig(camera, controls)
cameraRig.setTarget(car.chassisBody)

createDebugPanel(true)

// Spawn facing -Z so the bridge entry ramp (z=-33 → z=-55) is dead-ahead
// and the deck spawn variant points the car straight at the descent ramp.
// Per chassis convention (+X = forward, rotation about +Y by yaw rotates
// +X toward +Z), yaw=+π/2 puts chassis-forward = -Z world.
const SPAWN_YAW = Math.PI / 2
const _yAxis = new CANNON.Vec3(0, 1, 0)

function resetCar() {
  car.chassisBody.position.copy(spawnPos)
  car.chassisBody.velocity.setZero()
  car.chassisBody.angularVelocity.setZero()
  car.chassisBody.quaternion.setFromAxisAngle(_yAxis, SPAWN_YAW)
  for (const w of car.vehicle.wheelInfos) {
    w.steering = 0
    w.rotation = 0
    w.brake = 0
    w.engineForce = 0
  }
  car.setSuspendVehicleControl(false)
}

// Apply spawn pose immediately so the very first rendered frame already
// has the car oriented correctly — without this the car shows facing +X
// for a moment until the user clicks Start.
resetCar()

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
