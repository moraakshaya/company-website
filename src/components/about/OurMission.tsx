"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="relative z-20 w-full pt-16 md:pt-20 lg:pt-24 pb-4 md:pb-6 bg-ivory overflow-hidden">
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* ========================================================
              LEFT COLUMN: Photo Collage with Organic Blob & Doodles
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[540px]">
              <div className="grid grid-cols-[1.3fr_1fr] gap-3 sm:gap-4 items-stretch">
                {/* Left Column: Primary Tall Photo */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group">
                  <img
                    src="/about/mission/website.png"
                    alt="Our Mission - Helping Businesses Build a Strong Presence"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Right Column: Stacked Photos */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-between">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group flex-1">
                    <img
                      src="/about/mission/mission-photo-2.png"
                      alt="Our Mission - Community Impact"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group flex-1">
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
          <div className="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-4 xl:pl-8 order-1 lg:order-2">

            {/* Eyebrow Label matching ThinkingBehindWork & OurStory */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              OUR MISSION
            </motion.p>

            {/* Main Section Heading matching ThinkingBehindWork font, style & color */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold text-[#492c28] leading-[1.16] sm:leading-[1.20] tracking-tight mb-6 text-center lg:text-left"
            >
              <span className="block">Helping Businesses</span>
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
              className="text-[#492c28]/85 text-base sm:text-lg leading-relaxed font-['Inter',sans-serif] space-y-4 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <p>
                Our mission is to help businesses present themselves better through good design, websites, branding, and digital marketing.
              </p>
              <p>
                We aim to make it easier for businesses to reach people, share what they offer, and grow.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
