'use client';

import { motion, useReducedMotion } from 'motion/react';
import { motionEase } from './Reveal';

export default function AnimatedPricingToggle({ isYearly, onChange }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pricing-toggle pricing-toggle-animated" aria-label="Billing frequency">
      <span className="pricing-toggle-options">
        <button
          type="button"
          className={!isYearly ? 'is-active' : ''}
          aria-pressed={!isYearly}
          onClick={() => onChange(false)}
        >
          Monthly
        </button>
        <button
          type="button"
          className={isYearly ? 'is-active' : ''}
          aria-pressed={isYearly}
          onClick={() => onChange(true)}
        >
          Yearly
        </button>
        <motion.span
          className="pricing-toggle-pill"
          aria-hidden="true"
          animate={{ x: isYearly ? '100%' : '0%' }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.32, ease: motionEase }
          }
        />
      </span>
      <span className="pricing-toggle-discount">10% off</span>
    </div>
  );
}
