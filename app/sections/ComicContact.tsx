"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiGit } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Send } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { SpeechBubble } from "@/app/components/ui/SpeechBubble";
import BuildingSkyline from "@/app/components/ui/ComicSkyline/buildingSkyline";
import { motionPresets } from "@/app/constants/motionPresets";

export function ComicContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="comic-section flex-col bg-comic-contact-gradient px-4"
    >
      <div className="relative z-10 flex flex-col w-full max-w-7xl px-4">
        {/* ChapterBadge */}
        <ActionBadge
          theme="contactTitle"
          {...motionPresets.slideInRight}
          className="text-lg py-2 text-center self-center sm:px-6 sm:text-2xl md:text-4xl md:self-start lg:text-5xl mb-8"
        >
          CAPÍTULO 4: MISSÃO CONTATO
        </ActionBadge>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
          {/* InfoPanel */}
          <div className="flex flex-col gap-5">
            {/* SpeechBubble */}
            <SpeechBubble tailPosition="bottom" animateOnScroll delay={0.1}>
              <h3 className="text-2xl text-comic-red mb-3 font-bangers tracking-wide">
                PRECISA DE UM HERÓI?
              </h3>
              <p className="text-sm leading-relaxed font-comic">
                Estou disponível para projetos freelance, colaborações e novas oportunidades.
                Vamos criar algo incrível juntos!
              </p>
            </SpeechBubble>

            {/* SocialLinks */}
            <motion.div
              className="flex flex-col gap-3"
              {...motionPresets.slideInLeft}
            >
              {[
                {
                  icon: Mail,
                  label: "raphaelmuller61@gmail.com",
                  href: "mailto:raphaelmuller61@gmail.com",
                  theme: "white" as const,
                },
                {
                  icon: SiGit,
                  label: "github.com/RaphaelMuller",
                  href: "https://github.com/RaphaMuller",
                  theme: "white" as const,
                },
                {
                  icon: FaLinkedin,
                  label: "linkedin.com/in/RaphaelMuller",
                  href: "https://www.linkedin.com/in/raphael-muller-9b5477227/",
                  theme: "lightBlue" as const,
                },
              ].map((item) => (
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
                    className="flex items-center gap-3 p-3 w-full h-full font-comic font-bold"
                  >
                    <item.icon size={20} />
                    <span className="text-sm">{item.label}</span>
                  </a>
                </ActionBadge>
              ))}
            </motion.div>
          </div>

          {/* ContactForm */}
          <motion.div
            {...motionPresets.slideInRight}
            className="border-4 border-black bg-white/60 bg-comic-dots p-6 shadow-[8px_8px_0_0_#000] relative z-10"
          >
            <div className="bg-white text-black px-4 py-2 -mx-6 -mt-6 mb-5 border-b-4 border-black flex items-center justify-between">
              <span className="text-xl font-bangers tracking-wide">
                📨 ENVIAR MENSAGEM
              </span>
            </div>

            {sent ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-10"
              >
                <div className="text-5xl mb-3 font-bangers">
                  POW! ✉️
                </div>
                <p className="text-lg text-comic-red font-bangers tracking-wide">
                  MENSAGEM ENVIADA COM SUCESSO!
                </p>
                <p className="text-sm text-gray-500 mt-2 font-comic">
                  Responderei em breve, herói!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm mb-1 text-black font-bangers tracking-wide">
                    SEU NOME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2 bg-sky-50 focus:outline-none focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] font-comic text-black text-xs sm:text-sm md:text-base placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-sm"
                    placeholder="Peter Parker..."
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-black font-bangers tracking-wide">
                    SEU EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2 bg-sky-50 focus:outline-none focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] font-comic text-black text-xs sm:text-sm md:text-base placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-sm"
                    placeholder="heroi@marvel.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-black font-bangers tracking-wide">
                    SUA MISSÃO
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-2 border-black px-3 py-2 bg-sky-50 focus:outline-none focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] resize-none font-comic text-black text-xs sm:text-sm md:text-base placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-sm"
                    placeholder="Preciso de um herói para..."
                  />
                </div>

                <ActionBadge theme="red" interactive className="text-center justify-center p-0 w-full">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 py-2 text-md sm:py-3 sm:text-xl font-bangers tracking-wider cursor-pointer"
                  >
                    <Send size={18} /> LANÇAR MENSAGEM!
                  </button>
                </ActionBadge>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Skyline */}
      <BuildingSkyline position="absolute" theme="dark" />
    </section>
  );
}
