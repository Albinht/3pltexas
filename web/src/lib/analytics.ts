export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, unknown>;
};

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag) {
    window.gtag("event", event.name, event.properties ?? {});
  }

  if ((window as typeof window & { dataLayer?: unknown[] }).dataLayer) {
    (window as typeof window & { dataLayer?: unknown[] }).dataLayer?.push({
      event: event.name,
      ...event.properties,
    });
  }
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}
