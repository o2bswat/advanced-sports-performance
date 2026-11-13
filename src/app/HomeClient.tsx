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


function Footer() {
  return (
    <footer className="bg-black border-t border-[#88898B]/20 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img
            src="/images/advanced-sports-performance-logo.png"
            alt="Advanced Sports Performance"
            className="h-10 w-auto mb-4"
          />
          <p className="text-[#b8b9bb] text-sm leading-relaxed">Athletic training facility serving athletes of all ages and goals across Oakland and Macomb counties. Built by a local mom, open to every athlete in the community. Veteran and female-owned.</p>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="text-[#b8b9bb] hover:text-white text-sm transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Contact</h3>
          <ul className="space-y-2 text-[#b8b9bb] text-sm">
            <li>47959 Van Dyke Ave.</li>
            <li>Shelby Township, MI 48317</li>
            <li className="pt-1"><a href="tel:5869422000" className="hover:text-white transition-colors">586-942-2000</a></li>
            <li><a href="mailto:advancedsportsmacomb@gmail.com" className="hover:text-white transition-colors">advancedsportsmacomb@gmail.com</a></li>
            <li className="pt-1">Mon–Sun: 8 AM – 10 PM</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-[#88898B]/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#b8b9bb] text-xs">© 2026 Advanced Sports Performance LLC. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/advancedsportsmacomb" target="_blank" rel="noopener noreferrer" className="text-[#b8b9bb] hover:text-white text-xs transition-colors">Facebook</a>
          <a href="https://www.instagram.com/advancedsportmacomb" target="_blank" rel="noopener noreferrer" className="text-[#b8b9bb] hover:text-white text-xs transition-colors">Instagram</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6"><Link href="/privacy" className="text-[#b8b9bb] hover:text-white text-xs underline">Privacy Policy</Link></div>
    </footer>
  );
}

const SERVICES = [
  {
    title: "Athlete Assessment and Training",
    desc: "HumanTrak and DynamoMax movement assessment, plus speed, agility, strength, and performance programs for athletes of all ages and ability levels.",
    icon: "◆",
    href: "/services#training",
  },
  {
    title: "Massage & Manual Therapy",
    desc: "Sports massage, integrated manual therapy, hot stones, cupping, and Reiki to support recovery and ease tension.",
    icon: "★",
    href: "/services#massage",
  },
  {
    title: "Facility Rental",
    desc: "Training floor and cage rentals available for teams and individuals. Seasonal team contracts available.",
    icon: "●",
    href: "/facility",
  },
];

const TRUST = [
  { label: "NASM Certified", sub: "Personal Trainer & Corrective Exercise Specialist" },
  { label: "Licensed Massage Therapist", sub: "Michigan — since 2009" },
  { label: "Orthopedic Manual Therapy", sub: "Certified — James Waslaski Protocol" },
  { label: "Veteran & Female Owned", sub: "Established October 2023" },
];

const WHY = [
  { heading: "Community First", body: "We're locally owned and operated in Shelby Township. Our athletes are our neighbors — and we train them that way." },
  { heading: "Advanced Assessment Technology", body: "HumanTrak, DynamoMax, and MoveHealth for data-driven performance tracking." },
  { heading: "Elite Instructors", body: "Vetted coaches with 20+ years experience in fastpitch, volleyball, speed and agility." },
  { heading: "All Levels Welcome", body: "You don't have to be chasing a scholarship to deserve quality coaching. We work with beginners, recreational athletes, and competitors alike." },
];

export default function HomeClient() {
  return (
    <>
      <Navbar />

      {/* SC 2.4.1 target — skip link destination */}
      <main id="main-content" tabIndex={-1}>

        {/* Hero */}
        <section className="min-h-screen bg-black flex items-center pt-16 relative overflow-hidden">
          <div className="absolute inset-0">
            {/* Decorative background — empty alt is correct for purely decorative images */}
            <img src="/images/training-hero-1200.webp" srcSet="/images/training-hero-640.webp 640w, /images/training-hero-1200.webp 1200w, /images/training-hero-1920.webp 1920w" sizes="100vw" alt="" fetchPriority="high" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
          </div>
          <div className="max-w-7xl mx-auto px-6 w-full py-24 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <p className="text-white text-base font-bold uppercase tracking-[0.25em] mb-2">Advanced Sports Performance</p>
              {/* SC 1.4.3 fix — #5A8C8F on black = ~6:1, passes AA for normal text */}
              <p className="text-[#80b5b8] text-sm font-semibold uppercase tracking-[0.2em] mb-6">Shelby Township, Michigan</p>
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.05] mb-8">
                Train. Recover. Repeat.
              </h1>
              <p className="text-[#b8b9bb] text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl">
                Performance training, massage therapy, and movement assessment — for athletes of all ages, backgrounds, and goals. Right here in Shelby Township.
              </p>
              <p className="text-[#b8b9bb] text-xs leading-relaxed mt-6 max-w-2xl">Sessions are by appointment — no walk-ins. No membership required. HSA/FSA accepted. Book online to get started.</p>
            </div>
          </div>
        </section>

        {/* Services snapshot */}
        <section className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              {/* SC 1.4.3 fix — lighter teal for small text */}
              <p className="text-[#80b5b8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">What We Offer</p>
              <h2 className="text-white text-4xl md:text-5xl font-bold">Everything an Athlete Needs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="border border-[#88898B]/20 p-8 hover:border-[#456B6D]/60 transition-colors group">
                  <span className="text-[#D8894A] text-2xl mb-6 block" aria-hidden="true">{s.icon}</span>
                  <h3 className="text-white text-xl font-bold mb-4">{s.title}</h3>
                  <p className="text-[#b8b9bb] text-sm leading-relaxed mb-6">{s.desc}</p>
                  {/* SC 2.4.4 fix — descriptive aria-label distinguishes each "Learn More" link */}
                  <Link
                    href={s.href}
                    className="text-[#80b5b8] text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="bg-black py-12"><div className="max-w-7xl mx-auto px-6"><h2 className="text-white text-3xl font-bold mb-6">Experience You Can Rely On</h2><ul className="grid sm:grid-cols-2 gap-6">{TRUST.map(t => <li key={t.label}><h3 className="text-white font-semibold">{t.label}</h3><p className="text-[#b8b9bb]">{t.sub}</p></li>)}</ul><Link href="/about" className="inline-block underline text-white mt-6">Meet our team and view credentials</Link></div></section>
        {/* Why ASP */}
        <section className="bg-[#0a0a0a] py-24 border-y border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#80b5b8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Why Advanced Sports Performance</p>
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Your Hometown Training Partner.</h2>
                <p className="text-[#b8b9bb] text-lg leading-relaxed">
                  Advanced Sports Performance was built to give local athletes a serious training environment without the pressure and price tag of big program culture. Our facility, programming, and team are here for athletes who love their sport — at every level, every age, every goal.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY.map((w) => (
                  <div key={w.heading} className="border-l-2 border-[#456B6D] pl-5">
                    <h3 className="text-white font-semibold mb-2">{w.heading}</h3>
                    <p className="text-[#b8b9bb] text-sm leading-relaxed">{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
<section className="bg-black py-16 border-t border-white/20"><div className="max-w-7xl mx-auto px-6"><h2 className="text-white text-3xl font-bold mb-8">Frequently Asked Questions</h2><dl className="space-y-6"><div><dt className="text-white font-semibold">Do I need an appointment?</dt><dd className="text-[#b8b9bb] mt-2">Yes. Sessions are by appointment only; walk-ins are not available.</dd></div><div><dt className="text-white font-semibold">Where are you located?</dt><dd className="text-[#b8b9bb] mt-2">47959 Van Dyke Ave., Shelby Township, MI 48317.</dd></div><div><dt className="text-white font-semibold">How do I book?</dt><dd className="text-[#b8b9bb] mt-2">Use our online SimplyBook calendar, or call 586-942-2000 for help.</dd></div><div><dt className="text-white font-semibold">What are your hours?</dt><dd className="text-[#b8b9bb] mt-2">ASP hours are Monday–Sunday, 8 AM–10 PM. Session availability is shown in the booking calendar.</dd></div></dl><p className="mt-6"><a href="https://aspmacomb.simplybook.me" className="booking-button inline-block px-6 py-4 font-semibold">Book online</a></p></div></section>
        {/* Email List Signup */}
        <section className="bg-[#0a0a0a] border-t border-[#88898B]/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-xl">
              <p className="text-[#80b5b8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Stay in the Loop</p>
              <h2 className="text-white text-3xl font-bold mb-3">Join the ASP Email List</h2>
              <p className="text-[#b8b9bb] text-base leading-relaxed mb-8">Get updates on new programs, upcoming events, clinics, and what's happening at the facility.</p>
              <ASPSignupForm />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function ASPSignupForm() {
  return (
    <>
    <p className="text-white mb-4"><a className="underline" href="https://e1a10ec2.sibforms.com/v2/serve/MUIFAGhfSFfkB8NMK_whog6uPWrVGc-t8NhagR0lqIAIxO9eWlj8a30QIHw8--0ldPRWvgDRqgLemgkN7gkKde47jYqq3lb16lajcP8JFHyPw-hxksJdDs_8szDpQKj18UM4iPIWPW_lPioeDMIxfycdC-npZdUtLjUAAsFzlZPAiEs0wzaT2bpdmv15r7OIoGCiyS-ex2f0wQqLwQ==">Open the newsletter signup form on its own page</a></p>
    <iframe
      loading="lazy"
      width="540"
      height="305"
      src="https://e1a10ec2.sibforms.com/v2/serve/MUIFAGhfSFfkB8NMK_whog6uPWrVGc-t8NhagR0lqIAIxO9eWlj8a30QIHw8--0ldPRWvgDRqgLemgkN7gkKde47jYqq3lb16lajcP8JFHyPw-hxksJdDs_8szDpQKj18UM4iPIWPW_lPioeDMIxfycdC-npZdUtLjUAAsFzlZPAiEs0wzaT2bpdmv15r7OIoGCiyS-ex2f0wQqLwQ=="
      frameBorder="0"
      scrolling="auto"
      allowFullScreen
      title="Advanced Sports Performance newsletter signup"
      style={{ display: "block", maxWidth: "100%" }}
    />
    </>
  );
}
