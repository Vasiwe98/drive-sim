import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const DAY = {
  sky: 0x87ceeb,
  fog: 0x87ceeb,
  hemiSky: 0xfff5d6,
  hemiGround: 0x3a5a2a,
  hemiI: 0.65,
  sun: 0xfff5d0,
  sunI: 1.2,
}
const NIGHT = {
  sky: 0x0a1428,
  fog: 0x0a1428,
  hemiSky: 0x223060,
  hemiGround: 0x0a1018,
  hemiI: 0.12,
  sun: 0xb8c8ff,
  sunI: 0.18,
}

// Directional light direction (sunlight comes FROM here). Same vector is
// reused at night as the moonlight direction.
const SUN_DIR = new THREE.Vector3(40, 60, 20).normalize()
// How far up in the sky to place the celestial body. Just inside fog far
// (280 m) so it sits in the sky dome and fades gracefully near horizon.
const CELESTIAL_DIST = 240

export function createScene(canvas) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(DAY.sky)
  scene.fog = new THREE.Fog(DAY.sky, 80, 280)

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(12, 8, 12)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const hemi = new THREE.HemisphereLight(DAY.hemiSky, DAY.hemiGround, DAY.hemiI)
  scene.add(hemi)

  const sun = new THREE.DirectionalLight(DAY.sun, DAY.sunI)
  sun.position.set(40, 60, 20)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.left = -80
  sun.shadow.camera.right = 80
  sun.shadow.camera.top = 80
  sun.shadow.camera.bottom = -80
  sun.shadow.camera.near = 1
  sun.shadow.camera.far = 200
  scene.add(sun)

  const celestialPos = SUN_DIR.clone().multiplyScalar(CELESTIAL_DIST)

  // Visible sun disc. fog:false so the disc isn't washed out by horizon fog.
  const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(8, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0xffe7a0, fog: false })
  )
  sunMesh.position.copy(celestialPos)
  scene.add(sunMesh)

  // Sun halo: larger, dim, additive — reads as a soft glow.
  const sunHalo = new THREE.Mesh(
    new THREE.SphereGeometry(13, 24, 16),
    new THREE.MeshBasicMaterial({
      color: 0xffd58a,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    })
  )
  sunHalo.position.copy(celestialPos)
  scene.add(sunHalo)

  // Visible moon disc. Same position as the sun — we treat moonlight as
  // coming from the same direction as sunlight, just dimmer and cooler.
  const moonMesh = new THREE.Mesh(
    new THREE.SphereGeometry(5, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0xe4e8ff, fog: false })
  )
  moonMesh.position.copy(celestialPos)
  moonMesh.visible = false
  scene.add(moonMesh)

  // Starfield: ~800 points evenly distributed on a sphere just inside fog
  // far, so they feel embedded in the night sky and fade near the horizon.
  // Golden-spiral distribution avoids the visible "pole clustering" of
  // naive (asin(2u-1), 2πv) sampling.
  const STAR_COUNT = 800
  const STAR_RADIUS = 250
  const starPositions = new Float32Array(STAR_COUNT * 3)
  const golden = Math.PI * (1 + Math.sqrt(5))
  for (let i = 0; i < STAR_COUNT; i++) {
    const t = (i + 0.5) / STAR_COUNT
    const phi = Math.acos(1 - 2 * t)        // 0..π (pole to pole)
    const theta = i * golden                // azimuth
    const r = STAR_RADIUS
    // Keep stars above the horizon (y > 0) only; the bottom half of the
    // sphere is below ground and would never be seen anyway. Reflect any
    // below-horizon point upward.
    const sinPhi = Math.sin(phi)
    const x = r * sinPhi * Math.cos(theta)
    const y = Math.abs(r * Math.cos(phi))   // force upper hemisphere
    const z = r * sinPhi * Math.sin(theta)
    starPositions[i * 3 + 0] = x
    starPositions[i * 3 + 1] = y
    starPositions[i * 3 + 2] = z
  }
  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  const starMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.2,
    sizeAttenuation: true,
    fog: false,
  })
  const stars = new THREE.Points(starGeo, starMat)
  stars.visible = false
  scene.add(stars)

  // Ground sized to match the arena (220x220) so the visible grass ends
  // right where the boundary walls are — no driving "off the world."
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(220, 220),
    new THREE.MeshStandardMaterial({ color: 0x4a7c3a })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.target.set(0, 0, 0)

  function setTimeOfDay(mode) {
    const night = mode === 'night'
    const p = night ? NIGHT : DAY
    scene.background.setHex(p.sky)
    scene.fog.color.setHex(p.fog)
    hemi.color.setHex(p.hemiSky)
    hemi.groundColor.setHex(p.hemiGround)
    hemi.intensity = p.hemiI
    sun.color.setHex(p.sun)
    sun.intensity = p.sunI
    sunMesh.visible = !night
    sunHalo.visible = !night
    moonMesh.visible = night
    stars.visible = night
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  return { scene, camera, renderer, controls, setTimeOfDay }
}
