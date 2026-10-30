"use client";

import { motion } from "framer-motion";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/global/SpeechBubble/SpeechBubble";
import BuildingSkyline from "@/app/components/ui/hero/ComicSkyline/BuildingSkyline";
import { motionPresets } from "@/app/constants/motionPresets";
import { contactLinks } from "@/app/constants/contactLinks";
import { ComicContactForm } from "@/app/components/ui/contact/ComicContactForm";

export function ComicContact() {
  return (
    <section
      id="contact"
      className="comic-section flex-col bg-comic-contact-gradient px-4 scroll-mt-16"
    >
      <div className="relative z-10 flex w-full max-w-7xl flex-col px-4">
        <ActionBadge
          theme="contactTitle"
          {...motionPresets.slideInRight}
          className="mb-8 self-center py-2 text-center text-title sm:px-6 md:self-start md:text-h2 lg:text-h1"
        >
          <h1>CAPÍTULO 4: MISSÃO CONTATO</h1>
        </ActionBadge>

        <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2">
          {/* ── Coluna esquerda: info + links ── */}
          <div className="flex flex-col gap-5">
            <SpeechBubble tailPosition="bottom" animateOnScroll delay={0.1}>
              <h3 className="mb-2 text-h4 font-bangers tracking-wide text-comic-red">
                PRECISA DE UM HERÓI?
              </h3>
              <p className="font-comic text-sm leading-relaxed">
                Estou disponível para projetos freelance, colaborações e novas
                oportunidades. Vamos criar algo incrível juntos!
              </p>
            </SpeechBubble>

            <motion.div
              className="flex flex-col gap-3"
              {...motionPresets.slideInLeft}
            >
              {contactLinks.map((item) => (
                <ActionBadge
                  key={item.label}
                  theme={item.theme}
                  interactive
                  noPadding
                  className="w-full"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full w-full items-center gap-3 p-3 font-comic font-bold"
                  >
                    <item.icon size={20} />
                    <span className="text-stat-label">{item.label}</span>
                  </a>
                </ActionBadge>
              ))}
            </motion.div>
          </div>

          {/* ── Coluna direita: formulário modular ── */}
          <ComicContactForm />
        </div>
      </div>

      <BuildingSkyline position="absolute" theme="dark" />
    </section>
  );
}
