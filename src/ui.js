import { loadSettings, saveSettings } from './settings.js'

const landing = document.getElementById('landing')
const startBtn = document.getElementById('start-btn')

function initSettingsUI() {
  const s = loadSettings()

  const colorInput = document.getElementById('setting-color')
  if (colorInput) {
    colorInput.value = s.color
    colorInput.addEventListener('input', (e) => saveSettings({ color: e.target.value }))
  }

  const styleButtons = document.querySelectorAll('#setting-style button')
  for (const btn of styleButtons) {
    if (btn.dataset.style === s.style) btn.classList.add('active')
    btn.addEventListener('click', () => {
      for (const b of styleButtons) b.classList.remove('active')
      btn.classList.add('active')
      saveSettings({ style: btn.dataset.style })
    })
  }

  const timeButtons = document.querySelectorAll('#setting-time button')
  for (const btn of timeButtons) {
    if (btn.dataset.time === s.time) btn.classList.add('active')
    btn.addEventListener('click', () => {
      for (const b of timeButtons) b.classList.remove('active')
      btn.classList.add('active')
      saveSettings({ time: btn.dataset.time })
    })
  }
}
initSettingsUI()

let started = false
const startCallbacks = new Set()
const stopCallbacks = new Set()

export function onStart(fn) { startCallbacks.add(fn) }
export function onStop(fn) { stopCallbacks.add(fn) }

export function hideLanding() {
  if (started) return
  started = true
  landing.classList.add('hidden')
  for (const fn of startCallbacks) fn()
}

export function showLanding() {
  if (!started) return
  started = false
  landing.classList.remove('hidden')
  for (const fn of stopCallbacks) fn()
}

if (startBtn) {
  startBtn.addEventListener('click', hideLanding)
}

window.addEventListener('keydown', (e) => {
  if (!started && (e.code === 'Enter' || e.code === 'Space')) {
    hideLanding()
  }
  if (started && e.code === 'Escape') {
    showLanding()
  }
})

// Simple HUD bottom-right with camera mode + speed.
const hud = document.createElement('div')
hud.id = 'hud'
hud.style.cssText = `
  position: fixed; bottom: 14px; right: 14px; z-index: 5;
  background: rgba(20,24,40,0.65); color: white;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 12px; padding: 8px 12px; border-radius: 8px;
  pointer-events: none; user-select: none;
  min-width: 130px; text-align: right;
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
`
hud.innerHTML = `<div id="hud-vehicle" style="font-weight:600;letter-spacing:0.5px;">Porsche 911</div><div id="hud-camera">camera: follow</div><div id="hud-speed">0 km/h</div><div style="margin-top:4px;opacity:0.6;font-size:10px;">ESC: menu · C: camera</div><div style="margin-top:2px;opacity:0.35;font-size:9px;">build ${__BUILD_TIME__}</div>`
document.body.appendChild(hud)

const hudVehicle = hud.querySelector('#hud-vehicle')
const hudCamera = hud.querySelector('#hud-camera')
const hudSpeed = hud.querySelector('#hud-speed')

export const ui = {
  isStarted: () => started,
  setCameraMode: (name) => { hudCamera.textContent = `camera: ${name}` },
  setSpeed: (kmh) => { hudSpeed.textContent = `${Math.round(kmh)} km/h` },
  setVehicleName: (name) => { hudVehicle.textContent = name },
}
