import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type RegionPageProps = {
  params: Promise<{ region: string }>;
};

export async function generateMetadata(
  props: RegionPageProps,
): Promise<Metadata> {
  const { region } = await props.params;
  const locations = await cmsClient.getLocations();
  const regionLocations = locations.filter((location) => location.region === region);

  if (!regionLocations.length) {
    return {
      title: "Region not found",
    };
  }

  const title = `${region.replace(/-/g, " ")} Logistics Facilities`;

  return {
    title,
    description: `Explore 3PL Texas facilities serving the ${region.replace(/-/g, " ")} region.`,
  };
}

export default async function RegionPage(props: RegionPageProps) {
  const { region } = await props.params;
  const locations = await cmsClient.getLocations();
  const regionLocations = locations.filter((location) => location.region === region);

  if (!regionLocations.length) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-neutral-500">
        <Link href="/locations" className="transition hover:text-orange-600">
          Locations
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{region.replace(/-/g, " ")}</span>
      </nav>
      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {region.replace(/-/g, " ")} fulfillment & logistics.
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          Discover available facilities, capabilities, and specialized programs across the {region.replace(/-/g, " ")} region.
        </p>
      </header>
      <div className="mt-10 space-y-6">
        {regionLocations.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.region}/${location.slug}`}
            className="block rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-neutral-900">
              {location.city.replace(/-/g, " ")}
            </h2>
            <p className="mt-3 text-sm text-neutral-600">{location.summary}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-orange-500">
              Key capabilities
            </p>
            <ul className="mt-2 grid gap-2 text-sm text-neutral-600 sm:grid-cols-2">
              {location.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const locations = await cmsClient.getLocations();
  const regions = Array.from(new Set(locations.map((location) => location.region)));
  return regions.map((region) => ({ region }));
}
