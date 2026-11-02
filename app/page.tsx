import ComicHero from "@/app/sections/ComicHero";
import ComicAbout from "@/app/sections/ComicAbout";
import Navbar from "@/app/components/Navbar";
import ComicSkills from "@/app/sections/ComicSkills";
import ComicProjects from "@/app/sections/ComicProjects";
import { ComicContact } from "@/app/sections/ComicContact";
import { ComicPageScroller } from "@/app/components/ui/global/ComicScroll/ComicPageScroller";

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
