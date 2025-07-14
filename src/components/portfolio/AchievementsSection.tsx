export default function AchievementsSection() {
  const achievements = [
    {
      date: "April 25th, 2025",
      title: "Bharat Shiksha Expo 2025 (Winner)",
      location: "Delhi, Noida",
      description:
        "Won top recognition on the third day of the Bharat Shiksha Expo 2025 for designing and developing an AI-powered chatbot. The solution stood out for its conversational intelligence, real-time response accuracy, and its potential to improve user interaction in education and service-based platforms. Built using modern NLP techniques and integrated with dynamic intent handling, the bot was praised for both its functionality and presentation.",
      icon: "/expo.png",
    },
    {
      date: "March 24th, 2025",
      title: "TecnoHack 2025 (Second Place)",
      location: "Gaziabad, Uttar Pradesh",
      description:
        "Secured second place in Techno Hack for developing a high-impact solution under time constraints. The project was recognized for its innovation, clean architecture, and practical real-world applicability.",
      icon: "/techno.png",
    },
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-12">
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

      {/* Timeline */}
      <div className="pl-2 space-y-16">
        {achievements.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Larger Icon */}
            <div className="w-16 h-16 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 flex items-center justify-center">
              {/* eslint-disable @next/next/no-img-element */ }
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 object-contain rounded-full"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">
                {item.date}
              </p>
              <h3 className="font-semibold text-white dark:text-white text-base mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-blue-400 mb-1">{item.location}</p>
              <p className="text-sm text-gray-300 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Horizontal dashed line */}
              {index !== achievements.length - 1 && (
                <div className="border-t border-dashed border-gray-500 mt-6 w-full opacity-60" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
