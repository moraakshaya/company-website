/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleGrowth() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Today, customers often search online before deciding where to buy, whom to contact, or which business to choose.
      </p>
      <p className="mb-4">
        Whether you run a small local business, a service company, a shop, a clinic, a restaurant, or a growing brand, having a strong online presence can help more people discover your business.
      </p>
      <p className="mb-4">
        But growing your business online doesn't always require a complicated strategy.
      </p>
      <p className="mb-4">
        You can start with a few simple steps and gradually improve your online presence over time.
      </p>
      <p className="mb-12 font-bold">
        Here are 7 simple ways to grow your business online.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Build a Professional Website</h2>
      <p className="mb-4">Your website is one of the most important parts of your online presence.</p>
      <p className="mb-4">It gives potential customers a place where they can learn about your business, explore your services, see your work, and find your contact information.</p>
      <p className="mb-4">A good business website should clearly show:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What your business does</li>
        <li>Your products or services</li>
        <li>Your location</li>
        <li>Your contact details</li>
        <li>Your previous work</li>
        <li>Customer reviews or testimonials</li>
        <li>How customers can get started</li>
      </ul>
      <p className="mb-4">Your website should also work properly on mobile phones and load quickly.</p>
      <p className="mb-4">Think of your website as your online business space.</p>
      <p className="mb-12">Make sure it gives visitors a good reason to trust your business.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Keep Your Google Business Profile Updated</h2>
      <p className="mb-4">If you run a local business, your Google Business Profile can help customers discover you when they search for businesses or services in their area.</p>
      <p className="mb-4">Make sure your profile contains accurate information such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Business name</li>
        <li>Address</li>
        <li>Phone number</li>
        <li>Website</li>
        <li>Working hours</li>
        <li>Business category</li>
        <li>Services</li>
        <li>Photos</li>
      </ul>
      <p className="mb-4">You can also encourage genuine customers to leave reviews after using your products or services.</p>
      <p className="mb-4">Keep your information updated whenever something changes.</p>
      <p className="mb-12">A complete and accurate business profile makes it easier for potential customers to learn about your business.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/blog-details/article-1.jpg', alt: 'Article Inline Image 1' },
          { src: '/blog-details/article-6.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Use Social Media Consistently</h2>
      <p className="mb-4">Social media gives you another way to stay connected with customers and reach new people.</p>
      <p className="mb-4">You don't need to be active on every platform.</p>
      <p className="mb-4">Choose the platforms where your target customers are most likely to spend their time.</p>
      <p className="mb-4">You can share content such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Products</li>
        <li>Services</li>
        <li>Customer reviews</li>
        <li>Tips</li>
        <li>Offers</li>
        <li>New launches</li>
        <li>Behind-the-scenes content</li>
        <li>Previous work</li>
        <li>Business updates</li>
      </ul>
      <p className="mb-4">You don't necessarily need to post every day.</p>
      <p className="mb-4">A simple and consistent posting schedule is often easier to maintain.</p>
      <p className="mb-12">The goal is to keep your business visible while providing content that people actually find useful or interesting.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Improve Your SEO</h2>
      <p className="mb-4">Search Engine Optimization, or SEO, helps your website become more visible when people search for products and services related to your business.</p>
      <p className="mb-4">For example, if you provide website development services in Hyderabad, you may want your website to appear when potential customers search for terms related to website development in Hyderabad.</p>
      <p className="mb-4">Start with the basics:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Use relevant keywords</li>
        <li>Create useful service pages</li>
        <li>Write helpful blog articles</li>
        <li>Add clear page titles</li>
        <li>Optimize images</li>
        <li>Make your website mobile-friendly</li>
        <li>Improve website speed</li>
        <li>Keep your business information consistent</li>
      </ul>
      <p className="mb-4">SEO usually takes time.</p>
      <p className="mb-12">It isn't about getting instant results. It's about building a stronger online presence consistently.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Create Useful Content</h2>
      <p className="mb-4">Content gives your business something valuable to share with potential customers.</p>
      <p className="mb-8">Instead of only promoting your products or services, create content that answers questions and solves problems. For example, a digital agency could create:</p>

      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Website tips</li>
        <li>SEO guides</li>
        <li>Social media advice</li>
        <li>Branding tips</li>
        <li>Online advertising information</li>
      </ul>

      <p className="mb-4">A restaurant could share:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Food recommendations</li>
        <li>New dishes</li>
        <li>Cooking tips</li>
        <li>Customer experiences</li>
        <li>Special offers</li>
      </ul>

      <p className="mb-4">A healthcare business could share:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Health awareness information</li>
        <li>General tips</li>
        <li>Service information</li>
        <li>Frequently asked questions</li>
      </ul>

      <p className="mb-12">Useful content can help people discover your business, understand your expertise, and remember your brand.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Use Online Advertising</h2>
      <p className="mb-4">Organic growth can take time.</p>
      <p className="mb-8">Online advertising can help you reach potential customers more quickly by putting your business in front of a specific audience. Depending on your goals, you could consider platforms such as:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Google Ads</h3>
      <p className="mb-6">Useful for reaching people who are actively searching for products or services.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Instagram and Facebook Ads</h3>
      <p className="mb-8">Useful for reaching people based on factors such as location, interests, demographics, and behaviour.</p>

      <p className="mb-4">Before spending money on advertising, decide what you want the campaign to achieve. For example:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website visits</li>
        <li>Phone calls</li>
        <li>Enquiries</li>
        <li>Product sales</li>
        <li>Appointment bookings</li>
        <li>Brand awareness</li>
      </ul>
      <p className="mb-4">Don't focus only on getting clicks.</p>
      <p className="mb-12">Focus on getting the right people to take the right action.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Build Trust Online</h2>
      <p className="mb-4">People are more likely to choose a business when they feel confident about it.</p>
      <p className="mb-4">Your online presence should give potential customers enough information to make that decision.</p>
      <p className="mb-4">You can build trust by showing:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Genuine customer reviews</li>
        <li>Testimonials</li>
        <li>Previous work</li>
        <li>Case studies</li>
        <li>Business information</li>
        <li>Real photos</li>
        <li>Team information</li>
        <li>Clear contact details</li>
      </ul>
      <p className="mb-4">If you have completed projects or helped customers achieve good results, show them.</p>
      <p className="mb-4">Don't just tell people that you're good at what you do.</p>
      <p className="mb-12">Give them something real to see.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Don't Try to Do Everything at Once</h2>
      <p className="mb-4">One of the biggest mistakes businesses make is trying to improve every part of their online presence at the same time.</p>
      <p className="mb-4">You don't need to do everything immediately.</p>
      <p className="mb-8">Start with the basics.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 1</h3>
      <p className="mb-6">Make sure your website is professional and easy to use.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 2</h3>
      <p className="mb-6">Complete and update your Google Business Profile.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 3</h3>
      <p className="mb-6">Choose one or two social media platforms.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 4</h3>
      <p className="mb-6">Start creating useful content.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 5</h3>
      <p className="mb-6">Work on your SEO consistently.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 6</h3>
      <p className="mb-6">Test online advertising when you're ready.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 7</h3>
      <p className="mb-8">Keep collecting genuine reviews and showing your work.</p>

      <p className="mb-12">Small improvements can add up over time.</p>


      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Create a Simple Online Growth Routine</h2>
      <p className="mb-8">Growing online becomes easier when you make it part of your regular business routine. For example:</p>

      <p className="mb-4 font-bold">Every week:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Publish useful social media content</li>
        <li>Check customer enquiries</li>
        <li>Update your content ideas</li>
        <li>Respond to reviews and messages</li>
      </ul>

      <p className="mb-4 font-bold">Every month:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Review website traffic</li>
        <li>Check social media performance</li>
        <li>Review advertising results</li>
        <li>Add or update website content</li>
        <li>Identify areas that need improvement</li>
      </ul>

      <p className="mb-4">You don't need to spend hours every day.</p>
      <p className="mb-12">Consistency is more important than doing everything at once.</p>


      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Focus on Your Customers, Not Just Your Business</h2>
      <p className="mb-4">Your online presence should always come back to one question:</p>
      <p className="mb-4 font-bold">"How does this help my customer?"</p>
      <p className="mb-4">Instead of only saying:</p>
      <p className="mb-4 font-bold">"We are the best."</p>
      <p className="mb-4">Show customers:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What you offer</li>
        <li>How it works</li>
        <li>What problem you solve</li>
        <li>What results they can expect</li>
        <li>Why they can trust you</li>
        <li>How they can contact you</li>
      </ul>
      <p className="mb-12">When your online presence is built around your customers, it becomes more useful and more convincing.</p>


      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Growing your business online doesn't have to be complicated.</p>
      <p className="mb-4">Start with the fundamentals:</p>
      <p className="mb-6 font-bold">Professional website + Google presence + Social media + SEO + Useful content + Online advertising + Trust</p>
      <p className="mb-4">You don't need to master everything immediately.</p>
      <p className="mb-4">Choose the areas that matter most to your business, improve them consistently, and measure what works.</p>
      <p className="mb-12">Over time, a strong online presence can help more people discover your business, understand what you offer, and take the next step.</p>

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
            Ready to Grow Your <br className="hidden sm:block" />
            {' '}Business <span className="text-[#f3945f]">Online?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          Whether you need a professional website, better branding, social media content, SEO, or online advertising, the right digital strategy can help your business build a stronger online presence.
          <br /><br />
          Let's build your online presence together.
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
