import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type SpecialtyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: SpecialtyPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const specialty = await cmsClient.getSpecialtyBySlug(slug);

  if (!specialty) {
    return {
      title: "Specialty not found",
    };
  }

  return {
    title: specialty.title,
    description: specialty.excerpt,
  };
}

export default async function SpecialtyPage(props: SpecialtyPageProps) {
  const { slug } = await props.params;
  const specialty = await cmsClient.getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-neutral-500">
        <Link href="/specialties" className="transition hover:text-orange-600">
          Specialties
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{specialty.title}</span>
      </nav>
      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {specialty.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          {specialty.heroHighlight}
        </p>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">
            Common challenges
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            {specialty.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-red-500" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">
            Our solutions
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            {specialty.solutions.map((solution) => (
              <li key={solution} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-lg font-semibold text-neutral-900">
          Key features & capabilities
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {specialty.keyFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 text-sm text-neutral-700"
            >
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-neutral-900 px-8 py-10 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to explore this specialty?
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            Let us show you how our {specialty.title.toLowerCase()} program works in practice—request a facility tour and consultation.
          </p>
        </div>
        <Link
          href="/quote"
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          Request consultation
        </Link>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const specialties = await cmsClient.getSpecialties();
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}
