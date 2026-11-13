import type { Metadata } from "next";
import FacilityClient from "./FacilityClient";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.advancedsportsmacomb.com/facility" },
  title: "Facility | Advanced Sports Performance",
  description: "67×70 ft turfed training floor, 4 independent tunnels, private mezzanine, and advanced assessment technology in Shelby Township, Michigan.",
};

export default function FacilityPage() {
  return <FacilityClient />;
}
