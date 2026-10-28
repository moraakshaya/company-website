"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTemplate, PenTool, Megaphone, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// --- Types & Dummy Content ---
const baseContent = {
  gallery: ["/our-work/russh.jpg", "/our-work/origin.jpg", "/our-work/shri-swara.jpg", "/our-work/ricch-hotels.jpg"],
  clientOverview: "The client approached us with a vision to completely revamp their digital presence, aiming for a cleaner, modern look that converts visitors into customers.",
  services: ["Creative Direction", "UI/UX Design", "Frontend Development", "Digital Marketing"],
  challenge: "They were struggling with low conversion rates due to an outdated user journey. Our team restructured the entire flow, resulting in a 40% increase in user engagement within the first month.",
  link: "https://example.com"
};

const filters = [
  "ALL",
  "WEBSITES",
  "LOGO DESIGN",
  "BUSINESS CARDS",
  "BROCHURES",
  "FLYERS",
  "MENU CARDS",
  "POSTERS",
  "HOARDINGS",
  "AUTO ADS",
  "CAMPAIGNS",
  "CONTENT CREATION",
  "VIDEO EDITING & REELS",
  "SOCIAL MEDIA MANAGEMENT",
  "ONLINE ADVERTISING"
];

const portfolioItems = [
  {
    id: 1,
    title: "RUSSH HOSPITAL",
    category: "Website Design",
    filter: "WEBSITES",
    image: "/our-work/russh.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    ...baseContent,
    gallery: [
      "/our-work/russh.png",
      "/our-work/russh-00.png",
      "/our-work/russh-00.png",
      "/our-work/russh-00.png",
    ],
    clientOverview: "Russh Hospital needed a modern web platform to streamline patient bookings.",
    challenge: "Organizing doctor schedules was complex. We built a custom interface."
  },
  {
    id: 3,
    title: "ORIGIN HOMEO",
    category: "Logo Design",
    filter: "LOGO DESIGN",
    image: "/our-work/origin.png",
    height: "380px",
    bgColor: "bg-[#492c28]",
    ...baseContent,
    gallery: [
      "/our-work/origin.png",
      "/our-work/origin-00.png",
      "/our-work/origin-00.png",
      "/our-work/origin-00.png",
    ],
    clientOverview: "Origin Homeo needed a professional and trustworthy visual identity to represent their holistic healthcare practice.",
    challenge: "Designing a clean, timeless logo and brand mark that communicates medical credibility, natural healing, and gentle care."
  },
  { id: 2, title: "LAKE TITICACA", category: "Video Editing & Reels", filter: "VIDEO EDITING & REELS", image: "/our-work/russh.jpg", height: "500px", bgColor: "bg-[#492c28]", isVideo: true, ...baseContent },
  { id: 6, title: "LUMINA", category: "Brochures", filter: "BROCHURES", image: "/our-work/russh.jpg", height: "400px", bgColor: "bg-[#184a41]", ...baseContent },
  { id: 4, title: "SHRI SWARA", category: "Social Media", filter: "SOCIAL MEDIA MANAGEMENT", image: "/our-work/shri-swara.jpg", height: "400px", bgColor: "bg-[#ff863c]", ...baseContent },
  { id: 7, title: "GLOBAL CAMPAIGN", category: "Campaigns", filter: "CAMPAIGNS", image: "/our-work/shri-swara.jpg", height: "450px", bgColor: "bg-[#ff863c]", ...baseContent },
  { id: 5, title: "RICCH HOTELS", category: "Online Ads", filter: "ONLINE ADVERTISING", image: "/our-work/ricch-hotels.jpg", height: "450px", bgColor: "bg-[#d3c5c7]", ...baseContent },
  { id: 8, title: "TASTE BITES", category: "Menu Cards", filter: "MENU CARDS", image: "/our-work/origin.jpg", height: "350px", bgColor: "bg-[#492c28]", ...baseContent },
  { id: 9, title: "AUTO MAX", category: "Auto Ads", filter: "AUTO ADS", image: "/our-work/ricch-hotels.jpg", height: "350px", bgColor: "bg-[#d3c5c7]", ...baseContent },
  { id: 10, title: "NEXUS APP", category: "App Development", filter: "WEBSITES", image: "/our-work/russh.jpg", height: "380px", bgColor: "bg-[#047880]", ...baseContent },
  { id: 11, title: "ELEVATE 2026", category: "Posters", filter: "POSTERS", image: "/our-work/shri-swara.jpg", height: "380px", bgColor: "bg-[#ff863c]", ...baseContent },
  { id: 12, title: "GLOW BEAUTY", category: "Content Creation", filter: "CONTENT CREATION", image: "/our-work/ricch-hotels.jpg", height: "500px", bgColor: "bg-[#d3c5c7]", ...baseContent },
  { id: 13, title: "GREEN LEAF", category: "Brochures", filter: "BROCHURES", image: "/our-work/russh.jpg", height: "400px", bgColor: "bg-[#184a41]", ...baseContent },
  { id: 14, title: "PIZZA PLANET", category: "Menu Cards", filter: "MENU CARDS", image: "/our-work/origin.jpg", height: "400px", bgColor: "bg-[#492c28]", ...baseContent },
];

// --- Modal Component ---
const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-8 lg:p-6 xl:p-8 min-[1400px]:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer" onClick={onClose}></div>

      <motion.div
        className="relative bg-white w-full max-w-6xl lg:max-w-[660px] xl:max-w-[760px] min-[1400px]:max-w-6xl h-[82dvh] max-h-[85dvh] md:h-[80vh] md:max-h-[90vh] lg:h-[66vh] lg:max-h-[470px] xl:h-[70vh] xl:max-h-[530px] min-[1400px]:h-[80vh] min-[1400px]:max-h-[90vh] rounded-2xl sm:rounded-3xl lg:rounded-2xl xl:rounded-3xl min-[1400px]:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-2.5 lg:right-2.5 xl:top-3 xl:right-3 min-[1400px]:top-4 min-[1400px]:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-10 min-[1400px]:h-10 bg-black/50 hover:bg-black/70 text-white backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-lg"
          aria-label="Close modal"
        >
          <X size={18} strokeWidth={2.5} className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-5 min-[1400px]:h-5" />
        </button>

        {/* Left Side: Media (Increased height on mobile for clear, immersive viewing) */}
        <div className="w-full md:w-1/2 h-[260px] sm:h-[300px] md:h-full shrink-0 relative bg-[#1a100e] overflow-hidden">
          {project.isVideo ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                poster={project.image}
              >
                <source src={project.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.gallery[currentImageIndex]}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Carousel Controls */}
              {project.gallery && project.gallery.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-3 sm:left-4 lg:left-2 xl:left-3 min-[1400px]:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-10 min-[1400px]:h-10 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all">
                    <ChevronLeft size={20} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-6 min-[1400px]:h-6" />
                  </button>
                  <button onClick={nextImage} className="absolute right-3 sm:right-4 lg:right-2 xl:right-3 min-[1400px]:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-10 min-[1400px]:h-10 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all">
                    <ChevronRight size={20} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-6 min-[1400px]:h-6" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                    {project.gallery.map((_: any, i: number) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentImageIndex ? "w-5 sm:w-6 bg-[#ff863c]" : "w-1.5 bg-white/50"}`} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Right Side: Content (Scrollable on mobile) */}
        <div
          className="w-full md:w-1/2 flex-1 min-h-0 p-5 sm:p-6 md:p-12 lg:p-5 xl:p-6 min-[1400px]:p-12 overflow-y-auto overscroll-contain bg-[var(--color-ivory)] scroll-smooth relative [scrollbar-width:thin] [scrollbar-color:#ff863c_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#ff863c]/50 hover:[&::-webkit-scrollbar-thumb]:bg-[#ff863c] [&::-webkit-scrollbar-thumb]:rounded-full shadow-[0_-8px_16px_rgba(0,0,0,0.06)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-2">
              <div className="w-8 h-[3px] lg:w-5 lg:h-[2px] xl:w-6 xl:h-[2.5px] min-[1400px]:w-8 min-[1400px]:h-[3px] bg-[#ff863c] rounded-full"></div>
              <div className="uppercase tracking-widest text-xs sm:text-sm lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-sm font-black text-[#ff863c]">{project.category}</div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[22px] xl:text-[24px] min-[1400px]:text-5xl font-black text-[#492c28] mb-4 md:mb-8 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-8 leading-tight lg:leading-[1.15]" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>{project.title}</h2>

            <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-2 xl:space-y-2.5 min-[1400px]:space-y-8">
              <div>
                <h3 className="text-xs lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-xs font-bold text-[#492c28] uppercase tracking-widest mb-2 sm:mb-3 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-3 opacity-60">The Brief</h3>
                <p className="text-[#796864] leading-relaxed text-sm md:text-base lg:text-[11.5px] xl:text-[12px] min-[1400px]:text-base font-medium lg:leading-[1.45] xl:leading-[1.5] font-['Inter',sans-serif]">{project.clientOverview}</p>
              </div>

              {project.services && project.services.length > 0 && (
                <div>
                  <h3 className="text-xs lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-xs font-bold text-[#492c28] uppercase tracking-widest mb-2 sm:mb-3 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-3 opacity-60">What We Did</h3>
                  <ul className="grid grid-cols-2 gap-y-2.5 sm:gap-y-3 lg:gap-y-1 xl:gap-y-1.5 min-[1400px]:gap-y-3 gap-x-4">
                    {project.services.map((service: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-[#796864] text-xs sm:text-sm lg:text-[11.5px] xl:text-[12px] min-[1400px]:text-sm font-bold font-['Inter',sans-serif]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff863c]" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xs lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-xs font-bold text-[#492c28] uppercase tracking-widest mb-2 sm:mb-3 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-3 opacity-60">Challenge & Solution</h3>
                <p className="text-[#796864] leading-relaxed text-sm md:text-base lg:text-[11.5px] xl:text-[12px] min-[1400px]:text-base font-medium lg:leading-[1.45] xl:leading-[1.5] font-['Inter',sans-serif]">{project.challenge}</p>
              </div>

              {(project.filter === "WEBSITES" || project.category === "Website Design") && (
                <div className="pt-4 md:pt-6 lg:pt-1.5 xl:pt-2 min-[1400px]:pt-6 pb-2 md:pb-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 lg:gap-1.5 xl:gap-1.5 min-[1400px]:gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 lg:px-3 lg:py-1.5 xl:px-3.5 xl:py-1.5 min-[1400px]:px-8 min-[1400px]:py-4 bg-[#492c28] text-white rounded-full font-bold uppercase tracking-widest lg:tracking-wider xl:tracking-wider min-[1400px]:tracking-widest text-xs sm:text-sm lg:text-[9px] xl:text-[9.5px] min-[1400px]:text-sm hover:bg-[#ff863c] transition-colors shadow-xl hover:-translate-y-1 duration-300"
                  >
                    Visit Live Project <ExternalLink size={16} className="w-4 h-4 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 min-[1400px]:w-4 min-[1400px]:h-4 shrink-0" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getGridPattern = (index: number) => {
  const patternIndex = index % 7;
  switch (patternIndex) {
    case 0:
    case 1:
      return "md:col-span-5";
    case 2:
      return "md:col-span-10";
    case 3:
      return "md:col-span-4 lg:col-span-3";
    case 4:
      return "md:col-span-6 lg:col-span-7";
    case 5:
      return "md:col-span-6 lg:col-span-7";
    case 6:
      return "md:col-span-4 lg:col-span-3";
    default:
      return "md:col-span-5";
  }
};

export default function OurWorksPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const itemsPerPage = 7;

  const handleFilterChange = (filter: string) => {
    if (activeFilter === filter && filter !== "ALL") {
      setActiveFilter("ALL");
    } else {
      setActiveFilter(filter);
    }
    setCurrentPage(1);
  };

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "ALL" || item.filter === activeFilter
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <main className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: "var(--color-ivory)" }}>
      {/* Hero Outer Wrapper */}
      <div className="w-full px-3 sm:px-4 md:px-4 pt-24 sm:pt-24 md:pt-28 lg:pt-[92px] xl:pt-[96px] min-[1400px]:pt-28 pb-8 md:pb-0 overflow-hidden md:overflow-visible">
        <section
          className="relative w-full max-w-[1400px] mx-auto rounded-[2rem] sm:rounded-[2.5rem] md:rounded-none overflow-hidden md:overflow-visible flex flex-col items-center justify-center px-4 sm:px-8 md:px-0 py-10 sm:py-14 md:py-0 h-[480px] sm:h-[540px] md:h-auto md:min-h-0 bg-[#6b2d14] md:bg-transparent"
        >
          {/* Warm radial glow — mobile only (matches about page hero) */}
          <div
            className="absolute inset-0 pointer-events-none z-0 md:hidden"
            style={{
              background:
                "radial-gradient(ellipse 70% 75% at 65% 50%, #8c3d1e 0%, #7a3318 25%, #6b2d14 55%, #4a1e0a 80%, #361508 100%)",
            }}
          />

          {/* Grain/noise texture overlay — mobile only (matches about page hero) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 md:hidden"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Hero Content (Text) */}
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
            {/* Label */}
            <motion.div
              className="flex items-center justify-center gap-2.5 sm:gap-3 mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              {/* Horizontal Line */}
              <div className="w-10 lg:w-7 xl:w-8 min-[1400px]:w-10 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-orange)" }}></div>
              <span className="uppercase tracking-[0.25em] font-bold text-sm md:text-base lg:text-[12px] xl:text-[13px] min-[1400px]:text-base pt-0.5" style={{ color: "var(--color-orange)" }}>
                Our Work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-center flex flex-col items-center mb-6 md:mb-8 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span
                className="text-[32px] md:text-[50px] lg:text-[36px] xl:text-[42px] min-[1400px]:text-[56px] font-black leading-tight tracking-tight text-white md:text-[var(--color-brown)]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Things We’ve
              </span>
              <span
                className="text-[2.2rem] md:text-[3.2rem] lg:text-[2.2rem] xl:text-[2.6rem] min-[1400px]:text-[4rem] leading-[0.9] mt-2 md:mt-0 lg:mt-0.5 xl:mt-1 min-[1400px]:mt-2 text-[#00bee8] md:text-[#184a41]"
                style={{ fontFamily: "'Playlist', 'Kaushan Script', cursive" }}
              >
                Built, Designed &amp; Created.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-center max-w-2xl lg:max-w-xl xl:max-w-2xl text-[14px] md:text-[16px] lg:text-[13.5px] xl:text-[15px] min-[1400px]:text-[16px] leading-relaxed mb-0 md:mb-10 lg:mb-3 xl:mb-4 min-[1400px]:mb-10 text-white/90 md:text-[var(--color-text)] font-medium"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              A collection of websites, brands, campaigns and creative work we’ve made <br className="hidden md:block" /> for businesses like yours.
            </motion.p>
          </div>

          {/* The Mockup Showcase — background image with low opacity on mobile screen, normal showcase on desktop */}
          <div className="absolute inset-0 md:relative md:inset-auto w-full flex justify-center items-center md:items-start mt-0 md:-mt-12 lg:mt-1 xl:mt-2 min-[1400px]:-mt-12 h-full md:h-[600px] lg:h-[360px] xl:h-[420px] min-[1400px]:h-[600px] pointer-events-none md:pointer-events-auto z-0 md:z-10 opacity-20 sm:opacity-25 md:opacity-100 transition-opacity duration-300 overflow-hidden md:overflow-visible">
            <div className="relative w-full lg:w-[1200px] h-full lg:h-[600px] flex justify-center items-center md:items-start shrink-0 lg:scale-[0.59] xl:scale-[0.69] min-[1400px]:scale-100 origin-top">

              {/* --- DECORATIVE ICONS & LINES --- */}

              {/* Top Left Decoration (Web Icon) */}
              <motion.div className="absolute top-[-10%] md:top-[-5%] lg:top-[2%] left-[15%] md:left-[25%] lg:left-[33%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <div className="relative">
                  <img src="/our-work/web-icon.png" alt="Web Icon" className="w-[50px] md:w-[70px] lg:w-[90px] h-auto object-contain pointer-events-none relative z-10" />

                  {/* Dashed line to Phone */}
                  <svg className="absolute top-5 left-[80%] pointer-events-none overflow-visible z-0" width="120" height="60">
                    <path d="M 0 0 Q 55 -40 110 40" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="4,6" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

              {/* Top Right Decoration (Mar Icon) */}
              <motion.div className="absolute top-[-5%] md:top-[0%] lg:top-[0%] right-[15%] md:right-[28%] lg:right-[35%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <div className="relative">
                  <img src="/our-work/mar-icon.png" alt="Marketing Icon" className="w-[40px] md:w-[60px] lg:w-[90px] h-auto object-contain pointer-events-none relative z-10" />

                  {/* Dashed line to Phone */}
                  <svg className="absolute top-[40%] -left-16 pointer-events-none overflow-visible z-0" width="60" height="40">
                    <path d="M 60 10 Q 30 -10 0 20" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,6" strokeLinecap="round" />
                  </svg>

                  {/* Dashed line to Mockup */}
                  <svg className="absolute top-[80%] -right-4 pointer-events-none overflow-visible z-0" width="40" height="60">
                    <path d="M 0 0 Q 20 20 30 60" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,6" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

              {/* Bottom Left Decoration (Logo Icon) */}
              <motion.div className="absolute bottom-[35%] md:bottom-[40%] lg:bottom-[33%] left-[15%] md:left-[25%] lg:left-[37%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                <div className="relative">
                  <img src="/our-work/logo-icon.png" alt="Logo Icon" className="w-[35px] md:w-[55px] lg:w-[55px] h-auto object-contain pointer-events-none relative z-10" />

                  {/* Dashed line to Mockup */}
                  <svg className="absolute -top-[60px] -left-[60px] pointer-events-none overflow-visible z-0" width="100" height="100">
                    <path d="M 0 0 Q 40 50 80 90" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,8" strokeLinecap="round" />
                  </svg>

                  {/* Dashed line to Phone */}
                  <svg className="absolute top-0 left-[20px] md:left-[30px] pointer-events-none overflow-visible z-0" width="200" height="60">
                    <path d="M 0 40 Q 100 80 200 0" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,8" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

              {/* Middle Right Decoration (Marketing Icon) */}
              <motion.div className="absolute top-[30%] md:top-[35%] lg:top-[35%] right-[5%] md:right-[18%] lg:right-[22%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                <img src="/our-work/marketing-icon.png" alt="Digital Marketing Icon" className="w-[25px] md:w-[40px] lg:w-[55px] h-auto object-contain pointer-events-none" />
              </motion.div>

              {/* Dashed Line Between Right Mockups */}
              <motion.div className="absolute top-[32%] md:top-[35%] lg:top-[36%] right-[20%] md:right-[24%] lg:right-[26%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                <svg className="pointer-events-none overflow-visible" width="80" height="100">
                  <path d="M 20 0 Q 80 50 0 100" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,8" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Central Phone Mockup */}
              <motion.div
                className="relative z-30 w-[180px] sm:w-[220px] md:w-[320px] lg:w-[340px] -left-8 sm:-left-12 md:left-0"
                initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                <img src="/our-work/phone.png" className="w-full h-auto drop-shadow-2xl" alt="Phone App" />
              </motion.div>

              {/* Top Left (Website) */}
              <motion.div
                className="absolute top-24 sm:top-28 md:top-0 lg:top-0 left-2 sm:left-6 md:left-20 lg:left-48 w-[130px] sm:w-[150px] md:w-[220px] lg:w-[260px] z-20 !rotate-[-12deg]"
                initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              >
                <img src="/our-work/left-top.png" className="w-full h-auto drop-shadow-xl" alt="Website Design" />
              </motion.div>

              {/* Bottom Left (Branding) */}
              <motion.div
                className="absolute bottom-16 sm:bottom-28 md:bottom-48 lg:bottom-[220px] left-4 sm:left-8 md:left-28 lg:left-56 w-[120px] sm:w-[130px] md:w-[190px] lg:w-[230px] z-20 rotate-[12deg]"
                initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
              >
                <img src="/our-work/left-bottom.png" className="w-full h-auto drop-shadow-xl" alt="Branding Identity" />
              </motion.div>

              {/* Top Right (Social Media) */}
              <motion.div
                className="absolute top-24 sm:top-28 md:top-12 lg:top-20 right-12 sm:right-16 md:right-32 lg:right-64 w-[135px] sm:w-[160px] md:w-[230px] lg:w-[280px] z-20 !rotate-[-8deg]"
                initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <img src="/our-work/right-top.png" className="w-full h-auto drop-shadow-xl" alt="Social Media Campaigns" />
              </motion.div>

              {/* Bottom Right (Digital Marketing) */}
              <motion.div
                className="absolute bottom-14 sm:bottom-24 md:bottom-40 lg:bottom-[200px] right-4 sm:right-12 md:right-36 lg:right-72 w-[120px] sm:w-[130px] md:w-[180px] lg:w-[180px] z-20 !rotate-[10deg]"
                initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}
              >
                <img src="/our-work/right-bottom.png" className="w-full h-auto drop-shadow-xl" alt="Digital Marketing" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Explore Our Work Section */}
      <section className="w-full pb-20 md:pb-32 lg:pb-16 xl:pb-20 min-[1400px]:pb-32 relative z-20 [--card-scale:1] lg:[--card-scale:0.72] xl:[--card-scale:0.84] min-[1400px]:[--card-scale:1]">
        <div className="w-full max-w-[1400px] lg:max-w-[940px] xl:max-w-[1140px] min-[1400px]:max-w-[1400px] mx-auto px-4 md:px-8 lg:px-6 xl:px-8 min-[1400px]:px-8">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-20 lg:mb-7 xl:mb-9 min-[1400px]:mb-20">
            <motion.div
              className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <div className="w-8 sm:w-10 lg:w-6 xl:w-7 min-[1400px]:w-10 h-[2px] bg-[#ff863c]"></div>
              <span className="uppercase tracking-[0.2em] font-bold text-sm lg:text-[10px] xl:text-[11px] min-[1400px]:text-sm text-[#ff863c]">
                EXPLORE OUR WORK
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-[24px] xl:text-[27px] min-[1400px]:text-6xl font-black text-[#492c28] mb-4 sm:mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6 tracking-tight leading-tight lg:leading-[1.15] min-[1400px]:leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              See What We’ve <span className="text-[#047880]">Created</span>.
            </motion.h2>

            <motion.p
              className="text-base md:text-lg lg:text-[12px] xl:text-[12.5px] min-[1400px]:text-lg text-[#5d4945] max-w-2xl lg:max-w-[450px] xl:max-w-[500px] min-[1400px]:max-w-2xl font-medium leading-relaxed lg:leading-[1.5] xl:leading-[1.5] min-[1400px]:leading-relaxed"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              Take a look at some of the websites, branding, social media designs, and marketing work we’ve created for businesses across different industries.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 xl:gap-8 min-[1400px]:gap-16 items-start w-full">
            {/* Sidebar Filters */}
            <motion.div
              className="w-full lg:w-[195px] xl:w-[225px] min-[1400px]:w-[280px] shrink-0 flex flex-row lg:flex-col flex-nowrap lg:flex-wrap gap-2 md:gap-3 lg:gap-1.5 xl:gap-2 min-[1400px]:gap-3 overflow-x-auto lg:overflow-visible no-scrollbar pb-3 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:sticky lg:top-32 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`shrink-0 whitespace-nowrap px-5 py-3 lg:px-3.5 lg:py-2 xl:px-4 xl:py-2.5 min-[1400px]:px-5 min-[1400px]:py-3 rounded-full lg:rounded-lg xl:rounded-xl min-[1400px]:rounded-xl text-center lg:text-left text-xs md:text-sm lg:text-[11px] xl:text-[12px] min-[1400px]:text-sm font-bold tracking-wider uppercase transition-all duration-300 w-auto lg:w-full ${filter === "ALL" ? "hidden lg:block" : "inline-flex items-center justify-center lg:block"
                    } ${activeFilter === filter
                      ? "bg-[#492c28] text-white shadow-md"
                      : "bg-gray-100 lg:bg-transparent text-[#796864] hover:bg-gray-200 lg:hover:bg-[#492c28]/5 hover:text-[#492c28]"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            {/* Bento Grid Container */}
            <div className="w-full flex-1 flex flex-col">
              <motion.div
                className="w-full grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 lg:gap-3.5 xl:gap-4.5 min-[1400px]:gap-6"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              >
                {paginatedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    onClick={() => setSelectedProject(item)}
                    className={`relative group rounded-2xl lg:rounded-xl xl:rounded-2xl min-[1400px]:rounded-2xl overflow-hidden cursor-pointer w-full ${item.bgColor} shadow-sm hover:shadow-xl transition-all duration-300 ${getGridPattern(index)}`}
                    style={{ height: `calc(${item.height} * var(--card-scale, 1))` }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />

                    {/* Video Play Icon overlay for Video types */}
                    {item.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-16 h-16 lg:w-11 lg:h-11 xl:w-13 xl:h-13 min-[1400px]:w-16 min-[1400px]:h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff863c] transition-all duration-300 border border-white/20">
                          <svg className="w-6 h-6 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 min-[1400px]:w-6 min-[1400px]:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                    )}

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>



                    {/* Content Bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-5 lg:p-3.5 xl:p-4 min-[1400px]:p-5 flex justify-between items-end z-10">
                      <div className="flex flex-col justify-end">
                        <h3 className="text-white text-lg lg:text-[14px] xl:text-[16px] min-[1400px]:text-lg font-bold leading-tight tracking-wide mb-1 drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-xs lg:text-[10.5px] xl:text-[11px] min-[1400px]:text-xs font-medium tracking-wider uppercase drop-shadow-md">
                          {item.category}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="w-12 h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10 min-[1400px]:w-12 min-[1400px]:h-12 rounded-full bg-[#184a41] flex items-center justify-center text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[inset_0px_-4px_6px_rgba(0,0,0,0.5),inset_0px_2px_4px_rgba(255,255,255,0.25),0px_10px_20px_rgba(0,0,0,0.4)] border border-[#0f302b] hover:brightness-125 group/btn">
                        <svg className="w-6 h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 min-[1400px]:w-6 min-[1400px]:h-6 transition-transform duration-300 group-hover/btn:translate-x-1.5 group-hover/btn:scale-110 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <motion.div
                  className="mt-12 lg:mt-8 xl:mt-10 min-[1400px]:mt-12 flex justify-center items-center gap-4 lg:gap-3 xl:gap-3.5 min-[1400px]:gap-4 w-full"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 lg:w-8 lg:h-8 xl:w-9 xl:h-9 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full flex items-center justify-center bg-gray-100 text-[#492c28] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff863c] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    &larr;
                  </button>

                  <div className="flex gap-2 lg:gap-1.5 xl:gap-2 min-[1400px]:gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 lg:w-8 lg:h-8 xl:w-9 xl:h-9 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full flex items-center justify-center font-bold text-sm lg:text-xs xl:text-xs min-[1400px]:text-sm transition-all duration-300 shadow-sm ${currentPage === i + 1
                          ? "bg-[#492c28] text-white"
                          : "bg-gray-100 text-[#796864] hover:bg-gray-200"
                          }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 lg:w-8 lg:h-8 xl:w-9 xl:h-9 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full flex items-center justify-center bg-gray-100 text-[#492c28] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff863c] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    &rarr;
                  </button>
                </motion.div>
              )}
            </div>
          </div>


        </div>
      </section>

      {/* Project Modal Render */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
