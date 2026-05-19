// ============================================================
// Process.jsx — "One system. Built to compound." section
// EDIT: SECTION_TITLE, SECTION_SUB, CARDS, TICKER_ITEMS
// ============================================================
'use client';
import { useEffect, useRef } from 'react';

const SECTION_BADGE = 'Process';
const SECTION_TITLE = 'One system. Built to compound.';
const SECTION_SUB = 'Partner with an AI agency delivering smart solutions.';

// EDIT these 3 cards
const CARDS = [
  {
    id: 1,
    title: 'Build',
    price: 'From $1,800',
    duration: '4–6 weeks',
    description:
      'Your entire online presence rebuilt from scratch. Website, SEO foundation, Google Business Profile, brand identity. Delivered in 6 weeks.',
  },
  {
    id: 2,
    title: 'Grow',
    price: 'From $1,500/month',
    duration: 'Ongoing',
    description:
      'Monthly SEO, content, social media, and reporting running continuously. Organic rankings that compound every month.',
  },
  {
    id: 3,
    title: 'Own',
    price: 'From $1,500/month',
    duration: '6–8 weeks',
    description:
      'A branded client onboarding portal your homeowners use throughout every project. No other AV agency builds these.',
  },
];

// EDIT these scrolling pills
const TICKER_ITEMS = [
  'Faster Innovation',
  'Virtual Assistance',
  'Scalable Solutions',
  'Personalized Experiences',
  'Cost Effective',
  'Real-Time Insights',
  'AI Powered',
  'Smart Automation',
];

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.animation = 'revealUp 0.6s ease forwards';
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function Card({ card, delay }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div
      ref={ref}
      className="card-hover"
      style={{
        flex: '1',
        minWidth: '280px',
        maxWidth: '384px',
        backgroundColor: '#f5f5f5',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: 'var(--card-shadow)',
        transition: 'transform 0.3s,box-shadow 0.3s',
        opacity: 0,
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '72px',
          fontSize: '18px',
          fontWeight: 700,
          color: '#fff',
          fontFamily: 'var(--font)',
        }}
      >
        {card.id}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font)',
          fontWeight: 700,
          fontSize: '20px',
          color: '#000',
          marginBottom: '10px',
          lineHeight: 1.4,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font)',
          fontSize: '16px',
          color: '#3d3d3d',
          lineHeight: 1.64,
          opacity: 0.8,
          marginBottom: '16px',
        }}
      >
        {card.description}
      </p>
      <div
        style={{ height: '1px', background: '#e3e3e3', marginBottom: '16px' }}
      />
      <p
        style={{
          fontFamily: 'var(--font)',
          fontWeight: 700,
          fontSize: '20px',
          color: '#000',
          marginBottom: '4px',
        }}
      >
        {card.price}
      </p>
      <p
        style={{
          fontFamily: 'var(--font)',
          fontSize: '14px',
          color: '#3d3d3d',
          opacity: 0.7,
        }}
      >
        {card.duration}
      </p>
    </div>
  );
}

export default function Process() {
  const headRef = useRef(null);
  useReveal(headRef);

  return (
    <section
      id="process"
      style={{
        backgroundColor: '#f5f5f5',
        padding: '100px 40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
      }}
    >
      <div
        ref={headRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          maxWidth: '720px',
          textAlign: 'center',
          opacity: 0,
        }}
      >
        <span className="section-badge">⚙ {SECTION_BADGE}</span>
        <h2 className="section-title">{SECTION_TITLE}</h2>
        <p className="section-sub">{SECTION_SUB}</p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          maxWidth: 'var(--max-width)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {CARDS.map((c, i) => (
          <Card key={c.id} card={c} delay={i * 0.15} />
        ))}
      </div>

      {/* Scrolling ticker */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          borderTop: '1px solid #e3e3e3',
          borderBottom: '1px solid #e3e3e3',
          padding: '16px 0',
          maskImage:
            'linear-gradient(to right,transparent 0%,black 8%,black 92%,transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right,transparent 0%,black 8%,black 92%,transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
            animation: 'ticker 30s linear infinite',
          }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e3e3e3',
                borderRadius: '228px',
                padding: '10px 20px',
                whiteSpace: 'nowrap',
                boxShadow: 'inset 0 3px 1px white',
                fontFamily: 'var(--font)',
                fontWeight: 500,
                fontSize: '14px',
                color: '#000',
              }}
            >
              ✦ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
