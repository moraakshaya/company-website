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
    title: "Promotional Content",
    subtitle: "Give Your Business Something to Promote",
    desc: "We create content for offers, product launches, services, events, festivals, and important business announcements.",
    featuresTitle: "What We Create",
    features: [
      "Offer & promotional content",
      "Product & service promotions",
      "Festival & event content",
      "New launch content",
      "Discount campaigns",
      "Business announcements"
    ],
    ctaText: "Have something to promote?",
    imageSrc: "/services/content-creation/promotional.png"
  },
  {
    num: "02",
    title: "Ad Creatives",
    subtitle: "Create Ads That Get Attention",
    desc: "We create clear and engaging visuals and copy for Google, Instagram, Facebook, and other advertising campaigns.",
    featuresTitle: "What We Create",
    features: [
      "Ad graphics",
      "Promotional creatives",
      "Image & video ads",
      "Headlines & ad copy",
      "Call-to-action messaging",
      "Creative variations"
    ],
    ctaText: "Need creatives for your next ad campaign?",
    imageSrc: "/services/content-creation/ads.png"
  },
  {
    num: "03",
    title: "Blogs & Articles",
    subtitle: "Share Useful Information With Your Audience",
    desc: "We create easy-to-read blogs and articles that answer customer questions and share useful information about your business and industry.",
    featuresTitle: "What We Create",
    features: [
      "Business blogs",
      "Educational articles",
      "How-to articles",
      "Service-related content",
      "Industry topics",
      "SEO-friendly content"
    ],
    ctaText: "Have a topic you want to write about?",
    imageSrc: "/services/content-creation/blogs.png"
  },
  {
    num: "04",
    title: "Website Content",
    subtitle: "Make Your Website Easy to Understand",
    desc: "We create clear website content that helps visitors understand your business, services, products, and how to get in touch.",
    featuresTitle: "What We Create",
    features: [
      "Homepage content",
      "About Us content",
      "Service page content",
      "Product descriptions",
      "Landing page content",
      "FAQ & CTA content"
    ],
    ctaText: "Need content for your website?",
    imageSrc: "/services/content-creation/website.png"
  },
  {
    num: "05",
    title: "Social Media Content",
    subtitle: "Give Your Social Media Something to Share",
    desc: "We create useful and engaging content that helps your business stay active, promote services, and connect with customers online.",
    featuresTitle: "What We Create",
    features: [
      "Social media captions",
      "Informational posts",
      "Educational content",
      "Product & service content",
      "Promotional posts",
      "Festival & business updates"
    ],
    ctaText: "Need regular content for your social pages?",
    imageSrc: "/services/content-creation/social-media.png"
  },
  {
    num: "06",
    title: "Video Content",
    subtitle: "Turn Your Ideas Into Short Videos",
    desc: "We create short videos to showcase your products, services, offers, information, and business updates across social media and websites.",
    featuresTitle: "What We Create",
    features: [
      "Promotional videos",
      "Product & service videos",
      "Educational videos",
      "Business introduction videos",
      "Short-form videos",
      "Social media video content"
    ],
    ctaText: "Have an idea for a video?",
    imageSrc: "/services/content-creation/video.png"
  },
  {
    num: "07",
    title: "Content Strategy",
    subtitle: "Plan Content With a Clear Purpose",
    desc: "We create a practical content plan based on your business, audience, services, and marketing goals.",
    featuresTitle: "What We Plan",
    features: [
      "Content topics",
      "Content types",
      "Content themes",
      "Promotional topics",
      "Educational topics",
      "Blog & social media ideas",
      "Website content ideas"
    ],
    ctaText: "Not sure what content your business needs?",
    imageSrc: "/services/content-creation/content.png"
  }
];

export default function ContentCreationPage() {
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
            className="inline-flex items-center gap-1.5 border border-[#c1deda] rounded-full py-[5px] md:py-[6px] lg:py-1 xl:py-1 min-[1400px]:py-[6px] px-[16px] md:px-[18px] lg:px-3.5 xl:px-3.5 min-[1400px]:px-[18px] text-[0.68rem] md:text-[0.72rem] lg:text-[11px] xl:text-[11.5px] min-[1400px]:text-[0.72rem] font-bold tracking-[0.12em] text-[#0e747c] bg-[#e6f4f1] backdrop-blur-[6px] mb-3 md:mb-7 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-7"
          >
            <span className="text-[#f37636] text-[0.85rem] lg:text-[0.72rem] xl:text-[0.76rem] min-[1400px]:text-[0.85rem]">✦</span>
            CONTENT MARKETING
          </motion.div>

          {/* ── Headline ───────────────────────────────────── */}
          <div className="w-full mb-3 md:mb-7 lg:mb-2.5 xl:mb-3.5 min-[1400px]:mb-7 flex flex-col items-center">

            {/* Line 1 — star + "Create Content That" inline */}
            <div className="flex items-center justify-center max-w-full px-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-14 md:h-14 lg:w-10 lg:h-10 xl:w-12 xl:h-12 min-[1400px]:w-14 min-[1400px]:h-14 shrink-0 -mt-2 md:-mt-8 lg:-mt-4 xl:-mt-5 min-[1400px]:-mt-8 mr-1 md:mr-4 lg:mr-2 xl:mr-3 min-[1400px]:mr-4 pointer-events-none"
              >
                <img
                  src="/services/logo-branding/threelines.png"
                  alt="Decorative spark"
                  className="w-full h-full object-contain scale-x-[-1]"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className={`${headlineBase} text-[#1a1206] relative z-10 text-center`}
              >
                Create Content That
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-14 md:h-14 lg:w-10 lg:h-10 xl:w-12 xl:h-12 min-[1400px]:w-14 min-[1400px]:h-14 shrink-0 -mt-2 md:-mt-8 lg:-mt-4 xl:-mt-5 min-[1400px]:-mt-8 ml-1 md:ml-4 lg:ml-2 xl:ml-3 min-[1400px]:ml-4 pointer-events-none"
              >
                <img
                  src="/services/logo-branding/threelines.png"
                  alt="Decorative spark"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Line 2 — Solid Teal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center text-center max-w-full px-2"
            >
              <span className={`${headlineBase} text-[#128a93] text-center`}>
                Communicates Your Business
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
              Good content helps people understand your business, your services, and what you offer. We create useful, engaging, and business-focused content for websites, social media, advertisements, and promotions.
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
              className="inline-flex items-center gap-2.5 md:gap-3 rounded-full py-1.5 md:py-2 lg:py-1.5 xl:py-2 pr-1.5 md:pr-2 lg:pr-1.5 xl:pr-2 pl-5 md:pl-6 lg:pl-5 xl:pl-6 min-[1400px]:py-2 min-[1400px]:pr-2 min-[1400px]:pl-6 no-underline transition-all duration-200 shadow-[0_10px_24px_rgba(18,138,147,0.3)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(18,138,147,0.4)] active:scale-[0.97] group bg-gradient-to-r from-[#128a93] to-[#0a666e]"
            >
              <span className="font-extrabold text-[14px] md:text-[15px] lg:text-[14px] xl:text-[14.5px] min-[1400px]:text-[15px] text-white tracking-[0.01em]">
                Talk to Us →
              </span>
              <span className="flex items-center justify-center w-[36px] h-[36px] md:w-[42px] md:h-[42px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] min-[1400px]:w-[42px] min-[1400px]:h-[42px] rounded-full bg-white shrink-0 transition-transform duration-200 group-hover:scale-105">
                <div
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] min-[1400px]:w-[22px] min-[1400px]:h-[22px]"
                  style={{
                    backgroundColor: '#0a666e',
                    maskImage: 'url(/services/logo-branding/leaf.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url(/services/logo-branding/leaf.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── Services Sections (01 to 07) ──────────────────────── */}
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
                    {service.isCustomGraphic ? (
                      <>
                        {/* Laptop Corner (Top Right) */}
                        <div className="absolute top-0 right-0 w-[160px] h-[120px] bg-[#E8E8E8] rotate-[-20deg] translate-x-12 -translate-y-8 rounded-2xl shadow-xl border-l-[6px] border-b-[6px] border-white z-0">
                          {/* Keyboard lines */}
                          <div className="absolute bottom-[20px] left-[20px] w-[80px] h-[4px] bg-[#D0D0D0] rounded-full"></div>
                          <div className="absolute bottom-[35px] left-[20px] w-[60px] h-[4px] bg-[#D0D0D0] rounded-full"></div>
                        </div>

                        {/* Color Swatches (Bottom Right) */}
                        <div className="absolute right-[8%] bottom-[25%] rotate-[18deg] z-0 shadow-lg">
                          <div className="w-[90px] h-[28px] bg-[#0A6B73]"></div>
                          <div className="w-[90px] h-[28px] bg-[#F37636]"></div>
                          <div className="w-[90px] h-[28px] bg-[#E2D4C8]"></div>
                        </div>
                        <div className="absolute right-[5%] bottom-[12%] rotate-[-15deg] z-0 shadow-lg">
                          <div className="w-[70px] h-[45px] bg-[#C1B3C6]"></div>
                        </div>

                        {/* Dark Teal Shadow Card */}
                        <div className="absolute w-[78%] h-[78%] bg-[#07474C] rounded-[1.5rem] rotate-[-7deg] shadow-2xl translate-y-3 -translate-x-3 z-10"></div>

                        {/* Main Teal Card */}
                        <div className="absolute w-[78%] h-[78%] bg-[#0A6B73] rounded-[1.5rem] rotate-[-3deg] shadow-[0_15px_35px_rgba(10,107,115,0.4)] flex flex-col items-center justify-center border border-white/10 z-20 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">

                          {/* Logo Graphic */}
                          <div className="relative w-[80px] h-[80px] mb-5 flex items-center justify-center">
                            <div className="absolute top-[8%] left-[50%] -translate-x-1/2 w-[14px] h-[14px] bg-[#F4B083] rounded-full"></div>
                            <div className="absolute bottom-[8%] left-[12%] w-[35px] h-[48px] bg-[#EF7D3B] rounded-tl-[35px] rounded-bl-[15px] rounded-br-[35px] rounded-tr-[6px] rotate-[-5deg]"></div>
                            <div className="absolute bottom-[15%] right-[15%] w-[26px] h-[38px] bg-[#4FB3B8] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[10px] rounded-tl-[6px] rotate-[15deg]"></div>
                          </div>

                          {/* Text */}
                          <div className="text-[#f7f5f2] font-['Manrope',sans-serif] font-extrabold tracking-[0.25em] text-[1.3rem] mb-1.5 mt-2">YOUR BRAND</div>
                          <div className="text-white/70 font-['Inter',sans-serif] text-[0.65rem] tracking-[0.35em] uppercase font-medium">Tagline Here</div>
                        </div>
                      </>
                    ) : (
                      <Image
                        src={service.imageSrc || "/home-page/hero-section/slide-2/businesscard.png"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    )}
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
                    {/* What We Create */}
                    <h4 className="text-[1.2rem] lg:text-[13.5px] xl:text-[14.5px] min-[1400px]:text-[1.2rem] font-bold text-[#0e747c] mb-5 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-5">
                      What We Create
                    </h4>

                    {/* Features List OR Feature Blocks */}
                    {service.features ? (
                      <ServiceFeatures features={service.features} />
                    ) : (
                      <div className="flex flex-col gap-6 mb-12 w-full">
                        {service.featureBlocks?.map((block, idx) => (
                          <div key={idx}>
                            <h5 className="font-bold text-[#43261a] text-[1rem] mb-1.5">{block.title}</h5>
                            <p className="text-[#645c55] text-[0.95rem] leading-relaxed">{block.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Extra Description (e.g. Service 06) */}
                    {service.extraDesc && (
                      <p className="text-[#645c55] text-[1.05rem] lg:text-[13px] xl:text-[13px] min-[1400px]:text-[1.05rem] leading-[1.7] lg:leading-[1.5] xl:leading-[1.55] min-[1400px]:leading-[1.7] mb-8 lg:mb-3.5 xl:mb-4.5 min-[1400px]:mb-8 w-full">
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
            See What We <span className="text-[#0e747c]">Create</span>
          </h2>

          <p className="text-[#8c8275] text-[1.1rem] md:text-[1.25rem] lg:text-[13px] xl:text-[13px] min-[1400px]:text-[1.25rem] leading-[1.6] lg:leading-[1.5] xl:leading-[1.55] min-[1400px]:leading-[1.6] max-w-[640px] lg:max-w-[480px] xl:max-w-[520px] min-[1400px]:max-w-[640px] mb-10 lg:mb-5 xl:mb-6 min-[1400px]:mb-10">
            From complete brand identities to individual business materials, explore some of the creative work we've created for businesses.
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
                src="/services/social-media/3d-icon-view-work.jpg"
                alt="Arrow Icon"
                className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-300"
              />
            </span>
          </Link>
        </motion.div>

        {/* Gallery Showcase (Mobile Carousel + Desktop 5-Column Grid) */}
        <ServiceWorkGallery service="content-creation" />
      </section>

    </main>
  );
}
