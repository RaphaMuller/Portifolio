"use client";
import ComicAbout from "./components/comicAbout";
import ComicHero from "./components/comicHero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex-col items-center justify-center">
      <Navbar/>
      <ComicHero />
      <ComicAbout />
    </main>
  );
}
