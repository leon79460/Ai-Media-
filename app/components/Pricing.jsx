'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SECTION_BADGE = 'Pricing';
const SECTION_TITLE = 'Discover the pricing plan';
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

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animation = `revealUp 1.2s ease ${delay}s forwards`;
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

function PricingCard({ plan, isYearly, delay }) {
  const ref = useRef(null);
  useReveal(ref, delay);

  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', '/');
  }

  return (
    <article
      ref={ref}
      className={`pricing-card${plan.popular ? ' is-popular' : ''}`}
    >
      <div className="pricing-card-head">
        <h3>{plan.name}</h3>
        {plan.popular && <span className="pricing-popular">Popular</span>}
      </div>

      <div className="pricing-price-row">
        <span className="pricing-price">{price}</span>
        <span className="pricing-period">{plan.period}</span>
      </div>

      <div className="pricing-copy">
        <p>{plan.tagline}</p>
        <p>{plan.description}</p>
      </div>

      <button
        type="button"
        className={`pricing-cta${plan.popular ? ' is-primary' : ''}`}
        onClick={scrollToContact}
      >
        {plan.popular && <span className="pricing-arrow" aria-hidden="true" />}
        {plan.btnText}
      </button>

      <div className="pricing-divider" />

      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="pricing-check" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const headRef = useRef(null);
  useReveal(headRef);

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-shell">
        <div ref={headRef} className="pricing-header">
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

          <div className="pricing-toggle" aria-label="Billing frequency">
            <button
              type="button"
              className={!isYearly ? 'is-active' : ''}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={isYearly ? 'is-active' : ''}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
            <span>10% off</span>
          </div>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              delay={i * 0.1}
            />
          ))}
        </div>

        <div className="pricing-guarantee">
          <span>{GUARANTEE}</span>
          {/* <span>{BETA_OFFER}</span> */}
        </div>
      </div>
    </section>
  );
}
