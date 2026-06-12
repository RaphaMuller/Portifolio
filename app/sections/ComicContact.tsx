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
      <div className="relative z-10 flex w-full max-w-7xl flex-col px-4">
        {/* ChapterBadge */}
        <ActionBadge
          theme="contactTitle"
          {...motionPresets.slideInRight}
          className="mb-8 self-center py-2 text-center text-title sm:px-6 md:self-start md:text-h2 lg:text-h1"
        >
          <h1>CAPÍTULO 4: MISSÃO CONTATO</h1>
        </ActionBadge>

        <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2">
          {/* InfoPanel */}
          <div className="flex flex-col gap-5">
            {/* SpeechBubble */}
            <SpeechBubble tailPosition="bottom" animateOnScroll delay={0.1}>
              <h3 className="mb-2 text-h4 font-bangers tracking-wide text-comic-red">
                PRECISA DE UM HERÓI?
              </h3>
              <p className="font-comic text-sm leading-relaxed">
                Estou disponível para projetos freelance, colaborações e novas
                oportunidades. Vamos criar algo incrível juntos!
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
                    className="flex h-full w-full items-center gap-3 p-3 font-comic font-bold"
                  >
                    <item.icon size={20} />
                    <span className="text-stat-label">{item.label}</span>
                  </a>
                </ActionBadge>
              ))}
            </motion.div>
          </div>

          {/* ContactForm */}
          <motion.div
            {...motionPresets.slideInRight}
            className="bg-comic-dots relative z-10 border-4 border-black bg-white/60 p-6 shadow-[8px_8px_0_0_#000]"
          >
            <div className="-mx-6 -mt-6 mb-5 flex items-center justify-between border-b-4 border-black bg-white px-4 py-2 text-black">
              <span className="font-bangers text-xl tracking-wide">
                📨 ENVIAR MENSAGEM
              </span>
            </div>

            {sent ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="py-10 text-center"
              >
                <div className="mb-3 font-bangers text-5xl">POW! ✉️</div>
                <p className="font-bangers text-lg tracking-wide text-comic-red">
                  MENSAGEM ENVIADA COM SUCESSO!
                </p>
                <p className="mt-2 font-comic text-sm text-gray-500">
                  Responderei em breve, herói!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="mb-1 block font-bangers text-sm tracking-wide text-black">
                    SEU NOME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-black bg-sky-50 px-3 py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
                    placeholder="Peter Parker..."
                  />
                </div>
                <div>
                  <label className="mb-1 block font-bangers text-sm tracking-wide text-black">
                    SEU EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border-2 border-black bg-sky-50 px-3 py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
                    placeholder="heroi@marvel.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-bangers text-sm tracking-wide text-black">
                    SUA MISSÃO
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none border-2 border-black bg-sky-50 px-3 py-2 font-comic text-xs text-black placeholder:text-[10px] focus:border-comic-red focus:shadow-[2px_2px_0_0_var(--color-comic-red)] focus:outline-none sm:text-sm sm:placeholder:text-xs md:text-base md:placeholder:text-sm"
                    placeholder="Preciso de um herói para..."
                  />
                </div>

                <ActionBadge
                  theme="red"
                  interactive
                  className="w-full justify-center p-0 text-center"
                >
                  <button
                    type="submit"
                    className="text-md flex w-full cursor-pointer items-center justify-center gap-2 py-2 font-bangers tracking-wider sm:py-3 sm:text-xl"
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
