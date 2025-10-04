import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Reviews",
  description:
    "Independent analysis of popular 3PLs and fulfillment providers to help brands choose the right partner.",
};

export default async function ReviewsPage() {
  const reviews = await cmsClient.getReviews();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Provider scorecards
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Compare leading third-party logistics providers.
        </h1>
        <p className="mt-5 text-base text-neutral-600">
          Review capabilities, service strengths, and considerations for major fulfillment companies before you build your shortlist.
        </p>
      </div>
      <div className="mt-10 space-y-6">
        {reviews.map((review) => (
          <Link
            key={review.slug}
            href={`/reviews/${review.slug}`}
            className="block rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900">
                  {review.company}
                </h2>
                <p className="mt-2 text-sm text-neutral-600">{review.summary}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                  Rating
                </p>
                <p className="text-3xl font-semibold text-neutral-900">
                  {review.rating.toFixed(1)}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {review.industriesServed.map((industry) => (
                <span key={industry} className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-600">
                  {industry}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
