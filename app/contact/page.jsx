'use client';

import Image from 'next/image';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OriginButton from '../components/OriginButton';
import Reveal from '../components/animation/Reveal';
import FaqPro from '../components/FaqPro';

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

const DEPARTMENTS = [
  'Content Strategy & Asset Creation',
  'Web Design & Development',
  'SEO & Analytics',
  'Branding & Design',
  'AI Marketing Automation',
  'General Inquiry',
];

const styles = {
  badgeIcon: {
    width: '18px',
    height: '18px',
    flex: '0 0 18px',
  }
}
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 11.92 19.79 19.79 0 0 1 1 3.26 2 2 0 0 1 2.97 1h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <Image
      src="/icons/contact.svg"
      alt="Pricing"
      aria-hidden="true"
      width={18}
      height={18}
      style={styles.badgeIcon}
    />
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', department: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', department: '', message: '' });
  }

  return (
    <>
      <Navbar />
      <main className="contact-page">

        {/* ── Hero ── */}
        <section className="contact-hero">
          <div className="contact-shell">
            <Reveal delay={0} duration={0.4} yOffset={6} blur="6px">
              <span className="section-badge contact-badge">
                <ConnectIcon />
                Let&apos;s Connect
              </span>
            </Reveal>

            <h1 className="contact-hero-title">
              <Reveal delay={0.25} duration={0.4} yOffset={6} blur="6px">
                <span style={{ display: 'block' }}>Ready to Build a</span>
              </Reveal>

              <Reveal delay={0.5} duration={0.4} yOffset={6} blur="6px">
                <span style={{ display: 'block' }}>Smarter Online Presence?</span>
              </Reveal>
            </h1>

            <Reveal delay={0.75} duration={0.4} yOffset={6} blur="6px">
              <p className="contact-hero-sub">
                Whether you&apos;re looking to elevate your digital product, scale your organic
                search visibility, or completely refresh your brand identity, we&apos;re here to
                help. Reach out today and let&apos;s discuss how we can partner to achieve your goals.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Contact Card ── */}
        <section className="contact-card-section">
          <div className="contact-shell">
            <Reveal className="contact-card" delay={0.2} effect="slide-up">
              {/* Left — info column */}
              <div className="contact-info-col">
                <article className="contact-info-card">
                  <span className="contact-icon-wrap">
                    <MailIcon />
                  </span>
                  <p>Feel free to email me if you have any questions or need more details!</p>
                  <a href="mailto:info@aimedia.design" className="contact-info-link">
                    info@aimedia.design
                  </a>
                </article>

                <article className="contact-info-card">
                  <span className="contact-icon-wrap">
                    <PhoneIcon />
                  </span>
                  <p>Feel free to book a call if that&apos;s more convenient and easier for you</p>
                  <a href="#" className="contact-info-link">
                    Book a call
                  </a>
                </article>
              </div>

              {/* Right — form column */}
              <div className="contact-form-col">
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-field">
                    <label htmlFor="cf-name">Full Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      placeholder="Ikta Sollork"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="cf-email">Email Address</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="info@aimedia.design"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="cf-dept">What department do you need help with?</label>
                    <select
                      id="cf-dept"
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      className="contact-input contact-select"
                    >
                      <option value="" disabled>Content Strategy &amp; Asset Creation</option>
                      {DEPARTMENTS.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="cf-msg">How may we assist you?</label>
                    <textarea
                      id="cf-msg"
                      name="message"
                      placeholder="Give us more info..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="contact-input contact-textarea"
                    />
                  </div>

                  <OriginButton
                    type="submit"
                    variant="custom"
                    fillColor="#f5f5f5"
                    hoverTextColor="#050505"
                    className="contact-submit"
                  >
                    {sent ? '✓ Message Sent!' : '→ Send Your Message'}
                  </OriginButton>
                </form>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="contact-faq-section">
          <div className="contact-shell contact-faq-shell">
            <div className="contact-section-head">
              <Reveal delay={0} duration={0.4} yOffset={6} blur="6px">
                <span className="section-badge contact-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
                  </svg>
                  FAQS
                </span>
              </Reveal>

              <Reveal delay={0.25} duration={0.4} yOffset={6} blur="6px">
                <h2 className="contact-faq-title">
                  Questions? Answers!
                </h2>
              </Reveal>

              <Reveal delay={0.75} duration={0.4} yOffset={6} blur="6px">
                <p className="contact-faq-sub">
                  Find Some quick answers to the most common questions.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="contact-faq-list">
              <FaqPro items={FAQS} defaultOpenFirst={true} />
            </Reveal>

            <Reveal className="contact-email-note" delay={0.24}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
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
