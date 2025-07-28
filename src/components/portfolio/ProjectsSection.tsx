"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Prerna Institution",
      subtitle: "Jan 2025",
      description:
        "Developed a modern and responsive landing page for Prerna Institution with details about the institute, programs, and contact. Built using Next.js and Flask for dynamic content handling.",
      image: "/Prerna.png",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Vercel"],
      links: {
        website: "https://prernainstitution.vercel.app/",
        source: "https://github.com/sahilbajaj2004/institute",
      },
    },
    {
      title: "Ime College Website",
      subtitle: "April 2025",
      description:
        "Created a clean, fast-loading website for IME College. It includes responsive design, smooth animations, a course section, and a clean layout tailored for academic content.",
      image: "/ime.png",
      tech: ["React.js", "JavaScript", "CSS", "Netlify"],
      links: {
        website: "https://ime-college.vercel.app/",
        source: "https://github.com/sahilbajaj2004/IME",
      },
    },
    {
      title: "Todo List App",
      subtitle: "March 2025",
      description:
        "A Firebase-powered Todo app with user login, real-time task sync, and a modern UI. Includes CRUD features, authentication, and persistent data storage.",
      image: "/todo.png",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Netlify"],
      links: {
        website: "https://todo-bajaj.vercel.app/",
        source: "https://github.com/sahilbajaj2004/todo",
      },
    },
    {
      title: "Nike Landing Page",
      subtitle: "May 2025",
      description:
        "Built a sleek landing page concept for Nike showcasing product collections, CTA sections, and animations. Emphasized responsive layout and brand-focused design.",
      image: "/Nike.png",
      tech: ["React.js", "JavaScript", "TailwindCSS", "Shadcn UI", "Netlify"],
      links: {
        website: "https://nikewebsiite.netlify.app/",
        source: "https://github.com/sahilbajaj2004/Nike",
      },
    },
    {
      title: "Nike Landing Page",
      subtitle: "May 2025",
      description:
        "Built a sleek landing page concept for Nike showcasing product collections, CTA sections, and animations. Emphasized responsive layout and brand-focused design.",
      image: "/Nike.png",
      tech: ["React.js", "JavaScript", "TailwindCSS", "Shadcn UI", "Netlify"],
      links: {
        website: "https://nikewebsiite.netlify.app/",
        source: "https://github.com/sahilbajaj2004/Nike",
      },
    },
    {
      title: "Nike Landing Page",
      subtitle: "May 2025",
      description:
        "Built a sleek landing page concept for Nike showcasing product collections, CTA sections, and animations. Emphasized responsive layout and brand-focused design.",
      image: "/Nike.png",
      tech: ["React.js", "JavaScript", "TailwindCSS", "Shadcn UI", "Netlify"],
      links: {
        website: "https://nikewebsiite.netlify.app/",
        source: "https://github.com/sahilbajaj2004/Nike",
      },
    },
    {
      title: "Nike Landing Page",
      subtitle: "May 2025",
      description:
        "Built a sleek landing page concept for Nike showcasing product collections, CTA sections, and animations. Emphasized responsive layout and brand-focused design.",
      image: "/Nike.png",
      tech: ["React.js", "JavaScript", "TailwindCSS", "Shadcn UI", "Netlify"],
      links: {
        website: "https://nikewebsiite.netlify.app/",
        source: "https://github.com/sahilbajaj2004/Nike",
      },
    },
    {
      title: "Nike Landing Page",
      subtitle: "May 2025",
      description:
        "Built a sleek landing page concept for Nike showcasing product collections, CTA sections, and animations. Emphasized responsive layout and brand-focused design.",
      image: "/Nike.png",
      tech: ["React.js", "JavaScript", "TailwindCSS", "Shadcn UI", "Netlify"],
      links: {
        website: "https://nikewebsiite.netlify.app/",
        source: "https://github.com/sahilbajaj2004/Nike",
      },
    },
    // Add more projects for the "Show More" section
  ];

  return (
    <section className="mb-12 relative">
      <div className="text-center mb-8">
        <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
          Projects
        </div>
        <h2 className="text-3xl font-bold mb-2">Check out my latest work</h2>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          I&apos;ve worked on a variety of projects, from simple websites to
          <br className="hidden sm:block" />
          complex web applications. Here are a few of my favorites.
        </p>
      </div>

      {/* Grid of Projects (First Few) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <Button
          className="px-6 py-2 text-lg bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 rounded-full"
          onClick={() => setShowAll(true)}
        >
          Show More
        </Button>
      </div>

      {/* Fullscreen Expanded Projects */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#18181b] rounded-lg shadow-lg max-w-7xl mx-auto p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  All Projects
                </h2>
                <Button
                  onClick={() => setShowAll(false)}
                  className="bg-red-500 text-white hover:bg-red-600 rounded-full"
                >
                  Close
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div
      className="bg-white dark:bg-[#18181b] border rounded-xl overflow-hidden flex flex-col shadow-sm h-full min-h-[420px]"
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(120,120,120,0.08)",
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
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-gray-100 text-black dark:bg-[#232329] dark:text-white text-xs rounded border border-gray-200 dark:border-[#232329]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto flex-wrap">
          <Button
            size="sm"
            variant="outline"
            className="h-7 px-3 text-sm bg-black border-black text-white hover:text-black dark:bg-white dark:text-black dark:hover:text-white"
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
            className="h-7 px-3 text-sm bg-black border-black text-white hover:text-black dark:bg-white dark:text-black dark:hover:text-white"
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
  );
}
