# Rainbow Rubbish Run — Living Town v4.2: Sorting Adventure

A standalone, offline Australian garbage-truck game for Felix, Nora and Ferg (approximately ages 3–5).

## Play
Download or open `index.html` in Chrome, Edge or Safari. The complete playable 3D model cache is embedded in the HTML; no external packages, online services or GTA assets are necessary.

- ↑ drive; ↓ brake/reverse; ←/→ steer.
- SPACE start a job, sort an item, or continue a turn.
- On phones, use the large onscreen controls.
- Guided/free steering and voice prompts are available where the browser supports them.

## Every job teaches rubbish sorting
All mini-games use four large pictured sorting bins: **🍎 FOOD**, **♻️ RECYCLING**, **🍃 GARDEN**, **🗑️ GENERAL RUBBISH**.

There are **134 teaching items**, split food 34, recycling 36, garden 30 and general 34. Sorting sessions are 2 pictures for Ferg and 3 for Felix/Nora; later shifts add one extra. Arrows select the bin, SPACE drops the item. Helpful clues and unlimited retries are built in.

Each player saves correct answers, mistakes, best streaks and a 🏅 sticker for five correct answers in a row.

**Educational simplification:** real council rules (including FOGO) vary. Follow the real labels and council rules where you live.

## Three articulated truck models
- Felix: blue/green Recycler.
- Nora: teal/purple Unicorn Express.
- Ferg: orange/green Dino Collector.

The original authored GLB files, prefabs and material atlases are supplied in the downloadable project archive. The standalone HTML embeds derived 3D vertex data and animates wheels, side-loader and tailgate.

## Town and jobs
24 jobs per shift, rotating evenly between the three children. Continuing shifts, repeated depot unloading when the truck fills, Australian-style houses, trees, fences, bins, traffic and wildlife. Modelled house and shop collision footprints, colour-coded roadside bins, large pictured navigation cues and a camera that tries to avoid roofs.

## Realism and test limitations
This is an original stylised game, not GTA San Andreas or a full Rapier rigid-body engine. Vehicle handling uses a custom approximation and the hydraulic arm is kinematically animated. WebGL can fall back to a slower software rasteriser.

Chromium automated checks pass, including **96 scripted jobs across four shifts**, four visible phone bin buttons, sticker earning, save/restore of learning stats, an incorrect-answer hint and no detected JS exceptions. Scripted jobs place the truck at the destination; the full driving route and iPhone hardware performance require hands-on testing.

The expanded GLB source, test scripts, screenshots and full instructions are in the downloadable Living Town v4.2 package shared in ChatGPT.
