"use client";

import Image from "next/image";
import Crosshair from "@/components/ui/Crosshair";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Home, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="hidden sm:block">
        <Crosshair color={isDark ? "white" : "black"} />
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 pb-32">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">
              Hi, I&apos;m Sahil Bajaj{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <div className="flex flex-wrap gap-1 mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900 dark:text-blue-200">
                Full Stack Developer
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-800 text-sm font-medium dark:bg-green-900 dark:text-green-200">
                Web3 Enthusiast
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-sm font-medium dark:bg-purple-900 dark:text-purple-200">
                Open Source
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-sm font-medium dark:bg-yellow-900 dark:text-yellow-200">
                Freelancer
              </span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I love to learn and share knowledge with the community.
              <br />
              Building modern web apps, exploring blockchain, and Learning new
              things.
            </p>
          </div>
          <div className="w-44 h-44 rounded-full overflow-hidden ml-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg">
            <Image
              src="/bajaj.jpg"
              alt="Sahil Bajaj"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            I&apos;m a passionate full-stack developer with 1+ years of
            experience building web applications using the MERN stack, Python,
            and other modern tools. I enjoy turning ideas into real products
            through clean, efficient code and have contributed to several
            open-source projects along the way. Currently, I&apos;m focused on
            full-stack development and diving into Web3—exploring smart
            contracts, blockchain integration, and how decentralized tech can
            reshape the web. When I&apos;m not coding, I&apos;m either learning
            something new in the Python or Web3 space, or mentoring newer
            developers to help them grow in tech.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-3">
            {[
              // {
              //   company: "Google",
              //   role: "Software Engineer",
              //   period: "June 2023 - Present",
              //   logo: "/logos/google.png",
              // },
              {
                company: "Prerna Institution",
                role: "Fullstack developer, Teacher",
                period: "Jan 2022 - May 2023",
                logo: "/logos/microsoft.png",
              },
              {
                company: "Razorse software pvt ltd",
                role: "Frontend Intern",
                period: "May 2025 - August 2025",
                logo: "/logos/amazon.png",
              },
              {
                company: "DevCeafter",
                role: "Founder",
                period: "January 2025 - present",
                logo: "/logos/netflix.png",
              },
              {
                company: "Fiverr, Freelancer",
                role: "Freelancing",
                period: "July 2024 - Present",
                logo: "/logos/apple.png",
              },
            ].map((exp, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={36}
                    height={36}
                    className="object-contain w-9 h-9"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{exp.company}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
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
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 overflow-hidden mr-2">
              <Image
                src="/logos/college.png"
                alt="University Logo"
                width={40}
                height={40}
                className="object-contain w-9 h-9"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Institute of Management Education, Sahibabad (CCS
                    University)
                  </p>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  2024 - 2027
                </span>
              </div>
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
              "Express.js",
              "TailwindCSS",
              "mongoDB",
              "C",
              "C++",
              "java",
              // "Go",
              // "MongoDB",
              // "PostgreSQL",
              // "AWS",
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
            <p className="text-gray-700 dark:text-gray-300 text-base">
              I&apos;ve worked on a variety of projects, from simple websites to
              <br className="hidden sm:block" />
              complex web applications. Here are a few of my favorites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  "A decentralized document verification system using zero-knowledge proofs to reduce maintenance costs and improve verification efficiency. The system significantly decreases verification time compared to standard methods while maintaining security.",
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
                className="bg-white dark:bg-[#18181b] border rounded-xl overflow-hidden flex flex-col shadow-sm h-full min-h-[420px]"
                style={{
                  minHeight: 420,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "rgba(120,120,120,0.08)",
                  backgroundColor: "var(--tw-bg-opacity,0.5)",
                }}
              >
                <div className="aspect-video bg-gray-50 dark:bg-[#232329] flex items-center justify-center">
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
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 text-black dark:bg-[#232329] dark:text-white text-xs rounded border border-gray-200 dark:border-[#232329]"
                        style={{
                          borderColor: "rgba(120,120,120,0.08)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto flex-wrap">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-3 text-sm bg-black border-black text-white dark:bg-white dark:text-black"
                      style={{
                        borderColor: "rgba(120,120,120,0.08)",
                      }}
                      asChild
                    >
                      <a
                        href={project.links.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-3 h-3 mr-1" />
                        Source
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-3 text-sm bg-black border-black text-white dark:bg-white dark:text-black"
                      style={{
                        borderColor: "rgba(120,120,120,0.08)",
                      }}
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
            <p className="text-gray-700 dark:text-gray-300 text-base">
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
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LinkedIn Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              Updates
            </div>
            <h2 className="text-3xl font-bold mb-2">From my LinkedIn</h2>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Recent posts, thoughts, and professional updates I&apos;ve shared
              on LinkedIn
              <br />
              about my journey in tech and development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                content:
                  "Excited to announce that I’ve joined a new team as a Full Stack Developer! Looking forward to building impactful products and growing with amazing people. #NewBeginnings #FullStack",
                time: "1d",
              },
              {
                content:
                  "Just published a new article on best practices for scalable React applications. Check it out on my LinkedIn profile! #ReactJS #WebDevelopment",
                time: "3d",
              },
              {
                content:
                  "Honored to be recognized as a top contributor in my organization. Grateful for the support and collaboration from my peers. #Teamwork #Recognition",
                time: "5d",
              },
              {
                content:
                  "Attended a fantastic webinar on blockchain integration in modern web apps. Excited to apply these insights to upcoming projects! #Blockchain #Learning",
                time: "1w",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="p-4 space-y-3 bg-white dark:bg-[#18181b] border rounded-xl shadow-sm h-full"
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "rgba(120,120,120,0.08)",
                  backgroundColor: "var(--tw-bg-opacity,0.5)",
                  minHeight: 180,
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-blue-700 dark:text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-base">Sahil Bajaj</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      LinkedIn /sahilbajaj2004
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {post.content}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {post.time}
                </p>
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
          <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
            Want to chat? Just shoot me a DM with a direct question on
            <br />
            Twitter and I&apos;ll respond whenever I can. I will ignore all
            <br />
            soliciting.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-4xl bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>

      {/* Floating Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-1.5">
            {/* First icon */}
            <button
              className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5 cursor-pointer"
              style={{ minWidth: 40, minHeight: 36 }}
            >
              <Home className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
            </button>
            {/* Divider */}
            <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />
            {/* Middle icons */}
            {[
              { icon: FaGithub, href: "https://github.com/sahilbajaj2004" },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/sahilbajaj2004",
              },
              { icon: FaXTwitter, href: "https://x.com/SahilBajaj2004" },
              { icon: Mail, href: "mailto:sahilbajaj2004@gmail.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5 cursor-pointer flex items-center justify-center"
                style={{ minWidth: 40, minHeight: 36 }}
              >
                <item.icon className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
              </a>
            ))}
            {/* Divider */}
            <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-transparent hover:bg-gray-100/60 dark:hover:bg-[#232329]/60 transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5 cursor-pointer border-2 border-gray-300/40 dark:border-gray-700/40"
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
