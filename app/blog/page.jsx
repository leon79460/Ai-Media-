import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { blogPosts } from '../data/blogs';

export const metadata = {
  title: 'Blog - AI Media',
  description:
    'Insights for AV, smart home, security, commercial AV, and low-voltage systems integrators.',
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="blog-index-page">
        <section className="blog-index-hero">
          <span className="section-badge">Insights & Resources</span>
          <h1>Latest Insights From AI Media</h1>
          <p>
            Practical strategy, budgeting, SEO, content, and website guidance
            for systems integrators that want more predictable growth.
          </p>
        </section>

        <section className="blog-index-grid" aria-label="Blog posts">
          {blogPosts.map((post) => (
            <Link className="blog-index-card" href={post.href} key={post.slug}>
              <span>{post.eyebrow}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <small>{post.date} / {post.readTime}</small>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
