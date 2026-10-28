"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceWorkGallery from "@/components/services/ServiceWorkGallery";
import ServiceFeatures from "@/components/services/ServiceFeatures";

/* ── shared style tokens (avoids repeating long strings) ── */
const headlineBase =
  "font-extrabold leading-[1.15] tracking-[-0.03em] md:tracking-[-0.02em] whitespace-nowrap text-[28px] md:text-[clamp(2.2rem,4.5vw,3.8rem)] lg:text-[42px] xl:text-[48px] min-[1400px]:text-[clamp(2.2rem,4.5vw,3.8rem)]";

const servicesData = [
  {
    num: "01",
    title: "Google Ads",
    subtitle: "Reach Customers When They Search",
    desc: "We create targeted Google Ads campaigns to help your business appear when people search for your products or services.",
    featuresTitle: "What We Provide",
    features: [
      "Search & Display Ads",
      "YouTube Ads",
      "Keyword targeting",
      "Location targeting",
      "Campaign setup",
      "Conversion tracking",
      "Campaign monitoring"
    ],
    ctaText: "Want your business to appear on Google?",
    imageSrc: "/images/card3-ads.jpg"
  },
  {
    num: "02",
    title: "Instagram Ads",
    subtitle: "Reach the Right Audience on Instagram",
    desc: "We create targeted Instagram campaigns to promote your products, services, offers, and brand to potential customers.",
    featuresTitle: "What We Provide",
    features: [
      "Feed & Story Ads",
      "Reels Ads",
      "Audience targeting",
      "Location targeting",
      "Ad creative selection",
      "Lead & website campaigns",
      "Campaign monitoring"
    ],
    ctaText: "Want more people to discover your business?",
    imageSrc: "/images/reels-videos.jpg"
  },
  {
    num: "03",
    title: "Facebook Ads",
    subtitle: "Reach More Potential Customers",
    desc: "We create Facebook ad campaigns that help promote your products, services, offers, and business to relevant audiences.",
    featuresTitle: "What We Provide",
    features: [
      "Image & video ads",
      "Lead generation ads",
      "Promotional ads",
      "Audience targeting",
      "Location targeting",
      "Campaign setup",
      "Performance monitoring"
    ],
    ctaText: "Have a product or service to promote?",
    imageSrc: "/images/facebook-management.jpg"
  },
  {
    num: "04",
    title: "Ad Creative & Copy",
    subtitle: "Create Ads That Get Attention",
    desc: "We create clear visuals and messaging that help your ads communicate your offer and encourage people to take action.",
    featuresTitle: "What We Create",
    features: [
      "Ad graphics",
      "Promotional creatives",
      "Short video ads",
      "Headlines & descriptions",
      "Offer creatives",
      "Call-to-action messaging"
    ],
    ctaText: "Have an offer you want to promote?",
    imageSrc: "/images/promotional-content.jpg"
  },
  {
    num: "05",
    title: "Campaign Management",
    subtitle: "Keep Your Ads on Track",
    desc: "We monitor your advertising campaigns, review their performance, and make adjustments to improve their effectiveness.",
    featuresTitle: "What We Manage",
    features: [
      "Campaign setup",
      "Audience targeting",
      "Budget management",
      "Ad performance",
      "Leads & conversions",
      "Creative performance",
      "Campaign adjustments"
    ],
    ctaText: "Already running ads?",
    imageSrc: "/images/card4-targeting.jpg"
  }
];
export default function OnlineAdvertisingPage() {
  return (
    <main className="bg-[var(--bg-primary)] min-h-screen overflow-x-clip">
      {/* ── Hero section ─────────────────────────────────── */}
      <section
        className="relative w-full flex flex-col items-center justify-center h-[580px] sm:h-[620px] md:h-auto md:min-h-[100svh] lg:h-screen lg:min-h-0 lg:max-h-screen xl:h-screen xl:min-h-0 xl:max-h-screen min-[1400px]:h-auto min-[1400px]:min-h-[100svh] pt-20 pb-6 md:pt-[120px] md:pb-32 lg:pt-[76px] lg:pb-6 xl:pt-[84px] xl:pb-8 min-[1400px]:pt-[120px] min-[1400px]:pb-32 px-4 sm:px-6 bg-gradient-to-b from-[#fff2e8] to-[var(--bg-primary)] overflow-hidden z-10"
      >
        {/* Top-Left Abstract Waves */}
        <img
          src="/services/logo-branding/top-corner.png"
          alt="Abstract corner decoration"
          className="absolute top-0 left-0 w-[250px] md:w-[400px] lg:w-[500px] object-contain pointer-events-none"
        />

        {/* Bottom-Right Abstract Waves */}
        <img
          src="/services/logo-branding/bottom-corner.png"
          alt="Abstract corner decoration"
          className="absolute bottom-0 right-0 w-[250px] md:w-[400px] lg:w-[500px] object-contain pointer-events-none"
        />

        {/* Ambient glow blobs */}
        <div
          className="absolute rounded-full pointer-events-none blur-[90px] opacity-40 w-[520px] h-[520px] top-[10%] -right-[10%]"
          style={{
            background: "radial-gradient(circle, hsl(42,80%,75%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none blur-[90px] opacity-40 w-[400px] h-[400px] bottom-[10%] -left-[10%]"
          style={{
            background: "radial-gradient(circle, hsl(40,60%,82%) 0%, transparent 70%)",
          }}
        />

        {/* Content column */}
        <div className="relative z-[1] max-w-[860px] w-full mx-auto flex flex-col items-center text-center my-auto">
          {/* ── Badge ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 border border-[hsl(38,40%,72%)] rounded-full py-[5px] md:py-[6px] lg:py-1 xl:py-1 min-[1400px]:py-[6px] px-[16px] md:px-[18px] lg:px-3.5 xl:px-3.5 min-[1400px]:px-[18px] text-[0.68rem] md:text-[0.72rem] lg:text-[11px] xl:text-[11.5px] min-[1400px]:text-[0.72rem] font-bold tracking-[0.12em] text-[hsl(28,30%,35%)] bg-[hsla(40,60%,96%,0.7)] backdrop-blur-[6px] mb-3 md:mb-7 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-7"
          >
            <span className="text-[hsl(40,70%,52%)] text-[0.85rem] lg:text-[0.72rem] xl:text-[0.76rem] min-[1400px]:text-[0.85rem]">✦</span>
            ONLINE ADVERTISING
          </motion.div>

          {/* ── Headline ───────────────────────────────────── */}
          <div className="w-full mb-3 md:mb-7 lg:mb-2.5 xl:mb-3.5 min-[1400px]:mb-7 flex flex-col items-center">
            {/* Line 1 — star + "Reach the Right People" inline */}
            <div className="flex items-center justify-center gap-1 sm:gap-1.5 max-w-full px-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="flex items-center shrink-0 pointer-events-none"
              >
                <Image
                  src="/services/logo-branding/star.png"
                  alt="sparkle stars"
                  width={90}
                  height={90}
                  className="w-6 sm:w-10 md:w-16 lg:w-11 xl:w-13 min-[1400px]:w-16 h-auto object-contain opacity-90"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className={`${headlineBase} text-[#1a1206] px-0.5 text-center`}
              >
                Reach the Right People
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="flex items-center shrink-0 pointer-events-none -mt-3 md:-mt-8 lg:-mt-4 xl:-mt-5 min-[1400px]:-mt-8"
              >
                <Image
                  src="/services/logo-branding/threelines.png"
                  alt="decorative accent lines"
                  width={64}
                  height={64}
                  className="w-5 sm:w-8 md:w-[60px] lg:w-10 xl:w-11 min-[1400px]:w-[60px] h-auto object-contain opacity-90"
                />
              </motion.div>
            </div>

            {/* Line 2 — "With Online Ads" */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center text-center max-w-full px-2"
            >
              {/* "With Online Ads" — Slide2 chocolate brown gradient */}
              <span
                className={`${headlineBase} bg-clip-text text-transparent text-center`}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #361508 0%, #4a1e0a 20%, #6b2d14 40%, #7a3318 60%, #8c3d1e 78%, #a85228 100%)",
                }}
              >
                With Online Ads
              </span>
            </motion.div>
          </div>

          {/* ── Body copy ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-1.5 md:gap-2.5 lg:gap-1.5 xl:gap-2 min-[1400px]:gap-2.5 mb-4 md:mb-9 lg:mb-4 xl:mb-5 min-[1400px]:mb-9 px-2 md:px-0"
          >
            <p className="text-[13px] sm:text-[14px] md:text-[clamp(0.95rem,1.6vw,1.05rem)] lg:text-[13.5px] xl:text-[14.5px] min-[1400px]:text-[clamp(0.95rem,1.6vw,1.05rem)] leading-relaxed md:leading-[1.65] lg:leading-[1.5] xl:leading-[1.5] min-[1400px]:leading-[1.65] text-[hsl(25,15%,38%)] text-center max-w-[690px] lg:max-w-[630px] xl:max-w-[670px] min-[1400px]:max-w-[690px]">
              Online advertising helps your business reach potential customers when they are searching for a service, discovering something new, or ready to make a purchase. We create and manage targeted ad campaigns across Google and social media platforms.
            </p>
          </motion.div>

          {/* ── CTA Button ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Link
              href="/contact"
              id="lb-talk-btn"
              className="inline-flex items-center gap-2.5 md:gap-3 rounded-full py-1.5 md:py-2 lg:py-1.5 xl:py-2 pr-1.5 md:pr-2 lg:pr-1.5 xl:pr-2 pl-5 md:pl-6 lg:pl-5 xl:pl-6 min-[1400px]:py-2 min-[1400px]:pr-2 min-[1400px]:pl-6 no-underline transition-all duration-200 shadow-[0_6px_20px_rgba(54,21,8,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(54,21,8,0.5)] active:scale-[0.97] group"
              style={{
                background:
                  "radial-gradient(ellipse 70% 75% at 65% 50%, #8c3d1e 0%, #7a3318 25%, #6b2d14 55%, #4a1e0a 80%, #361508 100%)",
              }}
            >
              <span className="font-bold text-[14px] md:text-[15px] lg:text-[14px] xl:text-[14.5px] min-[1400px]:text-[15px] text-[#f5d5c0] tracking-[0.01em]">
                Talk to Us →
              </span>
              <span className="flex items-center justify-center w-[36px] h-[36px] md:w-[42px] md:h-[42px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] min-[1400px]:w-[42px] min-[1400px]:h-[42px] rounded-full bg-[#f5d5c0] shrink-0 overflow-hidden transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/services/logo-branding/leaf.png"
                  alt="gold leaf icon"
                  width={50}
                  height={50}
                  className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] min-[1400px]:w-[24px] min-[1400px]:h-[24px] object-contain"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Services Sections ──────────────────────── */}
      <div className="flex flex-col gap-24 md:gap-32 lg:gap-16 xl:gap-20 min-[1400px]:gap-32 pb-48 lg:pb-32 xl:pb-36 min-[1400px]:pb-48 -mt-4 md:-mt-12 px-4 md:px-8 lg:px-6 xl:px-8 min-[1400px]:px-0">
        {servicesData.map((service, index) => {
          // even index (0, 2, 4...) -> Image Left
          // odd index (1, 3, 5...) -> Image Right
          const isImageLeft = index % 2 === 0;

          return (
            <section key={service.num} className="sticky top-6 md:top-12 w-full z-10 mx-auto max-w-[1100px] lg:max-w-[920px] xl:max-w-[1000px] min-[1400px]:max-w-[1100px] bg-[#fffff0]/70 backdrop-blur-2xl border border-white/60 pt-10 md:pt-12 lg:pt-6 lg:pb-8 xl:pt-8 xl:pb-10 min-[1400px]:pt-12 min-[1400px]:pb-20 pb-16 md:pb-20 px-6 md:px-10 lg:px-7 xl:px-9 min-[1400px]:px-10 overflow-hidden rounded-[2.5rem] lg:rounded-[1.75rem] xl:rounded-[2rem] min-[1400px]:rounded-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)]">

              {/* Top Left Number Indicator */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 lg:top-5 lg:left-7 xl:top-6 xl:left-9 min-[1400px]:top-10 min-[1400px]:left-10 flex items-center gap-1 font-black text-2xl lg:text-[18px] xl:text-[20px] min-[1400px]:text-2xl tracking-tight z-30">
                <span className="text-[#0e747c]">{service.num}</span>
                <span className="text-[#f37636] mx-1">/</span>
                <span className="text-[#a49a93] text-xl lg:text-[15px] xl:text-[17px] min-[1400px]:text-xl">0{servicesData.length}</span>
              </div>

              <div className={`w-full flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 lg:gap-8 xl:gap-10 min-[1400px]:gap-14 mt-8 md:mt-12 lg:mt-4 xl:mt-6 min-[1400px]:mt-12 relative z-20`}>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-1/2 lg:w-[44%] xl:w-[45%] min-[1400px]:w-1/2 flex justify-center md:justify-start"
                >
                  <div className={`relative w-[90%] md:w-full lg:max-w-[330px] xl:max-w-[370px] min-[1400px]:max-w-none aspect-[1.35/1] rounded-[2rem] lg:rounded-[1.4rem] xl:rounded-[1.6rem] min-[1400px]:rounded-[2rem] bg-[#F4EBE0] shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden flex items-center justify-center isolate group transition-all duration-700 ease-out hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] ${isImageLeft ? 'rotate-[-4deg] hover:rotate-0' : 'rotate-[4deg] hover:rotate-0'}`}>
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 lg:w-[56%] xl:w-[55%] min-[1400px]:w-1/2 flex flex-col items-start font-['Inter',sans-serif]">

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Title */}
                    <h2 className="text-[32px] md:text-[40px] lg:text-[26px] xl:text-[30px] min-[1400px]:text-[40px] font-extrabold text-[#43261a] tracking-tight leading-[1.05] mb-4 lg:mb-2 xl:mb-2.5 min-[1400px]:mb-4 font-['Manrope',sans-serif]">
                      {service.title}
                    </h2>
                    <div className="w-[50px] lg:w-[38px] xl:w-[44px] min-[1400px]:w-[50px] h-[3px] lg:h-[2.5px] xl:h-[3px] min-[1400px]:h-[3px] bg-[#f37636] mb-8 lg:mb-3.5 xl:mb-4.5 min-[1400px]:mb-8 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  >
                    {/* Subtitle */}
                    <h3 className="text-[1.3rem] md:text-[1.4rem] lg:text-[15px] xl:text-[17px] min-[1400px]:text-[1.4rem] font-bold text-[#71594d] mb-4 lg:mb-2 xl:mb-2.5 min-[1400px]:mb-4 tracking-tight">
                      {service.subtitle}
                    </h3>

                    {/* Paragraph */}
                    <p className="text-[#645c55] text-[1.05rem] lg:text-[13px] xl:text-[13px] min-[1400px]:text-[1.05rem] leading-[1.7] lg:leading-[1.5] xl:leading-[1.55] min-[1400px]:leading-[1.7] mb-8 lg:mb-3.5 xl:mb-4.5 min-[1400px]:mb-8 w-full">
                      {service.desc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    className="w-full"
                  >
                    {/* What We Create / Improve */}
                    <h4 className="text-[1.2rem] lg:text-[13.5px] xl:text-[14.5px] min-[1400px]:text-[1.2rem] font-bold text-[#0e747c] mb-5 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-5">
                      {service.featuresTitle || "What We Create"}
                    </h4>

                    {/* Features List (Desktop 2-Col Grid, Mobile Continuous Looping Single Row) */}
                    <ServiceFeatures features={service.features} />

                    {/* Extra Description (Optional) */}
                    {service.extraDesc && (
                      <p className="text-[#645c55] text-[1.05rem] lg:text-[13px] xl:text-[13px] min-[1400px]:text-[1.05rem] leading-[1.7] lg:leading-[1.5] xl:leading-[1.55] min-[1400px]:leading-[1.7] mb-12 lg:mb-5 xl:mb-6 min-[1400px]:mb-12 w-full">
                        {service.extraDesc}
                      </p>
                    )}

                    {/* Bottom CTA */}
                    <div className="flex flex-row items-center justify-between sm:justify-end gap-2.5 sm:gap-5 lg:gap-3 xl:gap-4 min-[1400px]:gap-5 w-full mt-4 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-4">
                      <span className="text-[#43261a] font-bold text-[0.85rem] sm:text-[1rem] lg:text-[12.5px] xl:text-[13px] min-[1400px]:text-[1rem] leading-snug">
                        {service.ctaText}
                      </span>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center bg-[#0e747c] hover:bg-[#0a575d] text-white font-bold py-1 sm:py-1.5 lg:py-1 xl:py-1 pl-3.5 sm:pl-6 lg:pl-3.5 xl:pl-4 pr-1 sm:pr-1.5 lg:pr-1 xl:pr-1 min-[1400px]:py-1.5 min-[1400px]:pl-6 min-[1400px]:pr-1.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(14,116,124,0.35)] hover:shadow-[0_6px_20px_rgba(14,116,124,0.45)] hover:-translate-y-0.5 whitespace-nowrap shrink-0 text-xs sm:text-base lg:text-[12.5px] xl:text-[13px] min-[1400px]:text-base"
                      >
                        Let's Talk
                        <span className="ml-2.5 sm:ml-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-7.5 xl:h-7.5 min-[1400px]:w-10 min-[1400px]:h-10 bg-white rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <Image
                            src="/icons/contact-3d.jpg"
                            alt="Contact Icon"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain p-[2px] sm:p-[3px] lg:p-[1.5px] xl:p-[2px] min-[1400px]:p-[3px]"
                          />
                        </span>
                      </Link>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Our Work / Clean Grid Section ──────────────── */}
      <section className="relative w-full pt-16 pb-32 lg:pt-10 lg:pb-20 xl:pt-12 xl:pb-24 min-[1400px]:pt-16 min-[1400px]:pb-32 flex flex-col items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-col items-center text-center px-6 max-w-[800px] mb-16 lg:mb-8 xl:mb-10 min-[1400px]:mb-16"
        >
          {/* Lined Badge */}
          <div className="flex items-center gap-6 lg:gap-3.5 xl:gap-4 min-[1400px]:gap-6 mb-6 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-6">
            <div className="h-[1px] w-12 md:w-20 lg:w-12 xl:w-14 min-[1400px]:w-20 bg-[#f37636]/30"></div>
            <span className="text-[0.95rem] lg:text-[11px] xl:text-[12px] min-[1400px]:text-[0.95rem] font-bold tracking-[0.2em] text-[#f37636] uppercase">
              OUR WORK
            </span>
            <div className="h-[1px] w-12 md:w-20 lg:w-12 xl:w-14 min-[1400px]:w-20 bg-[#f37636]/30"></div>
          </div>

          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[28px] xl:text-[32px] min-[1400px]:text-[4rem] font-extrabold text-[#43261a] tracking-tight leading-[1.1] lg:leading-[1.15] xl:leading-[1.15] min-[1400px]:leading-[1.1] mb-5 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-5 font-['Manrope',sans-serif]">
            See What We've <span className="text-[#0e747c]">Built</span>
          </h2>

          <p className="text-[#8c8275] text-[1.1rem] md:text-[1.25rem] lg:text-[13px] xl:text-[13px] min-[1400px]:text-[1.25rem] leading-[1.6] lg:leading-[1.5] xl:leading-[1.55] min-[1400px]:leading-[1.6] max-w-[640px] lg:max-w-[480px] xl:max-w-[520px] min-[1400px]:max-w-[640px] mb-10 lg:mb-5 xl:mb-6 min-[1400px]:mb-10">
            Take a look at some of the websites we've designed and developed for businesses.
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center gap-4 lg:gap-3 xl:gap-3.5 min-[1400px]:gap-4 bg-[#0e747c] hover:bg-[#0a575d] rounded-full py-1.5 lg:py-1 xl:py-1 pl-6 lg:pl-4 xl:pl-4.5 pr-1.5 lg:pr-1 xl:pr-1 min-[1400px]:py-1.5 min-[1400px]:pl-6 min-[1400px]:pr-1.5 transition-all duration-300 shadow-[0_8px_20px_rgba(14,116,124,0.25)] hover:shadow-[0_12px_25px_rgba(14,116,124,0.35)] hover:-translate-y-1"
          >
            <span className="text-[1.1rem] lg:text-[12.5px] xl:text-[13px] min-[1400px]:text-[1.1rem] font-bold text-white tracking-wide">
              View Our Work
            </span>
            <span className="flex items-center justify-center w-11 h-11 lg:w-7 lg:h-7 xl:w-7.5 xl:h-7.5 min-[1400px]:w-11 min-[1400px]:h-11 rounded-full bg-white shrink-0 overflow-hidden shadow-inner">
              <img
                src="/images/3d-icon-view-work.jpg"
                alt="Arrow Icon"
                className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-300"
              />
            </span>
          </Link>
        </motion.div>

        {/* Gallery Showcase (Mobile Carousel + Desktop 5-Column Grid) */}
        <ServiceWorkGallery service="online-advertising" />
      </section>
    </main>
  );
}
