# Rainbow Rubbish Run — Living Town v4.1: Sorting School

**Playable offline HTML game for Felix, Nora and Ferg (ages 3–5).** Open [index.html](./index.html) in a browser to play. No network assets, account or game installation is required.

## Latest features

- All jobs now use a preschool-friendly rubbish-sorting mini-game. The old timing, latch and other reflex puzzles have been replaced.
- **92 illustrated items**: 24 food scraps, 24 recycling, 20 garden waste, 24 general rubbish. Colours and pictures are prominent; speech cues are optional.
- **Left/right arrows** choose one of four colour-coded bins; **SPACE** drops the object. Unlimited retries, gentle clues, no countdown.
- Ferg begins with 2 objects per job; Felix and Nora get 3. New shifts increase difficulty slightly.
- Three individually authored Australian side-loader truck variants: Felix Blue Recycler, Nora Unicorn Express and Ferg Dino Collector. The online repository's standalone HTML contains the baked vehicle and town geometry.
- Detailed original Australian town scenery, expanded tree cover, kerbside bins, collision-checked houses and shops, GPS, pedestrians, traffic and landmarks.
- 24 scheduled stops per shift, three players taking eight turns each; the route continues into new shifts and the depot is repeatable.

## Controls

**↑ accelerate · ↓ brake/reverse · ←→ steer · SPACE work, sort, hand off.** Touch buttons are included.

## Test status

Chromium automation validated a complete **76-job** sample across four shifts, sorting retries, the hydraulic collection animation, mobile 4-bin layout and zero detected JavaScript exceptions. Job progression was tested by positioning the truck at individual stops; it was not a manually driven full route. iPhone GPU performance and speech voices remain unverified.

## Educational limitation

These are deliberately simplified educational sorting streams. **Real Australian council rules vary**, particularly FOGO services that combine food and garden waste. Follow your local council's instructions for actual household collection.

## Engineering limitation

The shipped game uses original authored, stylised assets and baked GLB geometry in a custom WebGL/software renderer. It is **not GTA San Andreas** and does not yet contain a fully integrated Rapier physics engine or full PBR textures. The complete offline game ZIP, separately importable GLBs and regeneration scripts are distributed in the ChatGPT project release.
