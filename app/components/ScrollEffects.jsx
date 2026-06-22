'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const PARALLAX_SELECTOR = '[data-parallax]';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const BUTTON_ORIGIN_SELECTOR = [
  'button:not(.nav-logo)',
  '.btn-p',
  '.btn-s',
  '.nav-link',
  '.nav-cta',
  '.nav-mobile-cta',
  '.pricing-cta',
  '.why-cta',
  '.process-card-cta',
  '.service-card-link',
  '.case-study-action',
  '.blog-button',
  '.blog-cta a',
  '.blog-home-arrow',
  '.about-primary-btn',
  '.about-dark-btn',
  '.about-arrow',
  '.careers-role-link',
  '.contact-submit',
  '.footer-submit-button',
  '.ds-primary-btn',
  '.ds-solution-btn',
].join(',');

function getNativeScrollBehavior() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches ? 'auto' : 'smooth';
}

function getCoverDiameter(width, height, x, y) {
  return Math.ceil(
    2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(width - x, y),
        Math.hypot(x, height - y),
        Math.hypot(width - x, height - y),
      ),
  );
}

export default function ScrollEffects() {
  const pathname = usePathname();
  const progressRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: getNativeScrollBehavior(),
    });
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const lightMotion = reduceMotion || coarsePointer;

    const glowTargets = Array.from(
      document.querySelectorAll(
        '.card-hover, .process-card, .blog-card, .service-card, .portfolio-card, .pricing-card, .why-card, .about-card',
      ),
    );

    const glowState = new Map();
    let glowFrame = 0;

    const flushGlow = () => {
      glowFrame = 0;
      glowState.forEach(({ x, y }, el) => {
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
      });
      glowState.clear();
    };

    const updateGlow = event => {
      const rect = event.currentTarget.getBoundingClientRect();
      glowState.set(event.currentTarget, {
        x: Math.round(event.clientX - rect.left),
        y: Math.round(event.clientY - rect.top),
      });

      if (!glowFrame) {
        glowFrame = requestAnimationFrame(flushGlow);
      }
    };

    glowTargets.forEach(el => {
      el.addEventListener('pointermove', updateGlow);
    });

    const updateButtonOrigin = event => {
      const target = event.target.closest?.(BUTTON_ORIGIN_SELECTOR);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = Math.round(event.clientX - rect.left);
      const y = Math.round(event.clientY - rect.top);
      const cover = getCoverDiameter(rect.width, rect.height, x, y);

      target.style.setProperty('--mx', `${x}px`);
      target.style.setProperty('--my', `${y}px`);
      target.style.setProperty('--button-fill-max', `${cover}px`);
    };

    document.addEventListener('pointerover', updateButtonOrigin, {
      passive: true,
    });
    document.addEventListener('pointermove', updateButtonOrigin, {
      passive: true,
    });
    document.addEventListener('pointerdown', updateButtonOrigin, {
      passive: true,
    });

    const hero = document.querySelector('#home');
    const sphere = document.querySelector('.sphere');
    const heroTitle = document.querySelector('.hero-title');
    const progress = progressRef.current;
    let heroFrame = 0;
    let heroPointer = null;

    const applyHeroMotion = () => {
      heroFrame = 0;
      if (!hero || !heroPointer) return;
      const rect = hero.getBoundingClientRect();
      const x = (heroPointer.clientX - rect.left) / rect.width - 0.5;
      const y = (heroPointer.clientY - rect.top) / rect.height - 0.5;
      sphere?.style.setProperty('--tilt-x', `${y * -8}deg`);
      sphere?.style.setProperty('--tilt-y', `${x * 10}deg`);
      heroTitle?.style.setProperty('--title-shift', `${x * 8}px`);
    };

    const moveHero = event => {
      heroPointer = { clientX: event.clientX, clientY: event.clientY };

      if (!heroFrame) {
        heroFrame = requestAnimationFrame(applyHeroMotion);
      }
    };

    if (!lightMotion) {
      hero?.addEventListener('pointermove', moveHero);
    }

    const parallaxTargets = Array.from(
      document.querySelectorAll(PARALLAX_SELECTOR),
    );
    let parallaxFrame = 0;
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updateParallax = () => {
      parallaxFrame = 0;
      if (lightMotion) return;

      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      parallaxTargets.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -180 || rect.top > viewportHeight + 180) return;

        const speed = Number(el.dataset.parallaxSpeed || 0.16);
        const distance = Number(el.dataset.parallaxDistance || 120);
        const rotate = Number(el.dataset.parallaxRotate || 0);
        const scale = Number(el.dataset.parallaxScale || 1);
        const axis = el.dataset.parallaxAxis || 'y';
        const center = rect.top + rect.height / 2;
        const range = viewportHeight / 2 + rect.height / 2;
        const progress = clamp((center - viewportHeight / 2) / range, -1, 1);
        const travel = progress * distance * speed;
        const x = axis.includes('x') ? travel : 0;
        const y = axis.includes('y') ? -travel : 0;

        el.style.setProperty('--parallax-x', `${x.toFixed(2)}px`);
        el.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
        el.style.setProperty(
          '--parallax-rotate',
          `${(progress * rotate).toFixed(3)}deg`,
        );
        el.style.setProperty('--parallax-scale', scale.toString());
      });
    };

    const requestParallax = () => {
      if (lightMotion || parallaxFrame) return;
      parallaxFrame = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    let progressFrame = 0;

    const updateProgress = () => {
      progressFrame = 0;
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      const clamped = Math.min(Math.max(ratio, 0), 1);
      progress.style.setProperty('--scroll-progress', `${clamped * 100}%`);
      progress.classList.toggle('is-visible', window.scrollY > 260);
    };

    const requestProgress = () => {
      if (!progressFrame) {
        progressFrame = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', requestProgress, { passive: true });
    window.addEventListener('resize', requestProgress);
    if (!lightMotion) {
      window.addEventListener('scroll', requestParallax, { passive: true });
      window.addEventListener('resize', requestParallax);
    }

    const pendingTarget = sessionStorage.getItem('pendingScrollTarget');
    if (pathname === '/' && pendingTarget) {
      sessionStorage.removeItem('pendingScrollTarget');
      window.setTimeout(() => {
        document.getElementById(pendingTarget)?.scrollIntoView({
          behavior: getNativeScrollBehavior(),
          block: 'start',
        });
        window.history.replaceState(null, '', '/');
      }, 80);
    }

    return () => {
      cancelAnimationFrame(parallaxFrame);
      cancelAnimationFrame(glowFrame);
      cancelAnimationFrame(heroFrame);
      cancelAnimationFrame(progressFrame);
      glowTargets.forEach(el => {
        el.removeEventListener('pointermove', updateGlow);
      });
      document.removeEventListener('pointerover', updateButtonOrigin);
      document.removeEventListener('pointermove', updateButtonOrigin);
      document.removeEventListener('pointerdown', updateButtonOrigin);
      hero?.removeEventListener('pointermove', moveHero);
      window.removeEventListener('scroll', requestProgress);
      window.removeEventListener('resize', requestProgress);
      window.removeEventListener('scroll', requestParallax);
      window.removeEventListener('resize', requestParallax);
    };
  }, [pathname]);

  return (
    <button
      ref={progressRef}
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f5f5f5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: 'relative', zIndex: 1 }}
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
