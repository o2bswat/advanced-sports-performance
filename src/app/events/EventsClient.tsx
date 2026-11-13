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
          <img
            src="/images/Wordpress.png"
            alt="Advanced Sports Performance"
            className="h-10 w-auto"
          />
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

// ─── ADD EVENTS HERE ──────────────────────────────────────────────────────────
// Each event: title, date, time, type, description, spots (optional), url (optional)
// Types: "camp" | "clinic" | "challenge" | "open-house" | "team-event" | "special"

const EVENTS: {
  title: string;
  date: string;
  time: string;
  type: string;
  description: string;
  spots?: number;
  url?: string;
}[] = [
  // ── EXAMPLE — remove this and add your real events ──
  // {
  //   title: "Speed & Agility Clinic",
  //   date: "August 16, 2026",
  //   time: "10:00 AM – 12:00 PM",
  //   type: "Clinic",
  //   description: "A two-hour speed and agility session for athletes of all ages. Includes HumanTrak assessment, acceleration mechanics, and footwork training.",
  //   spots: 20,
  //   url: "https://aspmacomb.simplybook.me",
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function EventsClient() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 bg-black min-h-screen">

        {/* Header */}
        <section className="py-20 border-b border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white text-base font-bold uppercase tracking-[0.25em] mb-2">Advanced Sports Performance</p>
            {/* SC 1.4.3 — #5A8C8F on black = ~6:1, passes AA */}
            <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Events & Clinics</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Events & Clinics</h1>
            <p className="text-[#88898B] text-xl max-w-2xl leading-relaxed">Speed challenges, skill clinics, camps, and open training events for athletes. Check back for upcoming opportunities to train, compete, and connect.</p>
          </div>
        </section>

        {/* Events list or empty state */}
        {EVENTS.length === 0 ? (
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-[#456B6D] text-4xl mb-6" aria-hidden="true">⚡</p>
              <h2 className="text-white text-2xl font-bold mb-4">Events Coming Soon</h2>
              <p className="text-[#88898B] text-base max-w-md mx-auto leading-relaxed mb-10">We're scheduling upcoming clinics, speed challenges, and camps. Check back soon — or reach out to be added to the notification list.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="border border-[#88898B]/40 hover:border-white text-white font-semibold px-8 py-4 uppercase tracking-wider transition-colors text-sm">Get Notified</Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 space-y-6">
              {EVENTS.map((event) => (
                <div key={event.title + event.date} className="border border-[#88898B]/20 hover:border-[#456B6D]/40 transition-colors p-8 grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-6 items-start">
                  <div>
                    <p className="text-[#5A8C8F] text-sm font-bold mb-1">{event.date}</p>
                    <p className="text-[#88898B] text-xs">{event.time}</p>
                    {/* SC 1.4.3 — #5A8C8F for small text on black */}
                    <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-wider mt-2">{event.type}</p>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-[#88898B] text-sm leading-relaxed">{event.description}</p>
                    {event.spots && (
                      <p className="text-[#88898B] text-xs mt-3">Limited to {event.spots} participants</p>
                    )}
                  </div>
                  {event.url && (
                    <div className="flex-shrink-0">
                      <a href={event.url} target="_blank" rel="noopener noreferrer" className="bg-[#456B6D] hover:bg-[#3a5a5c] text-white font-semibold px-6 py-3 uppercase tracking-wider transition-colors text-sm whitespace-nowrap inline-block">
                        Reserve a Spot
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What we host */}
        <section className="py-20 border-t border-[#88898B]/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                {/* SC 1.4.3 — #5A8C8F for small text */}
                <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">What We Host</p>
                <h2 className="text-white text-3xl font-bold mb-6">Training Events for Every Athlete</h2>
                <p className="text-[#88898B] text-base leading-relaxed">Events at Advanced Sports Performance are built around real athletic development — not just participation. Every event we host is run by vetted coaches who take athlete development seriously, at every level.</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Speed & Agility Clinics", detail: "Focused skill sessions on acceleration, footwork, and change-of-direction mechanics for athletes at all levels." },
                  { label: "Strength & Assessment Days", detail: "HumanTrak and DynamoMax baseline testing events open to individual athletes and teams." },
                  { label: "Camps & Multi-Day Programs", detail: "Intensive training blocks during school breaks and off-season windows — announced as scheduled." },
                  { label: "Team Events & Facility Rentals", detail: "Open facility hours, leaderboard challenges, and team-format training events throughout the year." },
                ].map((item) => (
                  <div key={item.label} className="border border-[#88898B]/15 p-6">
                    <p className="text-white font-semibold mb-1">{item.label}</p>
                    <p className="text-[#88898B] text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stay in the loop */}
        <section className="bg-[#456B6D] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Stay in the Loop</h2>
            {/* SC 1.4.3 — removed text-white/80; solid white passes 5.37:1 on #456B6D */}
            <p className="text-white text-lg mb-8">Reach out to be notified when new events and clinics are scheduled.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-black hover:bg-[#111] text-white font-semibold px-8 py-4 uppercase tracking-wider transition-colors">Get Notified</Link>
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
