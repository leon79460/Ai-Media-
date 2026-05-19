// ============================================================
// Process.jsx - "One system. Built to compound." section
// ============================================================
'use client';

import { useEffect, useRef } from 'react';

const SECTION_BADGE = 'Process';
const SECTION_TITLE = 'One system.Built to compound.';
const SECTION_SUB = 'Partner with an AI agency delivering smart solutions.';

const CARDS = [
  {
    id: 'build',
    title: 'Build',
    price: 'From $1,800',
    duration: '4-6 weeks',
    description:
      'Your entire online presence rebuilt from scratch. Website, SEO foundation, Google Business Profile, brand identity. Delivered in 6 weeks.',
  },
  {
    id: 'grow',
    title: 'Grow',
    price: 'From $1,500/month',
    duration: 'Ongoing',
    description:
      'Monthly SEO, content, social media, and reporting running continuously. Organic rankings that compound every month.',
  },
  {
    id: 'own',
    title: 'Own',
    price: 'From $1,500/month',
    duration: '6-8 weeks',
    description:
      'A branded client onboarding portal your homeowners use throughout every project. No other AV agency builds these.',
  },
];

const TICKER_ITEMS = [
  { label: 'Faster Innovation', icon: 'spark' },
  { label: 'Virtual Assistance', icon: 'calendar' },
  { label: 'Scalable Solutions', icon: 'layers' },
  { label: 'Personalized Experiences', icon: 'refresh' },
  { label: 'Cost Effective', icon: 'coin' },
  { label: 'Real-Time Insights', icon: 'plus' },
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animation = `revealUp 0.65s ease ${delay}s forwards`;
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

function MiniIcon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (type === 'calendar') {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M9 14h3" />
      </svg>
    );
  }

  if (type === 'layers') {
    return (
      <svg {...common}>
        <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
        <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
      </svg>
    );
  }

  if (type === 'refresh') {
    return (
      <svg {...common}>
        <path d="M20 12a8 8 0 0 1-13.7 5.7" />
        <path d="M4 12A8 8 0 0 1 17.7 6.3" />
        <path d="M7 18H4v-3M17 6h3v3" />
      </svg>
    );
  }

  if (type === 'coin') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c.7-.6 4.3-.8 4.7 1 .5 2-4.5 1.2-4 3.3.4 1.8 4 1.5 4.8.7" />
      </svg>
    );
  }

  if (type === 'plus') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }

  if (type === 'gear') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2.8v2M12 19.2v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.8 12h2M19.2 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        <path d="M7.1 9.1 6 7.3l1.3-1.3 1.8 1.1M14.9 7.1 16.7 6l1.3 1.3-1.1 1.8M16.9 14.9l1.1 1.8-1.3 1.3-1.8-1.1M9.1 16.9 7.3 18 6 16.7l1.1-1.8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

function BuildArt() {
  return (
    <div
      style={{
        position: 'relative',
        width: 176,
        height: 176,
        margin: '0 auto',
        borderRadius: '50%',
        background: '#f5f5f5',
        boxShadow:
          'inset 0 3px 1px rgba(255,255,255,0.95), 0 22px 34px rgba(0,0,0,0.13)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 2,
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.85)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 82,
          top: 75,
          width: 96,
          height: 18,
          borderRadius: 99,
          background: '#f5f5f5',
          boxShadow:
            'inset 0 3px 1px rgba(255,255,255,0.95), 0 12px 24px rgba(0,0,0,0.16)',
          transform: 'rotate(-22deg)',
          transformOrigin: '9px 9px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 75,
          top: 82,
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: '#9f9f9f',
          boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 5,
            top: 5,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#030303',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          right: 54,
          top: 34,
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#f5f5f5',
          boxShadow:
            'inset 0 3px 1px rgba(255,255,255,0.95), 0 8px 16px rgba(0,0,0,0.12)',
        }}
      />
    </div>
  );
}

function GrowArt() {
  const bars = [
    { height: 112 },
    { height: 74 },
    { height: 158 },
    { height: 102 },
    { height: 78 },
  ];

  return (
    <div style={{ position: 'relative', height: 176 }}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: 'translateX(-50%)',
          borderRadius: 6,
          background: '#f5f5f5',
          padding: '7px 13px',
          fontFamily: 'var(--font)',
          fontSize: 12,
          color: '#000',
          whiteSpace: 'nowrap',
          boxShadow:
            'inset 0 3px 1px rgba(255,255,255,0.95), 0 12px 24px rgba(0,0,0,0.16)',
        }}
      >
        80% Automation
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 90,
          width: 34,
          height: 112,
          borderRadius: 6,
          background: '#f5f5f5',
          boxShadow:
            'inset 0 3px 1px rgba(255,255,255,0.95), 0 14px 28px rgba(0,0,0,0.12)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            fontFamily: 'var(--font)',
            fontSize: 11,
            fontWeight: 600,
            color: '#000',
            transform: 'rotate(-90deg)',
          }}
        >
          AFTER
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 48,
          right: 35,
          bottom: 0,
          display: 'flex',
          alignItems: 'end',
          gap: 16,
        }}
      >
        {bars.map((bar, index) => (
          <div
            key={index}
            style={{
              width: 44,
              height: bar.height,
              borderRadius: 7,
              background: '#f5f5f5',
              boxShadow:
                'inset 0 3px 1px rgba(255,255,255,0.95), 0 16px 24px rgba(0,0,0,0.12)',
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 112,
          borderRadius: 6,
          background: '#f5f5f5',
          padding: '7px 11px',
          fontFamily: 'var(--font)',
          fontSize: 12,
          color: '#000',
          whiteSpace: 'nowrap',
          boxShadow:
            'inset 0 3px 1px rgba(255,255,255,0.95), 0 12px 24px rgba(0,0,0,0.16)',
        }}
      >
        10% Cost
      </div>
    </div>
  );
}

function OwnArt() {
  return (
    <div
      style={{
        position: 'relative',
        width: 176,
        height: 176,
        margin: '0 auto',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {[144, 122, 100].map((size, index) => (
        <div
          key={size}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            background: '#f5f5f5',
            boxShadow:
              'inset 0 3px 1px rgba(255,255,255,0.95), 0 16px 28px rgba(0,0,0,0.13)',
            opacity: index === 0 ? 0.6 : 1,
          }}
        />
      ))}
      <div
        style={{
          position: 'relative',
          width: 88,
          height: 88,
          borderRadius: '50%',
          background: '#f5f5f5',
          display: 'grid',
          placeItems: 'center',
          boxShadow:
            'inset 0 3px 1px rgba(255,255,255,0.95), 0 16px 24px rgba(0,0,0,0.13)',
          fontFamily: 'var(--font)',
          fontSize: 42,
          lineHeight: 1,
          color: '#000',
        }}
      >
        AI
      </div>
    </div>
  );
}

function CardArt({ id }) {
  if (id === 'grow') return <GrowArt />;
  if (id === 'own') return <OwnArt />;
  return <BuildArt />;
}

function ProcessCard({ card, delay }) {
  const ref = useRef(null);
  useReveal(ref, delay);

  return (
    <article
      ref={ref}
      className="process-card card-hover"
      style={{
        flex: '1 1 320px',
        maxWidth: 384,
        minHeight: 517,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        padding: '32px',
        boxShadow: 'var(--card-shadow)',
        opacity: 0,
        transition: 'transform 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ height: 214, marginBottom: 42 }}>
        <CardArt id={card.id} />
      </div>

      <h3
        style={{
          fontFamily: 'var(--font)',
          fontWeight: 700,
          fontSize: 22,
          color: '#000',
          lineHeight: 1.25,
          marginBottom: 14,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font)',
          fontSize: 17,
          color: '#3d3d3d',
          lineHeight: 1.58,
          opacity: 0.82,
          marginBottom: 20,
        }}
      >
        {card.description}
      </p>
      <p
        style={{
          fontFamily: 'var(--font)',
          fontWeight: 500,
          fontSize: 22,
          color: '#000',
          lineHeight: 1.3,
          marginTop: 'auto',
          marginBottom: 12,
        }}
      >
        {card.price}
      </p>
      <p
        style={{
          fontFamily: 'var(--font)',
          fontSize: 17,
          color: '#3d3d3d',
          opacity: 0.8,
          lineHeight: 1.3,
        }}
      >
        {card.duration}
      </p>
    </article>
  );
}

function ProcessBadge() {
  return (
    <span className="section-badge process-badge">
      <MiniIcon type="gear" />
      {SECTION_BADGE}
    </span>
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
        padding: '88px 40px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          ref={headRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            textAlign: 'center',
            opacity: 0,
            marginBottom: 78,
          }}
        >
          <ProcessBadge />
          <h2
            className="section-title process-title"
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              letterSpacing: 0,
            }}
          >
            {SECTION_TITLE}
          </h2>
          <p
            className="section-sub"
            style={{
              fontSize: 18,
              lineHeight: 1.4,
            }}
          >
            {SECTION_SUB}
          </p>
        </div>

        <div
          className="process-grid"
          style={{
            display: 'flex',
            gap: 24,
            width: '100%',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'stretch',
          }}
        >
          {CARDS.map((card, index) => (
            <ProcessCard key={card.id} card={card} delay={index * 0.12} />
          ))}
        </div>
      </div>

      <div
        style={{
          width: '100%',
          marginTop: 28,
          paddingBottom: 34,
          maskImage:
            'linear-gradient(to right,transparent 0%,black 12%,black 88%,transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right,transparent 0%,black 12%,black 88%,transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 24,
            width: 'max-content',
            animation: 'ticker 34s linear infinite',
          }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map(
            (item, index) => (
              <div
                key={`${item.label}-${index}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 14,
                  minHeight: 48,
                  backgroundColor: '#f5f5f5',
                  border: '1px solid rgba(255,255,255,0.9)',
                  borderRadius: 228,
                  padding: '0 28px',
                  whiteSpace: 'nowrap',
                  boxShadow:
                    'inset 0 3px 1px rgba(255,255,255,0.95), 0 12px 24px rgba(0,0,0,0.13)',
                  fontFamily: 'var(--font)',
                  fontWeight: 500,
                  fontSize: 16,
                  color: '#000',
                }}
              >
                <MiniIcon type={item.icon} />
                {item.label}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
