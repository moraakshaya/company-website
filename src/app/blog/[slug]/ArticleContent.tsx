/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleContent() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Your customers see your content before they decide whether they want to know more about your business.
      </p>
      <p className="mb-4">
        It could be a social media post, a website page, an advertisement, a product description, a blog, or even a simple caption.
      </p>
      <p className="mb-4">
        Good content helps customers understand what your business does, connect with your brand, and know why they should choose your products or services.
      </p>
      <p className="mb-4">
        But good content isn't about using complicated words or posting something every day.
      </p>
      <p className="mb-12">
        It's about giving people the right information in a clear, useful, and engaging way.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Content Helps People Understand Your Business</h2>
      <p className="mb-4">When someone discovers your business for the first time, they may not know anything about you.</p>
      <p className="mb-4">Your content should quickly answer basic questions such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What does your business offer?</li>
        <li>Who are your products or services for?</li>
        <li>Where are you located?</li>
        <li>How can customers contact you?</li>
        <li>Why should they choose you?</li>
      </ul>
      <p className="mb-4">For example, a website that simply says <strong>"We provide quality solutions"</strong> doesn't tell a customer very much.</p>
      <p className="mb-4">Clear content such as <strong>"We design professional websites for small and local businesses"</strong> immediately gives the customer a better understanding of what you do.</p>
      <p className="mb-12">The clearer your message is, the easier it is for people to understand your business.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Good Content Builds Trust</h2>
      <p className="mb-4">Customers are more likely to consider a business when they feel they understand it and can trust it.</p>
      <p className="mb-4">Your content gives you an opportunity to show people what your business is really about.</p>
      <p className="mb-4">You can build trust by sharing:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Customer testimonials</li>
        <li>Previous work</li>
        <li>Product information</li>
        <li>Helpful tips</li>
        <li>Frequently asked questions</li>
        <li>Behind-the-scenes content</li>
        <li>Business updates</li>
        <li>Team information</li>
        <li>Case studies</li>
      </ul>
      <p className="mb-12">When customers repeatedly see useful and genuine information from your business, they become more familiar with your brand.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/blog-details/article-3.jpg', alt: 'Article Inline Image 1' },
          { src: '/blog-details/top-right-2.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Content Shows What Makes You Different</h2>
      <p className="mb-4">There may be many businesses offering similar products or services.</p>
      <p className="mb-4">So why should someone choose you?</p>
      <p className="mb-4">Your content can help answer that question.</p>
      <p className="mb-4">Instead of simply saying:</p>
      <p className="mb-4 font-bold">"We provide digital marketing services."</p>
      <p className="mb-4">You could explain what makes your approach different.</p>
      <p className="mb-4">For example:</p>
      <p className="mb-4 font-bold">"We create simple digital marketing strategies designed around the goals and budget of small businesses."</p>
      <p className="mb-4">Your content should communicate your strengths, your approach, and the value you provide.</p>
      <p className="mb-12">This helps customers understand what they can expect from your business.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Content Helps Your Website Perform Better</h2>
      <p className="mb-4">Your website isn't just a place to display your contact details.</p>
      <p className="mb-4">It can also help people discover your business through search engines.</p>
      <p className="mb-4">Useful website content gives search engines more information about your business and the services you provide.</p>
      <p className="mb-4">For example, a website may have separate pages for:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website Design</li>
        <li>Logo Design</li>
        <li>Social Media Marketing</li>
        <li>SEO</li>
        <li>Online Advertising</li>
      </ul>
      <p className="mb-4">Each page can explain the service clearly and answer common customer questions.</p>
      <p className="mb-12">This can make your website more useful for both visitors and search engines.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Content Keeps Your Business Visible</h2>
      <p className="mb-4">People may not need your service the first time they see your business.</p>
      <p className="mb-4">But that doesn't mean they won't need it later.</p>
      <p className="mb-4">Regular content can help keep your business in front of potential customers.</p>
      <p className="mb-4">For example, a local restaurant could share:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>New dishes</li>
        <li>Special offers</li>
        <li>Customer experiences</li>
        <li>Festival promotions</li>
        <li>Behind-the-scenes content</li>
      </ul>
      <p className="mb-4">A digital agency could share:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website tips</li>
        <li>Marketing advice</li>
        <li>Client work</li>
        <li>SEO tips</li>
        <li>Business growth ideas</li>
      </ul>
      <p className="mb-12">Consistent content gives people more opportunities to discover and remember your business.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Good Content Can Turn Visitors Into Customers</h2>
      <p className="mb-4">Getting people to visit your website or social media profile is only the first step.</p>
      <p className="mb-4">The next step is helping them take action.</p>
      <p className="mb-4">Good content can guide customers toward that action.</p>
      <p className="mb-4">For example:</p>
      <p className="mb-4 font-bold">Learn about your service &rarr; Understand the benefits &rarr; Build trust &rarr; See your work &rarr; Contact your business</p>
      <p className="mb-4">Your content should make it easy for customers to understand what they should do next.</p>
      <p className="mb-4">Depending on your business, that could be:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Call us</li>
        <li>Send an enquiry</li>
        <li>Book an appointment</li>
        <li>Visit our store</li>
        <li>Get a quote</li>
        <li>Buy a product</li>
        <li>Start a project</li>
      </ul>
      <p className="mb-12">A clear message and clear call-to-action can make a big difference.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Different Content Serves Different Purposes</h2>
      <p className="mb-8">Not every piece of content needs to sell something. Different types of content can have different goals.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-4">Educational Content</h3>
      <p className="mb-4">Helps customers learn something useful. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Tips</li>
        <li>Guides</li>
        <li>How-to articles</li>
        <li>FAQs</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-4">Promotional Content</h3>
      <p className="mb-4">Highlights a product, service, offer, or event. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Discounts</li>
        <li>New launches</li>
        <li>Festival offers</li>
        <li>Special packages</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-4">Brand Content</h3>
      <p className="mb-4">Helps people understand your business and connect with your brand. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Company stories</li>
        <li>Team introductions</li>
        <li>Behind-the-scenes content</li>
        <li>Business milestones</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-4">Proof Content</h3>
      <p className="mb-4">Shows customers that your business delivers real results. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Testimonials</li>
        <li>Reviews</li>
        <li>Case studies</li>
        <li>Previous work</li>
      </ul>
      <p className="mb-12">A good content strategy can include a mix of all these types.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Good Content Doesn't Mean Posting Every Day</h2>
      <p className="mb-4">Many businesses think they need to post something every single day.</p>
      <p className="mb-4">That's not necessarily true.</p>
      <p className="mb-4">Posting frequently is less important than posting content that is relevant and useful to your audience.</p>
      <p className="mb-4">One useful post that answers a real customer question can be more valuable than several posts that don't provide any meaningful information.</p>
      <p className="mb-4">Focus on:</p>
      <p className="mb-4 font-bold">Useful content + Clear message + Consistency</p>
      <p className="mb-12">rather than simply trying to increase the number of posts.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Your Content Should Speak to Your Customers</h2>
      <p className="mb-4">One of the biggest mistakes businesses make is creating content only from their own point of view.</p>
      <p className="mb-4">Instead, think about your customers.</p>
      <p className="mb-4">What questions do they ask? What problems do they have? What information do they need before making a decision?</p>
      <p className="mb-4">For example, if you provide website development services, customers may want to know:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>How much does a website cost?</li>
        <li>How long does it take?</li>
        <li>Will it work on mobile?</li>
        <li>Can I update it later?</li>
        <li>Will my website appear on Google?</li>
        <li>Can you maintain the website?</li>
      </ul>
      <p className="mb-12">Creating content around these questions makes your business more helpful and relevant.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Good Content Works Across Multiple Platforms</h2>
      <p className="mb-4">You don't have to create completely different ideas for every platform.</p>
      <p className="mb-4">One useful idea can be adapted into different formats.</p>
      <p className="mb-4">For example, a blog about <strong>"5 Things Every Business Website Should Have"</strong> could become:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>A detailed website blog</li>
        <li>An Instagram carousel</li>
        <li>A short Reel</li>
        <li>A LinkedIn post</li>
        <li>A social media graphic</li>
        <li>An email newsletter</li>
      </ul>
      <p className="mb-12">This allows you to get more value from the content you create.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Section 11 */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">What Makes Content Good?</h2>
      <p className="mb-6">Good business content is usually:</p>
      <ul className="list-none mb-12 space-y-4">
        <li><strong>Clear</strong> — People should understand your message quickly.</li>
        <li><strong>Useful</strong> — Give customers information they actually need.</li>
        <li><strong>Relevant</strong> — Talk about topics connected to your products, services, and audience.</li>
        <li><strong>Genuine</strong> — Your content should represent your actual business.</li>
        <li><strong>Consistent</strong> — Keep your business visible instead of posting only occasionally.</li>
        <li><strong>Action-focused</strong> — When appropriate, make it clear what customers can do next.</li>
      </ul>

      {/* Section 12 */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Common Content Mistakes Businesses Make</h2>
      <p className="mb-8">Even businesses that regularly post content can make simple mistakes. Some common ones include:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Only Talking About the Business</h3>
      <p className="mb-6">Every post doesn't need to be about how great your company is. Give customers information that is useful to them.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Using Too Much Technical Language</h3>
      <p className="mb-6">Customers may not understand industry-specific terms. Keep your message simple and easy to understand.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Posting Without a Purpose</h3>
      <p className="mb-6">Before creating content, ask yourself: <strong>"Why am I posting this?"</strong> Is it to educate, promote, build trust, or generate enquiries?</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Having No Clear Call-to-Action</h3>
      <p className="mb-6">If you want customers to contact you, make it easy for them to know what to do.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Focusing Only on Selling</h3>
      <p className="mb-12">If every post is an advertisement, people may lose interest. Balance promotional content with helpful and informative content.</p>

      {/* Section 13 */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">A Simple Content Strategy for Your Business</h2>
      <p className="mb-8">You don't need a complicated plan to get started. Try this simple approach:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 1 — Understand Your Customers</h3>
      <p className="mb-6">Think about who your ideal customers are and what they need.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 2 — List Their Questions</h3>
      <p className="mb-6">Write down the questions customers frequently ask about your products or services.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 3 — Create Useful Content</h3>
      <p className="mb-6">Turn those questions into posts, blogs, videos, guides, or graphics.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 4 — Show Your Work</h3>
      <p className="mb-6">Share real examples, customer experiences, projects, and results.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 5 — Promote Your Offers</h3>
      <p className="mb-6">When you have a product, service, event, or special offer, create content around it.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 6 — Keep Going</h3>
      <p className="mb-12">Content works better when it becomes part of your regular marketing rather than a one-time activity.</p>

      {/* Section 14 */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Good content is more than just words, images, or social media posts.</p>
      <p className="mb-4">It helps your business communicate.</p>
      <p className="mb-4">It helps customers understand what you offer.</p>
      <p className="mb-4">It builds familiarity and trust.</p>
      <p className="mb-4">It shows what makes your business different.</p>
      <p className="mb-4">And when done well, it can help turn people who discover your business into actual customers.</p>
      <p className="mb-4">You don't need to create complicated content.</p>
      <p className="mb-12">Start with what your customers want to know, answer their questions clearly, and give them a reason to remember your business.</p>

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
            Ready to Create Better Content <br className="hidden sm:block" />
            {' '}for Your <span className="text-[#f3945f]">Business?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          Let's create content that works for your business.
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
