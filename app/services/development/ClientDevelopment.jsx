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
import ServiceBenefitsSection from '../../components/ServiceBenefitsSection';

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
    question: 'What type of websites do you build?',
    answer: 'We build business websites, landing pages, service websites, and conversion-focused websites using WordPress, Elementor, React, or custom development depending on the project.',
  },
  {
    id: 'faq-2',
    question: 'Will the website be mobile responsive?',
    answer: 'Yes. Every website we build is fully responsive for desktop, tablet, and mobile devices.',
  },
  {
    id: 'faq-3',
    question: 'Can we update the website ourselves after delivery?',
    answer: 'Yes. We build websites with easy content management so your team can update text, images, services, and basic sections.',
  },
  {
    id: 'faq-4',
    question: 'Do you handle speed, SEO, and tracking setup?',
    answer: 'Yes. We can set up performance optimization, basic SEO structure, analytics, tracking pixels, and form integrations.',
  },
  {
    id: 'faq-5',
    question: 'How long does website development take?',
    answer: 'Most websites take 3–6 weeks depending on page count, functionality, content readiness, and revision rounds.',
  },
];

const BENEFITS = [
  { title: "Fast & Responsive", text: "Smooth websites that load quickly and work beautifully across desktop, tablet, and mobile devices." },
  { title: "Conversion-Focused", text: "Pages structured to make your message clear and guide visitors toward calls, forms, and sales actions." },
  { title: "Easy to Manage", text: "Built so your team can update content, services, images, and basic page sections without friction." },
  { title: "Reliable Foundation", text: "Clean development prepared for SEO, analytics, tracking, integrations, and future website growth." },
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
        <ServiceBenefitsSection
          badge="Development Benefits"
          heading="Why Our Development Works"
          description="Websites built to perform, scale, and turn visitors into leads with a smooth, reliable user experience."
          cards={BENEFITS}
        />

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
              <a href="mailto:info@aimedia.design">info@aimedia.design</a>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
