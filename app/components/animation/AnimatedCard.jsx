'use client';

import { motion, useReducedMotion } from 'motion/react';
import { motionEase } from './Reveal';
import { staggerChild } from './StaggerContainer';

const motionTags = {
  article: motion.article,
  div: motion.div,
  li: motion.li,
};

export default function AnimatedCard({
  as = 'article',
  children,
  className,
  style,
  delay = 0,
  amount = 0.2,
  hover = true,
  standalone = false,
  variants,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionTags[as] || motion.article;
  const isStandalone = standalone || delay > 0;
  const localVariants =
    variants ||
    (isStandalone
      ? {
          hidden: { opacity: 0, y: 28, scale: 0.98 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.65, ease: motionEase, delay },
          },
        }
      : staggerChild);

  return (
    <Component
      className={className}
      style={style}
      data-motion-managed="true"
      variants={localVariants}
      initial={shouldReduceMotion ? false : isStandalone ? 'hidden' : undefined}
      whileInView={shouldReduceMotion || !isStandalone ? undefined : 'show'}
      viewport={{ once: true, amount }}
      whileHover={
        shouldReduceMotion || !hover ? undefined : { y: -6, scale: 1.01 }
      }
      transition={{ duration: 0.28, ease: motionEase }}
      {...props}
    >
      {children}
    </Component>
  );
}
