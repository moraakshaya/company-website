/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleBranding() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        When customers see your business online, they should be able to recognize it easily.
      </p>
      <p className="mb-4">
        Your logo, colours, fonts, images, social media posts, website, business cards, and other marketing materials all contribute to how people see your brand.
      </p>
      <p className="mb-4">
        If every platform looks completely different, customers may find it difficult to remember your business.
      </p>
      <p className="mb-12 font-bold">
        Consistent branding helps create a business identity that feels professional, recognizable, and trustworthy.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Helps Customers Recognize Your Business</h2>
      <p className="mb-4">Think about the brands you recognize quickly.</p>
      <p className="mb-4">You may recognize them by their:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Colours</li>
        <li>Logo</li>
        <li>Fonts</li>
        <li>Packaging</li>
        <li>Design style</li>
        <li>Images</li>
        <li>Overall appearance</li>
      </ul>
      <p className="mb-4">Your business can create the same kind of recognition.</p>
      <p className="mb-4">When you use the same visual style across your website, social media, brochures, posters, and other materials, customers begin to associate those elements with your business.</p>
      <p className="mb-12">Over time, your brand becomes easier to recognize.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Makes Your Business Look More Professional</h2>
      <p className="mb-4">A business can offer excellent products or services, but inconsistent visuals can make it look less organized.</p>
      <p className="mb-4">For example, imagine a business using:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>One logo on its website</li>
        <li>Different colours on Instagram</li>
        <li>Different fonts on brochures</li>
        <li>Random designs on promotional posts</li>
      </ul>
      <p className="mb-4">Nothing is necessarily wrong with each individual design, but together they may not feel like the same business.</p>
      <p className="mb-12">Using a consistent visual style creates a more organized and professional appearance.</p>

            {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/images/branding_mockup.jpg', alt: 'Article Inline Image 1' },
          { src: '/images/prof_website_mockup.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Builds Trust</h2>
      <p className="mb-4">Customers are more likely to feel comfortable with a business that looks established and consistent.</p>
      <p className="mb-4">This doesn't mean your branding needs to be expensive or complicated.</p>
      <p className="mb-4">It simply needs to be clear and consistent.</p>
      <p className="mb-4">When customers see the same:</p>
      <p className="mb-4 font-bold">Logo + Colours + Fonts + Style</p>
      <p className="mb-4">across different places, your business can feel more reliable and familiar.</p>
      <p className="mb-12">That familiarity can help build trust over time.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Makes Your Marketing Easier</h2>
      <p className="mb-4">Having consistent branding also makes creating new marketing materials easier.</p>
      <p className="mb-4">Instead of starting from scratch every time, you already know:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Which colours to use</li>
        <li>Which fonts to use</li>
        <li>How your logo should appear</li>
        <li>What type of images fit your brand</li>
        <li>What your designs should look like</li>
        <li>How your content should be presented</li>
      </ul>
      <p className="mb-4">This creates a simple visual direction for your business.</p>
      <p className="mb-4">For example, when creating a new Instagram post, your designer doesn't have to decide everything from the beginning.</p>
      <p className="mb-12">They can work within your existing brand style.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Creates a Stronger Online Presence</h2>
      <p className="mb-4">Your business may appear in many places online.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Google Business Profile</li>
        <li>YouTube</li>
        <li>LinkedIn</li>
        <li>Online directories</li>
      </ul>
      <p className="mb-4">Customers may discover you on one platform and later visit another.</p>
      <p className="mb-4">If your branding looks completely different everywhere, the connection may not be obvious.</p>
      <p className="mb-12">Consistent branding helps make your different online platforms feel like parts of the same business.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Your Logo Is Only One Part of Your Brand</h2>
      <p className="mb-4">Many businesses think branding means having a good logo.</p>
      <p className="mb-8">A logo is important, but branding goes beyond the logo. Your brand can include:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Logo</h3>
      <p className="mb-6">The main visual identity of your business.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Colours</h3>
      <p className="mb-6">The colours used across your marketing materials.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Typography</h3>
      <p className="mb-6">The fonts and text styles that represent your business.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Photography</h3>
      <p className="mb-6">The type and style of images you use.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Graphic Style</h3>
      <p className="mb-6">The shapes, layouts, icons, and visual elements used in your designs.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Tone of Voice</h3>
      <p className="mb-8">The way your business communicates with customers.</p>

      <p className="mb-12">Together, these elements create a more complete brand identity.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Makes Your Business Look More Memorable</h2>
      <p className="mb-4">People see a large amount of content every day.</p>
      <p className="mb-4">Your business needs to create a recognizable identity so that customers can remember it.</p>
      <p className="mb-4">Imagine seeing the same colours, logo style, and design approach repeatedly across different posts.</p>
      <p className="mb-4">Eventually, you may recognize the business even before reading its name.</p>
      <p className="mb-4">That's the value of consistent branding.</p>
      <p className="mb-12 font-bold">Recognition can turn into familiarity, and familiarity can help your business stay in people's minds.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Consistency Should Be Used Everywhere</h2>
      <p className="mb-4">Your branding shouldn't stop at your website or social media page.</p>
      <p className="mb-4">Try to maintain the same identity across your customer touchpoints.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website</li>
        <li>Social media posts</li>
        <li>Business cards</li>
        <li>Brochures</li>
        <li>Flyers</li>
        <li>Posters</li>
        <li>Menu cards</li>
        <li>Packaging</li>
        <li>Presentations</li>
        <li>Email signatures</li>
        <li>Advertisements</li>
        <li>Marketing materials</li>
      </ul>
      <p className="mb-4">The goal isn't to make everything look exactly the same.</p>
      <p className="mb-12">The goal is to make everything feel like it belongs to the same brand.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Create Simple Brand Guidelines</h2>
      <p className="mb-4">You don't necessarily need a complicated brand book.</p>
      <p className="mb-8">Even a simple set of guidelines can help. Your basic brand guidelines can include:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Logo</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Primary logo</li>
        <li>Alternative logo</li>
        <li>Correct usage</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Colours</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Primary colours</li>
        <li>Secondary colours</li>
        <li>Background colours</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Fonts</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Heading font</li>
        <li>Body font</li>
        <li>Supporting font</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Visual Style</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Image style</li>
        <li>Graphic style</li>
        <li>Icon style</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Communication</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Tone of voice</li>
        <li>Common phrases</li>
        <li>Writing style</li>
      </ul>

      <p className="mb-12">This gives your team and designers a clear direction when creating new materials.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Keep Your Branding Consistent, Not Boring</h2>
      <p className="mb-4">Consistency doesn't mean every post has to look identical.</p>
      <p className="mb-4">You can still experiment with:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Different layouts</li>
        <li>Different images</li>
        <li>Different content formats</li>
        <li>Different campaigns</li>
        <li>Seasonal designs</li>
        <li>Promotional creatives</li>
      </ul>
      <p className="mb-4">The important thing is that your core brand elements remain recognizable.</p>
      <p className="mb-12">Your designs can change while your brand identity stays consistent.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">A Simple Branding Checklist</h2>
      <p className="mb-4">Take a look at your current business materials and ask:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Is the same logo being used everywhere?</li>
        <li>Are the colours consistent?</li>
        <li>Are the same fonts being used?</li>
        <li>Do your social media posts look connected?</li>
        <li>Does your website match your social media branding?</li>
        <li>Do your printed materials follow the same style?</li>
        <li>Is your brand easy to recognize?</li>
        <li>Does your overall appearance feel professional?</li>
      </ul>
      <p className="mb-12">If the answer is "no" to several of these questions, it may be time to organize your branding.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Strong branding isn't only about having a beautiful logo.</p>
      <p className="mb-4">It's about creating a recognizable identity that customers can see across different places.</p>
      <p className="mb-4">When your <strong>colours, fonts, logo, visuals, messaging, and overall style</strong> work together, your business can look more professional and become easier to recognize.</p>
      <p className="mb-4">You don't have to change everything at once.</p>
      <p className="mb-12">Start by creating a clear brand style and use it consistently across your website, social media, and marketing materials.</p>

      {/* CTA Box */}
      <div className="mt-20 rounded-[2rem] px-4 sm:px-16 py-10 sm:py-16 text-center text-white shadow-2xl relative overflow-hidden bg-[url('/images/cta-img.jpg')] bg-cover bg-center">
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
            Need Help Building a Stronger <br className="hidden sm:block" />
            {' '}Brand <span className="text-[#f3945f]">Identity?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          From logo design and business cards to brochures, social media creatives, and complete brand identity, we can help create a consistent look for your business.
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
