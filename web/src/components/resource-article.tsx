import type { ResourceArticle, ResourceSection } from "@/lib/cms/types";
import Link from "next/link";

function SectionBlock({ section }: { section: ResourceSection }) {
  const isHighlight = section.variant === "highlight";
  const isQuote = section.variant === "quote";
  const isList = section.variant === "list" || Boolean(section.bullets);

  if (isQuote) {
    return (
      <blockquote className="rounded-3xl border border-orange-200 bg-orange-50 p-6 text-neutral-800">
        <p className="text-lg font-medium">“{section.body}”</p>
        {section.heading ? (
          <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            {section.heading}
          </footer>
        ) : null}
      </blockquote>
    );
  }

  return (
    <section
      className={
        isHighlight
          ? "rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
          : "space-y-4"
      }
    >
      {section.heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          {section.heading}
        </h2>
      ) : null}
      <p className="text-base text-neutral-700">{section.body}</p>
      {isList && section.bullets?.length ? (
        <ul className="space-y-2 text-sm text-neutral-600">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export function ResourceArticleContent({ article }: { article: ResourceArticle }) {
  return (
    <article className="mx-auto max-w-4xl space-y-12">
      {article.keyTakeaways?.length ? (
        <section className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            Key takeaways
          </p>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700">
            {article.keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-orange-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {article.sections.map((section) => (
        <SectionBlock key={`${section.heading}-${section.body.slice(0, 16)}`} section={section} />
      ))}

      {article.tables?.map((table) => (
        <section key={table.caption ?? table.columns.join("-")} className="overflow-hidden rounded-3xl border border-neutral-200">
          <table className="w-full text-sm text-neutral-700">
            <thead className="bg-neutral-100 text-left text-xs uppercase tracking-[0.3em] text-neutral-500">
              <tr>
                {table.columns.map((column) => (
                  <th key={column} className="px-4 py-3">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-neutral-200">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-neutral-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {table.caption ? (
            <p className="px-4 py-3 text-xs text-neutral-500">{table.caption}</p>
          ) : null}
        </section>
      ))}

      {article.stats?.length ? (
        <section className="grid gap-4 sm:grid-cols-2">
          {article.stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">{stat.value}</p>
              {stat.description ? (
                <p className="mt-2 text-sm text-neutral-600">{stat.description}</p>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

      {article.faqs?.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {article.faqs.map((faq) => (
              <details key={faq.question} className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer text-sm font-semibold text-neutral-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-neutral-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {article.relatedLinks?.length ? (
        <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Related resources
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {article.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-orange-600 transition hover:text-orange-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
