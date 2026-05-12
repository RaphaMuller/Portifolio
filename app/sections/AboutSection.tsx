"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { ComicPanel } from "@/app/components/ui/ComicPanel";
import { SpeechBubble } from "@/app/components/ui/SpeechBubble";
import { heroStats } from "@/app/constants/aboutData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="hero-dots-white border-t-4 border-b-4 border-black bg-comic-yellow py-20 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Título da seção */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 relative inline-block"
        >
          <Image 
            src="/super-man.png" 
            alt="Superman" 
            width={60} 
            height={60} 
            className="absolute -top-8 -right-8 z-10 w-12 h-12 md:w-16 md:h-16 rotate-12 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
          />
          <ActionBadge theme="dark" behavior="static" className="flex text-3xl md:text-5xl">
            CAPÍTULO 1: ORIGEM
          </ActionBadge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Painel de imagem */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <ComicPanel
              header="PAINEL 1"
              headerTheme="red"
              caption='"No quartel-general do desenvolvimento..."'
            >
              <Image
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000"
                alt="Workspace de desenvolvimento"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </ComicPanel>
          </motion.div>

          {/* Painéis de texto */}
          <div className="flex flex-col gap-5">

            {/* Bio */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]"
            >
              <Image 
                src="/deadpool.png" 
                alt="Deadpool" 
                width={60} 
                height={60} 
                className="absolute -top-8 -right-4 z-10 w-12 h-12 md:w-16 md:h-16 rotate-12 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
              />
              <div className="mb-4">
                <ActionBadge theme="red" behavior="static">
                  <span className="text-lg md:text-xl">IDENTIDADE SECRETA</span>
                </ActionBadge>
              </div>
              <p className="text-sm md:text-base font-medium leading-relaxed text-black">
                Desenvolvedor apaixonado por tecnologia e criatividade com mais de{" "}
                <strong>5 anos</strong> de experiência construindo aplicações web incríveis.
                De dia, crio interfaces memoráveis. À noite, depuro bugs com super-poderes!
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative border-4 border-black bg-comic-blue p-5 shadow-[6px_6px_0_0_#000]"
            >

              <div className="mb-5 flex justify-center">
                <ActionBadge theme="yellow" behavior="static">
                  <span className="text-lg md:text-xl">ESTATÍSTICAS DO HERÓI</span>
                </ActionBadge>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {heroStats.map((stat) => (
                  <ActionBadge
                    key={stat.label}
                    theme="yellow"
                    behavior="static"
                    noPadding
                    className="w-full"
                  >
                    <div className="flex flex-col items-center justify-center py-2 px-1">
                      <div className="text-xl md:text-3xl leading-none text-center">{stat.value}</div>
                      <div className="text-[10px] md:text-xs leading-tight mt-1 text-center break-words">{stat.label}</div>
                    </div>
                  </ActionBadge>
                ))}
              </div>
            </motion.div>

            {/* Balão de citação (topo) */}
            <SpeechBubble tailPosition="top" animateOnScroll delay={0.3}>
              <p className="text-sm md:text-base font-bold italic text-black">
                &ldquo;Com grande poder vem grande responsabilidade... e muito café!&rdquo;
              </p>
              <p className="text-xs md:text-sm font-black text-right mt-2 text-black">
                — Raphael Muller
              </p>
            </SpeechBubble>

          </div>
        </div>
      </div>
    </section>
  );
}
