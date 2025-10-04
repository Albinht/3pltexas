import { cmsClient } from "@/lib/cms";
import { SiteHeader, type SiteNavItem } from "./site-header";

export async function SiteHeaderContainer() {
  const [services, industries] = await Promise.all([
    cmsClient.getServices(),
    cmsClient.getIndustries(),
  ]);

  const featuredServices = services
    .filter((service) => service.featured)
    .slice(0, 4)
    .map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
    }));

  const featuredIndustries = industries
    .slice(0, 4)
    .map((industry) => ({
      href: `/industries/${industry.slug}`,
      label: industry.title,
    }));

  const navItems: SiteNavItem[] = [
    {
      href: "/services",
      label: "Services",
      children: [
        ...featuredServices,
        { href: "/specialties", label: "View all specialties →" },
      ],
    },
    {
      href: "/industries",
      label: "Industries",
      children: [
        ...featuredIndustries,
        { href: "/industries", label: "View all industries →" },
      ],
    },
    {
      href: "/locations",
      label: "Locations",
      children: [
        { href: "/locations/texas/dallas-fort-worth", label: "Dallas-Fort Worth" },
        { href: "/locations/texas/houston", label: "Houston" },
        { href: "/locations/texas/austin", label: "Austin" },
        { href: "/locations/texas/san-antonio", label: "San Antonio" },
        { href: "/locations", label: "View all locations →" },
      ],
    },
    {
      href: "/resources",
      label: "Resources",
      children: [
        { href: "/resources/downloads", label: "Downloads & Tools" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/reviews", label: "Reviews" },
        { href: "/resources/newsletter", label: "Newsletter" },
        { href: "/resources", label: "View all resources →" },
      ],
    },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
  ];

  return <SiteHeader navItems={navItems} />;
}
