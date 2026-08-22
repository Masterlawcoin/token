# BBSX VAULT + NEXUS DISC

## Product idea

BBSX is no longer presented as a generic NFT gallery plus a separate board game. The wallet and the duel surface are one continuous experience.

### BBSX Vault

BBSX Vault is a branded non-custodial Solana wallet experience. It does **not** invent new cryptography and never receives a seed phrase. It connects to Wallet Standard wallets (Phantom, Solflare, Backpack and compatible wallets), verifies ownership through Solana/DAS, and renders owned BBSX NFTs as interactive 3D cards.

Vault views:

1. **Orbit** — one selected NFT floats in 3D and can be rotated 360° with one finger.
2. **Deck** — owned NFTs are arranged in a curved digital deck.
3. **Genesis Vault** — special slots for BBSX-00001..BBSX-00024.
4. **Duel Loadout** — drag owned cards into a legal duel deck.
5. **Asset Proof** — Asset ID, serial, edition, owner, transaction and DAS ownership state.

The Vault stores UI preferences and cached public metadata only. Private keys stay in the connected signer.

## NEXUS DISC

Nexus Disc is the canonical mobile duel surface. It uses an original circular / crescent-shaped interface rather than copying another franchise's physical prop.

### Screen layout

- Center: **Nexus Core** — energy, turn state, dice and duel timer.
- Lower arc: **5 hand slots**.
- Forward arc: **3 summon slots**.
- Left wing: **support / terrain slot**.
- Right wing: **reaction / trap slot**.
- Top edge: enemy projection.
- Background: battlefield / FORK world.

### Interaction

- One-finger drag on a hand card: card rises and tilts in 3D.
- Drag onto a valid summon slot: slot locks magnetically.
- Card performs a 500–900 ms flip and emits a holographic portal.
- The NFT art remains visible below the summoned hologram as its source.
- Creature becomes an animated board entity with HP, shield and status tags.
- Destroyed entities break into particles and the source card flips face-down, then returns to grave / cooldown depending on the rules.

### Duel sequence

1. Draw.
2. Energy pulse.
3. Dice / deterministic action budget.
4. Player can summon, support, move or attack in any legal order.
5. Reaction window is short and visible.
6. Resolve combat.
7. First player to 3 warrior KOs wins canonical mode.

The UI avoids separate administrative buttons wherever possible. Legal actions are contextual and shown directly on the disc.

## 3D NFT card

The card is always 63:88. It is composed of:

- front NFT artwork;
- physical thickness layer;
- canonical BBSX reverse;
- holographic shader based on NFT traits;
- serial / Genesis edge engraving;
- rarity-dependent particle response;
- optional accessory layers from metadata.

The 3D transform is visual only. Ownership and gameplay data are read from verified state, never from DOM attributes.

## Summon effects

Examples tied to canonical archetypes:

- Pleyadian Celestia — white/cyan ring, healing particles and HP restoration.
- Null Android Titan — heavy blue lattice shield materialization.
- Nexus Commander — command rays linking allied slots.
- Cosmic Leviathan — large-scale field distortion and splash impact.
- Cosmic Flagship — orbital projection and energy recharge.
- Nexus Phoenix — flame reconstruction and one revive token.
- Void Dragon — violet fracture portal and push effect.
- Orion Striker — long-range reticle and beam.
- ZYRAX — red/violet control field and slow.
- Solaris Prime — gold prism shield.
- Nebulon — persistent nebula terrain.
- Astra Lion — teleport streak between slots.

## Destruction

A KO is not a simple opacity change.

1. Hit stop 60–90 ms.
2. Hologram fractures.
3. Light collapses into the source NFT card.
4. Card rotates face-down.
5. Particles are pulled into the grave / cooldown lane.
6. KO counter increments only after authoritative state confirms the event.

## Digital dice

The dice is an animated 3D object launched from the Nexus Core. The final value must come from the authoritative game state. Animation may anticipate motion but cannot choose the result locally.

## Wallet / blockchain boundary

- Wallet Standard signer approves authentication and on-chain operations.
- BBSX backend verifies Ed25519 challenge signatures.
- DAS verifies actual cNFT ownership.
- A deck references Asset IDs / serials, not image file names.
- Ranked mode maps every legal NFT to canonical normalized stats.
- Cosmetic edition / hologram / serial remain unique.

## Open-source FORK rule

Community code may add worlds, VR encounters, visualizers and subgames through a stable FORK API. Extensions receive read-only canonical card definitions and signed match context. They cannot mint Genesis cards, change Genesis serials, rewrite ranked statistics or write directly to treasury / mint authority.

## Mobile requirement

Nexus Disc is mobile-first and landscape-first. Desktop entry should show a QR and a live spectator / collection preview, not the interactive duel controls.
