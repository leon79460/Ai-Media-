import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../components/Footer';
import {
  AdReadinessScorecard,
  MarketingBudgetCalculator,
} from '../../components/MarketingBudgetTools';
import Navbar from '../../components/Navbar';
import { blogPosts, getBlogPost } from '../../data/blogs';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog - AI Media',
    };
  }

  return {
    title: `${post.title} - AI Media`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            author: { '@type': 'Organization', name: 'AI Media' },
            publisher: { '@type': 'Organization', name: 'AI Media' },
            datePublished: '2026-05-18',
            dateModified: '2026-05-18',
          }),
        }}
      />
      <main className="blog-post-page">
        <header className="blog-post-hero">
          <Link className="blog-back-link" href="/blog">
            Back to insights
          </Link>
          <span className="section-badge">{post.eyebrow}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>

          <div className="blog-stat-grid" aria-label="Key budget recommendations">
            {post.stats.map((stat) => (
              <div className="blog-stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="blog-layout">
          <article className="blog-article">
            <p>
              <strong>
                Most systems integrators do not have a technical credibility
                problem.
              </strong>{' '}
              They have a visibility, positioning, and pipeline consistency
              problem.
            </p>
            <p>
              They do impressive work in homes, boardrooms, campuses,
              hospitality spaces, retail environments, and secure facilities.
              But their marketing investment often does not match the
              sophistication of the work they deliver. Some firms rely almost
              entirely on referrals. Others buy ads without a clear budget
              model, conversion path, customer acquisition target, or
              source-of-truth reporting.
            </p>

            <div className="blog-callout">
              How much should we actually spend on marketing and advertising
              relative to revenue?
            </div>

            <h2 id="answer">The answer: calculate from revenue, then adjust for growth posture</h2>
            <div className="blog-answer-box">
              <p>
                <strong>
                  For an established systems integration company, a prudent
                  total marketing budget is usually 6% to 10% of annual revenue.
                </strong>
              </p>
              <p>
                That percentage should fund the full growth system:
                positioning, website, SEO/GEO/AEO, content, proof, paid media,
                CRM, tracking, reporting, and sales enablement. Paid ads are
                only one part of that system.
              </p>
            </div>

            <p>
              Use the calculator below to enter your annual revenue and
              translate the percentage ranges into annual and monthly dollar
              amounts. The goal is not to spend more for its own sake. The goal
              is to fund the right system at the right level for your revenue,
              margin, market, and growth target.
            </p>

            <div className="blog-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Growth posture</th>
                    <th>Total marketing investment</th>
                    <th>Paid advertising portion</th>
                    <th>Use when...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Referral-heavy / stable</td>
                    <td>Annual revenue x 4% to 6%</td>
                    <td>Annual revenue x 1% to 2%</td>
                    <td>
                      The company has strong referrals and wants
                      maintenance-level visibility.
                    </td>
                  </tr>
                  <tr>
                    <td>Prudent growth</td>
                    <td>Annual revenue x 6% to 10%</td>
                    <td>Annual revenue x 2.5% to 5%</td>
                    <td>
                      The company wants more predictable qualified pipeline
                      beyond referrals.
                    </td>
                  </tr>
                  <tr>
                    <td>Aggressive expansion</td>
                    <td>Annual revenue x 10% to 15%</td>
                    <td>Annual revenue x 5% to 8%</td>
                    <td>
                      The company is entering new markets, hiring sales
                      capacity, or trying to win share quickly.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="blog-source-note">
              <strong>Benchmark context:</strong> Gartner reported that 2026
              marketing budgets average 7.8% of company revenue, up slightly
              from 7.7% in 2025. Gartner also reported in 2025 that paid media
              represented 30.6% of marketing budgets, or 2.4% of company
              revenue. SBA guidance notes there is no single correct
              percentage and cites older service-business benchmarks around
              6.9% for B2B services and 11.8% for B2C services.
            </div>

            <MarketingBudgetCalculator />

            <h2 id="difference">Marketing budget is not the same as ad spend</h2>
            <p>
              The most common budgeting mistake is treating the ad budget as
              the entire marketing budget. Paid media can create attention, but
              it cannot fix weak positioning, unclear service pages, missing
              proof, poor follow-up, or broken attribution.
            </p>
            <div className="blog-split">
              <div>
                <h3>Paid advertising</h3>
                <p>
                  Google Ads, LinkedIn, Meta, YouTube, sponsorships,
                  retargeting, direct mail, and other channels that buy
                  attention or traffic.
                </p>
              </div>
              <div>
                <h3>Total marketing system</h3>
                <p>
                  Strategy, positioning, website, landing pages, SEO, GEO, AEO,
                  content, case studies, reviews, CRM, analytics, creative,
                  reporting, sales enablement, and paid media.
                </p>
              </div>
            </div>

            <h2 id="ranges">Budget ranges by company posture</h2>
            <div className="blog-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Company situation</th>
                    <th>Total marketing range</th>
                    <th>Paid ad range</th>
                    <th>What this usually means operationally</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Referral-heavy and capacity-constrained</td>
                    <td>4% to 6% of revenue</td>
                    <td>1% to 2% of revenue</td>
                    <td>
                      Maintain reputation, improve website, document proof,
                      support referral conversion, and protect search
                      visibility.
                    </td>
                  </tr>
                  <tr>
                    <td>Healthy company seeking predictable growth</td>
                    <td>6% to 10% of revenue</td>
                    <td>2.5% to 5% of revenue</td>
                    <td>
                      Build a repeatable demand engine across website,
                      SEO/GEO/AEO, content, campaigns, tracking, and paid media.
                    </td>
                  </tr>
                  <tr>
                    <td>Expansion, new market, or competitive push</td>
                    <td>10% to 15%+ of revenue</td>
                    <td>5% to 8%+ of revenue</td>
                    <td>
                      Requires stronger creative, landing pages, sales
                      capacity, offer clarity, campaign testing, and reporting
                      discipline.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <AdReadinessScorecard />

            <h2 id="how-to-use">How to use this framework</h2>
            <div className="blog-split">
              <div>
                <h3>1. Enter realistic annual revenue</h3>
                <p>
                  Use trailing twelve months, a conservative annualized run
                  rate, or a board-approved revenue target.
                </p>
              </div>
              <div>
                <h3>2. Pick the growth posture</h3>
                <p>
                  Choose stable, prudent growth, or aggressive expansion based
                  on margin, market competition, sales capacity, and owner
                  appetite.
                </p>
              </div>
              <div>
                <h3>3. Fund the foundation before traffic</h3>
                <p>
                  Allocate budget to website, tracking, content, proof, CRM,
                  and conversion paths before increasing ad spend.
                </p>
              </div>
              <div>
                <h3>4. Review spend monthly</h3>
                <p>
                  Watch qualified lead volume, source quality, cost per
                  opportunity, close rate, gross profit, and pipeline created.
                </p>
              </div>
            </div>

            <h2 id="mistakes">Four mistakes that make marketing feel expensive</h2>
            <h3>1. Spending too little to learn anything</h3>
            <p>
              A small test budget can validate a channel, but it cannot carry
              brand building, search visibility, creative development, and
              pipeline generation at the same time.
            </p>
            <h3>2. Judging ads without fixing the destination</h3>
            <p>
              If ads send traffic to a generic homepage with weak proof,
              unclear CTAs, and no tracking, the media channel may get blamed
              for a conversion problem.
            </p>
            <h3>3. Treating project photos as optional</h3>
            <p>
              Integrator buyers need to see quality. Commercial AV rooms,
              luxury residential environments, security deployments, rack work,
              and control interfaces become evidence when captured and packaged
              correctly.
            </p>
            <h3>4. Cutting marketing when revenue slows</h3>
            <p>
              When revenue slows, inspect which parts of the system create
              qualified pipeline and which parts should be fixed, paused, or
              reallocated.
            </p>

            <h2 id="faq">FAQ</h2>
            <div className="blog-faq">
              {[
                [
                  'What percentage of revenue should a systems integrator spend on marketing?',
                  'A prudent range is usually 6% to 10% of annual revenue for total marketing investment. Referral-heavy firms may be closer to 4% to 6%, while aggressive expansion can justify 10% to 15% or more.',
                ],
                [
                  'How much of the budget should go to paid ads?',
                  'For a prudent growth plan, paid advertising often falls around 2.5% to 5% of revenue once the website, tracking, CRM, proof, offer, and sales follow-up process can convert demand.',
                ],
                [
                  'What should be fixed before increasing ad spend?',
                  'Fix tracking, CRM source attribution, landing pages, service positioning, project proof, reviews, follow-up process, and reporting cadence.',
                ],
              ].map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>

            <section className="blog-cta" id="cta">
              <h2>
                Want to know whether your integrator marketing budget is too
                low, too high, or just poorly allocated?
              </h2>
              <p>
                AI Media helps systems integrators build marketing systems that
                turn visibility into qualified opportunities: website strategy,
                SEO/GEO/AEO, content, paid media, creative, tracking, reporting,
                and sales enablement.
              </p>
              <Link href="/#contact">Request a Growth Budget Review</Link>
            </section>

            <h2 id="sources">Sources and benchmark notes</h2>
            <div className="blog-source-note">
              Sources referenced in the original guide include Gartner CMO
              Spend Survey reporting for 2025 and 2026 and U.S. Small Business
              Administration marketing budget guidance. Systems integrators
              should adjust benchmarks based on margin, sales cycle, referral
              strength, local competition, and operating capacity.
            </div>
          </article>

          <aside className="blog-toc" aria-label="Article navigation">
            <h2>In this guide</h2>
            <a href="#answer">The answer</a>
            <a href="#calculator">Budget calculator</a>
            <a href="#difference">Marketing vs. advertising</a>
            <a href="#ranges">Budget ranges</a>
            <a href="#scorecard">Ad-readiness scorecard</a>
            <a href="#how-to-use">How to use it</a>
            <a href="#mistakes">Common mistakes</a>
            <a href="#faq">FAQ</a>
            <div>
              <strong>Fast rule:</strong> Start with annual revenue x 6% to 10%
              for prudent growth.
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
