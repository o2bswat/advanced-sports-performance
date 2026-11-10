import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athletic Training Shelby Township MI | Advanced Sports Performance",
  description: "Advanced Sports Performance is Macomb County's hometown athletic training facility for all athletes. Sports massage, corrective exercise, speed & agility, and facility rental in Shelby Township, MI.",
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:bg-[#456B6D] focus:text-white focus:font-semibold focus:px-6 focus:py-3 focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
