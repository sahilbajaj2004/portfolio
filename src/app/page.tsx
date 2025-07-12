"use client";

import Image from "next/image";
import Crosshair from "@/components/ui/Crosshair";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Home,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Crosshair color="white" />
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-12 pb-32">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Hi, I&apos;m Sahil Bajaj 👋
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Full Stack & Web3 Developer, Open Source
              <br />
              Enthusiast, and a Freelancer. I love to learn and share
              <br />
              knowledge with the community.
            </p>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden ml-auto">
            <Image
              src="/bajaj.jpg?height=80&width=80"
              alt="Sahil Bajaj's profile"
              width={70}
              height={70}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            I&apos;m a passionate full-stack developer with 3+ years of
            experience in building web applications using modern technologies. I
            enjoy working on challenging projects and contributing to open
            source. Currently focused on full-stack development and exploring
            Web3 technologies. When I&apos;m not coding, you can find me writing
            technical blogs or mentoring aspiring developers.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-3">
            {[
              {
                company: "Google",
                role: "Software Engineer",
                period: "June 2023 - Present",
                logo: "G",
              },
              {
                company: "Microsoft",
                role: "Frontend Developer",
                period: "Jan 2022 - May 2023",
                logo: "M",
              },
              {
                company: "Amazon",
                role: "Full Stack Developer",
                period: "Aug 2021 - Dec 2021",
                logo: "A",
              },
              {
                company: "Netflix",
                role: "Software Engineer Intern",
                period: "May 2021 - July 2021",
                logo: "N",
              },
              {
                company: "Apple",
                role: "iOS Developer",
                period: "Jan 2021 - April 2021",
                logo: "🍎",
              },
            ].map((exp, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gray-100 dark:bg-gray-800">
                  {exp.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{exp.role}</h3>
                      <p className="text-muted-foreground text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-blue-100 dark:bg-blue-900">
              🎓
            </div>
            <div>
              <h3 className="font-medium text-lg">
                Bachelor of Engineering and Technology
              </h3>
              <p className="text-muted-foreground text-sm">
                University Name • 2018 - 2022
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Go",
              "MongoDB",
              "PostgreSQL",
              "AWS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-sm rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Latest Work Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              Projects
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground text-base">
              I&apos;ve worked on a variety of projects, from simple websites to
              <br />
              complex web applications. Here are a few of my favorites.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Timelock Landing",
                subtitle: "June 2025 - Present",
                description:
                  "A modern landing page for Timelock Protocol showcasing advanced DeFi trading features with unlimited upside and zero liquidation risk. Features quantum-secured positions and temporal arbitrage across multiple DeFi protocols with enhanced yields.",
                image: "/timelock.png",
                tech: [
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Framer Motion",
                  "DeFi",
                  "Blockchain",
                  "Shadcn UI",
                ],
                links: {
                  website: "#",
                  source: "#",
                },
              },
              {
                title: "Veri Doc",
                subtitle: "May 2025 - Present",
                description:
                  "A decentralized document verification system using zero-knowledge proofs to reduce maintenance costs and improve verification efficiency. The system significantly decreases verification time compared to standard methods while maintaining security and privacy through advanced cryptographic techniques.",
                image: "/veridoc.png",
                tech: [
                  "Next.js",
                  "TypeScript",
                  "Zero-Knowledge Proofs",
                  "Blockchain",
                  "Solidity",
                  "TailwindCSS",
                  "Shadcn UI",
                ],
                links: {
                  website: "#",
                  source: "#",
                },
              },
              {
                title: "Portfolio V2",
                subtitle: "April 2025",
                description:
                  "A sleek, fully responsive portfolio website built with Next.js and TailwindCSS. Features dark mode, animated transitions, and a CMS-powered blog section for easy content management.",
                image: "/portfolio-v2.png",
                tech: [
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Framer Motion",
                  "MDX",
                  "Vercel",
                ],
                links: {
                  website: "#",
                  source: "#",
                },
              },
              {
                title: "Crypto Tracker",
                subtitle: "March 2025",
                description:
                  "A real-time cryptocurrency tracker dashboard with price alerts, portfolio management, and interactive charts. Integrates with multiple APIs for up-to-date market data.",
                image: "/crypto-tracker.png",
                tech: [
                  "React",
                  "TypeScript",
                  "Chart.js",
                  "TailwindCSS",
                  "CoinGecko API",
                ],
                links: {
                  website: "#",
                  source: "#",
                },
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden flex flex-col shadow-sm"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-xs rounded text-gray-900 dark:text-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-3 text-sm bg-transparent border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                      asChild
                    >
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Website
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-3 text-sm bg-transparent border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                      asChild
                    >
                      <a
                        href={project.links.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Building Things Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              Achievement
            </div>
            <h2 className="text-3xl font-bold mb-2">I like building things</h2>
            <p className="text-muted-foreground text-base">
              During my free time, I enjoy working on side projects and
              <br />
              contributing to open source. Here are some of the things I&apos;ve
              <br />
              been working on recently.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Smart India Hackathon (National)",
                description:
                  "Won 1st place in Smart India Hackathon for developing an AI-powered solution for traffic management.",
                icon: "🏆",
              },
              {
                title: "Google Summer of Code (Winner)",
                description:
                  "Selected as GSoC contributor for contributing to open source projects and mentoring new developers.",
                icon: "💻",
              },
              {
                title: "HackerRank (Top 1%)",
                description:
                  "Achieved top 1% ranking in competitive programming challenges and algorithm competitions.",
                icon: "🎯",
              },
              {
                title: "GitHub (Top Contributor)",
                description:
                  "Recognized as a top contributor with 500+ contributions and 50+ open source projects.",
                icon: "⭐",
              },
              {
                title: "DevPost (3x Winner)",
                description:
                  "Won multiple hackathons on DevPost platform for innovative web and mobile applications.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="text-xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Twitter Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              Updates
            </div>
            <h2 className="text-3xl font-bold mb-2">From my Twitter</h2>
            <p className="text-muted-foreground text-base">
              Some thoughts, updates, and insights I&apos;ve shared on Twitter
              <br />
              about my journey in tech and development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                content:
                  "Just shipped a new feature for our latest project! The power of modern web development never ceases to amaze me. #WebDev #React #NextJS",
                time: "2h",
              },
              {
                content:
                  "Working on an exciting AI project that combines machine learning with web development. Can't wait to share more details soon! 🚀",
                time: "5h",
              },
              {
                content:
                  "Attended an amazing tech conference today. Met so many inspiring developers and learned about the latest trends in software engineering.",
                time: "1d",
              },
              {
                content:
                  "Open source contribution tip: Start small, be consistent, and don't be afraid to ask questions. The community is incredibly supportive! 💪",
                time: "2d",
              },
            ].map((tweet, index) => (
              <div key={index} className="p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-base">
                      Vedant Kumar Singh
                    </p>
                    <p className="text-muted-foreground text-sm">
                      @vedantsingh
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{tweet.content}</p>
                <p className="text-muted-foreground text-sm">{tweet.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-0">
          <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
            Contact
          </div>
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground text-base mb-4">
            Want to chat? Just shoot me a DM with a direct question on
            <br />
            Twitter and I&apos;ll respond whenever I can. I will ignore all
            <br />
            soliciting.
          </p>
        </section>
      </div>

      {/* Floating Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-1.5">
            {/* First icon */}
            <button
              className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5"
              style={{ minWidth: 40, minHeight: 36 }}
            >
              <Home className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
            </button>
            {/* Divider */}
            <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />
            {/* Middle icons */}
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "#" },
            ].map((item, index) => (
              <button
                key={index}
                className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5"
                style={{ minWidth: 40, minHeight: 36 }}
              >
                <item.icon className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
              </button>
            ))}
            {/* Divider */}
            <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5"
              style={{ minWidth: 36, minHeight: 36 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
              ) : (
                <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
