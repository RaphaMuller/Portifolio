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
      className="comic-section bg-comic-yellow bg-comic-dots"
    >
      <div className="flex flex-col max-w-7xl px-4">
        {/* ChapterBadge */}
        <ActionBadge
          theme="dark"
          {...motionPresets.slideInRight}
          className="text-h2 md:text-h1 py-2 text-center self-center sm:px-6 md:self-start mb-8"
        >
          <h2 className="text-h4 md:text-h2 lg:text-h1">CAPÍTULO 1: ORIGEM</h2>
        </ActionBadge>

        {/* ContentGrid */}
        <div className="grid grid-cols-1 items-center gap-4 md:gap-6 md:grid-cols-2">

          {/* ImagePanel */}
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

          {/* BioCards */}
          <div className="flex flex-col gap-4">
            {/* IdentityCard */}
            <ActionBadge theme="white" {...motionPresets.slideInRight}>
              <div className="mb-2 py-1 px-2">
                <h3 className="text-title md:text-h4 text-comic-red border-b-2 mb-1">IDENTIDADE SECRETA</h3>
                <p className="text-description">
                  {aboutData.description}
                </p>
              </div>
            </ActionBadge>

            {/* StatsCard */}
            <ActionBadge theme="blue" {...motionPresets.slideInRight}>
              <div className="mb-4 flex justify-center">
                <ActionBadge theme="yellow">
                  <h3 className="text-title md:text-h3">ESTATÍSTICAS DO HERÓI</h3>
                </ActionBadge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {heroStats.map((stat) => (
                  <ActionBadge
                    key={stat.label}
                    theme="yellow"
                    noPadding>
                    <div className="flex flex-col items-center justify-center px-1 py-2">
                      <p className="text-h4 md:text-h3">{stat.value}</p>
                      <p className="text-stat-label">{stat.label}</p>
                    </div>
                  </ActionBadge>
                ))}
              </div>
            </ActionBadge>

            {/* QuoteBubble */}
            <SpeechBubble tailPosition="top" animateOnScroll delay={0.3}>
              <p className="text-caption">
                &ldquo;Com grandes poderes vêm grandes responsabilidades... e
                muito café!&rdquo;
              </p>
              <p className="text-caption">
                — Raphael Muller
              </p>
            </SpeechBubble>
          </div>
        </div>
      </div>
    </section>
  );
}
