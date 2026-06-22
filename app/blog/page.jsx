import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { blogPosts } from './data/blogs';
import Reveal from '../components/animation/Reveal';

export const metadata = {
  title: 'Blog - AI Media',
  description:
    'Insights for AV, smart home, security, commercial AV, and low-voltage systems integrators.',
};

const THUMB_THEMES = ['web-design', 'branding', 'seo'];

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="blog-index-page">
        <section className="blog-index-hero">
          <Reveal delay={0} duration={0.4} yOffset={6} blur="6px">
            <span className="section-badge">
              <Image
                src="/blog/blog.svg"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
              />
              Insights & Resources
            </span>
          </Reveal>

          <h1>
            <Reveal delay={0.25} duration={0.4} yOffset={6} blur="6px">
              <span style={{ display: 'block' }}>Latest Insights From AI Media</span>
            </Reveal>
          </h1>

          <Reveal delay={0.75} duration={0.4} yOffset={6} blur="6px">
            <p>
              Practical strategy, budgeting, SEO, content, and website guidance
              for systems integrators that want more predictable growth.
            </p>
          </Reveal>
        </section>

        <section className="blog-index-grid" aria-label="Blog posts">
          {blogPosts.map((post, index) => (
            <article
              className="blog-card blog-home-card blog-index-card"
              key={post.slug}
            >
              <Link
                className="blog-home-image"
                href={post.href}
                aria-label={post.title}
              >
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    className={`blog-thumbnail is-${THUMB_THEMES[index % THUMB_THEMES.length]}`}
                    aria-hidden="true"
                  >
                    <div className="blog-thumb-glow" />
                    <div className="blog-thumb-device">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}
              </Link>

              <div className="blog-home-copy">
                <h3>{post.title}</h3>
                <p className="blog-index-excerpt">{post.excerpt}</p>
              </div>

              <Link className="read-more" href={post.href}>
                Read More
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
