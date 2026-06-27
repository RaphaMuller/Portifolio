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
import { beltItems } from "@/app/constants/itemsCarousel";
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
        <ul className="mt-2 flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 cursor-pointer rounded-full border border-gold bg-gold/40 transition-colors hover:bg-gold sm:h-3 sm:w-3" />
    ),
  };

  return (
    <ActionBadge
      className="w-full max-w-7xl rounded-4xl bg-comic-shadow"
      theme="batmanArmor"
      noPadding
      {...motionPresets.slideInLeft}
    >
      {/* Header */}
      <div className="flex justify-center py-4 sm:py-6">
        <ActionBadge
          theme="yellow"
          className="mb-2 flex justify-center text-title md:text-h4 lg:text-h3"
        >
          <h2>🦇 CINTO DE UTILIDADES</h2>
        </ActionBadge>
      </div>

      {/* Structure */}
      <div className="relative">
        <div className="relative h-6 border-y-4 border-black bg-comic-gradient-belt shadow-[0_2px_0_rgba(0,0,0,0.5)]">
          {/* Stitching */}
          <div className="relative top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-comic-stitching" />
        </div>

        <div className="absolute top-[9px] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <ActionBadge
            theme="yellow"
            className="bg-gradient-to-br from-gold to-bronze px-4 font-bangers text-xl tracking-bangers-tight sm:text-2xl"
          >
            🦇
          </ActionBadge>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden border-x-4 border-black bg-comic-section-gradient px-2 py-2 sm:px-4 md:px-12 lg:px-16">
          <Slider {...settings}>
            {beltItems.map((item) => (
              <BeltPouch key={item.tech} item={item} />
            ))}
          </Slider>
          <div className="h-10" />
        </div>

        {/* Strap */}
        <div className="relative h-6 border-y-4 border-black bg-comic-gradient-belt shadow-[0_-2px_0_rgba(0,0,0,0.5)]">
          <div className="relative top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-comic-stitching" />
        </div>
      </div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center py-2"
      >
        <span className="px-4 text-center text-stat-label text-gold/60">
          &ldquo;Eu sou o programador que Gotham merece... e que os bugs
          temem.&ldquo;
        </span>
      </motion.div>

      <style>{`
        .slick-dots li.slick-active div {
          background-color: var(--color-gold) !important;
        }
      `}</style>
    </ActionBadge>
  );
}
