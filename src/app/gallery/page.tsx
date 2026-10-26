"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: "/gallery/1st-aniversary-img-05.webp",
    label: "1st Anniversary Celebration",
    category: "Team",
    categories: ["Team", "Office"]
  },
  {
    id: 2,
    src: "/gallery/2nd-aniversary-img-1.JPG",
    label: "2nd Anniversary Cake Cutting",
    category: "",
    categories: []
  },
  {
    id: 3,
    src: "/gallery/2nd-aniversary-img-2.JPG",
    label: "Team Prodbiz Celebrations",
    category: "Team",
    categories: ["Team"]
  },
  {
    id: 4,
    src: "/gallery/2nd-aniversary-img-3.JPG",
    label: "Honoring Our Guests",
    category: "Office",
    categories: ["Office"]
  },
  {
    id: 5,
    src: "/gallery/2nd-aniversary-img-4.JPG",
    label: "Office Core Values & Culture",
    category: "Office",
    categories: ["Office"]
  },
  {
    id: 6,
    src: "/gallery/chirstmas-img-1.webp",
    label: "Christmas Celebration",
    category: "Events",
    categories: ["Events"]
  },
  {
    id: 7,
    src: "/gallery/chirstmas-img-2.webp",
    label: "Christmas Festive Gathering",
    category: "Events",
    categories: ["Events"]
  },
  {
    id: 8,
    src: "/gallery/chirstmas-img-3.webp",
    label: "Festive Vibes & Smiles",
    category: "",
    categories: []
  },
  {
    id: 9,
    src: "/gallery/bathukamma-celebrations.JPG",
    label: "Bathukamma Celebrations",
    category: "Events",
    categories: ["Events"]
  }
];

interface GalleryItem {
  id: number;
  src: string;
  label: string;
  category: string;
  categories?: string[];
}

// Mobile Carousel Row with conditional arrows:
// Shows right arrow when images need to move left (can scroll further right)
// Shows left arrow when images need to move right (scrolled past start)
function MobileGalleryRow({
  images,
  onSelectImage,
}: {
  images: GalleryItem[];
  onSelectImage: (image: GalleryItem) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const timer = setTimeout(checkScroll, 200);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [images, checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 240;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow: Rendered on left side if images need to move right (canScrollLeft) */}
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll row left"
          onClick={() => scroll('left')}
          className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.22)] border border-white/90 flex items-center justify-center text-[#047880] hover:bg-[#047880] hover:text-white active:scale-90 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Horizontal Scrollable Images Row */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-3 overflow-x-auto scroll-smooth py-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image) => {
          return (
            <div
              key={image.id}
              onClick={() => onSelectImage(image)}
              className="relative shrink-0 w-[220px] sm:w-[260px] h-[150px] sm:h-[170px] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] transition-all group"
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                sizes="(max-width: 640px) 220px, 260px"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Hover zoom icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Category/Label Tag */}
              <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full border border-white/10">
                  {image.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Arrow: Rendered on right side if images need to move left (canScrollRight) */}
      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll row right"
          onClick={() => scroll('right')}
          className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.22)] border border-white/90 flex items-center justify-center text-[#047880] hover:bg-[#047880] hover:text-white active:scale-90 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5 -mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    activeTab === 'All'
      ? galleryImages
      : galleryImages.filter(
          (img) =>
            img.category === activeTab ||
            (img.categories && img.categories.includes(activeTab))
        );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedIndex(null);
  };

  const handleSelectImage = (image: GalleryItem) => {
    const idx = filteredImages.findIndex((img) => img.id === image.id);
    setSelectedIndex(idx >= 0 ? idx : 0);
  };

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev !== null && filteredImages.length > 0 ? (prev + 1) % filteredImages.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null && filteredImages.length > 0
            ? (prev - 1 + filteredImages.length) % filteredImages.length
            : null
        );
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent scrolling when modal is open
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex, filteredImages.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && filteredImages.length > 0) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && filteredImages.length > 0) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const ImageCard = ({
    index,
    image,
    className,
  }: {
    index?: number;
    image?: GalleryItem;
    className: string;
  }) => {
    const targetImage = image ?? (index !== undefined ? filteredImages[index] : undefined);
    if (!targetImage) return null;

    return (
      <div
        onClick={() => handleSelectImage(targetImage)}
        className={`relative group overflow-hidden rounded-2xl bg-gray-100 cursor-pointer ${className} shadow-sm hover:shadow-xl transition-all duration-500`}
      >
        <Image
          src={targetImage.src}
          alt={targetImage.label}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay with zoom icon on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
        {/* Label Pill */}
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border border-white/10">
            {targetImage.label}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff2e8] via-[#fff9f4] to-[#fffff0] relative overflow-x-clip">
      {/* Ambient Glow Blobs */}
      <div
        className="absolute rounded-full pointer-events-none blur-[90px] opacity-40 w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] top-[4%] -right-[10%] z-0"
        style={{
          background: "radial-gradient(circle, hsl(42,80%,75%) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none blur-[90px] opacity-40 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] top-[14%] -left-[10%] z-0"
        style={{
          background: "radial-gradient(circle, hsl(40,60%,82%) 0%, transparent 70%)",
        }}
      />

      {/* ── Hero Section ── */}
      <section className="relative z-10 w-full bg-[#fff2e8] h-[480px] sm:h-[540px] md:h-auto flex flex-col items-center justify-center pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-l-2 border-b-2 border-[#fff2e8] rounded-bl-[4.5rem] sm:rounded-bl-[6.5rem] lg:rounded-bl-[9rem] shadow-[0_22px_35px_-10px_rgba(180,110,40,0.22),0_8px_16px_-6px_rgba(0,0,0,0.06)]">
        {/* Top-Left Abstract Waves */}
        <img
          src="/services/logo-branding/top-corner-transparent.png"
          alt="Abstract corner decoration"
          className="absolute top-0 left-0 w-[180px] sm:w-[300px] md:w-[420px] lg:w-[500px] object-contain pointer-events-none select-none z-0"
        />

        {/* Right Bottom Corner Abstract Wave */}
        <img
          src="/services/logo-branding/bottom-corner-transparent.png"
          alt="Abstract corner decoration"
          className="absolute bottom-0 right-0 w-[180px] sm:w-[280px] md:w-[380px] lg:w-[480px] object-contain pointer-events-none select-none z-0"
        />
        {/* Hero Content Column */}
        <div className="max-w-[860px] w-full mx-auto flex flex-col items-center text-center my-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 border border-[hsl(38,40%,72%)] rounded-full py-[6px] px-[18px] text-[0.72rem] sm:text-xs font-bold tracking-[0.12em] text-[hsl(28,30%,35%)] bg-[hsla(40,60%,96%,0.7)] backdrop-blur-[6px] mb-5 sm:mb-6 shadow-sm">
            <span className="text-[hsl(40,70%,52%)] text-[0.85rem]">✦</span>
            OUR GALLERY
          </div>

          {/* Headline */}
          <div className="w-full mb-5 sm:mb-6 flex flex-col items-center">
            {/* Line 1 — Star + 'A Glimpse Into' + ThreeLines */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
              <div className="flex items-center shrink-0 pointer-events-none">
                <Image
                  src="/services/logo-branding/star.png"
                  alt="sparkle stars"
                  width={80}
                  height={80}
                  className="w-8 sm:w-12 md:w-16 h-auto object-contain opacity-90"
                />
              </div>

              <h1 className="inline font-extrabold leading-[1.15] tracking-[-0.02em] text-[clamp(1.75rem,4.5vw,3.75rem)] text-[#1a1206] px-1 whitespace-nowrap">
                A Glimpse Into
              </h1>

              <div className="flex items-center shrink-0 pointer-events-none -mt-4 sm:-mt-6">
                <Image
                  src="/services/logo-branding/threelines.png"
                  alt="decorative accent lines"
                  width={64}
                  height={64}
                  className="w-7 sm:w-10 md:w-14 h-auto object-contain opacity-90"
                />
              </div>
            </div>

            {/* Line 2 — 'Prodbiz.' in chocolate/terracotta gradient */}
            <div className="flex items-center justify-center mt-0.5 sm:mt-1">
              <span
                className="inline font-extrabold leading-[1.15] tracking-[-0.02em] text-[clamp(2rem,5vw,4.2rem)] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #361508 0%, #4a1e0a 20%, #6b2d14 40%, #7a3318 60%, #8c3d1e 78%, #a85228 100%)",
                }}
              >
                Prodbiz.
              </span>
            </div>
          </div>

          {/* Body Copy */}
          <p className="text-[clamp(0.95rem,1.6vw,1.05rem)] leading-[1.65] text-[hsl(25,15%,38%)] text-center max-w-[780px] w-full mx-auto">
            Explore the people, moments and experiences that make Prodbiz what it is.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative z-10 mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">

        {/* Filter Buttons */}
        <div className="w-full mb-12 sm:mb-16">
          <div className="gallery-filter-scroll flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2.5 sm:gap-3 pl-1 pr-6 sm:px-0">
            {['All', 'Team', 'Office', 'Events'].map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-7 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 whitespace-nowrap cursor-pointer ${activeTab === tab
                  ? 'bg-[#047880] text-white shadow-md'
                  : 'bg-transparent text-gray-600 border border-gray-300 hover:border-[#047880] hover:text-[#047880]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Desktop Exact Layout */}
        <div className="hidden lg:flex flex-col gap-6 w-full mx-auto mb-24 sm:mb-32">
          {activeTab === 'All' ? (
            <div className="grid grid-cols-3 gap-6">
              {/* Left Side (Col 1 & 2) */}
              <div className="col-span-2 flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-6">
                    <ImageCard index={0} className="h-[280px]" /> {/* 1st Anniversary */}
                    <ImageCard index={1} className="h-[280px]" /> {/* 2nd Anniversary Cake */}
                  </div>
                  {/* Column 2 */}
                  <div className="flex flex-col gap-6">
                    <ImageCard index={2} className="h-[380px]" /> {/* Team Prodbiz */}
                    <ImageCard index={3} className="h-[180px]" /> {/* Honoring Guests */}
                  </div>
                </div>

                {/* Two items side-by-side spanning Col 1 & 2 */}
                <div className="grid grid-cols-2 gap-6">
                  <ImageCard index={4} className="h-[240px]" /> {/* Office Core Values */}
                  <ImageCard index={5} className="h-[240px]" /> {/* Christmas Celebration */}
                </div>
              </div>

              {/* Right Side (Col 3) */}
              <div className="col-span-1 flex flex-col gap-6">
                <ImageCard index={6} className="h-[260px]" /> {/* Christmas Gathering */}
                <ImageCard index={7} className="h-[260px]" /> {/* Festive Smiles */}
                <ImageCard index={8} className="h-[280px]" /> {/* Bathukamma Celebrations */}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <ImageCard key={image.id} image={image} className="h-[280px]" />
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid - Mobile Rows with Conditional Arrows */}
        <div className="lg:hidden flex flex-col gap-5 sm:gap-6 w-full mb-20 sm:mb-28">
          {filteredImages.length > 4 ? (
            <>
              {/* Row 1 */}
              <MobileGalleryRow
                images={filteredImages.slice(0, Math.ceil(filteredImages.length / 2))}
                onSelectImage={handleSelectImage}
              />
              {/* Row 2 */}
              <MobileGalleryRow
                images={filteredImages.slice(Math.ceil(filteredImages.length / 2))}
                onSelectImage={handleSelectImage}
              />
            </>
          ) : (
            <MobileGalleryRow
              images={filteredImages}
              onSelectImage={handleSelectImage}
            />
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center text-center">
          <div className="h-0.5 bg-[#ff863c] w-12 mb-8 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-2 tracking-tight">
            More Than Work.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#047880] mb-8 tracking-tight">
            It's the People Behind It.
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-[17px] leading-relaxed mb-8">
            Great work starts with great people, ideas and collaboration.{" "}
            <br className="hidden sm:block" />
            Our gallery captures the moments, experiences and people{" "}
            <br className="hidden sm:block" />
            that make everyday life at Prodbiz special.
          </p>

          <div className="h-0.5 bg-[#ff863c] w-12 rounded-full"></div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button - Circular shape at top right */}
          <button
            type="button"
            aria-label="Close pop up"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-white transition-all hover:scale-110 active:scale-95 z-[100] w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 shadow-2xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-2 sm:left-8 text-white hover:text-white transition-all hover:scale-110 hover:-translate-y-0.5 z-50 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#15b9bc] to-[#047880] shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.3),0_6px_12px_rgba(0,0,0,0.5)] border border-[#03595f]"
            onClick={handlePrev}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-1 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-2 sm:right-8 text-white hover:text-white transition-all hover:scale-110 hover:-translate-y-0.5 z-50 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#15b9bc] to-[#047880] shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.3),0_6px_12px_rgba(0,0,0,0.5)] border border-[#03595f]"
            onClick={handleNext}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 ml-1 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].label}
              width={1600}
              height={1066}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl select-none"
              priority
            />
            {/* Label in Modal */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-6 py-2 rounded-full font-medium shadow-lg border border-white/10 select-none">
              {filteredImages[selectedIndex].label}
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white/80 font-medium tracking-widest text-xs sm:text-sm bg-black/60 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full border border-white/15 select-none z-[100]">
            {selectedIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
