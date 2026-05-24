'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HERO_LOGO = '/logos/logo.png';
const HERO_BG_VIDEO = '/video/hero-bg.mp4';

const SUBTEXT =
  'AI Media rebuilds the online presence of AV and smart home integrators by helping them rank on Google, generate qualified leads, and grow with a smarter, more cost effective marketing system.';

export default function Hero() {
  const logoGroupRef = useRef(null);
  const flyingLogoRef = useRef(null);
  const originRef = useRef(null);

  useEffect(() => {
    const orig = logoGroupRef.current;
    const fly = flyingLogoRef.current;
    if (!orig || !fly) return;

    // Total scroll distance over which the animation runs
    const SCROLL_END = 300;
    let rafId = null;

    function captureOrigin() {
      const flyW = fly.offsetWidth;
      const flyH = fly.offsetHeight;
      // Images may not be laid out yet — defer until they have real dimensions
      if (flyW === 0 || flyH === 0) return false;
      const rect = orig.getBoundingClientRect();
      originRef.current = {
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
        flyW,
        flyH,
      };
      return true;
    }

    // Cubic ease-in-out — sharper S-curve than quad, natural deceleration at landing
    function easeInOut(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function update() {
      rafId = null;
      const scrollY = window.scrollY;

      // Lazy capture: wait until clone has real dimensions
      if (!originRef.current) {
        if (!captureOrigin()) return;
      }

      const { cx: origCx, cy: origCy, flyW, flyH } = originRef.current;
      const progress = Math.min(1, scrollY / SCROLL_END);
      const eased = easeInOut(progress);

      // ── Target: read nav logo slot center from the DOM ──
      // The nav-logo button is in the DOM even when opacity:0
      const navLogoEl = document.querySelector('.nav-logo');
      let targetCx = 94;
      let targetCy = 39; // half of 78px navbar height (fallback)
      let targetLogoHeight = 54;
      if (navLogoEl) {
        const nr = navLogoEl.getBoundingClientRect();
        targetCx = nr.left + nr.width / 2;
        targetCy = nr.top + nr.height / 2;
        const navLogoImg = navLogoEl.querySelector('img');
        targetLogoHeight = navLogoImg?.getBoundingClientRect().height || targetLogoHeight;
      }

      // ── Interpolate center position ──
      const cx = origCx + (targetCx - origCx) * eased;
      const cy = origCy + (targetCy - origCy) * eased;

      // ── Scale: shrink so logo matches navbar logo height ──
      const targetScale = targetLogoHeight / flyH;
      const scale = 1 + (targetScale - 1) * eased;

      // ── Translate so the clone's center lands at (cx, cy) ──
      // Clone is fixed at top:0 left:0; natural center is (flyW/2, flyH/2).
      // With transform-origin:center, scale keeps that center fixed, then
      // translate moves the whole element: final center = flyW/2+tx, flyH/2+ty.
      const tx = cx - flyW / 2;
      const ty = cy - flyH / 2;

      // ── Clone opacity ──
      // Fast ramp-in → hold at full opacity → gentle fade as it lands in the slot
      let cloneOpacity;
      if (progress < 0.02) {
        cloneOpacity = 0;
      } else if (eased < 0.70) {
        cloneOpacity = Math.min(1, (progress - 0.02) / 0.07);
      } else {
        cloneOpacity = Math.max(0, 1 - (eased - 0.70) / 0.30);
      }

      // ── Subtle motion blur — peaks mid-flight, clears at landing ──
      const blurPx = (eased * (1 - eased) * 4).toFixed(2);

      fly.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
      fly.style.opacity = String(cloneOpacity);
      fly.style.filter = `blur(${blurPx}px)`;

      // ── Original logo group: fade out quickly so clone takes over ──
      // Floor at 0.02 to avoid the globals.css "opacity: 0" substring trap
      const origOpacity = Math.max(0.02, 1 - progress * 4.2);
      orig.style.opacity = String(origOpacity);
      orig.style.transform = `translateY(${-progress * 44}px)`;
      orig.style.pointerEvents = progress >= 0.22 ? 'none' : '';
    }

    // Attempt immediate capture (succeeds once images have dimensions)
    captureOrigin();
    update();

    function onScroll() {
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    }

    function onResize() {
      // Force a re-capture after layout shift
      originRef.current = null;
      update();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  function scrollToSection(target) {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', '/');
  }

  return (
    <>
      {/*
        Flying clone sits OUTSIDE <section overflow:hidden> so it is never
        clipped. position:fixed keeps it above everything in the viewport.
        z-index:101 puts it above the navbar (z-index:100).
      */}
      <div
        ref={flyingLogoRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 101,
          opacity: 0,
          pointerEvents: 'none',
          willChange: 'transform, opacity',
          transformOrigin: 'center center',
        }}
      >
        <Image
          src={HERO_LOGO}
          alt=""
          width={2000}
          height={800}
          priority
          style={{
            width: 'min(100%, clamp(260px, 44vw, 470px))',
            height: 'auto',
            objectFit: 'contain',
            filter:
              'drop-shadow(0 0 10px rgba(255,255,255,0.18)) drop-shadow(0 10px 18px rgba(0,0,0,0.45))',
          }}
        />
      </div>

      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '74px',
          backgroundColor: '#020202',
        }}
      >
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
          <source src={HERO_BG_VIDEO} type="video/mp4" />
        </video>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.58) 40%, rgba(0,0,0,0.45) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '980px',
            padding: '84px 24px 110px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
            color: '#f5f5f5',
          }}
        >
          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '10%',
                right: '10%',
                top: '70%',
                height: '22px',
                borderRadius: '999px',
                background: 'rgba(0,0,0,0.7)',
                filter: 'blur(10px)',
              }}
            />
            <div
              style={{
                position: 'relative',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '0 14px 0 12px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.62)',
                background: 'linear-gradient(180deg, #111 0%, #070707 100%)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 16px rgba(0,0,0,0.45)',
              }}
            >
              <Image
                src="/AI-SVG.png"
                alt=""
                width={17}
                height={17}
                aria-hidden="true"
                style={{ width: '21px', height: '21px', objectFit: 'contain' }}
              />

              <span
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '12px',
                  color: '#f3f3f3',
                  lineHeight: 1,
                  fontWeight: 500,
                }}
              >
                AI Powered Creative Agency
              </span>
            </div>
          </div>

          <div
            id="hero-logo-group"
            ref={logoGroupRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // NO CSS transition — scroll-linked animations must update
              // instantaneously every rAF. A transition fights every scroll event.
              willChange: 'opacity, transform',
            }}
          >
            <Image
              src={HERO_LOGO}
              alt="AI Media"
              width={2000}
              height={800}
              priority
              style={{
                width: 'min(100%, clamp(260px, 44vw, 470px))',
                height: 'auto',
                objectFit: 'contain',
                filter:
                  'drop-shadow(0 0 10px rgba(255,255,255,0.18)) drop-shadow(0 10px 18px rgba(0,0,0,0.45))',
              }}
            />
          </div>

          <p
            style={{
              maxWidth: '880px',
              margin: 0,
              fontFamily: 'var(--font-main)',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: 1.55,
              color: 'rgba(245,245,245,0.94)',
            }}
          >
            {SUBTEXT}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginTop: '4px',
            }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="btn-p"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '166px',
                height: '46px',
                padding: '0 28px',
                borderRadius: '10px',
                border: 0,
                background: '#000',
                color: '#fff',
                fontFamily: 'var(--font-main)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow:
                  '0 3px 8px rgba(0,0,0,0.6), 0 12px 20px rgba(0,0,0,0.35)',
              }}
            >
              Start a Project
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="btn-s"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '166px',
                height: '46px',
                padding: '0 28px',
                borderRadius: '10px',
                border: 0,
                background: '#f5f5f5',
                color: '#060606',
                fontFamily: 'var(--font-main)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow:
                  '0 1px 3px rgba(158,158,158,0.75), inset 0 3px 1px #ffffff',
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
