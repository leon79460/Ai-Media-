'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

const HERO_BG_VIDEO = '/video/hero-bg.mp4';

const HEADING = 'Stop chasing leads. start attracting them.';
const SUBTEXT =
  'We combine AI-powered delivery, industry expertise, SEO, content, and conversion-focused web design to help integrators get found, gain trust, and win more high-value projects.';

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

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
      className="hero-section"
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
      <motion.video
        className="hero-bg-video"
        data-parallax
        data-parallax-speed="0.1"
        data-parallax-distance="220"
        data-parallax-scale="1.08"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
      </motion.video>

      <motion.div
        className="hero-content"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.58) 40%, rgba(0,0,0,0.45) 100%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={heroContainer}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'show'}
        data-motion-managed="true"
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
        <motion.div variants={heroItem}>
          <div
            data-parallax
            data-parallax-speed="0.12"
            data-parallax-distance="90"
            style={{ position: 'relative', display: 'inline-flex' }}
          >
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
                'inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1.5px 0 rgba(255,255,255,0.72)',
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
        </motion.div>

        <motion.div variants={heroItem}>
          <h1
            className="hero-title"
            data-parallax
            data-parallax-speed="0.08"
            data-parallax-distance="120"
            style={{
              maxWidth: '900px',
              margin: 0,
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              fontSize: 'clamp(48px, 8vw, 92px)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              color: '#f5f5f5',
              textWrap: 'balance',
              textShadow: '0 18px 34px rgba(0,0,0,0.45)',
            }}
          >
            {HEADING}
          </h1>
        </motion.div>

        <motion.div variants={heroItem}>
          <p
            data-parallax
            data-parallax-speed="0.06"
            data-parallax-distance="90"
            style={{
              maxWidth: '880px',
              margin: 0,
              fontFamily: 'var(--font-main)',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,245,245,0.94)',
              textWrap: 'pretty',
            }}
          >
            {SUBTEXT}
          </p>
        </motion.div>

        <motion.div variants={heroItem}>
          <div
            data-parallax
            data-parallax-speed="0.04"
            data-parallax-distance="80"
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
              minWidth: '140px',
              height: '40px',
              padding: '0 24px',
              borderRadius: '7px',
              border: '1px solid rgba(255,255,255,0.86)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontFamily: 'var(--font-main)',
              fontWeight: 700,
              fontSize: '12px',
              cursor: 'pointer',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.18), 0 16px 28px rgba(0,0,0,0.26)',
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
              minWidth: '140px',
              height: '40px',
              padding: '0 24px',
              borderRadius: '7px',
              border: 0,
              background: '#f7f7f7',
              color: '#060606',
              fontFamily: 'var(--font-main)',
              fontWeight: 700,
              fontSize: '12px',
              cursor: 'pointer',
              boxShadow:
                '0 14px 26px rgba(255,255,255,0.16), 0 2px 6px rgba(0,0,0,0.12), inset 0 1px 0 #ffffff',
            }}
          >
            Explore Services
          </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
