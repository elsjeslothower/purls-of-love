import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Donate — Purls of Love",
  description: "Support Purls of Love's volunteer knitters and crocheters with a donation on Venmo.",
  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Donate />
      </main>
      <Footer />
    </>
  );
}
