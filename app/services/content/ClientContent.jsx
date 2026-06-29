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
    image: '/services/content-ai.png',
    title: 'AI Content Creation',
    description:
      'We create AI assisted content for websites, blogs, social media, and campaigns while keeping the message clear, human, and aligned with your brand.',
  },
  {
    image: '/services/content-video.png',
    title: 'Video Editing',
    description:
      'We edit professional video content for social media, websites, ads, and client education so your brand can communicate with more impact.',
  },
];

const FAQS = [
  {
    id: 'faq-1',
    question: 'What type of content do you create?',
    answer: 'We create social media posts, reels/video concepts, website copy, blog content, ad copy, email content, and branded visuals.',
  },
  {
    id: 'faq-2',
    question: 'Do you also manage posting and scheduling?',
    answer: 'Yes. We can create, schedule, and manage content across your selected platforms.',
  },
  {
    id: 'faq-3',
    question: 'Can you create content if we don’t have photos or videos?',
    answer: 'Yes. We can use brand assets, stock visuals, AI-assisted content, graphics, and your service information to create professional content.',
  },
  {
    id: 'faq-4',
    question: 'Will the content match our brand voice?',
    answer: 'Yes. We first understand your business, audience, tone, and goals so the content feels aligned with your brand.',
  },
  {
    id: 'faq-5',
    question: 'How many posts do you create per month?',
    answer: 'It depends on your package. We can create weekly or monthly content plans based on your goals and budget.',
  },
];

const BENEFITS = [
  { title: "Clear Messaging", text: "Content that explains your services, value, and expertise in a simple way your customers can understand." },
  { title: "Stronger Brand Presence", text: "Visuals and copy that make your business look active, professional, and consistent across platforms." },
  { title: "Engaging Media", text: "Posts, videos, and AI-assisted content created to capture attention and keep your audience interested." },
  { title: "Consistent Output", text: "A repeatable content system that helps your brand show up regularly without overwhelming your team." },
];

export default function ClientContent() {
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Content
                </Reveal>
                <TextReveal
                  as="h1"
                  text="Content Creation for AV & Smart Home Integrators"
                  delay={0.36}
                  stagger={0.11}
                />
                <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                  We create clear, engaging, and professional content that helps your
                  business educate customers, build trust, and support your marketing
                  goals.
                </Reveal>
                <OriginButton as="link" href="/contact" variant="dark" className="ds-primary-btn">
                  → Book a Strategy Call
                </OriginButton>
              </div>
              <Reveal className="ds-hero-img" delay={0.3}>
                <Image
                  src="/services/content-hero.png"
                  alt="Content creation for AV and smart home businesses"
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
                id="content-sol-title"
                text="Content Solutions Built to Educate and Convert"
                delay={0.36}
                stagger={0.11}
              />
              <Reveal as="p" delay={0.86} duration={1.2} yOffset={8} blur="12px">
                From AI-assisted written content to professionally edited video,
                we create the assets your business needs to build credibility and
                engage your audience.
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

        {/* ── Benefits Section ── */}
        <ServiceBenefitsSection
          badge="Content Benefits"
          heading="Why Our Content Works"
          description="Content designed to capture attention, communicate your value clearly, and support long-term brand growth."
          cards={BENEFITS}
        />

        {/* ── FAQ secitons  ── */} 
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
