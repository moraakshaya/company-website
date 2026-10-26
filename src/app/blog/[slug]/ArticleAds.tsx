/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleAds() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        If you want to advertise your business online, two platforms you may consider are Google Ads and Instagram Ads.
      </p>
      <p className="mb-6">
        Both can help you reach potential customers, but they work in very different ways.
      </p>
      <p className="mb-6">
        Google helps you reach people who are already searching for something, while Instagram helps you reach people while they are browsing content and discovering new businesses.
      </p>
      <p className="mb-12">
        So, which one is better? The answer depends on your business, your target audience, and what you want your advertising campaign to achieve.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / How Google Ads Work</h2>
      <p className="mb-4">Google Ads allows your business to appear when people search for products or services related to what you offer.</p>
      <p className="mb-4">For example, if someone searches for:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>"Best dental clinic near me"</li>
        <li>"Website development company in Hyderabad"</li>
        <li>"Interior designers near me"</li>
        <li>"Digital marketing agency Hyderabad"</li>
      </ul>
      <p className="mb-4">relevant businesses can use Google Ads to appear prominently in the search results.</p>
      <p className="mb-4">The important advantage is <strong>intent</strong>. The person is already looking for something.</p>
      <p className="mb-12">If your ad appears at the right time, there is a good chance that person could become a customer.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / How Instagram Ads Work</h2>
      <p className="mb-4">Instagram Ads work differently.</p>
      <p className="mb-4">Instead of waiting for someone to search for your service, you can show your advertisements to people based on factors such as their interests, location, demographics, and online behaviour.</p>
      <p className="mb-4">For example, a clothing store could show its new collection to people interested in fashion. A restaurant could promote a special offer to people in a particular location. A real estate business could promote available properties to people interested in buying a home.</p>
      <p className="mb-12">Instagram is particularly useful for visually presenting your business, products, offers, and content.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/blog-details/article-2.jpg', alt: 'Article Inline Image 1' },
          { src: '/blog-details/article-6.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Google Ads Are Great for Customer Intent</h2>
      <p className="mb-4">One of the biggest advantages of Google Ads is that people are often actively looking for a solution.</p>
      <p className="mb-4">Imagine someone searches: <strong>"AC repair service near me."</strong></p>
      <p className="mb-4">They already have a problem and are looking for a service. If your business appears at that moment, you have an opportunity to get an enquiry or phone call.</p>
      <p className="mb-4">This makes Google Ads especially useful for businesses where customers actively search before making a decision. Some examples include:</p>
      <ul className="list-disc pl-6 mb-12 space-y-2">
        <li>Hospitals and clinics</li>
        <li>Restaurants</li>
        <li>Home services</li>
        <li>Professional services</li>
        <li>Educational institutes</li>
        <li>Repair services</li>
        <li>Travel services</li>
        <li>B2B services</li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Instagram Ads Are Great for Discovery</h2>
      <p className="mb-4">Instagram is more focused on discovery.</p>
      <p className="mb-4">People may not be searching for your business when they see your advertisement. Instead, they might discover your business while scrolling through their feed, Stories, or other Instagram content.</p>
      <p className="mb-4">This can be especially useful for businesses that benefit from attractive visuals and strong branding. For example:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Fashion brands</li>
        <li>Restaurants</li>
        <li>Beauty businesses</li>
        <li>Jewellery brands</li>
        <li>Cafes</li>
        <li>Fitness businesses</li>
        <li>Events</li>
        <li>Lifestyle products</li>
      </ul>
      <p className="mb-12">Instagram can help introduce your business to people who may not have known about you before.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Which One Is Better for Getting Leads?</h2>
      <p className="mb-4">If your main goal is to generate enquiries from people actively searching for your service, Google Ads can be a strong option.</p>
      <p className="mb-4">For example:<br /><strong>Customer searches &rarr; Sees your ad &rarr; Visits website/calls &rarr; Enquiry</strong></p>
      <p className="mb-4">Instagram can work differently:<br /><strong>Customer sees your ad &rarr; Becomes interested &rarr; Visits profile/website &rarr; Learns more &rarr; Enquiry</strong></p>
      <p className="mb-12">This doesn't mean Instagram can't generate leads. It simply means the customer's journey can be different.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Which One Is Better for Building Brand Awareness?</h2>
      <p className="mb-4">Instagram can be particularly useful for building awareness. You can use images, videos, Reels, Stories, and other creative formats to show people what your business is about.</p>
      <p className="mb-4">For example, a restaurant can showcase:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Food</li>
        <li>Ambience</li>
        <li>Special offers</li>
        <li>Customer experiences</li>
        <li>New menu items</li>
      </ul>
      <p className="mb-4">A service business can showcase:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Completed projects</li>
        <li>Before-and-after results</li>
        <li>Customer testimonials</li>
        <li>Team members</li>
        <li>Services</li>
      </ul>
      <p className="mb-12">This helps people become familiar with your business before they are ready to buy.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Google Ads vs Instagram Ads</h2>
      <p className="mb-6">Here's a simple comparison:</p>
      <div className="overflow-x-auto mb-6 pb-4">
        <div className="min-w-[500px] border border-[#e8dac8] rounded-xl overflow-hidden bg-white/50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#f5ece0]">
              <tr>
                <th className="p-4 font-bold text-[#492c28] border-b border-[#e8dac8]/60">Google Ads</th>
                <th className="p-4 font-bold text-[#492c28] border-b border-[#e8dac8]/60">Instagram Ads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60">Reaches people searching</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Reaches people browsing</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60">Strong search intent</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Strong discovery</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60">Great for enquiries</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Great for awareness and engagement</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60">Keyword-based targeting</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Audience-based targeting</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60">Works well for local services</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Works well for visual businesses</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60">Search-focused</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Visual and social-focused</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="mb-4">Neither platform is automatically better for every business.</p>
      <p className="mb-12">The right choice depends on your goals.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / What About the Advertising Budget?</h2>
      <p className="mb-4">Your budget should not be decided simply by choosing the platform with the cheapest clicks. What matters is whether the advertising generates useful results.</p>
      <p className="mb-4">For example, imagine you spend ₹10,000 on advertising. Campaign A generates 200 clicks but only 2 enquiries. Campaign B generates 80 clicks but 15 enquiries.</p>
      <p className="mb-4">Campaign B may be much more valuable, even though it generated fewer clicks.</p>
      <p className="mb-4">That's why you should track metrics such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Clicks</li>
        <li>Cost per click</li>
        <li>Leads</li>
        <li>Cost per lead</li>
        <li>Calls</li>
        <li>Website enquiries</li>
        <li>Conversions</li>
        <li>Sales</li>
      </ul>
      <p className="mb-4">The goal isn't simply to get more traffic.</p>
      <p className="mb-12">The goal is to get the <strong>right traffic</strong>.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Can You Use Both?</h2>
      <p className="mb-4">Yes.</p>
      <p className="mb-4">In fact, using both platforms can make sense for some businesses. You could use Google Ads to reach people who are actively searching for your services. At the same time, you could use Instagram Ads to introduce your brand to new audiences and keep your business visible.</p>
      <p className="mb-4">For example:</p>
      <p className="mb-4 font-bold">Instagram &rarr; Discover your business<br />Google &rarr; Search for your service<br />Website &rarr; Learn about your business<br />Enquiry &rarr; Become a customer</p>
      <p className="mb-12">Using different platforms at different stages of the customer journey can create a stronger overall advertising strategy.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Which One Should Your Business Choose?</h2>
      <p className="mb-8">Ask yourself what you want to achieve.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-4">Choose Google Ads if:</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>People actively search for your service</li>
        <li>You want enquiries or phone calls</li>
        <li>You provide local services</li>
        <li>Customers usually search before making a decision</li>
        <li>You want to capture existing demand</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-4">Choose Instagram Ads if:</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Your business is visually appealing</li>
        <li>You want to build brand awareness</li>
        <li>You want to reach new audiences</li>
        <li>You have strong images or videos</li>
        <li>Your customers spend time on Instagram</li>
        <li>You want to promote offers, products, or content</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-4">Consider Both if:</h3>
      <p className="mb-12">You want to generate immediate enquiries while also building long-term brand awareness.</p>

      <hr className="my-12 border-[#f5ece0]" />

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Don't Choose a Platform Just Because It's Popular</h2>
      <p className="mb-4">The most popular advertising platform isn't necessarily the right one for your business. Before starting a campaign, think about:</p>
      <ul className="list-none mb-8 space-y-2">
        <li className="font-bold">Who are your customers?</li>
        <li className="font-bold">What are they looking for?</li>
        <li className="font-bold">Where do they spend their time?</li>
        <li className="font-bold">Are they ready to buy, or do they first need to discover your business?</li>
      </ul>
      <p className="mb-12">Once you understand these questions, choosing an advertising platform becomes much easier.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">The Right Strategy Matters More Than the Platform</h2>
      <p className="mb-4">Google Ads and Instagram Ads can both be effective. But simply running advertisements doesn't guarantee results.</p>
      <p className="mb-4">Your campaign needs the right:</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {['Audience', 'Keywords', 'Ad creatives', 'Offers', 'Landing pages', 'Budget', 'Targeting', 'Tracking'].map((item) => (
          <span key={item} className="px-3 py-1 bg-[#f5ece0] text-[#492c28] rounded-full text-sm font-semibold">{item}</span>
        ))}
      </div>
      <p className="mb-12">A well-planned campaign can perform much better than simply putting money behind an advertisement and hoping for results.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">So, <strong>Google Ads vs Instagram Ads — which is better?</strong></p>
      <p className="mb-4">There isn't one answer for every business.</p>
      <p className="mb-4"><strong>Google Ads</strong> can be a great choice when people are already searching for the products or services you provide.</p>
      <p className="mb-4"><strong>Instagram Ads</strong> can be a great choice when you want to introduce your business to new people, showcase your products, and build awareness through visual content.</p>
      <p className="mb-4">And for many businesses, the best approach may be to use both.</p>
      <p className="mb-12">The important thing is to choose your platform based on your <strong>business goals and customers</strong>, not just because another business is using it.</p>

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
            Ready to Reach More <br className="hidden sm:block" />
            {' '}Customers <span className="text-[#f3945f]">Online?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          Let's create an advertising plan that works for your business.
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