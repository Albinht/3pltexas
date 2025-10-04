import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cmsClient } from "@/lib/cms";
import { ResourceArticleContent } from "@/components/resource-article";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await cmsClient.getResourceArticles();
  return articles
    .filter((article) => article.collection === "resources")
    .map((article) => ({ slug: article.slug.split("/").pop() ?? article.slug }));
}

export async function generateMetadata(props: ResourcePageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await cmsClient.getResourceArticleBySlug(`resources/${slug}`);

  if (!article) {
    return {
      title: "Resource not found",
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ResourceArticlePage(props: ResourcePageProps) {
  const { slug } = await props.params;
  const article = await cmsClient.getResourceArticleBySlug(`resources/${slug}`);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-neutral-100 text-neutral-900">
      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6">
          <nav className="text-sm text-neutral-400">
            <Link href="/resources" className="transition hover:text-orange-400">
              Resources
            </Link>
            <span className="px-2">/</span>
            <span>{article.title}</span>
          </nav>
          {article.heroEyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
              {article.heroEyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="text-base text-neutral-200">{article.summary}</p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-neutral-400">
            {article.lastUpdated ? <span>Updated {article.lastUpdated}</span> : null}
            {article.author ? <span>Written by {article.author}</span> : null}
            {article.editor ? <span>Edited by {article.editor}</span> : null}
            {article.readTime ? <span>{article.readTime}</span> : null}
          </div>
          {article.heroCtas?.length ? (
            <div className="flex flex-wrap gap-4">
              {article.heroCtas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <ResourceArticleContent article={article} />
      </section>
    </div>
  );
}
