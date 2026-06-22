'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import AnimatedCard from '../../components/animation/AnimatedCard';
import Reveal, { motionEase } from '../../components/animation/Reveal';
import StaggerContainer from '../../components/animation/StaggerContainer';
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

function getBlogCardVariant(index) {
  const direction = index % 2 === 0 ? -1 : 1;

  return {
    hidden: {
      opacity: 0,
      x: direction * 28,
      y: 34,
      rotate: direction * 1.4,
      scale: 0.96,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.76, ease: motionEase },
    },
  };
}

function BlogCard({ post, href, index }) {
  return (
    <AnimatedCard
      className="blog-card blog-home-card"
      variants={getBlogCardVariant(index)}
    >
      <Link className="blog-home-image" href={href} aria-label={post.title}>
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
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
        <p style={{ display: 'block', marginTop: '8px', color: '#000000', fontSize: '16px', lineHeight: '1.5' }}>
          {post.excerpt}
        </p>
      </div>
      <Link className="read-more" href={href}>
        Read More
      </Link>
    </AnimatedCard>
  );
}

export default function Blogs() {
  const gridRef = useRef(null);
  const homePosts = blogPosts.map((post, index) => ({
    ...post,
    theme: THUMB_THEMES[index % THUMB_THEMES.length],
    imageLabel: post.eyebrow,
  }));

  function scrollCarousel(direction) {
    const grid = gridRef.current;
    if (!grid) return;

    const card = grid.querySelector('.blog-home-card');
    const styles = window.getComputedStyle(grid);
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    const cardWidth = card?.getBoundingClientRect().width || grid.clientWidth;

    grid.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    });
  }

  return (
    <section id="blogs" className="blog-home-section">
      <div className="blog-home-shell">
        <header className="blog-home-header">
          <Reveal delay={0} duration={0.4} yOffset={6} blur="6px">
            <span className="section-badge blog-home-badge">
              <BadgeIcon />
              {SECTION_BADGE}
            </span>
          </Reveal>

          <h2 id="blogs-title" className="section-title blog-home-title">
            <Reveal as="span" delay={0.25} duration={0.4} yOffset={6} blur="6px" style={{ display: 'block' }}>
              {SECTION_TITLE}
            </Reveal>
          </h2>

          <Reveal delay={0.75} duration={0.4} yOffset={6} blur="6px">
            <p className="section-sub blog-home-sub">{SECTION_SUB}</p>
          </Reveal>
        </header>

        <div className="blog-home-carousel">
          <button
            className="blog-home-arrow is-prev"
            type="button"
            aria-label="Previous blog posts"
            onClick={() => scrollCarousel(-1)}
          >
            <span aria-hidden="true" />
          </button>

          <StaggerContainer ref={gridRef} className="blog-home-grid" delay={0.15} stagger={0.2}>
            {homePosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                post={post}
                href={post.href}
                index={index}
              />
            ))}
          </StaggerContainer>

          <button
            className="blog-home-arrow is-next"
            type="button"
            aria-label="Next blog posts"
            onClick={() => scrollCarousel(1)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
