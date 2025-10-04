import type {
  Article,
  CaseStudy,
  Industry,
  Location,
  LocationGuide,
  ResourceArticle,
  ResourceDownload,
  Review,
  Service,
  Specialty,
  ThankYouPage,
} from "./types";
import {
  articles,
  caseStudies,
  industries,
  locations,
  locationGuides,
  resourceDownloads,
  reviews,
  specialties,
  thankYouPages,
  services,
} from "./data";
import { resourceArticles } from "./resources";

type FieldConfig = {
  apiKey: string;
  label: string;
  type:
    | "string"
    | "text"
    | "slug"
    | "boolean"
    | "number"
    | "json"
    | "date"
    | "rich_text"
    | "modular_content"
    | "link"
    | "seo";
  validators?: Record<string, unknown>;
};

type ModelConfig = {
  name: string;
  singleton?: boolean;
  apiKey: string;
  fields: FieldConfig[];
};

export const cmsModels: ModelConfig[] = [
  {
    name: "Service",
    apiKey: "service",
    fields: [
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "excerpt", label: "Excerpt", type: "text" },
      { apiKey: "hero_highlight", label: "Hero Highlight", type: "text" },
      { apiKey: "capabilities", label: "Capabilities", type: "json" },
      { apiKey: "category", label: "Category", type: "string" },
      { apiKey: "featured", label: "Featured", type: "boolean" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Industry",
    apiKey: "industry",
    fields: [
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "challenges", label: "Challenges", type: "json" },
      { apiKey: "outcomes", label: "Outcomes", type: "json" },
      { apiKey: "vertical_group", label: "Vertical Group", type: "string" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Specialty",
    apiKey: "specialty",
    fields: [
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "excerpt", label: "Excerpt", type: "text" },
      { apiKey: "hero_highlight", label: "Hero Highlight", type: "text" },
      { apiKey: "challenges", label: "Challenges", type: "json" },
      { apiKey: "solutions", label: "Solutions", type: "json" },
      { apiKey: "key_features", label: "Key Features", type: "json" },
      { apiKey: "niche_category", label: "Niche Category", type: "string" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Location",
    apiKey: "location",
    fields: [
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "region", label: "Region", type: "string" },
      { apiKey: "summary", label: "Summary", type: "text" },
      { apiKey: "capabilities", label: "Capabilities", type: "json" },
      { apiKey: "facility_size_sq_ft", label: "Facility Size Sq Ft", type: "number" },
      { apiKey: "certifications", label: "Certifications", type: "json" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Article",
    apiKey: "article",
    fields: [
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "category", label: "Category", type: "string" },
      { apiKey: "summary", label: "Summary", type: "text" },
      { apiKey: "published_at", label: "Published At", type: "date" },
      { apiKey: "body", label: "Body", type: "rich_text" },
      { apiKey: "author", label: "Author", type: "string" },
      { apiKey: "reading_time_minutes", label: "Reading Time (Minutes)", type: "number" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Case Study",
    apiKey: "case_study",
    fields: [
      { apiKey: "client", label: "Client", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "industry", label: "Industry", type: "string" },
      { apiKey: "summary", label: "Summary", type: "text" },
      { apiKey: "headline_result", label: "Headline Result", type: "string" },
      { apiKey: "metrics", label: "Metrics", type: "json" },
      { apiKey: "body", label: "Body", type: "rich_text" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Review",
    apiKey: "review",
    fields: [
      { apiKey: "company", label: "Company", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "summary", label: "Summary", type: "text" },
      { apiKey: "rating", label: "Rating", type: "number" },
      { apiKey: "industries_served", label: "Industries Served", type: "json" },
      { apiKey: "highlights", label: "Highlights", type: "json" },
      { apiKey: "body", label: "Body", type: "rich_text" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Resource Download",
    apiKey: "resource_download",
    fields: [
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "summary", label: "Summary", type: "text" },
      { apiKey: "asset_type", label: "Asset Type", type: "string" },
      { apiKey: "form_id", label: "Form ID", type: "string" },
      { apiKey: "categories", label: "Categories", type: "json" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Thank You Page",
    apiKey: "thank_you_page",
    fields: [
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "message", label: "Message", type: "text" },
      { apiKey: "next_steps", label: "Next Steps", type: "json" },
      { apiKey: "cta_label", label: "CTA Label", type: "string" },
      { apiKey: "cta_href", label: "CTA Href", type: "string" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
  {
    name: "Resource Article",
    apiKey: "resource_article",
    fields: [
      { apiKey: "path", label: "Path", type: "string" },
      { apiKey: "collection", label: "Collection", type: "string" },
      { apiKey: "slug", label: "Slug", type: "slug" },
      { apiKey: "title", label: "Title", type: "string" },
      { apiKey: "summary", label: "Summary", type: "text" },
      { apiKey: "hero_eyebrow", label: "Hero Eyebrow", type: "string" },
      { apiKey: "hero_ctas", label: "Hero CTAs", type: "json" },
      { apiKey: "last_updated", label: "Last Updated", type: "string" },
      { apiKey: "author", label: "Author", type: "string" },
      { apiKey: "editor", label: "Editor", type: "string" },
      { apiKey: "read_time", label: "Read Time", type: "string" },
      { apiKey: "sections", label: "Sections", type: "json" },
      { apiKey: "key_takeaways", label: "Key Takeaways", type: "json" },
      { apiKey: "tables", label: "Tables", type: "json" },
      { apiKey: "stats", label: "Stats", type: "json" },
      { apiKey: "faqs", label: "FAQs", type: "json" },
      { apiKey: "related_links", label: "Related Links", type: "json" },
      { apiKey: "seo", label: "SEO", type: "seo" },
    ],
  },
];

export type CmsSeed = {
  services: Service[];
  industries: Industry[];
  specialties: Specialty[];
  locations: Location[];
  articles: Article[];
  caseStudies: CaseStudy[];
  reviews: Review[];
  resourceDownloads: ResourceDownload[];
  thankYouPages: ThankYouPage[];
  resourceArticles: ResourceArticle[];
  locationGuides: LocationGuide[];
};

export function getStaticSeed(): CmsSeed {
  return {
    services,
    industries,
    specialties,
    locations,
    articles,
    caseStudies,
    reviews,
    resourceDownloads,
    resourceArticles: resourceArticles,
    thankYouPages,
    locationGuides,
  };
}
