# Tasks

Last updated: 2026-05-10
Current task: #3 Vehicle physics
Next action: Create `src/vehicle.js` exporting `createVehicle(world, scene, spawnPos)` returning `{ chassisBody, vehicle, mesh, update(input, dt) }`. Use cannon-es RaycastVehicle with verbatim params from `examples/raycast_vehicle.html` (chassis half-extents (2, 0.5, 1), mass 150, wheel radius 0.5, frictionSlip 1.4, suspensionStiffness 30, etc.). Create `src/input.js` with WASD keydown/keyup state. Wire into main.js, remove the test box.

## Done
- [x] #0 Scaffold project — repo + Pages live
- [x] #1 Three.js scene — renderer, camera, lights, sky, ground, OrbitControls
- [x] #2 Physics world — CANNON.World, fixed-step, debugger, ground Plane body, falling test box

## In Progress
_(starting #3)_

## Pending
- [ ] #3 Vehicle physics (RaycastVehicle + WASD)
- [ ] #4 Vehicle visuals (chassis + 4 wheel meshes synced from physics)
- [ ] #5 Procedural world (roads, ramps, bridges, jump pads, boundary)
- [ ] #6 Cameras (4 modes, cycle with C)
- [ ] #7 Landing screen (HTML overlay, Start button)
- [ ] #8 Polish + deploy
- [ ] #9 Stretch: settings menu
- [ ] #10 Stretch: mobile touch controls
