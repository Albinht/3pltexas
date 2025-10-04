import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3pltexas.net"),
  title: {
    default: "3PL Texas | Fulfillment & Logistics Across the Lone Star State",
    template: "%s | 3PL Texas",
  },
  description:
    "Texas-rooted third-party logistics partner delivering modern fulfillment, warehousing, and freight solutions for scaling brands.",
  openGraph: {
    title: "3PL Texas | Fulfillment & Logistics",
    description:
      "Texas-rooted third-party logistics partner delivering modern fulfillment, warehousing, and freight solutions for scaling brands.",
    url: "https://3pltexas.net",
    siteName: "3PL Texas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3PL Texas | Fulfillment & Logistics",
    description:
      "Texas-rooted third-party logistics partner delivering modern fulfillment, warehousing, and freight solutions for scaling brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
