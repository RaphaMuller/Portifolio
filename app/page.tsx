import { ComicPageScroller } from "@/app/components/ComicPageScroller";
import { Navbar } from "@/app/components/Navbar";
import { ComicAbout } from "@/app/sections/ComicAbout";
import { ComicContact } from "@/app/sections/ComicContact";
import { ComicHero } from "@/app/sections/ComicHero";
import { ComicProjects } from "@/app/sections/ComicProjects";
import { ComicSkills } from "@/app/sections/ComicSkills";

/**
 * @example
 * <Home />
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <ComicPageScroller />
      <Navbar />
      <ComicHero />
      <ComicAbout />
      <ComicSkills />
      <ComicProjects />
      <ComicContact />
    </main>
  );
}
