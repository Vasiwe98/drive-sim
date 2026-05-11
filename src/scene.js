import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const SKY_COLOR = 0x87ceeb
const GROUND_COLOR = 0x4a7c3a

export function createScene(canvas) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(SKY_COLOR)
  scene.fog = new THREE.Fog(SKY_COLOR, 80, 280)

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(12, 8, 12)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const hemi = new THREE.HemisphereLight(0xffffff, 0x3a5a2a, 0.7)
  scene.add(hemi)

  const sun = new THREE.DirectionalLight(0xffffff, 1.2)
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
    new THREE.MeshStandardMaterial({ color: GROUND_COLOR })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.target.set(0, 0, 0)

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  return { scene, camera, renderer, controls }
}
