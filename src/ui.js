const landing = document.getElementById('landing')
const startBtn = document.getElementById('start-btn')

let started = false
const startCallbacks = new Set()

export function onStart(fn) {
  startCallbacks.add(fn)
}

export function hideLanding() {
  if (started) return
  started = true
  landing.classList.add('hidden')
  for (const fn of startCallbacks) fn()
}

if (startBtn) {
  startBtn.addEventListener('click', hideLanding)
}

window.addEventListener('keydown', (e) => {
  if (!started && (e.code === 'Enter' || e.code === 'Space')) {
    hideLanding()
  }
})

export const ui = {
  isStarted: () => started,
}
