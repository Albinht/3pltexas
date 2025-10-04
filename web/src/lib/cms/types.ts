export type ServiceCapability = string;

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  heroHighlight: string;
  capabilities: ServiceCapability[];
  featured?: boolean;
  category?: "fulfillment" | "warehousing" | "value-added" | "transport" | "consulting";
};

export type Industry = {
  slug: string;
  title: string;
  challenges: string[];
  outcomes: string[];
  verticalGroup?: string;
};

export type Specialty = {
  slug: string;
  title: string;
  excerpt: string;
  heroHighlight: string;
  challenges: string[];
  solutions: string[];
  keyFeatures: string[];
  nicheCategory?: "product-type" | "business-model" | "warehouse-type" | "market-segment";
};

export type Location = {
  region: string;
  city: string;
  slug: string;
  summary: string;
  capabilities: string[];
  facilitySizeSqFt?: number;
  certifications?: string[];
};

export type LocationProvider = {
  name: string;
  excerpt: string;
  description: string;
  address: string;
  leadTypes: string[];
  founded?: string;
  dealsClosed?: number;
  reviewsCount?: number;
  ctaLabel?: string;
  ctaHref?: string;
};

export type WarehouseOption = {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  costRange: string;
};

export type PricingBenchmark = {
  label: string;
  locationValue: string;
  nationalValue: string;
};

export type LocationStat = {
  label: string;
  value: string;
};

export type LocationBusiness = {
  name: string;
  employees: string;
};

export type LocationGuide = {
  region: string;
  city: string;
  title: string;
  heroSubtitle: string;
  lastUpdated: string;
  disclaimer: string;
  author: string;
  editor: string;
  providers: LocationProvider[];
  cityHighlights: {
    title: string;
    description: string;
  }[];
  warehouseOptions: WarehouseOption[];
  howToFind: string[];
  selectionChecklist: string[];
  advantages: string[];
  disadvantages: string[];
  pricing: PricingBenchmark[];
  stateStats: LocationStat[];
  topBusinesses: LocationBusiness[];
  closingCta: {
    heading: string;
    body: string;
  };
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  publishedAt: string;
  body: string;
  author?: string;
  readingTimeMinutes?: number;
};

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  summary: string;
  headlineResult: string;
  metrics: CaseStudyMetric[];
  body: string;
};

export type Review = {
  slug: string;
  company: string;
  summary: string;
  rating: number;
  industriesServed: string[];
  highlights: string[];
  body: string;
};

export type ResourceDownload = {
  slug: string;
  title: string;
  summary: string;
  assetType: "pdf" | "spreadsheet" | "template";
  formId: string;
  categories: string[];
};

export type ThankYouPage = {
  slug: string;
  title: string;
  message: string;
  nextSteps: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type ResourceCallToAction = {
  label: string;
  href: string;
};

export type ResourceSection = {
  heading: string;
  body: string;
  variant?: "default" | "highlight" | "quote" | "list";
  bullets?: string[];
};

export type ResourceTable = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type ResourceStat = {
  label: string;
  value: string;
  description?: string;
};

export type ResourceFAQ = {
  question: string;
  answer: string;
};

export type ResourceArticle = {
  path: string;
  collection: "resources" | "warehousing-and-fulfillment-resources";
  slug: string;
  title: string;
  summary: string;
  heroEyebrow?: string;
  heroCtas?: ResourceCallToAction[];
  lastUpdated?: string;
  author?: string;
  editor?: string;
  readTime?: string;
  sections: ResourceSection[];
  keyTakeaways?: string[];
  tables?: ResourceTable[];
  stats?: ResourceStat[];
  faqs?: ResourceFAQ[];
  relatedLinks?: ResourceCallToAction[];
};
