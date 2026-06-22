'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const PREVENT_SMOOTH_SCROLL_SELECTOR = [
  '[data-lenis-prevent]',
  '[data-lenis-prevent-wheel]',
  '[data-lenis-prevent-touch]',
  '[data-lenis-prevent-vertical]',
  '[data-lenis-prevent-horizontal]',
  '[aria-modal="true"]',
  '[role="dialog"]',
  'dialog',
  'textarea',
  'select',
  '[contenteditable="true"]',
].join(',');

export default function LenisProvider() {
  useEffect(() => {
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let lenis = null;

    const destroyLenis = () => {
      lenis?.destroy();
      lenis = null;
      document.documentElement.classList.remove('has-lenis');
    };

    const setupLenis = () => {
      destroyLenis();

      if (motionQuery.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        stopInertiaOnNavigate: true,
        prevent: node => Boolean(node.closest(PREVENT_SMOOTH_SCROLL_SELECTOR)),
      });

      document.documentElement.classList.add('has-lenis');
    };

    setupLenis();

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', setupLenis);
    } else {
      motionQuery.addListener(setupLenis);
    }

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', setupLenis);
      } else {
        motionQuery.removeListener(setupLenis);
      }

      destroyLenis();
    };
  }, []);

  return null;
}
