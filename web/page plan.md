# 3PL Texas Page Implementation Plan

This plan maps the competitor sitemap to our Next.js build so we can track which routes already exist, which rely on dynamic templates, and which still need dedicated implementation.

## Legend

- **Status**
  - ✅ Implemented: page or dynamic template already available.
  - 🧩 Template Ready: dynamic template exists; content instances still required.
  - 🚧 Planned: page structure defined in roadmap but not yet built.
  - 🔄 Evaluate: needs scoping before implementation (possible consolidation or de-prioritisation).

## Core Marketing & Conversion

| Path(s) | Description | Status | Notes |
| --- | --- | --- | --- |
| `/` | Home page | ✅ Implemented | Hero, services, industries, CTA stack complete. |
| `/quote-form`, `/quote-form-lp`, `/warehousing-fulfillment-quote/` | Quote landing pages | 🧩 Template Ready | `/quote` template live; create focused variants or parameterised landing pages if needed. |
| `/contact-us/` | Contact page | ✅ Implemented | `/contact` live with form + contact details. |
| `/how-it-works/` | Process overview | ✅ Implemented | Page outlines onboarding framework. |
| `/about-us/` | About page | ✅ Implemented | Story, leadership, certifications sections included. |
| `/partnerships/`, `/vendor-signup-page/`, `/vendor-details/`, `/become-a-vendor/*` | Partner/vendor intake | 🧩 Template Ready | `/vendor-portal` form live; create additional vendor education pages mirroring sitemap topics. |
| `/outsourced-fulfillment-services/` | Master services landing | 🚧 Planned | Build overview page consolidating key offerings + CTAs. |
| `/warehousingandfulfillment-com-reviews-and-ratings-from-customers/` | Testimonials hub | 🚧 Planned | Create `/reviews` index with trust signals. |

## Services & Solutions

| Path Prefix | Description | Status | Notes |
| `/services/*` | General services (ecommerce fulfillment, kitting, reverse logistics, freight, etc.) | 🧩 Template Ready | Dynamic `[slug]` template in place; seed CMS/data with full service list matching sitemap. |
| `/services/warehouse-for-lease-warehouse-for-sale-or-build-a-warehouse/` | Real-estate oriented service | 🚧 Planned | Decide if stays in scope or referenced via partner network. |
| `/services/sell-your-3pl-or-e-commerce-business-fast-with-our-network/` | M&A / brokerage | 🚧 Planned | Requires distinct copy & CTA flow. |
| `/services/shipping/`, `/services/product-sourcing/`, etc. | Supplemental services | 🧩 Template Ready | Populate via CMS entries. |
| `/software/the-big-list-of-shopping-carts-for-e-commerce-fulfillment/` | Software resource | 🔄 Evaluate | Consider moving under Resources rather than Services. |

## Industries & Specialties

| Path Prefix | Description | Status | Notes |
| `/specialties/*` | Vertical solutions (beauty, apparel, cold storage, etc.) | 🧩 Template Ready | Extend industry data set to cover each specialty; consider grouping by category for navigation. |
| `/services/find-the-best-3pl-warehouse-for-tiktok-shop-owners/` | Ecommerce platform-specific | 🚧 Planned | Could reuse industry template with targeted copy. |
| `/warehousing-and-fulfillment-resources/what-is-a-3pl/` etc. | Educational definitional pages | 🧩 Template Ready | Fit under Resources (guides). |

## Locations & Geography

| Path Prefix | Description | Status | Notes |
| `/locations/` | Locations hub | ✅ Implemented | Grid of Texas cities with coverage details. |
| `/locations/united-states/{state}/` & `/locations/united-states/{state}/{city}/` | State + metro detail pages | 🧩 Template Ready (Texas) | Need to expand data beyond Texas or decide to localise solely within Texas; create content variations per metro. |
| `/locations/canada/*`, `/locations/uk/`, `/locations/china/`, `/locations/mexico/` | International pages | 🔄 Evaluate | Determine if 3PL Texas will service/partner internationally; if yes, populate via location template or dedicated partner pages. |
| `/locations/warehousing-and-fulfillment-companies-near-me/` | “Near me” landing | 🚧 Planned | Build SEO landing with search intent copy and lead capture. |

## Resources, Guides & Blog

| Path Prefix | Description | Status | Notes |
| `/warehousing-and-fulfillment-resources/*` | Guides, benchmarking, news | 🧩 Template Ready | Article templates live; require CMS population and categorisation (Guides, Logistics, Cost, Tech, News). |
| `/resources/*` | Surveys, calculators, templates | 🚧 Planned | Build dedicated components for downloadables (lead-gated) + calculators (interactive). |
| `/newsblog/` | Blog index | 🚧 Planned | Could map to `/resources/news` and aggregate latest articles. |
| `/resources/list-of-best-fulfillment-companies/`, `/resources/list-of-best-3pl-companies/` | Comparison long-form content | 🚧 Planned | Treat as pillar pages with filtered data/CTAs. |
| `/resources/3pl-rfp-template/`, `/resources/fulfillment-cost-calculator/` | Tools/downloads | 🚧 Planned | Build gated download flow using CMS + HubSpot integration. |

## Reviews & Social Proof

| Path Prefix | Description | Status | Notes |
| `/reviews/` | Reviews index | 🚧 Planned | Create hub summarising review process and linking to individual review pages. |
| `/reviews/{company}/` | Individual 3PL reviews | 🚧 Planned | Implement dynamic review template tied to structured data. |

## Compliance & Legal

| `/privacy-policy/`, `/terms-and-conditions/` | Legal pages | ✅ Implemented | Already live. |
| `/misc/thank-you*` | Form confirmation pages | 🚧 Planned | Build shared thank-you page with personalised messaging. |

## Lead Funnels & Miscellaneous

| `/misc/`, `/misc/thank-you-1/`, `/misc/thank-you-new-warehouse/`, `/misc/thank-you-vendor/` | Generic system pages | 🚧 Planned | Determine specific thank-you states, implement using shared layout. |
| `/become-a-vendor/how-to-start-a-3pl-third-party-logistics-business/`, etc. | Vendor education content | 🚧 Planned | Map to resources or dedicated vendor knowledge base. |

## Next Actions

1. **Content modelling:** Extend CMS schema to cover services, industries, locations (beyond Texas), articles, reviews, and downloadable assets.
2. **Populate dynamic data:** Input prioritized service, industry, and location entries; create migration scripts if needed.
3. **Build remaining landing templates:**
   - Outsourced fulfillment overview.
   - Reviews hub and review detail template.
   - Resource download/tool pattern (gated forms, calculators).
   - Thank-you confirmation variants.
4. **Define international/localization strategy:** Decide whether to keep non-Texas locations or reframe as partner network content.
5. **Set up CMS-driven navigation & breadcrumbs** so new pages can be added without code changes.
