"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ArticleImageCarouselProps {
  images: { src: string; alt: string }[];
}

/**
 * On mobile: full-width carousel with dot pagination, right arrow when more
 * images are ahead, left arrow when scrolled past the first image.
 * On sm+ screens: unchanged side-by-side grid.
 */
export function ArticleImageCarousel({ images }: ArticleImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goPrev = () => setCurrent((c) => Math.max(0, c - 1));
  const goNext = () => setCurrent((c) => Math.min(total - 1, c + 1));

  return (
    <div className="my-14">
      {/* ── Mobile: single-image carousel ── */}
      <div className="block sm:hidden">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md select-none">
          <Image
            key={images[current].src}
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover transition-opacity duration-300"
          />

          {/* Left arrow — shown when NOT on first image (images need to move right) */}
          {current > 0 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#184a41] shadow-[0_4px_14px_rgba(0,0,0,0.35)] border border-[#184a41] flex items-center justify-center text-white hover:bg-[#12362f] active:scale-90 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right arrow — shown when NOT on last image (images need to move left) */}
          {current < total - 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#184a41] shadow-[0_4px_14px_rgba(0,0,0,0.35)] border border-[#184a41] flex items-center justify-center text-white hover:bg-[#12362f] active:scale-90 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Dot pagination */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2.5 bg-[#184a41]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-[#184a41]/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── sm+: side-by-side grid (original layout) ── */}
      <div className="hidden sm:grid grid-cols-2 gap-6">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
