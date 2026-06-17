'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedCard from './animation/AnimatedCard';
import Marquee from './animation/Marquee';
import Reveal, { motionEase } from './animation/Reveal';
import StaggerContainer from './animation/StaggerContainer';
import TextReveal from './animation/TextReveal';

const SECTION_BADGE = 'Process';
const SECTION_TITLE = 'One System. Built to Compound.';
const SECTION_SUB =
  'A complete growth system for AV and smart home integrators - built to launch fast, rank locally, generate leads, and improve every month.';

const CARDS = [
  {
    id: 'build',
    title: 'Build',
    description:
      'Rebuild your online presence from the ground up: website, SEO foundation, Google Business Profile, service pages, and brand identity. Delivered in 6 weeks.',
  },
  {
    id: 'grow',
    title: 'Grow',
    description:
      'Run monthly SEO, content, social media, tracking, and reporting that compounds over time - so your best clients can find you first.',
  },
  {
    id: 'own',
    title: 'Own',
    description:
      'Give clients a branded onboarding portal that keeps every project clear, organized, and premium from the first form to final handoff.',
  },
];

const TICKER_ITEMS = [
  { label: 'AI Content Creation', icon: 'spark' },
  { label: 'Social Media Management', icon: 'calendar' },
  { label: 'Web Design', icon: 'layers' },
  { label: 'Web Development', icon: 'refresh' },
  { label: 'UX/UI', icon: 'plus' },
  { label: 'Video Editing', icon: 'spark' },
  { label: 'SEO/AEO', icon: 'coin' },
  { label: 'Graphic Design', icon: 'layers' },
  { label: 'Website Maintenance', icon: 'refresh' },
];

const BADGE_ICON_STYLE = {
  width: 18,
  height: 18,
  flex: '0 0 18px',
};

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

function getThreeCardVariant(index) {
  if (index === 0) {
    return {
      hidden: {
        opacity: 0,
        x: -44,
        y: 18,
        scale: 0.975,
        rotate: -0.6,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.76, ease: motionEase },
      },
    };
  }

  if (index === 2) {
    return {
      hidden: {
        opacity: 0,
        x: 44,
        y: 18,
        scale: 0.975,
        rotate: 0.6,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.76, ease: motionEase },
      },
    };
  }

  return {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.76, ease: motionEase },
    },
  };
}

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

function ProcessCard({ card, index }) {
  return (
    <AnimatedCard
      className="process-card card-hover"
      variants={getThreeCardVariant(index)}
      style={{
        flex: '1 1 320px',
        maxWidth: 384,
        minHeight: 517,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        padding: '32px',
        boxShadow: 'var(--card-shadow)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        data-parallax
        data-parallax-speed="0.1"
        data-parallax-distance="130"
        data-parallax-scale="1.02"
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
      <div className="process-card-bottom">
        <Link href="/contact" className="process-card-cta">
          Contact Us
        </Link>
      </div>
    </AnimatedCard>
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
  return (
    <section
      id="process"
      className="process-section"
      style={{
        backgroundColor: '#f5f5f5',
        padding: '65px 40px',
        overflow: 'hidden',
      }}
    >
      <div
        className="process-shell"
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Reveal
          className="process-header"
          effect="slide-left"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            textAlign: 'center',
            marginBottom: 78,
          }}
        >
          <ProcessBadge />
          <TextReveal
            as="h2"
            className="section-title process-title"
            text={SECTION_TITLE}
            delay={0.1}
            style={{
              fontSize: 55,
              lineHeight: 1.2,
              letterSpacing: 0,
            }}
          />
          <p
            className="section-sub"
            style={{
              fontSize: 18,
              lineHeight: 1.4,
            }}
          >
            {SECTION_SUB}
          </p>
        </Reveal>

        <StaggerContainer
          className="process-grid"
          delay={0.08}
          stagger={0.1}
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
            <ProcessCard key={card.id} card={card} index={index} />
          ))}
        </StaggerContainer>
      </div>

      {/* Ticker strip */}
      <Marquee
        items={TICKER_ITEMS}
        className="process-ticker-wrap"
        trackClassName="process-ticker-track"
        itemClassName="process-ticker-pill"
        renderItem={(item) => (
          <>
            <MiniIcon type={item.icon} />
            {item.label}
          </>
        )}
      />
    </section>
  );
}
