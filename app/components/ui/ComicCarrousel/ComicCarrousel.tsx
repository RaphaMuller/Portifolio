"use client";

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ActionBadge } from "../ActionBadge/ActionBadge";
import BeltPouch from "./BeltPouch";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { beltItems } from "@/app/constants/itemsCarrosel";

export default function ComicCarrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-[-28px]",
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 850, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 mt-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[#FFD700]/40 border border-[#FFD700] hover:bg-[#FFD700] transition-colors cursor-pointer" />
    ),
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 40%, #0d0d1a 100%)",
        borderTop: "4px solid black",
        borderBottom: "4px solid black",
      }}
    >
      {/* Gotham city silhouette pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Reduzido de max-w-6xl para max-w-5xl para ficar ~11% menor */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block relative">
            <ActionBadge
              theme="yellow"
              className="px-4 sm:px-8 py-2 sm:py-3 text-2xl sm:text-4xl md:text-5xl shadow-[6px_6px_0_0_rgba(255,215,0,0.4)] whitespace-nowrap"
              style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.08em" }}
            >
              🦇 CINTO DE UTILIDADES
            </ActionBadge>
            {/* Batsignal glow behind title */}
            <div className="absolute inset-0 blur-xl bg-[#FFD700]/20 -z-10 scale-110" />
          </div>
          <p
            className="text-[#FFD700]/70 text-xs sm:text-sm mt-3"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            CAPÍTULO 2: O ARSENAL TECNOLÓGICO — clique em cada compartimento para abrir
          </p>
        </motion.div>

        {/* === BELT STRUCTURE === */}
        <div className="relative">
          {/* Belt strap — top */}
          <div
            className="h-5 border-y-4 border-black mb-1 relative"
            style={{
              background: "linear-gradient(90deg, #8B6914 0%, #C8960C 20%, #FFD700 50%, #C8960C 80%, #8B6914 100%)",
              boxShadow: "0 2px 0 rgba(0,0,0,0.5)",
            }}
          >
            {/* Stitching line */}
            <div
              className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, #8B6914 0px, #8B6914 8px, transparent 8px, transparent 14px)",
              }}
            />
          </div>

          {/* Bat buckle center piece - centralizado verticalmente na alça superior (h-5 = 20px -> centro em 10px) */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <ActionBadge
              theme="yellow"
              className="px-4 py-0 text-xl sm:text-2xl"
              style={{
                background: "linear-gradient(135deg, #FFD700, #C8960C)",
                fontFamily: "'Bangers', cursive",
              }}
            >
              🦇
            </ActionBadge>
          </div>

          {/* Carousel area */}
          <div
            className="border-x-4 border-black px-6 sm:px-10 py-2"
            style={{
              background: "linear-gradient(180deg, #1a1400 0%, #0d0d1a 30%, #0d0d1a 70%, #1a1400 100%)",
            }}
          >
            <Slider {...settings}>
              {beltItems.map((item) => (
                <BeltPouch key={item.tech} item={item} />
              ))}
            </Slider>
            {/* Dots spacing */}
            <div className="h-10" />
          </div>

          {/* Belt strap — bottom */}
          <div
            className="h-5 border-y-4 border-black mt-1 relative"
            style={{
              background: "linear-gradient(90deg, #8B6914 0%, #C8960C 20%, #FFD700 50%, #C8960C 80%, #8B6914 100%)",
              boxShadow: "0 -2px 0 rgba(0,0,0,0.5)",
            }}
          >
            {/* Stitching line */}
            <div
              className="absolute left-0 right-0 h-px top-1/2 -translate-y-1/2"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, #8B6914 0px, #8B6914 8px, transparent 8px, transparent 14px)",
              }}
            />
          </div>
        </div>

        {/* Bottom caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 sm:mt-10"
        >
          <span
            className="text-[#FFD700]/60 text-xs"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            "Eu sou o programador que Gotham merece... e que os bugs temem."
          </span>
        </motion.div>
      </div>

      {/* Custom slick dot styling */}
      <style>{`
        .slick-dots li.slick-active div {
          background-color: #FFD700 !important;
        }
      `}</style>
    </section>
  );
}
