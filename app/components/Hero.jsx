'use client';

import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import OriginButton from './OriginButton';
import { motionEase } from './animation/Reveal';
import styles from './Hero.module.css';

const HERO_BG_VIDEO = '/video/hero-bg.mp4';

const HEADING_LINES = [
  'Stop chasing leads.',
  'Start attracting them.',
];

const SUBTEXT =
  'We combine AI-powered delivery, industry expertise, SEO, content, and conversion-focused web design to help integrators get found, gain trust, and win more high-value projects.';

function BlurFade({
  children,
  delay = 0,
  duration = 1.35,
  yOffset = 8,
  blur = '16px',
  className,
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          y: yOffset,
          opacity: 0,
          filter: `blur(${blur})`,
        },
        visible: {
          y: -yOffset,
          opacity: 1,
          filter: 'blur(0px)',
        },
      }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const aiaBadgeRef = useRef(null);
  const badgeContainerRef = useRef(null);

  const applyColor = () => {
    if (badgeContainerRef.current) {
      badgeContainerRef.current.style.setProperty('color', '#f3f3f3', 'important');
    }
    if (aiaBadgeRef.current) {
      aiaBadgeRef.current.style.setProperty('color', '#f3f3f3', 'important');
    }
  };

  useLayoutEffect(() => {
    // Apply color on mount and when pathname changes
    applyColor();

    // Use requestAnimationFrame to apply after browser repaint
    const frameId = requestAnimationFrame(() => {
      applyColor();
      // Apply again after a small delay to catch animation overrides
      setTimeout(applyColor, 50);
    });

    return () => cancelAnimationFrame(frameId);
  }, [pathname]);

  useEffect(() => {
    // Additional effect to catch late-running animations
    const timers = [
      setTimeout(applyColor, 100),
      setTimeout(applyColor, 300),
      setTimeout(applyColor, 600),
      setTimeout(applyColor, 1000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

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
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: motionEase }}
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
        transition={{ duration: 0.78, ease: motionEase, delay: 0.16 }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.58) 40%, rgba(0,0,0,0.45) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
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
        <BlurFade delay={0.12} duration={1.15} yOffset={8} blur="10px">
          <div
            data-parallax
            data-parallax-speed="0.12"
            data-parallax-distance="90"
            style={{ position: 'relative', display: 'inline-flex' }}
          >
            <div
              ref={badgeContainerRef}
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
                ref={aiaBadgeRef}
                className={`hero-ai-badge-text ${styles.aiaBadgeText}`}
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
        </BlurFade>

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
            fontSize: 'clamp(42px, 8vw, 80px)',
            lineHeight: 1.25,
            letterSpacing: '0',
            color: '#f5f5f5',
            textWrap: 'balance',
            textShadow: '0 18px 34px rgba(0,0,0,0.45)',
          }}
        >
          {HEADING_LINES.map((line, index) => (
            <BlurFade
              key={line}
              delay={0.28 + index * 0.22}
              duration={1.35}
              yOffset={10}
              blur="16px"
            >
              <span style={{ display: 'block' }}>
                {line}
              </span>
            </BlurFade>
          ))}
        </h1>

        <BlurFade delay={0.78} duration={1.2} yOffset={8} blur="12px">
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
        </BlurFade>

        <BlurFade delay={0.94} duration={1.1} yOffset={8} blur="8px">
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
            <OriginButton
              variant="outline-light"
              onClick={() => scrollToSection('pricing')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '140px',
                height: '40px',
                padding: '0 24px',
                borderRadius: '7px',
                border: '1px solid rgba(255,255,255,0.86)',
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: '#fff',
                fontFamily: 'var(--font-main)',
                fontWeight: 700,
                fontSize: '12px',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.18), 0 16px 28px rgba(0,0,0,0.26)',
              }}
            >
              Start a Project
            </OriginButton>

            <OriginButton
              variant="light"
              onClick={() => scrollToSection('services')}
              fillColor="#050505"
              hoverTextColor="#f5f5f5"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '140px',
                height: '40px',
                padding: '0 24px',
                borderRadius: '7px',
                border: 0,
                backgroundColor: '#f7f7f7',
                color: '#060606',
                fontFamily: 'var(--font-main)',
                fontWeight: 700,
                fontSize: '12px',
                boxShadow:
                  '0 14px 26px rgba(255,255,255,0.16), 0 2px 6px rgba(0,0,0,0.12), inset 0 1px 0 #ffffff',
              }}
            >
              Explore Services
            </OriginButton>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
