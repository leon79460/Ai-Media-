'use client';

import Image from 'next/image';
import AnimatedCard from '../components/animation/AnimatedCard';
import Reveal from '../components/animation/Reveal';
import StaggerContainer from '../components/animation/StaggerContainer';
import TextReveal from '../components/animation/TextReveal';
import FaqPro from '../components/FaqPro';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OriginButton from '../components/OriginButton';
import TestimonialAvatar from '../components/TestimonialAvatar';
import { CircularTestimonials } from '../components/ui/circular-testimonials';

const SERVICES = [
  {
    icon: 'design',
    title: 'Design & Development',
    text: 'Modern, conversion focused websites built for trust and performance.',
  },
  {
    icon: 'search',
    title: 'SEO & Analytics',
    text: 'Search visibility, tracking, and insights to support long term growth.',
  },
  {
    icon: 'brand',
    title: 'Branding & Design',
    text: 'Professional visuals that make your business look premium and credible.',
  },
  {
    icon: 'content',
    title: 'Content & Marketing',
    text: 'AI assisted content, social media, email marketing, and creative assets.',
  },
];

const STEPS = [
  {
    icon: 'search',
    title: 'Brand Discovery',
    text: 'We learn about your AV business, services, target clients, and growth goals to build a strategy tailored to your market.',
  },
  {
    icon: 'design',
    title: 'Design',
    text: 'We create high-converting websites, branding, and content that position your company as a premium smart home expert.',
  },
  {
    icon: 'brand',
    title: 'AI Marketing',
    text: 'We implement SEO, automation, and AI-powered marketing systems that generate qualified leads consistently.',
  },
  {
    icon: 'content',
    title: 'Growth',
    text: 'We continuously optimize your digital presence to increase visibility, authority, and long-term business growth.',
  },
];

const TEAM = [
  {
    name: 'Joshua Trevithick',
    role: 'CEO, Founder & Growth Lead',
    image: '/about/team-josh.png',
    text: 'Leads the company vision, growth strategy, and client relationships with a focus on building impactful digital experiences that drive long-term business success.',
  },
  {
    name: 'Sayim',
    role: 'Production / Client Delivery Lead',
    image: '/about/team-sophia.png',
    text: 'Ensures every project runs smoothly from planning to launch by coordinating timelines, communication, and team collaboration with precision.',
  },
  {
    name: 'Toufik',
    role: 'Operations & Accountability Lead',
    image: '/about/team-mason.png',
    text: 'Crafts compelling visual identities and brand experiences that resonate with audiences and elevate the presence of every client.',
  },
  {
    name: 'Caleb Trevithick',
    role: 'Tech Lead',
    image: '/about/team-elena.png',
    text: 'Oversees the technical architecture and ensures all our digital products are built for scalability, performance, and future growth.',
  },
  {
    name: 'A.S.M. Tanvir Jahan',
    role: 'Software Engineer/ Next.js Developer',
    image: '/about/team-david.png',
    text: 'Develops data-driven strategies that increase visibility, generate qualified leads, and maximize return on investment for our clients.',
  },
  {
    name: 'Leon',
    role: 'WordPress Developer',
    image: '/about/team-michael.png',
    text: 'Specializes in creating seamless front-end experiences and robust back-end systems tailored for AV and smart home integrators.',
  },
];

const TEAM_TESTIMONIALS = TEAM.map((member) => ({
  quote: member.text,
  name: member.name,
  designation: member.role,
  src: member.image,
}));

const TESTIMONIALS = [
  {
    name: 'Maria González',
    location: 'Madrid',
    text: 'I received three quotes for a house cleaning request and could compare prices, availability, and customer reviews before choosing.',
    stars: 5,
    avatar: '/about/avatar-1.png',
  },
  {
    name: 'Carlos Martínez',
    location: 'Barcelona',
    text: 'Working with AI Media transformed our online presence completely. Their team delivered a website and marketing plan that actually drives leads.',
    stars: 5,
    avatar: '/about/avatar-2.png',
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

function MiniIcon({ type }) {
  const common = {
    width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.8,
    strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true,
  };
  if (type === 'search') return <svg {...common}><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></svg>;
  if (type === 'brand') return <svg {...common}><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h6M9 13h4M9 17h6" /></svg>;
  if (type === 'content') return <svg {...common}><path d="M5 5h14v14H5z" /><path d="M8 9h8M8 13h8M8 17h5" /></svg>;
  return <svg {...common}><path d="M4 18 14 8l2 2L6 20H4v-2Z" /><path d="m13 7 2-2 4 4-2 2" /></svg>;
}

function Badge({ children }) {
  return (
    <span className="section-badge about-badge">
      <MiniIcon type="brand" />
      {children}
    </span>
  );
}

export default function ClientAbout() {
  return (
    <>
      <Navbar />
      <main className="about-page">

        {/* ── Hero ── */}
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-shell about-hero-grid">
            <div className="about-hero-copy">
              <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                <Badge>About</Badge>
              </Reveal>

              <TextReveal
                as="h1"
                id="about-title"
                text="About AI Media"
                delay={0.36}
                stagger={0.11}
              />

              <Reveal delay={0.86} duration={1.2} yOffset={8} blur="12px">
                <p>
                  We help AV and smart home integrators build a stronger online
                  presence through website design, SEO, content, branding, and AI
                  powered marketing systems.
                </p>
              </Reveal>
              <OriginButton
                as="link"
                href="/contact"
                variant="dark"
                className="about-primary-btn"
              >
                → Book a Strategy Call
              </OriginButton>
            </div>

            <Reveal className="about-hero-image" delay={0.24}>
              <Image
                src="/about/about-hero-office.png"
                alt="AI Media team working in a modern office"
                width={920}
                height={620}
                priority
              />
              <div className="about-image-copy" aria-hidden="true">
                <span>Design.</span>
                <span>Build.</span>
                <span>Grow.</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── One Team for Your Digital Presence ── */}
        <section className="about-section about-services" aria-labelledby="presence-title">
          <div className="about-shell">
            <div className="about-section-head">
              <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                <Badge>Strategy</Badge>
              </Reveal>
              <TextReveal
                as="h2"
                id="presence-title"
                className="section-title"
                text="One Team For Your Digital Presence"
                delay={0.36}
                stagger={0.11}
              />
            </div>
            <StaggerContainer className="about-card-grid" delay={0.2} stagger={0.22}>
              {SERVICES.map((s) => (
                <AnimatedCard className="about-card card-hover" key={s.title}>
                  <span className="about-card-icon"><MiniIcon type={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </AnimatedCard>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── How it work ── */}
        <section className="about-section about-process" aria-labelledby="process-title">
          <div className="about-shell">
            <div className="about-section-head">
              <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                <Badge>Process</Badge>
              </Reveal>
              <TextReveal
                as="h2"
                id="process-title"
                className="section-title"
                text="How It Works"
                delay={0.36}
                stagger={0.11}
              />
            </div>
            <div className="about-process-wrap">
              {/* gap must match about-timeline's gap so circles center over their cards */}
              <div className="about-step-rail" aria-hidden="true" style={{ gap: '20px' }}>
                {STEPS.map((_, i) => (
                  <span className="about-step-number" key={i}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                ))}
              </div>
              <StaggerContainer className="about-timeline" delay={0.2} stagger={0.22}>
                {STEPS.map((step) => (
                  <AnimatedCard className="about-step-card about-card card-hover" key={step.title}>
                    <span className="about-card-icon"><MiniIcon type={step.icon} /></span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </AnimatedCard>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ── Why Brands Choose AI Media ── */}
        <section className="about-split-section" aria-labelledby="choose-title">
          <div className="about-shell about-split-grid">
            <Reveal className="about-split-image" delay={0.16} effect="slide-right">
              <Image
                src="/about/about-brand-neon.png"
                alt="Premium grayscale neon signage"
                width={760}
                height={520}
              />
            </Reveal>
            <div className="about-split-copy">
              <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                <Badge>Why Choose Us</Badge>
              </Reveal>
              <h2 id="choose-title">
                <TextReveal
                  text="Why Brands"
                  delay={0.36}
                  stagger={0.11}
                  style={{ display: 'block' }}
                />
                <TextReveal
                  text="Choose AI Media"
                  delay={0.7}
                  stagger={0.11}
                  style={{ display: 'block' }}
                />
              </h2>
              <Reveal delay={1.16} duration={1.2} yOffset={8} blur="12px">
                <p>
                  Built for AV and smart home companies that want premium
                  positioning, qualified leads, and long-term growth.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Meet our team ── */}
        <section className="about-section about-team" aria-labelledby="team-title">
          <div className="about-shell">
            <div className="about-row-head">
              <div>
                <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                  <Badge>Team</Badge>
                </Reveal>
                <TextReveal
                  as="h2"
                  id="team-title"
                  text="Meet Our Team."
                  delay={0.36}
                  stagger={0.11}
                />
                <Reveal delay={0.86} duration={1.2} yOffset={8} blur="12px">
                  <p>Partner with an AI agency delivering smart solutions.</p>
                </Reveal>
              </div>
            </div>
            <Reveal delay={0.18} duration={0.8} yOffset={14} blur="10px">
              <div className="about-team-carousel">
                <CircularTestimonials
                  testimonials={TEAM_TESTIMONIALS}
                  autoplay
                  colors={{
                    name: '#030303',
                    designation: 'rgba(61, 61, 61, 0.78)',
                    testimony: 'rgba(29, 29, 29, 0.84)',
                    arrowBackground: '#141414',
                    arrowForeground: '#f5f5f5',
                    arrowHoverBackground: '#030303',
                  }}
                  fontSizes={{
                    name: '30px',
                    designation: '18px',
                    quote: '19px',
                  }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── What our client says ── */}
        <section className="about-section about-testimonials" aria-labelledby="testimonial-title">
          <div className="about-shell">
            <div className="about-section-head">
              <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                <Badge>Testimonial</Badge>
              </Reveal>
              <TextReveal
                as="h2"
                id="testimonial-title"
                className="section-title"
                text="What Our Client Says"
                delay={0.36}
                stagger={0.11}
              />
            </div>
            <StaggerContainer className="about-testimonial-grid" delay={0.2} stagger={0.22}>
              {TESTIMONIALS.map((item, i) => (
                <AnimatedCard className="about-testimonial-card about-card" key={`${item.name}-${i}`}>
                  <div className="about-quote-mark" aria-hidden="true">&#8220;</div>
                  <p>{item.text}</p>
                  <div className="about-client-row">
                    <TestimonialAvatar src={item.avatar} name={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.location}</span>
                    </div>
                    <span className="about-stars" aria-label={`${item.stars} out of 5 stars`}>
                      {'★'.repeat(item.stars)}
                    </span>
                  </div>
                </AnimatedCard>
              ))}
            </StaggerContainer>
            <Reveal className="about-arrows about-testimonials-arrows" aria-hidden="true" delay={0.3}>
              <button type="button" className="about-arrow is-prev" tabIndex={-1}><span /></button>
              <button type="button" className="about-arrow is-next" tabIndex={-1}><span /></button>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="about-section about-faq-section" aria-labelledby="faq-title">
          <div className="about-shell about-faq-shell">
            <div className="about-section-head">
              <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                <Badge>FAQS</Badge>
              </Reveal>
              <TextReveal
                as="h2"
                id="faq-title"
                className="section-title"
                text="Questions? Answers!"
                delay={0.36}
                stagger={0.11}
              />
              <Reveal delay={0.86} duration={1.2} yOffset={8} blur="12px">
                <p className="section-sub">Find some quick answers to the most common questions.</p>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="about-faq-list">
              <FaqPro items={FAQS} defaultOpenFirst={true} />
            </Reveal>
            <Reveal className="about-email-note" delay={0.3}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Feel free to mail us for any enquiries :{' '}
              <a href="mailto:info@aimedia.com">info@aimedia.com</a>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="about-final-cta" aria-labelledby="about-cta-title">
          <div className="about-shell">
            <Reveal className="about-cta-panel" delay={0.16}>
              <div className="about-cta-image">
                <Image src="/about/about-hero-office.png" alt="" width={500} height={320} />
                <span aria-hidden="true">Design.<br />Build.<br />Grow.</span>
              </div>
              <div className="about-cta-copy">
                <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
                  <Badge>Contact us</Badge>
                </Reveal>
                <TextReveal
                  as="h2"
                  id="about-cta-title font-fixed"
                  text="Ready to Build a Smarter Online Presence?"
                  delay={0.36}
                  stagger={0.11}
                />
                <Reveal delay={0.86} duration={1.2} yOffset={8} blur="12px">
                  <p>
                    Let&apos;s create a website and marketing system that helps
                    your business stand out, rank better, and generate qualified leads.
                  </p>
                </Reveal>
                <OriginButton
                  as="link"
                  href="/contact"
                  variant="light"
                  className="about-primary-btn about-dark-btn"
                >
                  → Get Started
                </OriginButton>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
