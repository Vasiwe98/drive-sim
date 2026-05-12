// Minimal per-frame debug HUD so we can see what's actually happening
// when the car "doesn't move." Toggled by ?debug=1 in the URL, OR always
// on if visible: true is passed.

// Bumped each deploy so we can verify the live bundle isn't stale via the HUD.
const DEPLOY_TAG = '2026-05-12-down-ramp-yaw-fix-v13'

let panel = null
let lastTick = 0

export function createDebugPanel(force = false) {
  const enable = force || new URLSearchParams(location.search).has('debug')
  if (!enable) return null
  panel = document.createElement('div')
  panel.id = 'debug-panel'
  panel.style.cssText = `
    position: fixed; bottom: 14px; left: 14px; z-index: 5;
    background: rgba(20,24,40,0.78); color: #b9ffb9;
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 11px; padding: 8px 10px; border-radius: 6px;
    pointer-events: none; user-select: none;
    min-width: 220px; white-space: pre;
    backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
  `
  document.body.appendChild(panel)
  return panel
}

export function updateDebugPanel(car) {
  if (!panel) return
  // Throttle to ~10 Hz
  const now = performance.now()
  if (now - lastTick < 100) return
  lastTick = now

  const b = car.chassisBody
  const v = car.vehicle
  const inContact = v.wheelInfos.map(w => w.raycastResult.body ? 1 : 0)
  const sumContact = inContact.reduce((a, c) => a + c, 0)
  const engineForces = v.wheelInfos.map(w => w.engineForce | 0)
  const suspensionForces = v.wheelInfos.map(w => (w.suspensionForce | 0))
  const suspensionLengths = v.wheelInfos.map(w => w.suspensionLength.toFixed(2))

  // Per-wheel raycast diagnostics, populated by the patched castRay.
  // Format: 'H' = hit (then dist), 'X' = rejected (back-face), '-' = miss.
  // nY = Y component of hit normal (+1 = top face, -1 = bottom).
  const rayDiag = v.wheelInfos.map(w => {
    const d = w.__diag
    if (!d) return '?'
    const tag = d.rejected ? 'X' : d.rawHit ? 'H' : '-'
    if (tag === '-') return tag
    return `${tag}d${d.rawDist.toFixed(2)}n${d.rawNormY >= 0 ? '+' : ''}${d.rawNormY.toFixed(1)}`
  })
  const srcY = v.wheelInfos[0].__diag ? v.wheelInfos[0].__diag.srcY.toFixed(2) : '?'
  const tgtY = v.wheelInfos[0].__diag ? v.wheelInfos[0].__diag.tgtY.toFixed(2) : '?'

  panel.textContent =
    `build ${DEPLOY_TAG}\n` +
    `chassis pos  ${b.position.x.toFixed(2)} ${b.position.y.toFixed(2)} ${b.position.z.toFixed(2)}\n` +
    `chassis vel  ${b.velocity.x.toFixed(2)} ${b.velocity.y.toFixed(2)} ${b.velocity.z.toFixed(2)}\n` +
    `wheels in contact ${sumContact}/4   [${inContact.join(' ')}]\n` +
    `engine force [${engineForces.join(' ')}]\n` +
    `suspensionForce [${suspensionForces.join(' ')}]\n` +
    `suspensionLength [${suspensionLengths.join(' ')}]\n` +
    `ray src.y=${srcY} → tgt.y=${tgtY} (wheel 0)\n` +
    `ray hits: ${rayDiag.join('  ')}\n` +
    `manualHits: [${v.wheelInfos.map(w => (w.__diag ? w.__diag.manualHits : '?')).join(' ')}]\n` +
    `mass ${b.mass}  sleeping ${b.sleepState}\n` +
    `P=physics wireframe  ?spawn=deck`
}
