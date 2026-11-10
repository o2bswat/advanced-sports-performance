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
        {/* SC 4.1.2 fix — aria-label and aria-expanded added */}
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

const FACILITY_RENTAL = {
  name: "Facility Rental",
  desc: "Our 67×70 ft turfed training floor is available for seasonal and part-season team contracts, providing dedicated space for organized team training throughout the season. Individual tunnel rentals are also available for athletes and coaches who need focused, private training time on a single 17×70 ft lane. Vetted coaches are welcome to apply for ongoing access to hold private training sessions with their athletes — contact us to discuss availability and the approval process.",
};

const ATHLETE_SERVICES = [
  {
    name: "Athletic Performance Training",
    desc: "NASM-certified speed, agility, strength, and power programming designed for athletes of all ages. Includes Blaze Pod reaction training, sport-specific movement patterns, and performance enhancement programming to increase power output, improve efficiency, and reduce injury risk — from beginner to elite level.",
  },
  {
    name: "Corrective Exercise",
    desc: "Assessment-driven corrective programming targeting compensation patterns, asymmetries, and chronic pain. Built around DynamoMax and HumanTrak findings.",
  },
  {
    name: "Movement Assessment",
    desc: "Comprehensive baseline assessment using HumanTrak and DynamoMax to measure strength, range of motion, and movement quality. Results inform every program we build.",
  },
];

const WELLNESS_SERVICES = [
  {
    name: "Sports Massage",
    desc: "Pre- and post-competition massage focused on muscle recovery, injury prevention, and performance maintenance. Addresses the demands of high-volume athletic training.",
  },
  {
    name: "Integrated Manual Therapy",
    desc: "Advanced orthopedic manual therapy combining muscle, joint, and connective tissue techniques. Certified under James Waslaski's protocol at The Center for Pain Management.",
  },
  {
    name: "Hot and Cold Therapies",
    desc: "Targeted application of heat and cold to prepare tissue, reduce inflammation, improve circulation, and accelerate recovery. Used strategically before or after hands-on work to enhance results.",
  },
  {
    name: "Compression and Percussive Therapies",
    desc: "Pneumatic compression and percussive massage tools to improve circulation, reduce muscle soreness, and speed recovery between training sessions. Effective for active athletes managing high training loads.",
  },
  {
    name: "Muscle Scraping, Cupping & Kinesio Taping",
    desc: "Instrument-assisted muscle scraping (IASTM) to break up fascial adhesions and restore tissue mobility, myofascial cupping to lift and decompress soft tissue, and kinesio taping to support muscles and joints during activity and recovery.",
  },
  {
    name: "Infrared Recovery Pod",
    desc: "A 15-minute session in our infrared recovery pod combines gentle infrared warmth with whole-body vibration to help you relax, loosen up, and feel restored after training. Offered on its own ($50) or as an add-on to a massage service ($30). Packages of 5: $200 standalone, $125 add-on. Not suitable for everyone: not recommended during pregnancy or for anyone with a heart condition or metal implants. Check with your healthcare provider if you have a medical condition.",
  },
  {
    name: "9D Breathwork",
    desc: "90-minute immersive breathwork sessions designed to build a winning mindset, sharpen mental focus, and strengthen the connection between mind and body. Uses layered soundscapes, breathwork, visualization, movement, and affirmations to help athletes perform with confidence and intention.",
  },
];

export default function ServicesClient() {
  return (
    <>
      <Navbar />
      {/* SC 2.4.1 — skip link target */}
      <main id="main-content" className="pt-16 bg-black min-h-screen">

        {/* Page Header */}
        <section className="py-20 border-b border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white text-base font-bold uppercase tracking-[0.25em] mb-2">Advanced Sports Performance</p>
            {/* SC 1.4.3 fix — #5A8C8F on black = ~6:1 */}
            <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">What We Offer</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Services</h1>
            <p className="text-[#88898B] text-xl max-w-2xl leading-relaxed">Every service at Advanced Sports Performance is designed for athletes — from youth teams to adult competitors, and anyone at any stage of life who wants to move better and feel stronger.</p>
            <p className="text-[#5A8C8F] text-sm font-semibold mt-4">HSA/FSA accepted. Ask us about receipts and documentation for your plan.</p>
          </div>
        </section>

        {/* Facilities & Training */}
        <section id="training" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-white text-3xl font-bold mb-2">Facilities &amp; Training</h2>
            <p className="text-[#88898B] text-base mb-10">Performance training, facility rental, and assessment services.</p>

            <div className="border border-[#456B6D]/40 p-10 mb-8 hover:border-[#456B6D]/80 transition-colors">
              <h3 className="text-white text-2xl font-bold mb-4">{FACILITY_RENTAL.name}</h3>
              <p className="text-[#88898B] text-base leading-relaxed mb-6 max-w-4xl">{FACILITY_RENTAL.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4 text-[#5A8C8F] text-sm font-semibold">
                <span>Individual cage rentals available — contact us for details.</span>
                <span className="hidden sm:block text-[#88898B]">·</span>
                <span>Contact us for full floor availability and coaching opportunities.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ATHLETE_SERVICES.map((s) => (
                <div key={s.name} className="border border-[#88898B]/20 p-8 hover:border-[#456B6D]/60 transition-colors">
                  <h3 className="text-white text-lg font-bold mb-3">{s.name}</h3>
                  <p className="text-[#88898B] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image break */}
        <div className="w-full h-72 md:h-96 overflow-hidden relative">
          <img src="/images/IMG_0624.jpg" alt="Advanced Sports Performance facility" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Recovery & Wellness */}
        <section id="massage" className="py-20 border-t border-[#88898B]/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-white text-3xl font-bold mb-2">Recovery &amp; Wellness</h2>
            <p className="text-[#88898B] text-base mb-10">Massage, manual therapy, hot and cold therapies, compression, percussive work, muscle scraping, cupping, kinesio taping, and 9D Breathwork — recovery and wellness for the whole athlete.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WELLNESS_SERVICES.map((s) => (
                <div key={s.name} className="border border-[#88898B]/20 p-8 hover:border-[#456B6D]/60 transition-colors">
                  <h3 className="text-white text-lg font-bold mb-3">{s.name}</h3>
                  <p className="text-[#88898B] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
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
