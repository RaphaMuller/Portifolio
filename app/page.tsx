"use client";
import ComicHero from "./components/comicHero";
import Navbar from "./components/navbar";



export default function Home() {
  return (
    <main className="flex-col justify-center items-center">
      <Navbar/>
      <ComicHero/>
    </main>
  );
}
