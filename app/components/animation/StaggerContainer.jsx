'use client';

import { motion, useReducedMotion } from 'motion/react';
import { forwardRef } from 'react';
import { motionEase } from './Reveal';

const motionTags = {
  div: motion.div,
  ul: motion.ul,
  section: motion.section,
};

export const staggerChild = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: motionEase },
  },
};

const StaggerContainer = forwardRef(function StaggerContainer(
  {
    as = 'div',
    children,
    className,
    style,
    delay = 0,
    stagger = 0.08,
    amount = 0.2,
    once = true,
    ...props
  },
  ref,
) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionTags[as] || motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
      data-motion-managed="true"
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'show'}
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
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
