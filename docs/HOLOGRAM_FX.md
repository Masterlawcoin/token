# BBSX Hologram FX Language

Every gameplay event has a deterministic visual cue. FX never determine the game result; they render server-confirmed events.

## Summon sequence — 1.8 seconds

1. **Card Lock (0–180ms):** physical NFT snaps into its legal Nexus Disc slot.
2. **Identity Scan (180–420ms):** serial/rarity scanline crosses the card.
3. **Portal Ring (420–800ms):** concentric energy rings rise from the card surface.
4. **Holo Build (800–1350ms):** avatar builds bottom-to-top using scan slices and particles.
5. **Impact (1350–1650ms):** short screen shake, light pulse and species-specific glyph.
6. **Ready (1650–1800ms):** HP/ATK appear and controls return immediately.

## Destruction sequence — 0.9 seconds

Hit flash -> hologram fractures into triangular shards -> silhouette collapses vertically into the NFT -> card rotates 90 degrees -> darkens -> moves to Grave. A KO pulse increments the scoreboard only after the authoritative DESTROY event.

## Rare visual identities

- Pleyadian: cyan/white vertical light filaments.
- Android: hard scan grid and hex shield.
- Commander: radial command glyph.
- Leviathan: gravity lens distortion.
- Flagship: horizontal warp gate.
- Phoenix: solar feather particles; REBIRTH reverses destruction animation.
- Void Dragon: violet spatial tear.
- Orion: fast diagonal tracer.
- ZYRAX: time-slice afterimages.
- Solaris: gold shield geometry.
- Nebulon: volumetric nebula field.
- Astra Lion: astral constellation build.

## Mobile performance tiers

`ULTRA`: particles + distortion + bloom-like CSS/WebGL pass.
`BALANCED`: particles + transforms, no expensive distortion.
`BATTERY`: transforms + opacity only.

The client auto-downgrades effects if frame time exceeds budget. Gameplay input must never wait for decorative particles.
