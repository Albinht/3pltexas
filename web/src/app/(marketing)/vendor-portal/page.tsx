export const metadata = {
  title: "Vendor Portal",
  description:
    "Warehouses, carriers, and technology partners can express interest in collaborating with 3PL Texas.",
};

export default function VendorPortalPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
        Partner with us
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        Join the 3PL Texas partner ecosystem.
      </h1>
      <p className="mt-5 text-base text-neutral-600">
        Are you a warehouse operator, carrier, or technology provider supporting Texas brands? Submit your details and our partnerships team will reach out with next steps.
      </p>
      <form
        className="mt-8 space-y-4"
        action="https://tally.so/r/your-vendor-form"
        method="POST"
      >
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="vendor-name">
            Company name
          </label>
          <input
            id="vendor-name"
            name="company"
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="vendor-contact">
              Contact name
            </label>
            <input
              id="vendor-contact"
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="vendor-email">
              Email
            </label>
            <input
              id="vendor-email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="vendor-type">
            Partner type
          </label>
          <input
            id="vendor-type"
            name="partnerType"
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            placeholder="Warehouse, carrier, technology, other"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="vendor-notes">
            Service coverage and capabilities
          </label>
          <textarea
            id="vendor-notes"
            name="notes"
            rows={4}
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          Submit details
        </button>
      </form>
    </section>
  );
}
