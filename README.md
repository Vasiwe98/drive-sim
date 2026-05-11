# drive-sim

Browser-based 3D vehicle simulation. Three.js for rendering, Cannon-es for physics (with `RaycastVehicle` for realistic wheel/suspension/steering). 100% code-generated — no Blender, no external 3D models.

**Live demo:** _coming soon_ — will be at `https://vasiwe98.github.io/drive-sim/`

Built with [Claude Code](https://claude.com/claude-code) as a 2026 rebuild of a 2014–2015 Blender + Python project, then written up as a workflow-comparison post.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

## Project docs

- [`PLAN.md`](./PLAN.md) — locked architecture
- [`TASKS.md`](./TASKS.md) — current task and next action (resume hook)
- [`JOURNAL.md`](./JOURNAL.md) — append-only build log, with `[LINKEDIN]`-tagged blog-post material
