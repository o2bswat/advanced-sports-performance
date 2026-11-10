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
            <Link key={l.href} href={l.href} className="text-[#88898B] hover:text-white text-sm font-medium tracking-wide uppercase transition-colors">{l.label}</Link>
          ))}
          <a href="https://aspmacomb.simplybook.me" target="_blank" rel="noopener noreferrer" className="bg-[#456B6D] hover:bg-[#3a5a5c] text-white text-sm font-semibold px-5 py-2.5 tracking-wide uppercase transition-colors">Book Now</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
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

const EQUIPMENT = [
  { name: "HumanTrak", desc: "Full-body movement analysis and strength baseline assessment system." },
  { name: "DynamoMax", desc: "Dynamic strength and range of motion testing for performance tracking." },
  { name: "MoveHealth App", desc: "Personalized exercise assignment and compliance monitoring for athletes." },
  { name: "VALD Hub", desc: "Centralized data tracking for ongoing performance metrics." },
  { name: "Speed, Agility & Performance Tools", desc: "An ever-growing collection of training equipment including Blaze Pods, strobe glasses, plyo boxes, hurdles, and more — regularly updated as new technology and tools become available." },
];

const RENTAL_FEATURES = [
  { label: "Total Floor Size", value: "67 × 70 ft — turfed" },
  { label: "Tunnel Configuration", value: "4 independent 17 × 70 ft tunnels" },
  { label: "Private Mezzanine Tunnel", value: "20 × 50 ft — for private lessons" },
  { label: "Available Hours", value: "8 AM – 10 PM, 7 days" },
  { label: "Seasonal Contracts", value: "October 1 – end of April" },
];

export default function FacilityClient() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 bg-black min-h-screen">

        {/* Header */}
        <section className="py-20 border-b border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white text-base font-bold uppercase tracking-[0.25em] mb-2">Advanced Sports Performance</p>
            {/* SC 1.4.3 — #5A8C8F on black = ~6:1 passes AA */}
            <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">The Space</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">67 × 70 Feet of Elite Training Space</h1>
            {/* SC 1.4.3 — #5A8C8F for text-base (16px normal weight — needs 4.5:1, #5A8C8F = ~6:1) */}
            <p className="text-[#5A8C8F] text-base font-semibold mb-4">4 Independent Tunnels · Private Mezzanine · Advanced Assessment Technology</p>
            <p className="text-[#88898B] text-xl max-w-2xl leading-relaxed">A full-sized turfed training floor that converts into four independent tunnels, a private mezzanine for lessons, and advanced assessment technology — all under one roof in Shelby Township.</p>
          </div>
        </section>

        {/* Facility Image */}
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=1920&q=80" alt="Sports training facility" className="w-full h-full object-cover object-center" />
        </div>

        {/* Floor layout */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-white text-3xl font-bold mb-6">Training Floor</h2>
                <p className="text-[#88898B] text-base leading-relaxed mb-8">The main floor is a 67×70 ft turfed surface convertible into four independent 17×70 ft training tunnels — allowing multiple teams or groups to train simultaneously without interference. A private 20×50 ft mezzanine tunnel is reserved for individual lessons and small-group instruction.</p>
                <div className="space-y-3">
                  {RENTAL_FEATURES.map((f) => (
                    <div key={f.label} className="flex justify-between border-b border-[#88898B]/10 pb-3">
                      <span className="text-[#88898B] text-sm">{f.label}</span>
                      <span className="text-white text-sm font-semibold">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {/* Visual floor diagram */}
                <div className="border border-[#88898B]/20 p-6 bg-[#0a0a0a]">
                  {/* SC 1.4.3 — #5A8C8F for xs text on black */}
                  <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-4">Floor Layout</p>
                  <div className="space-y-2">
                    {["Tunnel 1 — 17 × 70 ft", "Tunnel 2 — 17 × 70 ft", "Tunnel 3 — 17 × 70 ft", "Tunnel 4 — 17 × 70 ft"].map((t) => (
                      <div key={t} className="bg-[#456B6D]/10 border border-[#456B6D]/30 px-4 py-3">
                        <span className="text-white text-sm font-medium">{t}</span>
                      </div>
                    ))}
                    <div className="bg-[#88898B]/10 border border-[#88898B]/30 px-4 py-3 mt-4">
                      <span className="text-[#88898B] text-sm font-medium">Mezzanine — 20 × 50 ft (Private Lessons)</span>
                    </div>
                  </div>
                </div>
                <div className="border border-[#88898B]/20 p-6 bg-[#0a0a0a]">
                  <p className="text-white text-sm font-semibold mb-2">Seasonal Contracts</p>
                  <p className="text-[#88898B] text-sm leading-relaxed">Teams are placed by seniority. Season runs October 1 through end of April. Returning teams receive early access and a 20% loyalty discount during contract renewal. Partial contracts available after full-season slots are filled.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-20 border-t border-[#88898B]/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            {/* SC 1.4.3 — #5A8C8F for small text */}
            <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Technology & Equipment</p>
            <h2 className="text-white text-3xl font-bold mb-10">Built for Assessment-Driven Training</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EQUIPMENT.map((e) => (
                <div key={e.name} className="border border-[#88898B]/20 p-6 hover:border-[#456B6D]/60 transition-colors">
                  <h3 className="text-white font-bold mb-2">{e.name}</h3>
                  <p className="text-[#88898B] text-sm leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental CTA */}
        <section className="bg-[#456B6D] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Interested in Renting the Facility?</h2>
            {/* SC 1.4.3 — removed text-white/80; solid white passes on #456B6D */}
            <p className="text-white text-lg mb-8 max-w-xl mx-auto">Seasonal contracts for teams, vetted coaches, and individual athletes. Contact us to discuss availability and scheduling.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-black hover:bg-[#111] text-white font-semibold px-10 py-4 uppercase tracking-wider transition-colors">Inquire About Rental</Link>
            </div>
          </div>
        </section>

        <footer className="bg-black border-t border-[#88898B]/20 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#88898B] text-xs">© 2026 Advanced Sports Performance LLC. All rights reserved.</p>
            <Link href="/" className="text-[#88898B] hover:text-white text-xs transition-colors">← Back to Home</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
