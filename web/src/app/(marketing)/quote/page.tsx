import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Get a Quote",
  description:
    "Request a tailored fulfillment and logistics estimate from the 3PL Texas team.",
};

export default function QuotePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Pricing & implementation
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Build your Texas logistics program.
        </h1>
        <p className="mt-5 text-base text-neutral-600">
          Share your order profile, product mix, and network needs. We’ll deliver a calibrated pricing model and implementation plan, typically within five business days.
        </p>
      </div>
      <div className="mt-10">
        <LeadForm
          intent="quote"
          headline="Request a tailored quote"
          description="Provide a quick snapshot of your operation. A solutions architect will reach out with next steps, a proposed facility mix, and timeline."
          additionalFields={
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-sm font-medium text-neutral-700" htmlFor="quote-volume">
                  Monthly order volume
                </label>
                <input
                  id="quote-volume"
                  name="monthlyOrders"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="e.g. 5,000"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700" htmlFor="quote-skus">
                  Active SKUs
                </label>
                <input
                  id="quote-skus"
                  name="activeSkus"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="e.g. 150"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700" htmlFor="quote-launch">
                  Target go-live
                </label>
                <input
                  id="quote-launch"
                  name="targetGoLive"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="e.g. Q1 2025"
                />
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
