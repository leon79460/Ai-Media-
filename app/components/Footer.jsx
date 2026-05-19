// ============================================================
// Footer.jsx — Exact Figma match
// EDIT: TAGLINE, COPYRIGHT, MENU_LINKS, SERVICE_LINKS
// EDIT: SOCIAL_LINKS — replace # with your real social URLs
// ============================================================
'use client';
import { useState } from 'react';

// ⚠️ Save to /public/ before going live
const BG_IMAGE = 'footer-bg.png';
const LOGO_IMAGE = 'logo.png';
const ICON_X =
  'https://www.figma.com/api/mcp/asset/692032a9-1b13-44d9-9fc0-700b191bc32c';
const ICON_INSTA =
  'https://www.figma.com/api/mcp/asset/620475f7-c1ee-4e71-89fc-7e93cb9d6831';
const ICON_LINKEDIN =
  'https://www.figma.com/api/mcp/asset/2cec57d9-b83e-4f9e-88a7-c7a2ff3cb4b3';

// EDIT these
const TAGLINE =
  'AI-First Digital Agency for AV & Smart Home Integrators. We build systems that compound over time.';
const COPYRIGHT = '© 2026 AI MEDIA · ALL RIGHTS RESERVED';

const MENU_LINKS = [
  { label: 'Blog', href: '#blogs' },
  { label: 'Work', href: '#works' },
];

const SERVICE_LINKS = [
  { label: 'Design', href: '#services' },
  { label: 'Development', href: '#services' },
  { label: 'Marketing', href: '#services' },
  { label: 'Content', href: '#services' },
  { label: 'Privacy', href: '#' },
];

const SOCIAL_LINKS = [
  { icon: ICON_X, href: 'https://x.com', label: 'X' },
  { icon: ICON_INSTA, href: 'https://instagram.com', label: 'Instagram' },
  { icon: ICON_LINKEDIN, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // EDIT: replace this with your real email handler
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer
      id="contact"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '699px' }}
    >
      {/* Dark background image */}
      <img
        src={BG_IMAGE}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
      {/* Semi-transparent blur overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />

      {/* All content sits above the background */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '118px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '124px',
        }}
      >
        {/* ── TOP ROW: left content + right nav columns ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '60px',
          }}
        >
          {/* LEFT: Logo + tagline + email subscribe form */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '34px',
              maxWidth: '349px',
              minWidth: '280px',
            }}
          >
            {/* Logo + brand name */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
              >
                {/* Mini sphere */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to bottom, #000, #fff)',
                    position: 'relative',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(122,122,122,0.4)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: '53px',
                      height: '53px',
                      borderRadius: '50%',
                      background:
                        'linear-gradient(to right, #000, rgba(0,0,0,0.4))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={LOGO_IMAGE}
                      alt="AI Media"
                      style={{
                        width: '49px',
                        height: '49px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
                {/* Brand name — EDIT to change */}
                <span
                  style={{
                    fontFamily: 'var(--font)',
                    fontWeight: 500,
                    fontSize: 'clamp(28px,4vw,64px)',
                    color: '#f5f5f5',
                    letterSpacing: '-2px',
                    textTransform: 'uppercase',
                    lineHeight: 1.64,
                    whiteSpace: 'nowrap',
                  }}
                >
                  AI Media
                </span>
              </div>

              {/* Tagline — EDIT: TAGLINE */}
              <p
                style={{
                  fontFamily: 'var(--font)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#f5f5f5',
                  lineHeight: 1.64,
                }}
              >
                {TAGLINE}
              </p>
            </div>

            {/* Email subscribe form */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
            >
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', alignItems: 'flex-end', gap: '34px' }}
              >
                {/* Email field */}
                <div
                  style={{
                    flex: 1,
                    borderBottom: '1px solid rgba(245,245,245,0.5)',
                    paddingBottom: '14px',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font)',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#f5f5f5',
                      width: '100%',
                    }}
                  />
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#f5f5f5',
                    color: '#030303',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0 20px',
                    height: '46px',
                    flexShrink: 0,
                    fontFamily: 'var(--font)',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  → Submit
                </button>
              </form>
              {/* Small text below form */}
              <p
                style={{
                  fontFamily: 'var(--font)',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#f5f5f5',
                  lineHeight: 1.64,
                  opacity: 0.8,
                }}
              >
                {TAGLINE}
              </p>
            </div>
          </div>

          {/* RIGHT: Menu + Services nav columns */}
          <div
            style={{
              display: 'flex',
              gap: '100px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Menu — EDIT: MENU_LINKS */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font)',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#f5f5f5',
                  lineHeight: 1.4,
                }}
              >
                Menu
              </span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {MENU_LINKS.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: 'var(--font)',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#f5f5f5',
                      textDecoration: 'none',
                      lineHeight: 1.64,
                      whiteSpace: 'nowrap',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services — EDIT: SERVICE_LINKS */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font)',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: '#f5f5f5',
                  lineHeight: 1.4,
                }}
              >
                Services
              </span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {SERVICE_LINKS.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: 'var(--font)',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#f5f5f5',
                      textDecoration: 'none',
                      lineHeight: 1.64,
                      whiteSpace: 'nowrap',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROW: copyright + social icons ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* Copyright — EDIT: COPYRIGHT */}
          <p
            style={{
              fontFamily: 'var(--font)',
              fontWeight: 500,
              fontSize: '16px',
              color: '#f5f5f5',
              opacity: 0.9,
              whiteSpace: 'nowrap',
            }}
          >
            {COPYRIGHT}
          </p>

          {/* Social icon buttons — EDIT: SOCIAL_LINKS */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: '1px solid #f5f5f5',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 9px rgba(255,255,255,0.5)',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.backgroundColor =
                    'rgba(255,255,255,0.22)')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.backgroundColor =
                    'rgba(255,255,255,0.1)')
                }
              >
                <img
                  src={s.icon}
                  alt={s.label}
                  style={{
                    width: '16px',
                    height: '16px',
                    objectFit: 'contain',
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
