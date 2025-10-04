import Link from "next/link";

const warehouseCards = [
  {
    title: "ShipSquared",
    detail: "Dallas · B2C pick & pack · 99.5% accuracy",
    link: "https://shipsquared.com/",
  },
  {
    title: "Gulf Coast Fulfillment",
    detail: "Houston · FDA registered · cold chain ready",
  },
  {
    title: "Hill Country 3PL",
    detail: "Austin · Subscription experts · kitting pods",
  },
];

const trustPillars = [
  {
    title: "Independent vetting",
    description:
      "We investigate every warehouse partner in-house—from leadership bios and customer references to tech stack and financial stability—before they ever reach your shortlist.",
    cta: { label: "Our screening process", href: "/how-it-works" },
  },
  {
    title: "Community-backed intel",
    description:
      "Active shippers send us candid performance feedback. When standards slip, we hear it first and remove partners who no longer deliver.",
    cta: { label: "See why reviews matter", href: "/reviews" },
  },
  {
    title: "Free for shippers",
    description:
      "Vetted warehouses pay a modest referral fee to meet qualified brands. You pay nothing and never see inflated rates or hidden broker margins.",
    cta: { label: "Why it’s unbiased", href: "/about" },
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Share your goals",
    description:
      "Tell us about order volume, SKU mix, channels, and growth plans. A strategist confirms the details in a quick call or email.",
  },
  {
    step: "02",
    title: "Approve your shortlist",
    description:
      "We match you with handpicked warehouses that meet your service, compliance, and budget requirements—no mass email blasts.",
  },
  {
    step: "03",
    title: "Meet your matches",
    description:
      "Connect directly with each recommended provider, compare proposals, and tour facilities at your pace.",
  },
  {
    step: "04",
    title: "Launch with confidence",
    description:
      "We stay available through negotiations and onboarding, and our service stays free from start to finish.",
  },
];

const screeningChecklist = [
  "Capability deep dive across fulfillment, value-added services, and tech integrations",
  "Customer and trade references with performance scorecards",
  "Financial stability review to ensure long-term partnership",
  "Operational KPIs including error rates, SLAs, and carrier mix",
  "Ongoing monitoring with quarterly re-certification",
];

const experienceHighlights = [
  {
    title: "Industry insiders on your side",
    body:
      "Everyone on our advisory bench has operated warehouses or fulfillment programs. We translate logistics jargon into straight answers and practical recommendations for your team.",
  },
  {
    title: "Guidance for every growth stage",
    body:
      "Whether you’re a founder juggling the first 500 orders or a global brand restructuring a 3PL portfolio, we’ve helped businesses like yours plan the next move.",
  },
  {
    title: "Tailored outreach",
    body:
      "Prefer to keep outreach in email? Need late-night calls across time zones? We coordinate introductions the way you work best and only with partners who fit.",
  },
];

const decisionFactors = [
  "Documented accuracy and on-time shipping metrics",
  "Robust WMS reporting and integration capabilities",
  "Transparent pricing models without surprise surcharges",
  "Dedicated account management and responsive support",
  "Continuous improvement programs backed by data",
  "Automation and scanning to minimise human error",
];

const categoryTiles = [
  "Food & beverage logistics",
  "Apparel and textile fulfillment",
  "Beauty and personal care",
  "Nutraceutical and supplement shipping",
  "Heavy goods and oversized freight",
  "Subscription box programs",
];

const locationColumns = [
  ["California", "Texas", "Georgia", "Illinois", "New Jersey", "Florida"],
  ["Ohio", "Pennsylvania", "Colorado", "Arizona", "Washington", "Oregon"],
  ["Ontario", "British Columbia", "Quebec", "New York", "North Carolina", "Tennessee"],
];

const partnerNames = [
  "MAI Fulfillment",
  "Landis Logistics",
  "Next Level Resource Partners",
  "Power Supply Chain",
  "Gold3PL",
  "Kayo 3PL",
  "Global Warehouse Solutions",
  "Box In Box Out",
  "Bulletproof Logistics",
  "Bee Imagine",
  "Aero Fulfillment",
  "Fastpak Fulfillment",
];

const trustStats = [
  { label: "Warehousing searches supported", value: "137,609" },
  { label: "Companies matched with vetted providers", value: "64,265" },
  { label: "Warehouses evaluated", value: "5,961" },
  { label: "Warehouses approved in-network", value: "481" },
];

export default function HomePage() {
  return (
    <div className="bg-neutral-100 text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
              Since 2005 · Independent warehouse matchmaking
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              The direct warehouse connection you’ve been searching for.
            </h1>
            <p className="text-lg text-neutral-100">
              No middlemen. No mystery markups. Just logistics veterans pairing your business with thoroughly-screened fulfillment partners willing to earn your trust.
            </p>
            <ul className="space-y-2 text-sm uppercase tracking-[0.25em] text-neutral-300">
              <li>Find the right warehouse &amp; fulfillment fit</li>
              <li>Review curated matches within days</li>
              <li>Receive up to five tailored quotes—fast</li>
            </ul>
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
          <div className="relative isolate rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Sample matches
            </p>
            <ul className="mt-4 space-y-4 text-sm text-neutral-200">
              {warehouseCards.map((card) => (
                <li key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-base font-semibold text-white">
                    {card.link ? (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white/30 underline-offset-2 transition hover:text-orange-300 hover:decoration-orange-300"
                      >
                        {card.title}
                      </a>
                    ) : (
                      card.title
                    )}
                  </p>
                  <p>{card.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-neutral-400">
              Free and unbiased for shippers
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,155,68,0.28),_transparent_60%)]" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Why teams rely on us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            The only impartial warehouse and fulfillment matchmaker.
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            We’ve spent nearly two decades vetting 3PLs so you can evaluate partners without guesswork or gimmicks.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            Looking for a 3PL in Texas? Look at this option:{" "}
            <a
              href="https://shipsquared.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline decoration-orange-600/30 underline-offset-2 transition hover:text-orange-700 hover:decoration-orange-700"
            >
              3PL Texas
            </a>
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trustPillars.map((pillar) => (
            <div key={pillar.title} className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">{pillar.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{pillar.description}</p>
              </div>
              <Link
                href={pillar.cta.href}
                className="mt-6 inline-flex text-sm font-semibold text-orange-600"
              >
                {pillar.cta.label} →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
          >
            Match me up
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-800 transition hover:border-orange-500 hover:text-orange-600"
          >
            Learn the process
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Simple, fast, no cost
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              How our matchmaking service works.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {howItWorks.map((stage) => (
              <div key={stage.step} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-500">
                  {stage.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">{stage.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              We eliminate the friction from finding the right fulfillment partner.
            </h2>
            <p className="text-base text-neutral-600">
              Stop sifting through pay-to-play directories. Our specialists curate options based on sector, order profile, compliance requirements, and cultural fit so you can focus on growing revenue.
            </p>
            <p className="text-base text-neutral-600">
              From the first discovery call to final contract review, we keep the process transparent and efficient—because logistics leaders deserve a partner that respects their time.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">What every warehouse in our network must prove</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {screeningChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {experienceHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Straight answers to every fulfillment question.
            </h2>
            <p className="mt-5 text-base text-neutral-600">
              Need a primer on 3PL pricing? Want to understand kitting workflows or returns economics? Our team translates logistics into language your leadership, finance, and customer teams can align around.
            </p>
            <p className="mt-4 text-base text-neutral-600">
              Fill out any quote form and we’ll send our latest guide to choosing a fulfillment partner—packed with real cost benchmarks, checklists, and pitfalls to avoid.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Key decision criteria we help you evaluate</h3>
            <ul className="mt-4 grid gap-3 text-sm text-neutral-600">
              {decisionFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Niches covered
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From product launches to enterprise-scale networks.
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              We actively source warehouses for every major consumer and B2B category.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTiles.map((category) => (
              <div key={category} className="rounded-3xl border border-neutral-200 bg-neutral-50 px-5 py-6 text-sm font-semibold text-neutral-700">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                coast-to-coast coverage
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Warehousing reach across the U.S. and Canada.
              </h2>
              <p className="mt-4 text-sm text-neutral-600">
                Explore markets where we maintain active partner rosters ready to quote.
              </p>
            </div>
            <Link
              href="/locations"
              className="h-fit rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-800 transition hover:border-orange-500 hover:text-orange-600"
            >
              Browse locations
            </Link>
          </div>
          <div className="mt-10 grid gap-6 text-sm text-neutral-600 sm:grid-cols-3">
            {locationColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-2">
                {column.map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Trusted by reputable operators
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerNames.map((name) => (
              <div key={name} className="rounded-3xl border border-neutral-200 bg-neutral-50 px-5 py-6 text-sm font-semibold text-neutral-700">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What makes our recommendations different.
            </h2>
            <p className="mt-5 text-base text-neutral-600">
              Beware of “top 10” warehouse lists that promote whoever pays the largest commission. We stay independent by charging partners a flat success fee and refusing vendors who don’t meet our standards.
            </p>
            <p className="mt-4 text-base text-neutral-600">
              We spot and filter out the noise so you aren’t burdened with unqualified sales calls or unreliable operators.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Proof in numbers</h3>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-neutral-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
                Ready when you are
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Get personalised warehouse matches without the hassle.
              </h2>
              <p className="mt-6 text-base text-neutral-200">
                Tell us what great fulfillment looks like for your brand. Within a few days you’ll have curated options, clear pricing guidance, and a partner ready to grow alongside you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Stay informed</h3>
              <p className="mt-3 text-sm text-neutral-200">
                Subscribe to Warehouse Wisdom for Friday dispatches covering pricing trends, tech innovations, and network strategies.
              </p>
              <form className="mt-5 flex flex-col gap-3" action="https://tally.so/r/your-newsletter-form" method="POST">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Work email"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-neutral-300 focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
                <button
                  type="submit"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
