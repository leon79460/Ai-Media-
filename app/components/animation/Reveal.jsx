'use client';

import { motion, useReducedMotion } from 'motion/react';

export const motionEase = [0.22, 1, 0.36, 1];
export const motionDurations = {
  fast: 0.25,
  base: 0.6,
  slow: 0.9,
};

const motionTags = {
  div: motion.div,
  header: motion.header,
  section: motion.section,
  article: motion.article,
  footer: motion.footer,
};

export default function Reveal({
  as = 'div',
  children,
  className,
  style,
  delay = 0,
  duration = 0.65,
  y = 32,
  scale,
  amount = 0.25,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionTags[as] || motion.div;
  const hidden = {
    opacity: 0,
    y,
    ...(scale ? { scale } : null),
  };
  const visible = {
    opacity: 1,
    y: 0,
    ...(scale ? { scale: 1 } : null),
  };

  return (
    <Component
      className={className}
      style={style}
      data-motion-managed="true"
      initial={shouldReduceMotion ? false : hidden}
      whileInView={shouldReduceMotion ? undefined : visible}
      viewport={{ once, amount }}
      transition={{ duration, ease: motionEase, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
