import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Specialties",
  description:
    "Niche fulfillment and warehousing expertise for product types, business models, and specialized warehouse environments.",
};

export default async function SpecialtiesPage() {
  const specialties = await cmsClient.getSpecialties();

  // Group by niche category
  const grouped = specialties.reduce((acc, specialty) => {
    const category = specialty.nicheCategory || "other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(specialty);
    return acc;
  }, {} as Record<string, typeof specialties>);

  const categoryLabels: Record<string, string> = {
    "product-type": "Product-Specific Fulfillment",
    "business-model": "Business Model Specialization",
    "warehouse-type": "Specialized Warehouse Operations",
    "market-segment": "Market Segment Focus",
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Specialty Solutions
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Niche expertise that turns logistics into a competitive advantage.
        </h1>
        <p className="mt-6 text-base text-neutral-600">
          From hazmat compliance to crowdfunding fulfillment, our specialty programs deliver the equipment, certifications, and workflows your product category demands.
        </p>
      </div>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mt-16">
          <h2 className="text-xl font-semibold text-neutral-900">
            {categoryLabels[category] || "Other Specialties"}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {items.map((specialty) => (
              <Link
                key={specialty.slug}
                href={`/specialties/${specialty.slug}`}
                className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {specialty.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600">
                    {specialty.excerpt}
                  </p>
                </div>
                <span className="mt-6 text-sm font-semibold text-orange-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
