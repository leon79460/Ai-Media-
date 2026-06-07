export const blogPosts = [
  {
    slug: 'systems-integrator-marketing-budget',
    title: 'How Much Should a Systems Integrator Spend on Marketing?',
    eyebrow: 'Integrator Growth Budget Calculator',
    date: 'May 18, 2026',
    readTime: '14 min read',
    excerpt:
      'A practical revenue-based framework for AV, smart home, security, commercial AV, and low-voltage firms that want predictable pipeline without wasting money on random ads.',
    description:
      'A revenue-based marketing and advertising budget calculator for AV, smart home, security, commercial AV, and low-voltage systems integrators.',
    href: '/blog/systems-integrator-marketing-budget',
    stats: [
      {
        value: '6% to 10%',
        label: 'Prudent total marketing budget for a stable, growth-oriented integration firm',
      },
      {
        value: '2.5% to 5%',
        label: 'Typical paid advertising portion once the growth system can convert demand',
      },
      {
        value: 'Revenue driven',
        label: 'Enter annual revenue to calculate the dollar ranges for your company',
      },
    ],
  },
  {
    slug: 'future-of-ai-digital-marketing',
    title: 'The Future of AI in Digital Marketing Strategies',
    eyebrow: 'AI Marketing Trends',
    date: 'May 25, 2026',
    readTime: '8 min read',
    excerpt:
      'Discover how artificial intelligence is reshaping digital marketing, from automated content generation to predictive analytics and hyper-personalized customer experiences.',
    description:
      'Explore the latest AI marketing trends and learn how forward-thinking businesses are leveraging artificial intelligence to scale their marketing efforts and boost ROI.',
    href: '/blog/future-of-ai-digital-marketing',
    stats: [
      {
        value: '45%',
        label: 'Increase in marketing ROI when implementing AI-driven personalization',
      },
      {
        value: '3x',
        label: 'Faster campaign deployment using AI content generation tools',
      },
      {
        value: 'Predictive',
        label: 'Shift from reactive analytics to AI-powered predictive customer insights',
      },
    ],
  },
  {
    slug: 'designing-for-modern-web-2026',
    title: 'Designing for the Modern Web: Top Trends to Watch',
    eyebrow: 'Web Design Trends',
    date: 'June 2, 2026',
    readTime: '10 min read',
    excerpt:
      'A deep dive into the web design aesthetics dominating the landscape, including immersive 3D experiences, advanced glassmorphism, and dynamic scroll animations.',
    description:
      'Stay ahead of the curve with our comprehensive guide to modern web design trends, focusing on engaging user experiences and striking visual innovation.',
    href: '/blog/designing-for-modern-web-2026',
    stats: [
      {
        value: '400ms',
        label: 'Optimal load time target for maximum user retention and engagement',
      },
      {
        value: '94%',
        label: 'Of first impressions are design-related according to recent studies',
      },
      {
        value: 'Interactive',
        label: 'Focus on micro-interactions to increase user time spent on page',
      },
    ],
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
