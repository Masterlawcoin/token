# BBSX Genesis 24 — Immutable Effect Model

## Goal
The 24 Genesis NFTs may display their canonical ability in NFT metadata, but gameplay enforcement MUST NOT trust mutable frontend JSON or the NFT description alone.

## Canonical enforcement
Each Genesis serial BBSX-00001..BBSX-00024 maps to a canonical `effect_id`, summon cost, protocol cost, ATK, HP and ultimate identifier.

The authoritative game program/registry stores a compact rules commitment:

- rules_version
- genesis_serial
- effect_id
- summon_cost
- protocol_cost
- attack
- health
- ultimate_id
- rules_hash

Clients read this data and render it. They do not define it.

## NFT metadata
Metadata SHOULD contain human-readable fields:
- serial
- archetype
- ability_name
- ability_description
- effect_id
- rules_version
- rules_hash

Metadata is descriptive evidence and UX. It is NOT sufficient enforcement.

## Extreme immutability release
Before revoking upgrade authority:
1. audit every Genesis effect and cost;
2. test all 24 serials on Devnet;
3. publish source code and build reproducibility instructions;
4. publish the final program binary hash / program data address;
5. verify all NFT metadata references the same `rules_version` and `rules_hash`;
6. only then revoke program upgrade authority if permanent immutability is desired.

After upgrade authority is revoked, canonical Ranked rules cannot be patched. Therefore revocation is a final release step, never a development step.

## Community boards / forks
Community boards receive canonical resolved events and verified NFT identity. They may create visuals, 2D/3D/VR scenes, casual modes and minigames, but cannot mutate the official Genesis Ranked registry.

## Security invariant
`NFT DESCRIPTION != SMART CONTRACT EXECUTION`.
The description tells players what the card does. The program/registry proves which effect is canonical and the authoritative game server/program resolves it.
