'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedCard from './animation/AnimatedCard';
import Reveal, { motionEase } from './animation/Reveal';
import StaggerContainer from './animation/StaggerContainer';
import OriginButton from './OriginButton';

const SECTION_BADGE = 'Services';
const SECTION_TITLE_TOP = 'Everything Your AV Business';
const SECTION_TITLE_BOTTOM = 'Needs to Grow Online';
const SECTION_SUB =
  'Websites, SEO, content, automation, and reporting - built into one system that helps integrators get found, trusted, and chosen.';

const FEATURES = [
  {
    icon: '/icons/design.svg',
    title: 'Design',
    href: '/services/design',
    description:
      'Create modern visual experiences that strengthen your brand identity, improve usability, and leave a lasting impression.',
    items: ['UI/UX design', 'Branding design', 'Graphic design'],
  },
  {
    icon: '/icons/development.svg',
    title: 'Development',
    href: '/services/development',
    description:
      'Create modern visual experiences that strengthen your brand identity, improve usability, and leave a lasting impression.',
    items: ['Web Development', 'Website Maintenance'],
  },
  {
    icon: '/icons/marketing.svg',
    title: 'Marketing',
    href: '/services/marketing',
    description:
      'Increase visibility, attract qualified leads, and grow your online presence through strategic digital marketing.',
    items: ['SEO', 'Social Media', 'Email Marketing'],
  },
  {
    icon: '/icons/content.svg',
    title: 'Content',
    href: '/services/content',
    description:
      'Produce engaging content and creative media designed to capture attention, build trust, and drive engagement.',
    items: ['AI Content Creation', 'Video Editing'],
  },
];
const styles = {
  badgeIcon: {
    width: '18px',
    height: '18px',
    flex: '0 0 18px',
  }
}

function getServiceCardVariant(index) {
  const direction = index % 2 === 0 ? -1 : 1;

  return {
    hidden: {
      opacity: 0,
      x: direction * 58,
      y: 20,
      rotate: direction * 0.8,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.76, ease: motionEase },
    },
  };
}

function FeatureCard({ feature, index }) {
  return (
    <AnimatedCard className="service-card card-hover" variants={getServiceCardVariant(index)}>
      <span className="service-icon" aria-hidden="true">
        <Image
          className="service-icon-image"
          src={feature.icon}
          alt=""
          width={105}
          height={107}
          unoptimized
        />
      </span>

      <div className="service-copy">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>

      <ul>
        {feature.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {feature.href && (
        <OriginButton as="link" href={feature.href} variant="dark" className="service-card-link">
          → Explore {feature.title}
        </OriginButton>
      )}
    </AnimatedCard>
  );
}

export default function Features() {
  return (
    <section id="services" className="services-section">
      <div className="services-shell">
        <Reveal as="header" className="services-header" effect="clip-left">
          <span className="services-badge">
            <Image
              src="/icons/services.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              style={styles.badgeIcon}
            />
            {SECTION_BADGE}
          </span>

          <h2 className="services-title">
            <span>{SECTION_TITLE_TOP}</span>
            <span>{SECTION_TITLE_BOTTOM}</span>
          </h2>
          <p className="services-sub">{SECTION_SUB}</p>
        </Reveal>

        <StaggerContainer className="services-grid" delay={0.1} stagger={0.12}>
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
