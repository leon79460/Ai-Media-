import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OriginButton from '../../components/OriginButton';

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
    question: 'How long does it take to build a website?',
    answer:
      'Most websites are completed within 4 to 8 weeks depending on the scope, number of pages, and integrations required. We share a clear timeline before we start so you know what to expect.',
  },
  {
    question: 'Will my website be mobile-friendly and SEO ready?',
    answer:
      'Yes. Every website we build is fully responsive across all devices and structured with clean code, fast load times, and on-page SEO foundations to support your search visibility from day one.',
  },
  {
    question: 'Do I need to provide content and images?',
    answer:
      'Not necessarily. We can work with content and images you provide, or assist with content creation and sourcing visuals as part of the project. We will advise what works best for your goals.',
  },
  {
    question: 'What does website maintenance include?',
    answer:
      'Our maintenance service covers software and plugin updates, security monitoring, performance checks, and minor content updates so your site stays secure, fast, and up to date.',
  },
  {
    question: 'Can you update my existing website instead of building a new one?',
    answer:
      'Yes. If your current site just needs improvements, we can audit it and make targeted updates to design, speed, structure, or content rather than rebuilding from scratch.',
  },
];

export const metadata = {
  title: 'Website Development Services — AI Media',
  description:
    'Fast, responsive, conversion-focused website development and maintenance for AV and smart home integrators.',
};

export default function DevelopmentPage() {
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
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Development
                </span>
                <h1>Website Development for AV &amp; Smart Home Integrators</h1>
                <p>
                  We build fast, responsive, and conversion focused websites that help
                  AV and smart home businesses look credible, rank better, and turn
                  visitors into qualified leads.
                </p>
                <OriginButton as="link" href="/contact" variant="dark" className="ds-primary-btn">
                  → Book a Strategy Call
                </OriginButton>
              </div>
              <div className="ds-hero-img">
                <Image
                  src="/services/development-hero.png"
                  alt="Website development for AV and smart home businesses"
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
              <h2>Development Solutions Built Around Your Website</h2>
              <p>
                From building a new website to keeping it secure, updated, and
                performing well, we cover the two essentials every AV and smart home
                business needs.
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
                    <OriginButton as="link" href="/contact" variant="light" fillColor="#f5f5f5" hoverTextColor="#050505" className="ds-solution-btn">
                      → Explore Services
                    </OriginButton>
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
