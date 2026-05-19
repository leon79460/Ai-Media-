// ============================================================
// WhyUs.jsx — "Why We are Different" section
// Goes BEFORE the Footer (last section before footer)
// ─────────────────────────────────────────────────────────────
// HOW TO EDIT:
// - SECTION_TITLE, SECTION_SUB → heading text
// - AI_MEDIA_FEATURES   → left column (✅ checkmarks) — AI Media
// - OTHERS_FEATURES     → right column (✗ crosses)   — Others
// - BTN_TEXT, BTN_HREF  → button in AI Media column
// ============================================================
'use client';
import { useEffect, useRef } from 'react';

// ⚠️ Save to /public/ before going live
const CHECK_ICON =
  'https://www.figma.com/api/mcp/asset/1dfbde79-ebf9-41f5-a871-013727534550';

const SECTION_BADGE = 'WHY AI MEDIA';
const SECTION_TITLE = 'Why We are Different';
const SECTION_SUB =
  'See the difference between a modern AI powered workflow and traditional agency processes.';

const BTN_TEXT = 'Get Started';
const BTN_HREF = '#contact';

// ✅ AI Media column features — EDIT these
const AI_MEDIA_FEATURES = [
  'Transparent pricing structure',
  'No long-term contracts required',
  'Results focused digital strategy',
  'AI powered production workflow',
  'Strategic UI/UX focused execution',
  'Faster communication and support',
  'Built for AV & smart home businesses',
  'Scalable systems for long term growth',
  'Real performance tracking and reporting',
  'Website delivered in weeks, not months',
];

// ✗ Others column features — EDIT these
const OTHERS_FEATURES = [
  'Hidden fees and surprise invoices',
  'Locked into 12-month retainers',
  'Generic strategy for any industry',
  'Manual slow production process',
  'Design decisions made without data',
  'Slow response times and poor support',
  'Built for general audiences',
];

// Cross icon — rendered as SVG inline (no image needed)
function CrossIcon() {
  return (
    <div
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        border: '1px solid #030303',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
        <line
          x1="1"
          y1="1"
          x2="5"
          y2="5"
          stroke="#030303"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="1"
          x2="1"
          y2="5"
          stroke="#030303"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

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

export default function WhyUs() {
  const headRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  useReveal(headRef);
  useReveal(card1Ref, 0.1);
  useReveal(card2Ref, 0.2);

  return (
    <section
      id="whyus"
      style={{ backgroundColor: '#f5f5f5', padding: '100px 40px' }}
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
        {/* ── Section header ── */}
        <div
          ref={headRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '11px',
            maxWidth: '629px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          <span className="section-badge">🏷 {SECTION_BADGE}</span>
          {/* EDIT: SECTION_TITLE */}
          <h2
            style={{
              fontFamily: 'var(--font)',
              fontWeight: 500,
              fontSize: '56px',
              color: '#030303',
              lineHeight: 1.4,
              textAlign: 'center',
            }}
          >
            {SECTION_TITLE}
          </h2>
          {/* EDIT: SECTION_SUB */}
          <p
            style={{
              fontFamily: 'var(--font)',
              fontWeight: 400,
              fontSize: '18px',
              color: '#3d3d3d',
              opacity: 0.8,
              lineHeight: 1.8,
              textAlign: 'center',
            }}
          >
            {SECTION_SUB}
          </p>
        </div>

        {/* ── Two comparison cards ── */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            width: '100%',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'stretch',
          }}
        >
          {/* ── Left card: AI Media ✅ ── */}
          <div
            ref={card1Ref}
            style={{
              flex: '1',
              minWidth: '300px',
              maxWidth: '384px',
              backgroundColor: '#f5f5f5',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--card-shadow)',
              opacity: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Card header */}
            <div>
              <div style={{ paddingBottom: '10px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font)',
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#030303',
                  }}
                >
                  AI Media
                </span>
              </div>
              {/* Divider line */}
              <div
                style={{ height: '1px', background: '#e3e3e3', width: '100%' }}
              />
            </div>

            {/* Feature list with ✅ checkmarks */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {AI_MEDIA_FEATURES.map(feature => (
                <div
                  key={feature}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Check icon — EDIT: CHECK_ICON path */}
                  <img
                    src={CHECK_ICON}
                    alt="✓"
                    style={{ width: '16px', height: '16px', flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font)',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#030303',
                      lineHeight: 1.64,
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Get Started button — EDIT: BTN_TEXT, BTN_HREF */}
            <a
              href={BTN_HREF}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#030303',
                color: '#f5f5f5',
                textDecoration: 'none',
                borderRadius: '10px',
                height: '46px',
                width: '100%',
                fontFamily: 'var(--font)',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: 'inset 0 3px 1px white, 0 2px 8px rgba(0,0,0,0.3)',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              → {BTN_TEXT}
            </a>
          </div>

          {/* ── Right card: Others ✗ ── */}
          <div
            ref={card2Ref}
            style={{
              flex: '1',
              minWidth: '300px',
              maxWidth: '384px',
              backgroundColor: '#f5f5f5',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--card-shadow)',
              opacity: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {/* Card header */}
            <div>
              <div style={{ paddingBottom: '10px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font)',
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#030303',
                  }}
                >
                  Others
                </span>
              </div>
              {/* Divider line */}
              <div
                style={{ height: '1px', background: '#e3e3e3', width: '100%' }}
              />
            </div>

            {/* Feature list with ✗ crosses */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {OTHERS_FEATURES.map(feature => (
                <div
                  key={feature}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.04)',
                  }}
                >
                  <CrossIcon />
                  <span
                    style={{
                      fontFamily: 'var(--font)',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#030303',
                      lineHeight: 1.64,
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
