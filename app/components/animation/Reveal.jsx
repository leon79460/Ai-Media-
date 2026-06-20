'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ANIMATION_VIEWPORT_AMOUNT, useDelayedInView } from './viewport';

export const motionEase = [0.22, 1, 0.36, 1];
export const motionDurations = {
  fast: 0.45,
  base: 0.95,
  slow: 1.2,
};

// Reusable Hover/Stagger Variants
export const cardHover = {
  y: -8,
  scale: 1.02,
  transition: { type: 'spring', stiffness: 220, damping: 24 },
};

export const buttonHover = {
  scale: 1.025,
  transition: { type: 'spring', stiffness: 260, damping: 20 },
};

export const buttonTap = {
  scale: 0.98,
};

export const iconHover = {
  y: -4,
  scale: 1.05,
  transition: { type: 'spring', stiffness: 250, damping: 20 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.26,
      delayChildren: 0.3,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.85, ease: motionEase },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: motionEase },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: motionEase },
  },
};

export const blurReveal = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: motionEase },
  },
};

const motionTags = {
  div: motion.div,
  header: motion.header,
  section: motion.section,
  article: motion.article,
  footer: motion.footer,
};

const revealEffects = {
  'fade-up': ({ y, scale }) => ({
    hidden: {
      opacity: 0,
      y,
      filter: 'blur(8px)',
      ...(scale ? { scale } : null),
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      ...(scale ? { scale: 1 } : null),
    },
  }),
  'blur-reveal': ({ y }) => ({
    hidden: {
      opacity: 0,
      y: y || 24,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  }),
  'slide-left': () => ({
    hidden: {
      opacity: 0,
      x: -48,
      y: 12,
      rotate: -0.6,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
    },
  }),
  'slide-right': () => ({
    hidden: {
      opacity: 0,
      x: 48,
      y: 12,
      rotate: 0.6,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
    },
  }),
  scale: ({ scale }) => ({
    style: { transformOrigin: 'center center' },
    hidden: {
      opacity: 0,
      y: 18,
      scale: scale || 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }),
  'clip-up': () => ({
    hidden: {
      opacity: 0,
      y: 32,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }),
  'clip-left': () => ({
    hidden: {
      opacity: 0,
      x: -24,
      y: 6,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }),
};

function getExitedState(visible) {
  return {
    ...visible,
    opacity: 0.55,
    y: 6,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.28, ease: motionEase },
  };
}

export default function Reveal({
  as = 'div',
  children,
  className,
  style,
  effect = 'fade-up',
  delay = 0,
  duration = motionDurations.base,
  y = 26,
  scale,
  amount = ANIMATION_VIEWPORT_AMOUNT,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useDelayedInView(ref, { amount, once });
  const [hasEntered, setHasEntered] = useState(false);
  const Component = motionTags[as] || motion.div;
  const preset = (revealEffects[effect] || revealEffects['fade-up'])({
    y,
    scale,
  });
  const exited = getExitedState(preset.visible);
  const baseStyle = { ...preset.style, ...style };
  
  // Clean up initial filter string for SSR/reduced motion to avoid jumps
  const resolvedStyle = shouldReduceMotion
    ? { ...baseStyle, opacity: style?.opacity ?? 1, filter: style?.filter ?? 'none' }
    : { ...baseStyle, filter: preset.hidden.filter || baseStyle.filter };

  const animateState = inView
    ? 'visible'
    : hasEntered && !once
      ? 'exited'
      : 'hidden';

  useEffect(() => {
    if (!inView) return undefined;

    const frame = requestAnimationFrame(() => setHasEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <Component
      ref={ref}
      className={className}
      style={resolvedStyle}
      initial={shouldReduceMotion ? false : preset.hidden}
      animate={shouldReduceMotion ? undefined : animateState}
      variants={{
        hidden: preset.hidden,
        visible: preset.visible,
        exited,
      }}
      transition={{ duration, ease: motionEase, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
