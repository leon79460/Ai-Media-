'use client';

import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OriginButton from '../../components/OriginButton';
import Reveal from '../../components/animation/Reveal';
import TextReveal from '../../components/animation/TextReveal';
import StaggerContainer from '../../components/animation/StaggerContainer';
import AnimatedCard from '../../components/animation/AnimatedCard';
import FaqPro from '../../components/FaqPro';

const SOLUTIONS = [
  {
    image: '/services/marketing-seo.png',
    title: 'SEO',
    description:
      'We improve your website structure, keywords, and search visibility so more qualified customers can find your business on Google.',
  },
  {
    image: '/services/marketing-social.png',
    title: 'Social Media',
    description:
      'We create and manage social content that keeps your brand active, professional, and visible across the platforms your audience uses.',
  },
  {
    image: '/services/marketing-email.png',
    title: 'Email Marketing',
    description:
      'We build email campaigns that nurture leads, maintain customer relationships, and keep your business top of mind.',
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

export default function ClientMarketing() {
  return (
    <>
      <Navbar />
      <main className="ds-page">

        {/* ── Hero ── */}
        <section className="ds-hero">
          <div className="ds-hero-card">
            <div className="ds-hero-grid">
              <div className="ds-hero-copy">
                <Reveal as="span" className="ds-badge" delay={0.04} duration={0.9} yOffset={10} blur="12px">
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  Marketing
                </Reveal>
                <TextReveal
                  as="h1"
                  text="Digital Marketing for AV & Smart Home Integrators"
                  delay={0.36}
                  stagger={0.11}
                />
                <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                  We help AV and smart home businesses improve visibility, attract
                  qualified leads, and stay connected with their audience through SEO,
                  social media, and email marketing.
                </Reveal>
                <OriginButton as="link" href="/contact" variant="dark" className="ds-primary-btn">
                  → Book a Strategy Call
                </OriginButton>
              </div>
              <Reveal className="ds-hero-img" delay={0.3}>
                <Image
                  src="/services/marketing-hero.png"
                  alt="Digital marketing for AV and smart home businesses"
                  width={640}
                  height={440}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Dark Solutions Section ── */}
        <section className="ds-solutions">
          <span className="ds-deco ds-deco-1" aria-hidden="true" />
          <span className="ds-deco ds-deco-2" aria-hidden="true" />
          <div className="ds-solutions-shell">
            <div className="ds-solutions-head">
              <TextReveal
                as="h2"
                id="marketing-sol-title"
                text="Marketing Solutions Built for Consistent Growth"
                delay={0.36}
                stagger={0.11}
              />
              <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                From search visibility to audience engagement, we focus on the
                channels that help your business get found, trusted, and contacted.
              </Reveal>
            </div>
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
            <div className="ds-faq-head">
              <Reveal as="span" className="ds-badge ds-badge-sm" delay={0.04} duration={0.9} yOffset={10} blur="12px">
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                FAQS
              </Reveal>
              <TextReveal
                as="h2"
                id="faq-title"
                text="Questions? Answers!"
                delay={0.36}
                stagger={0.11}
              />
              <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                Find some quick answers to the most common questions.
              </Reveal>
            </div>
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
