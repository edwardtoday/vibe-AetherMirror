# Particle Mirror

Web-based real-time visual toy: your webcam feed is turned into thousands of particles with multiple rendering/physics modes.

Core experience:
- Open page, allow camera → particles appear immediately
- Your motion disturbs the particle cloud; each mode responds differently
- Mouse/hand motion also injects energy into nearby particles

## Run
Requires Node.js 18+ and npm.
```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run test -- --run  # run unit tests
```
Open `http://localhost:5173` in your browser.

## Modes (hotkeys 1/2/3/4)
- 1: Simple gas (Canvas) — Brownian motion + motion pulses + boundary bounce.
- 2: Physics gas (Matter.js) — true 2D collisions/forces, motion-injected impulses.
- 3: Three.js points — GPU points with light repulsion + noise, motion-driven kicks.
- 4: Flow field — curl-like field with motion-based velocity injection.

## Stack
- Vite + React + TypeScript
- Canvas for modes 1/2/4; Three.js for mode 3
- Matter.js for 2D physics (mode 2)
- Vitest for lightweight unit testing

See `docs/` for requirements and design notes.
