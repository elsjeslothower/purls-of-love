import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Patterns from "@/components/Patterns";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Patterns — ${site.orgName}`,
  description: "Free, volunteer-tested knit and crochet patterns for Purls of Love donation projects.",
  alternates: {
    canonical: "/patterns",
  },
};

export default function PatternsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Patterns />
      </main>
      <Footer />
    </>
  );
}
