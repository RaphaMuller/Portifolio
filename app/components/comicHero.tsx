// sections/Hero.tsx
import { ActionBadge } from "./actionBadge/actionBadge";
import { SpeechBubble } from "./speechBubble";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="section-hero hero-dots-black bg-comic-blue min-h-screen pt-16">

      {/* <ActionBadge
        rotation={-12}
        delay={0.2}
        className="top-30 left-4 md:left-10"
        variant="red"
      >
        <span className="text-5xl sm:text:md">POW!</span>
      </ActionBadge>

      <ActionBadge
        variant="yellow"
        rotation={8}
        delay={0.4}
        className="top-28 right-4 md:right-10"
      >
        <span className="text-5xl">ZAP!</span>
      </ActionBadge>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row">

        <ActionBadge
        positionType="static"
        delay={0.6}
        noPadding={true}
        >
            <Image src="/Eu.jpeg" alt="Perfil" width={300} height={300}/>
        </ActionBadge>

        <div className="flex flex-1 flex-col gap-4">
          <SpeechBubble>
            Olá, mundo! Sou um desenvolvedor criativo pronto para salvar o dia
            com código!
          </SpeechBubble>

            <ActionBadge
              variant="yellow"
              delay={0.6}
              positionType="static">
              <h1 className="text-4xl">RAPHAEL MULLER</h1>
              <span className="text-xl">DESENVOLVEDOR FULL STACK</span>
            </ActionBadge>

          <div className="flex gap-4">
            <ActionBadge
              variant="red"
              delay={0.6}
              positionType="static"
              interactive={true}
            >
              <button>VER PROJETOS!</button>
            </ActionBadge>

            <ActionBadge
              variant="white"
              delay={0.6}
              positionType="static"
              interactive={true}>
              <button>CONTATO</button>
            </ActionBadge>
          </div>
        </div>
      </div>*/}
      <div className="absolute right-0 bottom-0 left-0 h-4 bg-black" /> 
    </section>
  );
}
