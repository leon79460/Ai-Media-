'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { motionEase } from './Reveal';

const motionTags = {
  div: motion.div,
  ul: motion.ul,
  section: motion.section,
};

export const staggerChild = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.76, ease: motionEase },
  },
  exited: {
    opacity: 0.55,
    y: 6,
    scale: 1,
    transition: { duration: 0.28, ease: motionEase },
  },
};

function assignRef(ref, node) {
  if (!ref) return;
  if (typeof ref === 'function') {
    ref(node);
    return;
  }

  ref.current = node;
}

const StaggerContainer = forwardRef(function StaggerContainer(
  {
    as = 'div',
    children,
    className,
    style,
    delay = 0,
    stagger = 0.08,
    amount = 0.5,
    once = true,
    ...props
  },
  ref,
) {
  const shouldReduceMotion = useReducedMotion();
  const localRef = useRef(null);
  const inView = useInView(localRef, { amount, once });
  const [hasEntered, setHasEntered] = useState(false);
  const Component = motionTags[as] || motion.div;
  const animateState = inView
    ? 'show'
    : hasEntered && !once
      ? 'exited'
      : 'hidden';

  useEffect(() => {
    if (inView) setHasEntered(true);
  }, [inView]);

  return (
    <Component
      ref={node => {
        localRef.current = node;
        assignRef(ref, node);
      }}
      className={className}
      style={style}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={shouldReduceMotion ? undefined : animateState}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
        exited: {
          transition: {
            staggerChildren: Math.min(stagger, 0.03),
            staggerDirection: -1,
          },
        },
      }}
      {...props}
    >
      {children}
    </Component>
  );
});

export default StaggerContainer;
