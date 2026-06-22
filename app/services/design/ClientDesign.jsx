'use client';

import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OriginButton from '../../components/OriginButton';
import Reveal from '../../components/animation/Reveal';
import StaggerContainer from '../../components/animation/StaggerContainer';
import AnimatedCard from '../../components/animation/AnimatedCard';
import TextReveal from '../../components/animation/TextReveal';
import FaqPro from '../../components/FaqPro';

const SOLUTIONS = [
  {
    image: '/services/design-uiux.png',
    title: 'UI/UX Design',
    description:
      'We design clean, user friendly website experiences that guide visitors clearly, improve trust, and help turn interest into qualified enquiries.',
  },
  {
    image: '/services/design-branding.png',
    title: 'Branding Design',
    description:
      'We create strong visual identity systems that make your business look premium, memorable, and consistent across every customer touchpoint.',
  },
  {
    image: '/services/design-graphic.png',
    title: 'Graphic Design',
    description:
      'We design professional marketing graphics for digital campaigns, social media, presentations, and branded materials that support your growth.',
  },
];

const FAQS = [
  {
    id: 'faq-1',
    question: 'How long does it take to develop an AI solution?',
    answer: 'We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs.',
  },
  {
    id: 'faq-2',
    question: 'How long does it take to develop an AI solution?',
    answer: 'Most first launches take a few weeks, while larger systems depend on the depth of content, automation, and integrations required.',
  },
  {
    id: 'faq-3',
    question: 'Do I need technical expertise to work with you?',
    answer: 'No. We manage the technical strategy, implementation, and support so you can focus on your business.',
  },
  {
    id: 'faq-4',
    question: 'Is my data safe when working with your agency?',
    answer: 'Yes. We design workflows with privacy, access control, and practical data handling standards in mind.',
  },
  {
    id: 'faq-5',
    question: 'Can AI really help my business grow?',
    answer: 'Yes. Used correctly, AI can speed up production, improve follow-up, clarify reporting, and create more consistent marketing operations.',
  },
];

export default function ClientDesign() {
  return (
    <>
      <Navbar />
      <main className="ds-page">

        {/* ── Hero ── */}
        <section className="ds-hero">
          <div className="ds-hero-card">
            <Reveal className="ds-hero-grid" delay={0.16}>
              <div className="ds-hero-copy">
                <span className="ds-badge">
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  >
                    <path d="M4 18 14 8l2 2L6 20H4v-2Z" />
                    <path d="m13 7 2-2 4 4-2 2" />
                  </svg>
                  Design
                </span>
                <h1>Strategic Design for AV &amp; Smart Home Integrators</h1>
                <p>
                  We create modern, premium, and conversion focused visuals that help
                  AV and smart home businesses build trust, communicate clearly, and
                  stand out online.
                </p>
                <OriginButton as="link" href="/contact" variant="dark" className="ds-primary-btn">
                  → Book a Strategy Call
                </OriginButton>
              </div>
              <div className="ds-hero-img">
                <Image
                  src="/services/design-hero.png"
                  alt="Strategic design for AV and smart home websites"
                  width={640}
                  height={440}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Dark Solutions Section ── */}
        <section className="ds-solutions">
          <span className="ds-deco ds-deco-1" aria-hidden="true" />
          <span className="ds-deco ds-deco-2" aria-hidden="true" />
          <div className="ds-solutions-shell">
            <Reveal className="ds-solutions-head" delay={0.16}>
              <TextReveal id="design-sol-title" as="h2" text="Design Solutions Built Around Your Brand" delay={0.2} />
              <p>
                From website experiences to brand visuals and marketing graphics, we
                design the key assets your business needs to look professional and
                consistent.
              </p>
            </Reveal>
            <StaggerContainer className="ds-solutions-grid" delay={0.2} stagger={0.22}>
              {SOLUTIONS.map((sol) => (
                <AnimatedCard className="ds-solution-card" key={sol.title}>
                  <div className="ds-solution-img">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      width={540}
                      height={260}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className="ds-solution-copy">
                    <h3>{sol.title}</h3>
                    <p>{sol.description}</p>
                    <OriginButton as="link" href="/contact" variant="dark" className="ds-solution-btn">
                      → Explore Services
                    </OriginButton>
                  </div>
                </AnimatedCard>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="ds-faq-section">
          <div className="ds-faq-shell">
            <Reveal className="ds-faq-head" delay={0.16}>
              <span className="ds-badge ds-badge-sm">
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                FAQS
              </span>
              <TextReveal id="faq-title" as="h2" text="Questions? Answers!" delay={0.2} />
              <p>Find some quick answers to the most common questions.</p>
            </Reveal>
            <Reveal delay={0.2} className="ds-faq-list">
              <FaqPro items={FAQS} defaultOpenFirst={true} />
            </Reveal>
            <Reveal className="ds-email-note" delay={0.24}>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Feel free to mail us for any enquiries :{' '}
              <a href="mailto:aimedia@support.com">aimedia@support.com</a>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
