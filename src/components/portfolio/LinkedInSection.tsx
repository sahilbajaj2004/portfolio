import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

export default function LinkedInSection() {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
          Updates
        </div>
        <h2 className="text-3xl font-bold mb-2">From my LinkedIn</h2>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Recent posts, thoughts, and professional updates I&apos;ve shared on
          LinkedIn
          <br />
          about my journey in tech and development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            content:
              "FingerSense – Real-Time Gesture Censorship with AI\nOverview\nFingerSense is a real-time hand gesture recognition tool that detects when the middle finger is shown and automatically applies a Gaussian blur on it using your webcam feed.\n\nKey Features\n\nDetects middle finger gestures using MediaPipe Hand Tracking\n\nApplies live Gaussian blur with OpenCV\n\nUses a gesture history voting system to avoid false positives\n\nPrevents crashes when hands leave the frame",
            time: "1d",
            video: "/post1.mp4",
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
            <div className="flex items-start gap-3 relative">
              {/* Profile Image on the left */}
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
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  LinkedIn /sahilbajaj2004
                </p>
              </div>
              {/* React icon in the top-right corner */}
              <a
                href="https://www.linkedin.com/in/sahilbajaj2004"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0"
              >
                <FaLinkedin className="text-blue-700 dark:text-blue-400 w-5 h-5" />
              </a>
            </div>
            {/* Show video for the first post */}
            {index === 0 && post.video && (
              <video
                src={post.video}
                controls
                className="w-full rounded-lg mb-2"
                style={{ maxHeight: 220 }}
              />
            )}
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
  );
}
