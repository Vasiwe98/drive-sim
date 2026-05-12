import * as CANNON from 'cannon-es'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Monkey-patch CANNON.RaycastVehicle.castRay to extend the wheel ray length
// from `restLength + radius` to `restLength + maxTravel + radius`.
//
// Why: cannon-es hardcodes the ray length as restLength + radius. At our
// equilibrium (suspension compressed by mg/(4k) ≈ 6cm), the wheel raycast
// tip reaches only ~6cm past the ground. Any transient that lifts the
// chassis by >6cm — slope-vy on release, oscillation on landing, slight
// drift in the extended-engagement zone — makes the ray miss entirely.
// On miss, cannon clamps suspensionLength to restLength → length_diff=0
// → suspensionForce=0. With no support, the chassis falls. We see this
// as the bridge-deck "sink." Adding maxTravel into the ray length gives
// ~36cm of margin — 6× more — so transient lift doesn't break contact.
// Per agent #2 research: this is the canonical fix in Bullet/cannon-es
// for the "raycast vehicle sinks on landing" class of bug.
//
// We faithfully reproduce cannon-es's castRay (see node_modules/cannon-es/
// dist/cannon-es.js around line 7429) with the single change to `raylen`.
{
  const _rv = new CANNON.Vec3()
  const _tgt = new CANNON.Vec3()
  const _chassisVel = new CANNON.Vec3()
  // Module-scope scratch for manual ray fallback (no per-frame allocation).
  const _manualRay = new CANNON.Ray()
  const _manualResult = new CANNON.RaycastResult()
  _manualRay.skipBackfaces = true
  _manualRay.checkCollisionResponse = false
  _manualRay.mode = CANNON.Ray.CLOSEST

  CANNON.RaycastVehicle.prototype.castRay = function patchedCastRay(wheel) {
    this.updateWheelTransformWorld(wheel)
    const chassisBody = this.chassisBody
    let depth = -1
    // PATCHED LINE: include maxSuspensionTravel in ray length.
    const raylen = wheel.suspensionRestLength + wheel.maxSuspensionTravel + wheel.radius
    wheel.directionWorld.scale(raylen, _rv)
    const source = wheel.chassisConnectionPointWorld
    source.vadd(_rv, _tgt)
    const raycastResult = wheel.raycastResult
    raycastResult.reset()
    const oldState = chassisBody.collisionResponse
    chassisBody.collisionResponse = false
    this.world.rayTest(source, _tgt, raycastResult)
    chassisBody.collisionResponse = oldState
    let object = raycastResult.body

    // FALLBACK: world.rayTest has been observed returning null for valid
    // ray/box intersections (cause TBD — broadphase, AABB caching, or some
    // other internal). If that happens, scan world.bodies manually with a
    // fresh Ray and pick the closest hit. O(n) over bodies; trivially fine
    // for ~50.
    let manualHits = 0
    if (!object) {
      _manualRay.from.copy(source)
      _manualRay.to.copy(_tgt)
      _manualRay.updateDirection()
      let bestDist = Infinity
      const bodies = this.world.bodies
      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i]
        if (body === chassisBody) continue
        _manualResult.reset()
        _manualRay.intersectBody(body, _manualResult)
        if (_manualResult.body && _manualResult.distance < bestDist) {
          manualHits++
          bestDist = _manualResult.distance
          raycastResult.body = _manualResult.body
          raycastResult.shape = _manualResult.shape
          raycastResult.distance = _manualResult.distance
          raycastResult.hitNormalWorld.copy(_manualResult.hitNormalWorld)
          raycastResult.hitPointWorld.copy(_manualResult.hitPointWorld)
          raycastResult.hasHit = true
        }
      }
      object = raycastResult.body
    }

    // Diagnostic snapshot of what the raycast actually returned, BEFORE any
    // back-face filter or other post-processing. Read by the HUD so we can
    // see whether rayTest is hitting nothing, hitting the deck top, or
    // hitting the deck underside.
    wheel.__diag = {
      srcY: source.y,
      tgtY: _tgt.y,
      rawHit: !!object,
      rawDist: object ? raycastResult.distance : -1,
      rawNormY: object ? raycastResult.hitNormalWorld.y : 0,
      rejected: false,
      manualHits,
    }
    // BACK-FACE REJECT: cannon's rayTest reports the first intersection even
    // when the ray STARTS inside a body — for a downward wheel ray that
    // started inside the deck box (chassis collider penetrated slightly),
    // the hit is on the deck's UNDERSIDE with hitNormalWorld = (0,-1,0).
    // If we accept that hit, cannon's updateSuspension hits the degenerate
    // case (denominator >= -0.1), spring force gets multiplied by 10, and
    // the impulse is applied along the down-pointing normal — slamming the
    // chassis INTO the deck. Reject any hit whose normal is in roughly the
    // same direction as the ray (i.e., a back face from our perspective).
    if (object && wheel.directionWorld.dot(raycastResult.hitNormalWorld) > 0) {
      raycastResult.reset()
      object = null
      wheel.__diag.rejected = true
    }
    wheel.raycastResult.groundObject = 0
    if (object) {
      depth = raycastResult.distance
      wheel.raycastResult.hitNormalWorld = raycastResult.hitNormalWorld
      wheel.isInContact = true
      const hitDistance = raycastResult.distance
      wheel.suspensionLength = hitDistance - wheel.radius
      const minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel
      const maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel
      if (wheel.suspensionLength < minSuspensionLength) {
        wheel.suspensionLength = minSuspensionLength
      }
      if (wheel.suspensionLength > maxSuspensionLength) {
        wheel.suspensionLength = maxSuspensionLength
        wheel.raycastResult.reset()
      }
      const denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld)
      chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, _chassisVel)
      const projVel = wheel.raycastResult.hitNormalWorld.dot(_chassisVel)
      if (denominator >= -0.1) {
        wheel.suspensionRelativeVelocity = 0
        wheel.clippedInvContactDotSuspension = 1 / 0.1
      } else {
        const inv = -1 / denominator
        wheel.suspensionRelativeVelocity = projVel * inv
        wheel.clippedInvContactDotSuspension = inv
      }
    } else {
      wheel.suspensionLength = wheel.suspensionRestLength
      wheel.suspensionRelativeVelocity = 0.0
      wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld)
      wheel.clippedInvContactDotSuspension = 1.0
    }
    return depth
  }
}

// Convention: +X is forward (headlights / hood), +Y is up, +Z is left.
// W produces positive engine force, pushing the car in +X.
//
// Per-vehicle driving profile. All profiles share the EXACT coupe wheel
// suspension parameters — varying those caused unexplained vertical
// bouncing on the heavier vehicles, and the coupe values are the only
// ones empirically validated. The handling differentiation comes
// entirely from chassis-level parameters:
//   mass         → acceleration response (a = F / m)
//   engineForce  → top speed (v_top = F / (m * linearDamping))
//   linearDamping → top speed (drag against engine)
//   maxSteer     → turning radius
// Mass also affects cornering inertia, so heavier cars *feel* heavier
// even with identical suspension.
const SHARED_WHEEL = {
  suspensionStiffness: 40,
  dampingRelaxation: 9,
  dampingCompression: 14,
  frictionSlip: 6.0,
  rollInfluence: 0.01,
  maxSuspensionForce: 500000,
}
export const VEHICLE_PROFILES = {
  coupe: {
    nickname: 'Porsche 911',
    mass: 1500,
    engineForce: 13000,
    reverseForce: -6000,
    handbrakeForce: 50000,
    rollingBrake: 20,
    maxSteer: 0.50,
    steerHighSpeedKmh: 220,
    steerMinFactor: 0.30,
    linearDamping: 0.10,
    angularDamping: 0.30,
    wheel: SHARED_WHEEL,
  },
  sedan: {
    nickname: 'BMW M5',
    mass: 1700,
    engineForce: 13000,
    reverseForce: -6000,
    handbrakeForce: 50000,
    rollingBrake: 20,
    maxSteer: 0.46,
    steerHighSpeedKmh: 220,
    steerMinFactor: 0.30,
    linearDamping: 0.11,
    angularDamping: 0.30,
    wheel: SHARED_WHEEL,
  },
  suv: {
    nickname: 'Mercedes G-Wagon',
    mass: 2000,
    engineForce: 13000,
    reverseForce: -6000,
    handbrakeForce: 50000,
    rollingBrake: 20,
    maxSteer: 0.42,
    steerHighSpeedKmh: 220,
    steerMinFactor: 0.30,
    linearDamping: 0.13,
    angularDamping: 0.30,
    wheel: SHARED_WHEEL,
  },
  truck: {
    nickname: 'Ford F-350',
    mass: 2400,
    engineForce: 13000,
    reverseForce: -6000,
    handbrakeForce: 50000,
    rollingBrake: 20,
    maxSteer: 0.38,
    steerHighSpeedKmh: 220,
    steerMinFactor: 0.30,
    linearDamping: 0.15,
    angularDamping: 0.30,
    wheel: SHARED_WHEEL,
  },
}

// Chassis collider sits at cabin level (offset upward in chassis local frame).
const CHASSIS_HALF = { x: 1.9, y: 0.25, z: 0.95 }
export const WHEEL_RADIUS = 0.5
const WHEEL_WIDTH = 0.35

// Wheel mount positions in chassis local frame. Exposed so the ramp
// controller can override wheel mesh positions to sit on ramp surfaces.
export const WHEEL_MOUNTS = [
  new CANNON.Vec3(1.65, -0.15, 0.95),   // 0 = FL (front-left)
  new CANNON.Vec3(1.65, -0.15, -0.95),  // 1 = FR
  new CANNON.Vec3(-1.65, -0.15, 0.95),  // 2 = RL
  new CANNON.Vec3(-1.65, -0.15, -0.95), // 3 = RR
]

// GLB model loader. Each style maps to a .glb in /public/models/. Vite
// serves them from BASE_URL + 'models/'. Models are CC0 from Kenney's
// Car Kit (kenney.nl/assets/car-kit). Wheels in the .glb are hidden —
// we keep the existing procedural cylinder wheels because they sync
// to RaycastVehicle.wheelInfos[i].worldTransform every frame.
const MODEL_BASE = import.meta.env.BASE_URL + 'models/'
const _loader = new GLTFLoader()
const _modelPromises = new Map()

function loadModel(style) {
  if (!_modelPromises.has(style)) {
    _modelPromises.set(style, new Promise((resolve, reject) => {
      _loader.load(
        `${MODEL_BASE}${style}.glb`,
        (gltf) => resolve(gltf.scene),
        undefined,
        (err) => reject(err)
      )
    }))
  }
  return _modelPromises.get(style)
}

// Fire-and-forget preload of all styles so style-swap is instant.
for (const s of ['coupe', 'sedan', 'suv', 'truck']) {
  loadModel(s).catch((e) => console.warn('preload failed for', s, e))
}

// Target horizontal length of the rendered car (along chassis +X).
// Matches the physics collider so wheels visually sit at the corners.
const VISUAL_CAR_LENGTH = 3.8

export function createVehicle(world, scene, spawnPos = new CANNON.Vec3(0, 4, 0), color = 0xc23b22, style = 'coupe') {
  let profile = VEHICLE_PROFILES[style] || VEHICLE_PROFILES.coupe

  const chassisShape = new CANNON.Box(new CANNON.Vec3(CHASSIS_HALF.x, CHASSIS_HALF.y, CHASSIS_HALF.z))
  const chassisBody = new CANNON.Body({ mass: profile.mass })
  // No collider offset. A previous +0.5m offset (to sit at cabin level)
  // created a "trap zone" at the bridge deck — see git history for the
  // full debug story. Ramps have no physics body so the offset's original
  // motivation (sit above ramp edges) is moot.
  chassisBody.addShape(chassisShape)
  chassisBody.position.copy(spawnPos)
  chassisBody.angularVelocity.set(0, 0, 0)
  chassisBody.allowSleep = false
  // Lock pitch + roll. Only yaw allowed (for steering).
  chassisBody.angularFactor.set(0, 1, 0)
  chassisBody.angularDamping = profile.angularDamping
  chassisBody.linearDamping = profile.linearDamping
  world.addBody(chassisBody)

  const vehicle = new CANNON.RaycastVehicle({
    chassisBody,
    indexRightAxis: 2,
    indexForwardAxis: 0,
    indexUpAxis: 1,
  })

  // Wheel params built from the current profile. setBodyStyle mutates
  // each wheelInfo's fields directly when the user swaps vehicles.
  const wheelOptions = {
    radius: WHEEL_RADIUS,
    directionLocal: new CANNON.Vec3(0, -1, 0),
    suspensionStiffness: profile.wheel.suspensionStiffness,
    suspensionRestLength: 0.3,
    frictionSlip: profile.wheel.frictionSlip,
    dampingRelaxation: profile.wheel.dampingRelaxation,
    dampingCompression: profile.wheel.dampingCompression,
    maxSuspensionForce: profile.wheel.maxSuspensionForce,
    rollInfluence: profile.wheel.rollInfluence,
    axleLocal: new CANNON.Vec3(0, 0, 1),
    chassisConnectionPointLocal: new CANNON.Vec3(),
    maxSuspensionTravel: 0.3,
    customSlidingRotationalSpeed: -30,
    useCustomSlidingRotationalSpeed: true,
  }

  for (const mount of WHEEL_MOUNTS) {
    wheelOptions.chassisConnectionPointLocal.copy(mount)
    vehicle.addWheel(wheelOptions)
  }

  vehicle.addToWorld(world)

  // Mutate live physics state to match a profile. Idempotent — skips when
  // the profile is already active so the constructor's initial setBodyStyle
  // call doesn't kick the freshly-built chassis. Zeroes chassis vertical
  // velocity so a mid-air mass change doesn't carry kinetic energy into
  // the new (heavier or lighter) profile. We don't pre-set
  // wheel.suspensionLength because cannon's castRay overwrites it on the
  // very next physics step.
  function applyProfile(p) {
    if (p === profile) return
    profile = p
    chassisBody.mass = p.mass
    chassisBody.updateMassProperties()
    chassisBody.linearDamping = p.linearDamping
    chassisBody.angularDamping = p.angularDamping
    for (const w of vehicle.wheelInfos) {
      w.suspensionStiffness = p.wheel.suspensionStiffness
      w.dampingRelaxation = p.wheel.dampingRelaxation
      w.dampingCompression = p.wheel.dampingCompression
      w.frictionSlip = p.wheel.frictionSlip
      w.rollInfluence = p.wheel.rollInfluence
      w.maxSuspensionForce = p.wheel.maxSuspensionForce
    }
    chassisBody.velocity.y = 0
  }

  // --- Visuals ---
  const chassisGroup = new THREE.Group()
  scene.add(chassisGroup)

  // Single shared THREE.Color drives the body-paint tint of every loaded
  // GLB style. The picker mutates it via setColor; all body-mesh materials
  // (cloned from the model's `colormap` material) point at this Color
  // instance, so changes propagate without rewalking the mesh tree.
  const userColor = new THREE.Color(color)
  let activeBodyMats = []

  async function setBodyStyle(nextStyle) {
    // Apply the physics profile synchronously — engine, mass, suspension
    // all flip immediately. The visual model swap runs asynchronously
    // below (one frame of delay max since models are pre-loaded).
    const nextProfile = VEHICLE_PROFILES[nextStyle] || VEHICLE_PROFILES.coupe
    applyProfile(nextProfile)

    // Dispose old chassis-mesh children (geometries + cloned materials).
    while (chassisGroup.children.length) {
      const child = chassisGroup.children[0]
      child.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material && obj.material.__cloned) obj.material.dispose()
      })
      chassisGroup.remove(child)
    }
    activeBodyMats = []

    let proto
    try {
      proto = await loadModel(nextStyle)
    } catch {
      // Network failure on first load — leave chassis empty, RaycastVehicle
      // still runs (wheel meshes drawn separately). User sees floating
      // wheels with no body; that's a tolerable failure mode for now.
      return
    }

    const inst = proto.clone(true)

    // Walk the model: hide wheels, clone body materials, swap to user color.
    // Kenney models use one material ('colormap') with vertex/UV-encoded
    // detail; mutating .color tints the painted body region while detail
    // texels (windows, lights) get tinted along with it — acceptable for
    // a stylised low-poly look.
    inst.traverse((obj) => {
      if (!obj.isMesh) return
      if (/wheel/i.test(obj.name)) { obj.visible = false; return }
      obj.castShadow = true
      obj.receiveShadow = false
      const cloned = obj.material.clone()
      cloned.__cloned = true
      cloned.color = userColor   // shared reference; setColor mutates this
      obj.material = cloned
      activeBodyMats.push(cloned)
    })

    // Orientation: Kenney's UnityGLTF cars author forward as local +Z.
    // R_y(+π/2) maps local +Z → local +X, aligning model-forward with
    // chassis-forward (+X). Empirically verified — flipping the sign
    // makes the cars drive in reverse.
    inst.rotation.y = Math.PI / 2

    // Uniform scale so the longest horizontal axis matches the physics
    // chassis length. Compute the bbox AFTER rotation so X/Z swap is
    // accounted for.
    inst.updateMatrixWorld(true)
    const bbox = new THREE.Box3().setFromObject(inst)
    const size = bbox.getSize(new THREE.Vector3())
    const scale = VISUAL_CAR_LENGTH / Math.max(size.x, size.z)
    inst.scale.setScalar(scale)

    // Re-bbox at final scale and centre on X/Z. Place model bottom at
    // chassis-local Y = -0.55 — close to the wheel centres at rest
    // (wheels span chassis-local [-0.89, +0.11]), so the body hugs the
    // wheels without floating. Purely a visual offset; the physics
    // chassis collider and wheel mounts are unchanged.
    inst.updateMatrixWorld(true)
    bbox.setFromObject(inst)
    const centre = bbox.getCenter(new THREE.Vector3())
    inst.position.set(-centre.x, -bbox.min.y - 0.55, -centre.z)

    chassisGroup.add(inst)
  }
  setBodyStyle(style)

  // Wheel meshes
  const wheelMeshes = []
  const tireGeo = new THREE.CylinderGeometry(WHEEL_RADIUS, WHEEL_RADIUS, WHEEL_WIDTH, 28)
  tireGeo.rotateX(Math.PI / 2)
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.85 })

  const hubGeo = new THREE.CylinderGeometry(WHEEL_RADIUS * 0.55, WHEEL_RADIUS * 0.55, WHEEL_WIDTH + 0.02, 12)
  hubGeo.rotateX(Math.PI / 2)
  const hubMat = new THREE.MeshStandardMaterial({ color: 0xb0b0b6, metalness: 0.85, roughness: 0.3 })
  const spokeMat = new THREE.MeshStandardMaterial({ color: 0x7a7a80, metalness: 0.7, roughness: 0.4 })

  for (let i = 0; i < 4; i++) {
    const w = new THREE.Group()
    const tire = new THREE.Mesh(tireGeo, tireMat)
    tire.castShadow = true
    w.add(tire)
    const hub = new THREE.Mesh(hubGeo, hubMat)
    w.add(hub)
    for (let s = 0; s < 3; s++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(WHEEL_RADIUS * 0.95, 0.04, 0.04), spokeMat)
      spoke.rotation.z = (s * Math.PI) / 3
      w.add(spoke)
    }
    scene.add(w)
    wheelMeshes.push(w)
  }

  // suspendVehicleControl: when true, applyInput zeroes wheel forces so
  // the ramp controller's direct chassis force isn't fought by suspension.
  let suspendVehicleControl = false
  function setSuspendVehicleControl(v) { suspendVehicleControl = v }

  function applyInput(inputState) {
    if (suspendVehicleControl) {
      for (let i = 0; i < 4; i++) {
        vehicle.applyEngineForce(0, i)
        vehicle.setSteeringValue(0, i)
        vehicle.setBrake(0, i)
      }
      return
    }

    const engineForce = inputState.forward
      ? profile.engineForce
      : inputState.backward
        ? profile.reverseForce
        : 0

    // Speed-sensitive steering: less wheel turn at high speed = stable.
    const speedKmh = getSpeedKmh()
    const steerFactor = Math.max(
      profile.steerMinFactor,
      1 - speedKmh / profile.steerHighSpeedKmh * (1 - profile.steerMinFactor)
    )
    const rawSteer = inputState.left ? profile.maxSteer : inputState.right ? -profile.maxSteer : 0
    const steer = rawSteer * steerFactor

    vehicle.applyEngineForce(engineForce, 2)
    vehicle.applyEngineForce(engineForce, 3)
    vehicle.setSteeringValue(steer, 0)
    vehicle.setSteeringValue(steer, 1)

    const brake = inputState.brake ? profile.handbrakeForce : engineForce === 0 ? profile.rollingBrake : 0
    for (let i = 0; i < 4; i++) vehicle.setBrake(brake, i)
  }

  function getProfileName() {
    return profile.nickname
  }

  // Scratch vectors for ramp wheel placement
  const _wheelWorldMount = new CANNON.Vec3()
  const _fwdLocalCannon = new CANNON.Vec3(1, 0, 0)
  const _fwdWorldCannon = new CANNON.Vec3()
  // Visual pitch overlay: chassis physics is yaw-locked, but on a ramp the
  // mesh needs to tilt to match the slope or the wheels visibly detach
  // from the body. Rotation axis is +Z in chassis-local frame (chassis-left
  // / axle direction); positive angle pitches the nose up.
  const _pitchAxis = new THREE.Vector3(0, 0, 1)
  const _pitchQuat = new THREE.Quaternion()

  function syncMeshes(rampOverride = null) {
    chassisGroup.position.copy(chassisBody.position)
    chassisGroup.quaternion.copy(chassisBody.quaternion)

    // Apply visual pitch when on a ramp so the chassis follows the slope.
    // Sign = +1 if chassis-forward points uphill, -1 if downhill. Scaled
    // by blendT so entry/exit fades in smoothly.
    if (rampOverride && rampOverride.blendT > 0) {
      const ramp = rampOverride.ramp
      chassisBody.vectorToWorldFrame(_fwdLocalCannon, _fwdWorldCannon)
      const fwdDotClimb = ramp.axis === 'x'
        ? _fwdWorldCannon.x * ramp.axisSign
        : _fwdWorldCannon.z * ramp.axisSign
      const pitch = ramp.pitchAngle * Math.sign(fwdDotClimb) * rampOverride.blendT
      _pitchQuat.setFromAxisAngle(_pitchAxis, pitch)
      chassisGroup.quaternion.multiply(_pitchQuat)
    }

    for (let i = 0; i < vehicle.wheelInfos.length; i++) {
      vehicle.updateWheelTransform(i)
      const t = vehicle.wheelInfos[i].worldTransform
      // Default: physics-determined position
      wheelMeshes[i].position.copy(t.position)
      wheelMeshes[i].quaternion.copy(t.quaternion)

      // Override Y when on a ramp: place wheel on the ramp surface.
      if (rampOverride && rampOverride.blendT > 0) {
        chassisBody.pointToWorldFrame(WHEEL_MOUNTS[i], _wheelWorldMount)
        const surfY = rampOverride.ramp.surfaceYAt(_wheelWorldMount.x, _wheelWorldMount.z)
        const targetY = surfY + WHEEL_RADIUS
        const blend = rampOverride.blendT
        wheelMeshes[i].position.x = _wheelWorldMount.x
        wheelMeshes[i].position.y = t.position.y * (1 - blend) + targetY * blend
        wheelMeshes[i].position.z = _wheelWorldMount.z
      }
    }
  }

  function setColor(c) {
    userColor.set(c)
  }

  function getSpeedKmh() {
    const v = chassisBody.velocity
    const speedMs = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
    return speedMs * 3.6
  }

  return {
    chassisBody,
    vehicle,
    chassisGroup,
    wheelMeshes,
    applyInput,
    syncMeshes,
    setColor,
    setBodyStyle,
    getProfileName,
    getSpeedKmh,
    setSuspendVehicleControl,
  }
}
