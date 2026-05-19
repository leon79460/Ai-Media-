// ============================================================
// Features.jsx — Services section with hover card overlay
//
// HOW THE HOVER WORKS:
// - Default state: icon, title, description, bullet list
// - Hover state: a NEW layout fades in on top of the card
//   Left side = dark mockup image
//   Right side = icon, title, short description, bullets, ↗ arrow
//
// HOW TO EDIT:
// - FEATURES array → edit title, description, items, hoverImage
// - hoverImage → save your own dark mockup to /public/ folder
//   e.g. "/design-mockup.jpg" and set it here
// ============================================================
'use client';
import { useEffect, useRef } from 'react';

const SECTION_BADGE = 'Services';
const SECTION_TITLE = 'All Your Digital Growth Services in One Place';
const SECTION_SUB =
  'Discover features that simplify workflows & grow your business.';

// ⚠️ hoverImage: replace with your own dark mockup images in /public/
// For now using the card icon as placeholder — swap with real screenshots!
const FEATURES = [
  {
    icon: 'https://www.figma.com/api/mcp/asset/5a389d65-7129-439e-9f68-f3aad6f5540a',
    title: 'Design',
    description:
      'Create modern visual experiences that strengthen your brand identity, improve usability, and leave a lasting impression.',
    items: ['UI/UX design', 'Branding design', 'Graphic design'],
    // EDIT: replace with your own dark mockup screenshot
    hoverImage: 'feature card hover effect.png',
    href: '#contact',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/28eb886e-d582-4998-89db-a18c8c20d438',
    title: 'Development',
    description:
      'Create modern visual experiences that strengthen your brand identity, improve usability, and leave a lasting impression.',
    items: ['Web Development', 'Website Maintenance'],
    hoverImage: 'feature card hover effect.png',
    href: '#contact',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/b59b6d05-e302-46ac-8956-e0f30b987438',
    title: 'Marketing',
    description:
      'Increase visibility, attract qualified leads, and grow your online presence through strategic digital marketing.',
    items: ['SEO', 'Social Media', 'Email Marketing'],
    hoverImage: 'feature card hover effect.png',
    href: '#contact',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/4e41e3b7-86a4-498e-8433-d77a14942cba',
    title: 'Content',
    description:
      'Produce engaging content and creative media designed to capture attention, build trust, and drive engagement.',
    items: ['AI Content Creation', 'Video Editing'],
    hoverImage: 'feature card hover effect.png',
    href: '#contact',
  },
];

// CSS for the hover overlay fade effect
const CSS = `
  /* The hover card sits on top, invisible by default */
  .feat-hover-card {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: #f5f5f5;
    box-shadow: inset 0 3px 1px white;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    display: flex;
    overflow: hidden;
    z-index: 10;
  }

  /* Show hover card when parent is hovered */
  .feat-card-wrap:hover .feat-hover-card {
    opacity: 1;
    pointer-events: auto;
  }

  /* Lift the whole card slightly */
  .feat-card-wrap {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  .feat-card-wrap:hover {
    transform: translateY(-5px);
    box-shadow: 0 24px 56px rgba(0,0,0,0.12) !important;
  }

  /* Reveal on scroll */
  .feat-reveal { opacity: 0; }
`;

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

const CARD_SHADOW =
  '0 0.7px 0.7px rgba(0,0,0,0.08), 0 1.8px 1.8px rgba(0,0,0,0.08), 0 3.6px 3.6px rgba(0,0,0,0.07), 0 6.9px 6.9px rgba(0,0,0,0.07), 0 13.6px 13.6px rgba(0,0,0,0.05), 0 30px 30px rgba(0,0,0,0.02), inset 0 3px 1px white';
const ICON_SHADOW =
  '0 0.7px 0.7px rgba(171,171,171,0.64), 0 1.8px 1.8px rgba(171,171,171,0.63), 0 3.6px 3.6px rgba(171,171,171,0.61), 0 30px 30px rgba(171,171,171,0.35)';

function FeatureCard({ feature, delay }) {
  const ref = useRef(null);
  useReveal(ref, delay);

  return (
    <div
      ref={ref}
      className="feat-card-wrap feat-reveal"
      style={{
        position: 'relative',
        borderRadius: '20px',
        minHeight: '412px',
        boxShadow: CARD_SHADOW,
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
      }}
    >
      {/* ════════════════════════════════════════
          DEFAULT STATE — visible normally
          ════════════════════════════════════════ */}
      <div
        style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '20px',
          padding: '34px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          height: '100%',
          minHeight: '412px',
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
            flexShrink: 0,
            boxShadow: ICON_SHADOW,
          }}
        >
          <img
            src={feature.icon}
            alt=""
            style={{ width: '28px', height: '28px', objectFit: 'contain' }}
          />
        </div>

        {/* Title + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3
            style={{
              fontFamily: 'var(--font)',
              fontWeight: 500,
              fontSize: '20px',
              color: '#000',
              lineHeight: 1.4,
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font)',
              fontWeight: 400,
              fontSize: '16px',
              color: '#000',
              opacity: 0.8,
              lineHeight: 1.64,
            }}
          >
            {feature.description}
          </p>
        </div>

        {/* Bullet list */}
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

      {/* ════════════════════════════════════════
          HOVER STATE — fades in on top
          Left: dark mockup image
          Right: icon, title, desc, bullets, arrow
          ════════════════════════════════════════ */}
      <div className="feat-hover-card">
        {/* LEFT — dark mockup image (45% width) */}
        <div
          style={{
            width: '45%',
            flexShrink: 0,
            background: '#111',
            borderRadius: '20px 0 0 20px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={feature.hoverImage}
            alt={feature.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.9,
            }}
          />
          {/* subtle gradient overlay on image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.05))',
            }}
          />
        </div>

        {/* RIGHT — content (55% width) */}
        <div
          style={{
            flex: 1,
            padding: '34px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '0 20px 20px 0',
            justifyContent: 'center',
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
              flexShrink: 0,
              boxShadow: ICON_SHADOW,
            }}
          >
            <img
              src={feature.icon}
              alt=""
              style={{ width: '28px', height: '28px', objectFit: 'contain' }}
            />
          </div>

          {/* Title + short description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3
              style={{
                fontFamily: 'var(--font)',
                fontWeight: 500,
                fontSize: '20px',
                color: '#000',
                lineHeight: 1.4,
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font)',
                fontWeight: 400,
                fontSize: '14px',
                color: '#000',
                opacity: 0.8,
                lineHeight: 1.6,
              }}
            >
              {feature.description}
            </p>
          </div>

          {/* Bullet list with arrow on last item */}
          <ul
            style={{
              listStyle: 'disc',
              paddingLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {feature.items.map((item, i) => {
              const isLast = i === feature.items.length - 1;
              return (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--font)',
                    fontWeight: 500,
                    fontSize: '15px',
                    color: '#000',
                    lineHeight: 1.4,
                  }}
                >
                  {isLast ? (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                      }}
                    >
                      <span>{item}</span>
                      {/* ↗ arrow on last item */}
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#000',
                          marginLeft: 'auto',
                          flexShrink: 0,
                          lineHeight: 1,
                        }}
                      >
                        ↗
                      </span>
                    </span>
                  ) : (
                    item
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const headRef = useRef(null);
  useReveal(headRef);

  // Inject CSS once
  useEffect(() => {
    if (document.getElementById('feat-css')) return;
    const style = document.createElement('style');
    style.id = 'feat-css';
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.getElementById('feat-css')?.remove();
  }, []);

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
