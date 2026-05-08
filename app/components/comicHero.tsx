// sections/Hero.tsx
import { ActionBadge } from "./actionBadge";
import { SpeechBubble } from "./actionBadge";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="section-hero">
      <ActionBadge
        text="POW!"
        rotation={-12}
        delay={0.2}
        className="top-24 left-4 md:left-10"
      />
      <ActionBadge
        text="ZAP!"
        variant="yellow"
        rotation={8}
        delay={0.4}
        className="top-28 right-4 md:right-10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-12 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-shrink-0"
        >
          <div className="border-4 border-black shadow-[8px_8px_0_0_#000] bg-white overflow-hidden w-52 h-52 md:w-72 md:h-72">
            <img
              src="/Eu.jpeg"
              className="w-full h-full object-cover"
              alt="Perfil"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 flex-1">
          <SpeechBubble>
            Olá, mundo! Sou um desenvolvedor criativo pronto para salvar o dia
            com código!
          </SpeechBubble>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-[#FFE44D] border-4 border-black p-4 shadow-[6px_6px_0_0_#000]"
          >
            <h1 className="text-5xl md:text-7xl text-black font-bangers">
              RAPHAEL MULLER
            </h1>
            <p className="text-xl md:text-2xl text-black">
              DESENVOLVEDOR FULL STACK
            </p>
          </motion.div>

         <ActionBadge
          text="BOOM!"
          variant="yellow"
          rotation={-8}
          delay={0.6}
          positionType="static">

          </ActionBadge>

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
    </section>
  );
}
