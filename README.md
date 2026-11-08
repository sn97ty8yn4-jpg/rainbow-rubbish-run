# Rainbow Rubbish Run — Hydraulic Realism v4.3

A standalone offline garbage-truck game for Felix, Nora and Ferg, featuring three personalised Australian refuse trucks, a detailed suburban town, four-bin educational rubbish sorting and a reference-guided side-loader.

## Play
Open `index.html` in a modern desktop or mobile browser.

- **↑** drive; **↓** brake/reverse; **←/→** steer.
- **SPACE** to start a job and sort each item.
- Park stopped with the bin on the **right side of the truck**, inside the green parking guide. The lifter refuses to grab a bin it cannot physically reach.
- Following correct sorting, watch the complete ~11.2-second grab, draw-in, lift, tipping, shaking, righting, lowering and release.

## Main additions in v4.3
- A single coherent clamp/bin reference frame: the lid, wheels, jaws and bin remain rigidly attached during the lift.
- Physically plausible mechanism order with fixed guide rail, lateral telescopic extension, changing hydraulic-cylinder lengths and over-centre inversion.
- Exact return to the pickup coordinates before release, without moving the truck chassis to fake alignment.
- Reach/side validation and a subtle parking target; an inaccessible bin cannot start collection.
- Replaces the old duplicate/detached visual arm while retaining the GLB-derived truck bodies and six wheels.
- Every mini-game still centres on food waste, recycling, green waste and general rubbish, with stickers and individually saved progress.
- 24 jobs per shift, alternating turns among Felix, Nora and Ferg, with continuing shifts and depot unloading.

## Engineering reference and limitations
See [the reference study](docs/HYDRAULIC_REFERENCE_v4_3.md). Manufacturer tutorials, demonstrations, technical descriptions and photographs were consulted; direct playback of external videos was not available in the test environment.

**This remains a stylised kinematic simulation, not a pressure/flow-solvable hydraulic or Rapier rigid-body physics model.** The software renderer has been browser-tested; GPU performance and real-world mobile play remain unverified.

## Regression
81 kinematic/contact conditions passed; the actual bin sorting activity progressed through animation and increased the hopper fill without teleportation. 96 scripted jobs across four shifts passed, with 59 bin pickups and 32 turns per child. The 96 jobs were directly positioned for deterministic tests, not manually driven end-to-end.

The HTML is original and contains no Rockstar assets.
