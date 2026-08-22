# BBSX Nexus — Crypto Core

Canonical open-source crypto layer for BBSX Nexus.

## Launch scope

- Solana Devnet first.
- 24 Genesis cNFTs (`BBSX-00001` … `BBSX-00024`).
- 12 Genesis archetypes, two initial assets per archetype.
- Bubblegum V2 / compressed NFT architecture.
- Wallet Standard compatible frontend (Phantom, Solflare, Backpack and other compatible wallets).
- Server verifies ownership; the browser never decides NFT ownership or mint results.
- Ranked gameplay is normalized: owning a rarer NFT does not alter competitive rules.

## Security invariants

1. No private key, seed phrase, RPC secret or Supabase service-role key is committed to GitHub.
2. `BBSX-00001` through `BBSX-00024` are immutable Genesis serial reservations.
3. Mint status becomes `minted` only after a confirmed Solana transaction and a real Asset ID are recorded.
4. Mint authority is not exposed to the browser.
5. Payment, minting, pack allocation and ownership verification are separate operations.
6. Mainnet deployment is disabled until the Devnet acceptance checklist passes.

## Repository layout

- `config/` public, non-secret network configuration.
- `docs/` protocol and launch specifications.
- `scripts/` operational scripts. Secrets are supplied only through environment variables or an external signer.
- `.github/` contribution and security controls.

## Current status

The off-chain registry and wallet challenge/verification layer are prepared in the BBSX Supabase project. The first 24 serials are reserved. The remaining on-chain step requires an authorized Solana signer to approve creation of the collection/tree and mint transactions. This repository intentionally does not contain that private signer.

## Modern Solana stack

New frontend work should use Solana Kit and Wallet Standard rather than introducing new legacy wallet-adapter dependencies. Bubblegum V2 is used for the compressed-NFT layer.
