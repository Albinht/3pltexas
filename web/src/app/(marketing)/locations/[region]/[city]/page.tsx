import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type LocationPageProps = {
  params: Promise<{ region: string; city: string }>;
};

function formatLabel(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export async function generateMetadata(
  props: LocationPageProps,
): Promise<Metadata> {
  const { region, city } = await props.params;
  const guide = await cmsClient.getLocationGuide(region, city);

  if (!guide) {
    return {
      title: "Location not found",
    };
  }

  return {
    title: guide.title,
    description: guide.heroSubtitle,
  };
}

export default async function LocationPage(props: LocationPageProps) {
  const { region, city } = await props.params;
  const [location, guide] = await Promise.all([
    cmsClient.getLocation(region, city),
    cmsClient.getLocationGuide(region, city),
  ]);

  if (!location || !guide) {
    notFound();
  }

  const cityLabel = formatLabel(location.city);

  return (
    <div className="bg-neutral-100 text-neutral-900">
      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <nav className="text-sm text-neutral-400">
              <Link href="/locations" className="transition hover:text-orange-400">
                Locations
              </Link>
              <span className="mx-2">/</span>
              <span>{cityLabel}</span>
            </nav>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                Texas warehousing insights
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {guide.title}
              </h1>
              <p className="mt-4 text-base text-neutral-200">{guide.heroSubtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-neutral-400">
              <span>Updated {guide.lastUpdated}</span>
              <span>Written by {guide.author}</span>
              <span>Edited by {guide.editor}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
              >
                Match me up
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
              >
                How it works
              </Link>
            </div>
          </div>
          <aside className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
              Key capabilities
            </p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-100">
              {location.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-400" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-neutral-300">Facility size: {location.facilitySizeSqFt ? `${location.facilitySizeSqFt.toLocaleString()} sq ft` : "Varies"}</p>
            {location.certifications?.length ? (
              <p className="mt-2 text-xs text-neutral-300">Certifications: {location.certifications.join(", ")}</p>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{guide.disclaimer}</p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            <a href="#providers" className="transition hover:text-orange-600">
              Providers
            </a>
            <a href="#highlights" className="transition hover:text-orange-600">
              City advantages
            </a>
            <a href="#options" className="transition hover:text-orange-600">
              Warehouse options
            </a>
            <a href="#pricing" className="transition hover:text-orange-600">
              Pricing
            </a>
            <a href="#stats" className="transition hover:text-orange-600">
              State stats
            </a>
          </div>
        </div>
      </section>

      <section id="providers" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Featured match-ready partners
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            We’ll connect you with {cityLabel} 3PL companies.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {guide.providers.map((provider) => (
            <article key={provider.name} className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-900">{provider.name}</h3>
                <p className="text-sm font-semibold text-orange-600">{provider.excerpt}</p>
                <p className="text-sm text-neutral-600">{provider.description}</p>
              </div>
              <dl className="mt-4 space-y-2 text-xs text-neutral-500">
                <div>
                  <dt className="font-semibold text-neutral-700">Address</dt>
                  <dd>{provider.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-700">Lead types</dt>
                  <dd>{provider.leadTypes.join(", ")}</dd>
                </div>
                {provider.founded ? (
                  <div>
                    <dt className="font-semibold text-neutral-700">Established</dt>
                    <dd>{provider.founded}</dd>
                  </div>
                ) : null}
                {typeof provider.dealsClosed === "number" ? (
                  <div>
                    <dt className="font-semibold text-neutral-700">Deals closed via network</dt>
                    <dd>{provider.dealsClosed}</dd>
                  </div>
                ) : null}
                {typeof provider.reviewsCount === "number" ? (
                  <div>
                    <dt className="font-semibold text-neutral-700">Verified reviews</dt>
                    <dd>{provider.reviewsCount}</dd>
                  </div>
                ) : null}
              </dl>
              <div className="mt-5">
                <Link
                  href="/quote"
                  className="inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-orange-500 hover:text-orange-600"
                >
                  {provider.ctaLabel ?? "Discuss fit"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="highlights" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Why brands choose {cityLabel} for warehousing.
              </h2>
              <p className="mt-4 text-base text-neutral-600">{location.summary}</p>
            </div>
            <ul className="space-y-4 text-sm text-neutral-600">
              {guide.cityHighlights.map((highlight) => (
                <li key={highlight.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">{highlight.title}</p>
                  <p className="mt-2 text-neutral-700">{highlight.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="options" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Warehousing models compared
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Warehouse management options in {cityLabel}.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {guide.warehouseOptions.map((option) => (
            <div key={option.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">{option.title}</h3>
              <p className="mt-3 text-sm text-neutral-600">{option.description}</p>
              <div className="mt-4 grid gap-3 text-sm text-neutral-600 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Pros</p>
                  <ul className="mt-2 space-y-1">
                    {option.pros.map((pro) => (
                      <li key={pro}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Cons</p>
                  <ul className="mt-2 space-y-1">
                    {option.cons.map((con) => (
                      <li key={con}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">Typical cost</p>
              <p className="text-sm text-neutral-700">{option.costRange}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How to find 3PL fulfillment and warehousing services in {cityLabel}.
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {guide.howToFind.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What to consider when evaluating providers.
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {guide.selectionChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Advantages of warehousing in {cityLabel}.
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {guide.advantages.map((advantage) => (
                <li key={advantage} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Considerations and challenges.
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {guide.disadvantages.map((disadvantage) => (
                <li key={disadvantage} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                  <span>{disadvantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Average warehouse storage and fulfillment costs in Texas.
          </h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200">
            <table className="w-full text-sm text-neutral-700">
              <thead className="bg-neutral-100 text-left text-xs uppercase tracking-[0.3em] text-neutral-500">
                <tr>
                  <th className="px-4 py-3">Pricing type</th>
                  <th className="px-4 py-3">{cityLabel}</th>
                  <th className="px-4 py-3">National average</th>
                </tr>
              </thead>
              <tbody>
                {guide.pricing.map((row) => (
                  <tr key={row.label} className="border-t border-neutral-200">
                    <td className="px-4 py-3 font-medium text-neutral-900">{row.label}</td>
                    <td className="px-4 py-3">{row.locationValue}</td>
                    <td className="px-4 py-3">{row.nationalValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="stats" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Fulfillment company data in Texas.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {guide.stateStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-neutral-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-neutral-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Top employers shaping the Texas economy.
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {guide.topBusinesses.map((business) => (
                <li key={business.name} className="flex items-center justify-between rounded-3xl border border-neutral-200 bg-white px-4 py-3">
                  <span className="font-medium text-neutral-800">{business.name}</span>
                  <span>{business.employees}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {guide.closingCta.heading}
          </h2>
          <p className="mx-auto max-w-3xl text-base text-neutral-200">{guide.closingCta.body}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
            >
              Match me up
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
            >
              Talk to a strategist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const locations = await cmsClient.getLocations();
  return locations.map((location) => ({
    region: location.region,
    city: location.city,
  }));
}
