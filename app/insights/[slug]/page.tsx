import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { articles, getArticle, formatDate, type Block } from "@/lib/insights";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import styles from "./article.module.css";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    path: `/insights/${article.slug}`,
    description: article.dek,
    type: "article",
    keywords: article.keywords,
    publishedTime: article.date,
    authors: [article.author],
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "p":
      return <p key={i}>{block.text}</p>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i}>
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ol>
      );
    case "quote":
      return <blockquote key={i}>{block.text}</blockquote>;
    case "callout":
      return (
        <aside key={i} className={styles.callout}>
          <p className={styles.calloutTitle}>{block.title}</p>
          <p className={styles.calloutText}>{block.text}</p>
        </aside>
      );
    default:
      return null;
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(article),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${article.slug}` },
          ]),
        ]}
      />

      <article>
        <header className={styles.header}>
          <div className="container container-narrow">
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link href="/insights">Insights</Link>
              <span>/</span>
              <span>{article.category}</span>
            </nav>
            <div className={styles.meta}>
              <span className="pill">{article.category}</span>
              <span className={styles.date}>{formatDate(article.date)}</span>
              <span className={styles.date}>· {article.readingTime}</span>
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.dek}>{article.dek}</p>
            <div className={styles.byline}>
              <span className={styles.avatar} aria-hidden="true">
                {article.author.split(" ").map((n) => n[0]).join("")}
              </span>
              <span>
                <span className={styles.authorName}>{article.author}</span>
                <span className={styles.authorRole}>{article.authorRole}</span>
              </span>
            </div>
          </div>
        </header>

        <div className="container container-narrow">
          <div className={`prose ${styles.body}`}>
            {article.body.map((block, i) => renderBlock(block, i))}
          </div>

          <div className={styles.keywords}>
            {article.keywords.map((k) => (
              <span key={k} className="pill">{k}</span>
            ))}
          </div>
        </div>
      </article>

      {/* More reading */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow">Keep reading</p>
            <h2>More insights.</h2>
          </div>
          <div className={styles.moreGrid}>
            {more.map((a) => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className={styles.moreCard}>
                <span className="pill">{a.category}</span>
                <h3 className={styles.moreTitle}>{a.title}</h3>
                <p className={styles.moreDek}>{a.dek}</p>
                <span className="link-arrow">
                  Read article
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Turn these ideas into growth."
        text="We do this for a living. Book a call and we'll apply it to your brand."
      />
    </>
  );
}
