"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Mail, TrendingUp, Palette, Monitor, Megaphone, BarChart2, Users } from "lucide-react";
import Milestones from "@/components/about/Milestones";
import OurStory from "@/components/about/OurStory";
import ThinkingBehindWork from "@/components/about/ThinkingBehindWork";
import OurValues from "@/components/about/OurValues";
import OurMission from "@/components/about/OurMission";
import OurVision from "@/components/about/OurVision";
import OurTeam from "@/components/about/OurTeam";
import WhatWeStandFor from "@/components/about/WhatWeStandFor";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* HERO HEADER SECTION */}
      <div className="w-full px-3 sm:px-4 md:px-8 py-2 sm:py-4 md:py-8 lg:py-2.5 xl:py-3 min-[1400px]:py-8 pt-24 sm:pt-24 md:pt-28 lg:pt-[84px] xl:pt-[88px] min-[1400px]:pt-28 overflow-hidden bg-ivory">
        <section
          className="relative w-full h-[480px] sm:h-[540px] md:h-[calc(100vh-8rem)] md:min-h-[600px] lg:h-[calc(100dvh-6.5rem)] lg:min-h-[420px] lg:max-h-[480px] xl:h-[calc(100dvh-7rem)] xl:min-h-[440px] xl:max-h-[520px] min-[1400px]:h-[calc(100vh-8rem)] min-[1400px]:min-h-[600px] min-[1400px]:max-h-none z-10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden flex items-center"
          style={{ backgroundColor: "#6b2d14" }}
        >
          {/* Warm radial glow — brighter center-right, darker corners */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 75% at 65% 50%, #8c3d1e 0%, #7a3318 25%, #6b2d14 55%, #4a1e0a 80%, #361508 100%)",
            }}
          />

          {/* Very faint grain/noise texture overlay for warm depth */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Content Wrapper */}
          <div className="relative z-10 w-full h-full flex items-center px-6 sm:px-10 md:px-12 lg:px-8 xl:px-12 min-[1400px]:px-20 py-6 sm:py-8 md:py-12 lg:py-3 xl:py-4 min-[1400px]:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full max-w-[1340px] mx-auto">

              {/* Left Column (Content) */}
              <div className="relative z-10 lg:col-span-6 xl:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 max-w-xl lg:max-w-[490px] xl:max-w-[540px] min-[1400px]:max-w-2xl">
                {/* Category Tag with Orange Bar */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6 lg:mb-2 xl:mb-2.5 min-[1400px]:mb-6">
                  <span className="w-9 lg:w-8 min-[1400px]:w-9 h-[3.5px] lg:h-[3px] min-[1400px]:h-[3.5px] bg-[#ff7828] rounded-full inline-block shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-sm font-bold tracking-[0.22em] uppercase text-[#ff7828] font-['Inter',sans-serif]">
                    ABOUT PRODBIZ
                  </span>
                </div>

                {/* Heading */}
                <div className="flex flex-col items-center lg:items-start mb-4 sm:mb-6 lg:mb-2 xl:mb-2.5 min-[1400px]:mb-6 select-none">
                  {/* Line 1: We Create */}
                  <h1 className="text-white font-extrabold text-[34px] sm:text-[48px] md:text-[62px] lg:text-[42px] xl:text-[48px] min-[1400px]:text-[66px] min-[1400px]:xl:text-[76px] leading-[1.05] tracking-tight font-['Poppins',sans-serif] text-center lg:text-left">
                    We Create
                  </h1>
                  {/* Line 2: With Purpose. */}
                  <div className="flex items-baseline justify-center lg:justify-start flex-wrap gap-x-2.5 sm:gap-x-3 text-[34px] sm:text-[48px] md:text-[62px] lg:text-[42px] xl:text-[48px] min-[1400px]:text-[66px] min-[1400px]:xl:text-[76px] leading-[1.05] tracking-tight font-['Poppins',sans-serif] mt-1 lg:mt-0.5 xl:mt-1">
                    <span className="text-white font-extrabold">With</span>
                    <span
                      className="text-[#00bee8] relative inline-block select-none leading-none pr-3"
                      style={{
                        fontFamily: "'Playlist', 'Kaushan Script', cursive",
                        fontSize: "1.15em",
                      }}
                    >
                      Purpose.
                      {/* Orange Brush Stroke Underline */}
                      <svg
                        className="absolute -bottom-2 md:-bottom-3.5 lg:-bottom-2 xl:-bottom-2.5 min-[1400px]:-bottom-3.5 left-1 w-[105%] h-[14px] md:h-[22px] lg:h-[18px] xl:h-[20px] min-[1400px]:h-[22px] text-[#ff7828] pointer-events-none overflow-visible"
                        viewBox="0 0 300 24"
                        preserveAspectRatio="none"
                        fill="currentColor"
                      >
                        <path d="M10,18 C50,14 130,9 285,10 C295,10 297,11 292,12 C260,15 160,21 18,24 C10,24 8,20.5 10,18 Z" />
                        <path d="M230,14 C255,14 280,13 294,12 C296,12 295,13.2 288,14 C268,16 242,17 230,16 Z" opacity="0.85" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Paragraph */}
                <p className="text-white/90 text-[14.5px] sm:text-[16px] md:text-[17px] lg:text-[15px] xl:text-[16px] min-[1400px]:text-[18px] leading-relaxed font-['Inter',sans-serif] text-center lg:text-left mx-auto lg:mx-0 max-w-lg lg:max-w-[460px] xl:max-w-[510px] min-[1400px]:max-w-lg mb-5 sm:mb-8 lg:mb-3 xl:mb-3.5 min-[1400px]:mb-8">
                  We help businesses turn ideas into{" "}
                  <span className="text-[#00bee8] font-bold">clear brands</span>,{" "}
                  <span className="text-[#00bee8] font-bold">meaningful digital experiences</span>, and work that{" "}
                  <span className="text-[#00bee8] font-bold">connects with people</span>.
                </p>

                {/* Bottom Orange Line */}
                <div className="w-24 sm:w-36 lg:w-28 xl:w-32 min-[1400px]:w-36 h-[3px] sm:h-[3.5px] lg:h-[3px] min-[1400px]:h-[3.5px] bg-[#ff7828] rounded-full mx-auto lg:mx-0" />
              </div>

              {/* Right Column (Image) - Backdrop on mobile, normal column on desktop */}
              <div className="absolute inset-0 lg:relative lg:inset-auto lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-start w-full pointer-events-none lg:pointer-events-auto z-0 lg:z-auto opacity-20 sm:opacity-25 lg:opacity-100 transition-opacity duration-300 overflow-hidden lg:overflow-visible mt-0">
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[390px] xl:max-w-[440px] min-[1400px]:max-w-[560px] flex items-center justify-center lg:justify-start lg:-translate-x-1 xl:-translate-x-4 min-[1400px]:-translate-x-12">
                  <img
                    src="/about/about-hero.png"
                    alt="Prodbiz Solutions Team Meeting"
                    className="w-[85%] sm:w-full h-auto object-contain max-h-[420px] sm:max-h-[460px] lg:max-h-[340px] xl:max-h-[380px] min-[1400px]:max-h-[540px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* --- Our Story Section --- */}
      <OurStory />

      {/* --- Milestones Section --- */}
      <Milestones />

      {/* --- The Thinking Behind Our Work --- */}
      <ThinkingBehindWork />

      {/* --- Section 04: Our Values (Commented out) --- */}
      {/* <OurValues /> */}

      {/* --- Section 05: Our Mission --- */}
      <OurMission />

      {/* --- Section 06: Our Vision --- */}
      <OurVision />

      {/* --- Section 07: Our Team (The People Behind Prodbiz) --- */}
      <OurTeam />

      {/* --- Section 08: What Prodbiz Stands For --- */}
      <WhatWeStandFor />
    </main>
  );
}
