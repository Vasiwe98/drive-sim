import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const DAY = {
  sky: 0x87ceeb,
  fog: 0x87ceeb,
  hemiSky: 0xffffff,
  hemiGround: 0x3a5a2a,
  hemiI: 0.7,
  sun: 0xffffff,
  sunI: 1.2,
}
const NIGHT = {
  sky: 0x0a1428,
  fog: 0x0a1428,
  hemiSky: 0x4060a0,
  hemiGround: 0x0a1018,
  hemiI: 0.18,
  sun: 0xb0c0ff,
  sunI: 0.25,
}

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
    const p = mode === 'night' ? NIGHT : DAY
    scene.background.setHex(p.sky)
    scene.fog.color.setHex(p.fog)
    hemi.color.setHex(p.hemiSky)
    hemi.groundColor.setHex(p.hemiGround)
    hemi.intensity = p.hemiI
    sun.color.setHex(p.sun)
    sun.intensity = p.sunI
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  return { scene, camera, renderer, controls, setTimeOfDay }
}
