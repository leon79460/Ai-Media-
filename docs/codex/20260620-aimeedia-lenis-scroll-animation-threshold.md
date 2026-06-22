---
codex_doc_type: implementation_prompt
source_date: 2026-06-20
archived_at: 2026-06-20
source_filename: 20260620-aimeedia-lenis-scroll-animation-threshold.md
source_path: docs/codex/inbox/20260620-aimeedia-lenis-scroll-animation-threshold.md
source_date_basis: today
implementation_status: implemented
summary: Shifted reveal timing to early triggers with visible staged card delays and added accessible Lenis smooth scrolling.
---

CODEX_SPEC_INGEST_V1
---
title: Add delayed viewport animation triggers and Lenis smooth scrolling to Aimeedia website
slug: aimeedia-lenis-scroll-animation-threshold
created_by: chatgpt
workflow: codex-spec-archiver
requires_git: true
---

# Add delayed viewport animation triggers and Lenis smooth scrolling to Aimeedia website

## Objective

Update the Aimeedia website so scroll-triggered section animations begin later, when approximately 75–80% of the target section or reveal element is visible, instead of the current earlier trigger that appears to fire around 50%.

Add smooth scrolling using the current Lenis package in an industry-standard, accessible, framework-appropriate way.

## Background / Current State

The current site appears to trigger reveal/transition animations too early, likely around half visibility. The desired behavior is for animations to start only after the section is mostly in view.

The repo context is not available in this prompt. Inspect the project before changing code. Do not assume the framework, package manager, animation library, or file paths.

Lenis was historically associated with Studio Freight, but the current maintained package/docs use the `lenis` package name. Prefer the current package unless the repo already has an older integration that must be handled carefully.

## Assumptions

- The Aimeedia website is a frontend web app with existing scroll-triggered animations.
- Existing animation triggers may use one of these patterns:
  - `IntersectionObserver`
  - Framer Motion `whileInView` / `viewport.amount`
  - GSAP `ScrollTrigger`
  - AOS or a similar reveal-on-scroll library
  - Custom hooks/components for section reveal animations
- Use `0.8` as the preferred target threshold. If 80% creates missed triggers for tall sections or small screens, use `0.75` as the minimum acceptable threshold.
- The goal is delayed trigger timing, not arbitrary CSS transition-duration changes, unless an existing animation API requires a transition delay/stagger adjustment to preserve visual quality.

## Scope

Implement the following:

1. Locate all current scroll-triggered section/reveal animation logic.
2. Change the trigger visibility requirement from the current effective value, likely around 50%, to 75–80%.
3. Prefer a centralized constant/config so future viewport trigger tuning is easy.
4. Add Lenis smooth scrolling at the app/root level.
5. Integrate Lenis safely with the existing animation system.
6. Preserve accessibility, keyboard navigation, anchors, modals, nested scroll containers, and reduced-motion behavior.
7. Validate across desktop and mobile viewport sizes.

## Non-Goals

- Do not redesign the website.
- Do not rewrite unrelated animation components.
- Do not introduce a new animation library unless Lenis integration requires it.
- Do not change visual content, copy, layout, branding, or routing.
- Do not deploy to production.
- Do not make destructive git operations.
- Do not add `@studio-freight/lenis` unless the repo already depends on it and migration risk is explicitly documented. Prefer the current `lenis` package.
- Do not force smooth scrolling for users who prefer reduced motion.

## Constraints and Safety Rules

- Inspect first. Make the smallest safe change.
- Use the repo’s existing package manager and lockfile:
  - npm if `package-lock.json`
  - pnpm if `pnpm-lock.yaml`
  - yarn if `yarn.lock`
  - bun if `bun.lockb` or `bun.lock`
- Do not invent commands. Use scripts already defined in `package.json`.
- Do not add production URLs, secrets, API keys, analytics changes, or deployment config.
- Keep Lenis initialization client-side only.
- Ensure only one Lenis instance is created.
- Ensure Lenis is destroyed/cleaned up on unmount in React/Next/Vue-style environments.
- Respect `prefers-reduced-motion: reduce`; disable Lenis smoothing or fall back to native scroll for those users.
- Preserve normal focus behavior and keyboard scrolling.
- Preserve anchor/hash navigation behavior.
- Avoid breaking modals, drawers, dropdowns, accordions, embedded maps, or nested scroll containers.
- If the animation target can be taller than the viewport, avoid a strict threshold that would never fire. Add a documented fallback for tall sections.

## Files / Areas to Inspect

Inspect these areas, using actual repo paths discovered during exploration:

- `package.json`
- lockfile
- app entrypoint:
  - likely `src/main.*`, `src/App.*`, `src/app/layout.*`, `pages/_app.*`, `app/layout.*`, or similar
- global CSS:
  - likely `src/styles/*`, `app/globals.css`, `src/index.css`, or similar
- animation/reveal components:
  - search for `whileInView`
  - search for `viewport`
  - search for `IntersectionObserver`
  - search for `threshold`
  - search for `rootMargin`
  - search for `ScrollTrigger`
  - search for `AOS`
  - search for `data-aos`
  - search for `useInView`
  - search for `animate`
  - search for `motion`
- page/section components that animate on scroll
- any layout wrapper or provider pattern already used in the app

## Implementation Plan

### Phase 1: Inspect and identify current animation trigger mechanism

1. Determine the framework and animation stack.
2. Determine the package manager.
3. Locate current reveal/scroll-triggered animation implementation.
4. Identify the current effective trigger threshold:
   - For Framer Motion, check `viewport.amount`.
   - For `IntersectionObserver`, check `threshold` and `rootMargin`.
   - For GSAP ScrollTrigger, check `start`, `end`, and related trigger config.
   - For AOS, check `offset`, `anchorPlacement`, and global init options.
5. Record the findings in the Codex run-state file before editing.

### Phase 2: Delay animation trigger to 75–80% visibility

Implement the threshold change according to the existing animation system.

Preferred behavior:

- Use `0.8` as the default amount/threshold.
- Use `0.75` only where 80% creates missed triggers or bad behavior on realistic viewports.
- Centralize this value if there is a reusable animation config/hook/component.

Framework-specific guidance:

- If using Framer Motion:
  - Prefer a shared value such as `ANIMATION_VIEWPORT_AMOUNT = 0.8`.
  - Apply via `viewport={{ amount: ANIMATION_VIEWPORT_AMOUNT, once: true }}` or the project’s existing equivalent.
  - Preserve existing `once`, `margin`, and animation variants unless they cause early triggers.
- If using `IntersectionObserver`:
  - Set `threshold` to `0.8` or `0.75`.
  - Avoid negative `rootMargin` or large positive margins that make triggers fire earlier.
  - Add fallback logic for targets taller than the viewport so animations still trigger.
- If using GSAP ScrollTrigger:
  - Translate the requirement into equivalent trigger timing.
  - Prefer a config that makes animations begin when the relevant section/element is mostly visible.
  - After Lenis integration, ensure `ScrollTrigger.update` is synced with Lenis if GSAP ScrollTrigger is present.
- If using AOS:
  - Adjust global or per-section offset/anchor placement so animation starts later.
  - Prefer central/global config over scattered per-element overrides.

Do not apply arbitrary CSS `transition-delay` as the primary fix if the real issue is viewport trigger timing. Use CSS delay only if it improves the existing animation sequence after the correct trigger threshold is applied.

### Phase 3: Add Lenis smooth scrolling

1. Add the current `lenis` dependency using the repo’s package manager.
2. Import Lenis using the package’s current API:
   - `import Lenis from 'lenis'`
3. Import Lenis CSS if appropriate for the stack:
   - `import 'lenis/dist/lenis.css'`
   - Place this in the correct global/client entrypoint according to framework rules.
4. Create a single app-level Lenis integration:
   - React/Next likely: client-only component/provider with `useEffect`.
   - Vue likely: app-level plugin or root component lifecycle.
   - Vanilla/Vite likely: app bootstrap file.
5. Use an industry-standard setup:
   - If the site does not use GSAP ScrollTrigger, initialize Lenis with `autoRaf: true`.
   - If the site uses GSAP ScrollTrigger, sync Lenis with ScrollTrigger instead of running conflicting loops:
     - listen to Lenis scroll updates and call `ScrollTrigger.update`
     - drive Lenis from the GSAP ticker if that matches the current stack
     - avoid duplicate RAF loops
6. Enable anchor support only if compatible with the site’s navigation:
   - Use Lenis anchor support or a project-local anchor click handler.
   - Preserve hash updates and focus movement.
7. Configure nested scroll handling:
   - Ensure modals, menus, form dropdowns, and any intentionally scrollable containers still scroll normally.
   - Use Lenis `prevent` handling, data attributes, or equivalent documented approach.
8. Respect reduced motion:
   - If `window.matchMedia('(prefers-reduced-motion: reduce)').matches`, do not initialize Lenis smoothing, or configure it to behave like native scrolling.
9. Clean up properly:
   - Destroy the Lenis instance on unmount.
   - Remove ticker/listeners if GSAP is used.
   - Avoid memory leaks during route transitions or hot reload.

### Phase 4: Validate integration with animations

1. Verify that the delayed animation trigger still works after Lenis is active.
2. Check that reveal animations do not double-fire.
3. Check that animations do not fire immediately on page load unless the section is already sufficiently visible.
4. Check tall sections and short sections.
5. Check mobile viewport behavior.
6. Check anchor links, browser back/forward, and hash navigation.
7. Check keyboard scrolling and focusable elements.
8. Check reduced-motion behavior.

## Acceptance Criteria

- Scroll-triggered animations no longer start around 50% visibility.
- Normal section/reveal animations start when roughly 75–80% of the target is visible.
- A single reusable threshold/config is used where practical.
- Animations still trigger reliably on:
  - desktop
  - tablet-sized viewport
  - mobile-sized viewport
  - tall sections
  - short sections
- Lenis smooth scrolling is installed and initialized once at the app/root level.
- The repo uses the current `lenis` package unless an existing older dependency forces a documented compatibility path.
- Smooth scrolling feels natural and does not cause stutter, double scroll, or scroll lock.
- `prefers-reduced-motion: reduce` users are not forced into smooth scrolling.
- Anchor/hash navigation still works.
- Keyboard scrolling still works.
- Modals/nested scrollable areas still work.
- Existing lint/build/test scripts pass, or any failures are documented as pre-existing with evidence.
- No unrelated visual or content changes are included.

## Required Tests / Validation

Run the repo’s available validation commands. Do not invent scripts. Inspect `package.json` first.

At minimum, run whichever of these exist:

- lint script
- typecheck script
- test script
- build script

Suggested manual validation checklist:

- Open the homepage.
- Slowly scroll through every animated section.
- Confirm animation start timing is delayed to approximately 75–80% visibility.
- Confirm no animation waits until it is impossible to trigger.
- Confirm smooth scrolling is active with normal mouse wheel/trackpad behavior.
- Confirm keyboard scroll works:
  - Arrow keys
  - PageUp/PageDown
  - Space
  - Tab focus movement
- Confirm anchor links/hash links work.
- Confirm reduced motion:
  - emulate `prefers-reduced-motion: reduce`
  - verify native or near-native scrolling behavior
- Confirm mobile viewport behavior in browser dev tools.
- Confirm there are no console errors.

If visual regression tooling exists, run it. If no visual regression tooling exists, document manual checks in the run-state file.

## Codex Mailbox / Run-State Instructions

Create or update the run-state file:

`docs/codex/runs/20260620-aimeedia-lenis-scroll-animation-threshold.md`

Record:

- repo framework and package manager
- current animation trigger mechanism found
- files inspected
- files changed
- chosen threshold value, preferably `0.8`
- any exceptions using `0.75`
- Lenis integration approach
- validation commands run
- manual QA results
- any unresolved risks

When saving the inbox task, use:

`docs/codex/inbox/20260620-aimeedia-lenis-scroll-animation-threshold.md`

Do not use dashed date prefixes.

## Codex Execution Instructions

1. Start by reading this spec fully.
2. Inspect the repo before editing.
3. Write initial findings to the run-state file.
4. Make the smallest coherent code changes.
5. Prefer centralized config over scattered magic numbers.
6. Add Lenis using the existing package manager.
7. Keep Lenis client-only.
8. Add cleanup for all listeners, RAF/ticker integrations, and Lenis instance lifecycle.
9. Run available validation commands.
10. Update the run-state file with results.
11. Report:
    - summary of changes
    - changed files
    - validation results
    - manual QA status
    - any risks or follow-up recommendations

## Human Review Checklist

Review the diff for:

- accidental unrelated formatting churn
- old `@studio-freight/lenis` dependency added instead of current `lenis`
- duplicate Lenis instances
- Lenis initialized during server-side rendering
- missing cleanup on unmount
- reduced-motion not respected
- animation threshold applied inconsistently
- animations that can never trigger on mobile/tall sections
- anchor/hash navigation regressions
- modal or nested scroll regressions
- excessive changes outside animation and scroll integration files

## Stop Conditions

Stop and report before proceeding if:

- The repo has no identifiable frontend app entrypoint.
- The current animation system cannot be found.
- The site already has another smooth-scroll library that would conflict with Lenis.
- Adding Lenis would require a broad routing/layout rewrite.
- The package manager or lockfile state is inconsistent.
- Validation reveals major unrelated failures that block confidence.
- The threshold requirement is impossible for key sections because targets are taller than the viewport and no safe fallback is obvious.
- Any change would require production credentials, deployment access, or destructive operations.
