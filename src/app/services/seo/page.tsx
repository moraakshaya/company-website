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
    title: "Local SEO",
    subtitle: "Help Local Customers Find Your Business",
    desc: "We improve your local online presence so customers can find your business when searching for products and services in your area.",
    featuresTitle: "What We Provide",
    features: [
      "Local search optimisation",
      "Location-based keywords",
      "Local business listings",
      "Business information updates",
      "Location-focused content",
      "Local search visibility"
    ],
    ctaText: "Want more local visibility?",
    imageSrc: "/home-page/hero-section/slide-2/campaign-ads.png"
  },
  {
    num: "02",
    title: "Google Business Profile",
    subtitle: "Make Your Business Easier to Find on Google",
    desc: "We optimise your Google Business Profile with accurate information, services, photos, and updates to help customers find and contact your business.",
    featuresTitle: "What We Provide",
    features: [
      "Profile setup & optimisation",
      "Business information",
      "Services & categories",
      "Business descriptions",
      "Photos & updates",
      "Review management"
    ],
    ctaText: "Need help with your Google Business Profile?",
    imageSrc: "/home-page/hero-section/slide-2/businesscard.png"
  },
  {
    num: "03",
    title: "Website SEO",
    subtitle: "Help Your Website Get Found in Search",
    desc: "We optimise your website content and structure to make your pages more search-friendly and easier for customers to discover.",
    featuresTitle: "What We Provide",
    features: [
      "Page titles & descriptions",
      "Keyword optimisation",
      "Heading structure",
      "Website content",
      "Image optimisation",
      "Internal linking",
      "URL optimisation",
      "Backlink building"
    ],
    ctaText: "Want your website to be more search-friendly?",
    imageSrc: "/home-page/hero-section/slide-2/menucard.png"
  },
  {
    num: "04",
    title: "SEO Monitoring",
    subtitle: "Keep Track of Your SEO Progress",
    desc: "We monitor your website's search performance and key SEO areas to identify improvements and areas that need attention.",
    featuresTitle: "What We Monitor",
    features: [
      "Keyword positions",
      "Search visibility",
      "Website traffic",
      "Search performance",
      "Website pages",
      "Backlinks",
      "Technical issues"
    ],
    ctaText: "Want to track your SEO progress?",
    imageSrc: "/home-page/hero-section/slide-2/posters-design.png"
  },
  {
    num: "05",
    title: "Keyword Research",
    subtitle: "Find What Your Customers Are Searching For",
    desc: "We research relevant keywords based on your business, services, products, location, and what your customers are searching for.",
    featuresTitle: "What We Research",
    features: [
      "Business keywords",
      "Local search terms",
      "Service keywords",
      "Product keywords",
      "Long-tail keywords",
      "Location-based keywords",
      "Search opportunities"
    ],
    ctaText: "Not sure what your customers search for?",
    imageSrc: "/home-page/hero-section/slide-2/campaign-ads.png"
  },
  {
    num: "06",
    title: "Content Strategy",
    subtitle: "Create Content With a Clear Purpose",
    desc: "We plan useful content around your business, keywords, services, and customer searches to support your SEO and online visibility.",
    featuresTitle: "What We Plan",
    features: [
      "Website content",
      "Blog topics",
      "Service page content",
      "Location-based content",
      "Educational topics",
      "Keyword-focused content",
      "Monthly content ideas"
    ],
    ctaText: "Need ideas for what to publish?",
    imageSrc: "/home-page/hero-section/slide-2/businesscard.png"
  },
  {
    num: "07",
    title: "Technical SEO",
    subtitle: "Build a Strong SEO Foundation",
    desc: "We improve the technical parts of your website that help search engines crawl, understand, and index your pages.",
    featuresTitle: "What We Work On",
    features: [
      "Website structure",
      "Page speed",
      "Mobile responsiveness",
      "Broken links",
      "Sitemap & robots.txt",
      "Indexing issues",
      "Technical checks"
    ],
    ctaText: "Think something is affecting your SEO?",
    imageSrc: "/home-page/hero-section/slide-2/menucard.png"
  }
];

export default function SeoPage() {
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
            className="inline-flex items-center gap-1.5 border border-[#df6c37]/20 rounded-full py-[5px] md:py-[6px] px-[16px] md:px-[18px] text-[0.68rem] md:text-[0.72rem] font-bold tracking-[0.12em] text-[#df6c37] bg-[#df6c37]/10 backdrop-blur-md mb-3 md:mb-7"
          >
            <span className="text-[#df6c37] text-[0.85rem]">✦</span>
            SEO &amp; ONLINE VISIBILITY
          </motion.div>

          {/* ── Headline ───────────────────────────────────── */}
          <div className="w-full mb-3 md:mb-7 flex flex-col items-center">

            {/* Line 1 — star + "Give Your Business" inline */}
            {/* Line 1 — star + "Help More People" inline */}
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
                Help More People
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

            {/* Line 2 — "a Look People Remember" + threelines accent */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center text-center max-w-full px-2"
            >
              <span
                className={`${headlineBase} bg-clip-text text-transparent text-center`}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #e87b46 0%, #df6c37 50%, #c9501a 100%)",
                }}
              >
                Find Your Business Online
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
              We help businesses improve their online visibility so potential customers can find their website, services, and business when they search online.
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
              className="inline-flex items-center gap-2.5 md:gap-3 rounded-full py-1.5 md:py-2 pr-1.5 md:pr-2 pl-5 md:pl-6 no-underline transition-all duration-200 shadow-[0_10px_24px_rgba(223,108,55,0.3)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(223,108,55,0.4)] active:scale-[0.97] group bg-gradient-to-r from-[#f29367] to-[#df6c37]"
            >
              <span className="font-extrabold text-[14px] md:text-[15px] text-white tracking-[0.01em]">
                Talk to Us →
              </span>
              <span className="flex items-center justify-center w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full bg-[#fdf6f2] shrink-0 transition-transform duration-200 group-hover:scale-105">
                <div
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
                  style={{
                    backgroundColor: '#df6c37',
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
                    {/* What We Create */}
                    <h4 className="text-[1.2rem] font-bold text-[#0e747c] mb-5">
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
                      <p className="text-[#645c55] text-[1.05rem] leading-[1.7] mb-8 w-full">
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
            See What We <span className="text-[#0e747c]">Create</span>
          </h2>

          <p className="text-[#8c8275] text-[1.1rem] md:text-[1.25rem] leading-[1.6] max-w-[640px] mb-10">
            From complete brand identities to individual business materials, explore some of the creative work we've created for businesses.
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
                src="/images/3d-icon-view-work.jpg"
                alt="Arrow Icon"
                className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-300"
              />
            </span>
          </Link>
        </motion.div>

        {/* Gallery Showcase (Mobile Carousel + Desktop 5-Column Grid) */}
        <ServiceWorkGallery service="seo" />
      </section>

    </main>
  );
}
