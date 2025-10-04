import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Industries",
  description:
    "See how 3PL Texas tailors fulfillment and logistics programs to the unique requirements of high-growth industries.",
};

export default async function IndustriesPage() {
  const industries = await cmsClient.getIndustries();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Specialties
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Industry-specific programs that keep your promise to customers.
        </h1>
        <p className="mt-6 text-base text-neutral-600">
          Partner with a team that understands regulatory nuance, seasonal demand shifts, and the service-level expectations in your space. Each industry program blends Texas facility coverage with tailored SOPs and analytics.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
          >
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">
                {industry.title}
              </h2>
              <p className="mt-4 text-sm text-neutral-600">
                {industry.challenges[0]}
              </p>
            </div>
            <span className="mt-6 text-sm font-semibold text-orange-600">
              View playbook →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
