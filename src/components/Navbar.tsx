"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
const links = [["/services", "Services"], ["/about", "About"], ["/products", "Products"], ["/events", "Events"], ["/blog", "Blog"], ["/contact", "Contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  return <header className="site-header fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/20" onKeyDown={e => {
    if (e.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
  }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false); }}>
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 gap-4">
      <Link href="/" aria-label="Advanced Sports Performance home"><img src="/images/advanced-sports-performance-logo.png" alt="Advanced Sports Performance" className="h-10 w-auto max-w-[180px] object-contain" /></Link>
      <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
        {links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className="text-[#b8b9bb] hover:text-white text-sm font-medium uppercase">{label}</Link>)}
        <a href="https://aspmacomb.simplybook.me" className="booking-button px-5 py-3 text-sm font-semibold uppercase">Book Now<span className="sr-only"> — shared ASP SimplyBook booking</span></a>
      </nav>
      <button ref={toggle} type="button" className="lg:hidden text-white p-3" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeWidth="2" strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
      </button>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="mobile-navigation lg:hidden bg-black px-6 py-4 border-t border-white/20">
      {links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)} className="block py-3 text-[#b8b9bb] hover:text-white font-medium">{label}</Link>)}
      <a href="https://aspmacomb.simplybook.me" className="booking-button block px-5 py-3 font-semibold text-center">Book Now<span className="sr-only"> — shared ASP SimplyBook booking</span></a>
    </nav>
  </header>;
}
