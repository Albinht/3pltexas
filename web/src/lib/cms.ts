export * from "./cms/types";

import {
  articles,
  caseStudies,
  industries,
  locations,
  locationGuides,
  resourceDownloads,
  resourcesContent,
  reviews,
  specialties,
  thankYouPages,
  services,
} from "./cms/data";

import type {
  Article,
  CaseStudy,
  Industry,
  Location,
  LocationGuide,
  ResourceDownload,
  ResourceArticle,
  Review,
  Service,
  Specialty,
  ThankYouPage,
} from "./cms/types";

export const cmsClient = {
  async getServices(): Promise<Service[]> {
    return services;
  },

  async getServiceBySlug(slug: string): Promise<Service | null> {
    return services.find((service) => service.slug === slug) ?? null;
  },

  async getIndustries(): Promise<Industry[]> {
    return industries;
  },

  async getIndustryBySlug(slug: string): Promise<Industry | null> {
    return industries.find((industry) => industry.slug === slug) ?? null;
  },

  async getSpecialties(): Promise<Specialty[]> {
    return specialties;
  },

  async getSpecialtyBySlug(slug: string): Promise<Specialty | null> {
    return specialties.find((specialty) => specialty.slug === slug) ?? null;
  },

  async getLocations(): Promise<Location[]> {
    return locations;
  },

  async getLocation(region: string, city: string): Promise<Location | null> {
    return (
      locations.find(
        (location) => location.region === region && location.city === city,
      ) ?? null
    );
  },

  async getArticles(category?: string): Promise<Article[]> {
    if (!category) {
      return articles;
    }
    return articles.filter((article) => article.category === category);
  },

  async getArticle(category: string, slug: string): Promise<Article | null> {
    return (
      articles.find(
        (article) => article.category === category && article.slug === slug,
      ) ?? null
    );
  },

  async getCaseStudies(): Promise<CaseStudy[]> {
    return caseStudies;
  },

  async getCaseStudy(slug: string): Promise<CaseStudy | null> {
    return caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null;
  },

  async getReviews(): Promise<Review[]> {
    return reviews;
  },

  async getReviewBySlug(slug: string): Promise<Review | null> {
    return reviews.find((review) => review.slug === slug) ?? null;
  },

  async getResourceDownloads(): Promise<ResourceDownload[]> {
    return resourceDownloads;
  },

  async getResourceDownload(slug: string): Promise<ResourceDownload | null> {
    return resourceDownloads.find((download) => download.slug === slug) ?? null;
  },

  async getThankYouPages(): Promise<ThankYouPage[]> {
    return thankYouPages;
  },

  async getThankYouPage(slug: string): Promise<ThankYouPage | null> {
    return thankYouPages.find((page) => page.slug === slug) ?? null;
  },

  async getLocationGuide(region: string, city: string): Promise<LocationGuide | null> {
    return (
      locationGuides.find(
        (guide) => guide.region === region && guide.city === city,
      ) ?? null
    );
  },

  async getResourceArticles(): Promise<ResourceArticle[]> {
    return resourcesContent;
  },

  async getResourceArticleBySlug(path: string): Promise<ResourceArticle | null> {
    const normalize = (value: string) => value.replace(/^\/+|\/+$/g, "");
    const target = normalize(path);
    return (
      resourcesContent.find((article) => {
        const articlePath = normalize(article.path);
        const articleSlug = normalize(article.slug);
        return (
          articlePath === target ||
          articleSlug === target ||
          articlePath.endsWith(target) ||
          articleSlug.split("/").pop() === target.split("/").pop()
        );
      }) ?? null
    );
  },
};
