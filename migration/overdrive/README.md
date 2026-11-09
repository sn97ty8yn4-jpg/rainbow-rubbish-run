# Migration prototype: Overdrive City

**Decision:** Replace the home-built town renderer with the open-source `appleweiping/overdrive-city` game world, retaining Rainbow Rubbish Run's 3 player identities, four-bin picture sorting, loader sequence and repeatable depot missions.

Upstream: https://github.com/appleweiping/overdrive-city
Live upstream demo: https://appleweiping.github.io/overdrive-city/

## Why this engine
- MIT-licensed original JavaScript/Three.js open-world driving game, no GTA assets.
- Vendored Three.js, no npm build; has a seeded ~768 × 768 metre town.
- Already implements roads, sidewalks, districts, building collisions, AI traffic, pedestrians, camera, day/night, map and mission framework.
- Source is partitioned into `src/city.js`, `citymesh.js`, `vehicle.js`, `traffic.js`, `missions.js`, `main.js` and other modules.
- The code has a fixed-step 60Hz simulation. The city tile data powers collision and mission placement.

## Important constraints
1. **This branch is NOT yet a playable port.** The pure geometry module and tests are the initial interface contract for a future renderer/vehicle adapter. The current `main` game remains playable.
2. Overdrive City is still arcade vehicle physics (forward/lateral velocity, sliding), not Rapier.
3. Its default car collision is circular; implement a 2.45 × 7.75 m *oriented* truck footprint, not a giant circle.
4. The upstream game has weapons, police, criminal missions and a wanted level: **all must be removed or disabled at the source** for ages 3–5. Do not just hide the HUD.
5. Roads use right-hand traffic. Set vehicles, lane routing and safe kerb pickup geometry for left-hand driving in Australia.
6. Upstream cars are procedural Three.js meshes. The three truck GLB assets from our project need to be loaded and rigged as separate named nodes with matching steering and hydraulic animation hooks.
7. ES modules need a static web server (opening the upstream `index.html` as `file://` will not work).
8. Preserve upstream MIT notices and third-party attribution in any distributed build.

## First integration sequence
1. Pin a tested upstream revision. Mirror the MIT code into `prototype/overdrive-city/` (without replacing the root current release) or fork the upstream and apply an integration PR.
2. Remove crime/violent systems from the boot code, prevent player access to NPC vehicle theft, and implement automatic spawn inside the current child's truck.
3. Add `REFUSE_TRUCK_SPEC` to `src/vehicle.js` and import a child-specific rigged GLB. Size 2.45 m wide × 7.75 m long, 3 axles, 6 wheels.
4. Connect `checkPickup` and `samplePickup` from the module in this branch to an articulated Three.js scene graph. Keep bin in clamp reference frame and chassis stationary through the lift. Use 11.2s as the indicative cycle.
5. Place bin stops at existing sidewalk/road boundaries using `city.tileAt`, `city.laneAt` and `city.collideCircle`, not hardcoded coordinates or building interiors.
6. Replace upstream criminal mission dispatch with the child's queue of sorting jobs, three-player turns, repeatable depot unload and saveable learning stats.
7. Adjust camera for the right-hand arm operation, test collisions with houses and pedestrians, and add picture-only interface.
8. Test three children's trucks, wrong-side bin rejection, contact/return coordinates, all sorting categories, 60Hz stability and mobile input.

## Acceptance gates
- A clean online/offline build starts in a real browser with WebGL; screenshots show a complete truck and a driveable town.
- 2.45m-wide truck stays inside an Australian suburban driving lane with no exaggerated body scale.
- Collisions against buildings and traffic cannot tunnel.
- No weapons, crime missions, police chases or unsafe UI are reachable.
- Reach → clamp → draw in → lift → invert → right → lower → return → release remains attached and does not teleport.
- A full manually driven bin → sorting → loading → depot loop passes.
- Only after that, replace low-poly streets with curated, optimised assets.

Upstream licence: MIT, Copyright 2026 Weiping Yan.
