// ============================================================
// Pricing.jsx — "Discover the pricing plan" section
// EDIT: PLANS array — title, price, description, features[]
// ============================================================
'use client';
import { useEffect, useRef, useState } from 'react';

const SECTION_BADGE = 'Pricing';
const SECTION_TITLE = 'Discover the pricing plan';
const SECTION_SUB =
  'Flexible pricing plans that fit your budget & scale with needs.';
const GUARANTEE =
  '90-Day Results Guarantee. Measurable improvement or full refund of all retainer fees.';
const BETA_OFFER = 'Beta offer: 25% off year 1 for next 5 clients';

// ✅ Check icon URL — save to /public/check.svg before going live
const CHECK_ICON =
  'https://www.figma.com/api/mcp/asset/d2b92854-fcfe-4ea9-b74a-f4d2ca9fc098';

// EDIT: pricing plans
const PLANS = [
  {
    name: 'Grow',
    monthlyPrice: '$1,500',
    yearlyPrice: '$1,050',
    period: '/month',
    tagline: 'Per month · Cancel anytime',
    description: 'Integrators ready to stop relying on referrals alone',
    btnText: 'Join Grow Plan',
    btnHref: '#contact',
    popular: false,
    features: [
      'Full SEO keyword tracking, on-page, tech',
      'Google Business Profile management',
      '4 SEO blog posts (AI → human-approved)',
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
    yearlyPrice: '$1,750',
    period: '/month',
    tagline: 'Per month · Cancel anytime',
    description: 'Integrators doing $1M+ who are serious',
    btnText: 'Join Scale Plan',
    btnHref: '#contact',
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
    yearlyPrice: '$2,800',
    period: '/month',
    tagline: 'Per month · Cancel anytime',
    description: 'Ambitious integrators owning markets',
    btnText: 'Join Dominate Plan',
    btnHref: '#contact',
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

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.animation = `revealUp 0.6s ease ${delay}s forwards`;
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

  return (
    <div
      ref={ref}
      style={{
        flex: '1',
        minWidth: '280px',
        maxWidth: '384px',
        backgroundColor: '#f5f5f5',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: 'var(--card-shadow)',
        opacity: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
      }}
    >
      {/* Plan name + Popular badge */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font)',
            fontWeight: 700,
            fontSize: '16px',
            color: '#000',
          }}
        >
          {plan.name}
        </span>
        {plan.popular && (
          <div
            style={{
              background: 'linear-gradient(to bottom,#000,#555)',
              borderRadius: '22px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font)',
                fontWeight: 500,
                fontSize: '12px',
                color: '#fff',
              }}
            >
              ✦ Popular
            </span>
          </div>
        )}
      </div>

      {/* Price */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '4px',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font)',
            fontWeight: 500,
            fontSize: '44px',
            color: '#000',
            letterSpacing: '-1px',
            lineHeight: 1,
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontFamily: 'var(--font)',
            fontWeight: 400,
            fontSize: '16px',
            color: '#3d3d3d',
            opacity: 0.8,
          }}
        >
          {plan.period}
        </span>
      </div>

      {/* Tagline + description */}
      <p
        style={{
          fontFamily: 'var(--font)',
          fontSize: '14px',
          color: '#3d3d3d',
          opacity: 0.8,
          lineHeight: 1.64,
          marginBottom: '4px',
        }}
      >
        {plan.tagline}
      </p>
      <p
        style={{
          fontFamily: 'var(--font)',
          fontSize: '14px',
          color: '#3d3d3d',
          opacity: 0.8,
          lineHeight: 1.64,
          marginBottom: '20px',
        }}
      >
        {plan.description}
      </p>

      {/* CTA Button */}
      <a
        href={plan.btnHref}
        style={{
          display: 'block',
          textAlign: 'center',
          textDecoration: 'none',
          backgroundColor: plan.popular ? '#000' : '#f5f5f5',
          color: plan.popular ? '#fff' : '#000',
          borderRadius: '10px',
          padding: '12px',
          marginBottom: '28px',
          fontFamily: 'var(--font)',
          fontWeight: 700,
          fontSize: '14px',
          boxShadow: plan.popular
            ? '0 4px 16px rgba(0,0,0,0.4)'
            : 'inset 0 3px 1px white, 0 1px 4px rgba(158,158,158,0.5)',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        {plan.popular ? `→ ${plan.btnText}` : plan.btnText}
      </a>

      {/* Divider */}
      <div
        style={{
          borderTop: '2px dashed rgba(0,0,0,0.15)',
          marginBottom: '24px',
        }}
      />

      {/* Feature list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {plan.features.map(f => (
          <div
            key={f}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <img
              src={CHECK_ICON}
              alt="✓"
              style={{ width: '16px', height: '16px', flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: 'var(--font)',
                fontSize: '15px',
                color: '#3d3d3d',
                lineHeight: 1.4,
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const headRef = useRef(null);
  useReveal(headRef);

  return (
    <section
      id="pricing"
      style={{ backgroundColor: '#f5f5f5', padding: '100px 40px 60px' }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <div
          ref={headRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            maxWidth: '629px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          <span className="section-badge">💰 {SECTION_BADGE}</span>
          <h2 className="section-title">{SECTION_TITLE}</h2>
          <p className="section-sub" style={{ fontSize: '18px' }}>
            {SECTION_SUB}
          </p>

          {/* Monthly / Yearly toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '34px',
              padding: '10px 20px',
              boxShadow: 'var(--card-shadow)',
              marginTop: '8px',
            }}
          >
            <button
              onClick={() => setIsYearly(false)}
              style={{
                fontFamily: 'var(--font)',
                fontWeight: 500,
                fontSize: '16px',
                color: isYearly ? 'rgba(0,0,0,0.4)' : '#000',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                paddingBottom: '2px',
                borderBottom: !isYearly
                  ? '2px solid #000'
                  : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                fontFamily: 'var(--font)',
                fontWeight: 500,
                fontSize: '16px',
                color: !isYearly ? 'rgba(0,0,0,0.4)' : '#000',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                paddingBottom: '2px',
                borderBottom: isYearly
                  ? '2px solid #000'
                  : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              Yearly
            </button>
            <div
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '192px',
                padding: '6px 14px',
                boxShadow: 'inset 0 3px 1px white',
                fontFamily: 'var(--font)',
                fontSize: '14px',
                color: '#000',
                fontWeight: 500,
              }}
            >
              30% off
            </div>
          </div>
        </div>

        {/* 3 pricing cards */}
        <div
          className="pricing-grid"
          style={{
            display: 'flex',
            gap: '24px',
            width: '100%',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          {PLANS.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Guarantee bar */}
        <div
          style={{
            width: '100%',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font)',
              fontSize: '15px',
              color: '#3d3d3d',
              opacity: 0.8,
            }}
          >
            🛡 {GUARANTEE}
          </span>
          <span
            style={{
              fontFamily: 'var(--font)',
              fontSize: '12px',
              color: '#3d3d3d',
              opacity: 0.8,
              backgroundColor: '#fff',
              padding: '6px 12px',
              borderRadius: '5px',
              boxShadow: 'inset 0 3px 1px white,0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            {BETA_OFFER}
          </span>
        </div>
      </div>
    </section>
  );
}
