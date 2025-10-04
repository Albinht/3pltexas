import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeaderContainer } from "@/components/site-header-container";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-100 text-neutral-900">
      <SiteHeaderContainer />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
