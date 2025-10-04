"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

type LeadFormProps = {
  intent: "contact" | "quote";
  headline: string;
  description: string;
  additionalFields?: ReactNode;
};

export function LeadForm({ intent, headline, description, additionalFields }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent,
          payload: Object.fromEntries(formData.entries()),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setErrorMessage(body?.message ?? "Something went wrong. Please try again later.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
      trackEvent({ name: "lead_submitted", properties: { intent } });
      const thankYouPath =
        intent === "quote"
          ? "/misc/thank-you-new-warehouse"
          : intent === "contact"
            ? "/misc/thank-you"
            : "/misc/thank-you";
      router.push(thankYouPath);
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-neutral-900">{headline}</h2>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor={`${intent}-name`}>
              Name
            </label>
            <input
              id={`${intent}-name`}
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor={`${intent}-email`}>
              Work email
            </label>
            <input
              id={`${intent}-email`}
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor={`${intent}-company`}>
              Company
            </label>
            <input
              id={`${intent}-company`}
              name="company"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor={`${intent}-phone`}>
              Phone
            </label>
            <input
              id={`${intent}-phone`}
              name="phone"
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>
        {additionalFields}
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor={`${intent}-notes`}>
            Tell us about your project
          </label>
          <textarea
            id={`${intent}-notes`}
            name="notes"
            rows={4}
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
        >
          {status === "submitting" ? "Submitting..." : intent === "quote" ? "Request quote" : "Send message"}
        </button>
        {status === "error" && errorMessage && (
          <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
        )}
        <p className="text-xs text-neutral-500">
          By submitting, you agree to receive communications about services from 3PL Texas.
        </p>
      </form>
    </div>
  );
}
