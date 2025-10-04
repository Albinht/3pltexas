import Link from "next/link";
import { cmsClient } from "@/lib/cms";

export const metadata = {
  title: "Downloads",
  description:
    "Download templates, calculators, and toolkits to streamline logistics planning and vendor selection.",
};

export default async function ResourceDownloadsPage() {
  const downloads = await cmsClient.getResourceDownloads();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Tools & templates
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Operational toolkits for logistics teams.
        </h1>
        <p className="mt-5 text-base text-neutral-600">
          Access ready-to-use resources that help you evaluate partners, forecast costs, and align stakeholders.
        </p>
      </div>
      <div className="mt-10 space-y-6">
        {downloads.map((download) => (
          <Link
            key={download.slug}
            href={`/resources/downloads/${download.slug}`}
            className="block rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900">
                  {download.title}
                </h2>
                <p className="mt-3 text-sm text-neutral-600">{download.summary}</p>
              </div>
              <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600">
                {download.assetType}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {download.categories.map((category) => (
                <span key={category} className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-600">
                  {category}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
