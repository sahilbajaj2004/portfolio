import { Home, Sun, Moon, Mail, } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface FloatingNavBarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function FloatingNavBar({
  isDark,
  setIsDark,
}: FloatingNavBarProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-1.5">
          {/* First icon */}
          <button
            className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5 cursor-pointer"
            style={{ minWidth: 40, minHeight: 36 }}
          >
            <Home className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
          </button>
          {/* Divider */}
          <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />
          {/* Middle icons */}
          {[
            { icon: FaGithub, href: "https://github.com/sahilbajaj2004" },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/sahilbajaj2004",
            },
            { icon: FaXTwitter, href: "https://x.com/SahilBajaj2004" },
            { icon: Mail, href: "mailto:sahilbajaj2004@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-[#232329] transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5 cursor-pointer flex items-center justify-center"
              style={{ minWidth: 40, minHeight: 36 }}
            >
              <item.icon className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
            </a>
          ))}
          {/* Divider */}
          <span className="h-6 w-px bg-gray-900 dark:bg-gray-700 mx-2" />
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-transparent hover:bg-gray-100/60 dark:hover:bg-[#232329]/60 transition-all duration-200 hover:scale-105 active:scale-95 group mx-0.5 cursor-pointer border-2 border-gray-300/40 dark:border-gray-700/40"
            style={{ minWidth: 36, minHeight: 36 }}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100 group-hover:mx-1 transition-all duration-200" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
