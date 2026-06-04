import ComicHero from "@/app/sections/ComicHero";
import ComicAbout from "@/app/sections/ComicAbout";
import Navbar from "@/app/components/navbar";
import ComicSkills from "@/app/sections/ComicSkills";
import ComicProjects from "@/app/sections/ComicProjects";
import { ComicFooter } from "@/app/sections/ComicFooter";
import { ComicContact } from "@/app/sections/ComicContact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <ComicHero />
      <ComicAbout />
      <ComicSkills />
      <ComicProjects />
      <ComicContact />
      <ComicFooter />
    </main>
  );
}
