"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="relative z-20 w-full pt-16 md:pt-20 lg:pt-12 xl:pt-12 min-[1400px]:pt-24 pb-4 md:pb-6 lg:pb-12 xl:pb-12 min-[1400px]:pb-6 bg-ivory overflow-hidden">
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-4 xl:px-6 min-[1400px]:px-20 max-w-[1340px] lg:max-w-[920px] xl:max-w-[1040px] min-[1400px]:max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 min-[1400px]:gap-16 items-center">

          {/* ========================================================
              LEFT COLUMN: Photo Collage with Organic Blob & Doodles
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-center min-[1400px]:lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[390px] xl:max-w-[450px] min-[1400px]:max-w-[540px]">
              <div className="grid grid-cols-[1.3fr_1fr] gap-3 sm:gap-4 lg:gap-2.5 xl:gap-3.5 min-[1400px]:gap-4 items-stretch">
                {/* Left Column: Primary Tall Photo */}
                <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-2xl xl:rounded-3xl min-[1400px]:rounded-3xl overflow-hidden group">
                  <img
                    src="/about/mission/website.png"
                    alt="Our Mission - Helping Businesses Build a Strong Presence"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Right Column: Stacked Photos */}
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-2.5 xl:gap-3.5 min-[1400px]:gap-4 justify-between">
                  <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-2xl xl:rounded-3xl min-[1400px]:rounded-3xl overflow-hidden group flex-1">
                    <img
                      src="/about/mission/mission-photo-2.png"
                      alt="Our Mission - Community Impact"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-2xl xl:rounded-3xl min-[1400px]:rounded-3xl overflow-hidden group flex-1">
                    <img
                      src="/about/mission/mission-photo-3.png"
                      alt="Our Mission - Purpose-Driven Work"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: Heading, Paragraphs & CTA Button
              ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-0 xl:pl-0 min-[1400px]:lg:pl-4 min-[1400px]:xl:pl-8 order-1 lg:order-2">

            {/* Eyebrow Label matching ThinkingBehindWork & OurStory */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4 lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px]"
            >
              OUR MISSION
            </motion.p>

            {/* Main Section Heading matching ThinkingBehindWork font, style & color */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[38px] min-[1400px]:xl:text-[42px] font-extrabold text-[#492c28] leading-[1.16] sm:leading-[1.20] lg:leading-[1.15] min-[1400px]:leading-[1.16] min-[1400px]:xl:leading-[1.20] tracking-tight mb-6 lg:mb-2.5 xl:mb-3.5 min-[1400px]:mb-6 text-center lg:text-left flex flex-col items-center lg:items-start gap-1 sm:gap-1.5 lg:gap-0.5 xl:gap-1 min-[1400px]:gap-1.5"
            >
              <span className="block sm:whitespace-nowrap">Helping Businesses</span>
              <span className="block">
                Build a <span className="text-[#047880] sm:whitespace-nowrap">Strong Presence.</span>
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#492c28]/85 text-base sm:text-lg leading-relaxed font-['Inter',sans-serif] space-y-4 lg:space-y-2 xl:space-y-2.5 min-[1400px]:space-y-4 max-w-xl lg:max-w-[480px] xl:max-w-[530px] min-[1400px]:max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <p className="text-base sm:text-lg lg:!text-[13px] xl:!text-[13px] min-[1400px]:!text-lg leading-relaxed lg:!leading-[1.5] xl:!leading-[1.5] min-[1400px]:leading-relaxed font-['Inter',sans-serif]">
                Our mission is to help businesses present themselves better through good design, websites, branding, and digital marketing.
              </p>
              <p className="text-base sm:text-lg lg:!text-[13px] xl:!text-[13px] min-[1400px]:!text-lg leading-relaxed lg:!leading-[1.5] xl:!leading-[1.5] min-[1400px]:leading-relaxed font-['Inter',sans-serif]">
                We aim to make it easier for businesses to reach people, share what they offer, and grow.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
