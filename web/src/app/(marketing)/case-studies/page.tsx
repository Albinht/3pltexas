import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Case Studies",
  description:
    "Proof of performance from brands that trust 3PL Texas with their fulfillment, warehousing, and logistics programs.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await cmsClient.getCaseStudies();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Results
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Brands scaling with 3PL Texas.
        </h1>
        <p className="mt-6 text-base text-neutral-600">
          See how our teams collaborate with ambitious brands to reduce logistics costs, compress delivery timelines, and create reliable customer experiences.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <Link
            key={caseStudy.slug}
            href={`/case-studies/${caseStudy.slug}`}
            className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                {caseStudy.industry}
              </p>
              <h2 className="text-2xl font-semibold text-neutral-900">
                {caseStudy.client}
              </h2>
              <p className="text-sm text-neutral-600">{caseStudy.summary}</p>
            </div>
            <div className="mt-6 text-sm font-semibold text-orange-600">
              View outcomes →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
