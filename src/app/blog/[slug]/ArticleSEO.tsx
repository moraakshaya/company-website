/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleSEO() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        If you search for your business on Google and don't see it where you expected, you're not alone. Many small and local businesses struggle to appear in Google search results.
      </p>
      <p className="mb-6">
        Being online isn't just about having a website. Google needs to understand what your business does, where you are located, and whether your website and business information are useful to people searching for your services.
      </p>
      <p className="mb-12">
        The good news is that there are several things you can check and improve.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Your Website May Not Be Optimized for Search</h2>
      <p className="mb-4">Having a website doesn't automatically mean Google will rank it.</p>
      <p className="mb-4">Your website should clearly explain:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What your business does</li>
        <li>What products or services you provide</li>
        <li>Which locations you serve</li>
        <li>How customers can contact you</li>
        <li>What makes your business different</li>
      </ul>
      <p className="mb-4">Your page titles, headings, descriptions, content, and images should also be relevant to what your customers are searching for.</p>
      <p className="mb-4">For example, instead of simply writing &quot;Our Services,&quot; a local business could use a more specific heading such as &quot;Digital Marketing Services in Hyderabad.&quot;</p>
      <p className="mb-12">Clear and relevant content helps both customers and search engines understand your business.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Your Google Business Profile May Need Attention</h2>
      <p className="mb-4">For local businesses, your Google Business Profile is extremely important.</p>
      <p className="mb-4">When someone searches for your business or a service near them, Google may show local business listings along with their location, phone number, website, reviews, photos, and working hours.</p>
      <p className="mb-4">Make sure your profile contains accurate and complete information, including:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Business name</li>
        <li>Address</li>
        <li>Phone number</li>
        <li>Website</li>
        <li>Business category</li>
        <li>Working hours</li>
        <li>Services</li>
        <li>Photos</li>
      </ul>
      <p className="mb-12">Keep the information updated whenever something changes.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/images/website_devices.jpg', alt: 'Article Inline Image 1' },
          { src: '/images/growth_mockup.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Your Business May Be Targeting the Wrong Keywords</h2>
      <p className="mb-4">Your customers may not search for your business using the exact words you use internally.</p>
      <p className="mb-4">For example, a business may describe itself as a &quot;Creative Digital Solutions Provider,&quot; while customers might search for &quot;website development company near me.&quot;</p>
      <p className="mb-4">Think about the words your customers are actually typing into Google.</p>
      <p className="mb-4">Use relevant keywords naturally throughout your:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website pages</li>
        <li>Page titles</li>
        <li>Headings</li>
        <li>Service descriptions</li>
        <li>Blog articles</li>
        <li>Google Business Profile</li>
      </ul>
      <p className="mb-12">The goal isn't to add keywords everywhere. The goal is to use the words that genuinely describe what you offer.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Your Website May Have Very Little Useful Content</h2>
      <p className="mb-4">A website with only a few lines of text can make it difficult for Google to understand what your business offers.</p>
      <p className="mb-4">If you provide multiple services, consider creating dedicated pages for important services.</p>
      <p className="mb-4">For example, a digital agency could have separate pages for:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website Design</li>
        <li>Logo Design</li>
        <li>Social Media Marketing</li>
        <li>SEO</li>
        <li>Google Ads</li>
      </ul>
      <p className="mb-4">Each page gives you an opportunity to clearly explain the service and answer the questions your potential customers may have.</p>
      <p className="mb-12">Helpful content can also improve your chances of appearing for different relevant searches.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Your Website May Be New</h2>
      <p className="mb-4">If you recently launched your website, don't expect it to appear at the top of Google immediately.</p>
      <p className="mb-4">Google needs time to discover, crawl, understand, and evaluate new pages.</p>
      <p className="mb-4">New websites also have to build credibility and compete with businesses that may have been online for years.</p>
      <p className="mb-12">Instead of expecting instant results, focus on consistently improving your website, creating useful content, building relevant links, and maintaining your online presence.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Your Website May Have Technical SEO Problems</h2>
      <p className="mb-4">Sometimes the problem isn't the content. It can be technical.</p>
      <p className="mb-4">For example, Google may have difficulty accessing or understanding your website because of issues such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Pages that aren't properly indexed</li>
        <li>Broken links</li>
        <li>Incorrect redirects</li>
        <li>Missing page titles</li>
        <li>Poor website structure</li>
        <li>Slow-loading pages</li>
        <li>Mobile usability problems</li>
        <li>Incorrect robots.txt settings</li>
        <li>No XML sitemap</li>
      </ul>
      <p className="mb-12">These issues can prevent important pages from performing as well as they should in search results.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Your Website May Not Be Mobile-Friendly</h2>
      <p className="mb-4">A large number of people search for businesses using their phones.</p>
      <p className="mb-4">If your website is difficult to use on a mobile device, visitors may leave quickly.</p>
      <p className="mb-4">Make sure your website:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Loads properly on phones</li>
        <li>Has readable text</li>
        <li>Uses buttons that are easy to tap</li>
        <li>Doesn't require excessive scrolling or zooming</li>
        <li>Loads important content quickly</li>
      </ul>
      <p className="mb-12">A good mobile experience isn't just better for users. It is also an important part of having a search-friendly website.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Your Business May Not Have Enough Online Trust</h2>
      <p className="mb-4">Google looks at many signals when determining which businesses and websites should appear prominently in search results.</p>
      <p className="mb-4">For local businesses, having consistent business information and genuine customer reviews can help establish trust.</p>
      <p className="mb-4">You can build your online presence by:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Collecting genuine customer reviews</li>
        <li>Keeping your Google Business Profile updated</li>
        <li>Maintaining consistent business information</li>
        <li>Getting mentioned on relevant websites</li>
        <li>Creating useful content</li>
        <li>Building relationships with relevant local businesses</li>
      </ul>
      <p className="mb-12">Don't try to create fake reviews or manipulate search results. Focus on building a genuine online presence over time.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Your Competitors May Be Doing More</h2>
      <p className="mb-4">Sometimes your business isn't showing prominently simply because your competitors have invested more time into their online presence.</p>
      <p className="mb-4">They may have:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Better-optimized websites</li>
        <li>More useful content</li>
        <li>Stronger Google Business Profiles</li>
        <li>More customer reviews</li>
        <li>More backlinks</li>
        <li>Better local SEO</li>
        <li>More regularly updated content</li>
      </ul>
      <p className="mb-4">This doesn't mean you can't compete.</p>
      <p className="mb-12">Start by understanding what your competitors are doing well and look for areas where your business can provide something better or more useful.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / You're Expecting Google Results Too Quickly</h2>
      <p className="mb-4">SEO is not usually an overnight process.</p>
      <p className="mb-8">Improving your visibility can take time, especially if your website is new or you're competing in a competitive industry.</p>
      <p className="mb-4">The important thing is to keep working on the fundamentals:</p>
      <div className="bg-[#f5ece0]/50 p-6 sm:p-8 rounded-2xl border border-[#f5ece0] text-[#492c28] text-center my-8 shadow-sm">
        <p className="font-bold text-lg leading-relaxed">
          Create useful content &rarr; Improve your website &rarr; Optimize your local presence &rarr; Build trust &rarr; Monitor your results &rarr; Keep improving.
        </p>
      </div>
      <p className="mb-12">Over time, these efforts can help your business become more visible to people searching for your products or services.</p>

      {/* Summary Section */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-16 mb-8">So, What Should You Do?</h2>
      <p className="mb-8">If your business isn't showing on Google, start with the basics.</p>

      <div className="space-y-8 mb-12">
        <div>
          <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Check Your Website</h3>
          <p>Make sure your website clearly explains what you do, what services you offer, and where you operate.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Check Your Google Business Profile</h3>
          <p>Make sure your business information is complete, accurate, and up to date.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Check Your Keywords</h3>
          <p>Think about what your customers actually search for and make sure your website uses relevant terms naturally.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Check Your Technical SEO</h3>
          <p>Look for indexing, speed, mobile, broken-link, and sitemap issues.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Create Useful Content</h3>
          <p>Answer common customer questions through service pages, blogs, guides, and helpful information.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Keep Improving</h3>
          <p>SEO works best when it is treated as an ongoing process rather than a one-time task.</p>
        </div>
      </div>

      <hr className="my-12 border-[#f5ece0]" />

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Your Business Deserves to Be Found</h2>
      <p className="mb-4">When customers search for the products or services you offer, you want your business to have a chance to appear in front of them.</p>
      <p className="mb-4">If your business isn't showing on Google, don't assume that your website isn't working. There may simply be areas that need to be improved.</p>
      <p className="mb-12">A well-structured website, strong local presence, useful content, and consistent SEO efforts can help your business build better visibility over time.</p>

      {/* CTA Box */}
      <div className="mt-20 rounded-[2rem] px-4 sm:px-16 py-10 sm:py-16 text-center text-white shadow-2xl relative overflow-hidden bg-[url('/blog-details/cta-img.png')] bg-cover bg-center">
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[12px] pointer-events-none"></div>

        {/* Subtle curve background effect */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[120%] rounded-t-full bg-white/[0.04] rotate-[30deg] blur-2xl"></div>
        </div>

        <div className="flex items-center justify-center mb-5 relative z-10 w-full max-w-full">
          {/* Left Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -mr-3 sm:-mr-6">
            <Image src="/blog-details/cta-leftside.png" alt="Decorative Left" fill className="object-contain" />
          </div>

          <h3 className="text-xl sm:text-[2.2rem] font-extrabold font-['Manrope',sans-serif] text-white leading-[1.3] text-center">
            Not sure why your business<br className="hidden sm:block" />
            {' '}isn't showing on <span className="text-[#f3945f]">Google?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          Let's look at your online presence and find out what can be improved.
        </p>

        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center justify-between w-max mx-auto bg-[#ff863c] text-white !min-h-[52px] !h-[52px] !p-0 !pl-8 rounded-full hover:bg-[#fa7726] transition-all duration-300 group shadow-[0_4px_0_#d45f1a] active:shadow-none active:translate-y-1"
        >
          <span className="font-bold text-[16px] pr-5">Talk to Us</span>
          <div className="w-[42px] h-[42px] mr-1.5 rounded-full bg-white shadow-sm flex-shrink-0 flex items-center justify-center text-[#ff863c]">
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
}