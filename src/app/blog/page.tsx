"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SIDE_POSTS = [
  {
    category: "BRANDING",
    categoryBg: "bg-[#ffeae0]",
    categoryText: "text-[#d65d21]",
    title: "Why Your Business Needs More Than Just a Logo",
    slug: "why-your-business-needs-more-than-just-a-logo",
    date: "October 7, 2026",
    desc: "Your logo is just one part of your brand. Learn how colours, fonts, designs, and business materials can give your business a clear and professional look.",
    imageSrc: "/blog-details/top-right-1.jpg",
    hoverColor: "hover:text-[#f37636]",
  },
  {
    category: "SOCIAL MEDIA",
    categoryBg: "bg-[#0e747c]",
    categoryText: "text-white",
    title: "What Should Your Business Post on Instagram?",
    slug: "how-often-should-your-business-post-on-social-media",
    date: "October 4, 2026",
    desc: "Not sure what to post on your business page? Explore simple content ideas that can help you stay active, connect with customers, and showcase what your business offers.",
    imageSrc: "/blog-details/top-right-2.jpg",
    hoverColor: "hover:text-[#0e747c]",
  },
  {
    category: "SEO",
    categoryBg: "bg-[#ffeae0]",
    categoryText: "text-[#d65d21]",
    title: "Why Isn't Your Business Showing on Google?",
    slug: "why-isnt-your-business-showing-on-google",
    date: "October 1, 2026",
    desc: "When customers search for your services online, your business should be easy to find. Learn about some simple SEO steps that can help improve your visibility on Google.",
    imageSrc: "/blog-details/article-1.jpg",
    hoverColor: "hover:text-[#f37636]",
  },
];

export default function BlogPage() {
  const [sideIndex, setSideIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance && sideIndex < SIDE_POSTS.length - 1) {
      setSideIndex((prev) => prev + 1);
    }
    if (distance < -minSwipeDistance && sideIndex > 0) {
      setSideIndex((prev) => prev - 1);
    }
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
            OUR BLOG
          </div>

          {/* Headline */}
          <div className="w-full mb-5 sm:mb-6 flex flex-col items-center">
            {/* Line 1 — Star + 'Our Insightful' + ThreeLines */}
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
                Our Insightful
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

            {/* Line 2 — 'Blog.' in chocolate/terracotta gradient */}
            <div className="flex items-center justify-center mt-0.5 sm:mt-1">
              <span
                className="inline font-extrabold leading-[1.15] tracking-[-0.02em] text-[clamp(2rem,5vw,4.2rem)] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #361508 0%, #4a1e0a 20%, #6b2d14 40%, #7a3318 60%, #8c3d1e 78%, #a85228 100%)",
                }}
              >
                Blog.
              </span>
            </div>
          </div>

          {/* Body Copy */}
          <p className="text-[clamp(0.95rem,1.6vw,1.05rem)] leading-[1.65] text-[hsl(25,15%,38%)] text-center max-w-[780px] w-full mx-auto">
            Simple ideas, useful tips, and practical insights on websites, branding, social media, SEO, content, and online advertising to help your business grow.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative z-10 mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured Post (Left, spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-7 relative rounded-2xl overflow-hidden group h-[520px] sm:h-auto sm:aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
          >
            {/* Background Image */}
            <Image
              src="/blog-details/article-4.jpg"
              alt="Does Your Business Really Need a Website?"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#43261a] via-[#43261a]/80 to-transparent/20 z-10"></div>

            {/* Decorative swoosh in bottom right corner */}
            <svg
              className="absolute bottom-0 right-0 w-[60%] h-auto text-[#f37636] opacity-80 z-10 pointer-events-none"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 100 C 50 80, 100 40, 200 0 L 200 100 Z" fill="currentColor" opacity="0.1" />
              <path d="M50 100 C 100 90, 150 60, 200 20" stroke="currentColor" strokeWidth="2" />
              <path d="M80 100 C 130 95, 170 75, 200 40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            </svg>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-10 z-20 flex flex-col justify-end">
              <span className="inline-block bg-[#f37636] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full w-max mb-3 sm:mb-4">
                WEBSITE
              </span>

              <Link href="/blog/does-your-business-really-need-a-website" className="block mb-3 sm:mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] leading-[1.15] font-extrabold text-white hover:text-[#f37636] transition-colors font-['Manrope',sans-serif]">
                  Does Your Business Really Need a Website?
                </h2>
              </Link>

              <div className="flex items-center gap-2 text-white/90 text-sm mb-3 sm:mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>October 10, 2026</span>
              </div>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-5 sm:mb-6 max-w-[90%]">
                A website helps people learn about your business, services, and contact details in one place. Learn how a professional website can build trust and help customers connect with your business.
              </p>

              <Link href="/blog/does-your-business-really-need-a-website" className="inline-flex items-center gap-2 text-[#f37636] font-bold hover:gap-3 transition-all">
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Side Posts (Right, spans 5 cols on desktop, Carousel on mobile) */}
          <div className="lg:col-span-5 w-full">
            {/* ── Mobile View: Carousel with conditional arrows & dot pagination ── */}
            <div className="block lg:hidden w-full relative px-1 sm:px-2">
              <div className="overflow-hidden w-full rounded-2xl">
                <motion.div
                  className="flex flex-row"
                  animate={{ x: `-${sideIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {SIDE_POSTS.map((post) => (
                    <div key={post.slug} className="w-full shrink-0 px-1">
                      <div className="flex flex-col bg-[#fffdfa] rounded-2xl p-4 sm:p-5 gap-4 border border-[#f5ece0] shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-full aspect-[16/10] sm:aspect-[4/3] relative rounded-xl overflow-hidden shrink-0">
                          <Image
                            src={post.imageSrc}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="flex flex-col justify-center py-1 w-full">
                          <span className={`inline-block ${post.categoryBg} ${post.categoryText} text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full w-max mb-3`}>
                            {post.category}
                          </span>
                          <Link href={`/blog/${post.slug}`}>
                            <h3 className={`text-lg sm:text-xl font-extrabold text-[#43261a] leading-tight mb-3 ${post.hoverColor} transition-colors font-['Manrope',sans-serif]`}>
                              {post.title}
                            </h3>
                          </Link>
                          <div className="flex items-center gap-2 text-[#8c8275] text-xs font-medium mb-3">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{post.date}</span>
                          </div>
                          <p className="text-[#8c8275] text-sm line-clamp-2 mb-3">
                            {post.desc}
                          </p>
                          <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto">
                            Read More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Left Arrow: Rendered on left side if cards need to move right side (sideIndex > 0) */}
              <AnimatePresence initial={false}>
                {sideIndex > 0 && (
                  <motion.button
                    key="prev-side-card"
                    initial={{ opacity: 0, scale: 0.8, x: -6 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -6 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSideIndex((prev) => Math.max(0, prev - 1))}
                    className="absolute -left-2 sm:-left-3 top-[45%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(67,38,26,0.18)] border border-white flex items-center justify-center text-[#43261a] hover:bg-[#f37636] hover:text-white active:scale-90 transition-all cursor-pointer"
                    aria-label="Previous card"
                  >
                    <ChevronLeft size={22} strokeWidth={2.5} />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Right Arrow: Rendered on right side if cards need to move left side (sideIndex < SIDE_POSTS.length - 1) */}
              <AnimatePresence initial={false}>
                {sideIndex < SIDE_POSTS.length - 1 && (
                  <motion.button
                    key="next-side-card"
                    initial={{ opacity: 0, scale: 0.8, x: 6 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 6 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSideIndex((prev) => Math.min(SIDE_POSTS.length - 1, prev + 1))}
                    className="absolute -right-2 sm:-right-3 top-[45%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(67,38,26,0.18)] border border-white flex items-center justify-center text-[#43261a] hover:bg-[#f37636] hover:text-white active:scale-90 transition-all cursor-pointer"
                    aria-label="Next card"
                  >
                    <ChevronRight size={22} strokeWidth={2.5} />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Dot Pagination below cards */}
              <div className="flex items-center justify-center gap-2.5 mt-5">
                {SIDE_POSTS.map((post, index) => {
                  const isActive = index === sideIndex;
                  return (
                    <button
                      key={post.slug}
                      onClick={() => setSideIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${isActive
                        ? "w-7 bg-[#f37636] shadow-[0_2px_8px_rgba(243,118,54,0.35)]"
                        : "w-2.5 bg-[#43261a]/25 hover:bg-[#43261a]/45"
                        }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* ── Desktop View: Vertical 3-Card Stack ── */}
            <div className="hidden lg:flex flex-col gap-6">
              {SIDE_POSTS.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col sm:flex-row bg-[#fffdfa] rounded-2xl p-4 gap-5 border border-[#f5ece0] shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-full sm:w-[40%] aspect-[4/3] relative rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-1 w-full">
                    <span className={`inline-block ${post.categoryBg} ${post.categoryText} text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full w-max mb-3`}>
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className={`text-lg lg:text-xl font-extrabold text-[#43261a] leading-tight mb-3 ${post.hoverColor} transition-colors font-['Manrope',sans-serif]`}>
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-[#8c8275] text-xs font-medium mb-3">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>{post.date}</span>
                    </div>
                    <p className="text-[#8c8275] text-sm line-clamp-2 mb-3">
                      {post.desc}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Articles Section */}
        <div className="mt-32 pb-16 sm:pb-24">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-center md:items-center mb-16 gap-6 md:gap-12 lg:gap-16 text-center md:text-left">
            <h2 className="text-center md:text-left text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold text-[#43261a] tracking-tight font-['Manrope',sans-serif] leading-[1.1] shrink-0 w-full md:w-auto">
              Explore Our Latest{" "}
              <span className="text-[#0e747c] relative inline-block font-[family-name:var(--font-caveat)] font-bold text-[1.2em] -rotate-2 pb-2">
                Articles
                <svg
                  className="absolute w-[110%] h-[14px] -bottom-2 -left-[5%] text-[#f37636] -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0 10 Q 50 20 100 8"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 text-center md:text-left w-full md:w-auto">
              <div className="hidden md:block w-[2px] h-20 bg-[#f37636]/30 shrink-0"></div>
              <div className="w-16 h-[2px] bg-[#f37636]/30 md:hidden mb-2 mx-auto"></div>
              <p className="text-[#8c8275] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-lg md:max-w-none mx-auto w-full">
                Discover practical tips, strategies, and insights to help your business grow online and build a stronger digital presence.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Article 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(73,44,40,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[24px] p-4 sm:p-5 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(73,44,40,0.12),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-500"
            >
              <div className="aspect-[16/10] relative w-full shrink-0 rounded-[16px] overflow-hidden mb-5">
                <Image src="/blog-details/article-1.jpg" alt="Why Isn't Your Business Showing on Google?" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-grow px-2 pb-2">
                <span className="inline-block bg-[#fadbb6] text-[#43261a] text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full w-max mb-4">
                  SEO
                </span>
                <Link href="/blog/why-isnt-your-business-showing-on-google" className="block w-full">
                  <h3 className="text-xl lg:text-[22px] font-extrabold text-[#492c28] leading-snug mb-4 hover:text-[#f37636] transition-colors font-['Manrope',sans-serif] [text-wrap:wrap]">
                    Why Isn't Your Business Showing on Google?
                  </h3>
                </Link>
                <div className="flex items-center gap-2.5 text-sm font-medium mb-4">
                  <svg className="w-[18px] h-[18px] text-[#43261a]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z M5 10h14v10H5V10z M7 12h2v2H7v-2z M11 12h2v2h-2v-2z M15 12h2v2h-2v-2z M7 16h2v2H7v-2z M11 16h2v2h-2v-2z M15 16h2v2h-2v-2z"></path>
                  </svg>
                  <span className="text-[#a09489]">October 2, 2026</span>
                </div>
                <p className="text-[#8c8275] text-sm line-clamp-3 mb-6">
                  There can be several reasons your business isn't appearing in search results. Here are some important things to check and improve.
                </p>
                <Link href="/blog/why-isnt-your-business-showing-on-google" className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto pt-2 border-t border-[#f5ece0]/50">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </motion.div>

            {/* Article 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(73,44,40,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[24px] p-4 sm:p-5 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(73,44,40,0.12),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-500"
            >
              <div className="aspect-[16/10] relative w-full shrink-0 rounded-[16px] overflow-hidden mb-5">
                <Image src="/blog-details/article-2.jpg" alt="Google Ads vs Instagram Ads: Which Is Better?" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-grow px-2 pb-2">
                <span className="inline-block bg-[#dccad6] text-[#43261a] text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full w-max mb-4">
                  ONLINE ADVERTISING
                </span>
                <Link href="/blog/google-ads-vs-instagram-ads" className="block w-full">
                  <h3 className="text-xl lg:text-[22px] font-extrabold text-[#492c28] leading-snug mb-4 hover:text-[#0e747c] transition-colors font-['Manrope',sans-serif] [text-wrap:wrap]">
                    Google Ads vs Instagram Ads: Which Is Better?
                  </h3>
                </Link>
                <div className="flex items-center gap-2.5 text-sm font-medium mb-4">
                  <svg className="w-[18px] h-[18px] text-[#43261a]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z M5 10h14v10H5V10z M7 12h2v2H7v-2z M11 12h2v2h-2v-2z M15 12h2v2h-2v-2z M7 16h2v2H7v-2z M11 16h2v2h-2v-2z M15 16h2v2h-2v-2z"></path>
                  </svg>
                  <span className="text-[#a09489]">September 30, 2026</span>
                </div>
                <p className="text-[#8c8275] text-sm line-clamp-3 mb-6">
                  Both platforms can help you reach customers, but they work differently. Learn which option may be a better fit for your business.
                </p>
                <Link href="/blog/google-ads-vs-instagram-ads" className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto pt-2 border-t border-[#f5ece0]/50">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </motion.div>

            {/* Article 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(73,44,40,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[24px] p-4 sm:p-5 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(73,44,40,0.12),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-500"
            >
              <div className="aspect-[16/10] relative w-full shrink-0 rounded-[16px] overflow-hidden mb-5">
                <Image src="/blog-details/article-3.jpg" alt="Why Good Content Matters for Your Business" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-grow px-2 pb-2">
                <span className="inline-block bg-[#096a73] text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full w-max mb-4">
                  CONTENT MARKETING
                </span>
                <Link href="/blog/why-good-content-matters-for-your-business" className="block w-full">
                  <h3 className="text-xl lg:text-[22px] font-extrabold text-[#492c28] leading-snug mb-4 hover:text-[#0e747c] transition-colors font-['Manrope',sans-serif] [text-wrap:wrap]">
                    Why Good Content Matters for Your Business
                  </h3>
                </Link>
                <div className="flex items-center gap-2.5 text-sm font-medium mb-4">
                  <svg className="w-[18px] h-[18px] text-[#43261a]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z M5 10h14v10H5V10z M7 12h2v2H7v-2z M11 12h2v2h-2v-2z M15 12h2v2h-2v-2z M7 16h2v2H7v-2z M11 16h2v2h-2v-2z M15 16h2v2h-2v-2z"></path>
                  </svg>
                  <span className="text-[#a09489]">September 28, 2026</span>
                </div>
                <p className="text-[#8c8275] text-sm line-clamp-3 mb-6">
                  Good content helps customers understand your business, connect with your brand, and know why they should choose your products or services.
                </p>
                <Link href="/blog/why-good-content-matters-for-your-business" className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto pt-2 border-t border-[#f5ece0]/50">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </motion.div>

            {/* Article 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(73,44,40,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[24px] p-4 sm:p-5 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(73,44,40,0.12),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-500"
            >
              <div className="aspect-[16/10] relative w-full shrink-0 rounded-[16px] overflow-hidden mb-5">
                <Image src="/blog-details/article-4.jpg" alt="How to Make Your Business Website More Professional" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-grow px-2 pb-2">
                <span className="inline-block bg-[#fadbb6] text-[#43261a] text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full w-max mb-4">
                  WEBSITE
                </span>
                <Link href="/blog/how-to-make-your-business-website-more-professional" className="block w-full">
                  <h3 className="text-xl lg:text-[22px] font-extrabold text-[#492c28] leading-snug mb-4 hover:text-[#f37636] transition-colors font-['Manrope',sans-serif] [text-wrap:wrap]">
                    How to Make Your Business Website More Professional
                  </h3>
                </Link>
                <div className="flex items-center gap-2.5 text-sm font-medium mb-4">
                  <svg className="w-[18px] h-[18px] text-[#43261a]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z M5 10h14v10H5V10z M7 12h2v2H7v-2z M11 12h2v2h-2v-2z M15 12h2v2h-2v-2z M7 16h2v2H7v-2z M11 16h2v2h-2v-2z M15 16h2v2h-2v-2z"></path>
                  </svg>
                  <span className="text-[#a09489]">September 26, 2026</span>
                </div>
                <p className="text-[#8c8275] text-sm line-clamp-3 mb-6">
                  A professional website is more than good visuals. Learn how layout, content, images, navigation, and contact options can improve your website.
                </p>
                <Link href="/blog/how-to-make-your-business-website-more-professional" className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto pt-2 border-t border-[#f5ece0]/50">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </motion.div>

            {/* Article 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(73,44,40,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[24px] p-4 sm:p-5 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(73,44,40,0.12),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-500"
            >
              <div className="aspect-[16/10] relative w-full shrink-0 rounded-[16px] overflow-hidden mb-5">
                <Image src="/blog-details/article-5.jpg" alt="How Often Should Your Business Post on Social Media?" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-grow px-2 pb-2">
                <span className="inline-block bg-[#dccad6] text-[#43261a] text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full w-max mb-4">
                  SOCIAL MEDIA
                </span>
                <Link href="/blog/how-often-should-your-business-post-on-social-media" className="block w-full">
                  <h3 className="text-xl lg:text-[22px] font-extrabold text-[#492c28] leading-snug mb-4 hover:text-[#43261a]/70 transition-colors font-['Manrope',sans-serif] [text-wrap:wrap]">
                    How Often Should Your Business Post on Social Media?
                  </h3>
                </Link>
                <div className="flex items-center gap-2.5 text-sm font-medium mb-4">
                  <svg className="w-[18px] h-[18px] text-[#43261a]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z M5 10h14v10H5V10z M7 12h2v2H7v-2z M11 12h2v2h-2v-2z M15 12h2v2h-2v-2z M7 16h2v2H7v-2z M11 16h2v2h-2v-2z M15 16h2v2h-2v-2z"></path>
                  </svg>
                  <span className="text-[#a09489]">September 24, 2026</span>
                </div>
                <p className="text-[#8c8275] text-sm line-clamp-3 mb-6">
                  Posting consistently can help your business stay visible online. Learn how to create a simple posting routine without running out of ideas.
                </p>
                <Link href="/blog/how-often-should-your-business-post-on-social-media" className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto pt-2 border-t border-[#f5ece0]/50">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </motion.div>

            {/* Article 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(73,44,40,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[24px] p-4 sm:p-5 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(73,44,40,0.12),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-500"
            >
              <div className="aspect-[16/10] relative w-full shrink-0 rounded-[16px] overflow-hidden mb-5">
                <Image src="/blog-details/article-6.jpg" alt="7 Simple Ways to Grow Your Business Online" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col flex-grow px-2 pb-2">
                <span className="inline-block bg-[#fadbb6] text-[#43261a] text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full w-max mb-4">
                  DIGITAL MARKETING
                </span>
                <Link href="/blog/7-simple-ways-to-grow-your-business-online" className="block w-full">
                  <h3 className="text-xl lg:text-[22px] font-extrabold text-[#492c28] leading-snug mb-4 hover:text-[#f37636] transition-colors font-['Manrope',sans-serif] [text-wrap:wrap]">
                    7 Simple Ways to Grow Your Business Online
                  </h3>
                </Link>
                <div className="flex items-center gap-2.5 text-sm font-medium mb-4">
                  <svg className="w-[18px] h-[18px] text-[#43261a]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z M5 10h14v10H5V10z M7 12h2v2H7v-2z M11 12h2v2h-2v-2z M15 12h2v2h-2v-2z M7 16h2v2H7v-2z M11 16h2v2h-2v-2z M15 16h2v2h-2v-2z"></path>
                  </svg>
                  <span className="text-[#a09489]">September 22, 2026</span>
                </div>
                <p className="text-[#8c8275] text-sm line-clamp-3 mb-6">
                  From having a good website to using social media, SEO, and online advertising, discover simple ways to improve your business presence online.
                </p>
                <Link href="/blog/7-simple-ways-to-grow-your-business-online" className="inline-flex items-center gap-1.5 text-[#f37636] text-sm font-bold hover:gap-2 transition-all mt-auto pt-2 border-t border-[#f5ece0]/50">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
