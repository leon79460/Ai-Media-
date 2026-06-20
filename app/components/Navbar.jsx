'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import OriginButton from './OriginButton';

const LINKS = [
  { label: 'Home', target: 'home' },
  { label: 'Services', target: 'services' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'About us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blogs', href: '/blog' },
];
const MOBILE_LINKS = [...LINKS];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    const update = () => setIsScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  function scrollToSection(target) {
    setMobileOpen(false);

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
      className={`site-nav${isScrolled ? ' is-scrolled' : ''}`}
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
        background: isScrolled ? '#F0F0F0' : '#F0F0F0',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        boxShadow: isScrolled
          ? '0 14px 34px rgba(0,0,0,0.08)'
          : '0 0 0 rgba(0,0,0,0)',
        transition:
          'background 0.34s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.34s cubic-bezier(0.33, 1, 0.68, 1)',
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
          <video
            src="/logos/Logo.mp4"
            autoPlay
            loop
            muted
            playsInline
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
            border: 0,
            background: 'transparent',
            boxShadow: 'none',
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
                onClick={() => setMobileOpen(false)}
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
        </div>

        {/* Right actions */}
        <div className="nav-actions">
          {!isMobileNav && (
            <>
            <OriginButton
                as="a"
                href="https://app.aimedia.design"
                target="_blank"
                variant="ghost"
                className="nav-cta nav-login-cta nav-desktop-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: '#060606',
                  textDecoration: 'none',
                  borderRadius: '7px',
                  border: 0,
                  background: 'transparent',
                  padding: '0 12px',
                  height: '40px',
                  fontFamily: 'var(--font-main)',
                  fontWeight: 600,
                  fontSize: '15px',
                }}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1], delay: 0.76 }}
              >
                Login
              </OriginButton>
              <OriginButton
                as="link"
                href="/contact"
                variant="dark"
                className="nav-cta nav-start-cta nav-desktop-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minWidth: '140px',
                  backgroundColor: '#050505',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '7px',
                  border: '1px solid rgba(255,255,255,0.86)',
                  padding: '0 24px',
                  height: '40px',
                  fontFamily: 'var(--font-main)',
                  fontWeight: 600,
                  fontSize: '15px',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), 0 16px 28px rgba(0,0,0,0.26)',
                }}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.64, ease: [0.16, 1, 0.3, 1], delay: 0.68 }}
              >
                Get Started
              </OriginButton>
              
            </>
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
          <OriginButton
            as="a"
            href="https://app.aimedia.design"
            target="_blank"
            variant="light"
            className="nav-mobile-cta nav-mobile-login-cta"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4px',
              minHeight: '40px',
              borderRadius: '7px',
              fontSize: '12px',
              border: 0,
              background: '#f7f7f7',
              color: '#060606',
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 14px 26px rgba(255,255,255,0.16), 0 2px 6px rgba(0,0,0,0.12), inset 0 1px 0 #ffffff',
            }}
          >
            Login
          </OriginButton>
          <OriginButton
            as="link"
            href="/contact"
            variant="dark"
            className="nav-mobile-cta nav-mobile-start-cta"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4px',
              minHeight: '40px',
              borderRadius: '7px',
              fontSize: '12px',
              border: '1px solid rgba(255,255,255,0.86)',
              background: '#050505',
              color: '#fff',
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), 0 16px 28px rgba(0,0,0,0.26)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
            }}
          >
            Get Started
          </OriginButton>
        </div>
      </div>
    </nav>
  );
}
