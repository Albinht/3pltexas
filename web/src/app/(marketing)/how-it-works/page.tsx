const steps = [
  {
    title: "Discovery & design",
    description:
      "We map current operations, SKUs, technology stack, and customer promises. Expect data-backed modeling of facilities, labor, automation, and integrations.",
  },
  {
    title: "Implementation",
    description:
      "A dedicated launch pod configures WMS, builds SOPs, trains onsite teams, and conducts test orders. Parallel project plans keep your team in the loop.",
  },
  {
    title: "Go-live & optimization",
    description:
      "We monitor launch metrics, fine-tune staffing, and formalize weekly/quarterly reviews to ensure service levels and cost targets hold steady.",
  },
];

const readiness = [
  "SKU catalogs, packaging specs, and compliance requirements",
  "Monthly order volumes, seasonality, and growth targets",
  "Systems landscape (ecommerce, ERP, OMS, support) and integration needs",
  "Preferred carriers, incumbent contracts, and rate objectives",
  "Internal stakeholders aligned to operations, finance, and customer experience",
];

export const metadata = {
  title: "How It Works",
  description:
    "Learn the 3PL Texas onboarding framework from discovery through optimization to ensure a smooth logistics transition.",
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
        Process
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        A structured path from kickoff to steady-state logistics.
      </h1>
      <p className="mt-5 max-w-3xl text-base text-neutral-600">
        We rely on a proven launch framework to de-risk transitions, accelerate time-to-value, and keep every stakeholder aligned.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
              Step {index + 1}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-neutral-900">{step.title}</h2>
            <p className="mt-3 text-sm text-neutral-600">{step.description}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="text-xl font-semibold text-neutral-900">What we need from you</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            {readiness.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">Typical timeline</h2>
          <dl className="mt-4 space-y-3 text-sm text-neutral-600">
            <div>
              <dt className="font-semibold text-neutral-900">Week 1–2</dt>
              <dd>Discovery sessions, data gathering, solution blueprint</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Week 3–6</dt>
              <dd>Integrations, facility configuration, SOP creation</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Week 7–8</dt>
              <dd>Pilot orders, training, go-live readiness review</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-900">Week 9+</dt>
              <dd>Launch, daily standups, weekly performance optimization</dd>
            </div>
          </dl>
        </div>
      </section>
    </section>
  );
}
