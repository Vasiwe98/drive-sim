# Tasks

Last updated: 2026-05-11
Current task: #8 Polish + deploy — driving is sound, tuning ramp launches
Next action: Verify the launch ramp directly ahead of spawn produces a satisfying jump. If so, remove the debug HUD and consider stretch goals (settings menu, mobile touch).

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

## Pending
- [ ] Remove or hide the debug HUD once ramp launches are verified
- [ ] #9 Stretch: settings menu (color, max speed, default camera)
- [ ] #10 Stretch: mobile touch controls
