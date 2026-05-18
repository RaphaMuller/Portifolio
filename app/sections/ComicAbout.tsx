"use client";
import Image from "next/image";
import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/SpeechBubble";
import { heroStats, aboutData } from "@/app/constants/aboutData";
import { motionPresets } from "../constants/motionPresets";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="hero-dots-white section-hero hero-dots-white relative overflow-hidden bg-comic-yellow pt-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <ActionBadge
        theme="dark"
        {...motionPresets.slideInRight}
        className="inline-block px-4 sm:px-6 py-2 text-2xl sm:text-3xl md:text-5xl mb-8 md:mb-12"
        >
            CAPÍTULO 1: ORIGEM
        </ActionBadge>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Painel de imagem */}
          <ActionBadge noPadding theme="yellow" {...motionPresets.slideInLeft}>
            <div className="flex flex-col">
              <h1 className="bg-comic-blue p-2 text-white">
                No quartel-general do desenvolvimento...
              </h1>
              <Image
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000"
                alt="Workspace de desenvolvimento"
                width={800}
                height={400}
                className="h-64 w-full object-cover"
              />
            </div>
          </ActionBadge>

          {/* Painéis de texto */}
          <div className="flex flex-col gap-5">
            <ActionBadge theme="white" {...motionPresets.slideInRight}>
              <div className="mb-4">
                <ActionBadge theme="red" {...motionPresets.stamp}>
                  <span className="text-lg md:text-xl">IDENTIDADE SECRETA</span>
                </ActionBadge>
              </div>
              <p className="text-sm leading-relaxed text-black md:text-base">
                {aboutData.description}
              </p>
            </ActionBadge>

            {/* Stats */}
            <ActionBadge theme="blue" {...motionPresets.slideInRight}>
              <div className="mb-5 flex justify-center">
                <ActionBadge theme="yellow" {...motionPresets.stamp}>
                  <span className="text-lg md:text-xl">
                    ESTATÍSTICAS DO HERÓI
                  </span>
                </ActionBadge>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {heroStats.map((stat) => (
                  <ActionBadge
                    key={stat.label}
                    theme="yellow"
                    {...motionPresets.stamp}
                    noPadding
                    className="w-full"
                  >
                    <div className="flex flex-col items-center justify-center px-1 py-2">
                      <div className="text-center text-xl leading-none md:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-center text-[10px] leading-tight break-words md:text-xs">
                        {stat.label}
                      </div>
                    </div>
                  </ActionBadge>
                ))}
              </div>
            </ActionBadge>

            <SpeechBubble tailPosition="top" animateOnScroll delay={0.3}>
              <p className="text-sm font-bold text-black italic md:text-base">
                &ldquo;Com grandes poderes vem grandes responsabilidades... e
                muito café!&rdquo;
              </p>
              <p className="mt-2 text-right text-xs font-black text-black md:text-sm">
                — Raphael Muller
              </p>
            </SpeechBubble>
          </div>
        </div>
      </div>
    </section>
  );
}
