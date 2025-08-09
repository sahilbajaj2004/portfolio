"use client";

import { useState, useEffect, useRef } from "react";
import Crosshair from "@/components/ui/Crosshair";
import HeaderSection from "@/components/portfolio/HeaderSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import LinkedInSection from "@/components/portfolio/LinkedInSection";
import ContactSection from "@/components/portfolio/ContactSection";
import FloatingNavBar from "@/components/portfolio/FloatingNavBar";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false); // Changed from true to false
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Play/Pause handler
  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Background Audio - removed autoPlay */}
      <audio ref={audioRef} src="/bgaudio.mp3" loop />

      <div className="hidden sm:block">
        <Crosshair color={isDark ? "white" : "black"} />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-12 pb-32">
        <HeaderSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <LinkedInSection />
        <ContactSection />
      </div>
      <FloatingNavBar
        isDark={isDark}
        setIsDark={setIsDark}
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
      />
    </div>
  );
}
