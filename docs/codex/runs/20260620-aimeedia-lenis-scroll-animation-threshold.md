# Codex Run State: Add delayed viewport animation triggers and Lenis smooth scrolling to Aimeedia website

Spec: docs/codex/20260620-aimeedia-lenis-scroll-animation-threshold.md
Status: archived
Branch: <none>
Codex Session: <not available>
Started: 2026-06-20 00:00 Asia/Dhaka
Last Updated: 2026-06-20 13:33 Asia/Dhaka

## Completed

- [x] Ingested spec
- [x] Read repo guidance
- [x] Inspected relevant files
- [x] Implemented change
- [x] Ran validation
- [x] Archived completed spec

## Remaining

- [x] Install the current `lenis` package with npm.
- [x] Add a single client-only Lenis app integration.
- [x] Centralize delayed viewport amount config and apply it to shared reveal primitives.
- [x] Replace the bespoke `WhyUs` 0.5 threshold with the shared delayed threshold.
- [x] Run available validation commands.
- [x] Archive the completed spec and update README metadata.

## Findings

- Framework: Next.js app router, root layout at `app/layout.jsx`.
- Package manager: npm, detected by `package-lock.json`.
- Animation stack: `motion/react` with shared `useInView` wrappers in `app/components/animation/Reveal.jsx`, `AnimatedCard.jsx`, `StaggerContainer.jsx`, and `TextReveal.jsx`.
- Current trigger mechanism: shared animation components default `amount` to `0.5`; `WhyUs.jsx` has one direct `useInView(... amount: 0.5 ...)` list animation. This matches the reported early trigger around 50%.
- Other scroll logic: `IntroVideo.jsx` uses `IntersectionObserver` threshold `0.3` for video playback/shell visibility, plus scroll-based scaling; `ScrollEffects.jsx` manages parallax, cursor glow, scroll progress, and pending anchor scrolling.
- No GSAP ScrollTrigger, AOS, or existing smooth-scroll library found.

## Implementation

- Added `lenis@1.3.23` with npm and initialized one app-level client-only Lenis instance in `app/components/LenisProvider.jsx`.
- Imported Lenis CSS from the root layout and mounted `LenisProvider` once before existing scroll effects.
- Configured Lenis with `autoRaf: true`, `anchors: true`, `stopInertiaOnNavigate: true`, cleanup on unmount, and reduced-motion opt-out.
- Added `app/components/animation/viewport.js` with an early `ANIMATION_VIEWPORT_AMOUNT = 0.22`; section/card timing now relies on staged transition delays instead of waiting for most of the section to enter the viewport.
- Updated `Reveal`, `AnimatedCard`, `StaggerContainer`, `TextReveal`, and the `WhyUs` list animation to use the shared delayed in-view hook.
- Increased default and section-specific card staggers so services, process, pricing, blog, and portfolio cards animate with visible per-card delays after their section enters.
- Updated native smooth-scroll helpers in `ScrollEffects` to use `auto` when `prefers-reduced-motion: reduce` is active.

## Tests / Checks

- `npm.cmd --prefix "C:\Users\tanve\OneDrive\Documents\Claude\Projects\Ai-Media" run lint` - passed.
- `npm.cmd --prefix "C:\Users\tanve\OneDrive\Documents\Claude\Projects\Ai-Media" run build` - passed.
- `curl.exe -I http://localhost:3000` after starting `npm run dev` - returned HTTP 200.

## Blockers

- Browser automation was unavailable in this session because the in-app browser control runtime was not exposed after tool discovery. Manual visual QA for perceived scroll timing, desktop/mobile viewport behavior, and console errors remains recommended.
- Git commands require per-command `safe.directory` because the sandbox user differs from the repository owner.

## Last Known State

Implementation and automated validation are complete. The shared reveal trigger now fires early and card grids use staged delays so motion remains visible while sections enter. The local dev server is running at `http://localhost:3000`; the archived spec and README index are updated.
