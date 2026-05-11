// Procedural arcade playground: roads (visual only), drivable ramps
// (visual + scripted via rampController), a bridge with supports and
// approach ramps, jump pads, invisible boundary walls.
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

const COLOR_ASPHALT = 0x2a2a2e
const COLOR_LANE = 0x3a3a40
const COLOR_RAMP = 0x8a6a3a
const COLOR_BRIDGE_DECK = 0x6a5a4a
const COLOR_SUPPORT = 0x55525a
const COLOR_PAD = 0xff4d3a

const ARENA_SIZE = 200

// Add a box to physics + scene. `physics: false` makes it visual-only.
export function addStaticBox(world, scene, pos, size, rot = null, color = null, physics = true) {
  let body = null
  if (physics) {
    const halfExtents = new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2)
    body = new CANNON.Body({ mass: 0, shape: new CANNON.Box(halfExtents) })
    body.position.set(pos.x, pos.y, pos.z)
    if (rot) body.quaternion.setFromEuler(rot.x || 0, rot.y || 0, rot.z || 0, 'XYZ')
    world.addBody(body)
  }

  let mesh = null
  if (color !== null) {
    const geom = new THREE.BoxGeometry(size.x, size.y, size.z)
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0.05 })
    mesh = new THREE.Mesh(geom, mat)
    mesh.position.set(pos.x, pos.y, pos.z)
    if (rot) {
      const e = new THREE.Euler(rot.x || 0, rot.y || 0, rot.z || 0, 'XYZ')
      mesh.quaternion.setFromEuler(e)
    }
    mesh.castShadow = physics
    mesh.receiveShadow = true
    scene.add(mesh)
  }
  return { body, mesh }
}

// Build a ramp's VISUAL mesh (a tilted thin box) and return a declarative
// descriptor that the ramp controller uses to drive the chassis along the
// slope. Ramps have NO physics body — chassis interaction is handled by
// rampController.js per frame. This avoids all the wedging/wheel-raycast
// pathologies of treating tilted boxes as physics colliders.
//
// `axis`: 'x' or 'z' — which horizontal axis the ramp climbs along.
// `low`, `high`: world positions of the two end CENTERS of the top surface.
// `width`: perpendicular full-extent of the ramp.
function defineRamp(scene, ramps, opts) {
  const { axis, low, high, width = 10, thickness = 0.4, color = COLOR_RAMP } = opts

  const dy = high.y - low.y
  const dAxis = axis === 'x' ? high.x - low.x : high.z - low.z
  const slopeLen = Math.sqrt(dy * dy + dAxis * dAxis)

  // Visual mesh: a tilted thin box
  const mesh = new THREE.Mesh(
    axis === 'x'
      ? new THREE.BoxGeometry(slopeLen, thickness, width)
      : new THREE.BoxGeometry(width, thickness, slopeLen),
    new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0.05 })
  )
  const tx = (low.x + high.x) / 2
  const ty = (low.y + high.y) / 2
  const tz = (low.z + high.z) / 2
  // Slide the box center perpendicular-down by thickness/2 so its TOP face
  // lies on the (low→high) line.
  if (axis === 'x') {
    const cx = tx - (thickness / 2) * (dy / slopeLen) * Math.sign(dAxis)
    const cy = ty - (thickness / 2) * Math.abs(dAxis) / slopeLen
    mesh.position.set(cx, cy, tz)
    mesh.rotation.z = Math.asin(dy / slopeLen) * Math.sign(dAxis)
  } else {
    const cy = ty - (thickness / 2) * Math.abs(dAxis) / slopeLen
    const cz = tz + (thickness / 2) * (dy / slopeLen) * Math.sign(dAxis)
    mesh.position.set(tx, cy, cz)
    mesh.rotation.x = -Math.asin(dy / slopeLen) * Math.sign(dAxis)
  }
  mesh.castShadow = true
  mesh.receiveShadow = true
  scene.add(mesh)

  // Descriptor for the ramp controller
  const axisLow = axis === 'x' ? low.x : low.z
  const axisHigh = axis === 'x' ? high.x : high.z
  const axisMin = Math.min(axisLow, axisHigh)
  const axisMax = Math.max(axisLow, axisHigh)
  const perpCenter = axis === 'x' ? low.z : low.x
  const perpMin = perpCenter - width / 2
  const perpMax = perpCenter + width / 2
  const axisSpan = axisHigh - axisLow // signed
  const pitchAngle = Math.atan2(dy, Math.abs(axisSpan))

  const ramp = {
    axis,
    low: { x: low.x, y: low.y, z: low.z },
    high: { x: high.x, y: high.y, z: high.z },
    width,
    axisMin,
    axisMax,
    perpMin,
    perpMax,
    pitchAngle,           // absolute slope angle, magnitude
    axisSign: Math.sign(axisSpan),  // +1 if high is at higher axis coord
    contains(x, z) {
      if (axis === 'x') {
        return x >= axisMin && x <= axisMax && z >= perpMin && z <= perpMax
      }
      return z >= axisMin && z <= axisMax && x >= perpMin && x <= perpMax
    },
    surfaceYAt(x, z) {
      const axisCoord = axis === 'x' ? x : z
      let t = (axisCoord - axisLow) / axisSpan
      if (t < 0) t = 0
      else if (t > 1) t = 1
      return low.y + t * dy
    },
    mesh,
  }

  ramps.push(ramp)
  return ramp
}

// Invisible launch zone — sensor that fires an upward impulse on the chassis
// when it passes through. Impulse scales with horizontal speed.
function addLaunchZone(world, pos, opts = {}) {
  const { sizeX = 3, sizeY = 2, sizeZ = 8, impulsePerSpeed = 110, cooldownMs = 1200 } = opts
  const sensor = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Box(new CANNON.Vec3(sizeX / 2, sizeY / 2, sizeZ / 2)),
    collisionResponse: false,
  })
  sensor.position.set(pos.x, pos.y, pos.z)
  world.addBody(sensor)

  let armed = true
  sensor.addEventListener('collide', (event) => {
    if (!armed) return
    const other = event.body
    if (!other || other.mass === 0) return
    armed = false
    setTimeout(() => { armed = true }, cooldownMs)
    const v = other.velocity
    const horizontalSpeed = Math.sqrt(v.x * v.x + v.z * v.z)
    const impulse = new CANNON.Vec3(0, horizontalSpeed * impulsePerSpeed, 0)
    other.applyImpulse(impulse)
  })
}

// Decorative pad + sensor that launches the car upward on touch.
function addJumpPad(world, scene, pos) {
  const plateGeom = new THREE.BoxGeometry(5, 0.15, 5)
  const plateMat = new THREE.MeshStandardMaterial({
    color: COLOR_PAD,
    emissive: 0xff2a00,
    emissiveIntensity: 0.65,
    roughness: 0.4,
    metalness: 0.1,
  })
  const plate = new THREE.Mesh(plateGeom, plateMat)
  plate.position.set(pos.x, 0.08, pos.z)
  plate.receiveShadow = true
  scene.add(plate)

  const sensorShape = new CANNON.Box(new CANNON.Vec3(2.5, 1.5, 2.5))
  const sensor = new CANNON.Body({ mass: 0, shape: sensorShape, collisionResponse: false })
  sensor.position.set(pos.x, 1.5, pos.z)
  world.addBody(sensor)

  const impulse = new CANNON.Vec3(0, 3500, 0)
  let armed = true
  sensor.addEventListener('collide', (event) => {
    if (!armed) return
    const other = event.body
    if (!other || other.mass === 0) return
    armed = false
    setTimeout(() => { armed = true }, 700)
    other.applyImpulse(impulse)
  })
}

export function buildWorld(scene, world) {
  const ramps = []

  // --- Roads (VISUAL ONLY)
  addStaticBox(world, scene, { x: 0, y: 0.05, z: 0 }, { x: 8, y: 0.1, z: 180 }, null, COLOR_ASPHALT, false)
  addStaticBox(world, scene, { x: 0, y: 0.06, z: 0 }, { x: 180, y: 0.1, z: 8 }, null, COLOR_LANE, false)
  addStaticBox(world, scene, { x: 40, y: 0.05, z: -30 }, { x: 80, y: 0.1, z: 6 }, null, COLOR_ASPHALT, false)
  addStaticBox(world, scene, { x: -40, y: 0.05, z: 40 }, { x: 60, y: 0.1, z: 6 }, null, COLOR_ASPHALT, false)

  // --- FEATURED LAUNCH RAMP: directly ahead of spawn (+X). Scripted ramp.
  defineRamp(scene, ramps, {
    axis: 'x',
    low: { x: 14, y: 0.05, z: 0 },
    high: { x: 32, y: 3, z: 0 },
    width: 14,
    color: 0xd92e2e,
  })
  addLaunchZone(world, { x: 33.5, y: 3.5, z: 0 }, { impulsePerSpeed: 130 })

  // --- Other ramps (all scripted)
  defineRamp(scene, ramps, {
    axis: 'z',
    low: { x: 30, y: 0.05, z: 14 },
    high: { x: 30, y: 3, z: 32 },
    width: 10,
  })
  defineRamp(scene, ramps, {
    axis: 'z',
    low: { x: -32, y: 0.05, z: -14 },
    high: { x: -32, y: 3, z: -32 },
    width: 10,
  })
  defineRamp(scene, ramps, {
    axis: 'x',
    low: { x: 48, y: 0.05, z: -55 },
    high: { x: 70, y: 3.5, z: -55 },
    width: 10,
  })
  defineRamp(scene, ramps, {
    axis: 'x',
    low: { x: -48, y: 0.05, z: 55 },
    high: { x: -70, y: 3.5, z: 55 },
    width: 10,
  })

  // --- Bridge: deck stays a normal physics collider (flat surfaces work
  //     fine in cannon). The two approach ramps are scripted.
  addStaticBox(world, scene, { x: 0, y: 3, z: -70 }, { x: 10, y: 0.5, z: 30 }, null, COLOR_BRIDGE_DECK)
  defineRamp(scene, ramps, {
    axis: 'z',
    low: { x: 0, y: 0.05, z: -33 },
    high: { x: 0, y: 3, z: -55 },
    width: 10,
  })
  defineRamp(scene, ramps, {
    axis: 'z',
    low: { x: 0, y: 0.05, z: -107 },
    high: { x: 0, y: 3, z: -85 },
    width: 10,
  })
  addStaticBox(world, scene, { x: -4, y: 1.5, z: -60 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: 4, y: 1.5, z: -60 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: -4, y: 1.5, z: -80 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: 4, y: 1.5, z: -80 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)

  // --- Jump pads
  addJumpPad(world, scene, { x: 18, y: 0, z: 18 })
  addJumpPad(world, scene, { x: -22, y: 0, z: -18 })
  addJumpPad(world, scene, { x: 55, y: 0, z: 0 })
  addJumpPad(world, scene, { x: 0, y: 0, z: 55 })

  // --- Boundary walls (visible, solid)
  const half = ARENA_SIZE / 2
  const wallH = 16
  const wallY = wallH / 2
  const wallColor = 0x6b5e54
  addStaticBox(world, scene, { x: half, y: wallY, z: 0 }, { x: 2, y: wallH, z: ARENA_SIZE }, null, wallColor)
  addStaticBox(world, scene, { x: -half, y: wallY, z: 0 }, { x: 2, y: wallH, z: ARENA_SIZE }, null, wallColor)
  addStaticBox(world, scene, { x: 0, y: wallY, z: half }, { x: ARENA_SIZE, y: wallH, z: 2 }, null, wallColor)
  addStaticBox(world, scene, { x: 0, y: wallY, z: -half }, { x: ARENA_SIZE, y: wallH, z: 2 }, null, wallColor)

  return { spawnPos: new CANNON.Vec3(0, 0.9, 0), ramps }
}
