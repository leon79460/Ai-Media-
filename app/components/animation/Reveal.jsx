'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export const motionEase = [0.16, 1, 0.3, 1];
export const motionDurations = {
  fast: 0.32,
  base: 0.7,
  slow: 0.9,
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
      ...(scale ? { scale } : null),
    },
    visible: {
      opacity: 1,
      y: 0,
      ...(scale ? { scale: 1 } : null),
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
  amount = 0.5,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount, once });
  const [hasEntered, setHasEntered] = useState(false);
  const Component = motionTags[as] || motion.div;
  const preset = (revealEffects[effect] || revealEffects['fade-up'])({
    y,
    scale,
  });
  const exited = getExitedState(preset.visible);
  const baseStyle = { ...preset.style, ...style };
  const resolvedStyle = shouldReduceMotion
    ? { ...baseStyle, opacity: style?.opacity ?? 1, filter: style?.filter ?? 'none' }
    : baseStyle;
  const animateState = inView
    ? 'visible'
    : hasEntered && !once
      ? 'exited'
      : 'hidden';

  useEffect(() => {
    if (inView) setHasEntered(true);
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
