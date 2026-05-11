import * as THREE from 'three'

// Vehicle convention: +X is the car's forward direction (headlights at +X).
// Camera offsets and the _forward vector use this convention.

const MODE_FOLLOW = 0
const MODE_FIRST = 1
const MODE_TOPDOWN = 2
const MODE_FREE = 3
const MODE_COUNT = 4

const MODE_NAMES = ['follow', 'first-person', 'top-down', 'free']

export class CameraRig {
  constructor(camera, controls) {
    this.camera = camera
    this.controls = controls
    this.target = null
    this.mode = MODE_FOLLOW

    this.posLerp = 0.1
    this.lookLerp = 0.15

    // Local-space offsets relative to chassis (+X is forward, standard).
    // Behind = -X, above = +Y. Cabin/hood is at +X.
    this.followOffset = new THREE.Vector3(-8, 4, 0)
    this.hoodOffset = new THREE.Vector3(1.5, 1.2, 0)
    this.topdownHeight = 50

    this._targetPos = new THREE.Vector3()
    this._targetQuat = new THREE.Quaternion()
    this._desiredPos = new THREE.Vector3()
    this._forward = new THREE.Vector3()
    this._lookAt = new THREE.Vector3()
    this._currentLookAt = new THREE.Vector3()
    this._offset = new THREE.Vector3()

    if (this.controls) this.controls.enabled = false

    this._onKey = (e) => {
      if (e.code === 'KeyC' || e.key === 'c' || e.key === 'C') this.cycle()
    }
    window.addEventListener('keydown', this._onKey)
  }

  getModeName() {
    return MODE_NAMES[this.mode]
  }

  setTarget(body) {
    this.target = body
    if (body) {
      this._currentLookAt.set(body.position.x, body.position.y, body.position.z)
    }
  }

  cycle() {
    this.mode = (this.mode + 1) % MODE_COUNT
    if (this.controls) this.controls.enabled = (this.mode === MODE_FREE)
    // Restore world-up; top-down overrides on its own each frame.
    this.camera.up.set(0, 1, 0)
    console.log(`[camera] mode: ${MODE_NAMES[this.mode]}`)
  }

  update(dt) {
    if (!this.target) return

    const p = this.target.position
    const q = this.target.quaternion
    this._targetPos.set(p.x, p.y, p.z)
    this._targetQuat.set(q.x, q.y, q.z, q.w)

    switch (this.mode) {
      case MODE_FOLLOW: {
        this._offset.copy(this.followOffset).applyQuaternion(this._targetQuat)
        this._desiredPos.copy(this._targetPos).add(this._offset)
        this.camera.position.lerp(this._desiredPos, this.posLerp)

        this._currentLookAt.lerp(this._targetPos, this.lookLerp)
        this.camera.lookAt(this._currentLookAt)
        break
      }
      case MODE_FIRST: {
        this._offset.copy(this.hoodOffset).applyQuaternion(this._targetQuat)
        this._desiredPos.copy(this._targetPos).add(this._offset)
        this.camera.position.copy(this._desiredPos)

        // Forward = +X in chassis local space (standard convention).
        this._forward.set(1, 0, 0).applyQuaternion(this._targetQuat)
        this._lookAt.copy(this._desiredPos).add(this._forward)
        this.camera.lookAt(this._lookAt)
        break
      }
      case MODE_TOPDOWN: {
        this._desiredPos.set(
          this._targetPos.x,
          this._targetPos.y + this.topdownHeight,
          this._targetPos.z,
        )
        this.camera.position.copy(this._desiredPos)
        // Looking straight down — give the camera a non-collinear up.
        this.camera.up.set(0, 0, -1)
        this.camera.lookAt(this._targetPos)
        break
      }
      case MODE_FREE: {
        if (this.controls) this.controls.update()
        break
      }
    }
  }

  dispose() {
    window.removeEventListener('keydown', this._onKey)
  }
}
