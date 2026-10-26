"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// -----------------------------
// SLIDE 1: Web Design & Dev
// -----------------------------
function Slide1() {
  const serviceCards = [
    {
      id: 1,
      title: "CONTENT CREATION",
      image: "/images/slides/slide6.jpg",
    },
    {
      id: 2,
      title: "WEB DESIGN",
      image: "/images/slides/slide2.jpg",
    },
    {
      id: 3,
      title: "LOGO & BRANDING",
      image: "/images/slides/slide3.jpg",
    },
  ];

  return (
    <>
      {/* STATIC BACKGROUND — Atmospheric Developer Desk Workspace */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden bg-[#070b12]">
        <Image
          src="/images/slides/slide2.jpg"
          alt="Developer Workspace Hero Background"
          fill
          className="object-cover object-bottom brightness-[0.88] contrast-[1.06]"
          priority
        />
        {/* Directional gradient overlay: deep dark on left for text legibility, fading out smoothly to reveal the desk, laptop, mug & warm lighting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(7, 11, 18, 0.94) 0%, rgba(7, 11, 18, 0.85) 28%, rgba(7, 11, 18, 0.45) 55%, rgba(7, 11, 18, 0.12) 75%, transparent 100%)",
          }}
        />
        {/* Subtle top & bottom edge vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 11, 18, 0.35) 0%, transparent 25%, transparent 70%, rgba(7, 11, 18, 0.45) 100%)",
          }}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-between overflow-hidden rounded-3xl">
        {/* LEFT: TEXT */}
        <div className="w-full lg:w-auto lg:max-w-[440px] min-[1400px]:max-w-[540px] px-4 md:px-0 md:pl-[6%] lg:pl-[7%] xl:pl-[11%] min-[1400px]:pl-[8%] md:pr-4 text-white z-40 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Category Tag with Orange Bar */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2.5 lg:mb-3 min-[1400px]:mb-6">
            <span className="w-7 h-[3px] min-[1400px]:w-9 min-[1400px]:h-[3.5px] bg-[#ff7828] rounded-full inline-block shrink-0" />
            <span className="text-xs md:text-sm lg:text-[12.5px] min-[1400px]:text-sm font-bold tracking-[0.2em] uppercase text-[#ff7828]">
              Web Design & Development
            </span>
          </div>

          {/* Heading - Strictly 2 lines on all screens */}
          <h1 className="text-[clamp(1.75rem,3.2vw,3.8rem)] lg:text-[2.1rem] min-[1400px]:text-[clamp(1.75rem,4.4vw,3.8rem)] mb-2.5 lg:mb-3 min-[1400px]:mb-6 tracking-tight leading-[1.08] text-white select-none text-center md:text-left">
            {/* Line 1: We Build Websites. (Cyan brush script with sparks) */}
            <div className="flex items-end justify-center md:justify-start whitespace-nowrap gap-x-2 md:gap-x-2.5 min-[1400px]:gap-x-3 mb-1.5 lg:mb-2 min-[1400px]:mb-4.5">
              <span className="font-bold">We Build</span>
              <span
                className="text-[#00bee8] font-normal relative inline-block pr-4 md:pr-5 select-none leading-none"
                style={{
                  fontFamily: "'Playlist', cursive",
                  fontSize: "1.18em",
                }}
              >
                Websites.

                {/* 3 Accent Lines Effect (Sparks radiating upward and outward above 'tes.') */}
                <svg
                  className="absolute top-[-2px] md:top-[-4px] lg:top-[-4px] min-[1400px]:lg:top-[-6px] -right-1 md:-right-2 lg:-right-2 min-[1400px]:lg:-right-2.5 w-7 h-6 md:w-8 md:h-7 lg:w-8 lg:h-7 min-[1400px]:lg:w-9 min-[1400px]:lg:h-8 text-[#ff7828] overflow-visible pointer-events-none"
                  viewBox="0 0 32 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                >
                  {/* Left ray: steep upright (~75deg) */}
                  <line x1="7" y1="21" x2="11" y2="6" />
                  {/* Middle ray: diagonal (~45deg) */}
                  <line x1="13" y1="19" x2="23" y2="8" />
                  {/* Right ray: gentle slant out over dot (~18deg) */}
                  <line x1="17" y1="21" x2="29" y2="17" />
                </svg>
              </span>
            </div>

            {/* Line 2: You Build Business. (Cyan brush script with sparks & underline) */}
            <div className="flex items-end justify-center md:justify-start whitespace-nowrap gap-x-2 md:gap-x-2.5 min-[1400px]:gap-x-3">
              <span className="font-black">You Build</span>
              <span
                className="text-[#00bee8] font-normal relative inline-block pr-4 md:pr-5 select-none leading-none"
                style={{
                  fontFamily: "'Playlist', cursive",
                  fontSize: "1.18em",
                }}
              >
                Business.

                {/* 3 Accent Lines Effect (Sparks radiating upward and outward above 'ss.' and over the dot) */}
                <svg
                  className="absolute top-[-2px] md:top-[-4px] lg:top-[-4px] min-[1400px]:lg:top-[-6px] -right-1 md:-right-2 lg:-right-2 min-[1400px]:lg:-right-2.5 w-7 h-6 md:w-8 md:h-7 lg:w-8 lg:h-7 min-[1400px]:lg:w-9 min-[1400px]:lg:h-8 text-[#ff7828] overflow-visible pointer-events-none"
                  viewBox="0 0 32 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                >
                  {/* Left ray: steep upright above second s (~75deg) */}
                  <line x1="7" y1="21" x2="11" y2="6" />
                  {/* Middle ray: diagonal (~45deg) */}
                  <line x1="13" y1="19" x2="23" y2="8" />
                  {/* Right ray: gentle slant out over dot (~18deg) */}
                  <line x1="17" y1="21" x2="29" y2="17" />
                </svg>

                {/* Orange Brush Stroke Underline beneath 'Business.' */}
                <svg
                  className="absolute -bottom-2 md:-bottom-2.5 min-[1400px]:md:-bottom-3 left-0 w-full h-[14px] lg:h-[16px] min-[1400px]:h-[22px] text-[#ff7828] pointer-events-none overflow-visible"
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M10,18 C50,14 130,9 285,10 C295,10 297,11 292,12 C260,15 160,21 18,24 C10,24 8,20.5 10,18 Z" />
                  <path d="M230,14 C255,14 280,13 294,12 C296,12 295,13.2 288,14 C268,16 242,17 230,16 Z" opacity="0.85" />
                </svg>
              </span>
            </div>
          </h1>

          <p className="text-sm md:text-base lg:text-[14px] min-[1400px]:text-lg mb-3 sm:mb-4 min-[1400px]:mb-8 text-white/80 font-normal max-w-lg leading-relaxed text-center md:text-left mx-auto md:mx-0">
            For shops, services, startups and companies.
          </p>

          {/* Action Buttons Row — Single row on mobile & desktop */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-4 md:gap-7 lg:gap-4 min-[1400px]:gap-7 flex-nowrap">
            {/* Build Your Website Button */}
            <button
              className="btn !min-h-10 sm:!min-h-12 lg:!min-h-10 min-[1400px]:!min-h-12 !h-10 sm:!h-12 lg:!h-10 min-[1400px]:!h-12 !p-0 !pl-3.5 sm:!pl-6 lg:!pl-4 min-[1400px]:!pl-6 flex items-center gap-2 sm:gap-4 lg:gap-3 min-[1400px]:gap-4 transition-transform hover:scale-105 group border-none shrink-0"
              style={{ backgroundColor: "var(--color-orange)", color: "var(--color-ivory)", borderRadius: "9999px" }}
            >
              <span className="font-bold text-[12px] sm:text-sm md:text-base lg:text-[13px] min-[1400px]:text-base whitespace-nowrap">Build Your Website</span>
              <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-9 lg:h-9 min-[1400px]:w-12 min-[1400px]:h-12 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center relative z-10 border border-black/5">
                <Image src="/icons/website-3d.jpg" alt="Website 3D Icon" width={48} height={48} className="w-full h-full object-contain p-1.5 sm:p-2 lg:p-1.5 min-[1400px]:p-2 group-hover:animate-ring" />
              </div>
            </button>

            {/* See Our Work Play Button */}
            <button className="flex items-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-2.5 min-[1400px]:gap-3.5 text-white hover:opacity-85 transition-opacity group cursor-pointer select-none shrink-0">
              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-8 lg:h-8 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full border-[1.5px] sm:border-[1.8px] border-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-black/10">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-3.5 lg:h-3.5 min-[1400px]:w-4 min-[1400px]:h-4 text-white fill-white ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5.14v13.72a1 1 0 001.5.86l11.45-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" />
                </svg>
              </div>
              <span className="font-semibold text-[12px] sm:text-sm md:text-[15px] lg:text-[13.5px] min-[1400px]:text-[15px] tracking-wide text-white whitespace-nowrap">
                See Our Work
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT: CARDS (Exact 1400px design with proportional fit for < 1400px) */}
        <div className="hidden lg:flex items-center justify-end flex-1 h-full pr-0 relative z-30">
          <div className="flex gap-4 lg:gap-5 min-[1400px]:gap-6 items-center shrink-0 transform scale-[0.8] lg:scale-[0.85] min-[1400px]:scale-100 origin-right translate-x-[41px] min-[1400px]:translate-x-[48px] transition-transform duration-300">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className="relative w-[240px] h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex-shrink-0"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover brightness-90 hover:brightness-110 transition-all duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// -----------------------------
// SLIDE 2: Logo & Branding (Original Reference Layout)
// -----------------------------
function Slide2() {
  return (
    <>
      {/* WARM CHOCOLATE BROWN BACKGROUND — matching Image 1 */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden" style={{ backgroundColor: "#6b2d14" }}>
        {/* Warm radial glow — centered warm depth */}
        <div
          className="absolute inset-0 pointer-events-none md:[background:radial-gradient(ellipse_70%_75%_at_65%_50%,#8c3d1e_0%,#7a3318_25%,#6b2d14_55%,#4a1e0a_80%,#361508_100%)] [background:radial-gradient(ellipse_80%_80%_at_50%_50%,#8c3d1e_0%,#7a3318_25%,#6b2d14_55%,#4a1e0a_80%,#361508_100%)]"
        />
        {/* Very faint grain/noise texture overlay for warm depth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center lg:flex-row items-center px-4 md:px-8 min-[1400px]:px-12 py-3 sm:py-4 md:py-5 min-[1400px]:py-6 overflow-hidden rounded-3xl">

        {/* LEFT: TEXT (48%) */}
        <div className="w-full lg:w-[48%] flex flex-col items-center md:items-start text-center md:text-left pt-2 sm:pt-4 lg:pt-0 lg:pl-[4%] xl:pl-[6%] min-[1400px]:pl-0 z-40 relative">
          {/* Category Tag with Orange Bar */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2.5 md:mb-3 min-[1400px]:mb-6">
            <span className="w-7 h-[3px] min-[1400px]:w-9 min-[1400px]:h-[3.5px] bg-[#ff7828] rounded-full inline-block shrink-0" />
            <span className="text-xs md:text-sm lg:text-[12.5px] min-[1400px]:text-sm font-bold tracking-[0.2em] uppercase text-[#ff7828]">
              Logo &amp; Branding
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[2.1rem] min-[1400px]:lg:text-[4rem] text-white tracking-tight leading-[1.08] mb-2.5 md:mb-3 min-[1400px]:mb-6 text-center md:text-left">
            {/* Line 1: From Logo */}
            <div className="flex items-end justify-center md:justify-start mb-1 min-[1400px]:mb-2">
              <span
                className="pb-1 text-white text-3xl md:text-4xl lg:text-[2.1rem] min-[1400px]:lg:text-[4rem] tracking-tight font-extrabold mr-2.5 md:mr-3 min-[1400px]:mr-4"
                style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", fontWeight: 800 }}
              >
                From
              </span>
              <span
                className="text-[#00bee8] text-4xl md:text-5xl lg:text-[2.5rem] min-[1400px]:lg:text-[4.8rem] font-normal relative inline-block select-none leading-none pr-3 md:pr-4"
                style={{ fontFamily: "'Playlist', cursive" }}
              >
                Logo

                {/* 3 Accent Lines Effect (Sparks - exactly at top corner of last 'o') */}
                <svg
                  className="absolute top-[8px] -right-[16px] md:top-[12px] md:-right-[20px] lg:top-[2px] lg:-right-[4px] w-7 h-6 md:w-8 md:h-7 lg:w-7 lg:h-6 min-[1400px]:lg:w-8 min-[1400px]:lg:h-7 text-[#ff7828] overflow-visible pointer-events-none"
                  viewBox="0 0 32 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                >
                  {/* Top line (short, steep ~78deg) */}
                  <line x1="8" y1="15" x2="10" y2="7" />
                  {/* Middle line (diagonal ~38deg, shortened) */}
                  <line x1="12" y1="16" x2="25" y2="6" />
                  {/* Bottom line (horizontal ~0deg, shortened) */}
                  <line x1="15" y1="21" x2="26" y2="21" />
                </svg>
              </span>
            </div>

            {/* Line 2: To Everything */}
            <div
              className="mb-1 min-[1400px]:mb-2 text-white text-3xl md:text-4xl lg:text-[2.1rem] min-[1400px]:lg:text-[4rem] tracking-tight font-extrabold text-center md:text-left"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", fontWeight: 800 }}
            >
              To Everything
            </div>

            {/* Line 3: Brand. (Electric cyan brush script with orange brush underline) */}
            <div className="flex justify-center md:justify-start">
              <div
                className="text-[#00bee8] text-4xl md:text-5xl lg:text-[2.5rem] min-[1400px]:lg:text-[5.2rem] font-normal relative inline-block pr-6 tracking-normal select-none leading-none mt-0.5 min-[1400px]:mt-1"
                style={{ fontFamily: "'Playlist', cursive" }}
              >
                Branding.

                {/* Orange Brush Stroke Underline beneath 'Brand.' */}
                <svg
                  className="absolute -bottom-2 md:-bottom-2.5 min-[1400px]:md:-bottom-3 left-0 w-full h-[14px] lg:h-[16px] min-[1400px]:h-[22px] text-[#ff7828] pointer-events-none overflow-visible"
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  {/* Main sweeping brush stroke */}
                  <path d="M10,18 C50,14 130,9 285,10 C295,10 297,11 292,12 C260,15 160,21 18,24 C10,24 8,20.5 10,18 Z" />
                  {/* Tapered bottom dry brush whisker */}
                  <path d="M230,14 C255,14 280,13 294,12 C296,12 295,13.2 288,14 C268,16 242,17 230,16 Z" opacity="0.85" />
                </svg>
              </div>
            </div>
          </h1>

          <p className="text-xs md:text-sm lg:text-[14px] min-[1400px]:text-lg max-w-lg text-white/90 font-normal leading-relaxed mt-2 min-[1400px]:mt-4 text-center md:text-left mx-auto md:mx-0">
            From your first logo to the designs that represent and promote your business, we make <span className="text-[#00bee8] font-bold">your brand</span> look professional and consistent.
          </p>
        </div>

        {/* RIGHT: EXACT SCATTERED COLLAGE (52%) — Low opacity background on mobile, right column on desktop */}
        <div className="absolute inset-0 md:relative md:inset-auto w-full md:w-[52%] h-full flex items-center justify-center md:justify-end lg:justify-center min-[1400px]:justify-end pr-0 lg:pr-0 min-[1400px]:pr-12 pointer-events-none md:pointer-events-auto overflow-visible">

          {/* Fixed coordinate space so collage elements never separate */}
          <div className="relative w-[500px] h-[540px] shrink-0 transform scale-[0.52] sm:scale-[0.6] md:scale-[0.65] lg:scale-[0.72] min-[1400px]:scale-[0.84] 2xl:scale-[0.9] origin-center md:origin-right lg:origin-center min-[1400px]:origin-right translate-x-0 md:translate-x-0 lg:-translate-x-8 xl:-translate-x-14 min-[1400px]:translate-x-0 opacity-20 sm:opacity-25 md:opacity-100 transition-opacity duration-300">

            {/* Decorative Sparks Matching Reference Image 2 */}
            {/* Orange Sparks (Left of White Card - Exact Match to Image 2) */}
            <div className="absolute top-[105px] -left-[44px] z-30 pointer-events-none">
              <svg width="36" height="44" viewBox="0 0 36 44" fill="none" stroke="#ff7828" strokeWidth="4" strokeLinecap="round">
                {/* Top line (radiating up-left ~42deg) */}
                <line x1="26" y1="12" x2="14" y2="4" />
                {/* Middle line (radiating near horizontal with slight upward slope) */}
                <line x1="24" y1="21" x2="8" y2="20" />
                {/* Bottom line (radiating down-left ~38deg) */}
                <line x1="26" y1="30" x2="14" y2="38" />
              </svg>
            </div>

            {/* Electric Cyan Sparks (Top Right of Phone - Matching Image 1 Reference) */}
            <div className="absolute -top-[10px] -right-[10px] z-30 pointer-events-none">
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" stroke="#00bee8" strokeWidth="4" strokeLinecap="round">
                {/* Top line (angled up-right ~55deg) */}
                <line x1="16" y1="22" x2="27" y2="6" />
                {/* Middle line (angled up-right ~26deg) */}
                <line x1="24" y1="30" x2="44" y2="20" />
                {/* Bottom line (slanted down-right ~18deg) */}
                <line x1="24" y1="41" x2="42" y2="47" />
              </svg>
            </div>

            {/* Phone Mockup (Center Right) - Realistic Frame */}
            <div className="absolute top-0 right-[40px] w-[260px] h-[540px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden z-20 flex flex-col border-[8px] border-black">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[1.2rem] z-50 flex items-center justify-center gap-2">
                <div className="w-[40px] h-[4px] bg-gray-800 rounded-full"></div>
                <div className="w-[8px] h-[8px] bg-[#1a1a2e] rounded-full shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
              </div>

              {/* iOS Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-6 pt-2 bg-white relative z-10">
                <span className="text-[10px] font-bold text-black tracking-tighter">9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal */}
                  <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L23.6 7.6C23.1 7.2 18.6 4 12 4C5.4 4 0.9 7.2 0.4 7.6L12 21Z" /></svg>
                  {/* WiFi */}
                  <svg className="w-[13px] h-[13px] text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C12 22 22.3431 11.6569 22.3431 11.6569C19.5304 8.8442 15.8696 7 12 7C8.13043 7 4.46957 8.8442 1.65685 11.6569C1.65685 11.6569 12 22 12 22Z" /></svg>
                  {/* Battery */}
                  <div className="w-[18px] h-[9px] border border-black/80 rounded-[3px] p-[1px] relative ml-0.5">
                    <div className="w-[90%] h-full bg-black rounded-[1px]"></div>
                    <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-[3px] bg-black/80 rounded-r-sm"></div>
                  </div>
                </div>
              </div>

              {/* Phone Top UI (Instagram Header) */}
              <div className="h-12 shrink-0 flex justify-between items-center px-4 border-b border-gray-100 bg-white relative z-10">
                <div className="flex items-center gap-2">
                  <div className="relative w-[22px] h-[22px] rounded-full bg-white overflow-hidden border border-gray-200 flex items-center justify-center">
                    <Image src="/company-logo/Prodbiz-logo.png" alt="Profile" fill className="object-contain p-[1px]" />
                  </div>
                  <span className="text-[11px] font-bold text-black tracking-tight mt-[1px]">prodbizsolutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-bold px-2.5 py-[3px] border border-gray-300 rounded-full text-black">Follow</span>
                  <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></svg>
                </div>
              </div>

              {/* Phone Image Content */}
              <div className="relative w-full aspect-square bg-gray-100 shrink-0">
                <Image src="/home-page/hero-section/slide-2/menucard.png" alt="Social Post" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" quality={95} />
              </div>

              {/* Phone Bottom UI Exact Match */}
              <div className="flex-1 bg-white flex flex-col justify-between relative pt-2">
                <div className="px-4">
                  {/* Action Icons */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-3 items-center">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                      <svg className="w-[22px] h-[22px] text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      <svg className="w-[20px] h-[20px] text-gray-800 -rotate-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                    </div>
                    {/* Pagination Dots */}
                    <div className="flex gap-[3px] mr-4">
                      <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                      <div className="w-[4px] h-[4px] bg-gray-300 rounded-full"></div>
                      <div className="w-[4px] h-[4px] bg-gray-300 rounded-full"></div>
                    </div>
                    <svg className="w-[22px] h-[22px] text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                  </div>

                  {/* Action Text */}
                  <div className="mt-2 mb-1">
                    <div className="flex items-center gap-[22px] text-[11px] font-bold text-black mb-1.5 ml-1">
                      <span>1.5K</span>
                      <span>48</span>
                    </div>
                    <p className="text-[10px] text-black leading-[1.3]">
                      <span className="font-bold mr-1">prodbizsolutions</span>
                      Great design builds<br />stronger brands. 👏
                    </p>
                    <p className="text-[10px] text-gray-600 leading-[1.3] mt-2">
                      From logo to print, web to social —<br />we bring your vision to life.
                    </p>
                    <p className="text-[10px] text-[#0095F6] mt-2 font-medium">
                      #Branding #Design #ProdbizSolutions
                    </p>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="pb-6 pt-3 px-6 flex justify-between items-center relative border-t border-gray-50">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                  <svg className="w-[22px] h-[22px] text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <svg className="w-[22px] h-[22px] text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  <svg className="w-[22px] h-[22px] text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  <div className="relative w-[22px] h-[22px] bg-white rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                    <Image src="/company-logo/Prodbiz-logo.png" alt="Profile Nav" fill className="object-contain p-[2px]" />
                  </div>

                  {/* iOS Indicator Line */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[3px] bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card 1: Top Left (Computer) - Slight gap to phone */}
            <div className="absolute top-[40px] right-[320px] w-[180px] h-[180px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[1.5rem] overflow-hidden z-30 -rotate-3 transition-transform duration-500 hover:scale-105 hover:z-40">
              <Image src="/home-page/hero-section/slide-2/logo.png" alt="Top Left Card" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" quality={95} />
            </div>

            {/* Card 2: Bottom Left (Mountain) - Aligned with Top Left Card */}
            <div className="absolute bottom-[40px] right-[320px] w-[180px] h-[180px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[1.5rem] overflow-hidden z-30 transition-transform duration-500 hover:scale-105 hover:z-40">
              <Image src="/home-page/hero-section/slide-2/businesscard.png" alt="Bottom Left Card" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" quality={95} />
            </div>

            {/* Card 3: Far Left (Camera) - Overlaps Card 1 bottom-left */}
            <div className="absolute top-[180px] right-[440px] w-[140px] h-[140px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-[1.5rem] overflow-hidden z-10 transition-transform duration-500 hover:scale-105 hover:z-40">
              <Image src="/home-page/hero-section/slide-2/campaign-ads.png" alt="Far Left Card" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" quality={95} />
            </div>

            {/* Card 4: Top Right (Graph) - Overlaps Phone Right */}
            <div className="absolute top-[120px] right-[-30px] w-[160px] h-[160px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[1.5rem] overflow-hidden z-30 transition-transform duration-500 hover:scale-105 hover:z-40">
              <Image src="/home-page/hero-section/slide-2/posters-design.png" alt="Top Right Card" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" quality={95} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// -----------------------------
// SLIDE 3: Social Media & Content Marketing
// -----------------------------
function Slide3() {
  return (
    <>
      {/* WARM LINEN / SAND PAPER BACKGROUND */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden bg-[#F7EFE6]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 pt-1 sm:pt-2 md:pt-2 min-[1400px]:md:pt-4 pb-3 sm:pb-4 min-[1400px]:pb-12 overflow-y-auto lg:overflow-visible">

        {/* TOP SECTION: Eyebrow + Heading */}
        <div className="w-full flex flex-col items-center text-center max-w-4xl z-20 mb-1 min-[1400px]:mb-1.5">
          {/* Eyebrow with Orange Bar */}
          <div className="flex items-center justify-center gap-3 mb-1 md:mb-1.5">
            <span className="w-7 h-[3px] min-[1400px]:w-9 min-[1400px]:h-[3.5px] bg-[#492c28] rounded-full inline-block shrink-0" />
            <span className="text-[11px] sm:text-xs md:text-sm lg:text-[12.5px] min-[1400px]:text-sm font-bold tracking-[0.22em] text-[#492c28] uppercase">
              Social Media &amp; Content Marketing
            </span>
          </div>

          {/* Heading strictly matching image */}
          <h1 className="tracking-tight select-none leading-[1.05] text-[#2b1d1a]">
            {/* Line 1: From Content (Script) */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 min-[1400px]:gap-7 leading-none">
              <span
                className="text-[#432822] text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] min-[1400px]:lg:text-[4.2rem]"
                style={{ fontFamily: "'Playlist', cursive" }}
              >
                From
              </span>
              <span
                className="text-[#136367] text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] min-[1400px]:lg:text-[4.2rem] relative inline-block pr-6 sm:pr-8"
                style={{ fontFamily: "'Playlist', cursive" }}
              >
                Content

                {/* 3 Accent Lines Effect (Sparks radiating upward and outward) */}
                <svg
                  className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-6 h-5 sm:w-7 sm:h-6 md:w-8 md:h-7 text-[#ff7828] overflow-visible pointer-events-none"
                  viewBox="0 0 32 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                >
                  <line x1="7" y1="18" x2="10" y2="7" />
                  <line x1="13" y1="18" x2="25" y2="9" />
                  <line x1="16" y1="21" x2="28" y2="21" />
                </svg>
              </span>
            </div>

            {/* Line 2: To Customer Attention. (with orange brush stroke under Attention.) */}
            <div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.1rem] min-[1400px]:lg:text-[3.6rem] font-black text-[#2e1d1a] tracking-tight mt-0.5 sm:mt-1"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", fontWeight: 900 }}
            >
              To Customer{" "}
              <span className="relative inline-block">
                Attention.
                {/* Orange Brush Stroke Underline beneath 'Attention.' */}
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[12px] min-[1400px]:h-[15px] text-[#ff7828] pointer-events-none overflow-visible"
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M10,18 C50,14 130,9 285,10 C295,10 297,11 292,12 C260,15 160,21 18,24 C10,24 8,20.5 10,18 Z" />
                  <path d="M230,14 C255,14 280,13 294,12 C296,12 295,13.2 288,14 C268,16 242,17 230,16 Z" opacity="0.85" />
                </svg>
              </span>
            </div>
          </h1>
        </div>

        {/* CARDS & CONTENT ARCHED COMPOSITION ROW */}
        <div className="w-full max-w-[1600px] flex items-end justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-5 overflow-x-auto lg:overflow-visible pt-0.5 sm:pt-1 md:pt-1.5 lg:pt-2 xl:pt-2 2xl:pt-2.5 px-2 sm:px-3 md:px-5 lg:px-6 xl:px-8 2xl:px-10 pb-1 scrollbar-none z-20">

          {/* COLUMN 1: LEFT SINGLE TALL CARD (Hidden on mobile to render only 3 images) */}
          <div className="hidden md:block w-[105px] sm:w-[128px] md:w-[130px] lg:w-[145px] xl:w-[175px] min-[1400px]:w-[224px] 2xl:w-[278px] h-[200px] sm:h-[240px] md:h-[240px] lg:h-[260px] xl:h-[300px] min-[1400px]:h-[365px] 2xl:h-[415px] shrink-0 relative rounded-3xl shadow-lg group transition-transform duration-300 hover:scale-[1.03]">
            {/* Top Floating Orange Heart Doodle Component - rendered at top with gap from image */}
            <div className="w-[42px] sm:w-[50px] md:w-[54px] lg:w-[60px] xl:w-[68px] 2xl:w-[82px] aspect-[576/457] absolute -top-[44px] sm:-top-[52px] md:-top-[56px] lg:-top-[62px] xl:-top-[70px] 2xl:-top-[84px] left-2 sm:left-3 md:left-4 lg:left-5 xl:left-6 2xl:left-7 z-30 pointer-events-none">
              <Image
                src="/home-page/hero-section/slide-3/heart-doodle.png"
                alt="Heart doodle"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Inner Image Container */}
            <div className="w-full h-full relative rounded-3xl overflow-hidden border border-black/5 bg-[#ead8c7]">
              <Image
                src="/home-page/hero-section/slide-3/social-posts.jpg"
                alt="Social media content"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 150px, (max-width: 1536px) 250px, 350px"
              />
            </div>
          </div>

          {/* CENTER GROUP: Subtitle spanning over Col 2, (Button + Col 3), Col 4 */}
          <div className="flex flex-col items-center shrink-0">
            {/* Subtitle - positioned right above Col 2, Button, Col 4 */}
            <p className="text-xs sm:text-[13px] md:text-xs lg:text-[14px] min-[1400px]:text-[14.5px] 2xl:text-base text-[#4f3d38] font-medium max-w-[340px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[500px] min-[1400px]:max-w-[640px] 2xl:max-w-[880px] text-center leading-snug sm:leading-relaxed mb-1.5 sm:mb-2.5 md:mb-3 min-[1400px]:mb-4 px-3">
              We create and manage content that keeps your business active, reaches the right audience and turns attention into growth.
            </p>

            {/* 3-Column Sub-Row: Column 2 + (Button + Column 3) + Column 4 */}
            <div className="flex items-end justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-5">

              {/* COLUMN 2: Photo Card (Pure Image) */}
              <div className="w-[105px] sm:w-[128px] md:w-[130px] lg:w-[145px] xl:w-[175px] min-[1400px]:w-[224px] 2xl:w-[278px] h-[170px] sm:h-[200px] md:h-[205px] lg:h-[220px] xl:h-[255px] min-[1400px]:h-[315px] 2xl:h-[360px] shrink-0 relative rounded-3xl shadow-lg group transition-transform duration-300 hover:scale-[1.03]">
                {/* Floating Orange Heart Doodle on mobile (when Col 1 is hidden) */}
                <div className="md:hidden w-[36px] aspect-[576/457] absolute -top-[16px] left-2 z-30 pointer-events-none">
                  <Image
                    src="/home-page/hero-section/slide-3/heart-doodle.png"
                    alt="Heart doodle"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="w-full h-full relative rounded-3xl overflow-hidden border border-black/5 bg-[#1a1a1a]">
                  <Image
                    src="/home-page/hero-section/slide-3/reels-videos.jpg"
                    alt="Reels and video production"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 150px, (max-width: 1536px) 250px, 350px"
                  />
                </div>
              </div>

              {/* CENTER NEST: "Grow Your Brand" Button + COLUMN 3 CARD (Pure Image) */}
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5 w-[105px] sm:w-[128px] md:w-[130px] lg:w-[145px] xl:w-[175px] min-[1400px]:w-[224px] 2xl:w-[278px] shrink-0">
                {/* CTA Button nestled directly above Card 3 */}
                <button className="w-full bg-[#115e63] hover:bg-[#0c4a4e] text-white font-bold text-[11px] sm:text-xs md:text-sm 2xl:text-[15px] py-1.5 sm:py-2 md:py-2 px-2 sm:px-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap">
                  <span>Grow Your Brand</span>
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                {/* COLUMN 3: Photo Card (Pure Image) */}
                <div className="w-full h-[135px] sm:h-[160px] md:h-[160px] lg:h-[175px] xl:h-[205px] min-[1400px]:h-[250px] 2xl:h-[290px] relative rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-[#ead8c7] group transition-transform duration-300 hover:scale-[1.03]">
                  <Image
                    src="/home-page/hero-section/slide-3/brand-creation.jpg"
                    alt="Creative brand creation"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 150px, (max-width: 1536px) 250px, 350px"
                  />
                </div>
              </div>

              {/* COLUMN 4: Photo Card (Pure Image) */}
              <div className="w-[105px] sm:w-[128px] md:w-[130px] lg:w-[145px] xl:w-[175px] min-[1400px]:w-[224px] 2xl:w-[278px] h-[170px] sm:h-[200px] md:h-[205px] lg:h-[220px] xl:h-[255px] min-[1400px]:h-[315px] 2xl:h-[360px] shrink-0 relative rounded-3xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03] border border-black/5 bg-[#ead4c4]">
                <Image
                  src="/home-page/hero-section/slide-3/promotional-content.jpg"
                  alt="Social media network connection"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 150px, (max-width: 1536px) 250px, 350px"
                />
              </div>

            </div>
          </div>

          {/* COLUMN 5: RIGHT SINGLE TALL CARD (Hidden on mobile to render only 3 images) */}
          <div className="hidden md:block w-[105px] sm:w-[128px] md:w-[130px] lg:w-[145px] xl:w-[175px] min-[1400px]:w-[224px] 2xl:w-[278px] h-[200px] sm:h-[240px] md:h-[240px] lg:h-[260px] xl:h-[300px] min-[1400px]:h-[365px] 2xl:h-[415px] shrink-0 relative rounded-3xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03] border border-black/5 bg-[#2a2a2a]">
            <Image
              src="/home-page/hero-section/slide-3/facebook-management.jpg"
              alt="Marketing analytics dashboard"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 150px, (max-width: 1536px) 250px, 350px"
            />
          </div>

        </div>

      </div>
    </>
  );
}

// -----------------------------
// SLIDE 4: SEO & Online Advertising
// -----------------------------
function Slide4() {
  const cards = [
    {
      id: 1,
      title: "SEO - Search Engine Optimization",
      image: "/home-page/hero-section/slide-4/card1-seo.jpg",
      style: { rotate: "15deg", x: "-150%", y: "0%", zIndex: 4 },
    },
    {
      id: 2,
      title: "Organic Traffic Analytics",
      image: "/home-page/hero-section/slide-4/card2-analytics.jpg",
      style: { rotate: "15deg", x: "-50%", y: "0%", zIndex: 3 },
    },
    {
      id: 3,
      title: "Online Ads & Paid Campaigns",
      image: "/home-page/hero-section/slide-4/card3-ads.jpg",
      style: { rotate: "15deg", x: "50%", y: "0%", zIndex: 2 },
    },
    {
      id: 4,
      title: "Audience Targeting & Growth",
      image: "/home-page/hero-section/slide-4/card4-targeting.jpg",
      style: { rotate: "15deg", x: "150%", y: "0%", zIndex: 1 },
    },
  ];

  return (
    <>
      {/* BACKGROUND: User provided background image */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden bg-[#047880]">
        <Image
          src="/home-page/hero-section/slide-4/slide4-new-bg.png"
          alt="Slide 4 Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* FULL-HEIGHT COLUMN LAYOUT */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center md:justify-start items-center overflow-hidden pb-6 sm:pb-8 md:pb-0">

        {/* TOP SECTION: Heading + subtitle + button — centered */}
        <div className="flex flex-col items-center text-center px-4 pt-0 sm:pt-2 md:pt-4 lg:pt-8 min-[1400px]:md:pt-8 pb-2 sm:pb-3 lg:pb-3 min-[1400px]:md:pb-10 flex-shrink-0">

          {/* Category Label: SEO & Online Advertising */}
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3 min-[1400px]:mb-4 select-none">
            <span className="w-7 h-[3px] min-[1400px]:w-9 min-[1400px]:h-[3.5px] bg-[#facc15] rounded-full inline-block shrink-0" />
            <span className="text-xs md:text-sm lg:text-[12.5px] min-[1400px]:text-sm font-bold tracking-[0.2em] uppercase text-[#facc15]">
              SEO &amp; Online Advertising
            </span>
          </div>

          {/* Heading */}
          <h1 className="select-none tracking-tight">
            {/* Line 1: Get F🔍und. */}
            <div
              className="font-extrabold text-white leading-[1.05] flex items-center justify-center drop-shadow-md text-3xl sm:text-4xl md:text-5xl lg:text-[2.1rem] min-[1400px]:text-[clamp(2rem,5.5vw,4.2rem)]"
            >
              <span style={{ letterSpacing: "-0.02em" }}>Get&nbsp;F</span>{/* Magnifying-glass 'o' — using actual image */}<span
                className="inline-block relative flex-shrink-0"
                style={{
                  width: "0.9em",
                  height: "0.9em",
                  marginBottom: "-0.1em",
                  marginLeft: "-0.04em",
                  marginRight: "-0.04em",
                }}
              >
                <Image
                  src="/home-page/hero-section/slide-4/search-icon.png"
                  alt="search"
                  fill
                  className="object-contain object-center"
                  sizes="5vw"
                />
              </span><span>und.</span>
            </div>

            {/* Line 2: Get Noticed. */}
            <div
              className="font-extrabold text-white leading-[1.08] flex items-baseline justify-center mt-0.5 min-[1400px]:mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-[2.1rem] min-[1400px]:text-[clamp(2rem,5.5vw,4.2rem)]"
            >
              <span>Get&nbsp;</span>
              <span
                className="font-normal italic select-none leading-none text-[#facc15]"
                style={{
                  fontFamily: "'Playlist', 'Kaushan Script', cursive",
                  fontSize: "1.18em",
                  paddingRight: "0.06em",
                }}
              >
                Noticed.
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/90 font-normal text-center leading-relaxed mt-2 sm:mt-3 min-[1400px]:mt-5 text-xs sm:text-sm md:text-base lg:text-[14px] min-[1400px]:text-lg"
            style={{ maxWidth: "42em" }}
          >
            We help your business appear where customers are <span className="text-[#facc15] font-medium">searching</span>
            <br className="hidden sm:block" />
            {" "}and reach the right people through <span className="text-[#facc15] font-medium">online advertising.</span>
          </p>

        </div>

        {/* BOTTOM SECTION: 4 fan-spread overlapping cards centered */}
        <div className="relative w-full h-[130px] sm:h-[160px] md:h-auto md:flex-1 overflow-visible mt-0 min-h-[130px] sm:min-h-[160px] md:min-h-[170px] min-[1400px]:md:min-h-[220px] pb-0 md:pb-4 min-[1400px]:pb-8 flex-shrink-0">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="absolute top-1/2 md:top-[35%] lg:top-[43%] min-[1400px]:md:top-[35%] left-1/2 w-[18vw] sm:w-[18vw] md:w-[18vw] lg:w-[16vw] min-[1400px]:w-[19vw] max-w-[150px] lg:max-w-[164px] min-[1400px]:max-w-[220px] min-w-[85px] sm:min-w-[90px] aspect-square rounded-xl sm:rounded-2xl md:rounded-[2rem] lg:rounded-[1.6rem] min-[1400px]:rounded-[2rem] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] lg:border-[5px] min-[1400px]:border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] cursor-pointer group"
                style={{
                  transform: `translate(calc(-50% + ${card.style.x}), calc(-50% + ${card.style.y})) rotate(${card.style.rotate})`,
                  transformOrigin: "center center",
                  zIndex: card.style.zIndex,
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = `translate(calc(-50% + ${card.style.x}), calc(-50% + ${card.style.y} - 20px)) rotate(0deg) scale(1.08)`;
                  el.style.zIndex = "20";
                  el.style.boxShadow = "0 30px 60px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = `translate(calc(-50% + ${card.style.x}), calc(-50% + ${card.style.y})) rotate(${card.style.rotate})`;
                  el.style.zIndex = String(card.style.zIndex);
                  el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.35)";
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="30vw"
                />
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}


// -----------------------------
// MAIN HERO SLIDER
// -----------------------------
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const slides = [Slide1, Slide2, Slide3, Slide4];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide]);

  return (
    <div
      className="w-full px-3 sm:px-4 md:px-6 min-[1400px]:px-8 pb-2 sm:pb-3 md:py-4 min-[1400px]:py-8 pt-[104px] sm:pt-[108px] md:pt-24 min-[1400px]:pt-28 bg-ivory md:min-h-screen overflow-hidden flex flex-col justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <section className="relative w-full h-[480px] sm:h-[540px] md:h-[calc(100dvh-7.5rem)] min-[1400px]:h-[calc(100vh-8rem)] md:min-h-[480px] lg:min-h-[500px] min-[1400px]:min-h-[600px] max-h-[620px] min-[1400px]:max-h-none z-10">

        {/* Render Slides */}
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <SlideComponent />
          </div>
        ))}

        {/* Controls - Bottom Center */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-6 pointer-events-auto">
          {/* Slide indicators (Pagination) */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? "bg-[#ff7828] w-7 sm:w-9" : "bg-[#2b1d1a]/20 hover:bg-[#2b1d1a]/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

