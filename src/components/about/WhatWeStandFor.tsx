"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatWeStandFor() {
  return (
    <section className="relative z-20 w-full py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* ========================================================
              HEADING & COPY: Centered on mobile, rendered first (top)
              ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-6 xl:pl-10 order-1 lg:order-1">

            {/* Main Section Heading: WHAT PRODBIZ STANDS FOR... */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left w-fit mx-auto lg:mx-0 mb-5 sm:mb-7 font-['Poppins',sans-serif] text-[#36201b] font-black uppercase tracking-tight select-none"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight text-[#36201b]">
                WHAT
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[96px] leading-[0.92] tracking-tight my-0.5 sm:my-1 text-[#ff7828]">
                PRODBIZ
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight text-[#36201b]">
                STANDS FOR...
              </span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md sm:max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              <p className="text-base sm:text-lg lg:text-xl text-[#36201b] leading-relaxed">
                Bringing creative and digital thinking together to help businesses move forward.
              </p>
            </motion.div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Interactive Cascading Cards & PRODBIZ Badge
              Rendered below content (order-2) on mobile, right column on desktop
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-start lg:pl-10 xl:pl-14 order-2 lg:order-2"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] select-none py-2 sm:py-4">

              {/* Stack of 4 Cascading Cards */}
              <div className="flex flex-col relative z-10">

                {/* CARD 1: IDEAS */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-10 self-start ml-2 sm:ml-4 w-[230px] sm:w-[255px] h-[72px] sm:h-[80px] px-5 sm:px-6 bg-[#fddbb9] rounded-[22px] sm:rounded-[26px] shadow-[0_12px_26px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.04)] -rotate-[3.5deg] flex items-center gap-3.5 sm:gap-4 cursor-default transition-shadow hover:shadow-[0_18px_32px_rgba(0,0,0,0.1)]"
                >
                  <img
                    src="/about/ideas.png"
                    alt="Ideas Icon"
                    className="w-10 sm:w-11 h-10 sm:h-11 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-xl sm:text-2xl text-[#36201b] tracking-wider leading-none font-['Poppins',sans-serif]">
                      IDEAS
                    </span>
                    <span className="w-8 sm:w-9 h-[2.5px] bg-[#ff7828] rounded-full mt-1.5" />
                  </div>
                </motion.div>

                {/* CARD 2: DESIGN */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-20 self-start ml-12 sm:ml-16 -mt-3.5 sm:-mt-4 w-[240px] sm:w-[268px] h-[72px] sm:h-[80px] px-5 sm:px-6 bg-[#048185] rounded-[22px] sm:rounded-[26px] shadow-[0_14px_30px_rgba(4,129,133,0.28),0_4px_10px_rgba(0,0,0,0.05)] -rotate-[2deg] flex items-center gap-3.5 sm:gap-4 cursor-default transition-shadow hover:shadow-[0_20px_36px_rgba(4,129,133,0.38)]"
                >
                  <img
                    src="/about/design-white.png"
                    alt="Design Icon"
                    className="w-9 sm:w-10 h-9 sm:h-10 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-xl sm:text-2xl text-white tracking-wider leading-none font-['Poppins',sans-serif]">
                      DESIGN
                    </span>
                    <span className="w-8 sm:w-9 h-[2.5px] bg-white rounded-full mt-1.5" />
                  </div>
                </motion.div>

                {/* CARD 3: TECHNOLOGY */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -1.5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-30 self-start ml-16 sm:ml-24 -mt-3.5 sm:-mt-4 w-[265px] sm:w-[298px] h-[72px] sm:h-[80px] px-5 sm:px-6 bg-[#dacace] rounded-[22px] sm:rounded-[26px] shadow-[0_12px_26px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.04)] -rotate-[2.5deg] flex items-center gap-3 sm:gap-4 cursor-default transition-shadow hover:shadow-[0_18px_32px_rgba(0,0,0,0.1)]"
                >
                  <img
                    src="/about/technology.png"
                    alt="Technology Icon"
                    className="w-10 sm:w-11 h-10 sm:h-11 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-lg sm:text-[21px] text-[#36201b] tracking-wider leading-none font-['Poppins',sans-serif]">
                      TECHNOLOGY
                    </span>
                    <span className="w-9 sm:w-10 h-[2.5px] bg-[#36201b] rounded-full mt-1.5" />
                  </div>
                </motion.div>

                {/* CARD 4: MARKETING */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -0.5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-40 self-start ml-4 sm:ml-8 -mt-3.5 sm:-mt-4 w-[255px] sm:w-[285px] h-[72px] sm:h-[80px] px-5 sm:px-6 bg-[#fddbb9] rounded-[22px] sm:rounded-[26px] shadow-[0_12px_26px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.04)] -rotate-[1.5deg] flex items-center gap-3.5 sm:gap-4 cursor-default transition-shadow hover:shadow-[0_18px_32px_rgba(0,0,0,0.1)]"
                >
                  <img
                    src="/about/marketing.png"
                    alt="Marketing Icon"
                    className="w-10 sm:w-11 h-10 sm:h-11 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-lg sm:text-[21px] text-[#36201b] tracking-wider leading-none font-['Poppins',sans-serif]">
                      MARKETING
                    </span>
                    <span className="w-9 sm:w-10 h-[2.5px] bg-[#36201b] rounded-full mt-1.5" />
                  </div>
                </motion.div>

              </div>

              {/* Hand-drawn Swooping Curved Arrow */}
              <div className="absolute right-5 sm:right-6 top-[170px] sm:top-[165px] w-[34px] sm:w-[50px] md:w-[62px] pointer-events-none z-20">
                <img
                  src="/about/curved-arrow-clean.png"
                  alt=""
                  className="w-full h-auto object-contain select-none"
                />
              </div>

              {/* PRODBIZ Pebble Badge with Hand-drawn Doodle Scribble & Rays */}
              <div className="relative z-30 flex justify-end pr-2 sm:pr-6 mt-3 sm:mt-4">
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-[230px] sm:w-[260px] md:w-[275px] cursor-default"
                >
                  <img
                    src="/about/prodbiz-badge-perfect.png"
                    alt="PRODBIZ"
                    className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(54,32,27,0.18)]"
                  />
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
