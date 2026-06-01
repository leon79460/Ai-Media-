'use client';

import Image from 'next/image';
import Link from 'next/link';

const PORTFOLIO_ITEMS = [
  {
    title: 'Automate AV',
    subheading: 'Luxury technology website and lead system',
    image: '/before.png',
    href: '/services/development',
    ratio: '1.28',
  },
  {
    title: 'Signal Studio',
    subheading: 'Brand identity for a smart home installer',
    image: '/services/design-branding.png',
    href: '/services/design',
    ratio: '0.82',
  },
  {
    title: 'Local Search Lift',
    subheading: 'SEO campaign for qualified market visibility',
    image: '/services/marketing-seo.png',
    href: '/services/marketing',
    ratio: '1.08',
  },
  {
    title: 'Content Engine',
    subheading: 'AI-assisted posts, edits, and launch creative',
    image: '/services/content-ai.png',
    href: '/services/content',
    ratio: '0.74',
  },
  {
    title: 'Control Room',
    subheading: 'Responsive web build for premium integrators',
    image: '/services/development-web.png',
    href: '/services/development',
    ratio: '1.18',
  },
  {
    title: 'Social Proof Suite',
    subheading: 'Visual content pack for monthly growth',
    image: '/services/marketing-social.png',
    href: '/services/marketing',
    ratio: '0.9',
  },
  {
    title: 'Interface Refresh',
    subheading: 'Cleaner service pages and conversion paths',
    image: '/services/design-uiux.png',
    href: '/services/design',
    ratio: '1.34',
  },
  {
    title: 'Video Storyline',
    subheading: 'Short-form edits for project showcases',
    image: '/services/content-video.png',
    href: '/services/content',
    ratio: '0.78',
  },
  {
    title: 'Care Plan',
    subheading: 'Maintenance workflow for an always-current site',
    image: '/services/development-maintenance.png',
    href: '/services/development',
    ratio: '1',
  },
];

const BADGE_ICON_STYLE = {
  width: 18,
  height: 18,
  flex: '0 0 18px',
};

export default function Portfolio() {
  return (
    <section id="works" className="portfolio-section">
      <div className="portfolio-shell">
        <header className="portfolio-header">
          <span className="section-badge">
            <Image
              src="/icons/portfolio.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              style={BADGE_ICON_STYLE}
            />
            Portfolio
          </span>
          <h2 className="section-title">Selected work with measurable polish.</h2>
          <p className="section-sub">
            A Pinterest-inspired wall of campaigns, websites, content systems,
            and design work built for AV and smart home businesses.
          </p>
        </header>

        <div className="portfolio-masonry" aria-label="Selected portfolio projects">
          {PORTFOLIO_ITEMS.map((item) => (
            <article
              className="portfolio-card"
              key={item.title}
              style={{ '--portfolio-ratio': item.ratio }}
            >
              <Image
                src={item.image}
                alt={`${item.title} project preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="portfolio-image"
              />

              <Link className="portfolio-overlay" href={item.href}>
                <span className="portfolio-copy">
                  <span className="portfolio-title">{item.title}</span>
                  <span className="portfolio-sub">{item.subheading}</span>
                </span>
                <span className="portfolio-visit">Visit Site</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
