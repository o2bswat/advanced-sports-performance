"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];


// ─── ADD / REMOVE PRODUCTS HERE ───────────────────────────────────────────────
// Each product can have: name, category, why, description, and an optional url
// Categories group products on the page — add new ones freely

const PRODUCTS: {
  name: string;
  category: string;
  why: string;
  description: string;
  url?: string;
}[] = [
  // ── EXAMPLE — replace or delete this and add your own ──
  // {
  //   name: "Product Name",
  //   category: "Recovery Tools",
  //   why: "Why we use it",
  //   description: "A short description of the product and what makes it worth recommending.",
  //   url: "https://example.com",
  // },
];

const CATEGORIES = Array.from(new Set(PRODUCTS.map((p) => p.category)));
// ──────────────────────────────────────────────────────────────────────────────

export default function ProductsClient() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-16 bg-black min-h-screen">

        {/* Header */}
        <section className="py-20 border-b border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white text-base font-bold uppercase tracking-[0.25em] mb-2">Advanced Sports Performance</p>
            {/* SC 1.4.3 — #5A8C8F on black = ~6:1 */}
            <p className="text-[#80b5b8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Gear & Recovery</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Products We Use</h1>
            <p className="text-[#b8b9bb] text-xl max-w-2xl leading-relaxed">Every piece of equipment and product in our facility is chosen intentionally — for performance, recovery, and results. This page is updated as we add and vet new tools worth sharing.</p>
          </div>
        </section>

        {/* Products */}
        {PRODUCTS.length === 0 ? (
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-[#456B6D] text-4xl mb-6" aria-hidden="true">✦</p>
              <h2 className="text-white text-2xl font-bold mb-4">Products Coming Soon</h2>
              <p className="text-[#b8b9bb] text-base max-w-md mx-auto leading-relaxed">We're putting together our list of go-to gear and recovery tools. Check back soon — or ask us at your next session what we're currently using.</p>
            </div>
          </section>
        ) : (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              {CATEGORIES.map((category) => (
                <div key={category}>
                  <h2 className="text-white text-2xl font-bold mb-8 pb-4 border-b border-[#88898B]/15">{category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PRODUCTS.filter((p) => p.category === category).map((product) => (
                      <div key={product.name} className="border border-[#88898B]/20 hover:border-[#456B6D]/60 transition-colors p-8">
                        <h3 className="text-white text-lg font-bold mb-2">{product.name}</h3>
                        {/* SC 1.4.3 — #5A8C8F for xs text on black */}
                        <p className="text-[#80b5b8] text-xs font-semibold uppercase tracking-wider mb-3">{product.why}</p>
                        <p className="text-[#b8b9bb] text-sm leading-relaxed mb-4">{product.description}</p>
                        {product.url && (
                          <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-[#80b5b8] text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors">
                            Learn More →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ask us */}
        <section className="py-20 border-t border-[#88898B]/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* SC 1.4.3 — #5A8C8F for small text */}
                <p className="text-[#80b5b8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Ask Us Anything</p>
                <h2 className="text-white text-3xl font-bold mb-4">Curious What We Use in Training?</h2>
                <p className="text-[#b8b9bb] text-base leading-relaxed">If you experienced a piece of equipment or recovery tool during your session and want to know more about it, just ask. We're happy to point you in the right direction.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black border-t border-[#88898B]/20 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#b8b9bb] text-xs">© 2026 Advanced Sports Performance LLC. All rights reserved.</p>
            <Link href="/" className="text-[#b8b9bb] hover:text-white text-xs transition-colors">← Back to Home</Link>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-4 text-center"><Link href="/privacy" className="text-[#b8b9bb] hover:text-white text-xs underline">Privacy Policy</Link></div>
        </footer>
      </main>
    </>
  );
}
