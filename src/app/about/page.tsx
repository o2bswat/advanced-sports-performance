import type { Metadata } from "next";
import AboutClient from "./AboutClient";

// SC 2.4.2 — Page Titled: unique, descriptive title for this page
export const metadata: Metadata = {
  title: "About | Advanced Sports Performance",
  description: "Learn about Advanced Sports Performance — a veteran and female-owned athletic training facility in Shelby Township, MI, built by a mom for the athletes of her community.",
};

export default function AboutPage() {
  return <AboutClient />;
}
