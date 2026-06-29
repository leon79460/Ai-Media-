'use client';

import Reveal from './animation/Reveal';
import TextReveal from './animation/TextReveal';
import StaggerContainer from './animation/StaggerContainer';
import AnimatedCard from './animation/AnimatedCard';

const BENEFIT_ICONS = [
  (
    <svg key="trust" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 5.2 6.1v5.2c0 4.2 2.8 7.7 6.8 9.2 4-1.5 6.8-5 6.8-9.2V6.1L12 3.5Z" />
      <path d="m8.8 12.1 2 2 4.4-4.4" />
    </svg>
  ),
  (
    <svg key="target" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3" />
    </svg>
  ),
  (
    <svg key="spark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 13.9 8l4.6 1.9-4.6 1.9L12 16.5l-1.9-4.7-4.6-1.9L10.1 8 12 3.5Z" />
      <path d="m18 15 .8 1.9 1.7.7-1.7.7L18 20l-.8-1.7-1.7-.7 1.7-.7L18 15Z" />
    </svg>
  ),
  (
    <svg key="growth" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 18.5h15" />
      <path d="M6.5 15.5v-4" />
      <path d="M11.5 15.5v-8" />
      <path d="M16.5 15.5v-6" />
      <path d="m6.5 11.5 5-4 5 2" />
    </svg>
  ),
];

export default function ServiceBenefitsSection({
  badge,
  heading,
  description,
  cards,
}) {
  return (
    <section className="ds-benefits-section">
      <div className="ds-benefits-shell">
        <div className="ds-benefits-head">
          <Reveal as="span" className="ds-badge ds-badge-sm" delay={0.04} duration={0.9} yOffset={10} blur="12px">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m20 6-11 11-5-5" />
            </svg>
            {badge}
          </Reveal>
          <TextReveal
            as="h2"
            text={heading}
            delay={0.36}
            stagger={0.11}
          />
          <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
            {description}
          </Reveal>
        </div>

        <StaggerContainer className="ds-benefits-grid" delay={0.2} stagger={0.16}>
          {cards.map((card, index) => (
            <AnimatedCard className="ds-benefit-card card-hover" key={card.title}>
              <span className="ds-benefit-mark" aria-hidden="true">
                {card.icon || BENEFIT_ICONS[index % BENEFIT_ICONS.length]}
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </AnimatedCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
