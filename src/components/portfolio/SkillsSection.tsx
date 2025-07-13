export default function SkillsSection() {
  return (
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
  );
}
