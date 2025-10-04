export const metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the 3PL Texas newsletter for logistics insights and Texas market updates.",
};

export default function NewsletterPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Stay in the loop
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Subscribe for Texas logistics intelligence.
        </h1>
        <p className="mt-5 text-base text-neutral-600">
          We curate insights on fulfillment strategy, cost benchmarks, cross-border trends, and supply chain technology—all tailored to brands shipping from Texas. Delivered twice per month.
        </p>
      </div>
      <form
        className="mt-8 flex flex-col gap-4 sm:flex-row"
        action="https://tally.so/r/your-newsletter-form"
        method="POST"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Work email"
          className="w-full rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
        />
        <button
          type="submit"
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-neutral-500">
        We respect your inbox. Unsubscribe any time.
      </p>
    </section>
  );
}
