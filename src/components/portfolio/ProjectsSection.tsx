import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectsSection() {
  return (
    <section className="mb-12">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            title: "SoberDev",
            subtitle: "July 2025",
            description:
              "An agency that builds custom websites and applications for clients. The site showcases our portfolio, services, and client testimonials.",
            image: "/sober.png",
            tech: [
              "React.js",
              "JavaScript",
              "TailwindCSS",
              "Shadcn UI",
              "Vercel",
            ],
            links: {
              website: "https://soberdev.in/",
              source: "https://github.com/sahilbajaj2004/devcrafter",
            },
          },
          {
            title: "AlgoAnalyzer",
            subtitle: "May 2026",
            description:
              "A learning platform that helps users understand DSA in an easy format with step-by-step visuals and explanations.",
            image: "/algo.png",
            tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
            links: {
              website: "https://algo-analyzer.vercel.app/",
              source: "https://github.com/sahilbajaj2004/AlgoAnalyzer",
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
                  className="h-7 px-3 text-sm bg-black border-black text-white hover:text-black dark:bg-white dark:text-black dark:hover:text-white"
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
                  className="h-7 px-3 text-sm bg-black border-black text-white hover:text-black dark:bg-white dark:text-black dark:hover:text-white"
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

      <div className="mt-6 flex justify-center">
        <a
          href="https://github.com/sahilbajaj2004"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 dark:border-gray-700/80 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 bg-white/80 dark:bg-[#18181b] transition-colors hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
        >
          <FaGithub className="w-4 h-4" />
          For more visit GitHub
        </a>
      </div>
    </section>
  );
}
