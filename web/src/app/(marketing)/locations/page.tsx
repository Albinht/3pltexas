import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Locations",
  description:
    "Texas facilities in Dallas–Fort Worth, Houston, Austin, and San Antonio with room to expand across the region.",
};

export default async function LocationsPage() {
  const locations = await cmsClient.getLocations();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Network
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Texas coverage engineered to shorten every mile.
        </h1>
        <p className="mt-6 text-base text-neutral-600">
          Our network pairs flagship fulfillment campuses with satellite facilities for overflow, returns, and cross-border flows. We scale capacity and services to match your customer footprint and seasonal spikes.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {locations.map((location) => (
          <Link
            key={`${location.region}-${location.city}`}
            href={`/locations/${location.region}/${location.slug}`}
            className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                {location.region}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-neutral-900">
                {location.city.replace(/-/g, " ")}
              </h2>
              <p className="mt-4 text-sm text-neutral-600">{location.summary}</p>
            </div>
            <span className="mt-6 text-sm font-semibold text-orange-600">
              Explore facility →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
