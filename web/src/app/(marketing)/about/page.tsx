export const metadata = {
  title: "About",
  description:
    "Learn about the team, values, and technology powering 3PL Texas across the state.",
};

const values = [
  {
    title: "Operational craftsmanship",
    description:
      "Our teams obsess over process, quality, and continuous improvement so your brand feels the impact in every customer interaction.",
  },
  {
    title: "Transparent partnerships",
    description:
      "Clear KPIs, shared dashboards, and proactive communication keep your stakeholders aligned at every step.",
  },
  {
    title: "Texas resilience",
    description:
      "Facilities, people, and technology built to withstand disruption and maintain service during peak demand.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Who we are
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Texas-built logistics for ambitious brands.
        </h1>
        <p className="mt-6 text-base text-neutral-600">
          3PL Texas is an independent logistics partner headquartered in Dallas–Fort Worth. We blend decades of operational experience with modern automation and analytics to create fulfillment programs that scale with demand.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">{value.title}</h2>
            <p className="mt-3 text-sm text-neutral-600">{value.description}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 grid gap-12 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="text-xl font-semibold text-neutral-900">Leadership team</h2>
          <p className="mt-4 text-sm text-neutral-600">
            Seasoned operations leaders, data scientists, and logistics strategists guide every program. Our leaders have scaled fulfillment for national brands, engineered automation, and launched cross-border networks.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-600">
            <li>Chief Executive Officer – logistics veteran with 20+ years across 3PLs and shippers.</li>
            <li>Chief Operations Officer – designed robotics-enabled facilities throughout Texas.</li>
            <li>Head of Client Strategy – former ecommerce operator focused on CX and revenue impact.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">Certifications & partners</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>FDA, cGMP, and ISO-compliant processes</li>
            <li>Preferred carrier relationships with UPS, FedEx, USPS, DHL</li>
            <li>Technology partnerships with Shopify Plus, NetSuite, Skubana, and ShipEngine</li>
            <li>Member of Texas Warehouse Association and IWLA</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
