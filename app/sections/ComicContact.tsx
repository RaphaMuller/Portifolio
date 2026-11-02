"use client";

import { motion } from "framer-motion";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/global/SpeechBubble/SpeechBubble";
import { BuildingSkyline } from "@/app/components/ui/hero/ComicSkyline/BuildingSkyline";
import { motionPresets } from "@/app/constants/motionPresets";
import { contactLinks } from "@/app/constants/contactLinks";
import { ComicContactForm } from "@/app/components/ui/contact/ComicContactForm";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";

export function ComicContact() {
  return (
    <ComicSectionContainer
      id="contact"
      variant="contact"
      mode="fit"
      ariaLabel="Capítulo 4: Missão Contato"
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter="CAPÍTULO 4"
          title="MISSÃO CONTATO"
          theme="contact"
        />

        <motion.main
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex flex-1 min-h-0 w-full max-w-6xl flex-col justify-between"
        >
          <div className="grid w-full flex-1 min-h-0 grid-cols-1 items-center gap-4 sm:gap-6 md:grid-cols-2">
            {/* Coluna esquerda: info + links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <SpeechBubble tailPosition="bottom" animateOnScroll delay={0.1}>
                <h3 className="mb-1 text-h4 font-bangers tracking-wide text-comic-red">
                  PRECISA DE UM HERÓI?
                </h3>
                <p className="font-comic text-xs sm:text-sm leading-relaxed">
                  Estou disponível para projetos freelance, colaborações e novas
                  oportunidades. Vamos criar algo incrível juntos!
                </p>
              </SpeechBubble>

              <motion.div
                className="flex flex-col gap-2 sm:gap-2.5"
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
                      className="flex h-full w-full items-center gap-3 p-2.5 sm:p-3 font-comic font-bold"
                    >
                      <item.icon size={18} />
                      <span className="text-stat-label">{item.label}</span>
                    </a>
                  </ActionBadge>
                ))}
              </motion.div>
            </div>

            {/* Coluna direita: formulário modular */}
            <ComicContactForm />
          </div>

          {/* Recordatório Final (Créditos / Footer Integrado com Alto Contraste Comic) */}
          <footer className="relative z-20 mt-auto w-full select-none pt-2 pb-1">
            <div className="mx-auto flex flex-wrap items-center justify-between gap-2 border-2 border-black bg-zinc-950/90 px-3.5 py-1.5 shadow-[3px_3px_0_#000] backdrop-blur-xs">
              <span className="font-bangers text-sm sm:text-base text-comic-yellow tracking-wide">
                FIM // CAPÍTULO 4
              </span>
              <span className="font-mono text-xs text-white">
                © 2026 Raphael Muller · ☕ + Código
              </span>
              <span className="hidden font-mono text-[11px] italic text-zinc-300 sm:inline">
                &ldquo;Nenhum bug foi prejudicado.&rdquo;
              </span>
            </div>
          </footer>
        </motion.main>
      </ComicSectionBody>

      <BuildingSkyline position="absolute" theme="dark" />
    </ComicSectionContainer>
  );
}
