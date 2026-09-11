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
      <div className="relative z-10 w-full h-full flex items-center">
        {/* LEFT: TEXT (45%) */}
        <div className="w-full lg:w-[50%] xl:w-[48%] pl-[5%] md:pl-[8%] pr-4 text-white z-40">
          {/* Category Tag with Orange Bar */}
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="w-9 h-[3.5px] bg-[#ff7828] rounded-full inline-block shrink-0" />
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#ff7828]">
              Web Design & Development
            </span>
          </div>

          {/* Heading - Strictly 2 lines on all screens */}
          <h1 className="text-[clamp(1.75rem,4.4vw,3.8rem)] mb-6 tracking-tight leading-[1.08] text-white select-none">
            {/* Line 1: We Build Websites. (Cyan brush script with sparks) */}
            <div className="flex items-end whitespace-nowrap gap-x-2 md:gap-x-3 mb-3.5 md:mb-4.5">
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
                  className="absolute top-[-2px] md:top-[-4px] lg:top-[-6px] -right-1 md:-right-2 lg:-right-2.5 w-7 h-6 md:w-8 md:h-7 lg:w-9 lg:h-8 text-[#ff7828] overflow-visible pointer-events-none"
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
            <div className="flex items-end whitespace-nowrap gap-x-2 md:gap-x-3">
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
                  className="absolute top-[-2px] md:top-[-4px] lg:top-[-6px] -right-1 md:-right-2 lg:-right-2.5 w-7 h-6 md:w-8 md:h-7 lg:w-9 lg:h-8 text-[#ff7828] overflow-visible pointer-events-none"
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
                  className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[16px] md:h-[22px] text-[#ff7828] pointer-events-none overflow-visible"
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

          <p className="text-base md:text-lg mb-8 text-white/80 font-normal max-w-lg leading-relaxed">
            For shops, services, startups and companies.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-5 md:gap-7">
            {/* OLD BUTTON (UNTOUCHED) */}
            <button className="btn !min-h-12 !h-12 !p-0 !pl-6 flex items-center gap-4 transition-transform hover:scale-105 group border-none" style={{ backgroundColor: "var(--color-orange)", color: "var(--color-ivory)", borderRadius: "9999px" }}>
              <span className="font-bold text-base">Build Your Website</span>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center relative z-10 border border-black/5">
                <Image src="/icons/website-3d.jpg" alt="Website 3D Icon" width={48} height={48} className="w-full h-full object-contain p-2 group-hover:animate-ring" />
              </div>
            </button>

            {/* See Our Work Play Button */}
            <button className="flex items-center gap-3 md:gap-3.5 text-white hover:opacity-85 transition-opacity group cursor-pointer select-none">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-[1.8px] border-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-black/10">
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4 text-white fill-white ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5.14v13.72a1 1 0 001.5.86l11.45-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" />
                </svg>
              </div>
              <span className="font-semibold text-sm md:text-[15px] tracking-wide text-white">
                See Our Work
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT: CARDS (55%) */}
        <div className="hidden lg:block lg:w-[50%] xl:w-[55%] h-full relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-4 xl:left-8 flex gap-4 xl:gap-6 items-center">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className="relative w-[200px] xl:w-[240px] h-[320px] xl:h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex-shrink-0"
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
        {/* Warm radial glow — brighter center-right, darker corners */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 75% at 65% 50%, #8c3d1e 0%, #7a3318 25%, #6b2d14 55%, #4a1e0a 80%, #361508 100%)",
          }}
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
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center px-4 md:px-12 py-12">

        {/* LEFT: TEXT (48%) */}
        <div className="w-full lg:w-[48%] flex flex-col items-start pt-12 lg:pt-0 z-40">
          {/* Category Tag with Orange Bar */}
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="w-9 h-[3.5px] bg-[#ff7828] rounded-full inline-block shrink-0" />
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#ff7828]">
              Logo & Branding
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white tracking-tight leading-[1.08] mb-6">
            {/* Line 1: From Logo */}
            <div className="flex items-end mb-2">
              <span
                className="pb-1 text-white text-4xl md:text-5xl lg:text-[4rem] tracking-tight font-extrabold mr-3 md:mr-4"
                style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", fontWeight: 800 }}
              >
                From
              </span>
              <span
                className="text-[#00bee8] text-5xl md:text-6xl lg:text-[4.8rem] font-normal relative inline-block select-none leading-none pr-3 md:pr-4"
                style={{ fontFamily: "'Playlist', cursive" }}
              >
                Logo

                {/* 3 Accent Lines Effect (Sparks - exactly at top corner of last 'o') */}
                <svg
                  className="absolute top-[8px] -right-[16px] md:top-[12px] md:-right-[20px] lg:top-[2px] lg:-right-[4px] w-7 h-6 md:w-8 md:h-7 lg:w-8 lg:h-7 text-[#ff7828] overflow-visible pointer-events-none"
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

                {/* Orange Brush Stroke Underline beneath 'Logo' */}
                {/* <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[15px] md:h-[20px] text-[#ff7828] pointer-events-none overflow-visible"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M10,14 C50,10 120,6 190,6 C194,6 194,7 190,8 C160,11 110,16 14,18 C10,18 8,15.5 10,14 Z" />
                  <path d="M140,10 C160,9.8 178,9 190,8.2 C192,8.2 191,9 186,9.6 C174,10.8 156,11.6 140,11 Z" opacity="0.9" />
                </svg> */}
              </span>
            </div>

            {/* Line 2: To Everything */}
            <div
              className="mb-2 text-white text-4xl md:text-5xl lg:text-[4rem] tracking-tight font-extrabold"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", fontWeight: 800 }}
            >
              To Everything
            </div>

            {/* Line 3: Brand. (Electric cyan brush script with orange brush underline) */}
            <div
              className="text-[#00bee8] text-5xl md:text-6xl lg:text-[5.2rem] font-normal relative inline-block pr-6 tracking-normal select-none leading-none mt-1"
              style={{ fontFamily: "'Playlist', cursive" }}
            >
              Brand.

              {/* Orange Brush Stroke Underline beneath 'Brand.' */}
              <svg
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[16px] md:h-[22px] text-[#ff7828] pointer-events-none overflow-visible"
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
          </h1>

          <p className="text-base md:text-lg max-w-lg text-white/90 font-normal leading-relaxed mt-4">
            From your first logo to the designs that represent and promote your business, we make <span className="text-[#00bee8] font-bold">your brand</span> look professional and consistent.
          </p>

          {/* Cyan Arrow instead of Button */}
          {/* <div className="mt-2 opacity-90">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00bee8]">
              <path d="M2 10 Q 30 8 56 10 M 45 3 L 57 10 L 45 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div> */}

          {/* <button className="bg-[#047880] hover:bg-[#047880]/90 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 group w-fit" style={{ boxShadow: "0 4px 15px rgba(4, 120, 128, 0.4)" }}>
            Build Your Brand
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button> */}
        </div>

        {/* RIGHT: EXACT SCATTERED COLLAGE (52%) */}
        <div className="w-full lg:w-[52%] h-full relative mt-12 lg:mt-0 hidden md:flex items-center justify-end pr-0 lg:pr-8 xl:pr-16">

          {/* Fixed coordinate space so collage elements never separate */}
          <div className="relative w-[500px] h-[540px] shrink-0 transform lg:scale-90 xl:scale-100 origin-right">

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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 pt-1 sm:pt-2 md:pt-4 pb-8 sm:pb-10 md:pb-12 overflow-y-auto lg:overflow-visible">

        {/* TOP SECTION: Eyebrow + Heading */}
        <div className="w-full flex flex-col items-center text-center max-w-4xl z-20 mb-1.5">
          {/* Eyebrow with Orange Bar */}
          <div className="flex items-center justify-center gap-3 mb-1 md:mb-1.5">
            <span className="w-9 h-[3.5px] bg-[#492c28] rounded-full inline-block shrink-0" />
            <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.22em] text-[#492c28] uppercase">
              Social Media & Content Marketing
            </span>
          </div>

          {/* Heading strictly matching image */}
          <h1 className="tracking-tight select-none leading-[1.05] text-[#2b1d1a]">
            {/* Line 1: From Content (Script) */}
            <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 leading-none">
              <span
                className="text-[#432822] text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem]"
                style={{ fontFamily: "'Playlist', cursive" }}
              >
                From
              </span>
              <span
                className="text-[#136367] text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] relative inline-block pr-6 sm:pr-8"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-black text-[#2e1d1a] tracking-tight mt-0.5 sm:mt-1"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", fontWeight: 900 }}
            >
              To Customer{" "}
              <span className="relative inline-block">
                Attention.
                {/* Orange Brush Stroke Underline beneath 'Attention.' */}
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[12px] md:h-[15px] text-[#ff7828] pointer-events-none overflow-visible"
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

          {/* COLUMN 1: LEFT SINGLE TALL CARD (Pure Image) */}
          <div className="w-[115px] sm:w-[128px] md:w-[140px] lg:w-[178px] xl:w-[224px] 2xl:w-[278px] h-[240px] sm:h-[260px] md:h-[285px] lg:h-[325px] xl:h-[365px] 2xl:h-[415px] shrink-0 relative rounded-3xl shadow-lg group transition-transform duration-300 hover:scale-[1.03]">
            {/* Top Floating Orange Heart Doodle Component - rendered at top with gap from image */}
            <div className="w-[48px] sm:w-[54px] md:w-[60px] lg:w-[68px] xl:w-[74px] 2xl:w-[82px] aspect-[576/457] absolute -top-[52px] sm:-top-[58px] md:-top-[64px] lg:-top-[70px] xl:-top-[76px] 2xl:-top-[84px] left-2 sm:left-3 md:left-4 lg:left-5 xl:left-6 2xl:left-7 z-30 pointer-events-none">
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
            <p className="text-xs sm:text-[13px] md:text-sm lg:text-[14.5px] 2xl:text-base text-[#4f3d38] font-medium max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[720px] 2xl:max-w-[880px] text-center leading-snug sm:leading-relaxed mb-3 sm:mb-3.5 md:mb-4 px-3">
              We create and manage content that keeps your business active, reaches the right audience and turns attention into growth.
            </p>

            {/* 3-Column Sub-Row: Column 2 + (Button + Column 3) + Column 4 */}
            <div className="flex items-end justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-5">

              {/* COLUMN 2: Photo Card (Pure Image) */}
              <div className="w-[115px] sm:w-[128px] md:w-[140px] lg:w-[178px] xl:w-[224px] 2xl:w-[278px] h-[200px] sm:h-[220px] md:h-[245px] lg:h-[275px] xl:h-[315px] 2xl:h-[360px] shrink-0 relative rounded-3xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03] border border-black/5 bg-[#1a1a1a]">
                <Image
                  src="/home-page/hero-section/slide-3/reels-videos.jpg"
                  alt="Reels and video production"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 150px, (max-width: 1536px) 250px, 350px"
                />
              </div>

              {/* CENTER NEST: "Grow Your Brand" Button + COLUMN 3 CARD (Pure Image) */}
              <div className="flex flex-col items-center gap-2.5 sm:gap-3 md:gap-3.5 w-[115px] sm:w-[128px] md:w-[140px] lg:w-[178px] xl:w-[224px] 2xl:w-[278px] shrink-0">
                {/* CTA Button nestled directly above Card 3 */}
                <button className="w-full bg-[#115e63] hover:bg-[#0c4a4e] text-white font-bold text-[11px] sm:text-xs md:text-sm 2xl:text-[15px] py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap">
                  <span>Grow Your Brand</span>
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                {/* COLUMN 3: Photo Card (Pure Image) */}
                <div className="w-full h-[160px] sm:h-[175px] md:h-[195px] lg:h-[215px] xl:h-[250px] 2xl:h-[290px] relative rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-[#ead8c7] group transition-transform duration-300 hover:scale-[1.03]">
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
              <div className="w-[115px] sm:w-[128px] md:w-[140px] lg:w-[178px] xl:w-[224px] 2xl:w-[278px] h-[200px] sm:h-[220px] md:h-[245px] lg:h-[275px] xl:h-[315px] 2xl:h-[360px] shrink-0 relative rounded-3xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03] border border-black/5 bg-[#ead4c4]">
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

          {/* COLUMN 5: RIGHT SINGLE TALL CARD (Pure Image) */}
          <div className="w-[115px] sm:w-[128px] md:w-[140px] lg:w-[178px] xl:w-[224px] 2xl:w-[278px] h-[240px] sm:h-[260px] md:h-[285px] lg:h-[325px] xl:h-[365px] 2xl:h-[415px] shrink-0 relative rounded-3xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03] border border-black/5 bg-[#2a2a2a]">
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
      rotation: "-rotate-[10deg] sm:-rotate-[12deg]",
      translate: "translate-y-2 sm:translate-y-4",
    },
    {
      id: 2,
      title: "Organic Traffic Analytics",
      image: "/home-page/hero-section/slide-4/card2-analytics.jpg",
      rotation: "-rotate-[4deg] sm:-rotate-[5deg]",
      translate: "-translate-y-1 sm:-translate-y-2",
    },
    {
      id: 3,
      title: "Online Ads & Paid Campaigns",
      image: "/home-page/hero-section/slide-4/card3-ads.jpg",
      rotation: "rotate-[4deg] sm:rotate-[5deg]",
      translate: "-translate-y-1 sm:-translate-y-2",
    },
    {
      id: 4,
      title: "Audience Targeting & Growth",
      image: "/home-page/hero-section/slide-4/card4-targeting.jpg",
      rotation: "rotate-[10deg] sm:rotate-[12deg]",
      translate: "translate-y-2 sm:translate-y-4",
    },
  ];

  return (
    <>
      {/* STATIC BACKGROUND: Modern Office Workspace with Laptop & Sunlight */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden bg-[#eaf0f6]">
        <Image
          src="/home-page/hero-section/slide-4/slide4-bg.jpg"
          alt="SEO & Online Advertising Workspace"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft atmospheric radial gradient to focus center content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 85% 75% at 50% 45%, rgba(255, 255, 255, 0.2) 0%, rgba(240, 246, 252, 0.4) 60%, rgba(220, 235, 248, 0.6) 100%)",
          }}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-3 sm:px-6 md:px-8 pt-3 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-10 overflow-y-auto lg:overflow-visible">

        {/* CENTER TEXT CONTENT (Rendered directly on background, no card or border) */}
        <div className="relative z-20 w-full max-w-[840px] flex flex-col items-center text-center mt-1 sm:mt-3">

          {/* Category Tag with Blue Bar */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5 sm:mb-3.5">
            <span className="w-8 h-[3px] bg-[#0284c7] rounded-full inline-block shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#0284c7] uppercase">
              SEO & Online Advertising
            </span>
          </div>

          {/* Heading strictly matching image */}
          <h1 className="select-none leading-[1.06] tracking-tight">
            {/* Line 1: Get Found. (with Magnifying Glass as 'o') */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold text-[#0f172a] flex items-center justify-center tracking-tight">
              <span>Get&nbsp;F</span>
              {/* Magnifying Glass 'o' with tight natural letter kerning */}
              <span className="inline-flex items-center justify-center relative -mx-[1.5px]">
                <svg
                  className="w-[0.72em] h-[0.72em] text-[#2563eb] inline-block -mt-[0.04em] overflow-visible"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="13" cy="13" r="8" className="stroke-[#2563eb]" />
                  <line x1="18.8" y1="18.8" x2="27.5" y2="27.5" strokeWidth="4.5" className="stroke-[#2563eb]" />
                  <path d="M9.5 13 A 3.5 3.5 0 0 1 13 9.5" strokeWidth="1.8" strokeOpacity="0.75" strokeLinecap="round" />
                </svg>
              </span>
              <span>und.</span>
            </div>

            {/* Line 2: Get Noticed. (Gradient script for 'Noticed.') */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold text-[#0f172a] flex items-baseline justify-center gap-2 sm:gap-3 mt-1 sm:mt-1.5">
              <span>Get</span>
              <span
                className="font-normal relative inline-block select-none leading-none pr-2 italic"
                style={{
                  fontFamily: "'Playlist', 'Kaushan Script', cursive",
                  fontSize: "1.18em",
                  background: "linear-gradient(105deg, #0284c7 0%, #38bdf8 30%, #a855f7 65%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Noticed.
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#475569] font-normal max-w-[560px] text-center leading-relaxed mt-3 sm:mt-4 mb-5 sm:mb-6">
            We help your business appear where customers are searching and reach the right people through online advertising.
          </p>

          {/* Explore Button */}
          <button className="group bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-semibold py-2.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer select-none">
            <span>Explore</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* BOTTOM: 4 TILTED OVERLAPPING CARDS */}
        <div className="relative z-30 w-full max-w-[1200px] flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-2 sm:px-4 pt-2 sm:pt-4 pb-1">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-[120px] sm:w-[160px] md:w-[200px] lg:w-[235px] xl:w-[255px] aspect-[1/0.95] shrink-0 relative rounded-2xl sm:rounded-3xl overflow-hidden border-[3px] sm:border-[4px] border-white shadow-[0_15px_35px_rgba(15,23,42,0.18)] group transition-all duration-500 ease-out hover:scale-108 hover:shadow-[0_25px_50px_rgba(15,23,42,0.28)] hover:z-40 hover:rotate-0 cursor-pointer ${card.rotation} ${card.translate}`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 160px, (max-width: 1200px) 240px, 300px"
              />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

// -----------------------------
// MAIN HERO SLIDER
// -----------------------------
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(3);
  const slides = [Slide1, Slide2, Slide3, Slide4];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <div className="w-full px-4 md:px-8 py-4 md:py-8 pt-24 md:pt-28 bg-ivory min-h-screen overflow-hidden">
      <section className="relative w-full h-[calc(100vh-8rem)] min-h-[600px] z-10">

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

