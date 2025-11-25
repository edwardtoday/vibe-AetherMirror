# Particle Mirror - Software Requirements (SRS)

## 1. Goal
Browser-based art toy: open page, allow camera, see yourself rebuilt as particles and disturbed by motion. Suitable for quick play and demos.

## 2. Scenarios
- Individuals at a laptop: play, capture screenshots/short clips.
- Creative workshops/classrooms: use as a visual toy or inspiration.
- Displays: projector or lobby screen with interactive visuals.

## 3. User needs
- Zero setup beyond camera permission.
- Strong feedback: motion visibly affects particles (“wow” effect).
- Simple controls: minimal keys and mouse.
- Acceptable performance: target 30fps+ on mainstream laptops; adapt density to device.

## 4. Functional scope (current)
- Camera via `getUserMedia`, mirrored feed.
- Particle rendering in multiple modes:
  - Simple gas (Canvas), Physics gas (Matter.js), Flow field.
- Interaction:
  - Hotkeys 1/2/3 to switch modes.
  - Motion in camera drives local particle velocity pulses.
- Overlay: minimal help text.
- Optional screenshot/recording (future).

## 5. Non-functional
- Camera only after explicit permission.
- Processing stays in-browser; no uploads.
- Clear structure to extend modes and visuals.
