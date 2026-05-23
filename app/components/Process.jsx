'use client';

import Image from 'next/image';
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

const BADGE_ICON_STYLE = {
  width: 18,
  height: 18,
  flex: '0 0 18px',
};

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

  return (
    <svg {...common}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

const CARD_VIDEO = {
  build: '/video/Build.mp4',
  grow: '/video/grow.mp4',
  own: '/video/own.mp4',
};

function CardArt({ id }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      <video
        src={CARD_VIDEO[id]}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          backgroundColor: '#ececec',
        }}
      />
    </div>
  );
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
      <div
        style={{
          height: 214,
          marginBottom: 32,
        }}
      >
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
      <Image
        src="/icons/process.svg"
        alt=""
        aria-hidden="true"
        width={18}
        height={18}
        style={BADGE_ICON_STYLE}
      />
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
