"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
}

export const serviceGalleries: Record<string, GalleryImage[]> = {
  "logo-branding": [
    {
      src: "/services/logo-branding/image-7.png",
      alt: "Business Card Design",
    },
    {
      src: "/services/logo-branding/image-1.png",
      alt: "Logo Design",
    },
    {
      src: "/services/logo-branding/image-2.png",
      alt: "Menu Card Design",
    },
    {
      src: "/services/logo-branding/image-3.png",
      alt: "Brochure Design",
    },
    {
      src: "/services/logo-branding/image-4.png",
      alt: "Social Campaign Post",
    },
    {
      src: "/services/logo-branding/image-5.png",
      alt: "Event Pass Design",
    },
    {
      src: "/services/logo-branding/image-6.png",
      alt: "Brand Identity",
    },
  ],
  "website-design": [
    {
      src: "/services/website-design/image-1.png",
      alt: "Hospital Web Platform",
    },
    {
      src: "/services/website-design/image-2.png",
      alt: "Responsive Website Mockup",
    },
    {
      src: "/services/website-design/image-3.png",
      alt: "Hotel & Hospitality Website",
    },
    {
      src: "/services/website-design/image-4.png",
      alt: "Corporate Web Design",
    },
    {
      src: "/services/website-design/image-5.png",
      alt: "Mobile UI/UX Experience",
    },
    {
      src: "/services/website-design/image-6.png",
      alt: "Healthcare Portal",
    },
    {
      src: "/services/website-design/image-7.png",
      alt: "Modern Web Workspace",
    },
  ],
  "social-media": [
    {
      src: "/home-page/hero-section/slide-3/social-posts.jpg",
      alt: "Social Media Posts",
    },
    {
      src: "/home-page/hero-section/slide-3/facebook-management.jpg",
      alt: "Channel Management",
    },
    {
      src: "/home-page/hero-section/slide-3/reels-videos.jpg",
      alt: "Instagram Reels & Videos",
    },
    {
      src: "/home-page/hero-section/slide-3/promotional-content.jpg",
      alt: "Promotional Creative",
    },
    {
      src: "/home-page/hero-section/slide-3/brand-creation.jpg",
      alt: "Brand Visuals",
    },
    {
      src: "/home-page/services/shriswara.png",
      alt: "Social Feed Curation",
    },
    {
      src: "/images/slides/slide3.jpg",
      alt: "Brand Campaign Assets",
    },
  ],
  "content-creation": [
    {
      src: "/home-page/hero-section/slide-3/promotional-content.jpg",
      alt: "Promotional Content",
    },
    {
      src: "/images/blog-creative.jpg",
      alt: "Creative Visual Production",
    },
    {
      src: "/home-page/hero-section/slide-3/reels-videos.jpg",
      alt: "Short-form Video & Reels",
    },
    {
      src: "/images/blog-innovation.jpg",
      alt: "Brand Storytelling",
    },
    {
      src: "/home-page/hero-section/slide-3/social-posts.jpg",
      alt: "Social Graphic Content",
    },
    {
      src: "/images/slides/slide1.jpg",
      alt: "Creative Photography",
    },
    {
      src: "/images/slides/slide3.jpg",
      alt: "Visual Styling",
    },
  ],
  "online-advertising": [
    {
      src: "/home-page/hero-section/slide-2/campaign-ads.png",
      alt: "Digital Ad Creatives",
    },
    {
      src: "/home-page/hero-section/slide-4/card3-ads.jpg",
      alt: "Performance Ads",
    },
    {
      src: "/home-page/hero-section/slide-4/card4-targeting.jpg",
      alt: "Audience Targeting",
    },
    {
      src: "/about/marketing.png",
      alt: "Growth Campaign",
    },
    {
      src: "/home-page/hero-section/slide-4/card2-analytics.jpg",
      alt: "Analytics & Conversions",
    },
    {
      src: "/images/slides/slide2.jpg",
      alt: "Ad Strategy",
    },
    {
      src: "/home-page/hero-section/slide-4/card1-seo.jpg",
      alt: "Paid Search Ads",
    },
  ],
  "seo": [
    {
      src: "/home-page/hero-section/slide-4/card1-seo.jpg",
      alt: "Search Engine Optimization",
    },
    {
      src: "/home-page/hero-section/slide-4/card2-analytics.jpg",
      alt: "Rankings & Traffic Analytics",
    },
    {
      src: "/home-page/hero-section/slide-4/card4-targeting.jpg",
      alt: "Keyword & Audience Research",
    },
    {
      src: "/about/marketing.png",
      alt: "Organic Growth Strategy",
    },
    {
      src: "/images/slides/slide4.jpg",
      alt: "Technical Site Audit",
    },
    {
      src: "/images/slides/slide5.jpg",
      alt: "Content Optimization",
    },
    {
      src: "/images/slides/slide6.jpg",
      alt: "Backlink & Authority Building",
    },
  ],
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  }),
};

export interface ServiceWorkGalleryProps {
  images?: GalleryImage[];
  service?: keyof typeof serviceGalleries | string;
}

export default function ServiceWorkGallery({ images, service }: ServiceWorkGalleryProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  // Determine images: direct prop -> service map -> default logo-branding
  const galleryImages: GalleryImage[] =
    images && images.length > 0
      ? images
      : service && serviceGalleries[service]
        ? serviceGalleries[service]
        : serviceGalleries["logo-branding"];

  const total = galleryImages.length;
  const currentIndex = ((page % total) + total) % total;

  const nextSlide = () => {
    setDirection(1);
    setPage((prev) => prev + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setPage((prev) => prev - 1);
  };

  const goToSlide = (idx: number) => {
    if (idx === currentIndex) return;
    const diff = idx - currentIndex;
    setDirection(diff > 0 ? 1 : -1);
    setPage((prev) => prev + diff);
  };

  // Safe accessor helper for desktop 5-column grid layout
  const getImage = (idx: number): GalleryImage => {
    return galleryImages[idx % total] || { src: "", alt: "" };
  };

  return (
    <>
      {/* ── Mobile Single-Row Carousel (One by one, loop continuously, dot pagination, right arrow) ── */}
      <div className="w-full max-w-[420px] mx-auto px-6 block md:hidden">
        {/* Card Frame (Relative container allowing arrow on the border) */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[360px]">
          {/* Image Container (Overflow-hidden to clip slide images within rounded corners) */}
          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl bg-[#f5ede5]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -35 || info.velocity.x < -250) {
                    nextSlide();
                  } else if (info.offset.x > 35 || info.velocity.x > 250) {
                    prevSlide();
                  }
                }}
                className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
              >
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-full object-cover select-none pointer-events-none rounded-[2rem]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Arrow Button — Rendered directly on the right side border */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next image"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 w-11 h-11 rounded-full bg-[#184a41] shadow-[0_4px_18px_rgba(0,0,0,0.3)] border-2 border-white flex items-center justify-center text-white hover:bg-[#113730] active:bg-[#0c2722] active:scale-90 transition-all duration-200"
          >
            <ChevronRight size={22} strokeWidth={2.5} className="translate-x-[1px] text-white" />
          </button>
        </div>

        {/* Dot Pagination at Bottom */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                ? "w-7 bg-[#0e747c]"
                : "w-2.5 bg-[#43261a]/25 hover:bg-[#43261a]/40"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ── Clean 5-Column Grid (Desktop View, Dynamically Loaded from galleryImages) ── */}
      <div className="w-full max-w-[1400px] mx-auto px-6 hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center">
        {/* Col 1 */}
        <div className="flex flex-col gap-4 md:gap-6 hidden lg:flex">
          <img
            src={getImage(0).src}
            alt={getImage(0).alt}
            className="w-full aspect-[3/4] object-cover rounded-[2rem] shadow-lg"
          />
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4 md:gap-6">
          <img
            src={getImage(1).src}
            alt={getImage(1).alt}
            className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-lg"
          />
          <img
            src={getImage(2).src}
            alt={getImage(2).alt}
            className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-lg"
          />
        </div>

        {/* Col 3 (Center focus) */}
        <div className="flex flex-col gap-4 md:gap-6">
          <img
            src={getImage(3).src}
            alt={getImage(3).alt}
            className="w-full aspect-[2/3.2] object-cover rounded-[2rem] shadow-xl"
          />
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-4 md:gap-6">
          <img
            src={getImage(4).src}
            alt={getImage(4).alt}
            className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-lg"
          />
          <img
            src={getImage(5).src}
            alt={getImage(5).alt}
            className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-lg"
          />
        </div>

        {/* Col 5 */}
        <div className="flex flex-col gap-4 md:gap-6 hidden md:flex">
          <img
            src={getImage(6).src}
            alt={getImage(6).alt}
            className="w-full aspect-[3/4] object-cover rounded-[2rem] shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
