import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.advancedsportsmacomb.com/blog" },
  title: "Blog | Advanced Sports Performance",
  description: "Training tips, recovery insights, announcements, and specials from the team at Advanced Sports Performance in Shelby Township, Michigan.",
};

export default function BlogPage() {
  return <BlogClient />;
}
