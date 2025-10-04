import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type ReviewPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ReviewPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const review = await cmsClient.getReviewBySlug(slug);

  if (!review) {
    return {
      title: "Review not found",
    };
  }

  return {
    title: `${review.company} Review`,
    description: review.summary,
  };
}

export default async function ReviewPage(props: ReviewPageProps) {
  const { slug } = await props.params;
  const review = await cmsClient.getReviewBySlug(slug);

  if (!review) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-neutral-500">
        <Link href="/reviews" className="transition hover:text-orange-600">
          Reviews
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{review.company}</span>
      </nav>
      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          Scorecard
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {review.company}
        </h1>
        <p className="mt-4 text-base text-neutral-600">{review.summary}</p>
      </header>
      <section className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Rating
            </p>
            <p className="mt-2 text-4xl font-semibold text-neutral-900">
              {review.rating.toFixed(1)} / 5
            </p>
          </div>
          <div className="max-w-sm text-sm text-neutral-600">
            <p className="font-semibold text-neutral-900">Ideal for</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {review.industriesServed.map((industry) => (
                <li key={industry} className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <article className="prose prose-neutral mt-10 max-w-none">
        <p>{review.body}</p>
      </article>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {review.highlights.map((highlight) => (
          <div key={highlight} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-neutral-900">Key takeaway</h2>
            <p className="mt-2 text-sm text-neutral-600">{highlight}</p>
          </div>
        ))}
      </section>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-neutral-200 bg-white px-6 py-8 shadow-sm">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">
            Need help choosing the right 3PL?
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Compare providers, understand pricing, and design a Texas-based logistics program with our team.
          </p>
        </div>
        <Link
          href="/quote"
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          Talk to an expert
        </Link>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const reviews = await cmsClient.getReviews();
  return reviews.map((review) => ({ slug: review.slug }));
}
