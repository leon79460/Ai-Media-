'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { motionEase } from './Reveal';

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
  stagger = 0.045,
  amount = 0.5,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount, once });
  const [hasEntered, setHasEntered] = useState(false);
  const Component = motionTags[as] || motion.span;
  const words = text.split(' ');
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
                  y: '0.72em',
                  rotate: 1.2,
                  filter: 'blur(3px)',
                },
                show: {
                  opacity: 1,
                  y: '0em',
                  rotate: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.62, ease: motionEase },
                },
                exited: {
                  opacity: 0.55,
                  y: '0.12em',
                  rotate: 0,
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
