# cannon-es RaycastVehicle "Sinking Into Static Deck" — Research Findings

**Investigation date:** 2026-05-11
**Symptom:** Car sinks below the static bridge deck at the ramp→deck transition; chassis visibly drops relative to wheels mid-climb; final settle on deck is below the expected ride height (4.139m).

---

## Executive summary

After reviewing the cannon-es source, the official example, and a dozen GitHub issues / forum threads, **three findings stand out as overwhelmingly likely root causes**, in this rough order:

1. **The wheel raycast length is `suspensionRestLength + radius`. It does NOT include `maxSuspensionTravel`.** With our values (restLength=0.3, radius=0.5) the ray is only 0.8 m long. From the chassis-local wheel mount at chassis y=−0.15, that means the ray only reaches **0.5 m below the chassis center**. If the chassis is anywhere above ~0.5m over the deck, *no wheel will hit the deck at all* — and when wheels aren't in contact, `suspensionForce = 0` (verified in source). The chassis is then in pure free-fall until it has dropped far enough for the rays to reach the deck again. This is *the* classic "wheels sink under heavy load" bug, and the Bullet community has documented it for >15 years. ([Bullet forum confirmation](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=8105))

2. **Heavy chassis (1500 kg) with suspensionStiffness=40 is borderline. The cannon-es formula is `force = stiffness × length_diff × clippedInvContactDotSuspension × chassisMass`.** The mass IS already in the formula — but the *equilibrium compression* you need to support gravity scales as `g / stiffness`, so 1500 kg with stiffness=40 needs compression ≈ 9.81/40 = 0.245 m to balance. With restLength=0.3 and maxSuspensionTravel=0.3, that's plausible at rest, but the moment something briefly lifts the chassis, the wheels lose contact (ray too short, see #1), force collapses to zero, and the car free-falls back down. This is also what the Bullet thread describes as "wheels can sink ~1/3 wheel radius before recovering."

3. **`body.position` direct-set without also updating `body.previousPosition` creates a phantom velocity that confuses CCD, broadphase interpolation, and the wheel raycasts that fire BEFORE the integrator runs.** cannon-es uses `previousPosition` to compute interpolated render position AND for several internal step calculations. Setting only `position` means the engine sees a frame-rate-dependent jump that can desync chassis from the deck-physics-body's known AABB position.

The combination of #1 + #2 explains the climb-time "chassis sags relative to tyres" report (wheels are off the ramp's no-physics zone AND under-suspended), and #3 explains the discontinuity at the handoff moment. Fix #1 first; it's nearly always the dominant cause.

---

## 1. Likely root causes (ranked)

### Rank A — Ray length too short for high chassis / fast transition

**Evidence:**

cannon-es `RaycastVehicle.ts`, `castRay()` (verified from source):
```
const raylen = wheel.suspensionRestLength + wheel.radius
wheel.directionWorld.scale(raylen, rayvector)
const source = wheel.chassisConnectionPointWorld
source.vadd(rayvector, target)
this.world!.rayTest(source, target, raycastResult)
```

And when no hit:
```
wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel
wheel.clippedInvContactDotSuspension = 1.0
```
→ `length_diff` becomes zero → **`wheel.suspensionForce = 0`** → no upward force, gravity wins.

(Source: [cannon-es RaycastVehicle.ts](https://github.com/pmndrs/cannon-es/blob/master/src/objects/RaycastVehicle.ts))

With our values:
- Wheel mount in chassis-local: `y = −0.15`
- Chassis equilibrium y ≈ 0.889 above surface
- Wheel mount world-y ≈ 0.889 − 0.15 = 0.739 above surface
- Ray length = 0.3 + 0.5 = **0.8 m**
- → Ray reaches surface only when wheel mount is within 0.8 m of surface

**Now the failure case at handoff:**
- During the climb the rampController is force-setting chassis.y to surface + 0.889. The wheels (visually overridden to surface+radius) are fine.
- The controller releases at extendHigh = 2.5 m onto the deck → chassis y = 4.139, deck top y = 3.25, mount y ≈ 3.989, ray reaches down to y = 3.989 − 0.8 = **3.189**.
- Deck top is at y = 3.25. **The ray ends at 3.189, which is 0.061 m below the deck top — barely a hit.** Any micro-bounce, any phantom upward velocity from the controller release, any frame where the chassis is even 6 cm higher than equilibrium, the rays miss entirely. Wheels go to "no contact" → zero suspension force → chassis falls.

This is also exactly why removing slope-vy during engagement *broke* the climb — once gravity ate into vertical position, even your direct-set fell behind by enough that wheels were too high on release.

**Bullet community has documented this exact pathology:** ["When the spring is fully compressed, it cannot provide enough force to keep the vehicle's chassis off the ground"](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=8105). The general advice there is to "extend the chassis collision object to reach the fully-compressed suspension point" — i.e., use the chassis box itself as the failsafe. Multiple commenters report this works, others note it makes ride choppy.

### Rank B — Suspension stiffness woefully low for chassis mass

**Evidence:**

cannon-es `WheelInfo.ts` defaults: **suspensionStiffness=100**. Official example uses **30** but with **chassis mass=150** (10× lighter than ours).

The actual force formula (from source):
```
force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension
force -= susp_damping * projected_rel_vel
wheel.suspensionForce = force * chassisMass
```

So at rest, with 4 wheels supporting weight `m·g`:
- `4 × stiffness × compression × m = m·g`
- `compression = g / (4 × stiffness)`
- For stiffness=40: `compression = 9.81 / 160 = 0.0613 m` (matches your spawn analysis)

That's only ~6 cm of compression to support weight. With maxSuspensionTravel=0.3, that leaves only 0.24 m of *extension* travel — but actually it works fine numerically. **The mass scaling is correct in cannon-es**; it's not the user's job to multiply by mass.

The real issue: stiffness=40 is in the same ballpark as the example's 30 — both are quite soft. With a high mass car, a soft suspension means slow response. If the wheels lose contact for a single frame (per #A), the recovery oscillation is gentle. The car *settles* below equilibrium because the under-damped soft system swings past and the dampers don't kill the down-velocity fast enough.

Recommended stiffness for the example (150 kg) is 30, so per-mass scaling is about **0.2 units of stiffness per kg**. For our 1500 kg car, a like-for-like stiffness would be **~200–300**. The default is 100. **40 is far too soft for 1500 kg.**

Sources:
- [WheelInfo defaults in cannon-es](https://github.com/pmndrs/cannon-es/blob/master/src/objects/WheelInfo.ts) (default 100)
- [Official raycast_vehicle.html example](https://github.com/pmndrs/cannon-es/blob/master/examples/raycast_vehicle.html) (mass 150, stiffness 30)
- [Bullet forum advice](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=8105) ("damping ≈ 2 × sqrt(stiffness)")

### Rank C — `body.position` direct-set without `previousPosition` sync

**Evidence:**

cannon-es `Body.ts`:
```typescript
this.previousPosition.copy(this.position)
// ...only inside integrate()
```

When you set `chassisBody.position.y = ...` directly during your controller, `previousPosition` is NOT updated. Internally cannon uses `previousPosition` for:
- Render-time interpolation (visible jitter at handoff)
- Some constraint solver predictions

`RaycastVehicle.castRay()` uses **`chassisConnectionPointWorld`** which is computed from current `chassisBody.position` at the time `vehicle.updateVehicle()` runs (called inside `world.step()` via constraint pre-step). If the position update happened mid-step, the rays fire from an inconsistent place relative to the integrator's view of where the body "was."

**The fix is documented in the [Body.ts constructor](https://github.com/pmndrs/cannon-es/blob/master/src/objects/Body.ts):** when constructing with a `position`, both `position` and `previousPosition` are copied. For teleports, the recommended pattern is:
```js
body.position.set(x, y, z)
body.previousPosition.copy(body.position)
body.interpolatedPosition.copy(body.position)
body.initPosition.copy(body.position)
```

### Rank D — Wheel raycast collisionResponse trick disturbs detection at static-body boundaries

**Evidence:**

cannon-es `RaycastVehicle.castRay()`:
```typescript
const oldState = chassisBody.collisionResponse
chassisBody.collisionResponse = false
this.world!.rayTest(source, target, raycastResult)
chassisBody.collisionResponse = oldState
```

[Issue #364 in schteppe/cannon.js](https://github.com/schteppe/cannon.js/issues/364) confirms: "Ray intersections are not reported by `world.raycastAll()` for bodies that have `collisionResponse` set to false." Combined with [#198 in pmndrs/cannon-es](https://github.com/pmndrs/cannon-es/issues/198): "RaycastAll fails to detect sleeping and static bodies at expected y position" — this is an OPEN cannon-es bug.

The Ray uses `checkCollisionResponse` option (default `true`). When you raycast against the world, the ray internally filters out bodies whose `collisionResponse === false`. This is fine for excluding the chassis. But the cannon-es Ray code further has a special path for sleeping/static bodies whose AABB may be stale (#198). If your static deck is added to the world and goes to sleep (statics are effectively always "sleeping"), the AABB is computed once. If the broadphase cache thinks the deck is at a different location, the ray can miss.

**Workaround:** Force-update AABB after world add:
```js
deckBody.aabbNeedsUpdate = true
deckBody.updateAABB()
// And/or:
world.broadphase.dirty = true
```

This is a long shot but cheap to try.

### Rank E — Overlapping static box edge (deck + extension) creates internal-edge raycast misses

**Evidence (weaker, but plausible):**

You've added invisible extensions that share an edge or overlap with the deck. cannon-es uses an SAP/Naive broadphase against AABBs. Two static AABBs that overlap don't trigger broadphase issues per se, but rays passing very close to a shared internal edge can hit the *back face* of one body and the *front face* of another in the same ray, and the closest hit ordering can flip frame-to-frame.

For RaycastVehicle this means the wheel might report alternating contact normals (deck face vs extension face) which are technically identical (both `(0,1,0)`) so shouldn't matter — but `wheel.clippedInvContactDotSuspension` is sensitive to normal precision. If two adjacent rays return slightly different normals (numeric precision differences in AABB-ray hit), the force differs across wheels frame-to-frame, causing jitter and bias.

**Fix:** make the deck wider rather than adding a separate extension, OR ensure extensions are *strictly outside* the deck footprint (no overlap, no shared edge — leave a tiny gap or make them coplanar non-overlapping rectangles). Alternatively, use a `Trimesh` or `ConvexPolyhedron` for the combined deck+extension shape.

Sources:
- General Bullet/PhysX "internal edge problem" — well-documented across game physics engines.
- The Bullet RaycastVehicle is the direct ancestor of cannon-es's; the same issue applies.

### Rank F — `applyForce` + manual `position.set` combination

**Evidence:**

cannon-es `Body.applyForce` adds to an internal `force` vector that the integrator consumes in `integrate()`. When you set `position` directly *and* call `applyForce`, here is the order during `world.step(dt)`:

1. `preStep` callbacks (including yours? unclear from your description)
2. RaycastVehicle's internal `updateVehicle()` → `updateWheelTransform` → `castRay` (uses current `chassisBody.position`)
3. The integrator: `velocity += (force/mass) * dt; position += velocity * dt`
4. `previousPosition = position` (now stale-updated)

If `rampController` runs *after* `world.step()` in your loop, then your position-set happens AFTER the integrator has already moved the body. The next frame's raycasts fire from your overridden position — fine. But your velocity-set is also clobbering whatever the engine just integrated. The chassis isn't in steady state; it's in a 4-way tug-of-war between gravity, your applied force, your position override, and the suspension force on every frame.

**Recommendation:** Switch the chassis to `Body.KINEMATIC` while the controller is engaged, OR set `chassisBody.type = Body.STATIC` temporarily, OR just zero gravity influence on it (`gravityScale = 0` if available — cannon-es supports this via `body.collisionFilterGroup` workarounds; cleaner: cancel gravity via your slope-vy as you already do).

The cleanest pattern is:
```js
chassisBody.type = CANNON.Body.KINEMATIC // while on ramp
chassisBody.velocity.set(...)            // engine moves body by velocity
// no applyForce, no position.set
chassisBody.type = CANNON.Body.DYNAMIC   // when releasing onto deck
```
Kinematic bodies move by velocity, are not affected by forces (including gravity), and you don't need to fight integrators. ([cannon-es Body docs](https://pmndrs.github.io/cannon-es/docs/classes/Body.html))

---

## 2. Concrete fixes to try (ordered by likely impact)

### Fix #1 (DO FIRST): Lengthen the wheel ray

This is almost certainly the dominant bug. Options:

**(a) Increase `suspensionRestLength`.** This directly lengthens the ray AND the natural ride height. But it also softens the suspension (more compression to reach equilibrium). With our heavy chassis, going from 0.3 → 0.6 may help drastically:
```js
suspensionRestLength: 0.6
```
At equilibrium, compression ≈ 0.245 m (g/4·stiffness for stiffness=40), so ride height settles at ~0.355m from mount. Set wheel mount lower in chassis-local (y = −0.355) and chassis y at spawn = ~0.855. Ray length = 0.6 + 0.5 = 1.1 m. Much more forgiving.

**(b) Better: Increase stiffness first, then balance restLength.** See Fix #2.

**(c) Patch the ray length at runtime.** cannon-es exposes `wheel.suspensionRestLength` directly. You can monkey-patch by extending `wheel.suspensionRestLength` (or override `castRay`):
```js
// Patch castRay to use a longer ray
const origCastRay = vehicle.castRay.bind(vehicle);
vehicle.castRay = function(wheel) {
  const saved = wheel.suspensionRestLength;
  wheel.suspensionRestLength = saved + wheel.maxSuspensionTravel; // include travel
  const r = origCastRay(wheel);
  wheel.suspensionRestLength = saved;
  return r;
};
```
This makes the ray = restLength + maxTravel + radius (0.3 + 0.3 + 0.5 = 1.1 m). Same effect as (a) without changing equilibrium.

### Fix #2: Stiffen the suspension proportionally to mass

Scale stiffness up from 40 to ~200–300 for a 1500kg chassis. Also use proper damping — cannon-es default for both `dampingCompression` and `dampingRelaxation` is **10**. Your config doesn't mention them — verify you're not getting `10` accidentally (likely fine, but check).

Per Bullet community advice: `damping ≈ 0.5 × 2 × √stiffness`. For stiffness=200:
- `√200 ≈ 14.14`
- `dampingCompression ≈ 0.4 × 2 × 14.14 ≈ 11.3`
- `dampingRelaxation ≈ 0.3 × 2 × 14.14 ≈ 8.5`

Concrete recommended block:
```js
const wheelOptions = {
  radius: 0.5,
  directionLocal: new CANNON.Vec3(0, -1, 0),
  axleLocal: new CANNON.Vec3(0, 0, 1),
  suspensionStiffness: 200,        // was 40
  suspensionRestLength: 0.6,       // was 0.3
  maxSuspensionTravel: 0.6,        // was 0.3 — longer travel + recovery range
  frictionSlip: 6,
  dampingCompression: 11,          // was implicit 10
  dampingRelaxation: 8,            // was implicit 10
  maxSuspensionForce: 1e6,         // was implicit Number.MAX_VALUE — fine but set explicitly
  rollInfluence: 0.01,
  useCustomSlidingRotationalSpeed: true,
  customSlidingRotationalSpeed: -30,
};
```
Note: with restLength=0.6 you need to lower the wheel mount in chassis-local to keep the same overall ride height (e.g., `chassisConnectionPointLocal.y = -0.45` instead of `-0.15`), and your spawn analysis will shift.

### Fix #3: Properly synchronize previousPosition / interpolatedPosition on teleport

In `rampController.js`, after every direct `position.set`:
```js
chassisBody.position.set(x, y, z);
chassisBody.previousPosition.copy(chassisBody.position);
chassisBody.interpolatedPosition.copy(chassisBody.position);
chassisBody.initPosition.copy(chassisBody.position); // optional, harmless
```

Same for quaternion if you're setting that directly:
```js
chassisBody.quaternion.setFromAxisAngle(...);
chassisBody.previousQuaternion.copy(chassisBody.quaternion);
chassisBody.interpolatedQuaternion.copy(chassisBody.quaternion);
```

### Fix #4: Switch chassis to KINEMATIC while on ramp

Best long-term solution to "I want scripted motion on ramp + physics on deck":
```js
// On ramp entry:
chassisBody.type = CANNON.Body.KINEMATIC;
chassisBody.allowSleep = false;
chassisBody.wakeUp();

// Each frame on the ramp:
chassisBody.velocity.set(vx, vy, vz); // engine integrates this
// no applyForce, no position.set

// On ramp exit:
chassisBody.type = CANNON.Body.DYNAMIC;
```
Kinematic bodies don't respond to forces (incl. gravity), aren't woken/affected by suspension reaction, and their `position` is updated cleanly via velocity. This eliminates Fix #3 and the slope-vy hack at the same time — the integrator handles your motion correctly.

### Fix #5: Pre-position the chassis higher on release, with downward velocity zeroed

At the controller-release moment, the chassis is at `extendHigh = 2.5 m` into the deck. Right at release:
```js
chassisBody.velocity.y = 0;        // kill any residual slope-vy
chassisBody.angularVelocity.setZero();
chassisBody.position.y += 0.05;    // tiny upward bias so the first wheel raycasts definitely hit
chassisBody.previousPosition.copy(chassisBody.position);
```
Bias by ~ride-height-compression (≈0.06m for current stiffness, or 0.25m for proposed stiffer setup). This gives the suspension a moment to compress and find equilibrium rather than the wheels missing the deck entirely on frame 1 after release.

### Fix #6: Force-update the deck/extension AABBs

```js
deckBody.aabbNeedsUpdate = true;
deckBody.updateAABB();
extensionBody.aabbNeedsUpdate = true;
extensionBody.updateAABB();
world.broadphase.dirty = true;
```
Do this once after adding bodies, and once at the moment you release the controller (paranoid, cheap).

### Fix #7: Eliminate overlap between deck and extension; use one wider deck

Replace deck (10 × 0.5 × 30 box) + two extensions (12 × 0.5 × 6 each) with a single composite shape, OR widen the deck. Overlapping static AABBs aren't fatal, but they introduce numeric jitter at the shared boundary. If the deck is 10 wide and the extension is 12 wide, just make the deck 12 wide.

### Fix #8: Up the world's solver iterations and contactEquationStiffness

If after the above the car still penetrates the deck slightly:
```js
world.solver.iterations = 20; // was 10 default
world.defaultContactMaterial.contactEquationStiffness = 1e8;
world.defaultContactMaterial.contactEquationRelaxation = 3;
```
Source: [Cannon.js Parameter tweaking wiki](https://github.com/schteppe/cannon.js/wiki/Parameter-tweaking).

---

## 3. Settings audit — what doesn't match best practice

| Our setting | Best practice (per cannon-es example / community) | Notes |
|---|---|---|
| `chassisMass=1500` | Example uses 150 | OK — but means stiffness/damping must scale |
| `suspensionStiffness=40` | Default 100; example uses 30 with 10× lighter car | **TOO LOW for 1500 kg.** Recommend 200–300. |
| `suspensionRestLength=0.3` | Example uses 0.3 | OK numerically but combined with radius=0.5 gives only 0.8 m ray length → too short for high handoffs. |
| `maxSuspensionTravel=0.3` | Example uses 0.3 (= restLength) | OK. But note: it does NOT extend the ray length. |
| `radius=0.5` | Example uses 0.5 | OK |
| `frictionSlip=6` | Example uses 1.4 (default 10.5) | OK, in-range |
| `dampingCompression` not set | Default 10; example 4.4 | **Likely fine but verify** with `console.log(wheel.dampingCompression)` after addWheel. If 10 with stiffness=40 it's over-damped (over-critical). |
| `dampingRelaxation` not set | Default 10; example 2.3 | Same as above. |
| `maxSuspensionForce` not set | Default `Number.MAX_VALUE`; example 100000 | OK at default. |
| `chassisBody.angularFactor = (0,1,0)` | Not from the example | Fine — your design. Note: locking pitch means the chassis can't visually pitch into ramps. The suspension can't "lean back" on inclines. This makes the car feel low and may exacerbate visual sink perception. |
| Chassis collider offset +0.5m Y | Example: chassis at body center, mass below | OK — but this means the chassis box bottom is at chassis-local y = 0.25, which is **above** the wheel mounts at y = −0.15. That means *the chassis box itself never touches the ground*. This is intentional in your design, but the Bullet community's "extend chassis box to fully-compressed wheel point" failsafe is **disabled**. Reconsider — see Fix #1 alternative. |
| Direct `chassisBody.position.y` set every frame | Not recommended for dynamic body | **Sync previousPosition/interpolatedPosition** (Fix #3) or use kinematic body type (Fix #4). |
| Direct `chassisBody.quaternion.setFromAxisAngle` | Not recommended for dynamic body | Same — sync `previousQuaternion`/`interpolatedQuaternion`. |
| `chassisBody.angularVelocity = (0,0,0)` every frame | OK but redundant if angularFactor zeros 2 axes | Harmless. |
| Wheel mounts at chassis-local y = −0.15 | Example uses y=0 (collider at center) | **Inconsistent with the chassis collider being +0.5 m offset.** Mounts should be relative to a sensible chassis "bottom"; currently mounts are 0.65 m below the collider bottom, which is way too far for the suspension geometry. Either lower the collider or raise the mounts. |
| `suspendVehicleControl=true` on ramp | Not a standard pattern | Acceptable for scripted ramp. But the wheel raycasts still fire — they just can't drive the chassis. If they're missing the ramp (no physics body) they return `wheel.isInContact=false`, which is what you want during scripted motion. On release, suddenly engaging vehicle control while wheels report no contact → drop. |

---

## 4. The single highest-impact change to try first

If you have time for only ONE change, do this:

**Monkey-patch the ray length to include `maxSuspensionTravel`:**
```js
// Right after creating the vehicle:
const origUpdateWheel = vehicle.updateWheelTransform.bind(vehicle);
vehicle.wheelInfos.forEach(w => {
  // Internally cannon uses: raylen = restLength + radius
  // We want: raylen = restLength + maxTravel + radius
  // Cleanest hack: bump restLength temporarily during castRay
});

// Or override:
const Cannon = window.CANNON || require('cannon-es');
const origCastRay = Cannon.RaycastVehicle.prototype.castRay;
Cannon.RaycastVehicle.prototype.castRay = function(wheel) {
  const saved = wheel.suspensionRestLength;
  // Extend ray to fully-extended suspension travel point
  wheel.suspensionRestLength = saved + wheel.maxSuspensionTravel;
  const result = origCastRay.call(this, wheel);
  // Restore so suspension force math uses the real rest length
  wheel.suspensionRestLength = saved;
  return result;
};
```

This single change makes the wheels find the deck even when the chassis is briefly 0.3 m higher than equilibrium, which is what happens during the handoff. It's the same fix that has fixed this category of bug across Unity/Unreal/Godot/Bullet for 15+ years.

If patching the engine feels gross, the equivalent is to just **increase `suspensionRestLength` from 0.3 to 0.6** and **lower the wheel mounts in chassis-local Y by 0.3** to keep the same ride height. Same effective result.

---

## 5. References

### cannon-es / cannon.js source
- [pmndrs/cannon-es RaycastVehicle.ts (master)](https://github.com/pmndrs/cannon-es/blob/master/src/objects/RaycastVehicle.ts)
- [pmndrs/cannon-es WheelInfo.ts](https://github.com/pmndrs/cannon-es/blob/master/src/objects/WheelInfo.ts)
- [pmndrs/cannon-es Body.ts](https://github.com/pmndrs/cannon-es/blob/master/src/objects/Body.ts)
- [pmndrs/cannon-es official raycast_vehicle example](https://github.com/pmndrs/cannon-es/blob/master/examples/raycast_vehicle.html)
- [pmndrs/cannon-es docs: RaycastVehicle class](https://pmndrs.github.io/cannon-es/docs/classes/RaycastVehicle.html)
- [pmndrs/cannon-es docs: Body class](https://pmndrs.github.io/cannon-es/docs/classes/Body.html)
- [schteppe/cannon.js Parameter Tweaking wiki](https://github.com/schteppe/cannon.js/wiki/Parameter-tweaking)
- [schteppe/cannon.js RaycastVehicle docs](https://schteppe.github.io/cannon.js/docs/classes/RaycastVehicle.html)

### Open bugs that may directly affect us
- [pmndrs/cannon-es #198 — RaycastAll fails to detect sleeping/static bodies at expected y position](https://github.com/pmndrs/cannon-es/issues/198) (OPEN; may explain wheel rays missing deck)
- [schteppe/cannon.js #364 — Raycasting doesn't work when body.collisionResponse is set to false](https://github.com/schteppe/cannon.js/issues/364)
- [schteppe/cannon.js #413 — RaycastVehicle wheel collision issue (boxes added after init not detected)](https://github.com/schteppe/cannon.js/issues/413)
- [schteppe/cannon.js #317 — Issue with collision of STATIC and DYNAMIC Bodies](https://github.com/schteppe/cannon.js/issues/317)
- [schteppe/cannon.js #239 — Teleporting and scaling static box shape; AABB needs update](https://github.com/schteppe/cannon.js/issues/239)
- [schteppe/cannon.js #393 — CANNON wrong up axis configuration for vehicles](https://github.com/schteppe/cannon.js/issues/393)

### Community advice
- [Bullet forum: "btRaycastVehicle wheels sink through ground under heavy load"](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=8105) — confirms the diagnosis; same engine ancestry
- [Bullet forum: raycast vehicle collision filtering bug](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=5620)
- [three.js discourse: Issues with RaycastVehicle in cannon-es](https://discourse.threejs.org/t/issues-with-raycastvehicle-in-cannon-es-physics-engine/54627)
- [three.js discourse: Vehicle physics with Cannon.js (showcase)](https://discourse.threejs.org/t/vehicle-physics-with-cannon-js/11769)
- [Babylon.js forum: BabylonJS + cannon-es + raycastVehicle](https://forum.babylonjs.com/t/babylonjs-cannon-es-raycastvehicle/33194) — discusses double-update issues from mixing rendering+physics positioning
- [Babylon.js forum: Cannon raycast vehicle not moving](https://forum.babylonjs.com/t/cannon-raycast-vehicle-not-moving/2678)

### Related but not directly applicable
- [pmndrs/use-cannon #4 — Option to set Cannon body to Kinematic](https://github.com/react-spring/use-cannon/issues/4)
- [pmndrs/cannon-es #115 — Kinematic body collision documentation](https://github.com/pmndrs/cannon-es/issues/115)
- [pmndrs/cannon-es discussion #193 — why the fixed body position is updated](https://github.com/pmndrs/cannon-es/discussions/193)
- [Godot forum: custom raycast vehicle wheels squish onto ground at high speeds](https://forum.godotengine.org/t/custom-raycast-vehicle-wheels-squish-onto-the-ground-at-high-speeds/129510) — same class of bug, Godot's BulletPhysics-derived RayCast vehicle
- [Arctxrus/Roblox-Dynamic-Suspension](https://github.com/Arctxrus/Roblox-Dynamic-Suspension) — example of dynamic mass adaptation in a raycast vehicle (interesting reference architecture)

---

## TL;DR for the implementer

1. **Patch `vehicle.castRay` (or extend `suspensionRestLength`)** so wheel rays reach `restLength + maxTravel + radius` instead of just `restLength + radius`. This is the dominant fix.
2. **Bump `suspensionStiffness` to ~200** for the 1500 kg chassis (currently 40 is far too soft).
3. **Sync `previousPosition` / `interpolatedPosition`** every time you write to `body.position` (and same for quaternion).
4. **Strongly consider switching `chassisBody.type` to `KINEMATIC`** while the rampController is engaged. This eliminates the integrator tug-of-war and is the cleanest architectural fix.
5. **At controller release**, bias the chassis up by ~0.05–0.1 m and zero `velocity.y` so the first frame's wheel rays definitely hit the deck.
6. **Eliminate deck/extension overlap** — make the deck wider instead of using overlapping invisible extensions.
