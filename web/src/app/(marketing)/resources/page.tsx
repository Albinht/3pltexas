import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Resources",
  description:
    "Guides, benchmarks, and logistics insights for brands optimizing fulfillment in Texas and beyond.",
};

export default async function ResourcesPage() {
  const articles = await cmsClient.getResourceArticles();

  const grouped = articles.reduce<Record<string, typeof articles>>((acc, article) => {
    const key = article.collection;
    if (!acc[key]) acc[key] = [];
    acc[key]!.push(article);
    return acc;
  }, {});

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Insights
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Logistics intelligence for decision makers.
          </h1>
          <p className="text-base text-neutral-600">
            Explore deeply-researched guides, benchmarking studies, and practical toolkits that help operations leaders design resilient fulfillment programs.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            <span>Cost modeling</span>
            <span>3PL strategy</span>
            <span>Transportation</span>
            <span>Technology</span>
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
          <p>
            Need tailored matches instead? <Link href="/quote" className="font-semibold text-orange-600">Tell us about your project</Link> and we’ll shortlist warehouses aligned to your needs while you explore the resources below.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-16">
        {Object.entries(grouped).map(([collection, items]) => (
          <section key={collection} className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                  {collection === "resources" ? "Guides & tools" : "Warehousing & fulfillment library"}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {collection === "resources"
                    ? "Strategic resources"
                    : "Warehousing and fulfillment knowledge base"}
                </h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {items.map((article) => (
                <Link
                  key={article.path}
                  href={article.path}
                  className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
                >
                  <div className="space-y-3">
                    {article.heroEyebrow ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                        {article.heroEyebrow}
                      </p>
                    ) : null}
                    <h3 className="text-xl font-semibold text-neutral-900">{article.title}</h3>
                    <p className="text-sm text-neutral-600">{article.summary}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-neutral-400">
                    {article.lastUpdated ? <span>Updated {article.lastUpdated}</span> : null}
                    {article.readTime ? <span>{article.readTime}</span> : null}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
