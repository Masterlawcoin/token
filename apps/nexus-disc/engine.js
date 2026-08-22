export const PHASES=['DRAW','ENERGY','DICE','MAIN','COMBAT','END'];
export function createDuel(seed='bbsx-demo'){
 return {version:1,seed,turn:1,phase:'DRAW',active:'P1',winner:null,players:{P1:player(),P2:player()},log:[]};
}
function player(){return {energy:5,maxEnergy:10,kos:0,deck:[],hand:[],grave:[],zones:{summon1:null,summon2:null,summon3:null,support:null,reaction:null}}}
export function legalSummon(state,playerId,card,zone){
 const p=state.players[playerId];
 if(state.winner) return {ok:false,reason:'DUEL_FINISHED'};
 if(state.active!==playerId||state.phase!=='MAIN') return {ok:false,reason:'NOT_MAIN_PHASE'};
 if(!['summon1','summon2','summon3'].includes(zone)) return {ok:false,reason:'INVALID_ZONE'};
 if(p.zones[zone]) return {ok:false,reason:'ZONE_OCCUPIED'};
 if(p.energy<card.cost) return {ok:false,reason:'NOT_ENOUGH_ENERGY'};
 return {ok:true};
}
export function summon(state,playerId,card,zone){
 const legal=legalSummon(state,playerId,card,zone); if(!legal.ok) return legal;
 const p=state.players[playerId]; p.energy-=card.cost;
 p.zones[zone]={...card,instanceId:crypto.randomUUID(),hp:card.health,shield:card.id==='NULL_ANDROID_TITAN'?1:0,reborn:false,status:{}};
 state.log.push({type:'SUMMON',playerId,cardId:card.id,zone,turn:state.turn});
 return {ok:true,event:state.log.at(-1)};
}
export function attack(state,playerId,fromZone,targetPlayerId,targetZone){
 if(state.active!==playerId||state.phase!=='COMBAT') return {ok:false,reason:'NOT_COMBAT_PHASE'};
 const a=state.players[playerId].zones[fromZone], d=state.players[targetPlayerId].zones[targetZone];
 if(!a||!d) return {ok:false,reason:'UNIT_MISSING'};
 let damage=a.attack+(a.id==='ORION_STRIKER'&&!a.status.firstStrikeUsed?1:0); a.status.firstStrikeUsed=true;
 if(d.shield){d.shield=0;damage=0}else d.hp-=damage;
 const events=[{type:'ATTACK',playerId,fromZone,targetPlayerId,targetZone,damage}];
 if(d.hp<=0){
   if(d.id==='NEXUS_PHOENIX'&&!d.reborn){d.reborn=true;d.hp=2;events.push({type:'REBIRTH',targetPlayerId,targetZone});}
   else {state.players[targetPlayerId].grave.push(d);state.players[targetPlayerId].zones[targetZone]=null;state.players[playerId].kos++;events.push({type:'DESTROY',targetPlayerId,targetZone,cardId:d.id});}
 }
 if(state.players[playerId].kos>=3){state.winner=playerId;events.push({type:'VICTORY',playerId});}
 state.log.push(...events); return {ok:true,events};
}
export function setPhase(state,phase){if(!PHASES.includes(phase)) throw new Error('INVALID_PHASE');state.phase=phase;state.log.push({type:'PHASE',phase,turn:state.turn});}
export function endTurn(state){state.active=state.active==='P1'?'P2':'P1';state.turn++;const p=state.players[state.active];p.maxEnergy=Math.min(10,p.maxEnergy+1);p.energy=p.maxEnergy;state.phase='DRAW';state.log.push({type:'TURN',active:state.active,turn:state.turn});}
