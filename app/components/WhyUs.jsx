'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';


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
    opacity: 0,
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
    opacity: 0,
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

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animation = `revealUp 1.2s ease ${delay}s forwards`;
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

function ComparisonCard({ title, items, variant, withCta, cardRef }) {
  return (
    <article ref={cardRef} className="why-card" style={styles.card}>
      <header className="why-card-header" style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>{title}</h3>
      </header>

      <ul className="why-list" style={styles.list}>
        {items.map((item, index) => (
          <li key={`${variant}-${item}-${index}`} style={styles.item}>
            <StatusIcon variant={variant} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {withCta && (
        <Link
          href="/contact"
          className="why-cta"
          style={styles.cta}
        >
          <span aria-hidden="true">→</span>
          {BTN_TEXT}
        </Link>
      )}
    </article>
  );
}

export default function WhyUs() {
  const headRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useReveal(headRef);
  useReveal(card1Ref, 0.1);
  useReveal(card2Ref, 0.2);

  return (
    <section id="whyus" className="why-section" style={styles.section}>
      <div className="why-shell" style={styles.shell}>
        <div ref={headRef} className="why-header" style={styles.header}>
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
          <h2 className="section-title" style={styles.title}>
            {SECTION_TITLE}
          </h2>
          <p className="section-sub" style={styles.sub}>
            {SECTION_SUB}
          </p>
        </div>

        <div className="why-comparison" style={styles.comparison}>
          <ComparisonCard
            title="AI Media"
            items={AI_MEDIA_FEATURES}
            variant="check"
            withCta
            cardRef={card1Ref}
          />
          <ComparisonCard
            title="Others"
            items={OTHERS_FEATURES}
            variant="cross"
            cardRef={card2Ref}
          />
        </div>
      </div>
    </section>
  );
}
