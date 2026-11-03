import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArticleSEO } from "./ArticleSEO";
import { ArticleAds } from "./ArticleAds";
import { ArticleContent } from "./ArticleContent";
import { ArticleWebsite } from "./ArticleWebsite";
import { ArticleSocialMedia } from "./ArticleSocialMedia";
import { ArticleGrowth } from "./ArticleGrowth";
import { ArticleStandOut } from "./ArticleStandOut";
import { ArticleMistakes } from "./ArticleMistakes";
import { ArticleBranding } from "./ArticleBranding";
import { ArticleReviews } from "./ArticleReviews";
import { ArticleBeyondLogo } from "./ArticleBeyondLogo";
import { ArticleNeedWebsite } from "./ArticleNeedWebsite";
import ShareButtons from "./ShareButtons";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params);

  let title = "Why Isn't Your Business Showing on Google?";
  let category = "SEO & Online Visibility";
  let date = "May 16, 2025";
  let readTime = "6 min read";
  let ContentComponent = ArticleSEO;

  if (slug === 'google-ads-vs-instagram-ads') {
    title = "Google Ads vs Instagram Ads: Which Is Better?";
    category = "Advertising";
    date = "May 20, 2025";
    readTime = "5 min read";
    ContentComponent = ArticleAds;
  } else if (slug === 'why-good-content-matters-for-your-business') {
    title = "Why Good Content Matters for Your Business";
    category = "Content Marketing";
    date = "September 28, 2026";
    readTime = "4 min read";
    ContentComponent = ArticleContent;
  } else if (slug === 'how-to-make-your-business-website-more-professional') {
    title = "How to Make Your Business Website More Professional";
    category = "Website";
    date = "September 26, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleWebsite;
  } else if (slug === 'how-often-should-your-business-post-on-social-media') {
    title = "How Often Should Your Business Post on Social Media?";
    category = "Social Media";
    date = "September 24, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleSocialMedia;
  } else if (slug === '7-simple-ways-to-grow-your-business-online') {
    title = "7 Simple Ways to Grow Your Business Online";
    category = "Digital Marketing";
    date = "September 22, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleGrowth;
  } else if (slug === 'how-to-make-your-business-stand-out-online') {
    title = "How to Make Your Business Stand Out Online";
    category = "Digital Marketing";
    date = "September 28, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleStandOut;
  } else if (slug === '7-common-mistakes-businesses-make-on-social-media') {
    title = "7 Common Mistakes Businesses Make on Social Media";
    category = "Social Media";
    date = "September 26, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleMistakes;
  } else if (slug === 'why-consistent-branding-matters-for-your-business') {
    title = "Why Consistent Branding Matters for Your Business";
    category = "Branding";
    date = "September 24, 2026";
    readTime = "4 min read";
    ContentComponent = ArticleBranding;
  } else if (slug === 'how-online-reviews-can-help-your-business-grow') {
    title = "How Online Reviews Can Help Your Business Grow";
    category = "Digital Marketing";
    date = "September 22, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleReviews;
  } else if (slug === 'why-your-business-needs-more-than-just-a-logo') {
    title = "Why Your Business Needs More Than Just a Logo";
    category = "Branding";
    date = "September 20, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleBeyondLogo;
  } else if (slug === 'does-your-business-really-need-a-website') {
    title = "Does Your Business Really Need a Website?";
    category = "Website";
    date = "October 10, 2026";
    readTime = "5 min read";
    ContentComponent = ArticleNeedWebsite;
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* HERO HEADER SECTION */}
      <section className="w-full relative h-[480px] sm:h-[540px] md:h-auto lg:h-[475px] lg:min-h-[475px] xl:h-[495px] xl:min-h-[495px] min-[1400px]:h-auto min-[1400px]:min-h-0 pt-24 sm:pt-28 md:pt-32 lg:pt-28 lg:pb-12 xl:pt-32 xl:pb-14 min-[1400px]:pt-32 min-[1400px]:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center border-b border-[#0f312a] rounded-b-[2.5rem] sm:rounded-b-[3.5rem] shadow-[0_10px_30px_-10px_rgba(24,74,65,0.4)] z-10 overflow-hidden bg-[#184a41]">
        {/* Very faint grain/noise texture overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10 flex flex-col items-center w-full my-auto">
          {/* Category Badge */}
          <span className="bg-[#f37636] text-white text-[10px] sm:text-[11px] lg:text-[11px] xl:text-[11.5px] min-[1400px]:text-[11px] font-extrabold uppercase tracking-widest lg:tracking-[0.16em] xl:tracking-[0.18em] min-[1400px]:tracking-widest px-4 py-1.5 lg:px-4 lg:py-1 xl:px-[17px] xl:py-[5px] min-[1400px]:px-4 min-[1400px]:py-1.5 rounded-full mb-6 lg:mb-3.5 xl:mb-4 min-[1400px]:mb-6 font-['Inter',sans-serif] shadow-sm">
            {category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] min-[1400px]:text-5xl font-extrabold text-white leading-[1.3] lg:leading-[1.12] xl:leading-[1.12] min-[1400px]:leading-[1.3] max-w-[900px] lg:max-w-[820px] xl:max-w-[880px] min-[1400px]:max-w-[900px] mb-10 lg:mb-3.5 xl:mb-4 min-[1400px]:mb-10 font-['Manrope',sans-serif]">
            {title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:gap-x-6 lg:gap-y-3 xl:gap-x-7 xl:gap-y-3.5 min-[1400px]:gap-x-8 min-[1400px]:gap-y-5 text-sm lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-sm text-white/80 font-medium font-['Inter',sans-serif]">
            {/* Date */}
            <div className="flex items-center gap-3 lg:gap-2 xl:gap-2.5 min-[1400px]:gap-3">
              <svg className="w-[18px] h-[18px] lg:w-4 lg:h-4 xl:w-[17px] xl:h-[17px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-[#ff863c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>{date}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 lg:gap-2 xl:gap-2.5 min-[1400px]:gap-3">
              <svg className="w-[18px] h-[18px] lg:w-4 lg:h-4 xl:w-[17px] xl:h-[17px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-[#ff863c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>By Prodbiz Team</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-3 lg:gap-2 xl:gap-2.5 min-[1400px]:gap-3">
              <svg className="w-[18px] h-[18px] lg:w-4 lg:h-4 xl:w-[17px] xl:h-[17px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-[#ff863c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] lg:max-w-[940px] xl:max-w-[1100px] min-[1400px]:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-12 lg:py-10 xl:py-12 min-[1400px]:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 xl:gap-8 min-[1400px]:gap-16 items-start">

          {/* Left Column (Main Article) */}
          <div className="lg:col-span-8 blog-article-content">
            <ContentComponent />
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 sticky top-8">
            <aside className="bg-[#f5ece0] rounded-2xl lg:rounded-xl xl:rounded-2xl min-[1400px]:rounded-2xl p-8 lg:p-4 xl:p-5 min-[1400px]:p-8 shadow-sm border border-[#e8dac8]/50">
              <div className="mb-6 lg:mb-4 xl:mb-5 min-[1400px]:mb-6">
                <h3 className="text-[1.7rem] lg:text-[18px] xl:text-[20px] min-[1400px]:text-[1.7rem] font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2 lg:mb-1.5 min-[1400px]:mb-2">Recent Posts</h3>
                <div className="w-12 h-1 lg:w-9 lg:h-0.5 xl:w-10 xl:h-1 min-[1400px]:w-12 min-[1400px]:h-1 bg-[#ff863c]"></div>
              </div>

              <div className="space-y-5 lg:space-y-3 xl:space-y-3.5 min-[1400px]:space-y-5">
                {/* News Item 1 */}
                <Link href="/blog/does-your-business-really-need-a-website" className="group cursor-pointer flex gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 items-center">
                  <div className="relative w-20 h-20 lg:w-14 lg:h-14 xl:w-16 xl:h-16 min-[1400px]:w-20 min-[1400px]:h-20 rounded-xl lg:rounded-lg xl:rounded-xl min-[1400px]:rounded-xl overflow-hidden shrink-0 shadow-sm">
                    <Image src="/blog-details/article-4.jpg" alt="Does Your Business Really Need a Website?" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-medium text-[#492c28] text-[15px] lg:text-[12.5px] xl:text-[13px] min-[1400px]:text-[15px] leading-tight lg:leading-[1.25] xl:leading-[1.25] mb-2 lg:mb-1 xl:mb-1 min-[1400px]:mb-2 group-hover:text-[#047880] transition-colors">
                      Does Your Business Really Need a Website?
                    </h4>
                    <span className="text-[13px] lg:text-[11px] xl:text-[11.5px] min-[1400px]:text-[13px] text-[#8a7b77]">October 10, 2026</span>
                  </div>
                </Link>

                <hr className="border-[#e8dac8]/60" />

                {/* News Item 2 */}
                <Link href="/blog/why-your-business-needs-more-than-just-a-logo" className="group cursor-pointer flex gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 items-center">
                  <div className="relative w-20 h-20 lg:w-14 lg:h-14 xl:w-16 xl:h-16 min-[1400px]:w-20 min-[1400px]:h-20 rounded-xl lg:rounded-lg xl:rounded-xl min-[1400px]:rounded-xl overflow-hidden shrink-0 shadow-sm">
                    <Image src="/blog-details/top-right-1.jpg" alt="Why Your Business Needs More Than Just a Logo" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-medium text-[#492c28] text-[15px] lg:text-[12.5px] xl:text-[13px] min-[1400px]:text-[15px] leading-tight lg:leading-[1.25] xl:leading-[1.25] mb-2 lg:mb-1 xl:mb-1 min-[1400px]:mb-2 group-hover:text-[#047880] transition-colors">
                      Why Your Business Needs More Than Just a Logo
                    </h4>
                    <span className="text-[13px] lg:text-[11px] xl:text-[11.5px] min-[1400px]:text-[13px] text-[#8a7b77]">September 20, 2026</span>
                  </div>
                </Link>

                <hr className="border-[#e8dac8]/60" />

                {/* News Item 3 */}
                <Link href="/blog/how-online-reviews-can-help-your-business-grow" className="group cursor-pointer flex gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 items-center">
                  <div className="relative w-20 h-20 lg:w-14 lg:h-14 xl:w-16 xl:h-16 min-[1400px]:w-20 min-[1400px]:h-20 rounded-xl lg:rounded-lg xl:rounded-xl min-[1400px]:rounded-xl overflow-hidden shrink-0 shadow-sm">
                    <Image src="/blog-details/article-1.jpg" alt="How Online Reviews Can Help Your Business Grow" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-medium text-[#492c28] text-[15px] lg:text-[12.5px] xl:text-[13px] min-[1400px]:text-[15px] leading-tight lg:leading-[1.25] xl:leading-[1.25] mb-2 lg:mb-1 xl:mb-1 min-[1400px]:mb-2 group-hover:text-[#047880] transition-colors">
                      How Online Reviews Can Help Your Business Grow
                    </h4>
                    <span className="text-[13px] lg:text-[11px] xl:text-[11.5px] min-[1400px]:text-[13px] text-[#8a7b77]">September 22, 2026</span>
                  </div>
                </Link>

                <hr className="border-[#e8dac8]/60" />

                {/* News Item 4 */}
                <Link href="/blog/why-consistent-branding-matters-for-your-business" className="group cursor-pointer flex gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 items-center">
                  <div className="relative w-20 h-20 lg:w-14 lg:h-14 xl:w-16 xl:h-16 min-[1400px]:w-20 min-[1400px]:h-20 rounded-xl lg:rounded-lg xl:rounded-xl min-[1400px]:rounded-xl overflow-hidden shrink-0 shadow-sm">
                    <Image src="/blog-details/top-right-2.jpg" alt="Why Consistent Branding Matters for Your Business" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-medium text-[#492c28] text-[15px] lg:text-[12.5px] xl:text-[13px] min-[1400px]:text-[15px] leading-tight lg:leading-[1.25] xl:leading-[1.25] mb-2 lg:mb-1 xl:mb-1 min-[1400px]:mb-2 group-hover:text-[#047880] transition-colors">
                      Why Consistent Branding Matters for Your Business
                    </h4>
                    <span className="text-[13px] lg:text-[11px] xl:text-[11.5px] min-[1400px]:text-[13px] text-[#8a7b77]">September 24, 2026</span>
                  </div>
                </Link>
              </div>

              <div className="mt-12 lg:mt-6 xl:mt-8 min-[1400px]:mt-12">
                <h3 className="text-xl lg:text-[15px] xl:text-[16px] min-[1400px]:text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-6 lg:mb-3 xl:mb-4 min-[1400px]:mb-6">Share This News</h3>
                <ShareButtons title={title} slug={slug} />
        </div>
      </aside>
    </div>
        </div>
      </section>
    </main>
  );
}
