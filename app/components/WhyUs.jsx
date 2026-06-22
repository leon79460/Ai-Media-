'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import AnimatedCard from './animation/AnimatedCard';
import Reveal, { motionEase } from './animation/Reveal';
import TextReveal from './animation/TextReveal';
import { useDelayedInView } from './animation/viewport';
import OriginButton from './OriginButton';


const SECTION_BADGE = 'Why AI Media';
const SECTION_TITLE = 'Why We Are Different';
const SECTION_SUB =
  'See the difference between a modern AI powered workflow and traditional agency processes.';

const BTN_TEXT = 'Get Started';

const AI_MEDIA_FEATURES = [
  'Transparent pricing structure',
  'Transparent pricing structure',
  'Results focused digital strategy',
  'AI powered production workflow',
  'Strategic UI/UX focused execution',
  'Faster communication and support',
  'Built for AV & smart home businesses',
  'Scalable systems for long term growth',
  'Real performance tracking and reporting',
  'Website delivered in weeks, not months',
];

const OTHERS_FEATURES = [
  'Transparent pricing structure',
  'Transparent pricing structure',
  'Results focused digital strategy',
  'AI powered production workflow',
  'Strategic UI/UX focused execution',
  'Faster communication and support',
  'Built for AV & smart home businesses',
];

const styles = {
  section: {
    backgroundColor: '#f5f5f5',
    padding: '65px 24px 90px 24px',
  },
  shell: {
    width: '100%',
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
  header: {
    maxWidth: '640px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'var(--font)',
    fontWeight: 500,
    fontSize: '56px',
    color: '#030303',
    lineHeight: 1.18,
    textAlign: 'center',
    margin: 0,
  },
  sub: {
    fontFamily: 'var(--font)',
    fontWeight: 400,
    fontSize: '18px',
    color: '#3d3d3d',
    opacity: 0.8,
    lineHeight: 1.8,
    textAlign: 'center',
    margin: 0,
  },
  badgeIcon: {
    width: '18px',
    height: '18px',
    flex: '0 0 18px',
  },
  comparison: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '32px',
    flexWrap: 'wrap',
  },
  card: {
    width: '100%',
    maxWidth: '430px',
    flex: '0 1 430px',
    display: 'flex',
    flexDirection: 'column',
    padding: '36px 34px 28px',
    border: '1px solid rgba(255,255,255,0.88)',
    borderRadius: '18px',
    backgroundColor: '#f7f7f7',
    color: '#030303',
    boxShadow:
      '0 2px 3px rgba(0, 0, 0, 0.04), 0 16px 30px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.96)',
  },
  cardHeader: {
    paddingBottom: '22px',
    borderBottom: '2px dotted rgba(3, 3, 3, 0.14)',
    textAlign: 'center',
  },
  cardTitle: {
    fontFamily: 'var(--font)',
    fontSize: '38px',
    fontWeight: 500,
    lineHeight: 1.08,
    letterSpacing: '-0.04em',
    color: '#030303',
    margin: 0,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    listStyle: 'none',
    padding: '26px 0 0',
    margin: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    color: 'rgba(29, 29, 29, 0.74)',
    fontFamily: 'var(--font)',
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: 1.55,
  },
  icon: {
    width: '16px',
    height: '16px',
    flex: '0 0 16px',
    marginTop: '3px',
  },
  cta: {
    width: '100%',
    minHeight: '52px',
    marginTop: '28px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: '10px',
    backgroundColor: '#030303',
    color: '#f5f5f5',
    fontFamily: 'var(--font)',
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
    boxShadow:
      '0 14px 20px rgba(0,0,0,0.28), 0 3px 6px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.16)',
  },
};

function StatusIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={styles.icon}
    >
      <path
        d="M3.1 8.25L6.1 11.2L12.9 4.8"
        stroke="rgba(3, 3, 3, 0.42)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComparisonCard({
  title,
  items,
  variant,
  withCta,
  delay = 0,
  direction = 1,
}) {
  const shouldReduceMotion = useReducedMotion();
  const listRef = useRef(null);
  const listInView = useDelayedInView(listRef);
  const [listEntered, setListEntered] = useState(false);
  const listState = listInView
    ? 'show'
    : listEntered
      ? 'exited'
      : 'hidden';
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: direction * 64,
      y: 18,
      scale: 0.94,
      rotate: direction * 1.2,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: variant === 'check' ? 0.82 : 0.72,
        ease: motionEase,
        delay,
      },
    },
  };

  useEffect(() => {
    if (!listInView) return undefined;

    const frame = requestAnimationFrame(() => setListEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [listInView]);

  return (
    <AnimatedCard
      className={`why-card is-${variant}`}
      style={styles.card}
      delay={delay}
      standalone
      variants={cardVariants}
    >
      <header className="why-card-header" style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>{title}</h3>
      </header>

      <motion.ul
        ref={listRef}
        className="why-list"
        style={styles.list}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? undefined : listState}
        variants={{
          hidden: {},
          show: {
            transition: {
              delayChildren: delay + 0.18,
              staggerChildren: 0.045,
            },
          },
          exited: {
            transition: {
              staggerChildren: 0.03,
              staggerDirection: -1,
            },
          },
        }}
      >
        {items.map((item, index) => (
          <motion.li
            key={`${variant}-${item}-${index}`}
            style={styles.item}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.48, ease: motionEase },
              },
              exited: {
                opacity: 0.35,
                y: 8,
                transition: { duration: 0.32, ease: motionEase },
              },
            }}
          >
            <StatusIcon variant={variant} />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>

      {withCta && (
        <OriginButton
          as="link"
          href="/contact"
          variant="dark"
          className="why-cta"
          style={styles.cta}
        >
          <span aria-hidden="true">→</span>
          {BTN_TEXT}
        </OriginButton>
      )}
    </AnimatedCard>
  );
}

export default function WhyUs() {
  return (
    <section id="whyus" className="why-section" style={styles.section}>
      <div className="why-shell" style={styles.shell}>
        <Reveal className="why-header" effect="slide-right" style={styles.header}>
          <span className="section-badge">
            <Image
              src="/icons/why-us.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              style={styles.badgeIcon}
            />
            {SECTION_BADGE}
          </span>
          <TextReveal id="whyus-title" as="h2" text={SECTION_TITLE} className="section-title" style={styles.title} delay={0.2} />
          <p className="section-sub" style={styles.sub}>
            {SECTION_SUB}
          </p>
        </Reveal>

        <div className="why-comparison" style={styles.comparison}>
          <ComparisonCard
            title="AI Media"
            items={AI_MEDIA_FEATURES}
            variant="check"
            withCta
            delay={0}
            direction={-1}
          />
          <ComparisonCard
            title="Others"
            items={OTHERS_FEATURES}
            variant="cross"
            delay={0.15}
            direction={1}
          />
        </div>
      </div>
    </section>
  );
}
