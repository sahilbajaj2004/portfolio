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
  title: "Sahil Bajaj | Portfolio",
  description:
    "Full Stack Developer, Web3 Enthusiast, and Open Source Contributor",
  openGraph: {
    title: "Sahil Bajaj | Portfolio",
    description:
      "Full Stack Developer, Web3 Enthusiast, and Open Source Contributor",
    url: "https://sahil-bajaj-portfolio.vercel.app", // replace with your actual domain
    siteName: "Sahil Bajaj Portfolio",
    images: [
      {
        url: "https://sahil-bajaj-portfolio.vercel.app/webpic.png", // 🔁 Replace with your actual hosted image URL
        width: 1200,
        height: 630,
        alt: "Sahil Bajaj Portfolio Preview",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://sahil-bajaj-portfolio.vercel.app"), // Helps generate absolute URLs
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
