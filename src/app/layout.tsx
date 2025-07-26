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
    "React",
    "Node.js",
    "Portfolio",
  ],
  metadataBase: new URL("https://sahilbajajportfolio.vercel.app"),
  openGraph: {
    title: "Sahil Bajaj | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Sahil Bajaj — full-stack MERN developer, Web3 enthusiast, and open-source contributor.",
    url: "https://sahilbajajportfolio.vercel.app",
    siteName: "Sahil Bajaj Portfolio",
    images: [
      {
        url: "https://sahilbajajportfolio.vercel.app/webpic.png", // ✅ Replace with your actual OpenGraph image if you update it later
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
    images: ["https://sahilbajajportfolio.vercel.app/webpic.png"],
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
        <link rel="canonical" href="https://sahil-bajaj-portfolio.vercel.app" />

        {/* ✅ JSON-LD structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sahil Bajaj",
              url: "https://sahilbajajportfolio.vercel.app",
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
