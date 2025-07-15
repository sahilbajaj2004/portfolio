import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-3">
        {[
          {
            company: "Prerna Institution",
            role: "Fullstack developer, Teacher",
            period: "Jan 2022 - Present",
            logo: "/p-logo.png",
          },
          {
            company: "Razorse software pvt ltd",
            role: "Frontend Intern",
            period: "May 2025 - August 2025",
            logo: "/rez-logo.jpg",
          },
          {
            company: "DevCeafter",
            role: "Founder",
            period: "January 2025 - Present",
            logo: "/dev-logo.jpg",
          },
          {
            company: "Fiverr, Freelancer",
            role: "Freelancing",
            period: "July 2024 - Present",
            logo: "/free-logo.jpg",
          },
        ].map((exp, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={36}
                height={36}
                className="object-contain w-10 h-10"
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
  );
}
