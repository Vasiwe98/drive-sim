import * as THREE from 'three'
import { createScene } from './scene.js'

const canvas = document.getElementById('game')
const { scene, camera, renderer, controls } = createScene(canvas)

const clock = new THREE.Clock()

function loop() {
  const dt = clock.getDelta()
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
loop()
