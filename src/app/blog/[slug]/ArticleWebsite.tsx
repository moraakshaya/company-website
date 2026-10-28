/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleWebsite() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Your website is often one of the first places people go when they discover your business.
      </p>
      <p className="mb-4">
        Before calling you, visiting your store, or making an enquiry, a potential customer may check your website to understand what you offer and whether your business looks trustworthy.
      </p>
      <p className="mb-4">
        A professional website is more than attractive colours and good-looking images.
      </p>
      <p className="mb-4">
        The layout, content, navigation, images, mobile experience, and contact options all work together to create a better experience for your visitors.
      </p>
      <p className="mb-12">
        Here are some simple ways to make your business website look and feel more professional.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Keep the Design Clean and Simple</h2>
      <p className="mb-4">A professional website doesn't need to be complicated.</p>
      <p className="mb-4">Too many colours, animations, fonts, pop-ups, or design elements can make a website difficult to understand.</p>
      <p className="mb-4">Instead, focus on a clean layout with:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Clear headings</li>
        <li>Enough spacing</li>
        <li>Consistent colours</li>
        <li>Easy-to-read fonts</li>
        <li>Well-organized sections</li>
        <li>Clear buttons</li>
        <li>Consistent design across pages</li>
      </ul>
      <p className="mb-12">Your design should support your message rather than distract visitors from it.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Make Your Business Clear Immediately</h2>
      <p className="mb-4">When someone opens your website, they should quickly understand what your business does.</p>
      <p className="mb-4">Your homepage should clearly communicate:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">Who you are</li>
        <li className="font-bold">What you offer</li>
        <li className="font-bold">Who you help</li>
        <li className="font-bold">How customers can contact you</li>
      </ul>
      <p className="mb-4">Avoid vague headlines that don't explain anything.</p>
      <p className="mb-4">For example, instead of:</p>
      <p className="mb-4 font-bold">"We Create Possibilities"</p>
      <p className="mb-4">a website development company could say:</p>
      <p className="mb-4 font-bold">"Professional Websites for Growing Businesses"</p>
      <p className="mb-12">The second message immediately tells visitors what the business does.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/blog-details/article-4.jpg', alt: 'Article Inline Image 1' },
          { src: '/blog-details/article-7.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Use High-Quality Images</h2>
      <p className="mb-4">Images can have a major impact on how professional your website looks.</p>
      <p className="mb-4">Poor-quality, stretched, blurry, or unrelated images can make an otherwise good website look less trustworthy.</p>
      <p className="mb-4">Use images that are:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>High quality</li>
        <li>Relevant to your business</li>
        <li>Properly sized</li>
        <li>Consistent with your brand</li>
        <li>Optimized for fast loading</li>
      </ul>
      <p className="mb-4">Whenever possible, use real photos of your business, team, products, services, or completed work.</p>
      <p className="mb-12">Authentic images can help customers understand your business better.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Write Clear Website Content</h2>
      <p className="mb-4">Good design can attract attention, but your content needs to explain your business.</p>
      <p className="mb-4">Your website content should be simple and easy to understand.</p>
      <p className="mb-4">Explain:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What you offer</li>
        <li>How your service works</li>
        <li>Why customers should choose you</li>
        <li>What customers can expect</li>
        <li>How they can get started</li>
      </ul>
      <p className="mb-4">Avoid filling your website with complicated language just to make it sound professional.</p>
      <p className="mb-12">Clear and direct content usually works better.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Make Navigation Easy</h2>
      <p className="mb-4">Visitors shouldn't have to search through your website to find basic information.</p>
      <p className="mb-4">Your navigation menu should make important pages easy to access.</p>
      <p className="mb-4">Depending on your business, this could include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li>Our Work</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <p className="mb-4">Keep the navigation simple and organized.</p>
      <p className="mb-12">A visitor should be able to move from one important page to another without confusion.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Make Your Contact Information Easy to Find</h2>
      <p className="mb-4">If a customer wants to contact you, don't make them search for your phone number or email address.</p>
      <p className="mb-4">Your contact information should be easy to find.</p>
      <p className="mb-4">Consider including:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Phone number</li>
        <li>Email address</li>
        <li>WhatsApp</li>
        <li>Contact form</li>
        <li>Business address</li>
        <li>Google Maps location</li>
        <li>Social media links</li>
      </ul>
      <p className="mb-4">You can also include clear call-to-action buttons such as:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">Call Us</li>
        <li className="font-bold">WhatsApp Us</li>
        <li className="font-bold">Get a Quote</li>
        <li className="font-bold">Start Your Project</li>
      </ul>
      <p className="mb-12">The easier you make it for customers to contact you, the better.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Make Your Website Mobile-Friendly</h2>
      <p className="mb-4">A website that looks great on a desktop but doesn't work properly on a phone can create a poor impression.</p>
      <p className="mb-4">Your website should work smoothly across:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Mobile phones</li>
        <li>Tablets</li>
        <li>Laptops</li>
        <li>Desktop computers</li>
      </ul>
      <p className="mb-4">Check things such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Text size</li>
        <li>Button size</li>
        <li>Image scaling</li>
        <li>Menu behaviour</li>
        <li>Section spacing</li>
        <li>Contact forms</li>
        <li>Page loading</li>
      </ul>
      <p className="mb-12">A professional website should provide a good experience regardless of the device someone uses.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Show Your Real Work</h2>
      <p className="mb-4">If your business provides services, don't just tell people what you can do.</p>
      <p className="mb-4">Show them.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-none mb-6 space-y-2">
        <li>A designer can show previous designs.</li>
        <li>A construction company can show completed projects.</li>
        <li>A restaurant can show its food and location.</li>
        <li>A digital agency can show websites, branding, and marketing work.</li>
      </ul>
      <p className="mb-12">A portfolio or project section gives potential customers something real to look at and helps them understand the quality of your work.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Add Customer Reviews and Testimonials</h2>
      <p className="mb-4">People naturally want to know whether others have had a good experience with your business.</p>
      <p className="mb-4">Adding genuine testimonials can help build confidence.</p>
      <p className="mb-4">You can include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Customer reviews</li>
        <li>Testimonials</li>
        <li>Google reviews</li>
        <li>Case studies</li>
        <li>Client logos</li>
        <li>Project results</li>
      </ul>
      <p className="mb-4">Don't use fake reviews.</p>
      <p className="mb-12">Real feedback from real customers is much more valuable for building trust.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Use Consistent Branding</h2>
      <p className="mb-4">Your website should look like it belongs to your business.</p>
      <p className="mb-4">Use consistent:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Logo</li>
        <li>Colours</li>
        <li>Fonts</li>
        <li>Buttons</li>
        <li>Image style</li>
        <li>Design elements</li>
        <li>Tone of communication</li>
      </ul>
      <p className="mb-4">The same branding should ideally appear across your website, social media, brochures, business cards, and other marketing materials.</p>
      <p className="mb-12">Consistency makes your business easier to recognize.</p>

      {/* Section 11 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">11 / Don't Forget Website Speed</h2>
      <p className="mb-4">A beautiful website isn't very useful if it takes too long to load.</p>
      <p className="mb-4">Large images, unnecessary scripts, excessive animations, and poorly optimized files can slow down your website.</p>
      <p className="mb-4">Some simple ways to improve performance include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Compressing images</li>
        <li>Using appropriate image formats</li>
        <li>Reducing unnecessary animations</li>
        <li>Removing unused website resources</li>
        <li>Optimizing code</li>
        <li>Choosing reliable hosting</li>
      </ul>
      <p className="mb-12">A faster website can provide a better experience for visitors.</p>

      {/* Section 12 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">12 / Keep Your Website Updated</h2>
      <p className="mb-4">A professional website should not look abandoned.</p>
      <p className="mb-4">Check your website regularly and update information when necessary.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Update business hours</li>
        <li>Add new services</li>
        <li>Remove outdated offers</li>
        <li>Update contact information</li>
        <li>Add recent projects</li>
        <li>Publish useful blog posts</li>
        <li>Replace outdated images</li>
      </ul>
      <p className="mb-12">If your website says something that is no longer true, customers may lose confidence in your business.</p>

      {/* Section 13 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">13 / Give Visitors a Clear Next Step</h2>
      <p className="mb-4">After someone understands your business, what should they do next?</p>
      <p className="mb-4">Don't leave them guessing.</p>
      <p className="mb-4">Every important page should have a clear next step.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">Service page &rarr; Get a Quote</li>
        <li className="font-bold">Product page &rarr; Enquire Now</li>
        <li className="font-bold">Portfolio page &rarr; Start Your Project</li>
        <li className="font-bold">Blog article &rarr; Contact Us</li>
        <li className="font-bold">Contact page &rarr; Send an Enquiry</li>
      </ul>
      <p className="mb-12">A clear call-to-action helps turn website visitors into potential customers.</p>

      {/* Section 14 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">14 / Build Trust Throughout the Website</h2>
      <p className="mb-4">Professional websites don't just look good. They make visitors feel comfortable doing business with you.</p>
      <p className="mb-4">You can build trust by showing:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Your business information</li>
        <li>Real work</li>
        <li>Customer reviews</li>
        <li>Contact details</li>
        <li>Business location</li>
        <li>Clear service information</li>
        <li>Frequently asked questions</li>
        <li>Privacy information where appropriate</li>
      </ul>
      <p className="mb-12">The more confident customers feel about your business, the easier it becomes for them to take the next step.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">A Simple Professional Website Checklist</h2>
      <p className="mb-8">Before launching or redesigning your website, ask yourself:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Design</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Is the design clean?</li>
        <li>Are the colours consistent?</li>
        <li>Are the fonts easy to read?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Content</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Is it clear what the business does?</li>
        <li>Are the services explained properly?</li>
        <li>Is the information easy to understand?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Navigation</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Can visitors find important pages quickly?</li>
        <li>Is the menu simple?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Images</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Are the images high quality?</li>
        <li>Are they relevant to the business?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Mobile</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Does the website work properly on phones?</li>
        <li>Are buttons easy to tap?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Trust</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Are reviews or testimonials available?</li>
        <li>Is real work shown?</li>
        <li>Are business details easy to find?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Contact</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Can visitors easily call, email, WhatsApp, or enquire?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Performance</h3>
      <ul className="list-disc pl-6 mb-12 space-y-2">
        <li>Does the website load quickly?</li>
        <li>Are images and files optimized?</li>
      </ul>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">A professional business website isn't about adding as many features as possible.</p>
      <p className="mb-4">It's about creating a website that looks trustworthy, communicates clearly, works smoothly, and makes it easy for customers to take action.</p>
      <p className="mb-4">Start with the basics:</p>
      <p className="mb-4 font-bold">Clear design + Useful content + Good images + Easy navigation + Mobile-friendly experience + Strong trust signals + Simple contact options</p>
      <p className="mb-4">When these elements work together, your website becomes more than an online business card.</p>
      <p className="mb-12">It becomes a useful tool for attracting visitors, building trust, and generating enquiries.</p>

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
            Ready to Improve Your <br className="hidden sm:block" />
            {' '}Business <span className="text-[#f3945f]">Website?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          Let's build a website that works for your business.
        </p>

        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center justify-between w-max mx-auto bg-[#ff863c] text-white !min-h-[52px] !h-[52px] lg:!min-h-[40px] lg:!h-[40px] xl:!min-h-[42px] xl:!h-[42px] min-[1400px]:!min-h-[52px] min-[1400px]:!h-[52px] !p-0 !pl-8 lg:!pl-5 xl:!pl-6 min-[1400px]:!pl-8 rounded-full hover:bg-[#fa7726] transition-all duration-300 group shadow-[0_4px_0_#d45f1a] lg:shadow-[0_3px_0_#d45f1a] min-[1400px]:shadow-[0_4px_0_#d45f1a] active:shadow-none active:translate-y-1"
        >
          <span className="font-bold text-[16px] lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-[16px] pr-5 lg:pr-3.5 xl:pr-4 min-[1400px]:pr-5">Start Your Project</span>
          <div className="w-[42px] h-[42px] lg:w-[30px] lg:h-[30px] xl:w-[32px] xl:h-[32px] min-[1400px]:w-[42px] min-[1400px]:h-[42px] mr-1.5 lg:mr-1 xl:mr-1.5 min-[1400px]:mr-1.5 rounded-full bg-white shadow-sm flex-shrink-0 flex items-center justify-center text-[#ff863c]">
            <svg className="w-5 h-5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-5 min-[1400px]:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
}
