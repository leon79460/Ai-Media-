'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { motionEase } from './Reveal';
import { ANIMATION_VIEWPORT_AMOUNT, useDelayedInView } from './viewport';

const motionTags = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
};

export default function TextReveal({
  as = 'span',
  text,
  className,
  style,
  delay = 0,
  stagger = 0.03,
  amount = ANIMATION_VIEWPORT_AMOUNT,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useDelayedInView(ref, { amount, once });
  const [hasEntered, setHasEntered] = useState(false);
  const Component = motionTags[as] || motion.span;
  const words = text.split(' ');

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
      style={style}
      aria-label={text}
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
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',
            }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: '0.16em',
                  filter: 'blur(3px)',
                },
                show: {
                  opacity: 1,
                  y: '0em',
                  filter: 'blur(0px)',
                  transition: { duration: 1, ease: motionEase },
                },
                exited: {
                  opacity: 0.62,
                  y: '0.08em',
                  filter: 'blur(0px)',
                  transition: { duration: 0.26, ease: motionEase },
                },
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? '\u00a0' : null}
          </span>
        ))}
      </span>
    </Component>
  );
}
