"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatWeStandFor() {
  return (
    <section className="relative z-20 w-full py-16 md:py-24 lg:py-12 xl:py-12 min-[1400px]:py-28 overflow-hidden">
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-6 xl:px-8 min-[1400px]:px-12 max-w-[1240px] lg:max-w-[920px] xl:max-w-[1020px] min-[1400px]:max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-3 xl:gap-5 min-[1400px]:gap-12 items-center lg:translate-x-16 xl:translate-x-20 min-[1400px]:translate-x-0">

          {/* ========================================================
              HEADING & COPY: Centered on mobile, rendered first (top)
              ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-4 xl:pl-6 min-[1400px]:lg:pl-6 min-[1400px]:xl:pl-10 order-1 lg:order-1">

            {/* Main Section Heading: WHAT PRODBIZ STANDS FOR... */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left w-fit mx-auto lg:mx-0 mb-5 sm:mb-7 lg:mb-3 xl:mb-4 min-[1400px]:mb-7 font-['Poppins',sans-serif] text-[#36201b] font-black uppercase tracking-tight select-none"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[34px] xl:text-[38px] min-[1400px]:text-[52px] leading-tight tracking-tight text-[#36201b]">
                WHAT
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[60px] xl:text-[68px] min-[1400px]:text-[88px] min-[1400px]:xl:text-[96px] leading-[0.92] tracking-tight my-0.5 sm:my-1 text-[#ff7828]">
                PRODBIZ
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[34px] xl:text-[38px] min-[1400px]:text-[52px] leading-tight tracking-tight text-[#36201b]">
                STANDS FOR...
              </span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md sm:max-w-lg lg:max-w-[370px] xl:max-w-[420px] min-[1400px]:max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              <p className="text-base sm:text-lg lg:!text-[14.5px] xl:!text-[15.5px] min-[1400px]:!text-xl text-[#36201b] leading-relaxed lg:!leading-[1.55] xl:!leading-[1.6] min-[1400px]:leading-relaxed font-['Inter',sans-serif]">
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
            className="lg:col-span-6 flex justify-center lg:justify-start lg:pl-1 xl:pl-3 min-[1400px]:lg:pl-10 min-[1400px]:xl:pl-14 order-2 lg:order-2"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[370px] xl:max-w-[410px] min-[1400px]:max-w-[480px] select-none py-2 sm:py-4 lg:py-1 xl:py-1.5 min-[1400px]:py-4">

              {/* Stack of 4 Cascading Cards */}
              <div className="flex flex-col relative z-10">

                {/* CARD 1: IDEAS */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-10 self-start ml-2 sm:ml-4 lg:ml-2 xl:ml-3 min-[1400px]:ml-4 w-[230px] sm:w-[255px] lg:w-[190px] xl:w-[215px] min-[1400px]:w-[255px] h-[72px] sm:h-[80px] lg:h-[58px] xl:h-[66px] min-[1400px]:h-[80px] px-5 sm:px-6 lg:px-3.5 xl:px-4.5 min-[1400px]:px-6 bg-[#fddbb9] rounded-[22px] sm:rounded-[26px] lg:rounded-[18px] xl:rounded-[22px] min-[1400px]:rounded-[26px] shadow-[0_12px_26px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.04)] -rotate-[3.5deg] flex items-center gap-3.5 sm:gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 cursor-default transition-shadow hover:shadow-[0_18px_32px_rgba(0,0,0,0.1)]"
                >
                  <img
                    src="/about/ideas.png"
                    alt="Ideas Icon"
                    className="w-10 sm:w-11 lg:w-7.5 lg:h-7.5 xl:w-8.5 xl:h-8.5 min-[1400px]:w-11 min-[1400px]:h-11 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-xl sm:text-2xl lg:text-[16px] xl:text-[18px] min-[1400px]:text-2xl text-[#36201b] tracking-wider leading-none font-['Poppins',sans-serif]">
                      IDEAS
                    </span>
                    <span className="w-8 sm:w-9 lg:w-6 xl:w-7 min-[1400px]:w-9 h-[2.5px] lg:h-[2px] min-[1400px]:h-[2.5px] bg-[#ff7828] rounded-full mt-1.5 lg:mt-1 min-[1400px]:mt-1.5" />
                  </div>
                </motion.div>

                {/* CARD 2: DESIGN */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-20 self-start ml-12 sm:ml-16 lg:ml-10 xl:ml-12 min-[1400px]:ml-16 -mt-3.5 sm:-mt-4 lg:-mt-2.5 xl:-mt-3 min-[1400px]:-mt-4 w-[240px] sm:w-[268px] lg:w-[200px] xl:w-[225px] min-[1400px]:w-[268px] h-[72px] sm:h-[80px] lg:h-[58px] xl:h-[66px] min-[1400px]:h-[80px] px-5 sm:px-6 lg:px-3.5 xl:px-4.5 min-[1400px]:px-6 bg-[#048185] rounded-[22px] sm:rounded-[26px] lg:rounded-[18px] xl:rounded-[22px] min-[1400px]:rounded-[26px] shadow-[0_14px_30px_rgba(4,129,133,0.28),0_4px_10px_rgba(0,0,0,0.05)] -rotate-[2deg] flex items-center gap-3.5 sm:gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 cursor-default transition-shadow hover:shadow-[0_20px_36px_rgba(4,129,133,0.38)]"
                >
                  <img
                    src="/about/design-white.png"
                    alt="Design Icon"
                    className="w-9 sm:w-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-10 min-[1400px]:h-10 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-xl sm:text-2xl lg:text-[16px] xl:text-[18px] min-[1400px]:text-2xl text-white tracking-wider leading-none font-['Poppins',sans-serif]">
                      DESIGN
                    </span>
                    <span className="w-8 sm:w-9 lg:w-6 xl:w-7 min-[1400px]:w-9 h-[2.5px] lg:h-[2px] min-[1400px]:h-[2.5px] bg-white rounded-full mt-1.5 lg:mt-1 min-[1400px]:mt-1.5" />
                  </div>
                </motion.div>

                {/* CARD 3: TECHNOLOGY */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -1.5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-30 self-start ml-16 sm:ml-24 lg:ml-14 xl:ml-18 min-[1400px]:ml-24 -mt-3.5 sm:-mt-4 lg:-mt-2.5 xl:-mt-3 min-[1400px]:-mt-4 w-[265px] sm:w-[298px] lg:w-[220px] xl:w-[248px] min-[1400px]:w-[298px] h-[72px] sm:h-[80px] lg:h-[58px] xl:h-[66px] min-[1400px]:h-[80px] px-5 sm:px-6 lg:px-3.5 xl:px-4.5 min-[1400px]:px-6 bg-[#dacace] rounded-[22px] sm:rounded-[26px] lg:rounded-[18px] xl:rounded-[22px] min-[1400px]:rounded-[26px] shadow-[0_12px_26px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.04)] -rotate-[2.5deg] flex items-center gap-3 sm:gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 cursor-default transition-shadow hover:shadow-[0_18px_32px_rgba(0,0,0,0.1)]"
                >
                  <img
                    src="/about/technology.png"
                    alt="Technology Icon"
                    className="w-10 sm:w-11 lg:w-7.5 lg:h-7.5 xl:w-8.5 xl:h-8.5 min-[1400px]:w-11 min-[1400px]:h-11 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-lg sm:text-[21px] lg:text-[14px] xl:text-[16px] min-[1400px]:text-[21px] text-[#36201b] tracking-wider leading-none font-['Poppins',sans-serif]">
                      TECHNOLOGY
                    </span>
                    <span className="w-9 sm:w-10 lg:w-6.5 xl:w-7.5 min-[1400px]:w-10 h-[2.5px] lg:h-[2px] min-[1400px]:h-[2.5px] bg-[#36201b] rounded-full mt-1.5 lg:mt-1 min-[1400px]:mt-1.5" />
                  </div>
                </motion.div>

                {/* CARD 4: MARKETING */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -0.5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="relative z-40 self-start ml-4 sm:ml-8 lg:ml-3 xl:ml-5 min-[1400px]:ml-8 -mt-3.5 sm:-mt-4 lg:-mt-2.5 xl:-mt-3 min-[1400px]:-mt-4 w-[255px] sm:w-[285px] lg:w-[210px] xl:w-[238px] min-[1400px]:w-[285px] h-[72px] sm:h-[80px] lg:h-[58px] xl:h-[66px] min-[1400px]:h-[80px] px-5 sm:px-6 lg:px-3.5 xl:px-4.5 min-[1400px]:px-6 bg-[#fddbb9] rounded-[22px] sm:rounded-[26px] lg:rounded-[18px] xl:rounded-[22px] min-[1400px]:rounded-[26px] shadow-[0_12px_26px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.04)] -rotate-[1.5deg] flex items-center gap-3.5 sm:gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 cursor-default transition-shadow hover:shadow-[0_18px_32px_rgba(0,0,0,0.1)]"
                >
                  <img
                    src="/about/marketing.png"
                    alt="Marketing Icon"
                    className="w-10 sm:w-11 lg:w-7.5 lg:h-7.5 xl:w-8.5 xl:h-8.5 min-[1400px]:w-11 min-[1400px]:h-11 object-contain shrink-0 pointer-events-none"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-lg sm:text-[21px] lg:text-[14px] xl:text-[16px] min-[1400px]:text-[21px] text-[#36201b] tracking-wider leading-none font-['Poppins',sans-serif]">
                      MARKETING
                    </span>
                    <span className="w-9 sm:w-10 lg:w-6.5 xl:w-7.5 min-[1400px]:w-10 h-[2.5px] lg:h-[2px] min-[1400px]:h-[2.5px] bg-[#36201b] rounded-full mt-1.5 lg:mt-1 min-[1400px]:mt-1.5" />
                  </div>
                </motion.div>

              </div>

              {/* Hand-drawn Swooping Curved Arrow */}
              <div className="absolute right-5 sm:right-6 lg:right-3 xl:right-4 min-[1400px]:right-6 top-[170px] sm:top-[165px] lg:top-[130px] xl:top-[145px] min-[1400px]:top-[165px] w-[34px] sm:w-[50px] md:w-[62px] lg:w-[42px] xl:w-[50px] min-[1400px]:w-[62px] pointer-events-none z-20">
                <img
                  src="/about/curved-arrow-clean.png"
                  alt=""
                  className="w-full h-auto object-contain select-none"
                />
              </div>

              {/* PRODBIZ Pebble Badge with Hand-drawn Doodle Scribble & Rays */}
              <div className="relative z-30 flex justify-end pr-2 sm:pr-6 lg:pr-2 xl:pr-4 min-[1400px]:pr-6 mt-3 sm:mt-4 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-4">
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-[230px] sm:w-[260px] md:w-[275px] lg:w-[190px] xl:w-[220px] min-[1400px]:w-[275px] cursor-default"
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
