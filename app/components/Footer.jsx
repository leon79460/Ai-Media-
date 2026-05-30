'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

// ⚠️ Save to /public/ before going live
const BG_VIDEO = '/video/footer-bg.mp4';
const AI_LOGO_IMAGE = '/logos/hero-logo-1.png';

// EDIT these
const TAGLINE =
  'AI-First Digital Agency for AV & Smart Home Integrators. We build systems that compound over time.';
const COPYRIGHT = '© 2026 AI MEDIA · ALL RIGHTS RESERVED';

const MENU_LINKS = [
  { label: 'Blog', href: '/blog' },
  { label: 'Terms', href: '/terms-and-conditions' },
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Work', target: 'works' },
];

const SERVICE_LINKS = [
  { label: 'Design', target: 'services' },
  { label: 'Development', target: 'services' },
  { label: 'Marketing', target: 'services' },
  { label: 'Content', target: 'services' },
];

const SOCIAL_LINKS = [
  { href: 'https://x.com', label: 'X' },
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
];

function SocialIcon({ label }) {
  if (label === 'X') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M18.9 3H22l-6.78 7.75L23 21h-6.1l-4.78-6.26L6.63 21H3.5l7.24-8.27L1 3h6.25l4.31 5.73L18.9 3zm-1.07 16h1.69L6.33 4.9H4.52L17.83 19z"
          fill="#f5f5f5"
        />
      </svg>
    );
  }

  if (label === 'Instagram') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#f5f5f5" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="3.5" stroke="#f5f5f5" strokeWidth="2" fill="none" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="#f5f5f5" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 9.5h3V21H7V9.5zM8.5 8.1a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM13 9.5h2.9v1.6h.04c.4-.8 1.4-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.9V21h-3v-5.8c0-1.4-.02-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.1V21H13V9.5z"
        fill="#f5f5f5"
      />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState('');

  const footerLinkStyle = {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    fontFamily: 'var(--font)',
    fontWeight: 400,
    fontSize: '16px',
    color: '#f5f5f5',
    textDecoration: 'none',
    lineHeight: 1.64,
    whiteSpace: 'nowrap',
    transition: 'opacity 0.2s',
    padding: 0,
    textAlign: 'left',
  };

  function scrollToSection(target) {
    if (pathname !== '/') {
      sessionStorage.setItem('pendingScrollTarget', target);
      router.push('/');
      return;
    }

    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', '/');
  }

  const handleSubmit = e => {
    e.preventDefault();
    // EDIT: replace this with your real email handler
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer
      id="contact"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Dark background video */}
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      >
        <source src={BG_VIDEO} type="video/mp4" />
      </video>
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
          padding: '72px 40px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '72px',
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
                style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <Image
                  src={AI_LOGO_IMAGE}
                  alt="AI"
                  width={64}
                  height={64}
                  style={{
                    width: '64px',
                    height: '64px',
                    objectFit: 'contain',
                    flexShrink: 0,
                    filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.35))',
                  }}
                />
                <span
                  className="footer-brand"
                  style={{
                    fontFamily: 'var(--font)',
                    fontWeight: 400,
                    fontSize: '50px',
                    color: '#f5f5f5',
                    letterSpacing: 0,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  MEDIA
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
                {MENU_LINKS.map(l =>
                  l.target ? (
                    <button
                      key={l.label}
                      type="button"
                      style={footerLinkStyle}
                      onClick={() => scrollToSection(l.target)}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {l.label}
                    </button>
                  ) : (
                    <Link
                      key={l.label}
                      href={l.href}
                      style={footerLinkStyle}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {l.label}
                    </Link>
                  ),
                )}
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
                {SERVICE_LINKS.map(l =>
                  l.target ? (
                    <button
                      key={l.label}
                      type="button"
                      style={footerLinkStyle}
                      onClick={() => scrollToSection(l.target)}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      style={footerLinkStyle}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {l.label}
                    </a>
                  ),
                )}
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
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
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
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
