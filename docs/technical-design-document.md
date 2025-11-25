# Particle Mirror - Technical Design

## 1. Modes and cores
- Simple gas (Canvas): per-pixel particles, Brownian noise, motion-driven velocity pulses, elastic wall bounce.
- Physics gas (Matter.js): 2D rigid bodies (circles) with collisions; motion injects forces to nearby bodies.
- Flow field: Canvas particles advected by a curl-like sinusoidal field; motion injects random velocity bursts; screen wrap.
- Legacy `ParticleMirror` + `modes/fluid.ts`: kept for reference, not wired to UI.

## 2. Camera sampling
- `getUserMedia` → mirrored draw into low-res offscreen canvas.
- Motion = per-pixel absolute color diff between current/previous frame; thresholded to decide where to inject impulses.
- Base video is drawn at ~3% alpha as a faint guide layer.

## 3. Physics update patterns
- Simple/Flow: manual arrays for position/velocity; damping; boundary bounce or wrap; optional wall push-back.
- Matter: engine step at 60 FPS; static walls; impulses from motion; small thermal noise.
- Three: positions/velocities arrays; damping; random thermal noise; sampled neighbor repulsion; boundary bounce.

## 4. Rendering
- Canvas modes: clear with dark tint (with light trail), draw faint pixelated video, then draw particles as solid circles.
- Three mode: `Points` with additive blending and fixed color; orthographic camera sized to viewport.

## 5. Interfaces / controls
- Hotkeys in `App.tsx`: 1/2/3/4 switch modes.
- Each mode self-manages camera, offscreen sampling, RAF, and teardown.

## 6. Testing
- Vitest unit test covers a fluid update helper (legacy). Future: add mode-specific numeric tests (e.g., boundary bounce, motion thresholding).
