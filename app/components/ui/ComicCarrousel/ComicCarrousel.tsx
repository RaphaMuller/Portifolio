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
import { motionPresets } from "@/app/constants/motionPresets";

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
      { breakpoint: 1025, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 mt-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFD700]/40 border border-[#FFD700] hover:bg-[#FFD700] transition-colors cursor-pointer" />
    ),
  };

  return (
    <ActionBadge
      className="w-full max-w-7xl rounded-4xl bg-comic-shadow"
      theme="batmanArmor"
      noPadding
      {...motionPresets.slideInLeft}
    >
      {/* Section title */}
      <div className="flex justify-center py-4 sm:py-6">
        <ActionBadge
          theme="yellow"
          {...motionPresets.stamp}
          className="flex justify-center mb-2 text-xl sm:text-4xl md:text-5xl whitespace-nowrap font-bangers-wide px-4"
        >
          <span>🦇 CINTO DE UTILIDADES</span>
        </ActionBadge>
      </div>

      {/* === BELT STRUCTURE === */}
      <div className="relative">
        <div className="h-6 border-y-4 border-black relative comic-gradient-belt shadow-[0_2px_0_rgba(0,0,0,0.5)]">
          {/* Stitching line */}
          <div className="relative top-1/2 left-0 right-0 h-px -translate-y-1/2 comic-stitching" />
        </div>

        <div className="absolute top-[9px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <ActionBadge
            theme="yellow"
            className="px-4 text-xl sm:text-2xl font-bangers [background:linear-gradient(135deg,#FFD700,#C8960C)]"
          >
            🦇
          </ActionBadge>
        </div>

        {/* Carousel area */}
        <div className="border-x-4 border-black px-2 sm:px-4 md:px-12 lg:px-16 py-2 comic-carousel-bg">
          <Slider {...settings}>
            {beltItems.map((item) => (
              <BeltPouch key={item.tech} item={item} />
            ))}
          </Slider>
          <div className="h-10" />
        </div>

        {/* Belt strap — bottom */}
        <div className="h-6 border-y-4 border-black relative comic-gradient-belt shadow-[0_-2px_0_rgba(0,0,0,0.5)]">
          <div className="relative left-0 right-0 h-px top-1/2 -translate-y-1/2 comic-stitching" />
        </div>
      </div>

      {/* Bottom caption */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex justify-center items-center py-2"
      >
        <span
          className="text-[#FFD700]/60 text-[10px] sm:text-xs font-comic text-center px-4"
        >
          "Eu sou o programador que Gotham merece... e que os bugs temem."
        </span>
      </motion.div>

      <style>{`
        .slick-dots li.slick-active div {
          background-color: #FFD700 !important;
        }
      `}</style>
    </ActionBadge>
  );
}
