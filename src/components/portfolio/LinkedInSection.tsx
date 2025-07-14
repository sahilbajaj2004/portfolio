import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

export default function LinkedInSection() {
  const posts = [
    {
      heading: "FingerSense — AI-Based Gesture Censorship",
      content:
        "Built an AI-driven hand gesture detection system using React.js and MediaPipe. It censors offensive gestures live with OpenCV, and handles gesture history to avoid false positives. Integrated Firebase for user-authenticated sessions.",
      video: "/post1.mp4",
      link: "https://www.linkedin.com/posts/sahilbajaj2004_python-computervision-opencv-activity-7332302934551977985-Vfm1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFdtP8BEHJ8BNVyk-uIxiIaTqi7exGAY-k",
    },
    {
      heading: "Doc Converter with Python",
      content:
        "Developed a React.js frontend tool backed by a Python engine to convert docs across formats (PDF, DOCX, TXT). Firebase Authentication manages user access. Clean UI, real-time status updates, and file history included.",
      video: "/post2.mp4",
      link: "https://www.linkedin.com/posts/sahilbajaj2004_webdev-python-nextjs-activity-7348312000625553408-RmCe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFdtP8BEHJ8BNVyk-uIxiIaTqi7exGAY-k",
    },
    {
      heading: "AI Chatbot with Voice Assistant",
      content:
        "Built a fully functional AI chatbot with voice command support using React.js and Web Speech API. Used Firebase Authentication to secure user interactions. The assistant understands context, replies smartly, and speaks responses aloud.",
      image: "/post3.jpg",
      link: "https://www.linkedin.com/posts/sahilbajaj2004_ai-virtualassistant-woho-activity-7329815767208689664-3o2P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFdtP8BEHJ8BNVyk-uIxiIaTqi7exGAY-k",
    },
    {
      heading: "Winner of Bharat Shiksha Expo 2024",
      content:
        "Awarded for building an education tech solution using React.js with Firebase-backed user authentication. The project connected teachers and students in real time, offering secure dashboards and learning insights.",
      image: "/post4.png",
      link: "https://www.linkedin.com/posts/sahilbajaj2004_bharatshikshaexpo-education-networking-activity-7321940531645759489-J6Tl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFdtP8BEHJ8BNVyk-uIxiIaTqi7exGAY-k",
    },
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
          Updates
        </div>
        <h2 className="text-3xl font-bold mb-2">From my LinkedIn</h2>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Recent posts and updates from my journey in tech and development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="relative z-10 p-5 space-y-3 bg-white dark:bg-[#18181b] border rounded-xl shadow-sm h-full"
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(120,120,120,0.08)",
            }}
          >
            {/* Header: Profile & LinkedIn */}
            <div className="flex items-start gap-3 relative">
              <div className="flex flex-col items-center mr-2">
                <a
                  href="https://www.linkedin.com/in/sahilbajaj2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-11 h-11 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="/bajaj.jpg"
                      alt="Sahil Bajaj"
                      width={44}
                      height={44}
                      className="object-cover w-11 h-11 rounded-full"
                    />
                  </div>
                </a>
              </div>
              <div>
                <p className="font-semibold text-base">Sahil Bajaj</p>
                <a
                  href="https://www.linkedin.com/in/sahilbajaj2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 text-sm hover:animate-pulse hover:text-blue-500 cursor-pointer transition-colors duration-200"
                >
                  LinkedIn /sahilbajaj2004
                </a>
              </div>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 z-30"
              >
                <FaLinkedin className="text-blue-700 dark:text-blue-400 w-5 h-5" />
              </a>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold">{post.heading}</h3>

            {/* Media */}
            {post.video && (
              <div className="relative z-0">
                <video
                  src={post.video}
                  controls
                  className="w-full rounded-lg"
                  style={{ maxHeight: 220 }}
                />
              </div>
            )}
            {post.image && (
              <div className="relative z-0">
                <Image
                  src={post.image}
                  alt={post.heading}
                  width={600}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            )}

            {/* Content */}
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
