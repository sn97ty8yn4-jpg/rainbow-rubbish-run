# Urban Visuals v4.4 — asset review and provenance

This update uses no Rockstar or proprietary San Andreas assets. **Two** Kenney Nature Kit models are actually embedded; other libraries are candidates, not shipped dependencies.

| Source | Licence | Decision | Notes |
|---|---|---|---|
| [Kenney Nature Kit](https://kenney.nl/assets/nature-kit) | CC0 1.0 | **2 models imported** | `tree-fat.glb` (50 triangles) and `tree-simple.glb` (62 triangles), from [Hidencod/tge-assets](https://github.com/Hidencod/tge-assets/tree/main/packs/nature-kit); foliage colours harmonised for the Australian town. |
| [Kenney City Kit — Suburban](https://kenney.nl/assets/city-kit-suburban) | CC0 1.0 | Shortlisted, not imported | 40 modular buildings and props. Needs UV texture/material pipeline and verified collision scale. |
| [Kenney City Kit — Roads](https://kenney.nl/assets/city-kit-roads) | CC0 1.0 | Hold | Replacing base streets would risk breaking GPS, parking and mission locations. |
| [Kenney City Kit — Industrial](https://kenney.nl/assets/city-kit-industrial) | CC0 1.0 | Future depot | Limited warehouse models, once collider dimensions are verified. |
| [Quaternius Ultimate Stylized Nature](https://quaternius.com/packs/ultimatestylizednature.html) | CC0 | Hold | Heavier textured trees with a different polygon density; would require LOD and style matching. |
| [Poly Pizza](https://poly.pizza/) | Per model CC0 or CC-BY | Hold | Must validate each licence and attribution before import. |

### Import rules
- Do not stack new vegetation over original vegetation; **replace** selected existing trees.
- Preserve the three vehicle GLB-derived rigs, highway/road physics, and all gameplay collision meshes.
- Keep the standalone HTML fully offline and reject assets requiring runtime third-party downloads.
- Reject untrusted GLB input, geometry with NaN/Infinity, incorrect scale and textures that cannot be reproduced by the renderer.
- Target <=170k static triangles in desktop fallback and monitor mobile GPU memory. No mandatory >2.5k-triangle decorative asset without LOD.
- Texture-only colour maps require proper glTF/texture support: never treat a white material as a successful import.
- Don't import Rockstar GTA SA game files or copy proprietary textures into the public repository.

### Actual improvements
- 2 genuine CC0 tree assets, with compact centimetre-quantised triangle geometry (~112 source triangles total).
- Warm sunlight, asphalt/grass surface grain, roof/plaster tonal variation and atmospheric distance fog on the WebGL shader.
- Modest original street furniture, awnings, letterboxes and crates outside driving lanes.
- Improved centred chase camera to reduce near-building obstructions.

### Test evidence
96 scripted jobs (4 shifts), 59 scheduled bin pickups, 32 player turns each, no JavaScript exceptions. Direct placement was used for most scripted missions, not manual driving. Fixed-size desktop software-rendered Chromium comparison: 166,838 → 159,620 static triangles; 14.8 vs 15.7 FPS in a 2.8-second sample. Different devices may perform differently. Browser environment did not allow hardware WebGL testing, so GPU shader effects still need a real device check.

This is an original stylised game. It is **not** the GTA San Andreas engine and does not reproduce GTA's physics, map streaming or licensed art.
