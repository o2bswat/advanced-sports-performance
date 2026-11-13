import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.advancedsportsmacomb.com/events" },
  title: "Events & Clinics | Advanced Sports Performance",
  description: "Speed challenges, skill clinics, camps, and open training events for athletes at Advanced Sports Performance in Shelby Township, Michigan.",
};

export default function EventsPage() {
  return <EventsClient />;
}
