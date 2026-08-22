import fs from 'node:fs';
const manifest = JSON.parse(fs.readFileSync(new URL('../config/genesis24.json', import.meta.url)));
const errors=[];
if(manifest.supply!==24) errors.push('Genesis supply must equal 24');
if(manifest.serialRange?.[0]!==1 || manifest.serialRange?.[1]!==24) errors.push('Genesis serial range must be 1..24');
if(manifest.archetypes?.length!==12) errors.push('Exactly 12 Genesis archetypes are required');
if(new Set(manifest.archetypes||[]).size!==12) errors.push('Genesis archetypes must be unique');
if(manifest.rankedPowerMultiplier!==1) errors.push('Ranked NFT power must remain normalized to 1.00x');
if(manifest.network!=='devnet') errors.push('Repository launch network must remain devnet until explicit mainnet release');
if(errors.length){ console.error(errors.join('\n')); process.exit(1); }
console.log('BBSX Genesis invariants OK: 24 serials, 12 archetypes, ranked 1.00x, devnet gate enabled.');
