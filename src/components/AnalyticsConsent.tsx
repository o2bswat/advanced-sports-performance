"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
const key = "asp-analytics-consent-v1";
export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { setChoice(localStorage.getItem(key)); } catch {} setReady(true); }, []);
  function choose(value: string) {
    try { localStorage.setItem(key, value); } catch {}
    if (choice === "accepted" && value !== "accepted") {
      document.cookie.split(";").forEach(cookie => {
        const name = cookie.trim().split("=")[0];
        if (name.startsWith("_ga")) {
          for (const domain of ["", "; domain=www.advancedsportsmacomb.com", "; domain=.advancedsportsmacomb.com"]) document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
        }
      });
      window.location.reload();
    }
    setChoice(value);
  }
  if (!ready) return null;
  return <>
    {choice === "accepted" && <>
      <Script id="analytics-config" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[]; function gtag(){dataLayer.push(arguments);} gtag('js',new Date()); gtag('config','G-DCW653F1J7');`}</Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DCW653F1J7" strategy="afterInteractive" />
    </>}
    <aside aria-label="Analytics preferences" className="bg-black text-white border-t border-white/30 px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm mb-3">Optional Google Analytics helps us understand website visits. It loads only if you accept. Booking works either way. <a href="/privacy" className="underline">Privacy policy</a></p>
        <p role="status" className="text-sm mb-3">{choice === "accepted" ? "Analytics is on." : "Analytics is off."}</p>
        <div className="flex flex-wrap gap-4">
          <button type="button" onClick={() => choose("accepted")} className="border border-white px-5 py-3" disabled={choice === "accepted"}>Accept analytics</button>
          <button type="button" onClick={() => choose("rejected")} className="border border-white px-5 py-3" disabled={choice === "rejected"}>Decline analytics</button>
        </div>
      </div>
    </aside>
  </>;
}
