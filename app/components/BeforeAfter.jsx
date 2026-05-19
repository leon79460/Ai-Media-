// ============================================================
// BeforeAfter.jsx — "We built AI Media for ourselves first"
// EDIT: TITLE, SUBTITLE, BEFORE_IMG, AFTER_IMG
// ============================================================
'use client';
import { useEffect, useRef, useState } from 'react';

// EDIT section text
const SECTION_BADGE = 'Services';
const TITLE = 'We built AI Media for ourselves first.';
const SUBTITLE =
  'Project: Automate $3M/year luxury AV integration company. We rebuilt their online presence using the exact system we sell to you.';

// ⚠️ Save to /public/ before going live
const BEFORE_IMG = 'before.png';
const AFTER_IMG = 'after.png';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50); // % from left
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
      id="works"
      style={{ backgroundColor: '#f5f5f5', padding: '100px 40px 60px' }}
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
            maxWidth: '700px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          <span className="section-badge">📊 {SECTION_BADGE}</span>
          {/* EDIT: TITLE */}
          <h2 className="section-title">{TITLE}</h2>
          {/* EDIT: SUBTITLE */}
          <p className="section-sub" style={{ fontSize: '18px' }}>
            {SUBTITLE}
          </p>
        </div>

        {/* Before / After slider card */}
        <div
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
            <img
              src={AFTER_IMG}
              alt="After"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
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
              <img
                src={BEFORE_IMG}
                alt="Before"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${100 / (sliderPos / 100)}%`,
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px 0 0 8px',
                }}
              />
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
                  letterSpacing: '-0.4px',
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
                  letterSpacing: '-0.4px',
                }}
              >
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
