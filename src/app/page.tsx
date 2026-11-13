import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Athletic Training Shelby Township MI | Advanced Sports Performance",
  description: "Advanced Sports Performance is Macomb County's hometown athletic training facility for all athletes. Sports massage, corrective exercise, speed & agility, and team training for all athletes in Shelby Township, MI.",
  alternates: { canonical: "https://www.advancedsportsmacomb.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Advanced Sports Performance",
  "url": "https://www.advancedsportsmacomb.com",
  "telephone": "+15869422000",
  "email": "advancedsportsmacomb@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47959 Van Dyke Ave.",
    "addressLocality": "Shelby Township",
    "addressRegion": "MI",
    "postalCode": "48317",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.6834,
    "longitude": -83.0341
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "description": "Hometown athletic training facility in Shelby Township, MI. Offering sports massage, corrective exercise, speed & agility training, fastpitch softball and volleyball instruction, and facility rental for all athletes in Macomb County.",
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/advancedsportsmacomb",
    "https://www.instagram.com/advancedsportmacomb"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
