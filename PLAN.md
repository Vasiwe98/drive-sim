# Drive Sim — Plan

## Context

A 2026 rebuild of a 2014–2015 Blender + Python 3D vehicle simulation, built using Claude Code, then written up as a workflow-comparison post. The original had roads, ramps, bridges, realistic wheel physics, multiple cameras, and an invisible world border. This rebuild ships the same fundamentals as a click-to-play web link.

**Final deliverable:** `https://vasiwe98.github.io/drive-sim/`

## Locked Decisions

| Decision | Choice |
|---|---|
| Rendering | Three.js |
| Physics | Cannon-es with built-in `RaycastVehicle` |
| Build tool | Vite |
| Hosting | GitHub Pages (deployed via `gh-pages` npm package) |
| World style | Arcade playground: flat ground + roads, ramps, bridges, jump pads, invisible boundary |
| Vehicle | Procedural box chassis + 4 cylinder wheels, no external 3D models |
| Stretch goals | Settings menu (color, max speed, camera mode) + mobile touch controls |

## 8-Hour Task Breakdown

| # | Task | Budget | End state |
|---|---|---|---|
| 0 | Scaffold: Vite, deps, vite.config base path, GH repo + Pages, stub docs | 30m | Blank Vite page live at `/drive-sim/` |
| 1 | Three.js scene: renderer, lights, sky, ground plane, animation loop | 30m | Spinning empty world live |
| 2 | Physics world: `CANNON.World`, fixed-timestep, debugger, ground body | 30m | Box drops onto ground |
| 3 | Vehicle physics: `RaycastVehicle` with 4 wheels + WASD controls | 75m | Drivable cube |
| 4 | Vehicle visuals: chassis + 4 wheel meshes synced from physics | 30m | Recognizable car |
| 5 | Procedural world: roads, ramps, bridges, jump pads, boundary walls | 75m | Playground worth driving on |
| 6 | Cameras: 3rd-person follow, 1st-person, top-down, free; cycle with `C` | 45m | Camera modes work |
| 7 | Landing screen: HTML overlay, controls list, Start button | 20m | Polished entry |
| 8 | Polish + deploy: `npm run deploy`, verify URL, README link | 45m | Shareable URL |
| **MVP TOTAL** | | **~6h** | |
| 9 | Stretch: settings menu (color, max speed, camera) with localStorage | 45m | |
| 10 | Stretch: mobile touch controls | 45m | |

## File Structure

```
drive-sim/
├── index.html          # Vite entry + landing screen overlay
├── vite.config.js      # base: '/drive-sim/'
├── package.json
├── PLAN.md             # This file
├── TASKS.md            # Live checklist, current state, next action
├── JOURNAL.md          # Append-only build log + [LINKEDIN]-tagged notes
└── src/
    ├── main.js         # Bootstrap: scene, world, loop, integration
    ├── scene.js        # Three.js scene, lights, renderer
    ├── physics.js      # Cannon world + fixed-step helper
    ├── vehicle.js      # createVehicle(world, scene, spawnPos)
    ├── world.js        # buildWorld(scene, world) → { spawnPos }
    ├── cameras.js      # CameraRig: setTarget, cycle, update
    ├── input.js        # Keyboard / touch state
    └── ui.js           # Landing screen, settings menu
```

## Risk Areas

1. **Vite base path** — `base: '/drive-sim/'` must be set from hour 1, not hour 7.
2. **RaycastVehicle tuning** — hard 20-min cap; start from cannon-es `examples/raycast_vehicle.html` params verbatim.
3. **Wheel mesh orientation** — cylinder axis is Y, axle wants X; `mesh.rotateZ(Math.PI/2)` once at creation.
4. **Camera follow jitter** — lerp 0.1 / 0.15 starting point, tune by feel.
5. **Mobile Safari touch** — drop the stretch if it eats >30 min.
6. **Fixed-timestep physics** — `world.step(1/60, dt, 3)`, not `world.step(dt)`.

## Resume

If picking up from a stopped state: read `TASKS.md` for the "Next action" line, then the last 3 entries of `JOURNAL.md` for current state of mind. The "Next action" line is the resume hook — update it before every commit.
