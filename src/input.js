// Single shared input-state object. Other modules read from this.
// Keyboard: WASD or arrow keys for drive, Space for handbrake, C to cycle cameras.
export const input = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  brake: false,
}

// Edge-event callbacks (fire once per press), e.g. for camera cycling.
const onceListeners = new Set()
export function onKeyDownOnce(code, fn) {
  onceListeners.add({ code, fn })
}

const continuousMap = {
  KeyW: 'forward', ArrowUp: 'forward',
  KeyS: 'backward', ArrowDown: 'backward',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
  Space: 'brake',
}

window.addEventListener('keydown', (e) => {
  const key = continuousMap[e.code]
  if (key) {
    input[key] = true
    if (e.code !== 'Space') e.preventDefault() // keep space scroll-prevention conservative
    else e.preventDefault()
  }
  for (const { code, fn } of onceListeners) {
    if (e.code === code && !e.repeat) fn()
  }
})

window.addEventListener('keyup', (e) => {
  const key = continuousMap[e.code]
  if (key) {
    input[key] = false
    e.preventDefault()
  }
})
