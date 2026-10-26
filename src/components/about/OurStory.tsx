"use client";

import React from "react";
import { motion } from "framer-motion";

function TeamImageCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] -rotate-2 sm:-rotate-[2.5deg] transition-transform duration-500 hover:-rotate-1 ${className}`}>
      {/* Main Team Image Card */}
      <div className="relative w-full aspect-[3/2] rounded-[1.75rem] sm:rounded-[2.2rem] lg:rounded-[2.5rem] overflow-hidden border-[3px] sm:border-4 border-white shadow-[0_16px_36px_rgba(73,44,40,0.12)] bg-white">
        <img
          src="/about/our-story.png"
          alt="Prodbiz Solutions Team"
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>

      {/* Top-Left Badge: our-story-top.png */}
      <div className="absolute -top-7 -left-7 sm:-top-9 sm:-left-9 md:-top-11 md:-left-11 lg:-top-12 lg:-left-12 z-20 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 drop-shadow-[0_10px_20px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:scale-105 select-none pointer-events-none">
        <img
          src="/about/our-story-top.png"
          alt="Creative Ideas Lightbulb Badge"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section className="relative z-20 w-full py-12 md:py-20 bg-ivory">
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Two-Column Grid: Left Image with Badges (Desktop), Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center w-full max-w-[1340px] mx-auto">

          {/* Left Column (Desktop Only): Image Card with Circular Floating Badges */}
          <motion.div
            className="hidden lg:flex lg:col-span-6 relative w-full items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <TeamImageCard className="translate-y-4 sm:translate-y-6 lg:translate-y-8" />
          </motion.div>

          {/* Right Column: Text Content (with mobile image below heading) */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tag: OUR STORY matching Image 2 */}
            <p className="section-label mb-4">OUR STORY</p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-[#492c28] mb-2 sm:mb-3 lg:mb-6 tracking-tight text-center lg:text-left flex flex-col items-center lg:items-start gap-1 md:gap-3 leading-tight">
              <span className="block sm:whitespace-nowrap">Creative Work That Helps</span>
              <span className="text-[#047880]">
                Businesses Grow.
              </span>
            </h2>

            {/* Mobile Only: Team Image below heading */}
            <div className="block lg:hidden mt-2 sm:mt-3 mb-6 sm:mb-8 pt-1 pb-2 px-2 sm:px-4 w-full flex justify-center">
              <TeamImageCard className="mx-auto" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base lg:text-[16px] text-[#492c28]/85 leading-relaxed font-['Inter',sans-serif] mb-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <p>
                Prodbiz Solutions started with a simple idea: help businesses show who they are, what they do, and why customers should choose them.
              </p>
              <p>
                We bring design, technology, and marketing together to help businesses build their brand and reach more people. Whether it&apos;s creating a logo, building a website, or designing content for social media, we focus on work that serves a real purpose.
              </p>
              <p>
                We work with all kinds of businesses, from small businesses just getting started to established companies looking to grow. We first understand your business and your goals, then work with you to find the right solutions.
              </p>
            </div>

            {/* Bottom Highlight Goal Statement with Vertical Line & Target-with-Arrow Icon */}
            <div className="flex items-center gap-3.5 pl-4 border-l-[3.5px] border-[#ff863c] max-w-xl py-0.5 mx-auto lg:mx-0 text-left">
              {/* Target with Arrow Present Icon */}
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#ff863c] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Outer ring */}
                <circle cx="11.5" cy="12.5" r="8.5" />
                {/* Inner ring */}
                <circle cx="11.5" cy="12.5" r="4.5" />
                {/* Center bullseye */}
                <circle cx="11.5" cy="12.5" r="1.5" fill="currentColor" />
                {/* Arrow piercing to bullseye */}
                <line x1="21.5" y1="2.5" x2="12.5" y2="11.5" strokeWidth="2.2" />
                {/* Arrow fletching feathers */}
                <path d="M17.5 2.5 L21.5 2.5 L21.5 6.5" />
                <line x1="16.5" y1="7.5" x2="19.5" y2="4.5" />
              </svg>
              <p className="font-bold text-sm sm:text-base lg:text-[16px] leading-snug text-[#492c28] font-['Inter',sans-serif]">
                Our goal is to understand your business, bring your ideas to life, and create work that makes a difference.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
