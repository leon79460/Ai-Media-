import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { blogPosts, getBlogPost } from '../data/blogs';
import ClientBlogPost from './ClientBlogPost';

const ESCAPED_UNICODE_PREFIX = `${String.fromCharCode(92)}u`;

function stringifyJsonLd(value) {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (char) =>
    `${ESCAPED_UNICODE_PREFIX}${char.charCodeAt(0).toString(16).padStart(4, '0')}`
  );
}

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
          __html: stringifyJsonLd({
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
      <ClientBlogPost post={post} />
      <Footer />
    </>
  );
}
