# Tasks

Last updated: 2026-05-10
Current task: Waiting on parallel tabs; ready to integrate when world.js and cameras.js land
Next action (this tab): Pull, then in main.js: replace OrbitControls with CameraRig, call buildWorld to get spawnPos, remove the temporary lerp-target hack. After integration: tune driving feel, then deploy.

## Done
- [x] #0 Scaffold project
- [x] #1 Three.js scene
- [x] #2 Physics world
- [x] #3 Vehicle physics — RaycastVehicle with verbatim params, WASD/Space input
- [x] #4 Vehicle visuals — chassis group (body + cabin + headlights) + 4 wheel cylinders, all synced from vehicle.wheelInfos[i].worldTransform

## In Progress (parallel)
- [ ] #5 Procedural world (separate tab)
- [ ] #6 Cameras (separate tab)

## Pending
- [ ] Integration: wire buildWorld + CameraRig into main.js
- [ ] #7 Landing screen
- [ ] #8 Polish + deploy
- [ ] #9 Stretch: settings menu
- [ ] #10 Stretch: mobile touch controls
