'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const REVEAL_SELECTOR = [
  '.section-badge',
  '.section-title',
  '.section-sub',
  '.process-card',
  '.service-card',
  '.pricing-card',
  '.why-card',
  '.blog-card',
  '.blog-index-card',
  '.blog-stat',
  '.blog-tool',
  '.blog-article',
  '.blog-toc',
].join(',');

export default function ScrollEffects() {
  const pathname = usePathname();
  const progressRef = useRef(null);

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

    if (reduceMotion) {
      revealTargets.forEach(el => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
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

    const glowTargets = Array.from(
      document.querySelectorAll(
        '.card-hover, .process-card, .blog-card, .service-card, .pricing-card, .why-card, .about-card',
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

    hero?.addEventListener('pointermove', moveHero);

    const updateProgress = () => {
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

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
      observer.disconnect();
      glowTargets.forEach(el => {
        el.removeEventListener('pointermove', updateGlow);
      });
      hero?.removeEventListener('pointermove', moveHero);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [pathname]);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
