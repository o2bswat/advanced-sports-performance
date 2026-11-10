import type { Metadata } from "next";
import ContactClient from "./ContactClient";

// SC 2.4.2 — Page Titled: unique, descriptive title for this page
export const metadata: Metadata = {
  title: "Contact & Book | Advanced Sports Performance",
  description: "Contact Advanced Sports Performance in Shelby Township, MI. Check availability, request booking access, or send a message about athletic training, massage, or facility rental.",
};

export default function ContactPage() {
  return <ContactClient />;
}
