"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ABOUT_FEATURES = [
  {
    title: "Creative",
    desc: "Ideas designed to make your business stand out.",
    iconBg: "bg-[#ffdebe]/80",
    iconColor: "text-[#ea580c]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: "Practical",
    desc: "Solutions built around what your business actually needs.",
    iconBg: "bg-[#d0eef0]",
    iconColor: "text-[#047880]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Growth-Focused",
    desc: "Digital work designed to help you reach and connect with customers.",
    iconBg: "bg-[#ede5f6]",
    iconColor: "text-[#7c3aed]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const AboutVisual = () => (
  <div className="relative w-full max-w-[650px] aspect-[4/3] overflow-visible">
    {/* Layer 1: Background Blob & Icons — upper area */}
    <div className="absolute z-0" style={{ top: '-5%', right: '-8%', width: '90%', height: '80%' }}>
      <Image
        src="/images/about-bg-new.png"
        alt="Background elements"
        fill
        className="object-contain object-top"
        priority
      />
    </div>

    {/* Layer 2: Wooden Desk Base */}
    <div
      className="absolute z-10"
      style={{
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '55%',
      }}
    >
      <Image
        src="/images/about-desk-new.png"
        alt="Wooden desk base"
        fill
        className="object-fill"
        priority
      />
    </div>

    {/* Layer 3: Laptop covers the join between blob and desk */}
    <div className="absolute inset-0 z-20 scale-[0.88] translate-y-[12%] translate-x-[4%]">
      <Image
        src="/images/about-laptop-img.png"
        alt="About Prodbiz Solutions"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
);

const About = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#fffff0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-0">

          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2">
            <p className="section-label mb-4">WHO WE ARE</p>
            <h2 className="w-full section-title text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#492c28] mb-6 leading-[1.1] tracking-tight">
              More Than Just a <br className="hidden md:block" />
              <span className="text-[#047880]">Digital Agency<span className="text-[#ff863c]">.</span></span>
            </h2>

            {/* Visual: Mobile only (rendered directly below heading) */}
            <div className="block lg:hidden my-8 w-full max-w-[500px] mx-auto">
              <AboutVisual />
            </div>

            <div className="text-lg text-[#492c28]/80 leading-relaxed mb-10 space-y-4 max-w-[650px]">
              <p>
                Prodbiz Solutions helps businesses build a professional and effective presence in the digital world. From branding and websites to social media and online marketing, we bring creative thinking and practical digital solutions together under one roof.
              </p>
              <p>
                Whether you&apos;re a local business looking for a single creative or a growing company looking for a complete digital solution, we work around your business needs.
              </p>
            </div>

            {/* Feature Icons Row (Desktop View) */}
            <div className="hidden sm:flex flex-row gap-6 mb-12 max-w-[650px]">
              {ABOUT_FEATURES.map((item, idx) => (
                <div key={idx} className="flex-1">
                  <div className={`w-12 h-12 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[17px] font-bold text-[#492c28] mb-2">{item.title}</h4>
                  <p className="text-[15px] text-[#492c28]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Icons Row (Mobile View — Single Row Looping Continuously) */}
            <div className="block sm:hidden w-full overflow-hidden mb-12 py-1 relative [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
              <motion.div
                className="flex items-start gap-8 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 16,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...ABOUT_FEATURES, ...ABOUT_FEATURES].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[220px] shrink-0 flex flex-col justify-start"
                  >
                    <div className={`w-12 h-12 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-4 shrink-0`}>
                      {item.icon}
                    </div>
                    <h4 className="text-[17px] font-bold text-[#492c28] mb-2">{item.title}</h4>
                    <p className="text-[15px] text-[#492c28]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <Link href="/about" className="group inline-flex items-center gap-3 bg-[#047880] text-white pl-7 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-[#114e4b] transition-all hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-lg whitespace-nowrap">
              More About Prodbiz
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center relative z-10 border border-black/5 group-hover:scale-110 transition-transform">
                <Image src="/home-page/about/about-arrow-3d.jpg" alt="Arrow Icon" width={40} height={40} className="w-full h-full object-contain p-0.5 group-hover:animate-ring" />
              </div>
            </Link>
          </div>

          {/* Right Column: Visuals (Desktop only) */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
            <AboutVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
