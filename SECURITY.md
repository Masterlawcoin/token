# Security Policy

Never open an issue containing a seed phrase, private key, signing key, Supabase service-role key or private RPC credential.

## Authority rules

- Production authority must be held outside this public repository.
- Browser code never receives mint authority.
- Mainnet authority should use a hardware-backed or multisig operational model before public sale.
- Treasury, liquidity and operational signer roles should be separated before Mainnet.

## Reporting

For now, report security findings privately to the repository owner rather than publishing an exploit before a fix is available.

## Immutable invariants

- Genesis supply: 24.
- Genesis serials: BBSX-00001..BBSX-00024.
- Ranked NFT multiplier: 1.00x.
- On-chain ownership is authoritative.
