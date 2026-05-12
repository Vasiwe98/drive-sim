// Settings: color + day/night. Persisted to localStorage. The
// body-style selector was removed after the per-vehicle profile work
// caused unexplained vertical bouncing on non-coupe cars — the car
// configuration is now the byte-exact bridge-working-v15 baseline.

const KEY = 'drive-sim-settings-v1'

export const TIMES_OF_DAY = [
  { id: 'day',   label: '☀ Day' },
  { id: 'night', label: '☾ Night' },
]

const DEFAULTS = { color: '#c23b22', time: 'day' }
const TIME_IDS = new Set(TIMES_OF_DAY.map(t => t.id))

function clean(s) {
  const out = { color: DEFAULTS.color, time: DEFAULTS.time, ...s }
  if (typeof out.color !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(out.color)) out.color = DEFAULTS.color
  if (!TIME_IDS.has(out.time)) out.time = DEFAULTS.time
  // Drop any legacy fields (e.g. `style`) from older builds.
  return { color: out.color, time: out.time }
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
