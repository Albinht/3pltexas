import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type DownloadPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: DownloadPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const download = await cmsClient.getResourceDownload(slug);

  if (!download) {
    return {
      title: "Resource not found",
    };
  }

  return {
    title: `${download.title} Download`,
    description: download.summary,
  };
}

export default async function ResourceDownloadPage(props: DownloadPageProps) {
  const { slug } = await props.params;
  const download = await cmsClient.getResourceDownload(slug);

  if (!download) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-neutral-500">
        <Link href="/resources" className="transition hover:text-orange-600">
          Resources
        </Link>
        <span className="mx-2">/</span>
        <Link href="/resources/downloads" className="transition hover:text-orange-600">
          Downloads
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{download.title}</span>
      </nav>
      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          {download.assetType}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {download.title}
        </h1>
        <p className="mt-4 text-base text-neutral-600">{download.summary}</p>
      </header>
      <form
        className="mt-10 space-y-4"
        action={`https://tally.so/r/${download.formId}`}
        method="POST"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="download-name">
              Name
            </label>
            <input
              id="download-name"
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="download-email">
              Work email
            </label>
            <input
              id="download-email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="download-company">
            Company
          </label>
          <input
            id="download-company"
            name="company"
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          Get the download
        </button>
        <p className="text-xs text-neutral-500">
          You’ll receive the asset instantly after submission along with helpful follow-up resources. We respect your inbox.
        </p>
      </form>
    </section>
  );
}

export async function generateStaticParams() {
  const downloads = await cmsClient.getResourceDownloads();
  return downloads.map((download) => ({ slug: download.slug }));
}
