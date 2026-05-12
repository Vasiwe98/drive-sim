// Settings: color, body style, day/night. Persisted to localStorage.
// Other modules import loadSettings() for initial values and
// onSettingsChange(cb) to react when the user changes a control.

const KEY = 'drive-sim-settings-v1'

export const BODY_STYLES = [
  { id: 'coupe',  label: 'Coupe' },
  { id: 'sedan',  label: 'Sedan' },
  { id: 'suv',    label: 'SUV' },
  { id: 'muscle', label: 'Muscle' },
]

export const TIMES_OF_DAY = [
  { id: 'day',   label: '☀ Day' },
  { id: 'night', label: '☾ Night' },
]

const DEFAULTS = { color: '#c23b22', style: 'coupe', time: 'day' }
const STYLE_IDS = new Set(BODY_STYLES.map(s => s.id))
const TIME_IDS = new Set(TIMES_OF_DAY.map(t => t.id))

function clean(s) {
  const out = { ...DEFAULTS, ...s }
  if (typeof out.color !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(out.color)) out.color = DEFAULTS.color
  if (!STYLE_IDS.has(out.style)) out.style = DEFAULTS.style
  if (!TIME_IDS.has(out.time)) out.time = DEFAULTS.time
  return out
}

export function loadSettings() {
  try {
    const raw = localStorage.getItem(KEY)
    return clean(raw ? JSON.parse(raw) : {})
  } catch {
    return { ...DEFAULTS }
  }
}

export function saveSettings(partial) {
  const next = clean({ ...loadSettings(), ...partial })
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch {}
  window.dispatchEvent(new CustomEvent('settings-change', { detail: next }))
  return next
}

export function onSettingsChange(cb) {
  window.addEventListener('settings-change', e => cb(e.detail))
}
