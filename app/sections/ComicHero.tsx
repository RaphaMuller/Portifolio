"use client";

import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/SpeechBubble";
import Image from "next/image";
import { motionPresets } from "@/app/constants/motionPresets";
import BuildingSkyline from "@/app/components/ui/ComicSkyline/buildingSkyline";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="comic-section bg-comic-lightblue bg-comic-dots"
    >
      {/* Stamps */}
      <ActionBadge
        theme="red"
        {...motionPresets.stamp}
        className="absolute top-24 right-12 rotate-16 text-h2 md:right-20 lg:top-32 lg:right-24"
      >
        ZAP!
      </ActionBadge>

      <ActionBadge
        theme="yellow"
        {...motionPresets.stamp}
        className="absolute top-24 left-12 -rotate-16 text-h2 md:left-20 lg:top-32 lg:left-24"
      >
        POW!
      </ActionBadge>

      {/* ProfileBody */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row">
        <ActionBadge noPadding {...motionPresets.slideInLeft}>
          <Image
            src="/Eu.jpeg"
            alt="Selfie"
            width={3840}
            height={2160}
            className="h-48 w-48 object-cover md:h-64 md:w-64"
          />
        </ActionBadge>

        <div className="flex flex-1 flex-col gap-4">
          <SpeechBubble>
            Olá, mundo! Sou um desenvolvedor criativo pronto para salvar o dia
            com código!
          </SpeechBubble>

          <ActionBadge theme="yellow" {...motionPresets.slideInRight}>
            <h1 className=" leading-none md:text-h1 text-h2 ">
              RAPHAEL MULLER
            </h1>
            <h3 className="mt-1 md:text-h3 text-h4 leading-none">
              DESENVOLVEDOR FULL-STACK
            </h3>
          </ActionBadge>

          {/* Actions */}
          <motion.div className="flex flex-wrap gap-3" {...motionPresets.slideInRight}>
            <ActionBadge theme="red" interactive className="text-h4">
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

            <ActionBadge theme="white" interactive className="text-h4">
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
          </motion.div>
        </div>
      </div>

      {/* Skyline */}
      <BuildingSkyline position="absolute" theme="default" />
    </section>
  );
}
