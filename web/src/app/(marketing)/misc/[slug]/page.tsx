import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cmsClient } from "@/lib/cms";

type ThankYouPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: ThankYouPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const page = await cmsClient.getThankYouPage(slug);

  if (!page) {
    return {
      title: "Thank you",
    };
  }

  return {
    title: page.title,
    description: page.message,
  };
}

export default async function ThankYouPage(props: ThankYouPageProps) {
  const { slug } = await props.params;
  const page = await cmsClient.getThankYouPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16 text-neutral-900 sm:px-6">
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">{page.title}</h1>
        <p className="mt-4 text-base text-neutral-600">{page.message}</p>
      </div>
      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-lg font-semibold text-neutral-900">Next steps</h2>
        <ul className="mt-4 space-y-3 text-sm text-neutral-600">
          {page.nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
      {page.ctaHref && page.ctaLabel && (
        <Link
          href={page.ctaHref}
          className="inline-flex items-center justify-center self-start rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
        >
          {page.ctaLabel}
        </Link>
      )}
    </section>
  );
}

export async function generateStaticParams() {
  const pages = await cmsClient.getThankYouPages();
  return pages.map((page) => ({ slug: page.slug }));
}
