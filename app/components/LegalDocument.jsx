import Footer from './Footer';
import Navbar from './Navbar';

export default function LegalDocument({
  badge,
  title,
  intro,
  lastUpdated,
  highlights,
  notice,
  sections,
}) {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <section className="legal-hero" aria-labelledby="legal-title">
          <span className="section-badge">{badge}</span>
          <h1 id="legal-title">{title}</h1>
          <p>{intro}</p>
          <small>Last updated: {lastUpdated}</small>
        </section>

        <section className="legal-layout" aria-label={title}>
          <article className="legal-article blog-article">
            {highlights?.length ? (
              <div className="legal-summary" aria-label="Policy summary">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            ) : null}

            {notice ? (
              <div
                className="blog-callout"
                dangerouslySetInnerHTML={{ __html: notice }}
              />
            ) : null}

            {sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.content ? (
                  <div
                    className="legal-section-content"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                ) : (
                  section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))
                )}
                {!section.content && section.items?.length ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="legal-toc blog-toc" aria-label="Document navigation">
            <h2>On This Page</h2>
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            ))}
            <div>
              Questions about these terms can be sent through the contact form
              on this website.
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
