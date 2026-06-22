'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ANIMATION_VIEWPORT_AMOUNT, useDelayedInView } from './viewport';

export const motionEase = [0.22, 1, 0.36, 1];

export const motionDurations = {
  fast: 0.45,
  base: 0.72,
  slow: 1.05,
};

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
      staggerChildren: 0.18,
      delayChildren: 0.18,
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
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
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
  span: motion.span,
  header: motion.header,
  section: motion.section,
  article: motion.article,
  footer: motion.footer,
  main: motion.main,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  small: motion.small,
  ul: motion.ul,
  li: motion.li,
};

const revealEffects = {
  'fade-up': ({ y, scale, blur, visibleY = 0 }) => ({
    hidden: {
      opacity: 0,
      y,
      filter: blur ? `blur(${blur})` : 'blur(8px)',
      ...(scale ? { scale } : null),
    },
    visible: {
      opacity: 1,
      y: visibleY,
      filter: 'blur(0px)',
      ...(scale ? { scale: 1 } : null),
    },
  }),
  'slide-up': ({ y, scale, blur, visibleY = 0 }) => ({
    hidden: {
      opacity: 0,
      y,
      filter: blur ? `blur(${blur})` : 'blur(8px)',
      ...(scale ? { scale } : null),
    },
    visible: {
      opacity: 1,
      y: visibleY,
      filter: 'blur(0px)',
      ...(scale ? { scale: 1 } : null),
    },
  }),
  'blur-reveal': ({ y, blur, visibleY = 0 }) => ({
    hidden: {
      opacity: 0,
      y: y || 24,
      filter: blur ? `blur(${blur})` : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: visibleY,
      filter: 'blur(0px)',
    },
  }),
  'slide-left': ({ blur }) => ({
    hidden: {
      opacity: 0,
      x: -48,
      y: 12,
      rotate: -0.6,
      filter: blur ? `blur(${blur})` : undefined,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      filter: 'blur(0px)',
    },
  }),
  'slide-right': ({ blur }) => ({
    hidden: {
      opacity: 0,
      x: 48,
      y: 12,
      rotate: 0.6,
      filter: blur ? `blur(${blur})` : undefined,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      filter: 'blur(0px)',
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
  'clip-up': ({ blur }) => ({
    hidden: {
      opacity: 0,
      y: 32,
      scale: 0.98,
      filter: blur ? `blur(${blur})` : undefined,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
  }),
  'clip-left': ({ blur }) => ({
    hidden: {
      opacity: 0,
      x: -24,
      y: 6,
      filter: blur ? `blur(${blur})` : undefined,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
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
  yOffset,
  scale,
  amount = ANIMATION_VIEWPORT_AMOUNT,
  once = true,
  inView = true,
  inViewMargin,
  blur,
  ...props
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const observedInView = useDelayedInView(ref, {
    amount,
    once,
    margin: inViewMargin,
  });
  const [hasEntered, setHasEntered] = useState(false);
  const Component = motionTags[as] || motion.div;
  const resolvedY = yOffset ?? y;
  const visibleY = yOffset === undefined ? 0 : -yOffset;
  const preset = (revealEffects[effect] || revealEffects['fade-up'])({
    y: resolvedY,
    scale,
    blur,
    visibleY,
  });
  const exited = getExitedState(preset.visible);
  const baseStyle = { ...preset.style, ...style };
  const isInView = inView === false || observedInView;

  const resolvedStyle = shouldReduceMotion
    ? { ...baseStyle, opacity: style?.opacity ?? 1, filter: style?.filter ?? 'none' }
    : baseStyle;

  const animateState = isInView
    ? 'visible'
    : hasEntered && !once
      ? 'exited'
      : 'hidden';

  useEffect(() => {
    if (!isInView) return undefined;

    const frame = requestAnimationFrame(() => setHasEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [isInView]);

  return (
    <Component
      ref={ref}
      className={className}
      style={resolvedStyle}
      data-motion-managed="true"
      initial={shouldReduceMotion ? false : 'hidden'}
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
