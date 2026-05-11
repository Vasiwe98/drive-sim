# Drive Sim

A browser-based 3D vehicle simulation. Drive a car around an arcade playground with realistic ray-cast wheel physics, four camera modes, and an invisible boundary so you don't fall off the world.

**▶️ Play it: [vasiwe98.github.io/drive-sim](https://vasiwe98.github.io/drive-sim/)**

100% code-generated — no Blender, no external 3D models, no auth, no backend. The world, the car, the wheels, the headlights, the ramps, the bridges — everything is procedural Three.js geometry on top of Cannon-es physics.

## What this is

A 2026 rebuild of a 3D vehicle simulation the author originally built in **Blender + Python around 2014–2015**, made as a workflow-comparison exercise:

| | 2014 | 2026 |
|---|---|---|
| Tooling | Blender 2.7x + Python BGE | Three.js + Cannon-es + Vite |
| Deliverable | Standalone `.exe` | Web URL (click to play) |
| 3D assets | Modeled in Blender | Procedural primitives |
| Build time | ~weeks | ~hours |
| Friction | Configuring rendering pipelines | Deciding what to build |

The full build log lives in [`JOURNAL.md`](./JOURNAL.md) — grep `[LINKEDIN]` for the entries marked as workflow-comparison material.

## Controls

| | |
|---|---|
| **W A S D** (or arrow keys) | Drive |
| **Space** | Handbrake |
| **C** | Cycle camera mode (3rd-person follow / 1st-person / top-down / free) |
| **Mouse drag** (in free mode) | Orbit |

## Run locally

```bash
git clone https://github.com/Vasiwe98/drive-sim.git
cd drive-sim
npm install
npm run dev
```

## Deploy

Pushes the built site to the `gh-pages` branch:

```bash
npm run deploy
```

## Tech stack

- **[Three.js](https://threejs.org/)** — WebGL rendering
- **[Cannon-es](https://github.com/pmndrs/cannon-es)** — physics, with the built-in `RaycastVehicle` class for car dynamics (suspension, slip, steering)
- **[Vite](https://vitejs.dev/)** — dev server and bundler
- **[GitHub Pages](https://pages.github.com/)** — free static hosting

## Project layout

```
drive-sim/
├── index.html          # Vite entry + landing screen overlay
├── PLAN.md             # Locked architecture (read first if exploring)
├── TASKS.md            # Build progress, current state, next action
├── JOURNAL.md          # Append-only build log + [LINKEDIN]-tagged notes
└── src/
    ├── main.js         # Bootstrap & animation loop
    ├── scene.js        # Three.js scene, lights, renderer
    ├── physics.js      # Cannon world + fixed-step
    ├── vehicle.js      # RaycastVehicle + chassis/wheel meshes
    ├── world.js        # Procedural playground (roads, ramps, bridges, jump pads)
    ├── cameras.js      # 4-mode CameraRig
    ├── input.js        # Keyboard / touch state
    └── ui.js           # Landing screen / settings menu
```

## License

MIT. Built with [Claude Code](https://claude.com/claude-code).
