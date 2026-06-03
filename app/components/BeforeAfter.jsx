'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// EDIT section text
const SECTION_BADGE = 'Case Study';
const TITLE = 'We Tested the System on Our Own AV Company First.';
const SUBTITLE =
  'Project: Automate is a $3M/year luxury AV integration company. We rebuilt its online presence using the same website, SEO, content, and reporting system we now build for other integrators.';

// ⚠️ Save to /public/ before going live
const BEFORE_IMG = '/before.png';
const AFTER_IMG = '/after.png';

const BADGE_ICON_STYLE = {
  width: 18,
  height: 18,
  flex: '0 0 18px',
};

const PROJECT_DETAILS = [
  'Rebuilt the website experience to position Automate as a premium luxury AV integrator.',
  'Created a cleaner service-page structure for smart home, lighting, security, networking, and theater searches.',
  'Built the SEO foundation with local search intent, improved page hierarchy, and conversion-focused copy.',
  'Improved visual trust with stronger project imagery, clearer messaging, and a more polished first impression.',
  'Set up tracking and reporting so performance, leads, and ongoing improvements can be measured over time.',
];

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50); // % from left
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isDragging = useRef(false);
  const wrapRef = useRef(null);
  const headRef = useRef(null);

  // Reveal animation on scroll
  useEffect(() => {
    const el = headRef.current;
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
  }, []);

  // Drag handlers for the before/after slider
  const getPos = e => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pct, 2), 98));
  };

  const onMouseDown = () => {
    isDragging.current = true;
  };
  const onMouseMove = e => {
    if (isDragging.current) getPos(e);
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };
  const onTouchMove = e => getPos(e);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, []);

  return (
    <section
      id="case-study"
      className="before-after-section"
      style={{ backgroundColor: '#f5f5f5', padding: '100px 40px 60px' }}
    >
      <div
        className="before-after-shell"
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
            maxWidth: '700px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          <span className="section-badge">
            <Image
              src="/icons/case-studies.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              style={BADGE_ICON_STYLE}
            />
            {SECTION_BADGE}
          </span>
          {/* EDIT: TITLE */}
          <h2 className="section-title">{TITLE}</h2>
          {/* EDIT: SUBTITLE */}
          <p className="section-sub" style={{ fontSize: '18px' }}>
            {SUBTITLE}
          </p>
        </div>

        <div className="case-study-showcase">
          {/* Before / After slider card */}
          <div
            className="before-after-card"
            data-parallax
            data-parallax-speed="0.08"
            data-parallax-distance="120"
            data-parallax-rotate="1.2"
            style={{
              width: '100%',
              backgroundColor: '#f5f5f5',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: 'var(--card-shadow)',
            }}
          >
          <div
            ref={wrapRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '57.4%',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'ew-resize',
              userSelect: 'none',
            }}
          >
            {/* AFTER image (full width, behind) — EDIT: AFTER_IMG */}
            <Image
              src={AFTER_IMG}
              alt="After"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{
                objectFit: 'cover',
                objectPosition: 'bottom',
                borderRadius: '8px',
              }}
            />

            {/* BEFORE image (clipped by sliderPos) — EDIT: BEFORE_IMG */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                width: `${sliderPos}%`,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${100 / (sliderPos / 100)}%`,
                  height: '100%',
                }}
              >
                <Image
                  src={BEFORE_IMG}
                  alt="Before"
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '8px 0 0 8px',
                  }}
                />
              </div>
            </div>

            {/* Vertical divider line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                width: '2px',
                background: '#fff',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
              }}
            />

            {/* Drag handle circle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${sliderPos}%`,
                transform: 'translate(-50%,-50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                cursor: 'ew-resize',
                fontSize: '14px',
                fontWeight: 700,
                color: '#000',
                userSelect: 'none',
              }}
            >
              ⇔
            </div>

            {/* Before / After labels */}
            <div style={{ position: 'absolute', bottom: '32px', left: '60px' }}>
              <div
                style={{
                  backdropFilter: 'blur(5px)',
                  backgroundColor: 'rgba(188,188,188,0.5)',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontFamily: 'var(--font)',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#f5f5f5',
                  letterSpacing: 0,
                }}
              >
                Before
              </div>
            </div>
            <div
              style={{ position: 'absolute', bottom: '32px', right: '60px' }}
            >
              <div
                style={{
                  backdropFilter: 'blur(5px)',
                  backgroundColor: 'rgba(188,188,188,0.5)',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontFamily: 'var(--font)',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#f5f5f5',
                  letterSpacing: 0,
                }}
              >
                After
              </div>
            </div>
          </div>

        </div>

          <div className="case-study-actions" aria-label="Case study actions">
            <button
              type="button"
              aria-expanded={detailsOpen}
              aria-controls="case-study-details"
              className={`case-study-action${detailsOpen ? ' is-active' : ''}`}
              onClick={() => setDetailsOpen((open) => !open)}
            >
              Details
            </button>
          <Link className="case-study-action" href="/portfolio">
            More Case Study
          </Link>
        </div>

        {detailsOpen && (
          <div
            id="case-study-details"
            className="case-study-details-panel"
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 0.82fr) minmax(0, 1.18fr)',
              gap: '24px',
              padding: '28px',
              border: '1px solid rgba(255,255,255,0.82)',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.56)',
              boxShadow:
                'inset 0 2px 1px rgba(255,255,255,0.96), 0 8px 18px rgba(0,0,0,0.08)',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  marginBottom: '12px',
                  padding: '7px 12px',
                  borderRadius: '999px',
                  background: '#000',
                  color: '#fff',
                  fontFamily: 'var(--font)',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                What We Did
              </span>
              <h3
                style={{
                  margin: 0,
                  color: '#000',
                  fontFamily: 'var(--font)',
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.08,
                }}
              >
                A complete website and growth-system rebuild.
              </h3>
            </div>

            <ul
              style={{
                display: 'grid',
                gap: '12px',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              }}
            >
              {PROJECT_DETAILS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '18px minmax(0, 1fr)',
                    gap: '12px',
                    color: 'rgba(29,29,29,0.82)',
                    fontFamily: 'var(--font)',
                    fontSize: '15px',
                    lineHeight: 1.62,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: '8px',
                      height: '8px',
                      marginTop: '0.65em',
                      borderRadius: '50%',
                      background: '#000',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
