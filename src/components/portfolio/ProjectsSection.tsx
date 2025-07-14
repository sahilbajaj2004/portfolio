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
            title: "Prerna Institution",
            subtitle: "Jan 2025",
            description:
              "Developed a modern and responsive landing page for Prerna Institution with details about the institute, programs, and contact. Built using Next.js and Flask for dynamic content handling.",
            image: "/Prerna.png",
            tech: [
              "Next.js",
              "TypeScript",
              "TailwindCSS",
              "Shadcn UI",
              "Vercel",
            ],
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
            tech: [
              "Next.js",
              "TypeScript",
              "TailwindCSS",
              "Shadcn UI",
              "Netlify",
            ],
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
            tech: [
              "React.js",
              "JavaScript",
              "TailwindCSS",
              "Shadcn UI",
              "Netlify",
            ],
            links: {
              website: "https://nikewebsiite.netlify.app/",
              source: "https://github.com/sahilbajaj2004/Nike",
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
                  className="h-7 px-3 text-sm bg-black border-black text-white hover:text-white dark:bg-white dark:text-black dark:hover:text-white"
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
                  className="h-7 px-3 text-sm bg-black border-black text-white hover:text-white dark:bg-white dark:text-black dark:hover:text-white"
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
  );
}
