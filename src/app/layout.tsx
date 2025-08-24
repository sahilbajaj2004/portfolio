import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sahil Bajaj | Full-Stack Developer Portfolio",
  description:
    "Full Stack MERN Developer building performant, modern web apps. Explore projects, experience, and skills.",
  keywords: [
    "Sahil Bajaj",
    "MERN Developer",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "Web3 Developer",
    "MERN Stack Portfolio",
    "Web Application Developer",
    "API Development",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Freelance Web Developer",
    "Developer Portfolio",
    "Sahil Bajaj Portfolio",
    "Sahil Bajaj Full Stack Developer",
    "MERN Developer Portfolio",
    "React Node.js Developer",
    "Next.js Developer Portfolio",
    "JavaScript Full Stack Developer",
    "TypeScript React Developer",
    "Web Application Developer",
    "Sahil Bajaj Freelance MERN Developer",
    "Frontend Developer Portfolio",
    "Backend Developer Portfolio",
    "Web3 Developer Portfolio",
    "Open Source Contributor",
    "Sahil Bajaj Full Stack Developer Portfolio India",
    "MERN Developer Portfolio Delhi NCR",
    "Sahil Bajaj Freelance Next.js Developer",
    "React Projects with Node.js Backend",
    "Custom Web Development Portfolio",
    "Sahil Bajaj Full Stack Developer Ghaziabad",
    "Modern Web Application Portfolio",
    "Best MERN Developer Portfolio 2025",
  ],
  metadataBase: new URL("https://www.sahilbajaj.me/"),
  openGraph: {
    title: "Sahil Bajaj | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Sahil Bajaj — full-stack MERN developer, Web3 enthusiast, and open-source contributor.",
    url: "https://www.sahilbajaj.me/",
    siteName: "Sahil Bajaj Portfolio",
    images: [
      {
        url: "https://www.sahilbajaj.me/webpic.png", // ✅ Replace with your actual OpenGraph image if you update it later
        width: 1200,
        height: 630,
        alt: "Preview of Sahil Bajaj’s developer portfolio website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Bajaj | Full-Stack Developer",
    description:
      "Developer portfolio of Sahil Bajaj — MERN, Web3, open-source projects, and more.",
    images: ["https://www.sahilbajaj.me/webpic.png"],
    creator: "@SahilBajaj2004", // ✅ Your Twitter username (already correct)
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.sahilbajaj.me/" />

        {/* ✅ JSON-LD structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sahil Bajaj",
              url: "https://www.sahilbajaj.me/",
              sameAs: [
                "https://linkedin.com/in/sahilbajaj2004",
                "https://github.com/sahilbajaj2004",
                "https://x.com/SahilBajaj2004",
                "https://instagram.com/bajaj.jsx", // ✅ Your Instagram username
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
