# Rainbow Rubbish Run — Urban Visuals v4.4

A standalone Australian rubbish-truck adventure for **Felix, Nora and Ferg**, designed for children aged roughly 3–5. All collection mini-games use pictorial sorting into food waste, recycling, green waste and general rubbish.

## Play
Open `index.html` in Chrome, Safari or Edge. This is a **single-file, offline build** with no external runtime assets, network requirement or paid plugin.

- ↑ accelerate, ↓ brake/reverse, ← / → steer, SPACE to start jobs and place each pictured item in a bin.
- Three player-specific garbage truck body colours and automatic turn-taking.
- Physically coupled kinematic side-loader, no chassis movement during bin pickup, depot unloading and repeating shifts.

## v4.4 urban visuals
- Imported two genuine CC0 Kenney tree GLBs as small triangle subsets, stored inline for offline use.
- Warm directional light, procedural road/grass microvariation and atmospheric haze in the WebGL shader.
- More variety in roadside details without filling street corridors.
- Tighter, more centred chase camera.
- **No new assets are loaded from the internet at runtime.**

## Validation
Automated Chromium tests: **96/96 scripted jobs** across four shifts, 59 bin collections, 32 turns per child, no JavaScript exceptions. Static world geometry fell from 166,838 to 159,620 triangles. Software-only Chromium sample: 14.8 FPS before, 15.7 FPS after (not a device performance guarantee).

The test script teleports to many stops for deterministic validation; it is not a fully manually driven route test. GPU WebGL lighting and real iPhone performance still need on-device testing.

This is **not** Rockstar's GTA SA engine or graphical asset set, and still uses simplified vehicle physics and kinematic hydraulics.

See [Asset Catalogue & Import Review](docs/ASSET_CATALOGUE_v4_4.md) for verified source and licence details, limits and deferred asset candidates.
