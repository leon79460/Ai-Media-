'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const REVEAL_SELECTOR = [
  '.section-badge',
  '.section-title',
  '.section-sub',
  '.process-card',
  '.service-card',
  '.portfolio-card',
  '.pricing-card',
  '.why-card',
  '.blog-card',
  '.blog-index-card',
  '.blog-stat',
  '.blog-tool',
  '.blog-article',
  '.blog-toc',
].join(',');

const PARALLAX_SELECTOR = '[data-parallax]';

export default function ScrollEffects() {
  const pathname = usePathname();
  const progressRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const revealTargets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    revealTargets.forEach((el, index) => {
      if (el.dataset.revealBound === 'true') return;
      el.dataset.revealBound = 'true';
      el.classList.add('reveal-motion');
      el.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 70}ms`);
    });

    let observer;

    if (reduceMotion) {
      revealTargets.forEach(el => el.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px 120px 0px',
          threshold: 0.04,
        },
      );

      revealTargets.forEach(el => observer.observe(el));
    }

    const glowTargets = Array.from(
      document.querySelectorAll(
        '.card-hover, .process-card, .blog-card, .service-card, .portfolio-card, .pricing-card, .why-card, .about-card',
      ),
    );

    const updateGlow = event => {
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty(
        '--mx',
        `${event.clientX - rect.left}px`,
      );
      event.currentTarget.style.setProperty(
        '--my',
        `${event.clientY - rect.top}px`,
      );
    };

    glowTargets.forEach(el => {
      el.addEventListener('pointermove', updateGlow);
    });

    const hero = document.querySelector('#home');
    const sphere = document.querySelector('.sphere');
    const heroTitle = document.querySelector('.hero-title');
    const progress = progressRef.current;

    const moveHero = event => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      sphere?.style.setProperty('--tilt-x', `${y * -8}deg`);
      sphere?.style.setProperty('--tilt-y', `${x * 10}deg`);
      heroTitle?.style.setProperty('--title-shift', `${x * 8}px`);
    };

    if (!reduceMotion) {
      hero?.addEventListener('pointermove', moveHero);
    }

    const parallaxTargets = Array.from(
      document.querySelectorAll(PARALLAX_SELECTOR),
    );
    let parallaxFrame = 0;
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updateParallax = () => {
      parallaxFrame = 0;
      if (reduceMotion) return;

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
      if (reduceMotion || parallaxFrame) return;
      parallaxFrame = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    const updateProgress = () => {
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      const clamped = Math.min(Math.max(ratio, 0), 1);
      progress.style.setProperty('--scroll-progress', `${clamped * 100}%`);
      progress.classList.toggle('is-visible', window.scrollY > 260);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    if (!reduceMotion) {
      window.addEventListener('scroll', requestParallax, { passive: true });
      window.addEventListener('resize', requestParallax);
    }

    const pendingTarget = sessionStorage.getItem('pendingScrollTarget');
    if (pathname === '/' && pendingTarget) {
      sessionStorage.removeItem('pendingScrollTarget');
      window.setTimeout(() => {
        document.getElementById(pendingTarget)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        window.history.replaceState(null, '', '/');
      }, 80);
    }

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(parallaxFrame);
      glowTargets.forEach(el => {
        el.removeEventListener('pointermove', updateGlow);
      });
      hero?.removeEventListener('pointermove', moveHero);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
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
