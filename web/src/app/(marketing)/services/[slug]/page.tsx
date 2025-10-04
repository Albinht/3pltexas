import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ServicePageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = await cmsClient.getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return {
    title: service.title,
    description: service.excerpt,
  };
}

export default async function ServicePage(props: ServicePageProps) {
  const { slug } = await props.params;
  const service = await cmsClient.getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-neutral-500">
        <Link href="/services" className="transition hover:text-orange-600">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{service.title}</span>
      </nav>
      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {service.title}
        </h1>
        <p className="mt-4 text-base text-neutral-600">{service.heroHighlight}</p>
      </header>
      <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-sm text-neutral-700">
          <p>
            3PL Texas configures each engagement through discovery workshops, detailed process mapping, and technology alignment. Expect a launch plan that covers integrations, SOPs, resource planning, and continuous improvement cadences.
          </p>
          <p>
            We partner with your operations, finance, and customer teams to design KPIs that reflect your brand’s promise. Gain full visibility into throughput, cost-to-serve, and service-level commitments from day one.
          </p>
        </div>
        <aside className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">Core capabilities</h2>
          <ul className="space-y-3 text-sm text-neutral-600">
            {service.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/quote"
            className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Request a proposal
          </Link>
        </aside>
      </div>
      <div className="mt-16 grid gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-lg font-semibold text-neutral-900">Delivery playbook</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Discovery",
              description:
                "Volume modeling, SKU mapping, and systems audit to design your Texas supply chain footprint.",
            },
            {
              title: "Implementation",
              description:
                "Dedicated launch team handles integrations, facility configuration, labor training, and SOP build-out.",
            },
            {
              title: "Optimization",
              description:
                "Weekly performance reviews, cost benchmarking, and roadmap planning to keep your logistics agile.",
            },
          ].map((stage) => (
            <div key={stage.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-neutral-900">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const services = await cmsClient.getServices();
  return services.map((service) => ({ slug: service.slug }));
}
