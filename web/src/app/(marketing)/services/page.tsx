import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Services",
  description:
    "Explore fulfillment, warehousing, value-added operations, and freight solutions tailored for Texas-based brands.",
};

export default async function ServicesPage() {
  const services = await cmsClient.getServices();
  const categories: Record<NonNullable<(typeof services)[number]["category"]>, string> = {
    fulfillment: "Fulfillment operations",
    warehousing: "Warehousing & storage",
    "value-added": "Value-added services",
    transport: "Transportation & freight",
    consulting: "Consulting & strategy",
  };

  const grouped = services.reduce(
    (acc, service) => {
      const key = service.category ?? "fulfillment";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key]!.push(service);
      return acc;
    },
    {} as Record<string, typeof services>,
  );

  const orderedGroups = Object.entries(categories)
    .filter(([key]) => grouped[key]?.length)
    .map(([key, label]) => ({
      key,
      label,
      services: grouped[key]!.sort((a, b) => a.title.localeCompare(b.title)),
    }));

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Solutions
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Modular services engineered for resilience and growth.
        </h1>
        <p className="mt-6 text-base text-neutral-600">
          Configure the mix of warehousing, fulfillment, value-added operations, and transportation support that matches your business model. Every service is backed by shared visibility, Texas-centric expertise, and rigorous playbooks.
        </p>
      </div>
      <div className="mt-12 space-y-12">
        {orderedGroups.map((group) => (
          <section key={group.key}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                  {group.label}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                  {group.label}
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {group.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      {service.featured && (
                        <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
                          Core focus
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-600">
                      {service.excerpt}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-orange-600">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
