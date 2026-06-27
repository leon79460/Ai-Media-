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
    image: '/services/development-web.png',
    title: 'Website Development',
    description:
      'Your website is often the first place potential customers judge your business. We develop modern, responsive, and SEO ready websites designed to present your services clearly, build trust, and support lead generation.',
  },
  {
    image: '/services/development-maintenance.png',
    title: 'Website Maintenance',
    description:
      'A website needs ongoing care to stay secure, updated, and performing properly. Our maintenance support helps you keep your site healthy while you focus on your business.',
  },
];

const FAQS = [
  {
    id: 'faq-1',
    question: 'How long does it take to build a website?',
    answer: 'Most websites are completed within 4 to 8 weeks depending on the scope, number of pages, and integrations required. We share a clear timeline before we start so you know what to expect.',
  },
  {
    id: 'faq-2',
    question: 'Will my website be mobile-friendly and SEO ready?',
    answer: 'Yes. Every website we build is fully responsive across all devices and structured with clean code, fast load times, and on-page SEO foundations to support your search visibility from day one.',
  },
  {
    id: 'faq-3',
    question: 'Do I need to provide content and images?',
    answer: 'Not necessarily. We can work with content and images you provide, or assist with content creation and sourcing visuals as part of the project. We will advise what works best for your goals.',
  },
  {
    id: 'faq-4',
    question: 'What does website maintenance include?',
    answer: 'Our maintenance service covers software and plugin updates, security monitoring, performance checks, and minor content updates so your site stays secure, fast, and up to date.',
  },
  {
    id: 'faq-5',
    question: 'Can you update my existing website instead of building a new one?',
    answer: 'Yes. If your current site just needs improvements, we can audit it and make targeted updates to design, speed, structure, or content rather than rebuilding from scratch.',
  },
];

export default function ClientDevelopment() {
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
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Development
                </Reveal>
                <TextReveal
                  as="h1"
                  text="Website Development for AV & Smart Home Integrators"
                  delay={0.36}
                  stagger={0.11}
                />
                <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                  We build fast, responsive, and conversion focused websites that help
                  AV and smart home businesses look credible, rank better, and turn
                  visitors into qualified leads.
                </Reveal>
                <OriginButton as="link" href="/contact" variant="dark" className="ds-primary-btn">
                  → Book a Strategy Call
                </OriginButton>
              </div>
              <Reveal className="ds-hero-img" delay={0.3}>
                <Image
                  src="/services/development-hero.png"
                  alt="Website development for AV and smart home businesses"
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
                id="dev-sol-title"
                text="Development Solutions Built Around Your Website"
                delay={0.36}
                stagger={0.11}
              />
              <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                From building a new website to keeping it secure, updated, and
                performing well, we cover the two essentials every AV and smart home
                business needs.
              </Reveal>
            </div>
            <StaggerContainer className="ds-solutions-grid ds-grid-2" delay={0.2} stagger={0.22}>
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
