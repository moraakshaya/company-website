/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleStandOut() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Today, almost every business has some kind of online presence.
      </p>
      <p className="mb-4">
        Customers can find hundreds of businesses offering similar products and services with just a few searches.
      </p>
      <p className="mb-4">
        So, how do you make your business stand out?
      </p>
      <p className="mb-4">
        The answer isn't simply to post more or create a flashy website.
      </p>
      <p className="mb-4">
        Your business needs a clear identity, useful content, a professional online presence, and a reason for customers to choose you over others.
      </p>
      <p className="mb-12 font-bold">
        Here are some simple ways to make your business stand out online.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Know What Makes Your Business Different</h2>
      <p className="mb-4">Before improving your online presence, understand what makes your business different.</p>
      <p className="mb-4">Ask yourself:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What do we do well?</li>
        <li>Who are our ideal customers?</li>
        <li>What problem do we solve?</li>
        <li>What makes our service different?</li>
        <li>Why should customers choose us?</li>
      </ul>
      <p className="mb-4">Your difference doesn't have to be something completely unique.</p>
      <p className="mb-4">It could be your service, experience, quality, location, pricing, customer support, approach, or specialization.</p>
      <p className="mb-12">Once you understand your strengths, communicate them clearly throughout your online presence.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Create a Clear Brand Identity</h2>
      <p className="mb-4">Your brand is more than just your logo.</p>
      <p className="mb-4">It includes the way your business looks, sounds, and communicates with customers.</p>
      <p className="mb-4">A consistent brand can include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Logo</li>
        <li>Colours</li>
        <li>Fonts</li>
        <li>Photography style</li>
        <li>Graphic style</li>
        <li>Tone of communication</li>
        <li>Messaging</li>
      </ul>
      <p className="mb-4">When these elements are used consistently across your website, social media, advertisements, and marketing materials, your business becomes easier to recognize.</p>
      <p className="mb-12">Customers should be able to see your content and know that it belongs to your business.</p>

            {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/images/branding_mockup.jpg', alt: 'Article Inline Image 1' },
          { src: '/images/content_mockup.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Make Your Website Look Professional</h2>
      <p className="mb-4">Your website is often one of the first places people go when they want to learn more about your business.</p>
      <p className="mb-4">A professional website should make a good first impression while clearly explaining what you offer.</p>
      <p className="mb-4">Make sure your website has:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>A clear homepage</li>
        <li>Easy navigation</li>
        <li>Good-quality images</li>
        <li>Useful content</li>
        <li>Mobile-friendly design</li>
        <li>Clear service information</li>
        <li>Customer reviews</li>
        <li>Easy-to-find contact details</li>
        <li>Strong call-to-action buttons</li>
      </ul>
      <p className="mb-4">Your website doesn't need to be complicated.</p>
      <p className="mb-12">It needs to be clear, useful, and easy to use.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Show Your Real Work</h2>
      <p className="mb-4">One of the best ways to stand out is to show people what you actually do.</p>
      <p className="mb-4">Instead of only saying:</p>
      <p className="mb-4 font-bold">"We provide high-quality services."</p>
      <p className="mb-4">Show examples. Depending on your business, you could display:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Completed projects</li>
        <li>Product photos</li>
        <li>Before-and-after results</li>
        <li>Customer experiences</li>
        <li>Case studies</li>
        <li>Portfolio work</li>
        <li>Videos</li>
        <li>Testimonials</li>
      </ul>
      <p className="mb-4">Real examples give potential customers something they can evaluate.</p>
      <p className="mb-12">Your work can often communicate your quality better than a long sales message.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Create Content That Helps People</h2>
      <p className="mb-4">Good content gives people a reason to pay attention to your business.</p>
      <p className="mb-4">Don't make every post about selling.</p>
      <p className="mb-4">Instead, answer questions your customers actually have.</p>
      <p className="mb-4">For example, if you're a website company, you could create content about:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>How much a business website costs</li>
        <li>What makes a good website</li>
        <li>Why mobile-friendly websites matter</li>
        <li>Common website mistakes</li>
        <li>How websites help local businesses</li>
      </ul>
      <p className="mb-12">Useful content can help position your business as knowledgeable while giving customers information they can actually use.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Keep Your Social Media Consistent</h2>
      <p className="mb-4">You don't need to be on every social media platform.</p>
      <p className="mb-4">Choose the platforms that make sense for your business and your customers.</p>
      <p className="mb-6">Then create a realistic posting routine. Your content can include:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Educational Posts</h3>
      <p className="mb-6">Share useful tips and information.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Promotional Posts</h3>
      <p className="mb-6">Show your products, services, offers, and launches.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Brand Posts</h3>
      <p className="mb-6">Show your team, business story, workplace, or daily activities.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Work Posts</h3>
      <p className="mb-6">Show completed projects and customer results.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Engagement Posts</h3>
      <p className="mb-8">Ask questions and encourage customers to interact.</p>

      <p className="mb-12">A consistent presence helps people remember your business.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Use High-Quality Visuals</h2>
      <p className="mb-4">People notice visuals quickly when browsing websites and social media.</p>
      <p className="mb-4">Low-quality images, inconsistent designs, or poorly created graphics can make a business look less professional.</p>
      <p className="mb-4">Use visuals that are:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Clear</li>
        <li>High quality</li>
        <li>Relevant</li>
        <li>Consistent with your brand</li>
        <li>Easy to understand</li>
      </ul>
      <p className="mb-4">This applies to everything from your website images to social media posts and advertisements.</p>
      <p className="mb-12">Good visuals can help your business make a stronger first impression.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Make Your Business Easy to Find</h2>
      <p className="mb-4">Standing out doesn't matter if customers can't find you.</p>
      <p className="mb-4">Make sure your business information is easy to discover online.</p>
      <p className="mb-4">Keep your:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Business name</li>
        <li>Address</li>
        <li>Phone number</li>
        <li>Website</li>
        <li>Working hours</li>
        <li>Services</li>
        <li>Social media profiles</li>
      </ul>
      <p className="mb-4">accurate and consistent.</p>
      <p className="mb-12">For local businesses, maintaining an updated Google Business Profile can also help potential customers discover your business when searching for relevant services nearby.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Build Trust With Reviews and Testimonials</h2>
      <p className="mb-4">Customers often want to know what other people think before choosing a business.</p>
      <p className="mb-4">Genuine reviews and testimonials can help reduce uncertainty.</p>
      <p className="mb-4">You can showcase:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Customer reviews</li>
        <li>Testimonials</li>
        <li>Google reviews</li>
        <li>Case studies</li>
        <li>Client feedback</li>
        <li>Project results</li>
      </ul>
      <p className="mb-4">Don't hide your work.</p>
      <p className="mb-12">If customers are happy with your business, give potential customers an opportunity to see their experiences.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Give Customers a Reason to Choose You</h2>
      <p className="mb-4">Standing out isn't about being louder than everyone else.</p>
      <p className="mb-4">It's about being clear about the value you provide.</p>
      <p className="mb-4">Instead of simply saying:</p>
      <p className="mb-4 font-bold">"We offer professional services."</p>
      <p className="mb-4">Explain what customers actually get. For example:</p>
      <p className="mb-4 font-bold">"We help small businesses build a professional online presence through websites, branding, social media, SEO, and online advertising."</p>
      <p className="mb-12">The second message gives customers a better understanding of what the business can do for them.</p>

      {/* Section 11 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">11 / Make Your Content Sound Human</h2>
      <p className="mb-4">Businesses sometimes try too hard to sound professional.</p>
      <p className="mb-4">This can result in content filled with complicated words and generic phrases.</p>
      <p className="mb-4">Your customers don't need impressive vocabulary.</p>
      <p className="mb-4">They need clear information.</p>
      <p className="mb-4">Instead of:</p>
      <p className="mb-4 font-bold">"We leverage innovative solutions to empower businesses and maximize their digital potential."</p>
      <p className="mb-4">Try:</p>
      <p className="mb-4 font-bold">"We help businesses build a stronger online presence through websites, content, and digital marketing."</p>
      <p className="mb-4">Simple doesn't mean unprofessional.</p>
      <p className="mb-12">Clear communication can make your business easier to understand and remember.</p>

      {/* Section 12 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">12 / Keep Your Online Presence Updated</h2>
      <p className="mb-4">An outdated online presence can make customers question whether your business is still active.</p>
      <p className="mb-4">Check your website and social media regularly.</p>
      <p className="mb-4">Update things such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Business hours</li>
        <li>Contact information</li>
        <li>Services</li>
        <li>Offers</li>
        <li>Images</li>
        <li>Team information</li>
        <li>Portfolio projects</li>
        <li>Social media content</li>
      </ul>
      <p className="mb-12">If you've recently launched a new service or completed an important project, make sure people can see it online.</p>

      {/* Section 13 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">13 / Don't Try to Copy Your Competitors</h2>
      <p className="mb-4">It's useful to understand what your competitors are doing.</p>
      <p className="mb-4">But copying their website, content, branding, or social media style won't make your business stand out.</p>
      <p className="mb-4">Instead, look for opportunities to communicate your own strengths.</p>
      <p className="mb-4">Ask:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">What can we explain better?</li>
        <li className="font-bold">What can we show that others aren't showing?</li>
        <li className="font-bold">What can we do differently?</li>
      </ul>
      <p className="mb-4">Your goal isn't to look like everyone else.</p>
      <p className="mb-12">Your goal is to make your own business easier to recognize.</p>

      {/* Section 14 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">14 / Be Consistent</h2>
      <p className="mb-4">A strong online presence isn't created in one week.</p>
      <p className="mb-4">It comes from consistently improving your website, content, branding, and communication.</p>
      <p className="mb-4">Keep:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Updating your website</li>
        <li>Posting useful content</li>
        <li>Showing your work</li>
        <li>Responding to customers</li>
        <li>Collecting genuine reviews</li>
        <li>Improving your SEO</li>
        <li>Testing your advertising</li>
      </ul>
      <p className="mb-12">Small improvements made consistently can make a big difference over time.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">A Simple Formula to Stand Out Online</h2>
      <p className="mb-4">You don't need a complicated strategy.</p>
      <p className="mb-6">Start with:</p>
      
      <div className="flex flex-col items-center mb-12">
        <div className="font-bold text-[#492c28] bg-[#f5ece0] px-6 py-3 rounded-lg text-center w-full max-w-[400px]">Clear Brand</div>
        <div className="my-2 text-[#492c28]">↓</div>
        <div className="font-bold text-[#492c28] bg-[#f5ece0] px-6 py-3 rounded-lg text-center w-full max-w-[400px]">Professional Website</div>
        <div className="my-2 text-[#492c28]">↓</div>
        <div className="font-bold text-[#492c28] bg-[#f5ece0] px-6 py-3 rounded-lg text-center w-full max-w-[400px]">Useful Content</div>
        <div className="my-2 text-[#492c28]">↓</div>
        <div className="font-bold text-[#492c28] bg-[#f5ece0] px-6 py-3 rounded-lg text-center w-full max-w-[400px]">Strong Visuals</div>
        <div className="my-2 text-[#492c28]">↓</div>
        <div className="font-bold text-[#492c28] bg-[#f5ece0] px-6 py-3 rounded-lg text-center w-full max-w-[400px]">Real Work & Reviews</div>
        <div className="my-2 text-[#492c28]">↓</div>
        <div className="font-bold text-[#492c28] bg-[#f5ece0] px-6 py-3 rounded-lg text-center w-full max-w-[400px]">Consistent Online Presence</div>
        <div className="my-2 text-[#492c28]">↓</div>
        <div className="font-bold text-[#492c28] bg-[#f5ece0] px-6 py-3 rounded-lg text-center w-full max-w-[400px]">Easy Customer Contact</div>
      </div>
      
      <p className="mb-12">When these elements work together, your business becomes easier to recognize, understand, trust, and choose.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Standing out online isn't about trying to be the loudest business on the internet.</p>
      <p className="mb-6">It's about being <strong>clear, useful, professional, and consistent</strong>.</p>
      
      <p className="mb-2">Show people who you are.</p>
      <p className="mb-2">Explain what you offer.</p>
      <p className="mb-2">Share useful information.</p>
      <p className="mb-2">Show your real work.</p>
      <p className="mb-2">Build trust.</p>
      <p className="mb-8">And make it easy for customers to contact you.</p>
      
      <p className="mb-12">When your online presence clearly communicates the value your business provides, you have a better chance of getting noticed by the right people.</p>

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
            Ready to Build a Stronger <br className="hidden sm:block" />
            {' '}Online <span className="text-[#f3945f]">Presence?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          From branding and website design to social media, SEO, and online advertising, we help businesses create a professional presence that gets noticed.
          <br /><br />
          Let's make your business stand out online.
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
