'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import BeforeAfterSlider from './animation/BeforeAfterSlider';
import Reveal, { motionEase } from './animation/Reveal';
import TextReveal from './animation/TextReveal';

const SECTION_BADGE = 'Case Study';
const TITLE = 'We Tested The System On Our Own AV Company First.';
const SUBTITLE =
  'Project: Automate is a $3M/year luxury AV integration company. We rebuilt its online presence using the same website, SEO, content, and reporting system we now build for other integrators.';

const BEFORE_IMG = '/before.png';
const AFTER_IMG = '/after.png';

const BADGE_ICON_STYLE = {
  width: 18,
  height: 18,
  flex: '0 0 18px',
};

const PROJECT_DETAILS = [
  'Rebuilt the website experience to position Automate as a premium luxury AV integrator.',
  'Created a cleaner service-page structure for smart home, lighting, security, networking, and theater searches.',
  'Built the SEO foundation with local search intent, improved page hierarchy, and conversion-focused copy.',
  'Improved visual trust with stronger project imagery, clearer messaging, and a more polished first impression.',
  'Set up tracking and reporting so performance, leads, and ongoing improvements can be measured over time.',
];

export default function BeforeAfter() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="case-study"
      className="before-after-section"
      style={{ backgroundColor: '#f5f5f5', padding: '65px 40px' }}
    >
      <div
        className="before-after-shell"
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <Reveal
          effect="slide-right"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            maxWidth: '700px',
            textAlign: 'center',
          }}
        >
          <span className="section-badge">
            <Image
              src="/icons/case-studies.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              style={BADGE_ICON_STYLE}
            />
            {SECTION_BADGE}
          </span>
          <TextReveal id="case-study-title" as="h2" text={TITLE} className="section-title" delay={0.2} />
          <p className="section-sub" style={{ fontSize: '18px' }}>
            {SUBTITLE}
          </p>
        </Reveal>

        <div className="case-study-showcase">
          <Reveal
            className="before-after-card-shell"
            effect="clip-up"
            duration={0.9}
            style={{ width: '100%' }}
          >
            <div
              className="before-after-card"
              data-parallax
              data-parallax-speed="0.08"
              data-parallax-distance="120"
              data-parallax-rotate="1.2"
              style={{
                width: '100%',
                backgroundColor: '#f5f5f5',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <BeforeAfterSlider
                beforeSrc={BEFORE_IMG}
                afterSrc={AFTER_IMG}
                beforeAlt="Before"
                afterAlt="After"
              />
            </div>
          </Reveal>

          <div className="case-study-actions" aria-label="Case study actions">
            <button
              type="button"
              aria-expanded={detailsOpen}
              aria-controls="case-study-details"
              className={`case-study-action${detailsOpen ? ' is-active' : ''}`}
              onClick={() => setDetailsOpen((open) => !open)}
            >
              Details
            </button>
            <Link className="case-study-action" href="/portfolio">
              More Case Study
            </Link>
          </div>

          <AnimatePresence initial={false}>
            {detailsOpen && (
              <motion.div
                id="case-study-details"
                className="case-study-details-panel"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.32,
                  ease: motionEase,
                }}
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 0.82fr) minmax(0, 1.18fr)',
                  gap: '24px',
                  padding: '28px',
                  border: '1px solid rgba(255,255,255,0.82)',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.56)',
                  boxShadow:
                    'inset 0 2px 1px rgba(255,255,255,0.96), 0 8px 18px rgba(0,0,0,0.08)',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-flex',
                      marginBottom: '12px',
                      padding: '7px 12px',
                      borderRadius: '999px',
                      background: '#000',
                      color: '#fff',
                      fontFamily: 'var(--font)',
                      fontSize: '12px',
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    What We Did
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      color: '#000',
                      fontFamily: 'var(--font)',
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      fontWeight: 500,
                      letterSpacing: '-0.04em',
                      lineHeight: 1.08,
                    }}
                  >
                    A complete website and growth-system rebuild.
                  </h3>
                </div>

                <ul
                  style={{
                    display: 'grid',
                    gap: '12px',
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                  }}
                >
                  {PROJECT_DETAILS.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '18px minmax(0, 1fr)',
                        gap: '12px',
                        color: 'rgba(29,29,29,0.82)',
                        fontFamily: 'var(--font)',
                        fontSize: '15px',
                        lineHeight: 1.62,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: '8px',
                          height: '8px',
                          marginTop: '0.65em',
                          borderRadius: '50%',
                          background: '#000',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
