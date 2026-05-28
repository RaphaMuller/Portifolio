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
      className="comic-section hero-dots-red bg-comic-yellow bg-comic-dots"
    >
      <div className="flex flex-col max-w-7xl px-4">
        <ActionBadge
        theme="dark"
        {...motionPresets.slideInRight}
        className="text-lg py-2 text-center sm:px-6 sm:text-2xl md:text-4xl lg:text-5xl mb-8"
        >
            CAPÍTULO 1: ORIGEM
        </ActionBadge>

        <div className="grid grid-cols-1 items-center gap-4 md:gap-6 md:grid-cols-2">
          
          <ActionBadge noPadding theme="yellow" {...motionPresets.slideInLeft}>
              <h1 className="bg-comic-blue py-1 px-2 text-white text-center ">
                No quartel-general do desenvolvimento...
              </h1>
              <Image
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000"
                alt="Workspace de desenvolvimento"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
          </ActionBadge>

          <div className="flex flex-col gap-4">
            <ActionBadge theme="white" {...motionPresets.slideInRight}>
              <div className="mb-2 py-1 px-2">
                  <span className="text-lg md:text-2xl text-comic-red border-b-2">IDENTIDADE SECRETA</span>
                      <p className="text-sm md:text-base font-sans">
                        {aboutData.description}
                      </p>
              </div>
            </ActionBadge>

            <ActionBadge theme="blue" {...motionPresets.slideInRight}>
              <div className="mb-4 flex justify-center">
                <ActionBadge theme="yellow">
                  <span className="text-lg md:text-xl">
                    ESTATÍSTICAS DO HERÓI
                  </span>
                </ActionBadge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {heroStats.map((stat) => (
                  <ActionBadge
                    key={stat.label}
                    theme="yellow"
                    noPadding>
                    <div className="flex flex-col items-center justify-center px-1 py-2">
                      <div className="text-center text-xl leading-none md:text-2xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-center text-[10px] leading-tight wrap-break-words md:text-xs">
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
