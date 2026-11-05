"use client";

import React, { useState, useEffect } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(`https://www.prodbizsolutions.com/blog/${slug}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  const handleInstagramShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
    // Open user's own Instagram in a new tab
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative flex items-center gap-3 max-[439px]:gap-2 lg:gap-2 xl:gap-2.5 min-[1400px]:gap-3">
      {/* Twitter / X Share */}
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="w-9 h-9 max-[439px]:w-7.5 max-[439px]:h-7.5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-9 min-[1400px]:h-9 rounded-full bg-[#184a41] flex items-center justify-center text-white hover:bg-[#0f312a] hover:-translate-y-1 transition-all"
        title="Share on X (Twitter)"
      >
        <svg className="w-4 h-4 max-[439px]:w-3.5 max-[439px]:h-3.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 min-[1400px]:w-4 min-[1400px]:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>

      {/* LinkedIn Share */}
      <a
        href={linkedInShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-9 h-9 max-[439px]:w-7.5 max-[439px]:h-7.5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-9 min-[1400px]:h-9 rounded-full bg-[#184a41] flex items-center justify-center text-white hover:bg-[#0f312a] hover:-translate-y-1 transition-all"
        title="Share on LinkedIn"
      >
        <svg className="w-4 h-4 max-[439px]:w-3.5 max-[439px]:h-3.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 min-[1400px]:w-4 min-[1400px]:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>

      {/* Instagram / Copy Link */}
      <button
        onClick={handleInstagramShare}
        aria-label="Share on Instagram (Copies article link)"
        className="relative w-9 h-9 max-[439px]:w-7.5 max-[439px]:h-7.5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-9 min-[1400px]:h-9 rounded-full bg-[#184a41] flex items-center justify-center text-white hover:bg-[#0f312a] hover:-translate-y-1 transition-all cursor-pointer"
        title="Copy Link & Open Instagram"
      >
        <svg className="w-4 h-4 max-[439px]:w-3.5 max-[439px]:h-3.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 min-[1400px]:w-4 min-[1400px]:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>

        {/* Copied Feedback Toast */}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#184a41] text-white text-[10px] font-bold tracking-tight shadow-md whitespace-nowrap pointer-events-none">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}

