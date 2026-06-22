'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { cardHover, motionEase } from './Reveal';
import { staggerChild } from './StaggerContainer';
import { ANIMATION_VIEWPORT_AMOUNT, useDelayedInView } from './viewport';

const motionTags = {
  article: motion.article,
  div: motion.div,
  li: motion.li,
};

function withExitedVariant(variantsToMerge) {
  if (variantsToMerge.exited) return variantsToMerge;
  const visibleState = variantsToMerge.show || {};

  return {
    ...variantsToMerge,
    exited: {
      ...visibleState,
      opacity: 0.55,
      y: 6,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.28, ease: motionEase },
    },
  };
}

export default function AnimatedCard({
  as = 'article',
  children,
  className,
  style,
  delay = 0,
  amount = ANIMATION_VIEWPORT_AMOUNT,
  hover = false,
  standalone = false,
  once = true,
  variants,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const Component = motionTags[as] || motion.article;
  const isStandalone = standalone || delay > 0;
  const inView = useDelayedInView(ref, { amount, once });
  const [hasEntered, setHasEntered] = useState(false);
  const resolvedStyle = shouldReduceMotion
    ? { ...style, opacity: style?.opacity ?? 1, filter: style?.filter ?? 'none' }
    : style;
  const localVariants =
    variants
      ? withExitedVariant(variants)
      : isStandalone
        ? {
            hidden: { opacity: 0, y: 60, scale: 0.985 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.78, ease: motionEase, delay },
            },
            exited: {
              opacity: 0.55,
              y: 6,
              scale: 1,
              transition: { duration: 0.28, ease: motionEase },
            },
          }
        : staggerChild;

  const animateState = inView
    ? 'show'
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
      variants={localVariants}
      initial={shouldReduceMotion ? false : isStandalone ? 'hidden' : undefined}
      animate={shouldReduceMotion || !isStandalone ? undefined : animateState}
      whileHover={shouldReduceMotion || !hover ? undefined : cardHover}
      transition={{ duration: 0.34, ease: motionEase }}
      {...props}
    >
      {children}
    </Component>
  );
}
