"use client";

import React from "react";
import { motion } from "framer-motion";

const VALUES_CARDS = [
  {
    id: "01",
    label: "01 — CLEAR",
    title: "CLEAR",
    desc: "We communicate openly and keep you informed at every step.",
    bg: "bg-[#fff3e7]",
    border: "border-[#fde4cf]",
    shadow: "shadow-[0_6px_25px_rgba(234,88,12,0.04)]",
    iconBg: "bg-[#f56a38]",
    textColor: "text-[#ea580c]",
    arrowColor: "#ea580c",
    position: "left-top",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-7 min-[1400px]:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <circle cx="8" cy="12" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="16" cy="12" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "02",
    label: "02 — CREATIVE",
    title: "CREATIVE",
    desc: "We bring fresh ideas and thoughtful design to make every project stand out.",
    bg: "bg-[#eaf6f6]",
    border: "border-[#d2eded]",
    shadow: "shadow-[0_6px_25px_rgba(4,120,128,0.04)]",
    iconBg: "bg-[#047880]",
    textColor: "text-[#047880]",
    arrowColor: "#047880",
    position: "right-top",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-7 min-[1400px]:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    id: "03",
    label: "03 — RELIABLE",
    title: "RELIABLE",
    desc: "We take responsibility for our work and deliver on our promises.",
    bg: "bg-[#f7eff9]",
    border: "border-[#ebdef0]",
    shadow: "shadow-[0_6px_25px_rgba(156,130,158,0.04)]",
    iconBg: "bg-[#9c829e]",
    textColor: "text-[#9c829e]",
    arrowColor: "#9c829e",
    position: "left-bottom",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-7 min-[1400px]:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: "04",
    label: "04 — PURPOSEFUL",
    title: "PURPOSEFUL",
    desc: "We approach every project with a clear goal, focusing on meaningful work.",
    bg: "bg-[#fff3e7]",
    border: "border-[#fde4cf]",
    shadow: "shadow-[0_6px_25px_rgba(255,134,60,0.04)]",
    iconBg: "bg-[#f56a38]",
    textColor: "text-[#ea580c]",
    arrowColor: "#ea580c",
    position: "right-bottom",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-7 min-[1400px]:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11.5" cy="12.5" r="8.5" />
        <circle cx="11.5" cy="12.5" r="4.5" />
        <circle cx="11.5" cy="12.5" r="1.5" fill="currentColor" />
        <line x1="21.5" y1="2.5" x2="12.5" y2="11.5" strokeWidth="2.4" />
        <path d="M17.5 2.5 L21.5 2.5 L21.5 6.5" />
        <line x1="16.5" y1="7.5" x2="19.5" y2="4.5" />
      </svg>
    ),
  },
];

function ValueCardMobile({ card }: { card: (typeof VALUES_CARDS)[0] }) {
  return (
    <div
      className={`rounded-[1.25rem] sm:rounded-[1.5rem] ${card.bg} border ${card.border} p-3.5 sm:p-4.5 ${card.shadow} flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-1`}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <div
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${card.iconBg} text-white flex items-center justify-center shrink-0 shadow-sm`}
        >
          {card.icon}
        </div>
        <h3 className={`text-xs sm:text-[13px] font-bold ${card.textColor} tracking-wider uppercase leading-tight`}>
          {card.label}
        </h3>
      </div>
      <p className="text-[11.5px] sm:text-xs text-[#492c28]/85 leading-relaxed font-['Inter',sans-serif]">
        {card.desc}
      </p>
    </div>
  );
}

function ValueCardDesktop({ card, delay = 0.1 }: { card: (typeof VALUES_CARDS)[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: card.position.includes("left") ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative rounded-[2rem] sm:rounded-[2.4rem] lg:rounded-[1.25rem] xl:rounded-[1.5rem] min-[1400px]:rounded-[2.4rem] ${card.bg} border ${card.border} p-6 sm:p-7 lg:py-2.5 lg:px-3.5 xl:py-3 xl:px-4.5 min-[1400px]:p-7 ${card.shadow} transition-all duration-300`}
    >
      <div className="flex items-start gap-4 sm:gap-5 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-5">
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-9 lg:h-9 xl:w-10 xl:h-10 min-[1400px]:w-16 min-[1400px]:h-16 rounded-full ${card.iconBg} text-white flex items-center justify-center shrink-0 shadow-md`}
        >
          {card.icon}
        </div>
        <div className="flex-1">
          <h3 className={`text-sm sm:text-[15px] lg:text-[11px] xl:text-[12px] min-[1400px]:text-[15px] font-bold ${card.textColor} tracking-wider uppercase mb-2 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-2`}>
            {card.label}
          </h3>
          <p className="text-sm sm:text-[15px] lg:!text-[10.5px] xl:!text-[11.5px] min-[1400px]:!text-[15px] text-[#492c28]/85 leading-relaxed lg:!leading-snug xl:!leading-normal min-[1400px]:leading-relaxed font-['Inter',sans-serif]">
            {card.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ThinkingBehindWork() {
  const card01 = VALUES_CARDS[0];
  const card02 = VALUES_CARDS[1];
  const card03 = VALUES_CARDS[2];
  const card04 = VALUES_CARDS[3];

  return (
    <section className="relative z-20 w-full py-16 md:py-24 lg:py-12 xl:py-12 min-[1400px]:py-28 bg-ivory overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-4 xl:px-6 min-[1400px]:px-20 max-w-[1340px] lg:max-w-[860px] xl:max-w-[980px] min-[1400px]:max-w-[1340px] mx-auto">
        {/* --- Top Header Area --- */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-10 sm:mb-14 lg:mb-4 xl:mb-6 min-[1400px]:mb-18">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4 lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px]"
          >
            WHAT MATTERS TO US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[40px] min-[1400px]:xl:text-[46px] font-extrabold text-[#492c28] tracking-tight flex flex-col items-center gap-1 md:gap-3 lg:gap-0.5 xl:gap-1 min-[1400px]:gap-3 leading-tight lg:leading-[1.15] min-[1400px]:leading-tight"
          >
            <span>The Values Behind</span>
            <span className="text-[#047880]">Our Work.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#492c28]/85 text-base sm:text-lg lg:!text-[13px] xl:!text-[13px] min-[1400px]:!text-lg leading-relaxed lg:!leading-[1.5] xl:!leading-[1.5] min-[1400px]:leading-relaxed font-['Inter',sans-serif] max-w-5xl lg:max-w-2xl xl:max-w-3xl min-[1400px]:max-w-5xl mx-auto mt-4 sm:mt-5 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-5"
          >
            Our values guide how we think, work, and create. They shape every project and help us build meaningful experiences for our clients.
          </motion.p>
        </div>

        {/* ========================================================
            MOBILE LAYOUT (< lg): 4 Cards Around Center Circle with Arrows
            ======================================================== */}
        <div className="block lg:hidden w-full max-w-xl mx-auto">
          {/* Top Row: Left Top (Card 01) & Right Top (Card 02) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
            <ValueCardMobile card={card01} />
            <ValueCardMobile card={card02} />
          </div>

          {/* Center Row: Circular Portrait with 4 Connecting Arrows */}
          <div className="relative flex items-center justify-center py-6 sm:py-8 my-2">
            {/* Center Circular Avatar Frame */}
            <div className="relative w-[110px] sm:w-[130px] aspect-square rounded-full bg-[#fde2d0] overflow-hidden border-[3.5px] border-white shadow-[0_10px_28px_rgba(73,44,40,0.12)] flex items-end justify-center select-none z-10">
              <img
                src="/about/thinking-portrait.png"
                alt="The Thinking Behind Our Work"
                className="w-full h-full object-cover object-top scale-[1.12] translate-y-1.5 pointer-events-none select-none"
              />
            </div>

            {/* 4 Diagonal SVG Connector Arrows with Arrowheads */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible z-20"
              viewBox="0 0 340 140"
              fill="none"
            >
              <defs>
                <marker id="m-arrow-orange" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#ea580c" />
                </marker>
                <marker id="m-arrow-teal" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#047880" />
                </marker>
                <marker id="m-arrow-purple" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#9c829e" />
                </marker>
              </defs>

              {/* Arrow 1: From Left Top Card (Card 01) to Circle */}
              <path
                d="M 68 -2 C 92 16, 114 36, 126 50"
                stroke="#ea580c"
                strokeWidth="1.6"
                strokeLinecap="round"
                markerEnd="url(#m-arrow-orange)"
              />
              <circle cx="68" cy="-2" r="2.2" fill="#ea580c" />

              {/* Arrow 2: From Circle to Right Top Card (Card 02) */}
              <path
                d="M 214 50 C 226 36, 248 16, 272 -2"
                stroke="#047880"
                strokeWidth="1.6"
                strokeLinecap="round"
                markerEnd="url(#m-arrow-teal)"
              />
              <circle cx="272" cy="-2" r="2.2" fill="#047880" />

              {/* Arrow 3: From Left Bottom Card (Card 03) to Circle */}
              <path
                d="M 68 142 C 92 124, 114 104, 126 90"
                stroke="#9c829e"
                strokeWidth="1.6"
                strokeLinecap="round"
                markerEnd="url(#m-arrow-purple)"
              />
              <circle cx="68" cy="142" r="2.2" fill="#9c829e" />

              {/* Arrow 4: From Circle to Right Bottom Card (Card 04) */}
              <path
                d="M 214 90 C 226 104, 248 124, 272 142"
                stroke="#ea580c"
                strokeWidth="1.6"
                strokeLinecap="round"
                markerEnd="url(#m-arrow-orange)"
              />
              <circle cx="272" cy="142" r="2.2" fill="#ea580c" />
            </svg>
          </div>

          {/* Bottom Row: Left Bottom (Card 03) & Right Bottom (Card 04) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
            <ValueCardMobile card={card03} />
            <ValueCardMobile card={card04} />
          </div>
        </div>

        {/* ========================================================
            DESKTOP LAYOUT (lg:): 3-Column Layout with S-curve Arrows
            ======================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-5 lg:gap-3.5 xl:gap-5 min-[1400px]:gap-8 items-center">
          {/* Left Column: Left Top (Card 01) & Left Bottom (Card 03) */}
          <div className="col-span-4 flex flex-col gap-3.5 lg:gap-2.5 xl:gap-3.5 min-[1400px]:gap-10 min-[1400px]:xl:gap-14">
            <ValueCardDesktop card={card01} delay={0.1} />
            <ValueCardDesktop card={card03} delay={0.2} />
          </div>

          {/* Center Column: Circular Portrait & S-curve Connector Wires with Arrowheads */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="col-span-4 flex justify-center relative"
          >
            <div className="relative w-full max-w-[170px] lg:max-w-[135px] xl:max-w-[160px] min-[1400px]:max-w-[240px] mx-auto aspect-square">
              {/* Circular Portrait Frame */}
              <div className="relative w-full h-full rounded-full bg-[#fde2d0] overflow-hidden border-[3.5px] border-white shadow-[0_12px_32px_rgba(73,44,40,0.12)] flex items-end justify-center select-none">
                <img
                  src="/about/thinking-portrait.png"
                  alt="The Thinking Behind Our Work"
                  className="w-full h-full object-cover object-top scale-[1.12] translate-y-2 pointer-events-none select-none transition-transform duration-500 hover:scale-[1.15]"
                />
              </div>

              {/* Desktop S-curve Connector Wires & Arrow Heads */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible z-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <defs>
                  <marker id="d-arrow-orange" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#ea580c" />
                  </marker>
                  <marker id="d-arrow-teal" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#047880" />
                  </marker>
                  <marker id="d-arrow-purple" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#9c829e" />
                  </marker>
                </defs>

                {/* Wire 01: Card 01 (Left Top) -> Circular Portrait (Orange) with Arrow */}
                <path
                  d="M -50 20 C -22 20, -6 32, 5 32"
                  stroke="#ea580c"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  markerEnd="url(#d-arrow-orange)"
                />
                <circle cx="-50" cy="20" r="2.2" fill="#ea580c" />

                {/* Wire 03: Card 03 (Left Bottom) -> Circular Portrait (Purple) with Arrow */}
                <path
                  d="M -50 80 C -22 80, -6 68, 5 68"
                  stroke="#9c829e"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  markerEnd="url(#d-arrow-purple)"
                />
                <circle cx="-50" cy="80" r="2.2" fill="#9c829e" />

                {/* Wire 02: Circular Portrait -> Card 02 (Right Top) (Teal) with Arrow */}
                <path
                  d="M 94 32 C 106 32, 122 20, 148 20"
                  stroke="#047880"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  markerEnd="url(#d-arrow-teal)"
                />
                <circle cx="94" cy="32" r="2.2" fill="#047880" />

                {/* Wire 04: Circular Portrait -> Card 04 (Right Bottom) (Orange) with Arrow */}
                <path
                  d="M 94 68 C 106 68, 122 80, 148 80"
                  stroke="#ea580c"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  markerEnd="url(#d-arrow-orange)"
                />
                <circle cx="94" cy="68" r="2.2" fill="#ea580c" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Right Top (Card 02) & Right Bottom (Card 04) */}
          <div className="col-span-4 flex flex-col gap-3.5 lg:gap-2.5 xl:gap-3.5 min-[1400px]:gap-10 min-[1400px]:xl:gap-14">
            <ValueCardDesktop card={card02} delay={0.1} />
            <ValueCardDesktop card={card04} delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
