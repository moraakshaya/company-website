"use client";
import Link from "next/link";
import { useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Built Around Your Needs",
    desc: "We create solutions based on what your business actually needs — whether it's one small requirement or a complete project.",
    gradient: "linear-gradient(160deg, #0a3d35 0%, #047880 45%, #3a9e8f 100%)",
    accent: "#5ecec4",
    tag: "Custom Solutions",
    link: "/about",
    bgImage: "/home-page/why-prodbiz/built-around-your-needs.png",
    shadowColor: "#024a52",
  },
  {
    number: "02",
    title: "Creative With a Purpose",
    desc: "We combine creative design with your business goals to create work that looks good and communicates clearly.",
    gradient: "linear-gradient(170deg, #2d1a0e 0%, #a0522d 55%, #e8874a 100%)",
    accent: "#ffb07a",
    tag: "Design & Brand",
    link: "/services",
    bgImage: "/home-page/why-prodbiz/creative-with-purpose.png",
    shadowColor: "#803c15",
  },
  {
    number: "03",
    title: "One Team, Multiple Needs",
    desc: "Branding, websites, content and marketing can all work together under one team.",
    gradient: "linear-gradient(170deg, #0a2e2c 0%, #1a6b5a 55%, #2d9e7e 100%)",
    accent: "#7de8c8",
    tag: "Full Service",
    link: "/services",
    bgImage: "/home-page/why-prodbiz/one-team-multiple-needs.png",
    shadowColor: "#054736",
  },
  {
    number: "04",
    title: "Simple & Clear Communication",
    desc: "We keep the process easy to understand, without unnecessary technical jargon.",
    gradient: "linear-gradient(170deg, #1a0f2e 0%, #3d2080 55%, #6b4fcf 100%)",
    accent: "#b8a0f8",
    tag: "Transparency",
    link: "/about",
    bgImage: "/home-page/why-prodbiz/simple-clear-communication.png",
    shadowColor: "#2b1463",
  },
];

export default function WhyProdbiz() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const showLeft = mobileIndex > 0;
  const showRight = mobileIndex < reasons.length - 1;

  const goLeft = () => setMobileIndex((prev) => Math.max(0, prev - 1));
  const goRight = () => setMobileIndex((prev) => Math.min(reasons.length - 1, prev + 1));

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && showRight) {
      goRight();
    }
    if (isRightSwipe && showLeft) {
      goLeft();
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fffff0] py-20 lg:py-32">

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="text-center w-full max-w-[950px] mx-auto mb-14 lg:mb-16 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#ff863c]"></span>
            <p className="text-[14px] font-extrabold text-[#ff863c] uppercase tracking-widest">WHY PRODBIZ</p>
          </div>
          <h2 className="w-full section-title text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#492c28] leading-[1.1] tracking-tight mb-5 md:whitespace-nowrap">
            Here&apos;s Why Businesses <span className="text-[#047880]">Choose Us<span className="text-[#ff863c]">.</span></span>
          </h2>
          <p className="text-lg md:text-[19px] text-[#492c28]/70 leading-relaxed font-medium max-w-[760px]">
            We don&apos;t believe every business needs the same digital solution. We understand what you need, create what fits, and work with you to build a professional presence that grows with you.
          </p>
        </div>

        {/* ── Mobile: Single Row Carousel with Directional Arrows & Dots ── */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Viewport for horizontal track */}
            <div
              className="overflow-hidden rounded-3xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Horizontal Track (Single Row) */}
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {reasons.map((r) => (
                  <div
                    key={r.number}
                    className="w-full flex-shrink-0 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[400px] p-6 sm:p-8 flex flex-col justify-between shadow-lg"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${r.shadowColor}ff 0%, ${r.shadowColor}e6 35%, ${r.shadowColor}00 90%), url(${r.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "inset 0 -100px 100px -20px rgba(0,0,0,0.5)",
                    }}
                  >
                    {/* Top row: Category tag & slide index */}
                    <div className="flex items-center justify-between z-10">
                      <span
                        className="text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full backdrop-blur-md"
                        style={{ background: "rgba(255,255,255,0.15)", color: r.accent }}
                      >
                        {r.tag}
                      </span>
                      <span className="text-[12px] font-black tracking-[0.2em] text-white/50">
                        {r.number} / 04
                      </span>
                    </div>

                    {/* Bottom Content */}
                    <div className="z-10 mt-auto pt-16">
                      <div className="text-[11px] font-black tracking-[0.2em] text-white/50 mb-2">
                        — {r.number}
                      </div>
                      <h3 className="text-2xl sm:text-[26px] font-extrabold text-white leading-tight mb-2.5">
                        {r.title}
                      </h3>
                      <p className="text-white/75 text-[14px] sm:text-[15px] leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow: rendered directly on the border */}
            {showLeft && (
              <button
                onClick={goLeft}
                aria-label="Previous card"
                className="absolute left-1 sm:left-0 sm:-translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#241411] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.35)] border border-white/20 active:scale-90 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            {/* Right Arrow: rendered directly on the border */}
            {showRight && (
              <button
                onClick={goRight}
                aria-label="Next card"
                className="absolute right-1 sm:right-0 sm:translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#241411] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.35)] border border-white/20 active:scale-90 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </div>

          {/* Dots Pagination Below */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {reasons.map((_, i) => {
              const isActive = mobileIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className="h-1.5 rounded-full transition-all duration-300 focus:outline-none"
                  style={{
                    width: isActive ? "24px" : "6px",
                    backgroundColor: isActive ? "#047880" : "rgba(73, 44, 40, 0.25)",
                  }}
                  aria-label={`Go to reason ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop: horizontal accordion with hover */}
        <div className="hidden lg:flex gap-4" style={{ minHeight: "420px" }}>
          {reasons.map((r, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={r.number}
                className="relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to top, ${r.shadowColor}ff 0%, ${r.shadowColor}e6 35%, ${r.shadowColor}00 90%), url(${r.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: isActive ? "inset 0 -100px 100px -20px rgba(0,0,0,0.4)" : "inset 0 -60px 80px -20px rgba(0,0,0,0.4)",
                  flex: isActive ? "1.7" : "1.1",
                  transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.55s ease",
                  minWidth: 0,
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >

                {/* Top row — only visible when active */}
                <div
                  className="absolute top-6 left-7 right-7 flex items-center pointer-events-none"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.35s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.12)", color: r.accent }}
                  >
                    {r.tag}
                  </span>
                </div>

                {/* Collapsed top: just the number */}
                <div
                  className="absolute top-6 left-7"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  <span className="text-[11px] font-black tracking-[0.2em] text-white/50">
                    — {r.number}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  {/* Active: number then title + desc */}
                  <div
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s",
                      position: isActive ? "relative" : "absolute",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="text-[11px] font-black tracking-[0.2em] text-white/50 mb-2">— {r.number}</div>
                    <h3 className="text-2xl lg:text-[26px] font-extrabold text-white leading-tight mb-2">
                      {r.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed max-w-[300px]">{r.desc}</p>
                  </div>

                  {/* Collapsed: tag + title */}
                  <div
                    style={{
                      opacity: isActive ? 0 : 1,
                      transform: isActive ? "translateY(8px)" : "translateY(0)",
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                      position: isActive ? "absolute" : "relative",
                      pointerEvents: isActive ? "none" : "auto",
                    }}
                  >
                    <span
                      className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-3"
                      style={{ background: "rgba(255,255,255,0.12)", color: r.accent }}
                    >
                      {r.tag}
                    </span>
                    <h3 className="text-[17px] font-extrabold text-white leading-snug mb-1.5 whitespace-normal">
                      {r.title}
                    </h3>
                    <p className="text-white/55 text-[12px] leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
