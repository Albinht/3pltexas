import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: CaseStudyPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const caseStudy = await cmsClient.getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case study not found",
    };
  }

  const title = `${caseStudy.client} Case Study`.replace(/\s+/g, " ");

  return {
    title,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage(props: CaseStudyPageProps) {
  const { slug } = await props.params;
  const caseStudy = await cmsClient.getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-neutral-500">
        <Link href="/case-studies" className="transition hover:text-orange-600">
          Case Studies
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{caseStudy.client}</span>
      </nav>
      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          {caseStudy.industry}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {caseStudy.client}
        </h1>
        <p className="mt-4 text-base text-neutral-600">{caseStudy.summary}</p>
      </header>
      <section className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
          Headline result
        </p>
        <p className="mt-2 text-2xl font-semibold text-neutral-900">
          {caseStudy.headlineResult}
        </p>
        <dl className="mt-6 grid gap-6 sm:grid-cols-3">
          {caseStudy.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {metric.label}
              </dt>
              <dd className="mt-2 text-xl font-semibold text-neutral-900">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <article className="prose prose-neutral mt-10 max-w-none">
        <p>{caseStudy.body}</p>
        <p>
          Partnering with 3PL Texas meant a dedicated launch squad, integrated technology stack, and operational governance that delivers weekly optimization insights.
        </p>
      </article>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-neutral-200 bg-white px-6 py-8 shadow-sm">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">
            Build your roadmap
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Request a tailored proposal outlining facilities, technology integrations, and launch milestones.
          </p>
        </div>
        <Link
          href="/quote"
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const caseStudies = await cmsClient.getCaseStudies();
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}
