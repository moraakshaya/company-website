"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceWorkGallery from "@/components/services/ServiceWorkGallery";
import ServiceFeatures from "@/components/services/ServiceFeatures";

/* ── shared style tokens (avoids repeating long strings) ── */
const headlineBase =
  "font-extrabold leading-[1.15] tracking-[-0.03em] md:tracking-[-0.02em] whitespace-nowrap text-[28px] md:text-[clamp(2.2rem,4.5vw,3.8rem)]";

const servicesData = [
  {
    num: "01",
    title: "Instagram Management",
    subtitle: "Keep Your Instagram Active & Professional",
    desc: "We manage your Instagram with regular, branded content that keeps your business visible and connected with customers.",
    featuresTitle: "What We Provide",
    features: [
      "Post design & planning",
      "Reels & stories",
      "Captions & hashtags",
      "Profile updates",
      "Content scheduling",
      "Regular posting"
    ],
    ctaText: "Want to keep your Instagram active?",
    imageSrc: "/services/social-media/instagram-managament.png"
  },
  {
    num: "02",
    title: "Facebook Management",
    subtitle: "Keep Your Facebook Page Up to Date",
    desc: "We manage your Facebook page with regular content that helps you showcase your products, services, offers, and business updates.",
    featuresTitle: "What We Provide",
    features: [
      "Post design",
      "Promotional content",
      "Product & service posts",
      "Reels & videos",
      "Captions & hashtags",
      "Regular posting"
    ],
    ctaText: "Need help managing your Facebook page?",
    imageSrc: "/home-page/hero-section/slide-2/businesscard.png"
  },
  {
    num: "03",
    title: "Post Design & Video Editing",
    subtitle: "Create Content That Represents Your Business",
    desc: "We create professional social media designs and videos to showcase your business, products, services, offers, and updates.",
    featuresTitle: "What We Provide",
    features: [
      "Social media post designs",
      "Promotional creatives",
      "Product & service posts",
      "Offer & announcement posts",
      "Festival creatives",
      "Video editing"
    ],
    ctaText: "Need better content for your business?",
    imageSrc: "/services/social-media/posts.png"
  },
  {
    num: "04",
    title: "Reels",
    subtitle: "Turn Your Ideas Into Reels",
    desc: "We create short videos that help you showcase your products, services, offers, work, and business moments on social media.",
    featuresTitle: "What We Create",
    features: [
      "Promotional reels",
      "Product & service reels",
      "Educational reels",
      "Business introduction reels",
      "Event & celebration reels",
      "Short video edits"
    ],
    ctaText: "Have an idea for a reel?",
    imageSrc: "/services/social-media/reels.png"
  },
  {
    num: "05",
    title: "Social Media Strategy",
    subtitle: "Give Your Social Media a Clear Direction",
    desc: "We create a practical content plan based on your business, services, audience, and goals.",
    featuresTitle: "What We Plan",
    features: [
      "Content themes",
      "Content types",
      "Posting frequency",
      "Promotional content",
      "Educational content",
      "Campaign ideas"
    ],
    ctaText: "Not sure what to post?",
    imageSrc: "/services/social-media/Strategy.png"
  },
  {
    num: "06",
    title: "Content Calendar",
    subtitle: "Plan Your Content in Advance",
    desc: "We create a monthly content calendar so your social media stays organised, consistent, and ready to post.",
    featuresTitle: "What We Plan",
    features: [
      "Monthly content calendar",
      "Post topics",
      "Reels ideas",
      "Promotional posts",
      "Festival & occasion posts",
      "Product & service highlights"
    ],
    ctaText: "Want your content planned ahead?",
    imageSrc: "/services/social-media/content-calender.png"
  }
];


export default function SocialMediaMarketingPage() {
  return (
    <main className="bg-[var(--bg-primary)] min-h-screen overflow-x-clip">
      {/* ── Hero section ─────────────────────────────────── */}
      <section
        className="relative w-full flex flex-col items-center justify-center h-[580px] sm:h-[620px] md:h-auto md:min-h-[100svh] pt-20 pb-6 md:pt-[120px] md:pb-32 px-4 sm:px-6 bg-gradient-to-b from-[#fff2e8] to-[var(--bg-primary)] overflow-hidden z-10"
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
            className="inline-flex items-center gap-1.5 border border-[#f37636]/20 rounded-full py-[5px] md:py-[6px] px-[16px] md:px-[18px] text-[0.68rem] md:text-[0.72rem] font-bold tracking-[0.12em] text-[#f37636] bg-[#f37636]/10 backdrop-blur-md mb-3 md:mb-7"
          >
            <span className="text-[#f37636] text-[0.85rem]">✦</span>
            SOCIAL MEDIA &amp; CONTENT MARKETING
          </motion.div>

          {/* ── Headline ───────────────────────────────────── */}
          <div className="w-full mb-3 md:mb-7 flex flex-col items-center">
            {/* Line 1 — inline */}
            <div className="flex items-center justify-center max-w-full px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-14 md:h-14 shrink-0 -mt-2 md:-mt-8 mr-1 md:mr-4 pointer-events-none"
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
                Keep Your Business
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-14 md:h-14 shrink-0 -mt-2 md:-mt-8 ml-1 md:ml-4 pointer-events-none"
              >
                <img
                  src="/services/logo-branding/threelines.png"
                  alt="Decorative spark"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Line 2 — "Around Your Business" + solid teal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center text-center max-w-full px-2"
            >
              <span
                className={`${headlineBase} bg-clip-text text-transparent text-center`}
                style={{
                  backgroundImage: "linear-gradient(to right, #f37636 0%, #e25b16 50%, #d04602 100%)",
                }}
              >
                Active and Visible Online
              </span>
            </motion.div>
          </div>

          {/* ── Body copy ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-1.5 md:gap-2.5 mb-4 md:mb-9 px-2 md:px-0"
          >
            <p className="text-[13px] sm:text-[14px] md:text-[clamp(0.95rem,1.6vw,1.05rem)] leading-relaxed md:leading-[1.65] text-[hsl(25,15%,38%)] text-center max-w-[690px]">
              We help businesses manage their social media with regular content, creative designs, videos, and a clear plan that keeps their audience connected with the business.
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
              className="inline-flex items-center gap-2.5 md:gap-3 rounded-full py-1.5 md:py-2 pr-1.5 md:pr-2 pl-5 md:pl-6 no-underline transition-all duration-200 shadow-[0_10px_24px_rgba(210,170,140,0.3)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(210,170,140,0.4)] active:scale-[0.97] group bg-gradient-to-r from-[#fc9153] to-[#f37636]"
            >
              <span className="font-extrabold text-[14px] md:text-[15px] text-white tracking-[0.01em]">
                Talk to Us →
              </span>
              <span className="flex items-center justify-center w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full bg-[#fdf9f1] shrink-0 transition-transform duration-200 group-hover:scale-105">
                <div
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
                  style={{
                    backgroundColor: '#f37636',
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

      {/* ── Services Sections ──────────────────────── */}
      <div className="flex flex-col gap-24 md:gap-32 pb-48 -mt-4 md:-mt-12 px-4 md:px-8 lg:px-12 xl:px-0">
        {servicesData.map((service, index) => {
          // even index (0, 2, 4...) -> Image Left
          // odd index (1, 3, 5...) -> Image Right
          const isImageLeft = index % 2 === 0;

          return (
            <section key={service.num} className="sticky top-6 md:top-12 w-full z-10 mx-auto max-w-[1100px] bg-[#fffff0]/70 backdrop-blur-2xl border border-white/60 pt-10 md:pt-12 pb-16 md:pb-20 px-6 md:px-10 overflow-hidden rounded-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)]">

              {/* Top Left Number Indicator */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-1 font-black text-2xl tracking-tight z-30">
                <span className="text-[#0e747c]">{service.num}</span>
                <span className="text-[#f37636] mx-1">/</span>
                <span className="text-[#a49a93] text-xl">0{servicesData.length}</span>
              </div>

              <div className={`w-full flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 lg:gap-14 mt-8 md:mt-12 relative z-20`}>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-1/2 flex justify-center md:justify-start"
                >
                  <div className={`relative w-[90%] md:w-full aspect-[1.35/1] rounded-[2rem] bg-[#F4EBE0] shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden flex items-center justify-center isolate group transition-all duration-700 ease-out hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] ${isImageLeft ? 'rotate-[-4deg] hover:rotate-0' : 'rotate-[4deg] hover:rotate-0'}`}>
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 flex flex-col items-start font-['Inter',sans-serif]">

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Title */}
                    <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#43261a] tracking-tight leading-[1.05] mb-4 font-['Manrope',sans-serif]">
                      {service.title}
                    </h2>
                    <div className="w-[50px] h-[3px] bg-[#f37636] mb-8 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  >
                    {/* Subtitle */}
                    <h3 className="text-[1.3rem] md:text-[1.4rem] font-bold text-[#71594d] mb-4 tracking-tight">
                      {service.subtitle}
                    </h3>

                    {/* Paragraph */}
                    <p className="text-[#645c55] text-[1.05rem] leading-[1.7] mb-8 w-full">
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
                    <h4 className="text-[1.2rem] font-bold text-[#0e747c] mb-5">
                      {service.featuresTitle || "What We Create"}
                    </h4>

                    {/* Features List (Desktop 2-Col Grid, Mobile Continuous Looping Single Row) */}
                    <ServiceFeatures features={service.features} />

                    {/* Extra Description (Optional) */}
                    {service.extraDesc && (
                      <p className="text-[#645c55] text-[1.05rem] leading-[1.7] mb-12 w-full">
                        {service.extraDesc}
                      </p>
                    )}

                    {/* Bottom CTA */}
                    <div className="flex flex-row items-center justify-between sm:justify-end gap-2.5 sm:gap-5 w-full mt-4">
                      <span className="text-[#43261a] font-bold text-[0.85rem] sm:text-[1rem] leading-snug">
                        {service.ctaText}
                      </span>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center bg-[#0e747c] hover:bg-[#0a575d] text-white font-bold py-1 sm:py-1.5 pl-3.5 sm:pl-6 pr-1 sm:pr-1.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(14,116,124,0.35)] hover:shadow-[0_6px_20px_rgba(14,116,124,0.45)] hover:-translate-y-0.5 whitespace-nowrap shrink-0 text-xs sm:text-base"
                      >
                        Let's Talk
                        <span className="ml-2.5 sm:ml-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <Image
                            src="/icons/contact-3d.jpg"
                            alt="Contact Icon"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain p-[2px] sm:p-[3px]"
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
      <section className="relative w-full pt-16 pb-32 flex flex-col items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-col items-center text-center px-6 max-w-[800px] mb-16"
        >
          {/* Lined Badge */}
          <div className="flex items-center gap-6 mb-6">
            <div className="h-[1px] w-12 md:w-20 bg-[#f37636]/30"></div>
            <span className="text-[0.95rem] font-bold tracking-[0.2em] text-[#f37636] uppercase">
              OUR WORK
            </span>
            <div className="h-[1px] w-12 md:w-20 bg-[#f37636]/30"></div>
          </div>

          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold text-[#43261a] tracking-tight leading-[1.1] mb-5 font-['Manrope',sans-serif]">
            See What We've <span className="text-[#0e747c]">Built</span>
          </h2>

          <p className="text-[#8c8275] text-[1.1rem] md:text-[1.25rem] leading-[1.6] max-w-[640px] mb-10">
            Take a look at some of the websites we've designed and developed for businesses.
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center gap-4 bg-[#0e747c] hover:bg-[#0a575d] rounded-full py-1.5 pl-6 pr-1.5 transition-all duration-300 shadow-[0_8px_20px_rgba(14,116,124,0.25)] hover:shadow-[0_12px_25px_rgba(14,116,124,0.35)] hover:-translate-y-1"
          >
            <span className="text-[1.1rem] font-bold text-white tracking-wide">
              View Our Work
            </span>
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white shrink-0 overflow-hidden shadow-inner">
              <img
                src="/services/social-media/3d-icon-view-work.jpg"
                alt="Arrow Icon"
                className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-300"
              />
            </span>
          </Link>
        </motion.div>

        {/* Gallery Showcase (Mobile Carousel + Desktop 5-Column Grid) */}
        <ServiceWorkGallery service="social-media" />
      </section>
    </main>
  );
}
