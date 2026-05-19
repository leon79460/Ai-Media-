// ============================================================
// Blogs.jsx — "Latest Insights From AI Media" section
// EDIT: SECTION_TITLE, SECTION_SUB, POSTS array
// Each post: title, excerpt, image, href
// ============================================================
'use client';
import { useEffect, useRef, useState } from 'react';

const SECTION_BADGE = 'Insights & Resources';
const SECTION_TITLE = 'Latest Insights From AI Media';
const SECTION_SUB =
  'Explore modern design trends, AI powered marketing strategies, branding insights, and digital growth ideas to help your business stay ahead in the evolving online world.';

// ⚠️ Save images to /public/ before going live
const POSTS = [
  {
    title: 'AI in Web Design',
    excerpt: 'Smarter ways to design faster and better.',
    image:
      'https://www.figma.com/api/mcp/asset/630513fe-fc21-46fa-9aed-6bf736fd538b',
    href: '#',
  },
  {
    title: 'Branding in 2026',
    excerpt: 'Why clear branding builds trust.',
    image:
      'https://www.figma.com/api/mcp/asset/5cac7c3c-0a8a-4c33-973f-a88b17e74dd8',
    href: '#',
  },
  {
    title: 'SEO vs Paid Ads',
    excerpt: 'Choose the right growth channel.',
    image:
      'https://www.figma.com/api/mcp/asset/cfa341b8-ab82-4adb-aa1d-003beb6ca79e',
    href: '#',
  },
  // ADD more posts here — they'll be shown when clicking next arrow
  // { title: "Your New Post", excerpt: "...", image: "/your-image.jpg", href: "#" },
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.animation = `revealUp 0.6s ease ${delay}s forwards`;
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

function BlogCard({ post, delay }) {
  const ref = useRef(null);
  useReveal(ref, delay);

  return (
    <div
      ref={ref}
      className="blog-card card-hover"
      style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: 'var(--card-shadow)',
        opacity: 0,
        transition: 'transform 0.3s,box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
        gap: '19px',
        flex: '1',
        minWidth: '280px',
        maxWidth: '384px',
      }}
    >
      {/* Post image — EDIT via POSTS array */}
      <div
        style={{
          height: '279px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Title — EDIT via POSTS array */}
          <h3
            style={{
              fontFamily: 'var(--font)',
              fontWeight: 500,
              fontSize: '20px',
              color: '#000',
              letterSpacing: '-0.2px',
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </h3>
          {/* Excerpt — EDIT via POSTS array */}
          <p
            style={{
              fontFamily: 'var(--font)',
              fontSize: '16px',
              color: '#3d3d3d',
              opacity: 0.8,
              lineHeight: 1.64,
            }}
          >
            {post.excerpt}
          </p>
        </div>
        {/* Read more link — EDIT href via POSTS array */}
        <a
          href={post.href}
          className="read-more"
          style={{
            fontFamily: 'var(--font)',
            fontWeight: 700,
            fontSize: '16px',
            color: '#000',
            textDecoration: 'underline',
            lineHeight: 1.64,
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default function Blogs() {
  const headRef = useRef(null);
  useReveal(headRef);

  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(POSTS.length / perPage);
  const visible = POSTS.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      id="blogs"
      style={{ backgroundColor: '#f5f5f5', padding: '100px 40px' }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '44px',
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <div
          ref={headRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '13px',
            maxWidth: '760px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          <span className="section-badge">📰 {SECTION_BADGE}</span>
          <h2 className="section-title">{SECTION_TITLE}</h2>
          <p
            className="section-sub"
            style={{ fontSize: '18px', lineHeight: 1.8 }}
          >
            {SECTION_SUB}
          </p>
        </div>

        {/* Blog cards + navigation */}
        <div style={{ width: '100%', position: 'relative' }}>
          {/* Prev arrow */}
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            style={{
              position: 'absolute',
              left: '-28px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid #030303',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
              fontSize: '16px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            ←
          </button>

          {/* Cards */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {visible.map((post, i) => (
              <BlogCard key={post.title} post={post} delay={i * 0.1} />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            style={{
              position: 'absolute',
              right: '-28px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              background: '#030303',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
              fontSize: '16px',
              color: '#fff',
              boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
