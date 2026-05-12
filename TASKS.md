# Tasks

Last updated: 2026-05-12
Current task: #9 Settings menu — landing-screen panel with color picker, body style (coupe/sedan/SUV/muscle), day/night toggle. Persisted to localStorage.
Next action: Deploy + verify live. Then consider #10 (mobile touch) or HUD cleanup.

## Done
- [x] #0 Scaffold project
- [x] #1 Three.js scene
- [x] #2 Physics world (CANNON.World, fixed-step, box ground at y=0)
- [x] #3 Vehicle physics — RaycastVehicle, but only after a multi-round debug spiral
- [x] #4 Vehicle visuals — compound chassis (hood, cabin, trunk, roof, bumpers, lights, glass)
- [x] #5 Procedural world — roads (visual only), ramps, bridge, jump pads, visible boundary
- [x] #6 Cameras — 4 modes, C cycles
- [x] #7 Landing screen — overlay with controls + Start button + ESC returns
- [x] **Integration** — main.js wires it all together; resetCar() on Start
- [x] **Physics debug** — root-caused via subagent research + live HUD. Final stack: Box ground (not Plane), thin chassis collider above wheel mounts, locked pitch/roll for stability, +X = forward convention
- [x] **Boundary** — walls visible, ground sized to match arena
- [x] **Launch ramp** — featured red ramp directly ahead of spawn

## In Progress
- [ ] #8 Polish + deploy — final tuning round
- [x] #9 Stretch: settings menu — color + body style (coupe/sedan/SUV/muscle) + day/night, persisted via localStorage. Body style is visual-only — physics collider and wheel mounts fixed.

## Pending
- [ ] Remove or hide the debug HUD once ramp launches are verified
- [ ] #10 Stretch: mobile touch controls
