"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const CarouselCard = ({ s, idx, activeIndexRaw, total = 5 }: { s: any, idx: number, activeIndexRaw: MotionValue<number>, total?: number }) => {
  const y = useTransform(activeIndexRaw, (val: number) => {
    let dist = (idx - (val % total));
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;
    return dist * 85; // Positive dist = shift down, negative dist = shift up
  });

  const scale = useTransform(activeIndexRaw, (val: number) => {
    let dist = (idx - (val % total));
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;
    return 1 - (Math.abs(dist) * 0.1); // 1, 0.9, 0.8...
  });

  const opacity = useTransform(activeIndexRaw, (val: number) => {
    let dist = (idx - (val % total));
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;
    const absDist = Math.abs(dist);
    // Multiply by 0.6 so that at absDist=2 (4th card), opacity is 0
    // This ensures only 3 cards are visible on the UI.
    return Math.max(0, 1 - (absDist * 0.6));
  });

  const zIndex = useTransform(activeIndexRaw, (val: number) => {
    let dist = (idx - (val % total));
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;
    return Math.round(5 - Math.abs(dist));
  });

  const boxShadow = useTransform(activeIndexRaw, (val: number) => {
    let dist = (idx - (val % total));
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;
    const absDist = Math.abs(dist);
    const alpha = Math.max(0, 0.08 * (1 - absDist * 1.5));
    return `0 10px 40px rgba(0, 0, 0, ${alpha})`;
  });

  return (
    <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", transform: "translateY(-50%)", zIndex: 1 }}>
      <motion.div
        className="ow-stacked-card-wrapper"
        style={{ width: "100%", y, scale, opacity, zIndex }}
      >
        <motion.div className="ow-stacked-card" style={{ boxShadow, backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
          <div className="ow-stacked-card__icon" style={{ backgroundColor: s.color }}>
            {s.icon}
          </div>
          <div className="ow-stacked-card__body">
            <span className="ow-stacked-card__title">{s.name}</span>
            <span className="ow-stacked-card__desc">{s.desc}</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const projects = [
  {
    id: "01",
    label: "Website Design",
    accentColor: "#3a9e8f",
    title: "Russh Super Speciality Hospital",
    category: "Healthcare Website",
    description:
      "A modern, user-friendly website that helps patients explore hospital services, departments, doctors, and facilities with ease.",
    tags: ["Website Design", "Healthcare"],
    image: "/home-page/our-work/russh.png",
    alt: "Russh Super Speciality Hospital Website",
  },
  {
    id: "02",
    label: "Brand Identity",
    accentColor: "#e58b52",
    title: "Origin Homeopathy",
    category: "Brand Identity",
    description:
      "We created the brand logo, designed promotional banners, and added framed designs inside the hospital to give the brand a clear and consistent look.",
    tags: ["Logo Design", "Print Design"],
    image: "/home-page/our-work/origin.png",
    alt: "Origin Homeopathy Brand Identity Design",
  },
  {
    id: "03",
    label: "Social Media",
    accentColor: "#7b8295",
    title: "Shri Swaraa Hospital",
    category: "Social Media Management",
    description:
      "We plan content, design engaging posts and reels, and shoot videos to help the hospital connect with patients and share useful health information.",
    tags: ["Content Creation", "Reels & Videos"],
    image: "/home-page/our-work/shriswaraa.png",
    alt: "Shri Swaraa Hospital Social Media Content",
  },
  {
    id: "04",
    label: "Digital Marketing",
    accentColor: "#ff863c",
    title: "Ricch Hotel",
    category: "Digital Marketing",
    description:
      "We manage SEO, online advertising, and digital marketing to help Ricch Hotel improve its online visibility and reach more potential guests.",
    tags: ["SEO", "Online Advertising"],
    image: "/home-page/our-work/ricch.jpg",
    alt: "Ricch Hotel Digital Marketing",
  }
];

const GAP = 20; // px — 1.25rem

export default function OurWork() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the carousel
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselContainerRef,
    offset: ["start start", "end end"]
  });
  // Map progress (0 to 1) to activeIndex (0 to 15, looping 3 times)
  const activeIndexRaw = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // Scroll tracking for the second carousel
  const carouselContainerRef2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: carouselContainerRef2,
    offset: ["start start", "end end"]
  });
  // Map progress (0 to 1) to activeIndex (0 to 3, scrolling exactly once through 4 items)
  const activeIndexRaw2 = useTransform(scrollYProgress2, [0, 1], [0, 3]);

  const computeLayout = useCallback(() => {
    const w = window.innerWidth;
    const vc = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
    setVisibleCount(vc);
    if (viewportRef.current) {
      const vw = viewportRef.current.clientWidth;
      setCardWidth((vw - GAP * (vc - 1)) / vc);
    }
  }, []);

  useEffect(() => {
    computeLayout();
    const ro = new ResizeObserver(computeLayout);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [computeLayout]);

  // Clamp index when layout changes
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, projects.length - visibleCount)));
  }, [visibleCount]);

  const maxIndex = Math.max(0, projects.length - visibleCount);
  const showLeft = index > 0;
  const showRight = index < maxIndex;
  const translateX = cardWidth > 0 ? index * (cardWidth + GAP) : 0;

  const goLeft = () => setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  const goRight = () => setIndex((i) => (i < maxIndex ? i + 1 : 0));

  return (
    <section className="section bg-ivory overflow-x-clip lg:py-6 xl:py-8 min-[1400px]:py-[var(--section-padding)]">
      <div className="container">
        {/* Header Section */}
        <div className="section-header text-center w-full max-w-5xl lg:max-w-full min-[1400px]:max-w-5xl mx-auto lg:mb-4 xl:mb-5 min-[1400px]:mb-[clamp(35px,5vw,75px)]">
          <span className="section-label mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4 inline-flex lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px]">OUR WORK</span>
          <h2 className="w-full section-title lg:w-full lg:max-w-full lg:mx-auto lg:text-center min-[1400px]:max-w-[900px] min-[1400px]:mx-0 text-3xl sm:text-4xl md:text-5xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[52px] font-extrabold text-[#492c28] mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6 leading-[1.1] lg:leading-[1.15] min-[1400px]:leading-[1.1] tracking-tight md:whitespace-nowrap">
            See What We Create <span className="text-[#047880]">for Businesses<span className="text-[#ff863c]">.</span></span>
          </h2>
          <p className="section-description mx-auto text-muted text-lg lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-lg lg:leading-normal xl:leading-normal min-[1400px]:leading-normal lg:max-w-[650px] xl:max-w-[720px] min-[1400px]:max-w-[650px]">
            From professional websites and memorable branding to engaging social media and digital marketing, we create digital solutions that help businesses build a stronger presence and connect with their customers.
          </p>
        </div>

        {/* Carousel */}
        <div className="ow-carousel-outer lg:px-8 xl:px-12 min-[1400px]:px-0 lg:mb-3 xl:mb-4 min-[1400px]:mb-8">
          {/* Left arrow — only when there are cards to go back to */}
          {showLeft && (
            <button className="ow-arrow ow-arrow--left lg:w-9 lg:h-9 xl:w-10 xl:h-10 min-[1400px]:w-[46px] min-[1400px]:h-[46px] lg:left-[14px] xl:left-[28px] min-[1400px]:-left-[23px]" onClick={goLeft} aria-label="Previous project">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-5 min-[1400px]:h-5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Viewport — clips overflow */}
          <div className="ow-carousel-viewport lg:rounded-xl xl:rounded-2xl min-[1400px]:rounded-[1.5rem]" ref={viewportRef}>
            <div
              className="ow-carousel-track"
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {projects.map((p, i) => (
                <div
                  key={p.id}
                  className="ow-card lg:rounded-xl xl:rounded-2xl min-[1400px]:rounded-[1.5rem]"
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : undefined,
                    "--ow-accent": p.accentColor,
                    "--ow-delay": `${i * 80}ms`,
                  } as React.CSSProperties}
                >
                  {/* Full-bleed image */}
                  <div className="ow-card__img-wrap lg:min-h-[190px] xl:min-h-[205px] min-[1400px]:min-h-[280px]">
                    <Image src={p.image} alt={p.alt} fill className="ow-card__img" />
                    <div className="ow-card__label lg:top-2.5 lg:left-2.5 min-[1400px]:top-4 min-[1400px]:left-4">
                      <span className="lg:text-[9.5px] xl:text-[10px] min-[1400px]:text-[0.68rem] lg:px-2.5 lg:py-0.5 min-[1400px]:px-3 min-[1400px]:py-1">{p.id} — {p.label}</span>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="ow-card__body lg:p-4 lg:pt-3.5 lg:pb-4.5 xl:p-4.5 min-[1400px]:p-5 lg:gap-1.5 min-[1400px]:gap-[0.45rem]">
                    <p className="ow-card__title lg:text-[15px] xl:text-[16px] min-[1400px]:text-base leading-snug">{p.title}</p>
                    <p className="ow-card__desc lg:text-[12px] xl:text-[12.5px] min-[1400px]:text-[0.77rem] lg:leading-[1.45] xl:leading-[1.5] min-[1400px]:leading-relaxed lg:line-clamp-3 xl:line-clamp-3 min-[1400px]:line-clamp-3">{p.description}</p>
                    <div className="ow-card__tags lg:gap-1.5 min-[1400px]:gap-[0.35rem] lg:mt-1.5 min-[1400px]:mt-[0.2rem]">
                      {p.tags.map((t) => (
                        <span key={t} className="ow-card__tag lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-[0.67rem] lg:px-2.5 lg:py-0.5 xl:px-2.5 xl:py-1 min-[1400px]:px-[0.55rem] min-[1400px]:py-[0.18rem]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow — only when there are cards ahead */}
          {showRight && (
            <button className="ow-arrow ow-arrow--right lg:w-9 lg:h-9 xl:w-10 xl:h-10 min-[1400px]:w-[46px] min-[1400px]:h-[46px] lg:right-[14px] xl:right-[28px] min-[1400px]:-right-[23px]" onClick={goRight} aria-label="Next project">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-5 min-[1400px]:h-5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Page dots */}
        {maxIndex > 0 && (
          <div className="ow-page-dots mb-10 sm:mb-14 md:mb-16 lg:mb-2 xl:mb-3 min-[1400px]:mb-16 lg:mt-2 xl:mt-3 min-[1400px]:mt-0">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`ow-page-dot${i === index ? " ow-page-dot--active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* ── Services Strip ─────────────────────────────────────────────────── */}
        {false && (
          <div ref={carouselContainerRef} style={{ height: "250vh", position: "relative" }}>
            <div className="ow-services" style={{ position: "sticky", top: "15vh", height: "70vh", margin: 0, alignItems: "center" }}>

              {/* LEFT: dark panel with service items */}
              <div className="ow-services__img-panel ow-stacked-container">
                <div className="ow-stacked-items ow-stacked-items--5" style={{ height: "300px", position: "relative" }}>
                  {[
                    {
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
                      color: "#3a9e8f", name: "Websites", desc: "Business websites, landing pages & online stores"
                    },
                    {
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
                      color: "#d97c45", name: "Branding", desc: "Logos, identity & business materials"
                    },
                    {
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
                      color: "#6b7280", name: "Social Media", desc: "Posts, reels, campaigns & promotions"
                    },
                    {
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l5.25 5 2.625-8 3.5 13 4.375-15 4.375 5"></path></svg>,
                      color: "#ff7828", name: "Marketing", desc: "SEO, Google Ads & social advertising"
                    },
                    {
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
                      color: "#00bee8", name: "Creative Design", desc: "Posters, brochures, banners & promotional materials"
                    },
                  ].map((s, idx) => (
                    <CarouselCard key={s.name} s={s} idx={idx} activeIndexRaw={activeIndexRaw} />
                  ))}
                </div>
              </div>

              {/* RIGHT: heading panel (no background) */}
              <div className="ow-services__text-panel">
                <div className="ow-services__text-content">
                  <p className="section-label mb-4">What We Do</p>
                  <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] font-extrabold text-[#492c28] mb-6 leading-[1.2] tracking-tight">
                    <span className="block">More Than</span>
                    <span className="block mt-1.5 sm:mt-2 text-[#047880]">
                      Just Websites<span className="text-[#ff863c]">.</span>
                    </span>
                  </h2>
                  <p className="section-description text-muted text-lg" style={{ maxWidth: "42ch", margin: "0 auto" }}>
                    We create the digital and marketing materials your business needs.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── Businesses Strip (Reversed Layout) ────────────────────────────── */}
        <div ref={carouselContainerRef2} className="pt-8 sm:pt-12 md:pt-0" style={{ height: "220vh", position: "relative", zIndex: 10 }}>
          <div className="ow-services ow-services--reversed" style={{ position: "sticky", top: "16vh", height: "auto", margin: 0, alignItems: "center" }}>

            {/* LEFT (visually right on desktop): dark panel with business items */}
            <div className="ow-services__img-panel ow-stacked-container order-2 md:order-2 mt-4 sm:mt-6 md:mt-0">
              <div className="ow-stacked-items ow-stacked-items--4" style={{ height: "200px", position: "relative" }}>
                {[
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>,
                    color: "#fca5a5",
                    name: "New Businesses",
                    desc: "Startups • New Ventures • Personal Brands"
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
                    color: "#8ba8f0",
                    name: "Local Businesses",
                    desc: "Shops • Restaurants • Clinics • Salons • Services"
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
                    color: "#d5a57a",
                    name: "Growing Companies",
                    desc: "Manufacturers • Real Estate • Healthcare • Education"
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
                    color: "#a56fe7",
                    name: "Established Businesses",
                    desc: "Corporate Websites • Digital Marketing • Brand Development"
                  },
                ].map((s, idx) => (
                  <CarouselCard key={s.name} s={s} idx={idx} activeIndexRaw={activeIndexRaw2} total={4} />
                ))}
              </div>
            </div>

            {/* RIGHT (visually left on desktop): heading panel (no background) */}
            <div className="ow-services__text-panel order-1 md:order-1 pt-6 sm:pt-8 md:pt-0 pb-6 sm:pb-8 md:pb-0">
              <div className="ow-services__text-content">
                <p className="section-label mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4 inline-flex lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px]">Who We Work With</p>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[28px] xl:text-[32px] min-[1400px]:text-[50px] font-extrabold text-[#492c28] mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6 leading-[1.2] lg:leading-[1.15] min-[1400px]:leading-[1.2] tracking-tight">
                  <span className="block">Built for Businesses</span>
                  <span className="block mt-1.5 sm:mt-2 text-[#047880]">
                    of Every Size<span className="text-[#ff863c]">.</span>
                  </span>
                </h2>
                <p className="section-description text-muted text-lg lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-lg lg:leading-normal xl:leading-normal min-[1400px]:leading-normal mx-auto mb-6 sm:mb-8 md:mb-0 lg:max-w-[580px] xl:max-w-[620px] min-[1400px]:max-w-[650px]" style={{ maxWidth: "42ch" }}>
                  Whether you&apos;re starting a new business, running a local store or growing an established company, we create digital solutions based on what your business actually needs.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 sm:mt-6 bg-[#114e4b] rounded-[2rem] overflow-hidden shadow-xl w-full flex flex-col lg:flex-row items-stretch relative">

          {/* Left Text Content */}
          <div className="p-6 sm:p-10 md:p-12 lg:py-10 lg:px-10 xl:py-14 xl:pl-24 xl:pr-12 w-full lg:w-[55%] xl:w-[50%] flex flex-col items-start text-left z-10 relative justify-center shrink-0">
            <h2 className="text-3xl md:text-4xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[46px] font-extrabold text-white mb-4 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-4 xl:min-[1400px]:mb-5 leading-[1.1] lg:leading-[1.15] min-[1400px]:leading-[1.1] tracking-tight">
              <span className="block sm:whitespace-nowrap mb-1 xl:mb-2">Your Business Could</span>
              <span className="block text-[#fb923c] sm:whitespace-nowrap">Be Our Next Project.</span>
            </h2>
            <p className="text-base md:text-lg lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-lg text-white/80 mb-6 lg:mb-4 xl:mb-5 min-[1400px]:mb-6 xl:min-[1400px]:mb-8 max-w-[500px] leading-relaxed lg:leading-normal xl:leading-normal min-[1400px]:leading-relaxed">
              Whether you need a website, a new brand identity, engaging content or better online visibility, let&apos;s create something that works for your business.
            </p>
            <div className="flex flex-row items-center gap-2 sm:gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 w-full sm:w-auto">
              <Link href="/work" className="group flex-1 sm:flex-initial inline-flex items-center justify-between bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-[#114e4b] hover:-translate-y-1 active:scale-95 rounded-full pl-3 sm:pl-5 pr-1 sm:pr-1.5 py-1.5 lg:pl-3.5 lg:pr-1 lg:py-1 xl:pl-4 xl:pr-1.5 xl:py-1 min-[1400px]:pl-6 min-[1400px]:pr-1.5 min-[1400px]:py-1.5 transition-all duration-300 shadow-md hover:shadow-lg min-w-0">
                <span className="font-extrabold text-[11.5px] sm:text-[14px] lg:text-[12px] xl:text-[13px] min-[1400px]:text-[15px] mr-1.5 sm:mr-3 lg:mr-2 xl:mr-2.5 min-[1400px]:mr-3 tracking-wide whitespace-nowrap">View All Our Work</span>
                <div className="bg-white rounded-full flex items-center justify-center w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] lg:w-[28px] lg:h-[28px] xl:w-[30px] xl:h-[30px] min-[1400px]:w-[38px] min-[1400px]:h-[38px] shadow-sm relative overflow-hidden flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Image src="/images/3d-icon-view-work.jpg" alt="View Work Icon" fill style={{ objectFit: 'cover', transform: 'scale(1.15)' }} />
                </div>
              </Link>
              <Link href="/contact" className="group flex-1 sm:flex-initial inline-flex items-center justify-between bg-[#ff863c] hover:bg-[#ea580c] hover:-translate-y-1 active:scale-95 rounded-full pl-3 sm:pl-5 pr-1 sm:pr-1.5 py-1.5 lg:pl-3.5 lg:pr-1 lg:py-1 xl:pl-4 xl:pr-1.5 xl:py-1 min-[1400px]:pl-6 min-[1400px]:pr-1.5 min-[1400px]:py-1.5 transition-all duration-300 shadow-md hover:shadow-lg min-w-0">
                <span className="font-extrabold text-white text-[11.5px] sm:text-[14px] lg:text-[12px] xl:text-[13px] min-[1400px]:text-[15px] mr-1.5 sm:mr-3 lg:mr-2 xl:mr-2.5 min-[1400px]:mr-3 tracking-wide whitespace-nowrap">Start Your Project</span>
                <div className="bg-white rounded-full flex items-center justify-center w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] lg:w-[28px] lg:h-[28px] xl:w-[30px] xl:h-[30px] min-[1400px]:w-[38px] min-[1400px]:h-[38px] shadow-sm relative overflow-hidden flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Image src="/images/start-project-icon.jpg" alt="Start Project Icon" fill style={{ objectFit: 'cover', transform: 'scale(1.15)' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Image Content: on mobile, renders behind content with low opacity; on desktop, sits in right column at full opacity */}
          <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[45%] xl:w-[50%] overflow-hidden pointer-events-none lg:pointer-events-auto">
            {/* Small gradient to blend on desktop */}
            <div className="absolute inset-y-0 left-0 w-24 xl:w-32 bg-gradient-to-r from-[#114e4b] to-transparent z-10 hidden lg:block pointer-events-none"></div>

            <div className="absolute inset-0 w-full h-full opacity-20 sm:opacity-25 lg:opacity-100 transition-opacity duration-300">
              <Image
                src="/home-page/our-work/cta-img.jpg"
                alt="Project Illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center lg:object-[left_center]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
