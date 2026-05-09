// sections/Hero.tsx
import { span } from "framer-motion/client";
import { ActionBadge } from "./actionBadge";
import { SpeechBubble } from "./speechBubble";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="section-hero hero-dots-black bg-comic-blue">
      <ActionBadge
        rotation={-12}
        delay={0.2}
        className="top-24 left-4 md:left-10"
      >
        <span>POW!</span>
      </ActionBadge>
      <ActionBadge
        variant="yellow"
        rotation={8}
        delay={0.4}
        className="top-28 right-4 md:right-10"
      >
        <span>ZAP!</span>
      </ActionBadge>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-shrink-0"
        >
          <div className="h-52 w-52 overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0_0_#000] md:h-72 md:w-72">
            <img
              src="/Eu.jpeg"
              className="h-full w-full object-cover"
              alt="Perfil"
            />
          </div>
        </motion.div>

        <div className="flex flex-1 flex-col gap-4">
          <SpeechBubble>
            Olá, mundo! Sou um desenvolvedor criativo pronto para salvar o dia
            com código!
          </SpeechBubble>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="border-4 border-black bg-[#FFE44D] p-4 shadow-[6px_6px_0_0_#000]"
          >
            <h1 className="font-bangers text-5xl text-black md:text-7xl">
              RAPHAEL MULLER
            </h1>
            <p className="text-xl text-black md:text-2xl">
              DESENVOLVEDOR FULL STACK
            </p>
          </motion.div>

          {/* <ActionBadge
            variant="yellow"
            rotation={-8}
            delay={0.6}
            positionType="static">
            <button>VER PROJETOS!</button>
          </ActionBadge> */}

          {/* <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <button className="bg-[#FF4444] text-white border-4 border-black px-6 py-2 text-xl shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0">
              VER PROJETOS!
            </button>
            <button className="bg-white text-black border-4 border-black px-6 py-2 text-xl shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-0 active:translate-y-0">
              CONTATO
            </button>
          </motion.div> */}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 left-0 h-4 bg-black" />
    </section>
  );
}
