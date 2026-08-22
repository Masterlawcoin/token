# BBSX Nexus Protocol

## Trust model

Solana is the source of truth for ownership. Supabase is an index, reservation system and application database; it is not proof of NFT ownership.

## Genesis issuance

The initial issuance is exactly 24 compressed NFTs. Serial IDs BBSX-00001 through BBSX-00024 are permanently reserved for Genesis. There are 12 archetypes and exactly two initial serials for each archetype.

## Mint state machine

`reserved -> mint_submitted -> confirmed -> indexed`

A record MUST NOT become `confirmed` without a Solana transaction signature. It MUST NOT become `indexed` without a DAS-returned Asset ID and owner check.

Failures use `mint_failed` with an error and may be retried idempotently; the serial is never silently reassigned.

## Wallet authentication

The player signs a short-lived challenge containing wallet, nonce and expiry. The backend verifies the Ed25519 signature. A challenge is single-use and expires quickly.

## Pack opening

1. Backend creates an order.
2. Payment/claim eligibility is verified server-side.
3. A serial is reserved atomically.
4. Mint is submitted by an authorized signer.
5. Solana confirmation is stored.
6. DAS verifies Asset ID and owner.
7. Only then does the cinematic reveal mark the NFT as delivered.

The browser never chooses rarity or serial.

## Gameplay

NFT ownership unlocks identity, cosmetics, Founder access, provenance and eligible modes. Ranked combat uses canonical server-side rules and a normalized NFT multiplier of 1.00x. GitHub contributions may add modules/subgames, but cannot mutate canonical Genesis serials or ranked rules without a protocol release.

## Mainnet gate

Mainnet is prohibited until: 24/24 Devnet assets are confirmed/indexed, ownership is visible through DAS, pack issuance is idempotent, no secret exists in repository history, and authority/recovery procedures have been reviewed.
