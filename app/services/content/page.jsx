import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

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
    question: 'How long does it take to develop an AI solution?',
    answer:
      'We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs.',
  },
  {
    question: 'How long does it take to develop an AI solution?',
    answer:
      'Most first launches take a few weeks, while larger systems depend on the depth of content, automation, and integrations required.',
  },
  {
    question: 'Do I need technical expertise to work with you?',
    answer:
      'No. We manage the technical strategy, implementation, and support so you can focus on your business.',
  },
  {
    question: 'Is my data safe when working with your agency?',
    answer:
      'Yes. We design workflows with privacy, access control, and practical data handling standards in mind.',
  },
  {
    question: 'Can AI really help my business grow?',
    answer:
      'Yes. Used correctly, AI can speed up production, improve follow-up, clarify reporting, and create more consistent marketing operations.',
  },
];

export const metadata = {
  title: 'Content Creation Services — AI Media',
  description:
    'AI-powered content creation and video editing for AV and smart home integrators. Clear, engaging, professional content that builds trust.',
};

export default function ContentPage() {
  return (
    <>
      <Navbar />
      <main className="ds-page">

        {/* ── Hero ── */}
        <section className="ds-hero">
          <div className="ds-hero-card">
            <div className="ds-hero-grid">
              <div className="ds-hero-copy">
                <span className="ds-badge">
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
                </span>
                <h1>Content Creation for AV &amp; Smart Home Integrators</h1>
                <p>
                  We create clear, engaging, and professional content that helps your
                  business educate customers, build trust, and support your marketing
                  goals.
                </p>
                <Link href="/contact" className="ds-primary-btn">
                  → Book a Strategy Call
                </Link>
              </div>
              <div className="ds-hero-img">
                <Image
                  src="/services/content-hero.png"
                  alt="Content creation for AV and smart home businesses"
                  width={640}
                  height={440}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Dark Solutions Section ── */}
        <section className="ds-solutions">
          <span className="ds-deco ds-deco-1" aria-hidden="true" />
          <span className="ds-deco ds-deco-2" aria-hidden="true" />
          <div className="ds-solutions-shell">
            <div className="ds-solutions-head">
              <h2>Content Solutions Built to Educate and Convert</h2>
              <p>
                From AI-assisted written content to professionally edited video,
                we create the assets your business needs to build credibility and
                engage your audience.
              </p>
            </div>
            <div className="ds-solutions-grid ds-grid-2">
              {SOLUTIONS.map((sol) => (
                <article className="ds-solution-card" key={sol.title}>
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
                    <Link href="/contact" className="ds-solution-btn">
                      → Explore Services
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="ds-faq-section">
          <div className="ds-faq-shell">
            <div className="ds-faq-head">
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
              <h2>Questions? Answers!</h2>
              <p>Find some quick answers to the most common questions.</p>
            </div>
            <div className="ds-faq-list">
              {FAQS.map((faq, i) => (
                <details className="ds-faq-item" key={i} open={i === 0}>
                  <summary>
                    {faq.question}
                    <span className="ds-faq-icon" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="ds-email-note">
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
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
