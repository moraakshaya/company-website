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
    title: "Business Website",
    subtitle: "Give Your Business a Professional Online Presence",
    desc: "We create professional websites that clearly showcase your business, services, products, and information.",
    features: [
      "Company & business websites",
      "Service-based websites",
      "Multi-page websites",
      "Responsive designs",
      "Contact & enquiry sections",
      "Forms & integrations"
    ],
    ctaText: "Need a website for your business?",
    imageSrc: "/home-page/hero-section/slide-2/businesscard.png" // Replace with actual website design image later
  },
  {
    num: "02",
    title: "Landing Pages",
    subtitle: "A Focused Page for Your Goal",
    desc: "We create focused landing pages for products, services, campaigns, and promotions designed to drive enquiries and actions.",
    features: [
      "Product & service pages",
      "Campaign landing pages",
      "Lead generation pages",
      "Promotional pages",
      "Call-to-action sections",
      "Contact & enquiry forms"
    ],
    ctaText: "Have something to promote?",
    imageSrc: "/home-page/hero-section/slide-2/posters-design.png" // Placeholder
  },
  {
    num: "03",
    title: "E-Commerce Website",
    subtitle: "Turn Your Products Into an Online Store",
    desc: "We create e-commerce websites where customers can browse your products, view details, add items to their cart, and place orders online.",
    features: [
      "Product pages & categories",
      "Online store",
      "Shopping cart & checkout",
      "Order management",
      "Payment gateway integration",
      "Mobile-friendly design"
    ],
    ctaText: "Ready to take your products online?",
    imageSrc: "/home-page/hero-section/slide-2/menucard.png" // Placeholder
  },
  {
    num: "04",
    title: "Website Redesign",
    subtitle: "Give Your Existing Website a Fresh Start",
    desc: "If your current website looks outdated, feels difficult to use, or no longer represents your business, we can redesign it with a cleaner and more modern look.",
    featuresTitle: "What We Improve",
    features: [
      "Website design & layout",
      "Mobile responsiveness",
      "Navigation & structure",
      "Content presentation",
      "User experience",
      "Calls to action"
    ],
    ctaText: "Ready to refresh your website?",
    imageSrc: "/home-page/hero-section/slide-2/campaign-ads.png" // Placeholder
  },
  {
    num: "05",
    title: "Website Maintenance",
    subtitle: "Keep Your Website Running Smoothly",
    desc: "A website needs attention even after it goes live. We help keep your website updated with the changes, content, and improvements your business needs over time.",
    featuresTitle: "What We Can Help With",
    features: [
      "Content & image updates",
      "Page and product updates",
      "Fixing website issues",
      "Design & layout changes",
      "Forms and link checks",
      "General improvements"
    ],
    ctaText: "Need a website update?",
    imageSrc: "/home-page/hero-section/slide-2/campaign-ads.png" // Placeholder
  }
];


export default function WebsiteDesignPage() {
  return (
    <main className="bg-[var(--bg-primary)] min-h-screen overflow-x-clip">
      <section className="relative w-full flex flex-col items-center justify-center h-[580px] sm:h-[620px] md:h-auto md:min-h-[100svh] pt-20 pb-6 md:pt-[120px] md:pb-32 px-4 sm:px-6 bg-gradient-to-b from-[#fff2e8] to-[var(--bg-primary)] overflow-hidden z-10">
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
            className="inline-flex items-center gap-1.5 border border-[#c1deda] rounded-full py-[5px] md:py-[6px] px-[16px] md:px-[18px] text-[0.68rem] md:text-[0.72rem] font-bold tracking-[0.12em] text-[#0e747c] bg-[#e6f4f1] backdrop-blur-[6px] mb-3 md:mb-7"
          >
            <span className="text-[#f37636] text-[0.85rem]">✦</span>
            WEBSITE DESIGN &amp; DEVELOPMENT
          </motion.div>

          {/* ── Headline ───────────────────────────────────── */}
          <div className="w-full mb-3 md:mb-7 flex flex-col items-center">
            {/* Line 1 — inline */}
            <div className="flex items-center justify-center max-w-full px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-7 h-7 sm:w-12 sm:h-12 md:w-24 md:h-24 shrink-0 translate-y-1 sm:translate-y-3 md:translate-y-10 -mr-2 sm:-mr-3 md:-mr-10 pointer-events-none"
              >
                <img
                  src="/services/logo-branding/website-hero-right.png"
                  alt="Decorative icon"
                  className="w-full h-full object-contain"
                  style={{ transform: 'scaleX(-1.8) scaleY(1.8)' }}
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className={`${headlineBase} text-black relative z-10 text-center`}
              >
                Websites Built
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-7 h-7 sm:w-12 sm:h-12 md:w-24 md:h-24 shrink-0 translate-y-1 sm:translate-y-3 md:translate-y-10 -ml-2 sm:-ml-3 md:-ml-10 pointer-events-none"
              >
                <img
                  src="/services/logo-branding/website-hero-right.png"
                  alt="Decorative icon"
                  className="w-full h-full object-contain"
                  style={{ transform: 'scaleX(1.8) scaleY(1.8)' }}
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
              <span className={`${headlineBase} text-[#0e747c] text-center`}>
                Around Your Business
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
            <p className="text-[13px] sm:text-[14px] md:text-[clamp(0.95rem,1.6vw,1.05rem)] leading-relaxed text-[hsl(25,15%,38%)] text-center max-w-[690px]">
              We design and build professional websites that clearly show what your business does, make it easy for customers to find information, and work smoothly on phones, tablets, and computers.
            </p>
            <p className="text-[13px] sm:text-[14px] md:text-[clamp(0.95rem,1.6vw,1.05rem)] leading-relaxed text-[hsl(25,15%,38%)] text-center max-w-[690px] mt-0.5 md:mt-1">
              Whether you need a simple business website or a larger website for your growing company, we build it around your needs.
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
              className="inline-flex items-center gap-2.5 md:gap-3 rounded-full py-1.5 md:py-2 pr-1.5 md:pr-2 pl-5 md:pl-6 no-underline transition-all duration-200 shadow-[0_10px_24px_rgba(210,170,140,0.3)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(210,170,140,0.4)] active:scale-[0.97] group bg-gradient-to-r from-[#128a93] to-[#0a666e]"
            >
              <span className="font-extrabold text-[14px] md:text-[15px] text-white tracking-[0.01em]">
                Talk to Us →
              </span>
              <span className="flex items-center justify-center w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full bg-[#fdf9f1] shrink-0 transition-transform duration-200 group-hover:scale-105">
                <div
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
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
                src="/services/website-design/3d-icon-view-work.jpg"
                alt="Arrow Icon"
                className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-300"
              />
            </span>
          </Link>
        </motion.div>

        {/* Gallery Showcase (Mobile Carousel + Desktop 5-Column Grid) */}
        <ServiceWorkGallery service="website-design" />
      </section>
    </main>
  );
}
