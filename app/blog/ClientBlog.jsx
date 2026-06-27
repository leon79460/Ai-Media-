'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { blogPosts } from './data/blogs';
import Reveal from '../components/animation/Reveal';
import TextReveal from '../components/animation/TextReveal';
import StaggerContainer from '../components/animation/StaggerContainer';
import AnimatedCard from '../components/animation/AnimatedCard';

const THUMB_THEMES = ['web-design', 'branding', 'seo'];

export default function ClientBlog() {
  return (
    <>
      <Navbar />
      <main className="blog-index-page">
        <section className="blog-index-hero">
          <Reveal delay={0.04} duration={0.9} yOffset={10} blur="12px">
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

          <TextReveal
            as="h1"
            text="Latest Insights From AI Media"
            delay={0.36}
            stagger={0.11}
          />

          <Reveal delay={0.86} duration={1.2} yOffset={8} blur="12px">
            <p>
              Practical strategy, budgeting, SEO, content, and website guidance
              for systems integrators that want more predictable growth.
            </p>
          </Reveal>
        </section>

        <StaggerContainer as="section" className="blog-index-grid" aria-label="Blog posts" delay={0.15} stagger={0.2}>
          {blogPosts.map((post, index) => (
            <AnimatedCard
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
                <p className="blog-card-excerpt blog-index-excerpt">{post.excerpt}</p>
              </div>

              <Link className="read-more" href={post.href}>
                Read More
              </Link>
            </AnimatedCard>
          ))}
        </StaggerContainer>
      </main>
      <Footer />
    </>
  );
}
