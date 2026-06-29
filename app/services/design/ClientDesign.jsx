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
    question: 'What design services do you provide?',
    answer: 'We create website UI designs, brand identity, landing pages, social media graphics, and marketing visuals that keep your brand consistent and professional.',
  },
  {
    id: 'faq-2',
    question: 'Can you redesign our existing brand or website?',
    answer: 'Yes. We can improve your current design, refresh your visual identity, and make your website look more modern and conversion-focused.',
  },
  {
    id: 'faq-3',
    question: 'Will the design be custom or template-based?',
    answer: 'Our designs are custom-built around your business, audience, services, and brand direction.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide design files?',
    answer: 'Yes. We can provide Figma or source files depending on the project scope.',
  },
  {
    id: 'faq-5',
    question: 'How long does the design process take?',
    answer: 'Most design projects take 1–3 weeks depending on the number of pages, revisions, and required assets.',
  },
];

const BENEFITS = [
  { title: "Increase Trust", text: "Professional visuals that make your business look credible from the first impression and help customers feel confident choosing you." },
  { title: "Generate More Leads", text: "Layouts designed to guide visitors clearly toward booking calls, requesting quotes, and taking the next step." },
  { title: "Stand Out From Competitors", text: "Custom design direction built around your market, services, and audience so your brand feels different and memorable." },
  { title: "Built for Growth", text: "Design systems that stay consistent across your website, ads, social media, and future marketing materials." },
];

export default function ClientDesign() {
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
                    <path d="M4 18 14 8l2 2L6 20H4v-2Z" />
                    <path d="m13 7 2-2 4 4-2 2" />
                  </svg>
                  Design
                </Reveal>
                <TextReveal
                  as="h1"
                  text="Strategic Design for AV & Smart Home Integrators"
                  delay={0.36}
                  stagger={0.11}
                />
                <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                  We create modern, premium, and conversion focused visuals that help
                  AV and smart home businesses build trust, communicate clearly, and
                  stand out online.
                </Reveal>
                <OriginButton as="link" href="/contact" variant="dark" className="ds-primary-btn">
                  → Book a Strategy Call
                </OriginButton>
              </div>
              <Reveal className="ds-hero-img" delay={0.3}>
                <Image
                  src="/services/design-hero.png"
                  alt="Strategic design for AV and smart home websites"
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
                id="design-sol-title"
                text="Design Solutions Built Around Your Brand"
                delay={0.36}
                stagger={0.11}
              />
              <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                From website experiences to brand visuals and marketing graphics, we
                design the key assets your business needs to look professional and
                consistent.
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
        <ServiceBenefitsSection
          badge="Design Benefits"
          heading="Why Our Design Works"
          description="Design that helps AV businesses look trusted, professional, and ready to convert."
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
