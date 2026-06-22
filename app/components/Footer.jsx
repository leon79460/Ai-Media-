'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Reveal from './animation/Reveal';
import OriginButton from './OriginButton';

const BG_VIDEO = '/video/footer-bg.mp4';


const TAGLINE =
  'AI-First Digital Agency for AV & Smart Home Integrators. We build systems that compound over time.';
const COPYRIGHT = '© 2026 AI MEDIA · ALL RIGHTS RESERVED';

const MENU_LINKS = [
  { label: 'Blog', href: '/blog' },
  { label: 'Terms', href: '/terms-and-conditions' },
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Careers', href: '/careers' },
];

const SERVICE_LINKS = [
  { label: 'Design', target: 'services' },
  { label: 'Development', target: 'services' },
  { label: 'Marketing', target: 'services' },
  { label: 'Content', target: 'services' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/people/AI-Media/61588554962980/', label: 'Facebook' },
  { href: 'https://www.instagram.com/ai.media.design/', label: 'Instagram' },
  { href: 'https://www.youtube.com/@AIMedia.Design', label: 'YouTube' },
  { href: 'https://www.linkedin.com/company/ai-media-design/', label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@aimedia_co', label: 'TikTok' },
];

function SocialIcon({ label }) {
  if (label === 'Facebook') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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

  if (label === 'YouTube') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#f5f5f5" />
      </svg>
    );
  }

  if (label === 'LinkedIn') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (label === 'TikTok') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    );
  }

  return null;
}

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [submittedOpen, setSubmittedOpen] = useState(false);

  const footerLinkStyle = {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    fontFamily: 'var(--font)',
    fontWeight: 400,
    fontSize: '16px',
    color: 'rgb(197 192 192)',
    textDecoration: 'none',
    lineHeight: 1.64,
    whiteSpace: 'nowrap',
    transition: 'color 0.2s',
    padding: 0,
    textAlign: 'left',
  };

  const handleFooterLinkEnter = e => {
    e.currentTarget.style.color = '#ffffff';
  };

  const handleFooterLinkLeave = e => {
    e.currentTarget.style.color = 'rgb(197 192 192)';
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
    if (!email.trim()) return;

    setEmail('');
    setSubmittedOpen(true);
  };

  return (
    <footer
      id="contact"
      className="site-footer"
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
      <Reveal
        className="site-footer-inner"
        effect="clip-up"
        duration={0.76}
        amount={0.12}
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
            {/* Logo */}
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <button
                  type="button"
                  aria-label="AI Media home"
                  className="nav-logo"
                  onClick={() => scrollToSection('home')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: 0,
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: 0,
                    opacity: 1,
                    transform: 'translateY(0)',
                    pointerEvents: 'auto',
                  }}
                >
                  <span
                    style={{
                      position: 'relative',
                      display: 'block',
                      width: '170px',
                      height: '54px',
                      maxWidth: '170px',
                    }}
                  >
                    <Image
                      src="/logos/logo-2.png"
                      alt="AI Media"
                      fill
                      sizes="170px"
                      style={{
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </span>
                </button>
              </div>

              {/* Tagline — EDIT: TAGLINE */}
              <p
                style={{
                  fontFamily: 'var(--font)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgb(197 192 192)',
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
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {/* Email field */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#2b2b2b',
                    height: '46px',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font)',
                      fontWeight: 400,
                      fontSize: '15px',
                      color: '#f5f5f5',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                {/* Submit button */}
                <OriginButton
                  type="submit"
                  variant="custom"
                  fillColor="#050505"
                  hoverTextColor="#ffffff"
                  className="footer-submit-button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    color: '#030303',
                    border: 'none',
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px',
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                    borderRadius: '0 4px 4px 0',
                    padding: '0 20px',
                    height: '46px',
                    flexShrink: 0,
                    fontFamily: 'var(--font)',
                    fontWeight: 500,
                    fontSize: '15px',
                  }}
                >
                  Submit
                </OriginButton>
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
                      onMouseEnter={handleFooterLinkEnter}
                      onMouseLeave={handleFooterLinkLeave}
                    >
                      {l.label}
                    </button>
                  ) : (
                    <Link
                      key={l.label}
                      href={l.href}
                      style={footerLinkStyle}
                      onMouseEnter={handleFooterLinkEnter}
                      onMouseLeave={handleFooterLinkLeave}
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
                      onMouseEnter={handleFooterLinkEnter}
                      onMouseLeave={handleFooterLinkLeave}
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      style={footerLinkStyle}
                      onMouseEnter={handleFooterLinkEnter}
                      onMouseLeave={handleFooterLinkLeave}
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
          className="site-footer-bottom"
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
            className="site-footer-copy"
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
          <div
            className="site-footer-socials"
            style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
          >
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                className="site-footer-social-link"
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
      </Reveal>

      {submittedOpen && (
        <div
          className="footer-subscribe-modal-backdrop"
          role="presentation"
          onClick={() => setSubmittedOpen(false)}
        >
          <div
            className="footer-subscribe-modal"
            role="dialog"
            aria-modal="true"
            aria-live="polite"
            aria-label="Subscription submitted"
            onClick={e => e.stopPropagation()}
          >
            <p>Submitted</p>
            <OriginButton
              variant="custom"
              fillColor="#050505"
              hoverTextColor="#ffffff"
              aria-label="Close subscription confirmation"
              onClick={() => setSubmittedOpen(false)}
              style={{
                minWidth: '86px',
                height: '36px',
                border: 0,
                borderRadius: '8px',
                background: '#ffffff',
                color: '#030303',
                fontFamily: 'var(--font)',
                fontSize: '13px',
                fontWeight: 700,
              }}
            >
              OK
            </OriginButton>
          </div>
        </div>
      )}
    </footer>
  );
}
