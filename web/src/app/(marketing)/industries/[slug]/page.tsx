import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: IndustryPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = await cmsClient.getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry not found",
    };
  }

  return {
    title: industry.title,
    description: industry.challenges[0],
  };
}

export default async function IndustryPage(props: IndustryPageProps) {
  const { slug } = await props.params;
  const industry = await cmsClient.getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-neutral-500">
        <Link href="/industries" className="transition hover:text-orange-600">
          Industries
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{industry.title}</span>
      </nav>
      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {industry.title}
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          3PL Texas orchestrates facilities, labor, and technology around the unique needs of the {industry.title.toLowerCase()} sector.
        </p>
      </header>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">Biggest challenges</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">Outcomes we deliver</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            {industry.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-neutral-900 px-8 py-10 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            See how we support brands like yours.
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            Request a tailored walkthrough of our facilities, technology stack, and launch milestones aligned to your growth plan.
          </p>
        </div>
        <Link
          href="/quote"
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          Request proposal
        </Link>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const industries = await cmsClient.getIndustries();
  return industries.map((industry) => ({ slug: industry.slug }));
}
