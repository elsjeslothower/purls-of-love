import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { basePath } from "@/lib/basePath";
import "./globals.css";

const orgName = "Purls of Love";
const description =
  "Purls of Love is a volunteer-run nonprofit connecting knitters and crocheters with people who need a little extra warmth and comfort.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://purlsoflove.org"),
  title: orgName,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: orgName,
    description,
    url: "https://purlsoflove.org",
    siteName: orgName,
    type: "website",
  },
  icons: {
    icon: [{ url: `${basePath}/favicon.svg`, type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
