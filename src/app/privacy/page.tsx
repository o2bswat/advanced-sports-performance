import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Advanced Sports Performance",
  description: "Privacy practices for Advanced Sports Performance's website, inquiries, and bookings.",
};

const sections = [
  ["Information you provide", "When you contact us, we may collect your name, email address, phone number, inquiry topic, and message. We use this information to respond to you and discuss services, training, and facility rentals. Please do not include sensitive medical information in a general website inquiry."],
  ["Appointments and facility bookings", "Booking and scheduling may take place through SimplyBook.me or other booking providers linked from our website. These providers process the information you enter under their own privacy policies."],
  ["Client records", "When you receive massage, training, or related services, we may collect additional intake or health information through separate client-record systems, including Noterro where applicable. Such information is handled separately from general website inquiries."],
  ["Payments", "Payments may be processed through third-party payment services. We do not collect or store complete payment card details through the website contact form."],
  ["Email communications", "We use the contact information you provide to respond to inquiries and send service-related communications. Our optional email newsletter signup is provided by Brevo and is separate from contacting us; submitting an inquiry does not automatically subscribe you to marketing emails."],
  ["Technical information and cookies", "Website hosting services may process IP addresses, device information, and technical logs to operate and secure the site. Embedded newsletter, booking, or payment services may use their own cookies or tracking technologies under their own privacy policies."],
  ["Sharing and security", "We share information with service providers as necessary to operate the website, manage appointments, and respond to you. We take reasonable precautions to protect information, but no electronic system is completely secure."],
  ["Your choices", "You may contact us to request access to or correction of information you have submitted. Some records may need to be retained for legal, professional, or business purposes."],
  ["Policy updates", "We may revise this policy and will publish updates on this page."],
] as const;

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <header className="border-b border-[#456B6D]/40">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold hover:text-[#5A8C8F]">Advanced Sports Performance</Link>
          <Link href="/" className="text-sm text-[#5A8C8F] hover:text-white">Back to Home</Link>
        </div>
      </header>
      <article className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[#5A8C8F] text-sm uppercase tracking-widest mb-3">Your information matters</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-[#A6A6A6] text-sm mb-10">Effective November 13, 2026</p>
        <p className="text-[#D1D1D1] leading-relaxed mb-10">Advanced Sports Performance LLC respects your privacy. This policy explains how we handle information collected through our website and linked services.</p>
        <div className="space-y-9">
          {sections.map(([heading, body]) => <section key={heading}><h2 className="text-xl font-semibold mb-3">{heading}</h2><p className="text-[#D1D1D1] leading-relaxed">{body}</p></section>)}
        </div>
        <p className="mt-12 text-[#D1D1D1]">Questions? Email <a className="text-[#5A8C8F] underline break-all" href="mailto:advancedsportsmacomb@gmail.com">advancedsportsmacomb@gmail.com</a>.</p>
      </article>
      <footer className="border-t border-[#456B6D]/40 py-8 text-center text-[#88898B] text-xs">© 2026 Advanced Sports Performance LLC.</footer>
    </main>
  );
}
