# Side-loader mechanical reference study — v4.3

## Sources consulted before implementation
- Heil DuraPack Python operator training video page: https://www.heil.com/videos/durapack-python-operation-tutorial/
- Heil automated side-loader video overview: https://www.heil.com/videos/truth-about-heil-sideload-garbage-truck-video/
- Superior Pak council vehicle footage reference: https://prmengineering.com.au/artificial-intelligence/ai-at-the-kerbside/
- Bucher Australian SPORT side-loader data: https://www.buchermunicipal.com/au/en-us/products/refuse-equipment/side-loaders/sport-side-loader
- Australian collection safety/vehicle image reference: https://www.lockyervalley.qld.gov.au/our-services/waste-management

**Evidence caveat:** external video playback was not accessible in this execution environment. We reviewed publicly available demonstration pages, operator descriptions, published photographs and manufacturer specifications; the animation is engineered from these references, not measured from motion-captured footage.

## Motion implementation
An 11.2-second kinematic sequence based on the manufacturer's indicative 8–12-second lifter cycle:
1. Extend low-profile slide towards bin.
2. Close narrow knuckle grab around bin at its real position.
3. Bring bin inward and begin raising.
4. Lift to hopper height through vertical guide.
5. Invert by rotating around the gripper, shake briefly, and return upright.
6. Lower back down, extend to the original kerb coordinates, open grab, retract and stow.

The bin, lid, wheels and jaw rotate around the **same clamp frame**. The original truck GLB-derived body and six wheels are preserved; the old, duplicated visual arm is suppressed in favour of the new coupled rig. A grounded parking rectangle guides pre-school drivers to the correct position.

## Important limitations
Kinematic machinery, **not** a Rapier or hydraulics-pressure solver. Interlocks validate only the bin being on the truck's right side within modelled arm reach and forward/back offset; the arm has no obstacle-aware collision path planner. Bin mass and slip are not force-solved.

## Regression summary
- 81 mechanical and contact tests passed (4 truck headings, exact jaw attachment at pickup and return, no teleport).
- Complete sorting puzzle -> hydraulics -> bin-count progression checked.
- 96 scheduled jobs across four shifts passed; 59 bin collections and 32 turns each for Felix, Nora and Ferg.
- No JS exceptions detected in Chromium software-render tests. Full manual driving and hardware WebGL/iPhone performance are untested.
