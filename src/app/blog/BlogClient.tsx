"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];


// ─── ADD POSTS HERE ───────────────────────────────────────────────────────────
// Each post: title, date, category, excerpt, image (optional)
// Categories: "Training Tips" | "Recovery" | "Athlete Development" | "Announcements" | "Specials"

const POSTS: {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
}[] = [
  // ── EXAMPLE — remove and replace with real posts ──
  // {
  //   title: "5 Speed Drills Every Athlete Should Know",
  //   date: "July 10, 2026",
  //   category: "Training Tips",
  //   excerpt: "Acceleration isn't just about raw speed — it's about mechanics. Here are five drills we use at ASP to help athletes build explosive first-step quickness.",
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIES = ["Training Tips", "Recovery", "Athlete Development", "Announcements", "Specials"];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? POSTS.filter((p) => p.category === activeCategory)
    : POSTS;

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-16 bg-black min-h-screen">

        {/* Header */}
        <section className="py-20 border-b border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white text-base font-bold uppercase tracking-[0.25em] mb-2">Advanced Sports Performance</p>
            {/* SC 1.4.3 — #5A8C8F on black = ~6:1, passes AA for normal text */}
            <p className="text-[#80b5b8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Tips, News & More</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-[#b8b9bb] text-xl max-w-2xl leading-relaxed">Training tips, recovery insights, announcements, and specials — from the team at Advanced Sports Performance.</p>
          </div>
        </section>

        {/* Category filter */}
        {POSTS.length > 0 && (
          <section className="py-6 border-b border-[#88898B]/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 border transition-colors ${!activeCategory ? "border-[#456B6D] text-white bg-[#456B6D]/20" : "border-[#88898B]/30 text-[#b8b9bb] hover:border-white hover:text-white"}`}
              >
                All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c === activeCategory ? null : c)}
                  className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 border transition-colors ${activeCategory === c ? "border-[#456B6D] text-white bg-[#456B6D]/20" : "border-[#88898B]/30 text-[#b8b9bb] hover:border-white hover:text-white"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Posts or empty state */}
        {filtered.length === 0 ? (
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-[#456B6D] text-4xl mb-6" aria-hidden="true">✦</p>
              <h2 className="text-white text-2xl font-bold mb-4">Content Coming Soon</h2>
              <p className="text-[#b8b9bb] text-base max-w-md mx-auto leading-relaxed mb-10">We're working on training tips, recovery guides, and updates from the facility. Check back soon — or reach out to stay in the loop.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="bg-[#456B6D] hover:bg-[#3a5a5c] text-white font-semibold px-8 py-4 uppercase tracking-wider transition-colors text-sm text-center">View Our Services</Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <div key={post.title + post.date} className="border border-[#88898B]/20 hover:border-[#456B6D]/60 transition-colors group">
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#80b5b8] text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                      <span className="text-[#b8b9bb]/40 text-xs" aria-hidden="true">·</span>
                      <span className="text-[#b8b9bb] text-xs">{post.date}</span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-3 leading-snug">{post.title}</h3>
                    <p className="text-[#b8b9bb] text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stay connected */}
        <section className="bg-[#456B6D] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Stay Connected</h2>
            {/* SC 1.4.3 — removed text-white/80 (4.13:1 fails); using solid text-white (5.37:1 passes) */}
            <p className="text-white text-lg mb-8">Follow us on social media or reach out directly to stay up to date.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.facebook.com/advancedsportsmacomb" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-[#111] text-white font-semibold px-8 py-4 uppercase tracking-wider transition-colors">Facebook</a>
              <a href="https://www.instagram.com/advancedsportmacomb" target="_blank" rel="noopener noreferrer" className="border border-white/40 hover:border-white text-white font-semibold px-8 py-4 uppercase tracking-wider transition-colors">Instagram</a>
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
