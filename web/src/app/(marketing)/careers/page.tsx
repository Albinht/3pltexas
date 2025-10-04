export const metadata = {
  title: "Careers",
  description:
    "Join the 3PL Texas team and help build supply chains for the next generation of brands.",
};

const openings = [
  {
    title: "Implementation Project Manager",
    location: "Dallas–Fort Worth, TX",
    type: "Full-time",
    summary: "Lead cross-functional launches for new fulfillment clients across Texas facilities.",
  },
  {
    title: "Warehouse Operations Supervisor",
    location: "Houston, TX",
    type: "Full-time",
    summary: "Drive daily execution, safety, and continuous improvement for our port-adjacent campus.",
  },
  {
    title: "Solutions Architect",
    location: "Remote (Texas)",
    type: "Full-time",
    summary: "Design logistics programs and integrate client tech stacks with 3PL Texas systems.",
  },
];

export default function CareersPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Work with us
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Build the future of Texas logistics.
        </h1>
        <p className="mt-5 text-base text-neutral-600">
          We’re hiring operators, technologists, and customer champions who care about delivering remarkable fulfillment experiences.
        </p>
      </div>
      <div className="mt-10 space-y-4">
        {openings.map((opening) => (
          <div key={opening.title} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900">{opening.title}</h2>
                <p className="text-sm text-neutral-600">{opening.summary}</p>
              </div>
              <div className="text-sm font-semibold text-orange-600">
                {opening.location} · {opening.type}
              </div>
            </div>
            <button className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600">
              Apply now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
