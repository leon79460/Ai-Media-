'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { blogPosts } from '../data/blogs';

const SECTION_BADGE = 'Insights & Resources';
const SECTION_TITLE = 'Latest Insights From AI Media';
const SECTION_SUB =
  'Explore modern design trends, AI powered marketing strategies, branding insights, and digital growth ideas to help your business stay ahead in the evolving online world.';

const THUMB_THEMES = ['web-design', 'branding', 'seo'];
const BADGE_ICON_STYLE = {
  width: 18,
  height: 18,
  flex: '0 0 18px',
};

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.animation = `revealUp 1.2s ease ${delay}s forwards`;
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

function BadgeIcon() {
  return (
    <Image
      src="/blog/blog.svg"
      alt="Blog"
      aria-hidden="true"
      width={18}
      height={18}
      style={BADGE_ICON_STYLE}
    />
  );
}

function BlogCard({ post, href, delay }) {
  const ref = useRef(null);
  useReveal(ref, delay);

  return (
    <article ref={ref} className="blog-card blog-home-card">
      <Link className="blog-home-image" href={href} aria-label={post.title}>
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        ) : (
          <div className={`blog-thumbnail is-${post.theme}`} aria-hidden="true">
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
        <p style={{ display: 'block', marginTop: '8px', color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
          {post.excerpt}
        </p>
      </div>
      <Link className="read-more" href={href}>
        Read More
      </Link>
    </article>
  );
}

export default function Blogs() {
  const headRef = useRef(null);
  useReveal(headRef);
  const homePosts = blogPosts.map((post, index) => ({
    ...post,
    theme: THUMB_THEMES[index % THUMB_THEMES.length],
    imageLabel: post.eyebrow,
  }));

  return (
    <section id="blogs" className="blog-home-section">
      <div className="blog-home-shell">
        <div ref={headRef} className="blog-home-header">
          <span className="section-badge blog-home-badge">
            <BadgeIcon />
            {SECTION_BADGE}
          </span>
          <h2 className="section-title blog-home-title">{SECTION_TITLE}</h2>
          <p className="section-sub blog-home-sub">{SECTION_SUB}</p>
        </div>

        <div className="blog-home-carousel">
          <button
            className="blog-home-arrow is-prev"
            type="button"
            aria-label="Previous blog posts"
          >
            <span aria-hidden="true" />
          </button>

          <div className="blog-home-grid">
            {homePosts.map((post, i) => (
              <BlogCard
                key={post.slug}
                post={post}
                href={post.href}
                delay={i * 0.1}
              />
            ))}
          </div>

          <button
            className="blog-home-arrow is-next"
            type="button"
            aria-label="Next blog posts"
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
