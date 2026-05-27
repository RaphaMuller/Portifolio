"use client";
import ComicHero from "@/app/sections/ComicHero";
import ComicAbout from "@/app/sections/ComicAbout";
import Navbar from "@/app/components/navbar";
import ComicSkills from "./sections/ComicSkils";
import ComicProjects from "./sections/ComicProjects";
import { ComicFooter } from "./sections/ComitFooter";
import { ComicContact } from "./sections/ComicContact";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center">
      <Navbar />
      <ComicHero />
      <ComicAbout />
      <ComicSkills />
      <ComicProjects/>
      <ComicContact/>
      <ComicFooter/>
    </main>
  );
}
