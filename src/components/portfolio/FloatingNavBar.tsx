import { Home, Sun, Moon, Mail, Play, Pause } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface FloatingNavBarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  isPlaying: boolean;
  toggleAudio: () => void;
}

export default function FloatingNavBar({
  isDark,
  setIsDark,
  isPlaying,
  toggleAudio,
}: FloatingNavBarProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-50/90 dark:bg-[#18181b]/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-300/80 dark:border-gray-700/50">
        <div className="flex items-center gap-1.5">
          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ minWidth: 40, minHeight: 36 }}
          >
            <Home className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </button>

          <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />

          {/* Social Links */}
          {[
            { icon: FaGithub, href: "https://github.com/sahilbajaj2004" },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/sahilbajaj2004",
            },
            { icon: FaXTwitter, href: "https://x.com/SahilBajaj2004" },
            { icon: Mail, href: "mailto:sahilbajaj2004@gmail.com" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ minWidth: 40, minHeight: 36 }}
            >
              <item.icon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
            </a>
          ))}

          <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />

          {/* Play/Pause Button */}
          <button
            onClick={toggleAudio}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ minWidth: 40, minHeight: 36 }}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-gray-900 dark:text-gray-100" />
            ) : (
              <Play className="w-5 h-5 text-gray-900 dark:text-gray-100" />
            )}
          </button>


          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100/60 dark:hover:bg-[#232329]/60 transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-gray-300/40 dark:border-gray-700/40"
            style={{ minWidth: 36, minHeight: 36 }}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
