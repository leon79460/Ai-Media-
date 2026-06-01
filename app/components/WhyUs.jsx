'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';


const SECTION_BADGE = 'WHY AI MEDIA';
const SECTION_TITLE = 'Why We are Different';
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
    padding: '100px 24px',
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
    alignItems: 'stretch',
    gap: '24px',
    flexWrap: 'wrap',
  },
  card: {
    width: '100%',
    maxWidth: '386px',
    minHeight: '648px',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 24px 22px',
    border: '1px solid rgba(255,255,255,0.78)',
    borderRadius: '12px',
    backgroundColor: '#f5f5f5',
    color: '#030303',
    opacity: 0,
    boxShadow:
      '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.06), 0 32px 56px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.92)',
  },
  cardHeader: {
    paddingBottom: '9px',
    borderBottom: '1px solid #2f2f2f',
  },
  cardTitle: {
    fontFamily: 'var(--font)',
    fontSize: '25px',
    fontWeight: 700,
    lineHeight: 1.28,
    letterSpacing: '-0.025em',
    color: '#030303',
    margin: 0,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
    listStyle: 'none',
    padding: '34px 0 0',
    margin: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#1d1d1d',
    fontFamily: 'var(--font)',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  icon: {
    width: '18px',
    height: '18px',
    flex: '0 0 18px',
  },
  cta: {
    width: '100%',
    minHeight: '46px',
    marginTop: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '9px',
    backgroundColor: '#030303',
    color: '#f5f5f5',
    fontFamily: 'var(--font)',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
    boxShadow:
      '0 12px 16px rgba(0,0,0,0.22), 0 2px 4px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.16)',
  },
};

function StatusIcon({ variant }) {
  const isCheck = variant === 'check';

  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={styles.icon}
    >
      <circle cx="9" cy="9" r="8.25" stroke="#030303" strokeWidth="1.3" />
      {isCheck ? (
        <path
          d="M5.3 9.2L7.6 11.4L12.6 6.6"
          stroke="#030303"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <>
          <path
            d="M6.4 6.4L11.6 11.6"
            stroke="#030303"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M11.6 6.4L6.4 11.6"
            stroke="#030303"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </>
      )}
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
          el.style.animation = `revealUp 0.6s ease ${delay}s forwards`;
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
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', '/');
  }

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
        <button
          type="button"
          className="why-cta"
          onClick={scrollToContact}
          style={styles.cta}
        >
          <span aria-hidden="true">→</span>
          {BTN_TEXT}
        </button>
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
