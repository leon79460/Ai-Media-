// ============================================================
// components/Hero.jsx — AI Media Website
// ─────────────────────────────────────────────────────────────
// HOW TO EDIT:
// - BADGE_TEXT    → small pill text above the title
// - TITLE         → the big "AI MEDIA" text (letter by letter)
// - SUBTEXT       → paragraph below the title
// - BTN_PRIMARY   → first button (black)
// - BTN_SECONDARY → second button (light gray)
// - BG_IMAGE      → background image (save to /public/ folder)
// - LOGO_IMAGE    → the sphere logo image
// ============================================================

'use client';

import { useEffect, useRef, useState } from 'react';

// ── EDIT CONTENT HERE ────────────────────────────────────────
const BADGE_TEXT = 'AI Powered Creative Agency';
const TITLE = 'MEDIA';
const SUBTEXT =
  'AI Media rebuilds the online presence of AV and smart home integrators by helping them rank on Google, generate qualified leads, and grow with a smarter, more cost effective marketing system.';
const BTN_PRIMARY = { text: 'Start a Project', href: '#contact' };
const BTN_SECONDARY = { text: 'Explore Services', href: '#services' };

// ── IMAGES — save these to /public/ folder before going live ─
// Download each image, put it in /public/, then change the URL
// Example: "/hero-bg.jpg"  instead of the long figma URL
const BG_IMAGE =
  'https://www.figma.com/api/mcp/asset/6c5c91b4-311b-4721-8c76-faa5d758b994';
const LOGO_IMAGE = 'logo.png';
const SPARK_ICON =
  'https://www.figma.com/api/mcp/asset/abe9e0df-d1b7-4bff-856e-fce7850071ee';

// ── Canvas: draws floating particles, ripple rings, mouse sparkles ──
function HeroCanvas({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');

    // Make canvas fill the section
    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // 45 small dots that float upward slowly
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(Math.random() * 0.4 + 0.08),
      a: Math.random() * 0.28 + 0.04,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));

    // Ripple rings expand from the bottom center (like a water drop)
    const rings = [];
    const spawnRing = () =>
      rings.push({
        r: 6,
        maxR: Math.min(container.offsetWidth * 0.45, 300),
        a: 0.22,
      });
    spawnRing();
    const ringTimer = setInterval(spawnRing, 1800);

    // Mouse sparkles appear where the mouse moves
    const sparks = [];
    const onMouseMove = e => {
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < 2; i++) {
        sparks.push({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          r: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5 - 1,
          life: 1,
        });
      }
      if (sparks.length > 80) sparks.splice(0, sparks.length - 80);
    };
    container.addEventListener('mousemove', onMouseMove);

    // Animation loop
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ripple rings (bottom center)
      const cx = canvas.width / 2;
      const cy = canvas.height * 0.82;
      for (let i = rings.length - 1; i >= 0; i--) {
        const rg = rings[i];
        rg.r += 1.0;
        rg.a *= 0.983;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rg.r, rg.r * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(60,60,60,${rg.a})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        if (rg.r >= rg.maxR) rings.splice(i, 1);
      }

      // Draw floating particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.dir * 0.003;
        if (p.a > 0.32 || p.a < 0.02) p.dir *= -1;
        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15,15,15,${p.a})`;
        ctx.fill();
      }

      // Draw mouse sparkles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.06;
        s.life -= 0.03;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${s.life * 0.5})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(ringTimer);
      ro.disconnect();
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

// ── Each letter of the title animates in separately ──────────
function AnimatedTitle({ text }) {
  return (
    <h1
      className="hero-title"
      aria-label={text}
      style={{
        display: 'flex',
        fontFamily: 'var(--font-main)',
        fontWeight: 700,
        fontSize: '100px',
        letterSpacing: '-6px',
        textTransform: 'uppercase',
        lineHeight: 1.1,
        color: '#000',
        margin: 0,
        userSelect: 'none',
      }}
    >
      {text.split('').map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            opacity: 0,
            /* Each letter starts 0.07s after the previous one */
            animation: `letterUp 0.5s cubic-bezier(0.22,1,0.36,1) ${1.2 + i * 0.07}s forwards`,
            ...(ch === ' ' ? { width: '0.28em' } : {}),
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </h1>
  );
}

// ── Main Hero Section ─────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef(null);

  // After sphere spins in, switch it to float animation
  const [floating, setFloating] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFloating(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '74px' /* Space for the fixed navbar */,
        backgroundColor: '#ececec',
      }}
    >
      {/* ── Background image ─────────────────────────────────
          EDIT: Replace BG_IMAGE at the top of this file      */}
      <img
        src={BG_IMAGE}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          animation: 'fadeIn 2s ease 0.3s forwards',
          pointerEvents: 'none',
        }}
      />

      {/* Canvas with particles, ripples, mouse sparkles */}
      <HeroCanvas containerRef={containerRef} />

      {/* ── All visible content ──────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          padding: '60px 24px 80px',
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* ── Badge pill ───────────────────────────────────
            EDIT: Change BADGE_TEXT at the top               */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f5f5f5',
            border: '1px solid rgba(200,200,200,0.6)',
            borderRadius: '60px',
            padding: '6px 14px',
            height: '32px',
            boxShadow:
              '0 2px 14px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
            opacity: 0,
            animation:
              'badgePop 0.7s cubic-bezier(0.34,1.7,0.64,1) 0.6s forwards',
          }}
        >
          {/* Pulsing dot with expanding ring */}
          <div
            style={{
              position: 'relative',
              width: '8px',
              height: '8px',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#000',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '50%',
                border: '1.5px solid rgba(0,0,0,0.35)',
                animation: 'pulse 2s ease-out 2.5s infinite',
              }}
            />
          </div>
          <img
            src={SPARK_ICON}
            alt=""
            style={{ width: '16px', height: '20px' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 500,
              fontSize: '12px',
              color: '#000',
              whiteSpace: 'nowrap',
            }}
          >
            {BADGE_TEXT}
          </span>
        </div>

        {/* ── Title + Sphere row ───────────────────────────
            EDIT: Change TITLE at the top of this file        */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          {/* Sphere — spins in, then floats forever */}
          <div
            className="sphere"
            style={{
              width: '116px',
              height: '116px',
              borderRadius: '50%',
              background:
                'linear-gradient(145deg, #111 0%, #666 45%, #d8d8d8 100%)',
              position: 'relative',
              flexShrink: 0,
              boxShadow:
                '0 8px 28px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.6)',
              /* Switch from spin-in to float after 2.4 seconds */
              opacity: floating ? 1 : 0,
              animation: floating
                ? 'sphereFloat 4s ease-in-out infinite'
                : 'sphereIn 1s cubic-bezier(0.34,1.4,0.64,1) 1s forwards',
            }}
          >
            {/* Gloss highlight on sphere */}
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: 16,
                width: '30px',
                height: '18px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                filter: 'blur(4px)',
                pointerEvents: 'none',
              }}
            />
            {/* Inner dark circle with logo */}
            <div
              className="sphere-in"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, #000 0%, rgba(0,0,0,0.45) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* EDIT: Replace LOGO_IMAGE at the top of this file */}
              <img
                src={LOGO_IMAGE}
                alt="AI Media logo"
                style={{ width: '88px', height: '88px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Big animated title */}
          <AnimatedTitle text={TITLE} />
        </div>

        {/* ── Subtext paragraph ────────────────────────────
            EDIT: Change SUBTEXT at the top of this file      */}
        <p
          style={{
            fontFamily: 'var(--font-main)',
            fontWeight: 400,
            fontSize: '18px',
            color: '#000',
            lineHeight: '1.64',
            maxWidth: '708px',
            margin: 0,
            opacity: 0,
            animation: 'fadeUp 0.7s ease 1.9s forwards',
          }}
        >
          {SUBTEXT}
        </p>

        {/* ── CTA Buttons ──────────────────────────────────
            EDIT: Change BTN_PRIMARY and BTN_SECONDARY above  */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            opacity: 0,
            animation: 'fadeUp 0.7s ease 2.1s forwards',
          }}
        >
          {/* Black button */}
          <a
            href={BTN_PRIMARY.href}
            className="btn-primary"
            style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#000',
              color: '#fff',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              padding: '0 28px',
              height: '46px',
              fontFamily: 'var(--font-main)',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow:
                '0 3px 8px rgba(0,0,0,0.45), 0 12px 20px rgba(0,0,0,0.18)',
            }}
          >
            {BTN_PRIMARY.text}
            {/* Shine sweep animation on button */}
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '55%',
                height: '100%',
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                animation: 'shine 3.5s ease 3.5s infinite',
                pointerEvents: 'none',
              }}
            />
          </a>

          {/* Light gray button */}
          <a
            href={BTN_SECONDARY.href}
            className="btn-secondary"
            style={{
              backgroundColor: '#f5f5f5',
              color: '#000',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              padding: '0 28px',
              height: '46px',
              fontFamily: 'var(--font-main)',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s',
              boxShadow:
                '0 1px 3px rgba(158,158,158,0.7), inset 0 3px 1px white',
            }}
          >
            {BTN_SECONDARY.text}
          </a>
        </div>
      </div>

      {/* ── Scroll indicator at the bottom ───────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          zIndex: 2,
          opacity: 0,
          animation: 'fadeUp 0.6s ease 2.8s forwards',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '30px',
            border: '1.5px solid rgba(0,0,0,0.3)',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '7px',
              background: '#000',
              borderRadius: '2px',
              animation: 'scrollBounce 1.8s ease-in-out 3s infinite',
            }}
          />
        </div>
        <span
          style={{
            fontSize: '9px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#666',
            fontFamily: 'var(--font-main)',
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
