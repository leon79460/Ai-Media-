// ============================================================
// Features.jsx — "All Your Digital Growth Services" section
// EDIT: SECTION_TITLE, FEATURES array (title, desc, items)
// ============================================================
'use client';
import { useEffect, useRef } from 'react';

const SECTION_BADGE = 'Services';
const SECTION_TITLE = 'All Your Digital Growth Services in One Place';
const SECTION_SUB =
  'Discover features that simplify workflows & grow your business.';

// EDIT these 4 feature cards
const FEATURES = [
  {
    icon: '🎨',
    title: 'Design',
    description:
      'Create modern visual experiences that strengthen your brand identity, improve usability, and leave a lasting impression.',
    items: ['UI/UX design', 'Branding design', 'Graphic design'],
  },
  {
    icon: '</>',
    title: 'Development',
    description:
      'Create modern visual experiences that strengthen your brand identity, improve usability, and leave a lasting impression.',
    items: ['Web Development', 'Website Maintenance'],
  },
  {
    icon: '📣',
    title: 'Marketing',
    description:
      'Increase visibility, attract qualified leads, and grow your online presence through strategic digital marketing.',
    items: ['SEO', 'Social Media', 'Email Marketing'],
  },
  {
    icon: '✦',
    title: 'Content',
    description:
      'Produce engaging content and creative media designed to capture attention, build trust, and drive engagement.',
    items: ['AI Content Creation', 'Video Editing'],
  },
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = '1';
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

function FeatureCard({ feature, delay }) {
  const ref = useRef(null);
  useReveal(ref, delay);

  return (
    <div
      ref={ref}
      className="card-hover"
      style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '20px',
        padding: '34px',
        boxShadow: 'var(--card-shadow)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        opacity: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minHeight: '380px',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '10px',
          backgroundColor: '#242424',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: '#fff',
          boxShadow: '0 4px 14px rgba(171,171,171,0.5)',
          flexShrink: 0,
        }}
      >
        {feature.icon}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Title — EDIT via FEATURES array */}
        <h3
          style={{
            fontFamily: 'var(--font)',
            fontWeight: 600,
            fontSize: '20px',
            color: '#000',
            lineHeight: 1.4,
          }}
        >
          {feature.title}
        </h3>
        {/* Description — EDIT via FEATURES array */}
        <p
          style={{
            fontFamily: 'var(--font)',
            fontWeight: 400,
            fontSize: '16px',
            color: '#3d3d3d',
            opacity: 0.8,
            lineHeight: 1.64,
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* Feature list items — EDIT via FEATURES array */}
      <ul
        style={{
          listStyle: 'disc',
          paddingLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {feature.items.map(item => (
          <li
            key={item}
            style={{
              fontFamily: 'var(--font)',
              fontWeight: 500,
              fontSize: '16px',
              color: '#000',
              lineHeight: 1.4,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  const headRef = useRef(null);
  useReveal(headRef);

  return (
    <section
      id="services"
      style={{ backgroundColor: '#f5f5f5', padding: '100px 40px' }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
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
            maxWidth: '764px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          <span className="section-badge">🔧 {SECTION_BADGE}</span>
          <h2 className="section-title">{SECTION_TITLE}</h2>
          <p className="section-sub">{SECTION_SUB}</p>
        </div>

        {/* 2×2 grid */}
        <div
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            width: '100%',
          }}
        >
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
