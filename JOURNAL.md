# Drive Sim — Build Journal

Append-only log of decisions, surprises, blog-worthy moments. Entries tagged `[LINKEDIN]` are flagged for the comparison post.

---

## 2026-05-12 — Task 9: Settings menu (color + body style + day/night)

Replaced the PLAN.md spec (color / maxSpeed / default camera) with something more visually punchy: color picker, body-style switcher (Coupe / Sedan / SUV / Muscle), and a Day/Night toggle. Saves to `localStorage` under one key; a custom `settings-change` event fans out to `vehicle.setColor`, `vehicle.setBodyStyle`, and `scene.setTimeOfDay`.

The body-style swap is **visual-only**. Physics chassis collider (`CHASSIS_HALF`) and `WHEEL_MOUNTS` stay byte-for-byte identical across styles — only the `chassisGroup` children get disposed and rebuilt with different box proportions. So an SUV handles exactly like a coupe under the hood; it just looks 40cm taller. The cabin Y goes from 0.7 (coupe) → 0.78 (sedan) → 1.00 (SUV) → 0.60 (muscle), and roof / hood / trunk follow suit.

Disposal matters: each style instantiates fresh `BoxGeometry` instances, so on swap I dispose the old geometries (`child.geometry.dispose()`) before removing the children. Materials are shared (one `bodyMat`, `trimMat`, `glassMat`, `headlightMat`, `taillightMat`) so changing color is `bodyMat.color.set(...)` — no rebuild needed.

[LINKEDIN] In 2014, "the car has four body styles" meant modeling four separate vehicles in Blender — hours per style, multiple sets of UV unwraps, separate exports. In 2026, it's four 8-line functions that arrange boxes at different heights, and the physics layer doesn't even know the model changed. The right abstraction (visual mesh decoupled from collider) made what used to be a week into a 30-minute task.

---

## 2026-05-10 — Project kickoff

Approved plan locked: Three.js + Cannon-es + Vite + GitHub Pages, repo `drive-sim`, public. World style: arcade playground (roads, ramps, bridges, jump pads). Stretch goals: settings menu, mobile touch.

Pivoted away from a `.exe` deliverable to a web link mid-discussion. The reasoning was engagement-driven: a click-to-play URL beats "download my .exe" on LinkedIn by a huge margin (no SmartScreen warning, no install friction, works on phones).

[LINKEDIN] My 2014 self spent more time configuring Blender + Python rendering pipelines than building gameplay. My 2026 self just had a 10-minute conversation with Claude Code about whether `.exe` or web was a better deliverable, and we converged on the obvious answer.

## 2026-05-10 — Node.js install detour

Started with Python 3.14 on the machine but no Node. Installed Node 24 LTS via `winget install OpenJS.NodeJS.LTS`. UAC prompt needed approval. PowerShell execution policy was Restricted by default, so `npm.ps1` couldn't run — fixed with `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.

[LINKEDIN] In 2014, "set up the dev environment" was a full day of fighting Blender's Python API mismatches. In 2026, it's `winget install` + one `Set-ExecutionPolicy` line. The friction has moved from environment setup into deciding what to build.

## 2026-05-10 — Google Drive vs. node_modules

The project started in `G:\My Drive\AI Projects\vehicle-3d-simulation` because that's where the user keeps things. But `npm install` failed with `EBADF` and `EPERM` errors — Google Drive's DriveFS was racing against npm to lock and sync each of the ~30,000 tiny files in `node_modules`. Tried to fix with an NTFS junction; Drive rejected that because DriveFS isn't NTFS.

Moved the project to `C:\Users\vasiw\code\drive-sim`. GitHub handles the backup that Drive was previously providing. `npm install` then completed in 5 seconds.

[LINKEDIN] Tooling lesson: `node_modules` and cloud-sync folders are fundamentally incompatible. ~30,000 files churning at install time vs. a sync agent trying to upload each one = guaranteed file-lock races. Put dev projects on a local non-sync drive; use git+GitHub for backup.

## 2026-05-10 — Task 0 complete

Scaffold up. Live preview building at https://vasiwe98.github.io/drive-sim/ from a 0.94 KB JS bundle and a 0.90 KB HTML file (basically just a `console.log`). Total time to first deploy from `git init` → live URL: well under an hour despite the Node install detour and the Drive migration.

## 2026-05-10 — Task 1 complete

Three.js scene live: sky-blue background, hemi + directional sun, 400×400 green ground plane, fog from 80m to 280m, soft shadow map, OrbitControls for free inspection. Bundle jumped from 0.94 KB to 487 KB (gzip 122 KB) — that's Three.js's full library coming along. Acceptable for a demo; tree-shaking will trim some when the unused parts get dropped.

Factored into `src/scene.js` (factory `createScene(canvas) → { scene, camera, renderer, controls }`) and `src/main.js` (animation loop). Clean separation sets up the integration pattern for tasks 2–6.

[LINKEDIN] The "spinning 3D world in a browser" demo that would've been a serious milestone in 2014 (download libgl, configure shaders, write a vertex/fragment program just to draw a plane) is now ~50 lines of Three.js. Three primitives — `WebGLRenderer`, `PerspectiveCamera`, `Scene` — and you're animating at 60fps with antialiasing and shadow maps on by default.

## 2026-05-10 — Task 2 complete

Cannon-es physics wired up in `src/physics.js`: gravity, SAP broadphase, allow-sleep, ground Plane body rotated to horizontal. Fixed-step `world.step(1/60, dt, 3)` in main loop so high-refresh monitors don't accelerate the simulation. Added `cannon-es-debugger` rendering wireframes in magenta on top of the regular scene so I can see physics shapes directly. Test box drops from 8m and lands — gravity confirmed.

Bundle grew from 487 KB → 579 KB (122 → 149 KB gzipped) with the addition of cannon-es. Still well within reasonable for a single-page demo.

[LINKEDIN] In 2014, "make a box fall onto a plane" meant: derive the verlet integration, implement collision detection between an AABB and a half-space, integrate quaternions for orientation. In 2026, it's `new CANNON.Body({ mass: 5, shape: new CANNON.Box(...) })` plus `boxMesh.position.copy(boxBody.position)` once per frame. Cannon-es handles the rest.

## 2026-05-10 — Parallel tab moment

Tasks 3 (vehicle physics), 5 (procedural world), and 6 (cameras) are now safe to develop in parallel — physics world exists, contracts are locked, files don't overlap. Spawned two extra Claude Code tabs working on world.js and cameras.js. This tab keeps the orchestrator role: vehicle.js (Task 3) and then vehicle visuals (Task 4), then integration in main.js.

[LINKEDIN] In 2014 I would have built this serially over a weekend. In 2026, three Claude Code tabs are simultaneously implementing the car, the playground, and the camera system in parallel — each with a clearly defined interface contract. The wall-clock time for ~3 hours of work might collapse to 1.

## 2026-05-10 — Task 3 complete

`src/vehicle.js` has the RaycastVehicle factory with verbatim params from cannon-es `examples/raycast_vehicle.html`: chassis Box(2, 0.5, 1) at mass 150, four wheels at the corners with frictionSlip 1.4, suspensionStiffness 30, dampingRelaxation 2.3, dampingCompression 4.4, maxSuspensionForce 100000, rollInfluence 0.01. Rear-wheel drive (engine force on indices 2/3), front-wheel steer (0/1), handbrake on Space.

`src/input.js` handles WASD/arrow keys plus Space brake. Edge-event hook `onKeyDownOnce` ready for the C-key camera cycle later.

`src/main.js` swapped the test box for the vehicle. Temporary orange chassis cube renders until Task 4 adds proper visuals. OrbitControls target lerps toward the car so it stays framed during testing.

[LINKEDIN] Bullet physics' RaycastVehicle algorithm (which cannon-es ports) — four ray-cast wheels, per-wheel suspension forces, slip-based friction, custom rotational speed when sliding — is decades of academic research and Bullet engineering. In 2026 it's `new CANNON.RaycastVehicle({ chassisBody })` plus `addWheel({...})` four times. I copied the params verbatim from the cannon-es example as the plan instructed; reinventing them would have been the death-spiral risk flagged in `PLAN.md` risk #2.

## 2026-05-10 — Task 4 complete

Vehicle visuals folded into `src/vehicle.js`. Chassis is now a Three.js Group containing the main body (BoxGeometry, orange MeshStandardMaterial with metalness 0.3), a darker cabin/roof box sitting on top and offset toward the -X (front) side, and two emissive headlights on the front face so it's obvious which way is forward. Wheels are 4 CylinderGeometry cylinders with one-time `wheelGeo.rotateZ(Math.PI/2)` to align Y→X (the wheel's local axle direction in cannon-es), then per-frame `quaternion.copy(wheelInfos[i].worldTransform.quaternion)` after calling `vehicle.updateWheelTransform(i)`.

API refactor: `createVehicle` now exposes `applyInput(input)`, `syncMeshes()`, and `setColor(c)` (ready for the settings-menu stretch).

Also gated `cannon-es-debugger` behind `?debug` query param — defaulting it off now that real meshes are visible.

[LINKEDIN] One non-obvious gotcha that would've killed an hour in 2014: Three.js's CylinderGeometry has its default axis along Y, but cannon-es builds the wheel's world transform assuming the wheel's local X axis is the axle. Solution is a single line: `wheelGeo.rotateZ(Math.PI/2)` bakes Y→X into the geometry once, then the per-frame physics quaternion just works. In 2014 I would have figured this out by drag-testing until something looked right; in 2026 it's flagged in the plan ahead of time and fixed in one line.

## 2026-05-10 — Task 7 done early (landing screen)

Did the landing screen out of order while the parallel tabs work on world.js and cameras.js — they don't touch index.html or ui.js, so safe to land now. Card-style overlay with the title, a controls list with key-style spans (W/A/S/D, Space, C), a big orange Start button, and a footer linking back to the GitHub repo. Backdrop is a translucent dark gradient with `backdrop-filter: blur(8px)` so the 3D scene is faintly visible underneath.

`src/ui.js` exposes `isStarted()` and `hideLanding()`. `main.js` gates `car.applyInput(input)` behind `ui.isStarted()` so the car stays still until Start is hit (the physics loop and rendering still run — it's idle, not paused).

[LINKEDIN] In 2014 the "title screen" of my Blender project was a print statement in the terminal. In 2026, ~80 lines of HTML/CSS give me a card-based start screen with backdrop blur, key-style monospace badges, a big tactile orange CTA, and a footer link to the repo — all rendered on top of a live, paused 3D world that's already loaded behind it.

## 2026-05-10 — Parallel-tab integration

The two parallel tabs finished `src/world.js` and `src/cameras.js` but hit a snag pushing: they were still working in the original `G:\My Drive\AI Projects\vehicle-3d-simulation` location, which has no node_modules and no GitHub remote (those got set up after I migrated the project to `C:\Users\vasiw\code\drive-sim` to dodge the Drive sync issue). Solution was simple: read both files from the G:\ location and copy them into the new project.

One coordinate-convention mismatch caught at integration time: the cameras-tab wrote `cameras.js` assuming the car's forward direction was `+Z`, but my `vehicle.js` had labeled `-X` as forward (FL wheel at x=-1, headlights face -X, cabin shifts toward -X). Three lines in cameras.js needed adjusting: `followOffset` (camera behind = +X), `hoodOffset` (forward = -X), and the inline `_forward.set(0,0,1)` → `_forward.set(-1,0,0)`. Caught it at code review before deployment, not at "why is the camera pointing the wrong way" time.

[LINKEDIN] Lesson from parallel-tab development: interface contracts are necessary but not sufficient. Two agents implementing different files with clean signatures can still produce a mismatch if they're each assuming different conventions inside the same coordinate space. Code review at the integration point matters even when the integration is "just" `import` lines.

## 2026-05-10 — MVP integration done

`main.js` now imports `buildWorld` and `CameraRig`. The playground builds first (returning `{ spawnPos }`), the car spawns at that point, the CameraRig latches onto the chassis body, and the loop drops into `ui.isStarted() && car.applyInput → step → car.syncMeshes → cameraRig.update`. OrbitControls is owned by the camera rig and only active in free-camera mode.

This is the MVP. Drivable car + procedural playground + 4 cameras + landing screen, all live at https://vasiwe98.github.io/drive-sim/. Total elapsed time well under the 8-hour budget. Stretch goals (settings menu, mobile touch) still on the table.

[LINKEDIN] The full MVP — driving simulation with realistic physics, a procedurally-generated playground with ramps and a bridge, 4 camera modes, a polished landing screen — is ~600 lines of source across 8 files. The 2014 version, by comparison, was a multi-week Blender project across dozens of .blend files plus Python scripts.
