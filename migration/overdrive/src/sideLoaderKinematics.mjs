// Rainbow Rubbish Run × Overdrive City — independent side-loader geometry.
// Coordinate convention verified against Overdrive City Vehicle:
// heading 0 drives along world +Z, truck-local +X is the right-hand side.
// This module deliberately does not depend on Three.js so its interlocks and
// cycle can be tested independently of a renderer.
// Copyright (c) 2026 Rainbow Rubbish Run contributors. MIT.
export const COLLECTION_SECONDS = 11.2;
export const REFUSE_TRUCK_SPEC = Object.freeze({
  w: 2.45, l: 7.75, maxF: 13, maxR: 4, accel: 3.0,
  grip: 8.5, steer: 0.95, hp: 220,
  // Circle-only collision is a temporary compatibility fallback.
  // Production integration needs an oriented 2.45 × 7.75 m footprint.
  collision: 'oriented-rectangle',
});
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const ease=t=>{t=clamp(t,0,1);return t*t*(3-2*t);};
const mix=(a,b,t)=>a+(b-a)*t;
export function worldToTruck(truck,point){
  const dx=point.x-truck.x, dz=point.z-truck.z;
  const c=Math.cos(truck.heading),s=Math.sin(truck.heading);
  return {right:dx*c-dz*s,ahead:dx*s+dz*c};
}
export function truckToWorld(truck,local){
  const c=Math.cos(truck.heading),s=Math.sin(truck.heading);
  return {x:truck.x+local.right*c+local.ahead*s,
          z:truck.z-local.right*s+local.ahead*c};
}
export function checkPickup(truck,bin){
  if(!truck||!bin) return {ok:false,reason:'missing-target'};
  const p=worldToTruck(truck,bin);
  const speed=Math.abs(truck.speed??0);
  const ok=speed<0.55 && p.right>=2.7 && p.right<=5.0 && Math.abs(p.ahead)<=1.8;
  const reason=speed>=0.55?'truck-moving':p.right<0?'wrong-side':
    p.right<2.7?'too-close':p.right>5.0?'out-of-reach':
    Math.abs(p.ahead)>1.8?'ahead-offset':'ok';
  return {ok,reason,target:p};
}
// The gripper and bin must use this SAME pose each frame; the vehicle body
// must remain fixed while the lift sequence is active.
export function samplePickup(seconds,target){
  const t=clamp(seconds,0,COLLECTION_SECONDS);
  const tx=clamp(target.right,2.7,5.0),tz=clamp(target.ahead,-1.8,1.8);
  let x=1.7,y=1.38,z=0,tilt=0,jaws=0,phase='stowed',hasBin=false;
  if(t<1.55){phase='extend';x=mix(1.7,tx,ease(t/1.55));z=mix(0,tz,ease(t/1.55));}
  else if(t<2.18){phase='clamp';x=tx;z=tz;jaws=ease((t-1.55)/.63);}
  else if(t<3.65){phase='draw-in';const q=ease((t-2.18)/1.47);x=mix(tx,1.65,q);z=mix(tz,0,q);jaws=1;hasBin=true;}
  else if(t<5.55){phase='lift';const q=ease((t-3.65)/1.9);x=mix(1.65,.55,q);y=mix(1.38,4.20,q);jaws=1;hasBin=true;}
  else if(t<7.25){phase='tip';x=.55;y=4.20;tilt=mix(0,2.85,ease((t-5.55)/1.7));jaws=1;hasBin=true;}
  else if(t<8.15){phase='right';x=.55;y=4.20;tilt=mix(2.85,0,ease((t-7.25)/.9));jaws=1;hasBin=true;}
  else if(t<9.65){phase='lower';const q=ease((t-8.15)/1.5);x=mix(.55,1.65,q);y=mix(4.20,1.38,q);jaws=1;hasBin=true;}
  else if(t<10.45){phase='return-to-kerb';const q=ease((t-9.65)/.8);x=mix(1.65,tx,q);z=mix(0,tz,q);jaws=1;hasBin=true;}
  else if(t<10.85){phase='release';x=tx;z=tz;jaws=1-ease((t-10.45)/.4);hasBin=t<10.60;}
  else {phase='stow';const q=ease((t-10.85)/.35);x=mix(tx,1.7,q);z=mix(tz,0,q);}
  return {phase,x,y,z,tilt,jaws,hasBin,cycleSeconds:COLLECTION_SECONDS,
          // Pickup and release both reference identical local coordinates.
          kerbTarget:{right:tx,ahead:tz}};
}
