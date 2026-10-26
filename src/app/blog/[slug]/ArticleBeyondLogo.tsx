/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleBeyondLogo() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        When people think about branding, the first thing that often comes to mind is a logo.
      </p>
      <p className="mb-4">
        A logo is important. It helps people identify your business and gives your brand a visual starting point.
      </p>
      <p className="mb-4">
        But a logo alone doesn't create a complete brand.
      </p>
      <p className="mb-4">
        Your <strong>colours, fonts, images, business materials, messaging, and overall visual style</strong> all contribute to how customers see and remember your business.
      </p>
      <p className="mb-12 font-bold">
        A strong brand brings these elements together so your business looks and feels consistent wherever customers find you.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / A Logo Is Only the Starting Point</h2>
      <p className="mb-4">Your logo may be the most recognizable part of your brand, but it is only one piece of the bigger picture.</p>
      <p className="mb-4">Think about everything a customer might see from your business:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Your website</li>
        <li>Instagram posts</li>
        <li>Business cards</li>
        <li>Brochures</li>
        <li>Posters</li>
        <li>Packaging</li>
        <li>Advertisements</li>
        <li>Presentations</li>
        <li>Email communications</li>
      </ul>
      <p className="mb-4">If only the logo is consistent while everything else looks different, your business may not have a strong visual identity.</p>
      <p className="mb-12 font-bold">Branding connects these different elements together.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Colours Help People Recognize Your Brand</h2>
      <p className="mb-4">Colours can become an important part of how people remember a business.</p>
      <p className="mb-4">For example, a business may choose a specific combination of colours and use them across its:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website</li>
        <li>Social media posts</li>
        <li>Business cards</li>
        <li>Posters</li>
        <li>Brochures</li>
        <li>Advertisements</li>
      </ul>
      <p className="mb-4">When those colours are used consistently, customers can begin to associate them with the business.</p>
      <p className="mb-4">You don't need many colours.</p>
      <p className="mb-12">A simple combination of primary and supporting colours can be enough to create a clear identity.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/blog-details/top-right-1.jpg', alt: 'Article Inline Image 1' },
          { src: '/blog-details/article-3.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Fonts Also Create a Brand Style</h2>
      <p className="mb-4">Typography is another part of branding that is easy to overlook.</p>
      <p className="mb-4">Using different fonts randomly across your website, social media, and printed materials can make your business look inconsistent.</p>
      <p className="mb-6">Choosing a small set of fonts gives your brand a more organized appearance. For example:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Heading Font</h3>
      <p className="mb-6">Used for titles and important headings.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Body Font</h3>
      <p className="mb-6">Used for paragraphs and general information.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Supporting Font</h3>
      <p className="mb-8">Used occasionally for specific design elements.</p>

      <p className="mb-4">The goal isn't to use fancy fonts.</p>
      <p className="mb-12">The goal is to choose fonts that are <strong>clear, readable, and suitable for your business.</strong></p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Your Business Materials Should Look Connected</h2>
      <p className="mb-4">Imagine receiving a business card from a company and later visiting its website.</p>
      <p className="mb-4">If the business card uses one colour scheme, the website uses another, and the social media page looks completely different, it can feel like three different businesses.</p>
      <p className="mb-4">Your marketing materials should have a visual connection. This can include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Logo placement</li>
        <li>Colours</li>
        <li>Fonts</li>
        <li>Design style</li>
        <li>Images</li>
        <li>Icons</li>
        <li>Layouts</li>
      </ul>
      <p className="mb-4">They don't need to look exactly the same.</p>
      <p className="mb-12">They simply need to feel like they belong to the same brand.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Branding Builds a Professional Image</h2>
      <p className="mb-4">Good branding can make a business look more organized and professional.</p>
      <p className="mb-4">This is especially important for small and growing businesses.</p>
      <p className="mb-4">You may have excellent products or services, but customers often see your visual presentation before they experience what you actually offer.</p>
      <p className="mb-4">A consistent brand can help communicate that your business takes its work seriously.</p>
      <p className="mb-4">It's not about making your business look expensive.</p>
      <p className="mb-12">It's about making it look <strong>clear, reliable, and well-presented.</strong></p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Branding Makes Your Business Easier to Remember</h2>
      <p className="mb-4">Customers see a lot of businesses every day.</p>
      <p className="mb-4">A recognizable visual identity can help your business stay in their minds.</p>
      <p className="mb-4">When the same logo, colours, fonts, and visual style appear repeatedly, customers have more opportunities to become familiar with your brand.</p>
      <p className="mb-4">Over time, they may recognize your business even before reading its name.</p>
      <p className="mb-4">That's why branding is more than a one-time logo design.</p>
      <p className="mb-12">It is about creating an identity that people can recognize over time.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Your Brand Should Have a Consistent Style</h2>
      <p className="mb-4">A brand should have a visual direction that can be followed across different designs.</p>
      <p className="mb-6">This could include decisions about:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Colours</h3>
      <p className="mb-6">Which colours represent your business?</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Typography</h3>
      <p className="mb-6">Which fonts should be used?</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Images</h3>
      <p className="mb-6">What type of photography or graphics fit your brand?</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Layout</h3>
      <p className="mb-6">How should your designs generally be structured?</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Logo</h3>
      <p className="mb-6">Where and how should your logo be used?</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Communication</h3>
      <p className="mb-8">How should your business speak to customers?</p>

      <p className="mb-12">Having these basic decisions in place makes it easier to create new marketing materials.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Branding Makes Marketing Easier</h2>
      <p className="mb-4">Once your brand style is established, creating new content becomes simpler.</p>
      <p className="mb-4">For example, when you need a new:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Instagram post</li>
        <li>Festival creative</li>
        <li>Promotional poster</li>
        <li>Brochure</li>
        <li>Flyer</li>
        <li>Advertisement</li>
        <li>Website section</li>
      </ul>
      <p className="mb-4">you already have a visual direction to follow.</p>
      <p className="mb-4">Your designer doesn't have to start from zero every time.</p>
      <p className="mb-12">This saves time and helps keep your marketing materials consistent.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Branding Should Work Both Online and Offline</h2>
      <p className="mb-4">Your brand isn't limited to the internet.</p>
      <p className="mb-8">Customers may interact with your business through many different places.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Online</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Google Business Profile</li>
        <li>Online advertisements</li>
        <li>Email</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Offline</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Business cards</li>
        <li>Brochures</li>
        <li>Flyers</li>
        <li>Posters</li>
        <li>Packaging</li>
        <li>Signboards</li>
        <li>Menus</li>
        <li>Marketing materials</li>
      </ul>

      <p className="mb-12">When your branding is consistent across both, customers get a more complete and professional experience.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / A Strong Brand Doesn't Have to Be Complicated</h2>
      <p className="mb-4">You don't need dozens of colours, complicated graphics, or an expensive brand book to create a strong identity.</p>
      <p className="mb-6">Start with the basics:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">A clear logo</li>
        <li className="font-bold">A simple colour palette</li>
        <li className="font-bold">Readable fonts</li>
        <li className="font-bold">A consistent design style</li>
        <li className="font-bold">Clear communication</li>
        <li className="font-bold">Consistent marketing materials</li>
      </ul>
      <p className="mb-12">These simple elements, when used properly, can make a noticeable difference.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">What Should a Basic Brand Identity Include?</h2>
      <p className="mb-4">A simple brand identity can include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Primary logo</li>
        <li>Logo variations</li>
        <li>Colour palette</li>
        <li>Typography</li>
        <li>Brand style</li>
        <li>Image style</li>
        <li>Icon style</li>
        <li>Social media design style</li>
        <li>Business card design</li>
        <li>Brochure and flyer style</li>
        <li>Marketing creative guidelines</li>
      </ul>
      <p className="mb-12">Together, these elements give your business a clear visual direction.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Your logo may be the first thing people notice, but it shouldn't be the only thing they remember.</p>
      <p className="mb-4">A strong brand is built from all the details that work together:</p>
      <p className="mb-6 font-bold text-[#492c28]">Logo + Colours + Fonts + Visual Style + Business Materials + Communication</p>
      <p className="mb-4">When these elements are consistent, your business becomes easier to recognize, easier to remember, and more professional in the eyes of customers.</p>
      <p className="mb-4">So if you're creating a new logo or already have one, don't stop there.</p>
      <p className="mb-12 font-bold">Build a complete identity around it.</p>

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
            Need More Than Just a <br className="hidden sm:block" />
            {' '}Logo <span className="text-[#f3945f]">Design?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          From logo design and brand identity to business cards, brochures, posters, menus, flyers, and marketing creatives, we can help create a consistent look for your business.
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
