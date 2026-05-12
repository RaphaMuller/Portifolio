"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { ComicPanel } from "@/app/components/ui/ComicPanel";
import { heroStats } from "@/app/constants/aboutData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="hero-dots-white border-t-4 border-b-4 border-black bg-comic-yellow py-20"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Título da seção */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <ActionBadge theme="dark" behavior="static" className="flex text-5xl">
            CAPÍTULO 1: ORIGEM
          </ActionBadge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Painel de imagem */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              className="border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]"
            >
              <div className="mb-4">
                <ActionBadge theme="red" behavior="static">
                  <span className="text-xl">IDENTIDADE SECRETA</span>
                </ActionBadge>
              </div>
              <p className="text-base font-medium leading-relaxed text-black">
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
              className="border-4 border-black bg-comic-blue p-5 shadow-[6px_6px_0_0_#000]"
            >
              <div className="mb-5 flex justify-center">
                <ActionBadge theme="yellow" behavior="static">
                  <span className="text-xl">ESTATÍSTICAS DO HERÓI</span>
                </ActionBadge>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-comic-yellow border-2 border-black p-2 text-center"
                  >
                    <div className="text-2xl text-black tracking-widest">{stat.value}</div>
                    <div className="text-xs text-black">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Balão de citação (topo) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="relative bg-white border-4 border-black p-4 shadow-[6px_6px_0_0_#000]"
            >
              {/* Cauda do balão apontando para cima */}
              <div className="absolute -top-4 left-5 h-0 w-0 border-b-[16px] border-l-[10px] border-r-[10px] border-b-black border-l-transparent border-r-transparent" />
              <div className="absolute -top-2 left-6 h-0 w-0 border-b-[12px] border-l-[8px] border-r-[8px] border-b-white border-l-transparent border-r-transparent" />

              <p className="text-base font-bold italic text-black">
                &ldquo;Com grande poder vem grande responsabilidade... e muito café!&rdquo;
              </p>
              <p className="text-sm font-black text-right mt-2 text-black">
                — Raphael Muller
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
