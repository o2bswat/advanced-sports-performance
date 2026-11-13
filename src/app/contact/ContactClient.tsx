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

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "general", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const [website, setWebsite] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.includes("@") || !formData.phone.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });
      if (!response.ok) throw new Error("Could not send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-[#456B6D]/40 p-10 text-center">
        <p className="text-[#456B6D] text-2xl mb-4" aria-hidden="true">✓</p>
        <h3 className="text-white text-xl font-bold mb-3">Message Received</h3>
        <p className="text-[#88898B] text-sm">We'll be in touch within 24 hours. For urgent inquiries call <a href="tel:5869422000" className="text-white">586-942-2000</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>\n      <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="asp-website">Website</label><input id="asp-website" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} /></div>
      {/* SC 3.3.2 — required field explanation */}
      <p className="text-[#88898B] text-xs mb-5">Fields marked * are required.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          {/* SC 1.3.1 fix — htmlFor/id pair */}
          <label htmlFor="contact-name" className="text-[#88898B] text-xs font-semibold uppercase tracking-wider block mb-2">Name *</label>
          <input
            id="contact-name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            /* SC 1.4.11 fix — border-[#88898B]/60 gives 3:1+ ratio against black */
            /* SC 2.4.7 fix — focus:ring-2 focus:ring-[#5A8C8F] instead of focus:border-only */
            className="w-full bg-transparent border border-[#88898B]/60 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A8C8F] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-[#88898B] text-xs font-semibold uppercase tracking-wider block mb-2">Email *</label>
          <input
            id="contact-email"
            required
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border border-[#88898B]/60 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A8C8F] transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="text-[#88898B] text-xs font-semibold uppercase tracking-wider block mb-2">Phone</label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-transparent border border-[#88898B]/60 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A8C8F] transition-colors"
          placeholder="(586) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="text-[#88898B] text-xs font-semibold uppercase tracking-wider block mb-2">I'm inquiring about</label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={e => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-black border border-[#88898B]/60 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A8C8F] transition-colors"
        >
          <option value="general">General Question</option>
          <option value="training">Athletic Training</option>
          <option value="massage">Massage / Manual Therapy</option>
          <option value="facility">Facility Rental</option>
          <option value="team">Team Contract</option>
          <option value="breathwork">9D Breathwork</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-[#88898B] text-xs font-semibold uppercase tracking-wider block mb-2">Message *</label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border border-[#88898B]/60 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A8C8F] transition-colors resize-none"
          placeholder="Tell us about your athlete or what you're looking for..."
        />
      </div>

      <button type="submit" className="w-full bg-[#456B6D] hover:bg-[#3a5a5c] disabled:opacity-50 text-white font-semibold py-4 uppercase tracking-wider text-sm transition-colors">
        {status === "sending" ? "Sending..." : "Open Email to Send"}
      </button>
      {status === "error" && <p className="text-red-400 text-sm text-center" role="alert">Something went wrong. Please call us at 586-942-2000.</p>}
    </form>
  );
}

export default function ContactClient() {
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
            <p className="text-[#5A8C8F] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Get in Touch</p>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Contact & Book</h1>
            <p className="text-[#88898B] text-xl max-w-2xl leading-relaxed">Book your session directly online, or use the form below to send us a message.</p>
            <p className="text-[#5A8C8F] text-sm font-semibold mt-4">HSA/FSA accepted. Ask us about receipts and documentation for your plan.</p>
          </div>
        </section>

        {/* Policy notice */}
        <section className="py-6 border-b border-[#88898B]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border border-[#456B6D]/30 p-6">
              <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-2">By Appointment — Please Read</p>
              <p className="text-[#88898B] text-sm leading-relaxed">Advanced Sports Performance is by appointment only and does not accept walk-ins. No membership is required. Book online to get started, or contact us below and we'll get back to you to discuss services and availability.</p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-white text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-3">Location</p>
                  <p className="text-white text-sm">47959 Van Dyke Ave.</p>
                  <p className="text-white text-sm">Shelby Township, MI 48317</p>
                </div>
                <div>
                  <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-3">Phone</p>
                  <a href="tel:5869422000" className="text-white text-sm hover:text-[#5A8C8F] transition-colors">586-942-2000</a>
                </div>
                <div>
                  <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-3">Email</p>
                  <a href="mailto:advancedsportsmacomb@gmail.com" className="text-white text-sm hover:text-[#5A8C8F] transition-colors">advancedsportsmacomb@gmail.com</a>
                </div>
                <div>
                  <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-3">Hours</p>
                  <p className="text-white text-sm">Monday – Sunday</p>
                  <p className="text-[#88898B] text-sm">8:00 AM – 10:00 PM</p>
                </div>
                <div>
                  <p className="text-[#5A8C8F] text-xs font-semibold uppercase tracking-widest mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/advancedsportsmacomb" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-[#5A8C8F] transition-colors">Facebook</a>
                    <a href="https://www.instagram.com/advancedsportmacomb" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-[#5A8C8F] transition-colors">Instagram</a>
                  </div>
                </div>
                <div className="border border-[#88898B]/20 p-5">
                  <p className="text-white text-sm font-semibold mb-2">Facility Rental Inquiries</p>
                  <p className="text-[#88898B] text-sm leading-relaxed">For team contracts and facility rental, use the form or call us directly. Mention your team's sport and preferred schedule and we'll talk through options.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-white text-2xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
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
