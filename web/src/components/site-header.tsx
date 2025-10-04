"use client";

import { useState } from "react";
import Link from "next/link";

export type SiteNavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

type SiteHeaderProps = {
  navItems: SiteNavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight" onClick={closeMenu}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
              3PL
            </span>
            <span>3PL Texas</span>
          </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 py-2 transition hover:text-orange-600"
              >
                {item.label}
                {item.children && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="mt-2 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-orange-50 hover:text-orange-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-neutral-700 transition hover:text-orange-600"
          >
            Contact
          </Link>
          <Link
            href="/quote"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Get a Quote
          </Link>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/quote"
            className="text-sm font-medium text-orange-600 underline decoration-orange-600/30 underline-offset-2 transition hover:text-orange-700"
          >
            Get a quote
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 text-neutral-700 transition hover:border-orange-500 hover:text-orange-600"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-6 shadow-sm md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-700">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-orange-600"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <div className="mt-2 flex flex-col gap-2 border-l border-neutral-200 pl-4 text-xs font-medium text-neutral-500">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="transition hover:text-orange-600"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-full border border-neutral-200 px-4 py-2 text-center text-sm font-medium text-neutral-700 transition hover:border-orange-500 hover:text-orange-600"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="rounded-full bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
      </header>
      
      {/* Sticky Mobile Banner */}
      <div className="sticky top-[73px] z-40 bg-gradient-to-r from-orange-500 to-orange-600 md:hidden">
        <Link
          href="/quote"
          className="block px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:from-orange-600 hover:to-orange-700"
        >
          <span className="text-xs font-semibold">BEST 3PL PRICES IN TEXAS</span>
          <br />
          <span className="underline decoration-white/50 underline-offset-2">Get a free quote</span>
        </Link>
      </div>
    </>
  );
}
