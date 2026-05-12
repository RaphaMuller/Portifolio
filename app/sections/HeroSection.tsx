import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/SpeechBubble";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="section-hero hero-dots-black bg-comic-blue min-h-screen pt-16">

      <ActionBadge behavior="heroLeft" className="top-24 left-4 md:left-16 !z-20" theme="red">
        <span className="text-3xl md:text-5xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">POW!</span>
      </ActionBadge>

      <ActionBadge behavior="heroRight" className="top-28 right-4 md:right-16 !z-20" theme="yellow">
        <span className="text-2xl md:text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">ZAP!</span>
      </ActionBadge>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row">
        <ActionBadge behavior="static" noPadding className="flex-shrink-0">
            <Image
              src="/Eu.jpeg"
              alt="Foto de perfil de Raphael Muller"
              width={300}
              height={300}
              className="object-cover w-48 h-48 md:w-64 md:h-64"
            />
        </ActionBadge>

        <div className="flex flex-1 flex-col gap-4">
          <SpeechBubble>
            Olá, mundo! Sou um desenvolvedor criativo pronto para salvar o dia com código!
          </SpeechBubble>

          <ActionBadge theme="yellow" behavior="static">
            <h1 className="text-5xl md:text-7xl leading-none">RAPHAEL MULLER</h1>
            <p className="text-xl md:text-2xl mt-1">DESENVOLVEDOR FULL STACK</p>
          </ActionBadge>

          <div className="flex flex-wrap gap-3">
            <ActionBadge theme="red" behavior="staticInteractive">
              <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>VER PROJETOS!</button>
            </ActionBadge>

            <ActionBadge theme="white" behavior="staticInteractive">
              <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>CONTATO</button>
            </ActionBadge>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-4 bg-black" />
    </section>
  );
}
