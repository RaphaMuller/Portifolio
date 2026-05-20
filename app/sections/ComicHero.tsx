import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/SpeechBubble";
import Image from "next/image";
import { motionPresets } from "../constants/motionPresets";
import BuildingSkyline from "../components/ui/ComicSkyline/buildingSkyline";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="comic-section comic-section-hero hero-dots-white bg-comic-blue"
    >
      <ActionBadge
        theme="red"
        {...motionPresets.stamp}
        className="absolute top-24 lg:top-32 right-12 md:right-20 lg:right-24 rotate-16 text-xl sm:text-5xl "
      >
        ZAP!
      </ActionBadge>

      <ActionBadge
        theme="yellow"
        {...motionPresets.stamp}
        className="absolute top-24 lg:top-32 left-12 md:left-20 lg:left-24 -rotate-16 text-xl sm:text-5xl"
      >
        POW!
      </ActionBadge>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row">
        <ActionBadge noPadding {...motionPresets.slideInLeft}>
          <Image
            src="/Eu.jpeg"
            alt="Selfie"
            width={3820}
            height={2560}
            className="h-48 w-48 object-cover md:h-64 md:w-64"
          />
        </ActionBadge>

        <div className="flex flex-1 flex-col gap-4">
          <SpeechBubble>
            Olá, mundo! Sou um desenvolvedor criativo pronto para salvar o dia
            com código!
          </SpeechBubble>

          <ActionBadge theme="yellow" {...motionPresets.slideInRight}>
            <h1 className="text-2xl leading-none sm:text-4xl md:text-6xl">
              RAPHAEL MULLER
            </h1>
            <p className="mt-1 text-base sm:text-xl md:text-2xl">
              DESENVOLVEDOR FULL STACK
            </p>
          </ActionBadge>

          <div className="flex flex-wrap gap-3">
            <ActionBadge
              theme="red"
              {...motionPresets.slideInRight}
              interactive
              className="md:text-xl"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                VER PROJETOS!
              </button>
            </ActionBadge>

            <ActionBadge
              theme="white"
              {...motionPresets.slideInRight}
              interactive
              className="md:text-xl"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                CONTATO
              </button>
            </ActionBadge>
          </div>
        </div>
      </div>

      {/* <BuildingSkyline position="absolute" theme="default" className="opacity-90" /> */}
    </section>
  );
}
