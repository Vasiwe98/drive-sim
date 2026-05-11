// Procedural arcade playground: roads, ramps, a bridge with supports,
// jump pads, and invisible boundary walls forming a ~200m square arena.
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

const COLOR_ASPHALT = 0x2a2a2e
const COLOR_LANE = 0x3a3a40
const COLOR_RAMP = 0x8a6a3a
const COLOR_BRIDGE_DECK = 0x6a5a4a
const COLOR_SUPPORT = 0x55525a
const COLOR_PAD = 0xff4d3a

const ARENA_SIZE = 200

// Build a static box in both the physics world and the scene.
// pos/size are full extents (size is NOT half-extents). rot is an optional
// {x,y,z} euler in radians. color === null makes the body invisible (no mesh).
// Returns { body, mesh } so callers can attach listeners or further tweak.
export function addStaticBox(world, scene, pos, size, rot = null, color = null) {
  const halfExtents = new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2)
  const body = new CANNON.Body({ mass: 0, shape: new CANNON.Box(halfExtents) })
  body.position.set(pos.x, pos.y, pos.z)
  if (rot) body.quaternion.setFromEuler(rot.x || 0, rot.y || 0, rot.z || 0, 'XYZ')
  world.addBody(body)

  let mesh = null
  if (color !== null) {
    const geom = new THREE.BoxGeometry(size.x, size.y, size.z)
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0.05 })
    mesh = new THREE.Mesh(geom, mat)
    mesh.position.copy(body.position)
    mesh.quaternion.copy(body.quaternion)
    mesh.castShadow = true
    mesh.receiveShadow = true
    scene.add(mesh)
  }

  return { body, mesh }
}

// A flat decorative plate at ground level paired with an invisible sensor
// volume above it. Sensor uses collisionResponse=false so the car passes
// through; the collide event launches the chassis upward via applyImpulse.
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
  plate.position.set(pos.x, 0.075, pos.z)
  plate.receiveShadow = true
  scene.add(plate)

  const sensorShape = new CANNON.Box(new CANNON.Vec3(2.5, 1.5, 2.5))
  const sensor = new CANNON.Body({ mass: 0, shape: sensorShape, collisionResponse: false })
  sensor.position.set(pos.x, 1.5, pos.z)
  world.addBody(sensor)

  const impulse = new CANNON.Vec3(0, 3000, 0)
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
  // --- Roads (long thin asphalt boxes laid on the ground) ---
  addStaticBox(world, scene, { x: 0, y: 0.05, z: 0 }, { x: 8, y: 0.1, z: 180 }, null, COLOR_ASPHALT)
  addStaticBox(world, scene, { x: 0, y: 0.06, z: 0 }, { x: 180, y: 0.1, z: 8 }, null, COLOR_LANE)
  addStaticBox(world, scene, { x: 40, y: 0.05, z: -30 }, { x: 80, y: 0.1, z: 6 }, null, COLOR_ASPHALT)
  addStaticBox(world, scene, { x: -40, y: 0.05, z: 40 }, { x: 60, y: 0.1, z: 6 }, null, COLOR_ASPHALT)

  // --- Ramps (3-4 rotated boxes scattered around the arena) ---
  addStaticBox(world, scene, { x: 30, y: 1.4, z: 22 }, { x: 10, y: 0.4, z: 12 }, { x: -0.32 }, COLOR_RAMP)
  addStaticBox(world, scene, { x: -32, y: 1.4, z: -22 }, { x: 10, y: 0.4, z: 12 }, { x: 0.32 }, COLOR_RAMP)
  addStaticBox(world, scene, { x: 60, y: 1.6, z: -55 }, { x: 14, y: 0.4, z: 10 }, { z: -0.36 }, COLOR_RAMP)
  addStaticBox(world, scene, { x: -60, y: 1.6, z: 55 }, { x: 14, y: 0.4, z: 10 }, { z: 0.36 }, COLOR_RAMP)

  // --- Bridge: raised deck + approach ramps + four supports ---
  addStaticBox(world, scene, { x: 0, y: 5, z: -70 }, { x: 10, y: 0.5, z: 30 }, null, COLOR_BRIDGE_DECK)
  addStaticBox(world, scene, { x: 0, y: 2.4, z: -48 }, { x: 10, y: 0.4, z: 14 }, { x: -0.36 }, COLOR_RAMP)
  addStaticBox(world, scene, { x: 0, y: 2.4, z: -92 }, { x: 10, y: 0.4, z: 14 }, { x: 0.36 }, COLOR_RAMP)
  addStaticBox(world, scene, { x: -4, y: 2.5, z: -60 }, { x: 1, y: 5, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: 4, y: 2.5, z: -60 }, { x: 1, y: 5, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: -4, y: 2.5, z: -80 }, { x: 1, y: 5, z: 1 }, null, COLOR_SUPPORT)
  addStaticBox(world, scene, { x: 4, y: 2.5, z: -80 }, { x: 1, y: 5, z: 1 }, null, COLOR_SUPPORT)

  // --- Jump pads scattered around drivable areas ---
  addJumpPad(world, scene, { x: 18, y: 0, z: 18 })
  addJumpPad(world, scene, { x: -22, y: 0, z: -18 })
  addJumpPad(world, scene, { x: 55, y: 0, z: 0 })
  addJumpPad(world, scene, { x: 0, y: 0, z: 55 })

  // --- Invisible boundary walls (~200m square arena) ---
  const half = ARENA_SIZE / 2
  const wallH = 10
  const wallY = wallH / 2
  addStaticBox(world, scene, { x: half, y: wallY, z: 0 }, { x: 1, y: wallH, z: ARENA_SIZE })
  addStaticBox(world, scene, { x: -half, y: wallY, z: 0 }, { x: 1, y: wallH, z: ARENA_SIZE })
  addStaticBox(world, scene, { x: 0, y: wallY, z: half }, { x: ARENA_SIZE, y: wallH, z: 1 })
  addStaticBox(world, scene, { x: 0, y: wallY, z: -half }, { x: ARENA_SIZE, y: wallH, z: 1 })

  return { spawnPos: new CANNON.Vec3(0, 2, 0) }
}
