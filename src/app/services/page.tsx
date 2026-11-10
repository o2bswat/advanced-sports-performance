import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

// SC 2.4.2 — Page Titled: unique, descriptive title for this page
export const metadata: Metadata = {
  title: "Services | Advanced Sports Performance",
  description: "Athletic performance training, corrective exercise, movement assessment, sports massage, integrated manual therapy, and 9D Breathwork for athletes of all ages in Shelby Township, MI.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
