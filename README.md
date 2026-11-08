# Rainbow Rubbish Run — Living Town v3

A self-contained, offline, original 3D browser garbage-truck game for **Felix, Nora and Ferg**, designed for children approximately 3–5 years old.

## Play

Open [index.html](./index.html) in a modern desktop or mobile browser. No npm, external models, network requests, or proprietary GTA files are required. The game tries WebGL first and uses its built-in depth-tested software renderer if WebGL fails.

### Controls
- **↑** accelerate
- **↓** brake / reverse
- **← / →** steer (intentionally reversed relative to the older game builds, as requested by the player)
- **SPACE** start jobs, solve puzzles and operate hydraulics
- On phones, use the on-screen arrows and large SPACE button.

Picture-first directions show a large flashing arrow, yellow GPS breadcrumbs, a highlighted road route, stop signs and work prompts. The sound button also enables/disables **Australian-English spoken instructions through the browser's local Web Speech API**, where the operating system provides compatible voices. Speech availability varies by browser/device.

## Current gameplay

- 24 scheduled jobs per shift, including 14–15 rubbish-bin pickups plus recycling, depots, wildlife and other tasks.
- Felix → Nora → Ferg rotate after every scheduled task, with eight turns each per shift.
- Continuing shifts and repeatable depot unloading when the truck fills.
- Solid house and shop footprints: a separating-axis collision test keeps the truck outside buildings.
- Guided/free steering, simulated truck suspension, side-loader lifting animation, rear unloading, traffic and Australian animals.
- Suburban town with pitched roofs, fences, verandahs, parked cars, eucalyptus street trees and extra curbside wheelie bins.
- Auto-save where local browser storage is available.

## Scope and limitations

This is an **original stylised game**, not GTA San Andreas or an SA asset port. The truck dynamics are approximated (not a full Rapier rigid-body simulation), hydraulic parts follow kinematic animation, and the WebGL fallback can be slower on limited hardware.

All in-game geometry is authored/procedural; the game does not contain Rockstar assets. An earlier photorealistic concept render is reference artwork only, not the in-game model.

## Testing

Automated Chromium regression checked steering direction, solid-building collision, the bin and depot puzzles, all 72 scheduled jobs across three shifts (24 tasks per child), desktop startup, mobile control bounds, no JavaScript exceptions and zero network requests.

Those 72 automated tasks are **direct test placements**, not a complete manually driven route. The browser's presence of `speechSynthesis` was checked; audible voice quality and real iPhone/GPU performance remain to be tested on devices.

## Repository

This repository stores the directly playable `index.html`. More advanced Three.js/Rapier code and the 129-part GLB prototype remain separate development work until a live integrated engine build passes road tests.

