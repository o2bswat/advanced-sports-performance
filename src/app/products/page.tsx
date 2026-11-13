import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.advancedsportsmacomb.com/products" },
  title: "Products We Use | Advanced Sports Performance",
  description: "Equipment, recovery tools, and training gear vetted by the team at Advanced Sports Performance — chosen for performance, recovery, and results.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
