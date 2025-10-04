export const metadata = {
  title: "Privacy Policy",
  description:
    "Understand how 3PL Texas handles personal information collected through our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 text-sm text-neutral-700">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Privacy Policy</h1>
      <p className="mt-4">Last updated: October 3, 2024</p>
      <p className="mt-6">
        3PL Texas respects your privacy. This policy outlines the types of information we collect, how we use it, and the choices you have.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-neutral-900">Information we collect</h2>
      <p className="mt-2">
        We collect information you provide via forms (such as contact details and business requirements) as well as information captured automatically through analytics tools (such as IP address, device data, and browsing behavior).
      </p>
      <h2 className="mt-8 text-xl font-semibold text-neutral-900">How we use information</h2>
      <p className="mt-2">
        We use your information to respond to inquiries, deliver requested services, improve our offerings, and communicate relevant updates. We may also anonymize and aggregate data for analytics and reporting purposes.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-neutral-900">Sharing of information</h2>
      <p className="mt-2">
        We do not sell personal information. We may share information with trusted service providers that assist with CRM, analytics, or marketing activities under confidentiality agreements.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-neutral-900">Your choices</h2>
      <p className="mt-2">
        You can opt out of marketing communications at any time by following the unsubscribe instructions. To request access, correction, or deletion of your data, contact privacy@3pltexas.net.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-neutral-900">Contact</h2>
      <p className="mt-2">
        For questions about this policy, email privacy@3pltexas.net or write to 3PL Texas, 420 Logistics Way, Dallas–Fort Worth, TX 75001.
      </p>
    </section>
  );
}
