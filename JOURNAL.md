# Drive Sim — Build Journal

Append-only log of decisions, surprises, blog-worthy moments. Entries tagged `[LINKEDIN]` are flagged for the comparison post.

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
