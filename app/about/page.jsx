import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TestimonialAvatar from '../components/TestimonialAvatar';

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
    name: 'Josh Trevack',
    role: 'Founder & CEO',
    image: '/about/team-josh.png',
    text: 'Leads the company vision, growth strategy, and client relationships with a focus on building impactful digital experiences that drive long-term business success.',
  },
  {
    name: 'Sophia Bennett',
    role: 'Project Manager',
    image: '/about/team-sophia.png',
    text: 'Ensures every project runs smoothly from planning to launch by coordinating timelines, communication, and team collaboration with precision.',
  },
  {
    name: 'Mason Reed',
    role: 'Brand & Graphic Designer',
    image: '/about/team-mason.png',
    text: 'Crafts compelling visual identities and brand experiences that resonate with audiences and elevate the presence of every client.',
  },
];

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
    question: 'How long does it take to develop an AI solution?',
    answer: 'We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs.',
  },
  {
    question: 'How long does it take to develop an AI solution?',
    answer: 'Most first launches take a few weeks, while larger systems depend on the depth of content, automation, and integrations required.',
  },
  {
    question: 'Do I need technical expertise to work with you?',
    answer: 'No. We manage the technical strategy, implementation, and support so you can focus on your business.',
  },
  {
    question: 'Is my data safe when working with your agency?',
    answer: 'Yes. We design workflows with privacy, access control, and practical data handling standards in mind.',
  },
  {
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

export const metadata = {
  title: 'About AI Media - AI Powered Creative Agency',
  description: 'Meet AI Media, the AI-first digital agency for AV and smart home integrators.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page">

        {/* ── Hero ── */}
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-shell about-hero-grid">
            <div className="about-hero-copy">
              <Badge>Process</Badge>
              <h1 id="about-title">About AI Media</h1>
              <p>
                We help AV and smart home integrators build a stronger online
                presence through website design, SEO, content, branding, and AI
                powered marketing systems.
              </p>
              <Link className="about-primary-btn" href="/contact">
                → Book a Strategy Call
              </Link>
            </div>

            <div className="about-hero-image">
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
            </div>
          </div>
        </section>

        {/* ── One Team for Your Digital Presence ── */}
        <section className="about-section about-services" aria-labelledby="presence-title">
          <div className="about-shell">
            <div className="about-section-head">
              <Badge>Strategy</Badge>
              <h2 id="presence-title" className="section-title">
                One Team for Your Digital Presence
              </h2>
            </div>
            <div className="about-card-grid">
              {SERVICES.map((s) => (
                <article className="about-card card-hover" key={s.title}>
                  <span className="about-card-icon"><MiniIcon type={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it work ── */}
        <section className="about-section about-process" aria-labelledby="process-title">
          <div className="about-shell">
            <div className="about-section-head">
              <Badge>Process</Badge>
              <h2 id="process-title" className="section-title">How it work</h2>
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
              <div className="about-timeline">
                {STEPS.map((step) => (
                  <article className="about-step-card about-card card-hover" key={step.title}>
                    <span className="about-card-icon"><MiniIcon type={step.icon} /></span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Brands Choose AI Media ── */}
        <section className="about-split-section" aria-labelledby="choose-title">
          <div className="about-shell about-split-grid">
            <div className="about-split-image">
              <Image
                src="/about/about-brand-neon.png"
                alt="Premium grayscale neon signage"
                width={760}
                height={520}
              />
            </div>
            <div className="about-split-copy">
              <Badge>Why choose us</Badge>
              <h2 id="choose-title">
                <span>Why Brands</span>
                Choose AI Media
              </h2>
              <p>
                Built for AV and smart home companies that want premium
                positioning, qualified leads, and long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* ── Meet our team ── */}
        <section className="about-section about-team" aria-labelledby="team-title">
          <div className="about-shell">
            <div className="about-row-head">
              <div>
                <Badge>Team</Badge>
                <h2 id="team-title">Meet our team.</h2>
                <p>Partner with an AI agency delivering smart solutions.</p>
              </div>
              <div className="about-arrows" aria-hidden="true">
                <button type="button" className="about-arrow is-prev" tabIndex={-1}><span /></button>
                <button type="button" className="about-arrow is-next" tabIndex={-1}><span /></button>
              </div>
            </div>
            <div className="about-team-grid">
              {TEAM.map((member) => (
                <article className="about-team-card about-card" key={member.name}>
                  <span className="about-team-role">{member.role}</span>
                  <h3 className="about-team-name">{member.name}</h3>
                  <p>{member.text}</p>
                  {/* margin matches the card's 26px padding so image flush-fills both edges */}
                  <div className="about-team-img-wrap" style={{ margin: 'auto -26px 0', height: '290px' }}>
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait`}
                      width={420}
                      height={420}
                      style={{ width: 'calc(100% + 52px)', marginLeft: '0px', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── What our client says ── */}
        <section className="about-section about-testimonials" aria-labelledby="testimonial-title">
          <div className="about-shell">
            <div className="about-section-head">
              <Badge>Testimonial</Badge>
              <h2 id="testimonial-title" className="section-title">What our client says</h2>
            </div>
            <div className="about-testimonial-grid">
              {TESTIMONIALS.map((item, i) => (
                <article className="about-testimonial-card about-card" key={`${item.name}-${i}`}>
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
                </article>
              ))}
            </div>
            <div className="about-arrows about-testimonials-arrows" aria-hidden="true">
              <button type="button" className="about-arrow is-prev" tabIndex={-1}><span /></button>
              <button type="button" className="about-arrow is-next" tabIndex={-1}><span /></button>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="about-section about-faq-section" aria-labelledby="faq-title">
          <div className="about-shell about-faq-shell">
            <div className="about-section-head">
              <Badge>FAQS</Badge>
              <h2 id="faq-title" className="section-title">Questions? Answers!</h2>
              <p className="section-sub">Find some quick answers to the most common questions.</p>
            </div>
            <div className="about-faq-list">
              {FAQS.map((faq, i) => (
                <details className="about-faq-item" key={i} open={i === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="about-email-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Feel free to mail us for any enquiries :{' '}
              <a href="mailto:aimedia@support.com">aimedia@support.com</a>
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="about-final-cta" aria-labelledby="about-cta-title">
          <div className="about-shell">
            <div className="about-cta-panel">
              <div className="about-cta-image">
                <Image src="/about/about-hero-office.png" alt="" width={500} height={320} />
                <span aria-hidden="true">Design.<br />Build.<br />Grow.</span>
              </div>
              <div className="about-cta-copy">
                <Badge>Contact us</Badge>
                <h2 id="about-cta-title">Ready to Build a Smarter Online Presence?</h2>
                <p>
                  Let&apos;s create a website and marketing system that helps
                  your business stand out, rank better, and generate qualified leads.
                </p>
                <Link href="/contact" className="about-primary-btn about-dark-btn">
                  → Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
