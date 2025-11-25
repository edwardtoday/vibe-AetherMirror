# Particle Mirror - Architecture Design

## 1. Overview
- SPA on Vite + React + TypeScript.
- Multiple visual modes under `src/visuals/`:
  - Canvas-based simple gas / flow field.
  - Matter.js 2D physics.
- React mounts the container, renders minimal overlay, and maps hotkeys to modes.

## 2. Modules
- `src/visuals/camera.ts`: wraps `getUserMedia`, returns `HTMLVideoElement` (mirrored at call sites).
- `src/visuals/PixelatedVideo.tsx`: Mode 1, canvas particles with Brownian motion and motion-driven kicks.
- `src/visuals/MatterGas.tsx`: Mode 2, Matter.js world, forces injected from motion.
- `src/visuals/ThreeGas.tsx`: Mode 3, Three.js points with simple dynamics + repulsion.
- `src/visuals/FlowFieldGas.tsx`: Mode 4, flow-field-driven particles with motion injection.
- `src/visuals/ParticleMirror.ts` and `modes/`: legacy Three.js mirror (not used in current UI).
- `src/App.tsx`: mode switch (1/2/3/4), overlay.

## 3. Data flow / lifecycle
1) React mounts → selected mode component mounts.  
2) Each mode requests camera, mirrors feed, downsamples for motion analysis.  
3) Motion signal injects forces/velocity pulses into that mode’s particle system.  
4) Animation loop: update physics → render (Canvas or Three.js).  
5) On unmount: stop RAF, dispose renderer/engine, stop camera tracks.

## 4. Performance / extension
- Particle count and sampling resolution are mode-specific; reduce counts or sampling resolution to improve FPS.
- Matter.js mode: tune body count, air friction, force magnitudes.
- Three.js mode: tune point count and repulsion sampling.
- Flow field: adjust particle count and flow strength for performance.

## 5. Privacy
- All video processing is local; no uploads.
- Camera access follows browser permission; user can revoke at any time.
