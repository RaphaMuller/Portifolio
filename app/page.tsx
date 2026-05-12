"use client";
import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
