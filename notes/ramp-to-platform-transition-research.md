# Scripted-Ramp → Physics Handoff: Research Findings

**Problem statement.** Our drive-sim uses a "scripted ramp" architecture: ramps are visual-only meshes, and a custom controller forces the chassis kinematic state (position / orientation / velocity) every frame while the chassis is inside a ramp footprint. When the chassis leaves the footprint, the controller releases and cannon-es `RaycastVehicle` resumes simulation.

Jump ramps work great (release into free fall). **Bridge approach ramps fail**: the car visibly sinks into the deck on hand-off. The chassis drops below ride-equilibrium, sometimes the wheels appear below the deck top surface. We hand off with the chassis already 2.5 m onto the flat deck at the expected equilibrium y = deckTop + rideHeight (4.139), with pitch/roll zeroed and vy=0, yet it still sinks.

This document collects the *canonical* solutions used by 25 years of racing-game development, then maps them onto our cannon-es + RaycastVehicle stack.

---

## 1. Patterns / Standard Solutions

### 1.1 Animation-to-Physics Blend (the "ragdoll" pattern, applied to vehicles)

This is the **dominant pattern** across the industry. Every shipping engine that does "cutscene/scripted segment → gameplay physics" implements this. The core algorithm:

1. **Both states co-exist briefly.** Don't flip a switch from "kinematic" to "dynamic" — run both for `N` frames and blend.
2. **Seed the dynamic body with the kinematic body's velocity.** Velocity continuity at the boundary is non-negotiable; a discontinuity here is the literal source of "the body wakes up confused and falls through the floor."
3. **Lerp position and slerp rotation** with a blend weight `w` from 0 (fully scripted) to 1 (fully physics) over 0.1–0.5 seconds.
4. During the blend, **the physics body is the master of position**, but each frame the rendered transform is the lerp of (physicsPos, scriptedPos, w). When `w == 1`, you stop overriding.

Industry numbers from the search results:
- Halo Infinite: 0.15 s blend (arcade feel).
- The Last of Us Part II: 0.3–0.5 s blend (cinematic feel).

Source: [How to blend ragdoll physics with animation (Unity Discussions)](https://discussions.unity.com/t/how-to-blend-ragdoll-physics-with-animation/734320), [Smoothly transition between animation and ragdoll](https://discussions.unity.com/t/smoothly-transition-between-animation-and-ragdoll/128871), [How to smoothly transition physical animation into ragdoll v5.2 (UE forums)](https://forums.unrealengine.com/t/how-to-smoothly-transition-physical-animation-into-ragdoll-v5-2/1237711), [Steve Streeting on UE4 smooth sequencer/gameplay transition](https://www.stevestreeting.com/2021/10/15/ue4-smoothly-transitioning-between-gameplay-sequencer-cutscenes/).

> "Initialize physics bodies with current animation velocity to avoid velocity discontinuities." — recurring advice across all the threads.

UE's documented mechanism for this exact problem is the [Sequencer→Gameplay blend](https://dev.epicgames.com/documentation/en-us/unreal-engine/blend-gameplay-animation-to-cinematic-animation-in-unreal-engine) using a `DefaultSlotInterp` float driven by a Sequencer track. Same pattern: weight goes 0→1 over N frames, both inputs alive during the blend.

### 1.2 Suspension Pre-Load on Release (the "place the car as if it had been driving" pattern)

This is the **dedicated fix for our exact symptom** and the most-cited cause of sinking-on-landing in raycast vehicles.

The bug: when you teleport / kinematically place a RaycastVehicle chassis at y = deckTop + suspensionRestLength + wheelRadius, the suspension springs are at **rest length**, i.e. fully extended. But equilibrium is *not* rest length — at equilibrium the springs are compressed by exactly the amount needed for `k·Δ = m·g`. So the moment you release, the car drops by `Δ = mg/k` while the springs re-find equilibrium. With weak springs that's several centimeters of visible sink.

**The standard fix** is to release the chassis at the *equilibrium* y, **not** the rest-length y:

```
equilibrium_compression  = (mass * gravity) / (4 * suspensionStiffness)
release_chassis_y        = deckTop + wheelRadius + suspensionRestLength - equilibrium_compression
```

Equivalently: place the chassis where it would *settle*, and pre-set the wheel `suspensionLength` to its compressed value so the first frame's spring force equals gravity exactly, producing zero net force, producing zero sink.

This is documented (informally) in every Bullet/Unity raycast-vehicle thread. Quotes:

> "The raycast vehicle can partially sink into the ground, with the sinking stopping at the connection point of the wheels to the chassis." ([Bullet forum](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=5620))

> "If you want to use a lower mass value for your vehicle, you must decrease the Wheel collider's Spring and Damper values in the same proportion." ([Unity Manual: Wheel Collider](https://docs.unity3d.com/2020.1/Documentation/Manual/class-WheelCollider.html))

> "The current suspension length is calculated from the hit distance of the ray minus the wheel radius, and the suspension spring is assumed to be at rest when it is fully extended." ([DigitalRune Vehicle Physics](https://digitalrune.github.io/DigitalRune-Documentation/html/143af493-329d-408f-975d-e63625646f2f.htm))

The implication of that last quote is *exactly our bug*: cannon-es assumes the spring is at rest at full extension. If you hand it a chassis where the spring is at full extension *plus* gravity is pulling, frame 1 will compress and the chassis will drop by `mg/k`.

### 1.3 Sonic-style Ground Sensors: "If you're not lower than the floor, you're still in the air"

Sonic the Hedgehog (and every game that copies its physics) uses **two state machines** — ground state and air state — with carefully-defined transition rules. The pearl-of-wisdom for our problem:

> "Sonic's A and B sensors are much the same in the air as they are on the ground. The difference is, when they detect a solid tile in the air, Sonic isn't immediately set to the height found in the tile minus 20. Instead, he's only set to it if he's already lower than that height, **otherwise he'd stick to the floor when he got close to it**." ([Sonic Retro physics guide summary, via setsideb.com](https://setsideb.com/sonic-retros-physics-guide/))

Mapping: the ramp controller releases at y = 4.139 (the equilibrium). If the deck collision response or suspension compression pushes the chassis any lower in the next tick (it will, because the suspension was assumed at rest), then there's no recovery — the chassis is now *at* deck height and the wheels are *in* the deck. Sonic's rule says: when arriving at the ground, you should arrive *slightly above* and *fall into* contact, never start *at* contact.

The other Sonic insight: when transitioning **air→ground**, the angle of the landing surface is read from the surface, and the air velocity is **projected onto the surface tangent** to become ground-speed. Sonic does NOT preserve raw `vx/vy` across the boundary — it decomposes by surface angle. ([SDA Knowledge Base: Sonic Game Mechanics](https://kb.speeddemosarchive.com/Sonic_the_Hedgehog/Game_Mechanics_and_Glitches))

### 1.4 SuperTuxKart's "smoothFlying" Pattern

SuperTuxKart's custom Bullet fork includes a `btKart` class with explicit airborne-stability logic. From `src/physics/btKart.cpp` (`updateSuspension`, `updateVehicle`):

- When `m_num_wheels_on_ground == 0` (airborne), it applies a **`StabilitySmoothFlyingImpulse`** torque that drives pitch and roll back to 0 so the kart enters landing flat.
- When all 4 wheels touch (grounded), it applies a **`StabilityDownwardImpulseFactor`** force proportional to speed, "pulling the axis down towards the ground" — this *suppresses* bounce-back from suspension overshoot on landing.
- A `m_is_jumping` flag is set when leaving the ground and cleared on the first frame any wheel touches. Game code keys off this flag (cushioning, animations, particles).
- A bug was specifically fixed where "sometimes when jumping over a downward slope, it is possible to never land on the ground because of the way the compensation meant to smooth the landing works" — confirming this class of bug is well-known. ([SuperTuxKart 0.9.4 changelog](https://www.speedrun.com/stk/forums/rbejy?page=2#latea))

The "downward impulse on grounded" trick is the **opposite** of our intuition: instead of fighting the sink with an *upward* force, you add a *downward* force that effectively biases the suspension to ride compressed (closer to equilibrium) and damps the bounce-back.

Source: [stk-code/src/physics/btKart.cpp](https://github.com/supertuxkart/stk-code/blob/master/src/physics/physics.cpp), [SuperTuxKart Physics](https://supertuxkart.net/Physics).

### 1.5 The "One Free Frame" Pre-Integration Pattern

When code transitions a body kinematic→dynamic, the canonical pattern is to **simulate one substep with the body locked to its kinematic state**, *then* release. This lets the physics engine resolve any penetrations and find a valid contact manifold before gravity acts.

In cannon-es terms: keep `body.type = Body.KINEMATIC` for one tick *after* the visual handoff, run `world.step(dt)` once (which lets RaycastVehicle's raycasts find ground and populate `wheel.suspensionLength`, `wheel.isInContact`, `wheel.suspensionForce`), then on the *next* frame flip `body.type = Body.DYNAMIC`. The engine now has good contacts and the spring force is non-zero from the start.

This is well-documented in Unity ([Rigidbody2D.simulated](https://docs.unity3d.com/ScriptReference/Rigidbody2D-simulated.html)) and Bullet forums ([Teleporting a rigid body](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=1150)).

### 1.6 Velocity Projection at Hand-Off

If the scripted path is delivering a velocity with components incompatible with the new surface (e.g., the last frame on the ramp has `vy > 0` because the ramp slope was rising, but the next frame should be on a flat deck where `vy` is purely "energy that will push you upward into bouncing"), the canonical fix is to **project the velocity onto the post-handoff surface tangent**:

```
v_handoff = v_scripted - dot(v_scripted, n_surface) * n_surface
```

Where `n_surface` is the normal of the surface the car is about to be driving on (deck surface, so `n = (0,1,0)` and projection just zeros `vy`). We already do `vy = 0`; the more general fix is to do this projection in case the deck is tilted.

For Sonic, the projection is more sophisticated: the inverse — speed in the air is `ground_speed * cos(slope_angle)` horizontal and `ground_speed * sin(slope_angle)` vertical, and on landing the inverse decomposition recovers ground speed. ([Sonic Physics Guide summary](https://kb.speeddemosarchive.com/Sonic_the_Hedgehog/Game_Mechanics_and_Glitches))

### 1.7 Edge-Region Velocity Ramp ("ease out" of the scripted segment)

Several arcade racers — and most cinematic-handoff implementations — ramp scripted velocity toward the predicted physics velocity over the **last 10–20%** of the scripted segment, rather than maintaining "perfect rail velocity" right up to the cliff edge. The goal: when the physics takes over, the velocity already matches what physics would produce, so there's no jolt to settle.

Concrete recipe: as the chassis enters the last `N` meters of the scripted ramp footprint, compute `t = distanceRemaining / N` (0 at handoff, 1 at start of ramp end), and:

```
v_scripted = lerp(v_target, v_path_tangent * speed, t)
```

Where `v_target` is the velocity we want the physics body to have when it takes over (typically just `forward * speed` on the deck tangent).

This is the pattern alluded to in path-following / spline-following literature: [Trajectory Generation: continuity constraints](https://opentextbooks.clemson.edu/wangrobotics/chapter/trajectory-generation/) ("two cubic segments can be connected ... with continuous velocity and acceleration at the via point").

---

## 2. What Probably Applies to Us

Ranked by likelihood-of-being-the-actual-fix:

### #1 — Suspension Pre-Load (§1.2). Almost certainly the dominant cause.

Symptom matches exactly: chassis drops *the moment physics takes over*, sinks below equilibrium, doesn't recover (or recovers only via bounce). The math says it will drop by `mg/k_total` where `k_total = 4 * suspensionStiffness`. Quick check: with mass ≈ 1500 kg, g = 9.81, four wheels at stiffness 30 each, drop ≈ `1500*9.81 / (4*30) = ~122 m` — clearly stiffness is per-wheel-unit not Newtons, but the point stands: if `suspensionRestLength` is the un-compressed length and we're placing the chassis at `deckTop + restLength + wheelRadius`, the springs are unloaded and will compress visibly on tick 1.

**Action.** Compute the *settled* suspension length and hand off the chassis at `deckTop + wheelRadius + (restLength - settledCompression)`. Also pre-write `wheel.suspensionLength = settledLength` on each wheel before releasing.

### #2 — Pre-Integration / "One Free Frame" (§1.5). Very likely complementary.

Even with a perfect equilibrium handoff position, the RaycastVehicle hasn't done a raycast yet — its `wheelInfo` state for the first tick is stale (from the last frame the controller was active, when the rays were hitting the ramp surface, not the deck). One pre-step in kinematic mode lets it re-acquire deck contacts before the dynamic step.

**Action.** On the frame of handoff, leave `chassisBody.type = KINEMATIC`, call `world.step(dt)`, *then* on the next frame set `type = DYNAMIC`.

### #3 — Animation-to-Physics Blend (§1.1). Use as polish.

Over 3–8 frames after release, render the chassis at `lerp(physicsPos, scriptedPos, w)` where `w` ramps 0→1. This hides any 1-cm residual sink and is what every shipped racer does.

**Action.** Add a `handoffBlend` field on the controller; populate it on release; consume it in the render-sync step.

### #4 — Downward Stability Impulse (§1.4). Optional anti-bounce.

If, after #1 + #2 + #3, there's still residual bounce (suspension overshoots equilibrium and the car bobs), copy STK's `StabilityDownwardImpulseFactor`: when `numWheelsOnGround == 4` and speed > 0, apply a small downward force scaled by speed. This is overdamping the suspension via the chassis instead of via wheel damping (which would make off-road feel mushy).

### #5 — Velocity Tangent Projection (§1.6) + Edge Ramp (§1.7). Already half-done.

We already zero `vy` at release. The full fix is: project the scripted velocity onto the deck tangent for the last 1–2 m of the ramp footprint, so the handoff velocity is already perfectly aligned. Cheap, and removes any "the path was rising, now we have residual up-velocity" issue.

### Probably NOT the issue:

- Collision filtering between chassis and deck (we'd see chassis falling *through*, not sinking by ~10 cm and stopping).
- Frame rate / time step issues (the sink is consistent, not jittery).
- Wheel collider radius (raycast vehicles don't use collider radius the same way Unity WheelCollider does).

---

## 3. Specific Code Changes

These map directly onto our controller. Pseudocode, but the structure is what you'd ship.

### 3.1 Compute Equilibrium and Pre-Load Suspension Before Release

```js
// Where you currently do: chassis.position.y = deckTop + rideHeight; release();

// Replace with:
const g          = Math.abs(world.gravity.y);                    // 9.82 default
const chassisM   = chassisBody.mass;
const kPerWheel  = vehicle.wheelInfos[0].suspensionStiffness;    // assume uniform
const restLen    = vehicle.wheelInfos[0].suspensionRestLength;
const wheelR     = vehicle.wheelInfos[0].radius;

// Equilibrium compression: each wheel carries 1/4 of weight (rough; refine if uneven)
const eqCompressionPerWheel = (chassisM * g) / (4 * kPerWheel);
const settledLen = restLen - eqCompressionPerWheel;              // < restLen

// Place chassis at the y where the springs settled at gravity-equilibrium
const chassisYAtEquilibrium = deckTop + wheelR + settledLen;
chassisBody.position.y = chassisYAtEquilibrium;

// Pre-write each wheel's suspensionLength so the spring force on frame 1 = m*g/4
for (const w of vehicle.wheelInfos) {
  w.suspensionLength       = settledLen;       // not restLen
  w.suspensionRelativeVelocity = 0;
  w.clippedInvContactDotSuspension = 1;
  w.isInContact            = true;             // hint to RaycastVehicle
}

// Project velocity onto deck tangent (deck normal = up, so this just zeros vy)
const deckNormal = new CANNON.Vec3(0, 1, 0);
const v = chassisBody.velocity;
const vDotN = v.dot(deckNormal);
v.vsub(deckNormal.scale(vDotN), v);            // remove normal component
```

### 3.2 One-Frame Pre-Integration in Kinematic Mode

```js
function release(chassisBody, vehicle, world, dt) {
  applyEquilibriumPlacement();                  // §3.1 above
  chassisBody.type = CANNON.Body.KINEMATIC;     // still locked, but velocity set
  // Run one step — RaycastVehicle's preStep raycasts will fire and find the deck.
  world.step(dt);
  // Now the wheelInfo arrays are populated against the deck.
  chassisBody.type = CANNON.Body.DYNAMIC;       // release for real
  chassisBody.wakeUp();
}
```

### 3.3 Render-Side Blend (Polish)

```js
// In controller state:
this.handoffBlend = { active: false, t: 0, duration: 0.15 /* seconds */, scriptedTransform: null };

// At release time:
this.handoffBlend.active = true;
this.handoffBlend.t = 0;
this.handoffBlend.scriptedTransform = capturePos(chassisBody);

// Each render frame, AFTER physics step, BEFORE drawing:
if (this.handoffBlend.active) {
  this.handoffBlend.t += dt;
  const w = Math.min(this.handoffBlend.t / this.handoffBlend.duration, 1);
  // Blend the rendered transform (NOT the physics body) toward physics
  chassisMesh.position.lerpVectors(this.handoffBlend.scriptedTransform.position, chassisBody.position, w);
  chassisMesh.quaternion.slerpQuaternions(this.handoffBlend.scriptedTransform.quaternion, chassisBody.quaternion, w);
  if (w >= 1) this.handoffBlend.active = false;
} else {
  chassisMesh.position.copy(chassisBody.position);
  chassisMesh.quaternion.copy(chassisBody.quaternion);
}
```

### 3.4 SuperTuxKart-style Downward Impulse (Optional)

```js
// Each fixed step, after vehicle.updateVehicle:
const wheelsOnGround = vehicle.wheelInfos.filter(w => w.isInContact).length;
if (wheelsOnGround === 4) {
  const speed = chassisBody.velocity.length();
  const downForce = STABILITY_DOWNWARD_FACTOR * speed * chassisBody.mass; // tune factor ~0.5
  chassisBody.force.y -= downForce;
}
```

### 3.5 Edge-Region Velocity Ramp on the Scripted Path

```js
// In the controller's per-frame "I'm still scripting" branch, near footprint exit:
const distToExit = computeDistanceToFootprintExit(chassisBody.position);
const RAMP_OUT_DIST = 2.0; // meters
if (distToExit < RAMP_OUT_DIST) {
  const t = 1 - (distToExit / RAMP_OUT_DIST); // 0 at start of ramp-out, 1 at exit
  const targetVel = new CANNON.Vec3(forwardOnDeck.x, 0, forwardOnDeck.z).scale(speed);
  chassisBody.velocity.lerp(targetVel, t, chassisBody.velocity);
}
```

---

## 4. Anti-Patterns We May Be Hitting

These are things we appear to be doing that the literature warns against:

1. **Releasing at "ride height" assuming the spring is at rest length.** This is the #1 anti-pattern (§1.2). `restLength` is *fully extended*, not *settled*. The correct release height is `deckTop + wheelRadius + (restLength - mg/(4k))`.

2. **Snap-flip kinematic→dynamic in one frame.** Multiple threads warn: "When a player's rigid body is set to kinematic and tweened from point A to B, then set back to dynamic with a force applied, there can be a frame where the player doesn't move." ([Unity Rigidbody2D Kinematic](https://docs.unity3d.com/2023.2/Documentation/Manual/Rigidbody2D-Kinematic.html)). Run a settle step in between.

3. **Hand-off at the cliff edge of the scripted segment.** The literature on path following ([Trajectory Generation](https://opentextbooks.clemson.edu/wangrobotics/chapter/trajectory-generation/)) is consistent: any motion-profiling system must enforce velocity continuity. We're hand-extending the footprint 2.5 m into the deck — good direction — but a *velocity ramp* over that distance is what's actually needed, not just spatial extension at constant `v`.

4. **Trying to fix it inside the controller's "while scripted" branch.** Our extensions (extending footprint, locking pitch/roll, zeroing vy) all happen *while we're still kinematically forcing the body*. The bug appears *after* release. Most of the fixes belong on the release-side (pre-load, pre-step, blend) — not on the scripting side.

5. **Treating jump ramps and bridge ramps the same way.** Jump-ramp tuning (lock pitch, zero vy at release) is right for free-fall but actively wrong when you're handing off onto a flat surface where the spring must immediately load to gravity-equilibrium. Bridge ramps need their own release routine that pre-loads the suspension; jump ramps don't (the suspension will load when the car lands wherever it lands).

6. **Not using `wakeUp()` after the release.** cannon-es bodies that have been kinematic for many frames may have flags that cause subtle first-tick weirdness. Calling `wakeUp()` post-release is cheap insurance ([cannon-es Body docs](https://pmndrs.github.io/cannon-es/docs/classes/Body.html)).

7. **Assuming `wheel.suspensionLength` is auto-correct after a teleport.** It's not — RaycastVehicle's `updateSuspension` reads the previous-frame state to compute compression velocity. Stale state from "while we were on the ramp" produces wrong compression-velocity which produces a wrong damping force on tick 1 which produces wrong total spring force. Reset wheelInfos at release.

---

## 5. Recommended Implementation Order

1. **§3.1 — Equilibrium placement + suspension preload.** This alone likely fixes most of the visible sink.
2. **§3.2 — One-frame kinematic settle step.** Eliminates stale `wheelInfo` artifacts.
3. **§3.3 — Render-side blend.** Hides any residual 1–2 frame transient.
4. **§3.5 — Edge-region velocity ramp.** Belt-and-suspenders for velocity continuity.
5. **§3.4 — Downward stability impulse.** Only if step 1–4 leave bouncing.

This is the *exact* order shipped racers attack the problem in. Get #1 right and #2–#5 are polish.

---

## 6. Sources

### Industry / pattern documentation
- [Unreal: Blend Gameplay Animation to Cinematic Animation](https://dev.epicgames.com/documentation/en-us/unreal-engine/blend-gameplay-animation-to-cinematic-animation-in-unreal-engine) — the canonical "scripted to gameplay" pattern in a shipping engine.
- [Steve Streeting: UE4 smooth gameplay/sequencer transition](https://www.stevestreeting.com/2021/10/15/ue4-smoothly-transitioning-between-gameplay-sequencer-cutscenes/) — concrete recipe for the blend.
- [Unity Discussions: How to blend ragdoll physics with animation](https://discussions.unity.com/t/how-to-blend-ragdoll-physics-with-animation/734320)
- [Unity Discussions: Smoothly transition between animation and ragdoll](https://discussions.unity.com/t/smoothly-transition-between-animation-and-ragdoll/128871)
- [Epic Forums: How to smoothly transition physical animation into ragdoll v5.2](https://forums.unrealengine.com/t/how-to-smoothly-transition-physical-animation-into-ragdoll-v5-2/1237711)

### RaycastVehicle / suspension specifics
- [cannon-es RaycastVehicle source](https://github.com/pmndrs/cannon-es/blob/master/src/objects/RaycastVehicle.ts) — see `updateSuspension` for spring/damper math and force-clamp behavior.
- [cannon-es RaycastVehicle docs](https://pmndrs.github.io/cannon-es/docs/classes/RaycastVehicle.html)
- [cannon-es Body docs](https://pmndrs.github.io/cannon-es/docs/classes/Body.html) — `wakeUp`, `type` (STATIC/DYNAMIC/KINEMATIC) semantics.
- [Bullet btRaycastVehicle Class Reference](https://pybullet.org/Bullet/BulletFull/classbtRaycastVehicle.html)
- [DigitalRune: Vehicle Physics — raycast suspension formula](https://digitalrune.github.io/DigitalRune-Documentation/html/143af493-329d-408f-975d-e63625646f2f.htm)
- [Bullet forum: raycast vehicle collision filtering — chassis sinking](https://pybullet.org/Bullet/phpBB3/viewtopic.php?t=5620)
- [Unity Manual: Wheel Collider](https://docs.unity3d.com/2020.1/Documentation/Manual/class-WheelCollider.html) — spring/damper mass scaling.
- [Unity Discussions: Car sinking into ground after putting wheel collider](https://discussions.unity.com/t/car-sinking-into-ground-after-putting-wheel-collider/71528)
- [Unity Discussions: Unity 5 — wheelcolliders sink into the ground](https://discussions.unity.com/t/unity-5-wheelcolliders-sinks-into-the-ground/588550)
- [GameDev.net: How to implement raycast car](https://www.gamedev.net/forums/topic/595442-how-to-implement-raycast-car/)
- [GitHub: Roblox Dynamic Suspension — landing stability features](https://github.com/Arctxrus/Roblox-Dynamic-Suspension) — has explicit "landing stability" and "dynamic mass adaptation" modules worth reading as cross-reference.

### SuperTuxKart (open-source kart racer with explicit landing code)
- [SuperTuxKart Physics page](https://supertuxkart.net/Physics)
- [stk-code on GitHub](https://github.com/supertuxkart/stk-code)
- [stk-code/src/physics/physics.cpp](https://github.com/supertuxkart/stk-code/blob/master/src/physics/physics.cpp)
- [stk-code/src/karts/kart.cpp](https://github.com/supertuxkart/stk-code/blob/master/src/karts/kart.cpp) — `m_is_jumping`, `flyDown`, `isNearGround`.
- [SuperTuxKart 0.9.4 changelog](https://www.speedrun.com/stk/forums/rbejy?page=2#latea) — explicit mention of the "never lands" jump-cushion bug fix.

### Sonic ground/air state model
- [Sonic Retro Physics Guide summary (setsideb)](https://setsideb.com/sonic-retros-physics-guide/)
- [SDA Knowledge Base: Sonic the Hedgehog Game Mechanics](https://kb.speeddemosarchive.com/Sonic_the_Hedgehog/Game_Mechanics_and_Glitches)
- [Charged Magazine: The Physics Behind Sonic the Hedgehog](https://chargedmagazine.org/2020/04/the-physics-behind-sonic-the-hedgehog/)
- [A Guide to Implementing Sonic the Hedgehog Style Physics](https://mistickler.wordpress.com/2012/11/02/a-guide-to-implementing-sonic-the-hedgehog-style-physics/)

### Path-following / trajectory continuity
- [Trajectory Generation (open textbook)](https://opentextbooks.clemson.edu/wangrobotics/chapter/trajectory-generation/) — continuity conditions for chained motion segments.
- [Learn Road Runner: Trajectories Overview](https://learnroadrunner.com/trajectories.html) — practical motion-profile continuity.

### Arcade racer references
- [SergeyMakeev/ArcadeCarPhysics (Unity)](https://github.com/SergeyMakeev/ArcadeCarPhysics) — in-flight stabilization implementation.
- [benmcinnes/ArcadeVehiclePhysics (Unity)](https://github.com/benmcinnes/ArcadeVehiclePhysics)
- [Doofah: Arcade Bouncy Vehicle Physics Tutorial](https://www.doofah.com/tutorials/unity/bouncy-vehicle-tutorial/)
- [cconsta1/threejs_car_demo](https://github.com/cconsta1/threejs_car_demo) — three.js + cannon-es Mario Kart-style demo.
- [three.js forum: Vehicle physics with Cannon.js](https://discourse.threejs.org/t/vehicle-physics-with-cannon-js/11769)
- [three.js forum: Issues with RaycastVehicle in cannon-es](https://discourse.threejs.org/t/issues-with-raycastvehicle-in-cannon-es-physics-engine/54627)
