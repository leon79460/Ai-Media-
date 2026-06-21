'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import AnimatedCard from './animation/AnimatedCard';
import AnimatedPricingToggle from './animation/AnimatedPricingToggle';
import Reveal, { motionEase } from './animation/Reveal';
import StaggerContainer from './animation/StaggerContainer';
import OriginButton from './OriginButton';

const SECTION_BADGE = 'Pricing';
const SECTION_TITLE = 'Discover The Pricing Plan';
const SECTION_SUB =
  'Flexible pricing plans that fit your budget & scale with needs.';
const GUARANTEE =
  '90-Day Results Guarantee. Measurable improvement or full refund of all retainer fees.';
// const BETA_OFFER = 'Beta offer: 25% off year 1 for next 5 clients';

const PLANS = [
  {
    name: 'Grow',
    monthlyPrice: '$1,500',
    yearlyPrice: '$1,350',
    period: '/month',
    tagline: 'Per month \u2022 Cancel anytime',
    description: 'Integrators ready to stop relying on referrals alone',
    btnText: 'Join Grow Plan',
    popular: false,
    features: [
      'Full SEO keyword tracking, on-page, tech',
      'Google Business Profile management',
      '4 SEO blog posts (AI -> human-approved)',
      '16 visual creatives per month',
      'Monthly email newsletter',
      'Live performance dashboard',
      'Monthly strategy call',
      'Website maintenance',
      'Basic video support',
    ],
  },
  {
    name: 'Scale',
    monthlyPrice: '$2,500',
    yearlyPrice: '$2,250',
    period: '/month',
    tagline: 'Per month \u2022 Cancel anytime',
    description: 'Integrators doing $1M+ who are serious',
    btnText: 'Join Scale Plan',
    popular: true,
    features: [
      'Everything in Grow',
      '6 SEO blog posts per month',
      '24 visual creatives per month',
      'Google/Meta Ads management (to $2k)',
      'Competitor tracking',
      'Bi-weekly strategy calls',
      'Priority 24-hour support',
    ],
  },
  {
    name: 'Dominate',
    monthlyPrice: '$4,000',
    yearlyPrice: '$3,600',
    period: '/month',
    tagline: 'Per month \u2022 Cancel anytime',
    description: 'Ambitious integrators owning markets',
    btnText: 'Join Dominate Plan',
    popular: false,
    features: [
      'Everything in Scale',
      '30 visual creatives per month',
      '8 SEO blog posts per month',
      'Full Ads management (to $5k)',
      'Dedicated account manager',
      'Weekly strategy calls',
      'Quarterly case study',
    ],
  },
];

const styles = {
  badgeIcon: {
    width: '18px',
    height: '18px',
    flex: '0 0 18px',
  }
}

function getThreeCardVariant(index) {
  const lift = index === 1 ? 18 : 34;

  return {
    hidden: {
      opacity: 0,
      y: lift,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.82, ease: motionEase },
    },
  };
}

function PricingCard({ plan, isYearly, index }) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const shouldReduceMotion = useReducedMotion();

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', '/');
  }

  return (
    <AnimatedCard
      className={`pricing-card card-hover${plan.popular ? ' is-popular' : ''}`}
      variants={getThreeCardVariant(index)}
    >
      <div className="pricing-card-head">
        <h3>{plan.name}</h3>
        {plan.popular && <span className="pricing-popular">Popular</span>}
      </div>

      <div className="pricing-price-row">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={price}
            className="pricing-price"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.22,
              ease: motionEase,
            }}
          >
            {price}
          </motion.span>
        </AnimatePresence>
        <span className="pricing-period">{plan.period}</span>
      </div>

      <div className="pricing-copy">
        <p>{plan.tagline}</p>
        <p>{plan.description}</p>
      </div>

      <OriginButton
        variant="custom"
        fillColor={plan.popular ? '#f5f5f5' : '#050505'}
        hoverTextColor={plan.popular ? '#050505' : '#f5f5f5'}
        className={`pricing-cta${plan.popular ? ' is-primary' : ''}`}
        onClick={scrollToContact}
      >
        {plan.popular && <span className="pricing-arrow" aria-hidden="true" />}
        {plan.btnText}
      </OriginButton>

      <div className="pricing-divider" />

      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="pricing-check" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-shell">
        <Reveal className="pricing-header" effect="scale" scale={0.94}>
          <span className="section-badge">
            <Image
              src="/icons/pricing.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              style={styles.badgeIcon}
            />
            {SECTION_BADGE}</span>
          <h2 className="section-title">{SECTION_TITLE}</h2>
          <p className="section-sub">{SECTION_SUB}</p>

          <AnimatedPricingToggle isYearly={isYearly} onChange={setIsYearly} />
        </Reveal>

        <StaggerContainer className="pricing-grid" delay={0.20} stagger={0.24}>
          {PLANS.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </StaggerContainer>

        <Reveal className="pricing-guarantee" y={18} delay={0.1}>
          <span>{GUARANTEE}</span>
          {/* <span>{BETA_OFFER}</span> */}
        </Reveal>
      </div>
    </section>
  );
}
