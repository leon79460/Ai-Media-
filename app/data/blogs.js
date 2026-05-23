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
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
