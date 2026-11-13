"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#88898B]/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/Wordpress.png" alt="Advanced Sports Performance" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[#88898B] hover:text-white focus-visible:text-white text-sm font-medium tracking-wide uppercase transition-colors">{l.label}</Link>
          ))}
          <a href="https://aspmacomb.simplybook.me" target="_blank" rel="noopener noreferrer" className="bg-[#456B6D] hover:bg-[#3a5a5c] text-white text-sm font-semibold px-5 py-2.5 tracking-wide uppercase transition-colors">Book Now</a>
        </nav>
        {/* SC 4.1.2 fix — aria-label and aria-expanded */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-[#88898B]/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[#88898B] hover:text-white text-sm font-medium tracking-wide uppercase" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <a href="https://aspmacomb.simplybook.me" target="_blank" rel="noopener noreferrer" className="bg-[#456B6D] text-white text-sm font-semibold px-5 py-2.5 tracking-wide uppercase text-center">Book Now</a>
        </div>
      )}
    </header>
  );
}

const CREDS = [
  "NASM Certified Personal Trainer",
  "NASM Corrective Exercise Specialist",
  "Licensed Massage Therapist — Michigan #7501000247 (2009–present)",
  "NPI #1043665607",
  "Certified Orthopedic Manual Therapist — James Waslaski Protocol",
];

const TEAM = [
  {
    name: "Leslie Heisler",
    title: "Owner & CEO — Personal Trainer, Licensed Massage Therapist",
    bio: "Retired police officer, Army veteran, and founder of Advanced Sports Performance. Leslie built ASP from the ground up to give local athletes a serious training environment — founded for her daughter and open to the whole community. With 15+ years in massage therapy and certifications in corrective exercise and performance enhancement, she brings a clinical and performance lens to every session.",
  },
];

export default function AboutClient() {
  return (
    <>
      <Navbar />
      {/* SC 2.4.1 — skip link target */}
      <main id="main-content" className="pt-16 bg-black min-h-screen">

        {/* Header */}
        <section className="py-20 border-b border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white text-base font-bold uppercase tracking-[0.25em] mb-2">Advanced Sports Performance</p>
            {/* SC 1.4.3 fix — #5A8C8F on black = ~6:1 */}
            <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Story</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Built by a Mom for Her Community's Athletes.</h1>
            <p className="text-[#88898B] text-xl max-w-2xl leading-relaxed">When our founder watched her young daughter enter a training facility for the very first time many years ago, she saw firsthand how much the right environment matters — and how hard it was to find one built around the athlete. She did what Moms do — she didn't wait for someone else to fix it.</p>
          </div>
        </section>

        {/* Story Image */}
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img src="/images/IMG_4812.jpg" alt="Athletes training at Advanced Sports Performance" className="w-full h-full object-cover object-center" />
        </div>

        {/* Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-white text-3xl font-bold mb-6">Why We Exist</h2>
                <div className="space-y-5 text-[#88898B] text-base leading-relaxed">
                  <p>When Leslie's daughter began athletic training, it was clear how much the right environment mattered. Too many facilities were built around big-program culture, high prices, and pressure — not around the individual athlete.</p>
                  <p>As a retired police officer and Army veteran, Leslie's response was straightforward: build the facility that should already exist. Advanced Sports Performance opened in October 2023 — founded for her daughter and built to serve every team and every athlete in this community who wants quality training without the pressure or price tag of big program culture.</p>
                  <p>We serve athletes of all ages — from youth team training to adult one-on-one sessions and massage. Our clients range from beginners finding their footing to competitive athletes at every stage of life.</p>
                  <p>Veteran and female-owned. Shelby Township, Michigan.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border border-[#456B6D]/40 p-8">
                  <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-4">Our Mission</p>
                  <p className="text-white text-xl font-medium leading-relaxed">"To give every athlete in this community access to elite training, recovery, and assessment — without the cost, the pressure, or the culture of big program facilities."</p>
                </div>
                <div className="border border-[#88898B]/20 p-8">
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">What Sets Us Apart</p>
                  <ul className="space-y-3">
                    {["Hometown facility, open to every athlete", "Advanced movement assessment technology", "Vetted instructors with 20+ years experience", "Holistic — training and recovery under one roof", "Community-focused, not profit-driven"].map((item) => (
                      <li key={item} className="text-[#88898B] text-sm flex items-start gap-3">
                        <span className="text-[#456B6D] mt-0.5" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 border-t border-[#88898B]/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">The Team</p>
            <h2 className="text-white text-3xl font-bold mb-10">Who You'll Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TEAM.map((t) => (
                <div key={t.name} className="border border-[#88898B]/20 p-8">
                  <h3 className="text-white text-xl font-bold mb-1">{t.name}</h3>
                  <p className="text-[#5A8C8F] text-sm font-medium mb-4">{t.title}</p>
                  <p className="text-[#88898B] text-sm leading-relaxed">{t.bio}</p>
                </div>
              ))}
              <div className="border border-[#88898B]/20 p-8">
                <h3 className="text-white text-xl font-bold mb-1">Guest Instructors</h3>
                <p className="text-[#5A8C8F] text-sm font-medium mb-4">Vetted Coaches &amp; Specialists</p>
                <p className="text-[#88898B] text-sm leading-relaxed">Advanced Sports Performance partners with a rotating roster of vetted hitting, pitching, and skill instructors — most with 20+ years of coaching experience at the collegiate and elite club level. All instructors are selected by word of mouth and personal recommendation.</p>
                <p className="text-[#88898B] text-sm leading-relaxed mt-4">Looking for a specific skill instructor? Contact us and we'll connect you with one of our trusted partners.</p>
                <a href="/contact" className="inline-block mt-4 text-[#5A8C8F] text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors">Get a Referral →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 border-t border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-white text-3xl font-bold mb-10">Credentials &amp; Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {CREDS.map((c) => (
                <div key={c} className="flex items-center gap-4 border border-[#88898B]/20 px-5 py-4">
                  <span className="text-[#456B6D] text-lg" aria-hidden="true">✓</span>
                  <span className="text-white text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brigid's Flame crosslink */}
        <section className="py-20 border-t border-[#88898B]/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border border-[#D8894A]/20 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img src="/images/F3533123-D4E8-4865-A807-14DCA322C302.jpeg" alt="Brigid's Flame Healing Arts" className="h-20 w-auto" />
              </div>
              <div className="flex-1">
                <p className="text-[#D8894A] text-xs font-semibold uppercase tracking-widest mb-2">Also by Leslie Heisler</p>
                <h2 className="text-white text-2xl font-bold mb-3">Brigid's Flame Healing Arts</h2>
                <p className="text-[#88898B] text-sm leading-relaxed mb-6">A licensed wellness practice offering massage, bodywork, 9D Breathwork, and Reiki — rooted in clinical skill and the ancient wellness traditions. All sessions by appointment. Located at Advanced Sports Performance, Shelby Township, Michigan.</p>
                <Link href="https://www.brigidsflamehealingarts.com" className="inline-flex items-center gap-2 bg-[#D8894A] hover:bg-[#c07840] text-white font-semibold px-6 py-3 uppercase tracking-wider transition-colors text-sm">
                  Visit Brigid's Flame →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black border-t border-[#88898B]/20 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#88898B] text-xs">© 2026 Advanced Sports Performance LLC. All rights reserved.</p>
            <Link href="/" className="text-[#88898B] hover:text-white text-xs transition-colors">← Back to Home</Link>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-4 text-center"><Link href="/privacy" className="text-[#88898B] hover:text-white text-xs underline">Privacy Policy</Link></div>\n        </footer>
      </main>
    </>
  );
}
