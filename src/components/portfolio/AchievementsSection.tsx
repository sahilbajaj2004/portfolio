export default function AchievementsSection() {
  return (
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
  );
}
