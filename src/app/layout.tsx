import type { Metadata } from "next";
import "./globals.css";
import AnalyticsConsent from "@/components/AnalyticsConsent";

export const metadata: Metadata = {
  title: "Sports Training & Massage in Shelby Township | ASP",
  description: "Athletic training, sports massage, movement assessment, and facility rental in Shelby Township, MI. By appointment, daily 8 AM–10 PM. Book online.",
  openGraph: { type: "website", siteName: "Advanced Sports Performance", images: [{ url: "/social-preview.jpg", width: 1200, height: 630, alt: "Advanced Sports Performance" }] },
  twitter: { card: "summary_large_image", images: ["/social-preview.jpg"] },
  metadataBase: new URL("https://www.advancedsportsmacomb.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Jost', sans-serif" }}>
        {/* SC 2.4.1 — Bypass Blocks: skip navigation link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:bg-[#456B6D] focus:text-white focus:font-semibold focus:px-6 focus:py-3 focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
