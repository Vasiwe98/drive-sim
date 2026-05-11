// Procedural arcade playground: roads (visual only), drivable ramps,
// a bridge with supports and approach ramps, jump pads, invisible boundary.
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

const COLOR_ASPHALT = 0x2a2a2e
const COLOR_LANE = 0x3a3a40
const COLOR_RAMP = 0x8a6a3a
const COLOR_BRIDGE_DECK = 0x6a5a4a
const COLOR_SUPPORT = 0x55525a
const COLOR_PAD = 0xff4d3a

const ARENA_SIZE = 200

// Add a box to both physics and scene. `physics: false` makes it visual-only
// (good for thin road overlays — wheels would otherwise trip on the edges).
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
    mesh.castShadow = physics // visual-only road overlays don't cast shadow
    mesh.receiveShadow = true
    scene.add(mesh)
  }
  return { body, mesh }
}

// Build a drivable ramp from lowEnd to highEnd (both top-surface center
// points). Chassis passes THROUGH the ramp collider (collisionResponse=false)
// while wheel raycasts still hit the top surface — so wheels lift the car
// up the slope cleanly, without the chassis ever wedging into the ramp.
function buildRampZ(world, scene, lowEnd, highEnd, opts = {}) {
  const { width = 10, thickness = 0.4, color = COLOR_RAMP } = opts
  const dy = highEnd.y - lowEnd.y
  const dz = highEnd.z - lowEnd.z
  const slopeLen = Math.sqrt(dy * dy + dz * dz)

  const rotX = -Math.asin(dy / slopeLen) * Math.sign(dz)

  const tx = (lowEnd.x + highEnd.x) / 2
  const ty = (lowEnd.y + highEnd.y) / 2
  const tz = (lowEnd.z + highEnd.z) / 2

  const cy = ty - (thickness / 2) * Math.abs(dz) / slopeLen
  const cz = tz + (thickness / 2) * (dy / slopeLen) * Math.sign(dz)

  const result = addStaticBox(world, scene, { x: tx, y: cy, z: cz }, { x: width, y: thickness, z: slopeLen }, { x: rotX }, color)
  return result
}

// Same idea but the ramp varies in X (rotation around Z).
function buildRampX(world, scene, lowEnd, highEnd, opts = {}) {
  const { width = 10, thickness = 0.4, color = COLOR_RAMP } = opts
  const dy = highEnd.y - lowEnd.y
  const dx = highEnd.x - lowEnd.x
  const slopeLen = Math.sqrt(dy * dy + dx * dx)

  const rotZ = Math.asin(dy / slopeLen) * Math.sign(dx)

  const tx = (lowEnd.x + highEnd.x) / 2
  const ty = (lowEnd.y + highEnd.y) / 2
  const tz = (lowEnd.z + highEnd.z) / 2

  const cx = tx - (thickness / 2) * (dy / slopeLen) * Math.sign(dx)
  const cy = ty - (thickness / 2) * Math.abs(dx) / slopeLen

  const result = addStaticBox(world, scene, { x: cx, y: cy, z: tz }, { x: slopeLen, y: thickness, z: width }, { z: rotZ }, color)
  return result
}

// Invisible launch zone — sensor box that fires an upward impulse on the
// chassis when it passes through. Impulse magnitude scales with the
// chassis's horizontal speed, so fast approaches produce dramatic launches.
// Used at the top of the featured launch ramp.
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

// Decorative pad + collision sensor that launches the car upward on touch.
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
  // --- Roads (VISUAL ONLY — physics: false avoids wheel-tripping on the edges).
  //     The car drives on the underlying ground plane (y=0) everywhere.
  addStaticBox(world, scene, { x: 0, y: 0.05, z: 0 }, { x: 8, y: 0.1, z: 180 }, null, COLOR_ASPHALT, false)
  addStaticBox(world, scene, { x: 0, y: 0.06, z: 0 }, { x: 180, y: 0.1, z: 8 }, null, COLOR_LANE, false)
  addStaticBox(world, scene, { x: 40, y: 0.05, z: -30 }, { x: 80, y: 0.1, z: 6 }, null, COLOR_ASPHALT, false)
  addStaticBox(world, scene, { x: -40, y: 0.05, z: 40 }, { x: 60, y: 0.1, z: 6 }, null, COLOR_ASPHALT, false)

  // --- FEATURED LAUNCH RAMP: directly ahead of spawn (+X direction).
  //     ~9° slope so suspension can hold all 4 wheels in contact while climbing.
  //     A launch-zone sensor at the top gives an upward impulse that scales
  //     with horizontal speed → fast approaches launch you high.
  buildRampX(world, scene, { x: 14, y: 0.05, z: 0 }, { x: 32, y: 3, z: 0 }, { width: 14, color: 0xd92e2e })
  addLaunchZone(world, { x: 33, y: 4, z: 0 }, { impulsePerSpeed: 130 })

  // --- Other ramps (also gentle so they're drivable end-to-end)
  buildRampZ(world, scene, { x: 30, y: 0.05, z: 14 }, { x: 30, y: 3, z: 32 })
  buildRampZ(world, scene, { x: -32, y: 0.05, z: -14 }, { x: -32, y: 3, z: -32 })
  buildRampX(world, scene, { x: 48, y: 0.05, z: -55 }, { x: 70, y: 3.5, z: -55 })
  buildRampX(world, scene, { x: -70, y: 3.5, z: 55 }, { x: -48, y: 0.05, z: 55 })

  // --- Bridge: deck lowered to y=3 so approach ramps stay drivable at gentle angles.
  addStaticBox(world, scene, { x: 0, y: 3, z: -70 }, { x: 10, y: 0.5, z: 30 }, null, COLOR_BRIDGE_DECK)
  buildRampZ(world, scene, { x: 0, y: 0.05, z: -33 }, { x: 0, y: 3, z: -55 }, { width: 10 })
  buildRampZ(world, scene, { x: 0, y: 0.05, z: -107 }, { x: 0, y: 3, z: -85 }, { width: 10 })
  addStaticBox(world, scene, { x: -4, y: 1.5, z: -60 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: 4, y: 1.5, z: -60 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: -4, y: 1.5, z: -80 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: 4, y: 1.5, z: -80 }, { x: 1, y: 3, z: 1 }, null, COLOR_SUPPORT)

  // --- Jump pads
  addJumpPad(world, scene, { x: 18, y: 0, z: 18 })
  addJumpPad(world, scene, { x: -22, y: 0, z: -18 })
  addJumpPad(world, scene, { x: 55, y: 0, z: 0 })
  addJumpPad(world, scene, { x: 0, y: 0, z: 55 })

  // --- Boundary walls. Visible (warm grey) so the player knows where the
  //     arena ends. Thicker than before (2m) for robust collision. Taller
  //     (16m) so jumps off ramps can't clear them.
  const half = ARENA_SIZE / 2
  const wallH = 16
  const wallY = wallH / 2
  const wallColor = 0x6b5e54
  addStaticBox(world, scene, { x: half, y: wallY, z: 0 }, { x: 2, y: wallH, z: ARENA_SIZE }, null, wallColor)
  addStaticBox(world, scene, { x: -half, y: wallY, z: 0 }, { x: 2, y: wallH, z: ARENA_SIZE }, null, wallColor)
  addStaticBox(world, scene, { x: 0, y: wallY, z: half }, { x: ARENA_SIZE, y: wallH, z: 2 }, null, wallColor)
  addStaticBox(world, scene, { x: 0, y: wallY, z: -half }, { x: ARENA_SIZE, y: wallH, z: 2 }, null, wallColor)

  // Spawn just above equilibrium height (calculated for thin chassis + wheels
  // at corners) so there's almost no initial drop and the chassis settles flat.
  return { spawnPos: new CANNON.Vec3(0, 0.9, 0) }
}
