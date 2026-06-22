'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';

export const motionEase = 'easeOut';

export const motionDurations = {
  fast: 0.25,
  base: 0.6,
  slow: 0.9,
};

export default function Reveal({
  children,
  className,
 delay = 0 ,
duration = 0.5,
yOffset = 7,
inView = true,
inViewMargin = '-50px',
blur = '6px',
  ...props
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin,
  });

  const isInView = !inView || inViewResult;

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      data-motion-managed="true"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          y: yOffset,
          opacity: 0,
          filter: `blur(${blur})`,
        },
        visible: {
          y: -yOffset,
          opacity: 1,
          filter: 'blur(0px)',
        },
      }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: 'easeOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}