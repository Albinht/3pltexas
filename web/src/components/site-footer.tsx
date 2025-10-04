import Link from "next/link";

const primaryLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/resources", label: "Resources" },
  { href: "/vendor-portal", label: "Become a vendor" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-lg font-semibold text-neutral-900">3PL Texas</p>
            <p className="text-sm text-neutral-600">
              Independent warehouse matchmakers helping brands secure trusted fulfillment partners without broker markups or guesswork.
            </p>
            <div className="flex gap-6 text-sm text-neutral-600">
              <div>
                <p className="font-semibold text-neutral-800">HQ</p>
                <p>Dallas–Fort Worth, Texas</p>
                <p>+1 (555) 555-3357</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-800">Support</p>
                <p>support@3pltexas.net</p>
                <p>Mon–Fri · 8am–6pm CST</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-neutral-600 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Explore
              </p>
              <nav className="mt-3 flex flex-col gap-2">
                {primaryLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-orange-600">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Company
              </p>
              <nav className="mt-3 flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-orange-600">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 3PL Texas. All rights reserved.</p>
          <p className="text-xs">
            Warehousing expertise featured in Information Week, Supply &amp; Demand Chain Executive, Parcel Industry, and more.
          </p>
        </div>
      </div>
    </footer>
  );
}
