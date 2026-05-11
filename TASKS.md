# Tasks

Last updated: 2026-05-10
Current task: #4 Vehicle visuals (this tab) + #5/#6 in parallel tabs
Next action (this tab): After parallel tabs land, replace temp chassis box with proper chassis mesh + 4 wheel `CylinderGeometry` synced from `vehicle.wheelInfos[i].worldTransform`. Apply `mesh.rotateZ(Math.PI/2)` to wheel meshes for axle alignment.

## Done
- [x] #0 Scaffold project
- [x] #1 Three.js scene
- [x] #2 Physics world
- [x] #3 Vehicle physics — RaycastVehicle with verbatim cannon-es params, WASD+Space input, RWD with front-wheel steer, temp chassis cube renders

## In Progress (parallel)
- [ ] #4 Vehicle visuals (this tab, blocked on testing #3 first)
- [ ] #5 Procedural world (separate tab)
- [ ] #6 Cameras (separate tab)

## Pending
- [ ] #7 Landing screen
- [ ] #8 Polish + deploy
- [ ] #9 Stretch: settings menu
- [ ] #10 Stretch: mobile touch controls
