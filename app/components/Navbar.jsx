'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { label: 'Home', target: 'home' },
  { label: 'Services', target: 'services' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'About us', href: '/about' },
];

const MORE_LINKS = [
  { label: 'Contact', href: '/contact' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blogs', href: '/blog' },
];
const MOBILE_LINKS = [...LINKS, ...MORE_LINKS];

export default function Navbar() {
  const moreRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const router = useRouter();
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1024px)');
    const update = () => setIsMobileNav(media.matches);
    const frameId = requestAnimationFrame(update);
    media.addEventListener('change', update);
    return () => {
      cancelAnimationFrame(frameId);
      media.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    function closeMoreOnOutsideClick(event) {
      if (!moreRef.current?.contains(event.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener('pointerdown', closeMoreOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeMoreOnOutsideClick);
  }, []);

  function scrollToSection(target) {
    setMobileOpen(false);
    setMoreOpen(false);

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

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '78px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        background: 'rgba(245,245,245,0.82)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        animation: 'navDown 0.72s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      <div className="nav-shell">
        {/* Logo — hidden until user scrolls past the hero logo on the home page */}
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
          <Image
            src="/logos/logo.png"
            alt="AI Media"
            width={200}
            height={200}
            priority
            style={{
              width: 'auto',
              height: '54px',
              maxWidth: '170px',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </button>

        {/* Desktop pill nav */}
        <div
          className="nav-links"
          style={{
            borderColor: 'rgba(0,0,0,0.08)',
            background: 'rgba(255,255,255,0.72)',
            boxShadow: '0 12px 28px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.88)',
          }}
        >
          {LINKS.map((link, i) => {
            const isActive =
              (pathname === '/' && i === 0) ||
              (link.href && pathname === link.href);

            const commonStyle = {
              padding: '8px 16px',
              border: 0,
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'var(--font-main)',
              fontWeight: isActive ? 600 : 400,
              fontSize: '15px',
              color: isActive ? '#030303' : 'rgba(3,3,3,0.62)',
              textDecoration: 'none',
              borderRadius: '6px',
              transition: 'background 0.2s cubic-bezier(0.33, 1, 0.68, 1), color 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
              opacity: 0,
              animation: `linkDrop 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${0.22 + i * 0.07}s forwards`,
            };

            return link.href ? (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link"
                onClick={() => { setMobileOpen(false); setMoreOpen(false); }}
                style={commonStyle}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                type="button"
                className="nav-link"
                onClick={() => scrollToSection(link.target)}
                style={commonStyle}
              >
                {link.label}
              </button>
            );
          })}

          {/* More dropdown */}
          <div
            ref={moreRef}
            className={`nav-more${moreOpen ? ' is-open' : ''}`}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
            style={{
              position: 'relative',
              opacity: 0,
              animation: `linkDrop 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${0.22 + LINKS.length * 0.07}s forwards`,
            }}
          >
            <button
              type="button"
              className="nav-link nav-more-trigger"
              aria-haspopup="menu"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((o) => !o)}
              onBlur={(e) => {
                if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                  setMoreOpen(false);
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '8px 16px',
                border: 0,
                background: 'transparent',
                color: 'rgba(3,3,3,0.62)',
                cursor: 'pointer',
                fontFamily: 'var(--font-main)',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: 1,
                borderRadius: '6px',
                transition: 'background 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
              }}
            >
              More
              <span className="nav-more-caret" aria-hidden="true" />
            </button>

            <div className="nav-more-menu nav-more-menu-light" role="menu">
              {MORE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  role="menuitem"
                  onClick={() => setMoreOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right actions */}
        <div className="nav-actions">
          {!isMobileNav && (
            <Link
              href="/"
              className="nav-cta nav-desktop-cta"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#050505',
                color: '#f5f5f5',
                textDecoration: 'none',
                borderRadius: '999px',
                padding: '0 22px',
                height: '42px',
                fontFamily: 'var(--font-main)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'opacity 0.22s ease, transform 0.26s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 3px 10px rgba(0,0,0,0.22)',
                opacity: 0,
                animation: 'btnPop 0.54s cubic-bezier(0.34, 1.56, 0.64, 1) 0.68s forwards',
              }}
            >
              Get Started
            </Link>
          )}

          <button
            className={`nav-mobile-toggle nav-mobile-toggle-light${mobileOpen ? ' is-open' : ''}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>

        {/* Mobile panel */}
        <div className={`nav-mobile-panel nav-mobile-panel-light${mobileOpen ? ' is-open' : ''}`}>
          {MOBILE_LINKS.map((link) =>
            link.target ? (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToSection(link.target)}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <button
            type="button"
            className="nav-mobile-cta"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
