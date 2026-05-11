# Vehicle Research — why W produces zero motion

## Suspected root cause (ranked, top first)

### 1. The wheel raycasts do not reach the ground (highest confidence)

In `cannon-es/src/objects/RaycastVehicle.ts` (`castRay`):

```ts
const raylen = wheel.suspensionRestLength + wheel.radius
wheel.directionWorld.scale(raylen, rayvector)
const source = wheel.chassisConnectionPointWorld
source.vadd(rayvector, target)
```

`isInContact` is reset to `false` every frame in `updateWheelTransformWorld` and is set back to `true` only when the ray hits something. `updateSuspension` then does:

```ts
if (wheel.isInContact) {
  // ...spring + damper...
  wheel.suspensionForce = force * chassisMass
} else {
  wheel.suspensionForce = 0
}
```

And `updateFriction` only accumulates `engineForce` into `rollingFriction` when a `groundObject` exists at the wheel. **No contact → no suspension force AND no engine force is transmitted.** That is the exact symptom: pressing W applies engine force, but it goes nowhere.

Geometry check with your current values:

- `spawnPos = (0, 1, 0)` (from `world.js` line 164)
- `CHASSIS_HALF.y = 0.5` → chassis bottom at world y = 0.5
- `chassisConnectionPointLocal.y = 0` → world connection point y = **1.0**
- `directionLocal = (0, -1, 0)`, `raylen = restLength + radius = 0.35 + 0.5 = 0.85`
- Ray endpoint at y = 1.0 − 0.85 = **0.15**
- Ground plane is at y = 0 → **ray tip floats 0.15 m above ground, no hit.**

Earlier when `frictionSlip=1.4` you saw bouncing and a 15 km/h cap — that was a different setup where contact was happening but the wheel was slipping (low μ caps lateral & longitudinal force). With friction now at 5, any incidental contact would grip — so the new symptom (zero motion) is consistent with **no contact at all**, not a friction issue.

### 2. (Secondary) Chassis is sleeping or has no contact wake-up
`world.allowSleep = true` in `physics.js`. With zero ground contact, the chassis can sleep. Even if you fix #1, ensure either `chassisBody.allowSleep = false` or that `applyEngineForce` is forcing waking. Less likely to be the root issue but worth eliminating.

### 3. (Tertiary) `customSlidingRotationalSpeed` is missing
Official example sets `customSlidingRotationalSpeed: -30, useCustomSlidingRotationalSpeed: true`. Your config has `useCustomSlidingRotationalSpeed: false` and omits the speed. This only affects sliding-wheel behaviour, not whether the car moves, but it can cause weird spin-up artifacts once you fix #1.

---

## Reference examples

### A. Official `pmndrs/cannon-es` example
URL: `https://github.com/pmndrs/cannon-es/blob/master/examples/raycast_vehicle.html` (raw: `https://raw.githubusercontent.com/pmndrs/cannon-es/master/examples/raycast_vehicle.html`)

Verbatim:
```js
const chassisShape = new CANNON.Box(new CANNON.Vec3(2, 0.5, 1))
const chassisBody = new CANNON.Body({ mass: 150 })
chassisBody.addShape(chassisShape)
// chassisBody.position.set(0, 4, 0)   // spawned at y=4, not y=1

const wheelOptions = {
  radius: 0.5,
  directionLocal: new CANNON.Vec3(0, -1, 0),
  suspensionStiffness: 30,
  suspensionRestLength: 0.3,
  frictionSlip: 1.4,
  dampingRelaxation: 2.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 0, 1),
  chassisConnectionPointLocal: new CANNON.Vec3(-1, 0, 1),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
}
// addWheel at (-1,0,1), (-1,0,-1), (1,0,1), (1,0,-1)

const maxForce = 1000
const brakeForce = 1000000
// Forward: vehicle.applyEngineForce(-maxForce, 2) and (… , 3)

// Wheel material + contact material
const wheelMaterial = new CANNON.Material('wheel')
const wheel_ground = new CANNON.ContactMaterial(wheelMaterial, groundMaterial, {
  friction: 0.3,
  restitution: 0,
  contactEquationStiffness: 1000,
})
world.addContactMaterial(wheel_ground)
```

Wheel mesh rotation (cannon-side, for the visual cylinder bodies it spawns each frame):
```js
const quaternion = new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0)
```
The official demo uses a `postStep` listener to sync visual cylinder meshes from `wheelBody` instances created during the loop. For your Three.js direct sync via `wheelInfos[i].worldTransform`, see the next section.

### B. Source confirmation (RaycastVehicle internals)
URL: `https://github.com/pmndrs/cannon-es/blob/master/src/objects/RaycastVehicle.ts`

Key facts confirmed from source:
- `addToWorld(world)` registers a `preStep` listener that calls `updateVehicle(world.dt)` — **you do not have to call it yourself.** Your single `world.step(...)` is correct.
- Engine force is integrated as `rollingFriction += wheel.engineForce * timeStep`, then projected along `forwardWS`. With `indexForwardAxis: 0` and a chassis whose local +X is "forward", a positive engineForce pushes +X. The official demo uses **negative** force for "forward" because their model considers −X as forward. Your code does the same (`-MAX_ENGINE_FORCE`) — sign is fine as long as it matches the chassis-orientation convention you chose (you have headlights at −X, so −force = toward headlights = correct).

---

## Wheel axis fix

**Theoretical:** A Three.js `CylinderGeometry` has its axis along local **+Y**. cannon's `RaycastVehicle.updateWheelTransform` builds `worldTransform.quaternion` so that the wheel's spin axis aligns with `axleLocal`. With `axleLocal = (0, 0, 1)`, the wheel's spin axis is **+Z in the chassis local frame**. To map Three.js cylinder (Y-axis) → cannon wheel (Z-axis), rotate the geometry by `+π/2` around X:

```js
geo.rotateX(Math.PI / 2)
```

**Your current code (`vehicle.js` line 133, 137) already does this** — `tireGeo.rotateX(Math.PI / 2)` and `hubGeo.rotateX(Math.PI / 2)`. This is correct.

**Citation:** Official cannon-es demo uses `new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0)` on its own `wheelBody` cylinders (which it adds for visualization only — they're not the simulation). The sign is opposite of yours because they're applying it to a body quaternion that's later multiplied with `worldTransform.quaternion`, whereas you bake it into the geometry. Either approach lands the cylinder axis on local Z. Verified against the `wheelInfos[i].worldTransform.quaternion` consumption path in `examples/raycast_vehicle.html`.

So **wheel axis is not your bug.**

---

## Recommended parameter values

From the official pmndrs/cannon-es example (cited above) for arcade-feel:

| Param | Value |
|---|---|
| chassis mass | 150 |
| chassis half-extents | (2, 0.5, 1) |
| spawn y | **4** (not 1) |
| wheel radius | 0.5 |
| suspensionStiffness | 30 |
| suspensionRestLength | 0.3 |
| frictionSlip | 1.4 (raise to 2–3 for more grip; 5 is high and can cause oscillation/judder) |
| dampingRelaxation | 2.3 |
| dampingCompression | 4.4 |
| maxSuspensionForce | 100000 |
| rollInfluence | 0.01 |
| axleLocal | (0, 0, 1) |
| chassisConnectionPointLocal y | 0 |
| maxSuspensionTravel | 0.3 |
| useCustomSlidingRotationalSpeed | true |
| customSlidingRotationalSpeed | −30 |
| maxForce (engine) | 1000 (sign negative for forward in their convention) |
| brakeForce | 1000000 |

For a 220 kg chassis, scale engine force roughly 220/150 = ~1.47× → ~1500 N is plenty; 2500 is fine once contact is fixed.

---

## Common gotchas list

1. **Spawn too low** — official demo spawns chassis at y=4 precisely so the raycasts hit on first step. Yours is y=1 and the rays don't reach.
2. **No wheel/ground ContactMaterial** — RaycastVehicle's friction model is mostly self-contained, but the chassis box still uses the default contact material when it slams the ground. Add `wheelMaterial` + `groundMaterial` + a `ContactMaterial(friction: 0.3, restitution: 0)` to match the demo. Not the root bug, but recommended.
3. **`allowSleep = true` + zero contact** — chassis can fall asleep with no ground contact and refuse to wake even after the suspension touches. Either set `chassisBody.allowSleep = false` or wake on input.
4. **`world.step` arity** — you call `world.step(1/60, dt, 3)` which is correct (`fixedTimeStep, dt, maxSubSteps`). RaycastVehicle's `preStep` listener fires every substep automatically.
5. **Engine sign convention** — `applyEngineForce(force, wheelIndex)`: positive pushes along the chassis-local forward axis (here +X). You use `-MAX_ENGINE_FORCE` because your "forward" visually is −X. This is internally consistent.
6. **Visual road overlays at y=0.05/0.06** — these are `physics: false`, so they don't help the rays. Good. But the bridge deck, ramps, and walls are all physics-on at y >= 0; once you fix the spawn, the ground plane catches the wheels.
7. **Wheel `chassisConnectionPointLocal.y = 0`** — this is fine. The wheels sit at the chassis equator and the suspension stretches downward 0.3–0.5 m to reach the ground. Wheels overlapping the chassis collider does NOT matter — RaycastVehicle wheels are rays, not colliders.

---

## Code patches to try next

These are concrete, ranked by impact. Apply #1 alone; if motion still fails, add #2.

### Patch 1 — Spawn higher so raycasts reach ground

In `src/world.js`, change the spawnPos:

Before:
```js
return { spawnPos: new CANNON.Vec3(0, 1, 0) }
```

After:
```js
return { spawnPos: new CANNON.Vec3(0, 4, 0) }
```

Math: with connection-point y at world `4 + 0 = 4`, ray goes from y=4 down 0.85 m to y=3.15 — still above ground. **That's wrong too.** Let me redo. Connection point is at chassisBody y + 0 = 4. Ray endpoint = 4 − 0.85 = 3.15. Ground is y=0. The ray won't hit. **Unless the rays update on subsequent frames after gravity drops the body.** That IS what happens: cannon doesn't expect the rays to hit at spawn — gravity pulls the chassis down for a few frames, then the ray catches the ground when chassis y is below `0.85 m` (specifically when connection-point y ≤ raylen = 0.85). With `chassisConnectionPointLocal.y = 0`, that means chassis y ≤ 0.85 — meaning chassis bottom (y − 0.5) ≤ 0.35, so the chassis box itself would be partly through the ground before rays catch.

That's the real issue: **the connection point and raylen geometry can't catch the ground before the chassis box does.** At spawn y=1, the chassis bottom is at y=0.5; gravity pulls it down; chassis box hits ground when y=0.5 and stops (because chassis collider rests on the plane). At that moment connection point is at y=0.5, ray endpoint at y=0.5 − 0.85 = **−0.35** — so the ray WOULD hit. But by then, the chassis is resting on its own box collider, which blocks the wheels from doing their job. **Result: chassis on ground, wheels theoretically in contact, but the chassis-box-on-plane contact carries all the weight; suspension never compresses past rest length so the wheel sits in the air.** With `isInContact = true` but `suspensionLength ≈ restLength`, friction works but engine force fights against the chassis-box-on-plane sliding friction. With ground default contact material μ ≈ 0.3 between chassis box and ground plane, and a 220 kg chassis on its box, static friction = 220 · 9.82 · 0.3 ≈ 648 N. Engine force 2500 N should still push it… **unless the wheels report `isInContact = false`** because the ray tip is exactly at the ground, and floating-point edge case + raycast plane tolerance makes it miss. Most likely.

**Real fix — raise connection points so wheels carry the chassis off the ground:**

In `src/vehicle.js`, change `chassisConnectionPointLocal` to put wheels below the chassis bottom:

Before (lines 47–53):
```js
wheelOptions.chassisConnectionPointLocal.set(-1, 0, 1)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(-1, 0, -1)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(1, 0, 1)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(1, 0, -1)
vehicle.addWheel(wheelOptions)
```

After (keep wheels mounted near chassis bottom — y = −0.3 instead of 0):
```js
wheelOptions.chassisConnectionPointLocal.set(-1, -0.3, 1)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(-1, -0.3, -1)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(1, -0.3, 1)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(1, -0.3, -1)
vehicle.addWheel(wheelOptions)
```

And in `src/world.js` raise spawn so the wheels have settle room:
```js
return { spawnPos: new CANNON.Vec3(0, 1.5, 0) }
```

Geometry check: connection point world y = 1.5 + (−0.3) = 1.2. Ray endpoint = 1.2 − 0.85 = 0.35. Still above ground — wait. We need ray endpoint ≤ 0 (ground), so `connectionY − raylen ≤ 0` → connectionY ≤ 0.85. At rest we want suspension at rest length (0.35), so wheel center sits 0.35 below connection point, wheel bottom is `radius=0.5` below that → wheel bottom = connectionY − 0.85. For wheel bottom to touch ground: connectionY = 0.85, so chassis y = 0.85 − connY_local. If connY_local = −0.3, chassis y at rest = 1.15. Chassis bottom (y − 0.5) = 0.65 — safely above ground.

**So the actual minimal patch:** lower `chassisConnectionPointLocal.y` to **−0.3** (or even −0.4) so the wheels stick out below the chassis box. Spawn at y ≈ 1.5 to give gravity room to settle. This guarantees the wheels — not the chassis box — make ground contact.

### Patch 2 — Disable sleep on chassis (defensive)

In `src/vehicle.js` after `world.addBody(chassisBody)`:
```js
chassisBody.allowSleep = false
```

### Patch 3 — Restore official friction values

In `src/vehicle.js` wheelOptions:
```js
frictionSlip: 2.5,            // was 5 — high values cause judder/lock
useCustomSlidingRotationalSpeed: true,
customSlidingRotationalSpeed: -30,
```

### Patch 4 — Add wheel/ground ContactMaterial (cosmetic, helps stability)

In `src/physics.js`, expose `groundMaterial` (already done) and in `src/vehicle.js`:
```js
// (Pass groundMaterial into createVehicle, then:)
const wheelMaterial = new CANNON.Material('wheel')
world.addContactMaterial(new CANNON.ContactMaterial(wheelMaterial, groundMaterial, {
  friction: 0.3, restitution: 0, contactEquationStiffness: 1000,
}))
```

---

## TL;DR

The wheels' raycasts can't establish ground contact because `chassisConnectionPointLocal.y = 0` plus `raylen = 0.85` plus the chassis collider being 0.5 m thick means the chassis box hits the plane before the rays do. Fix: set `chassisConnectionPointLocal.y = -0.3` (wheels mounted at chassis underside) and spawn at y ≈ 1.5. Everything else (axis convention, force sign, world stepping) is already correct.
