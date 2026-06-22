'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OriginButton from '../components/OriginButton';
import Reveal from '../components/animation/Reveal';
import StaggerContainer from '../components/animation/StaggerContainer';
import AnimatedCard from '../components/animation/AnimatedCard';
import TextReveal from '../components/animation/TextReveal';

const VALUES = [
  {
    title: 'Built for Specialists',
    text: 'We work with AV and smart home integrators, so every project has a clear market, clear outcomes, and practical growth goals.',
  },
  {
    title: 'Systems Over Guesswork',
    text: 'Our team builds repeatable website, SEO, content, automation, and reporting systems that improve month after month.',
  },
  {
    title: 'Small Team, High Ownership',
    text: 'You will work close to strategy, production, client outcomes, and the decisions that shape the work.',
  },
  {
    title: 'AI-Powered Delivery',
    text: 'We use AI to move faster, sharpen ideas, improve quality, and give clients a better experience from kickoff to launch.',
  },
];

const OPEN_ROLES = [
  {
    title: 'Web Designer',
    type: 'Contract / Remote',
    text: 'Design conversion-focused websites, landing pages, and service pages for premium AV and smart home brands.',
  },
  {
    title: 'SEO Content Strategist',
    type: 'Contract / Remote',
    text: 'Plan local SEO, service page structures, content calendars, and AI-assisted content workflows for integrator clients.',
  },
  {
    title: 'Web Developer',
    type: 'Contract / Remote',
    text: 'Build fast, responsive websites and maintain clean front-end systems that are easy to update and optimize.',
  },
  {
    title: 'Video & Creative Editor',
    type: 'Contract / Remote',
    text: 'Create short-form video, campaign visuals, social assets, and brand content that helps technical companies look premium.',
  },
];

const PROCESS = [
  'Send your work samples and the role you are interested in.',
  'We review fit, portfolio quality, and communication style.',
  'Selected candidates complete a short paid test project.',
  'We start with a focused project before expanding into recurring work.',
];

function MiniIcon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (type === 'search') {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </svg>
    );
  }

  if (type === 'spark') {
    return (
      <svg {...common}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        <path d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M9 9h6M9 13h4M9 17h6" />
    </svg>
  );
}

function Badge({ children }) {
  return (
    <span className="section-badge about-badge">
      <MiniIcon type="spark" />
      {children}
    </span>
  );
}

export default function ClientCareers() {
  return (
    <>
      <Navbar />
      <main className="about-page careers-page">
        <section className="about-hero" aria-labelledby="careers-title">
          <div className="about-shell about-hero-grid">
            <Reveal className="about-hero-copy" delay={0.16}>
              <Badge>Careers</Badge>
              <h1 id="careers-title">Build Growth Systems for Modern Integrators</h1>
              <p>
                Join AI Media and help AV and smart home companies get found,
                trusted, and chosen through better websites, SEO, content,
                automation, and reporting.
              </p>
              <Link className="about-primary-btn" href="mailto:careers@aimedia.design">
                Apply Now
              </Link>
            </Reveal>

            <Reveal className="about-hero-image" delay={0.24}>
              <Image
                src="/about/about-hero-office.png"
                alt="AI Media workspace"
                width={920}
                height={620}
                priority
              />
              <div className="about-image-copy" aria-hidden="true">
                <span>Think.</span>
                <span>Build.</span>
                <span>Grow.</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="about-section careers-values" aria-labelledby="careers-values-title">
          <div className="about-shell">
            <Reveal className="about-section-head" delay={0.16}>
              <Badge>How We Work</Badge>
              <TextReveal id="careers-values-title" as="h2" text="A Team Built Around Ownership" className="section-title" delay={0.2} />
              <p className="section-sub">
                We look for clear thinkers, strong makers, and people who care
                about measurable client outcomes.
              </p>
            </Reveal>

            <StaggerContainer className="about-card-grid" delay={0.2} stagger={0.24}>
              {VALUES.map((item, index) => (
                <AnimatedCard className="about-card card-hover" key={item.title}>
                  <span className="about-card-icon">
                    <MiniIcon type={index % 2 === 0 ? 'spark' : 'search'} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </AnimatedCard>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="about-section careers-roles" aria-labelledby="careers-roles-title">
          <div className="about-shell">
            <Reveal className="about-section-head" delay={0.16}>
              <Badge>Open Roles</Badge>
              <TextReveal id="careers-roles-title" as="h2" text="Current Opportunities" className="section-title" delay={0.2} />
              <p className="section-sub">
                We are always interested in specialists who can help premium
                integrators grow online.
              </p>
            </Reveal>

            <StaggerContainer className="careers-role-grid" delay={0.2} stagger={0.24}>
              {OPEN_ROLES.map((role) => (
                <AnimatedCard className="careers-role-card about-card card-hover" key={role.title}>
                  <div>
                    <span className="careers-role-badge">{role.type}</span>
                    <h3>{role.title}</h3>
                    <p>{role.text}</p>
                  </div>
                  <OriginButton
                    as="a"
                    href="mailto:careers@aimedia.design"
                    variant="dark"
                    className="careers-role-link"
                  >
                    Apply for this role
                  </OriginButton>
                </AnimatedCard>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="about-section careers-process" aria-labelledby="careers-process-title">
          <div className="about-shell">
            <Reveal className="about-section-head" delay={0.16}>
              <Badge>Hiring Process</Badge>
              <TextReveal id="careers-process-title" as="h2" text="Simple, Practical, and Paid-Test Friendly" className="section-title" delay={0.2} />
            </Reveal>

            <StaggerContainer className="careers-process-list" delay={0.2} stagger={0.24}>
              {PROCESS.map((step, index) => (
                <AnimatedCard className="about-card careers-process-card" key={step}>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <p>{step}</p>
                </AnimatedCard>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="about-final-cta" aria-labelledby="careers-cta-title">
          <div className="about-shell">
            <Reveal className="about-cta-panel" delay={0.16}>
              <div className="about-cta-image">
                <Image src="/about/about-brand-neon.png" alt="" width={500} height={320} />
                <span aria-hidden="true">Create.<br />Ship.<br />Improve.</span>
              </div>
              <div className="about-cta-copy">
                <Badge>Join AI Media</Badge>
                <TextReveal id="careers-cta-title" as="h2" text="Want to Work With Us?" delay={0.2} />
                <p>
                  Send your portfolio, role of interest, and a short note about
                  the kind of work you do best.
                </p>
                <OriginButton
                  as="a"
                  href="mailto:careers@aimedia.design"
                  variant="light"
                  fillColor="#050505"
                  hoverTextColor="#f5f5f5"
                  className="about-primary-btn about-dark-btn"
                >
                  Apply Now
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
