import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the 3PL Texas team to talk through fulfillment, warehousing, and logistics initiatives.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Let’s talk logistics
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Connect with a strategist.
            </h1>
            <p className="mt-5 text-base text-neutral-600">
              Share a few details about your operation and we’ll align you with the right specialist within one business day.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">Additional ways to connect</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li>Call us: +1 (555) 555-3357</li>
              <li>Email: hello@3pltexas.net</li>
              <li>Visit: 420 Logistics Way, Dallas–Fort Worth, TX 75001</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">
              Support hours: Monday–Friday · 8am–6pm CST
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
            <p>
              Looking to partner with 3PL Texas as a facility or technology vendor? Visit our {" "}
              <Link href="/vendor-portal" className="font-semibold text-orange-600">
                vendor portal
              </Link>
              {" "} to start the conversation.
            </p>
          </div>
        </div>
        <LeadForm
          intent="contact"
          headline="Tell us about your logistics goals"
          description="We’ll respond with recommended next steps and schedule a discovery session tailored to your timeline."
        />
      </div>
    </section>
  );
}
