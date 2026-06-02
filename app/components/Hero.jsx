'use client';

import Image from 'next/image';

const HERO_BG_VIDEO = '/video/hero-bg.mp4';

const HEADING = 'Stop Chasing Leads. Start Attracting Them.';
const SUBTEXT =
  'We combine AI-powered delivery, industry expertise, SEO, content, and conversion-focused web design to help integrators get found, gain trust, and win more high-value projects.';

export default function Hero() {
  function scrollToSection(target) {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', '/');
  }

  return (
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

        <h1
          style={{
            maxWidth: '900px',
            margin: 0,
            fontFamily: 'var(--font-main)',
            fontWeight: 600,
            fontSize: 'clamp(48px, 8vw, 92px)',
            lineHeight: 0.96,
            letterSpacing: '-0.055em',
            color: '#f5f5f5',
            textWrap: 'balance',
            textShadow: '0 18px 34px rgba(0,0,0,0.45)',
          }}
        >
          {HEADING}
        </h1>

        <p
          style={{
            maxWidth: '880px',
            margin: 0,
            fontFamily: 'var(--font-main)',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.55,
            color: 'rgba(245,245,245,0.94)',
            textWrap: 'pretty',
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
            onClick={() => scrollToSection('pricing')}
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
  );
}
