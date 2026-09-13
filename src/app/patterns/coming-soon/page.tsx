import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PdfComingSoon from "@/components/PdfComingSoon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pattern PDF Coming Soon — Purls of Love",
  description: "This pattern's PDF isn't uploaded yet — check back soon.",
  alternates: {
    canonical: "/patterns/coming-soon",
  },
};

export default function PdfComingSoonPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <PdfComingSoon />
      </main>
      <Footer />
    </>
  );
}
