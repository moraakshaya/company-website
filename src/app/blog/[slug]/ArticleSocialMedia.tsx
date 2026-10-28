/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleSocialMedia() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Social media can be a great way for businesses to stay connected with existing customers and reach new people.
      </p>
      <p className="mb-4">
        But one common question many business owners have is:
      </p>
      <p className="mb-4 font-bold">
        &quot;How often should I post?&quot;
      </p>
      <p className="mb-4">
        Should you post every day? A few times a week? Only when you have something to promote?
      </p>
      <p className="mb-4">
        The answer isn't the same for every business.
      </p>
      <p className="mb-12">
        What matters most is having a posting routine that you can maintain while continuing to share content that is useful and relevant to your audience.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Consistency Matters More Than Posting Every Day</h2>
      <p className="mb-4">You don't necessarily need to post every day to have a strong social media presence.</p>
      <p className="mb-4">Posting once a day may work for some businesses, while another business may get better results by posting three or four times a week.</p>
      <p className="mb-4">The important thing is consistency.</p>
      <p className="mb-4">For example, posting three useful posts every week is generally better than posting ten times one week and then disappearing for an entire month.</p>
      <p className="mb-12">Choose a schedule that your business can realistically maintain.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Start With a Simple Posting Schedule</h2>
      <p className="mb-4">If you're not posting consistently right now, don't try to create a complicated content plan immediately.</p>
      <p className="mb-4">Start with a simple routine.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-none mb-6 space-y-4">
        <li>
          <strong>Monday — Helpful Tip</strong><br />
          Share a useful tip related to your product or service.
        </li>
        <li>
          <strong>Wednesday — Your Work</strong><br />
          Show a product, completed project, service, or customer experience.
        </li>
        <li>
          <strong>Friday — Promotional Content</strong><br />
          Share an offer, service, event, product, or business update.
        </li>
      </ul>
      <p className="mb-4">That's already three pieces of content every week.</p>
      <p className="mb-12">Once you become comfortable with this routine, you can expand it.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/blog-details/top-right-2.jpg', alt: 'Article Inline Image 1' },
          { src: '/blog-details/article-5.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Different Businesses Need Different Posting Frequencies</h2>
      <p className="mb-4">There isn't one perfect posting frequency for every business.</p>
      <p className="mb-4">A restaurant may have plenty of content to share because it can regularly showcase food, offers, events, and customer experiences.</p>
      <p className="mb-8">A professional service business may have fewer things to post and may focus more on educational content. For example:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Restaurant</h3>
      <p className="mb-4">Could post several times a week about:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Food</li>
        <li>New dishes</li>
        <li>Offers</li>
        <li>Events</li>
        <li>Customer experiences</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Healthcare Business</h3>
      <p className="mb-4">Could focus on:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Health tips</li>
        <li>Services</li>
        <li>Doctor introductions</li>
        <li>Awareness content</li>
        <li>FAQs</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Real Estate Business</h3>
      <p className="mb-4">Could share:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Property listings</li>
        <li>Market information</li>
        <li>Project updates</li>
        <li>Home-buying tips</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Digital Agency</h3>
      <p className="mb-4">Could post:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Marketing tips</li>
        <li>Website advice</li>
        <li>Client work</li>
        <li>SEO information</li>
        <li>Branding ideas</li>
      </ul>
      <p className="mb-12">Your posting schedule should match your business and the amount of useful content you can create.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Focus on Quality, Not Just Quantity</h2>
      <p className="mb-4">Posting more doesn't automatically mean getting better results.</p>
      <p className="mb-4">If your posts are repetitive, unclear, or don't provide value, posting more frequently won't solve the problem.</p>
      <p className="mb-4">Before publishing something, ask:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">Is this useful to my audience?</li>
        <li className="font-bold">Does it represent my business properly?</li>
        <li className="font-bold">Does it give people a reason to stop and read?</li>
        <li className="font-bold">Does it support my business goal?</li>
      </ul>
      <p className="mb-12">A smaller number of good posts can be more valuable than a large number of low-quality posts.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Don't Make Every Post an Advertisement</h2>
      <p className="mb-4">One of the easiest ways to make your social media boring is to constantly sell.</p>
      <p className="mb-4">If every post says:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">&quot;Buy now.&quot;</li>
        <li className="font-bold">&quot;Contact us today.&quot;</li>
        <li className="font-bold">&quot;Get our service.&quot;</li>
      </ul>
      <p className="mb-8">people may stop paying attention. Instead, create a mix of content.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Educational Content</h3>
      <p className="mb-4">Help people learn something. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Tips</li>
        <li>Guides</li>
        <li>FAQs</li>
        <li>Industry information</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Promotional Content</h3>
      <p className="mb-4">Tell people about your products or services. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Offers</li>
        <li>Discounts</li>
        <li>New launches</li>
        <li>Packages</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Engagement Content</h3>
      <p className="mb-4">Give people a reason to interact. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Questions</li>
        <li>Polls</li>
        <li>Simple discussions</li>
        <li>Customer opinions</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Brand Content</h3>
      <p className="mb-4">Show the people and story behind your business. Examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Team introductions</li>
        <li>Behind-the-scenes content</li>
        <li>Business milestones</li>
        <li>Company updates</li>
      </ul>
      <p className="mb-12">A balanced content mix keeps your social media presence more interesting.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Create Content Around Your Customers' Questions</h2>
      <p className="mb-4">If you're constantly wondering what to post, start with your customers.</p>
      <p className="mb-4">Think about the questions they ask before buying your product or service.</p>
      <p className="mb-4">For example, a website development company might get questions like:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>How much does a website cost?</li>
        <li>How long does website development take?</li>
        <li>Do I need a website for my small business?</li>
        <li>Will my website work on mobile?</li>
        <li>Can I update the website myself?</li>
      </ul>
      <p className="mb-4">Each question can become a social media post.</p>
      <p className="mb-12">This gives you a simple source of content while also helping potential customers.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Reuse Good Content</h2>
      <p className="mb-4">You don't have to create something completely new every time you post.</p>
      <p className="mb-4">A useful piece of content can be repurposed into different formats.</p>
      <p className="mb-4">For example, one blog article can become:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>An Instagram carousel</li>
        <li>A short video</li>
        <li>A single-image post</li>
        <li>A LinkedIn post</li>
        <li>A Story</li>
        <li>A series of smaller tips</li>
      </ul>
      <p className="mb-12">This makes content creation easier and allows you to reach people who prefer different types of content.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Plan Your Content in Advance</h2>
      <p className="mb-4">Creating every post at the last minute can become stressful.</p>
      <p className="mb-6">Instead, try planning your content for the next week or month. Create a simple content calendar with:</p>

      <div className="overflow-x-auto mb-6 pb-4">
        <div className="min-w-[500px] border border-[#e8dac8] rounded-xl overflow-hidden bg-white/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f5ece0]">
                <th className="p-4 font-bold text-[#492c28] border-b border-[#e8dac8]/60">Day</th>
                <th className="p-4 font-bold text-[#492c28] border-b border-[#e8dac8]/60">Content Type</th>
                <th className="p-4 font-bold text-[#492c28] border-b border-[#e8dac8]/60">Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60 font-semibold">Monday</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Educational</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Business tip</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60 font-semibold">Wednesday</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Work</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Recent project</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60 font-semibold">Friday</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Promotional</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Service or offer</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-[#e8dac8]/60 font-semibold">Sunday</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Engagement</td>
                <td className="p-4 border-b border-[#e8dac8]/60">Customer question</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="mb-4">You don't need an elaborate system.</p>
      <p className="mb-12">Even a simple spreadsheet or calendar can help you stay organized.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Use a Content Bank</h2>
      <p className="mb-4">Sometimes you may have plenty of ideas but forget them when it's time to post.</p>
      <p className="mb-4">Create a simple list of content ideas whenever you think of something.</p>
      <p className="mb-4">Your content bank could include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Customer questions</li>
        <li>FAQs</li>
        <li>Tips</li>
        <li>Previous projects</li>
        <li>Product features</li>
        <li>Offers</li>
        <li>Testimonials</li>
        <li>Industry news</li>
        <li>Behind-the-scenes ideas</li>
        <li>Seasonal content</li>
      </ul>
      <p className="mb-12">When you don't know what to post, you can simply choose an idea from your list.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Use Different Content Formats</h2>
      <p className="mb-4">Social media isn't limited to single-image posts.</p>
      <p className="mb-4">Depending on the platform, you can experiment with:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Images</li>
        <li>Carousels</li>
        <li>Reels</li>
        <li>Videos</li>
        <li>Stories</li>
        <li>Testimonials</li>
        <li>Infographics</li>
        <li>Polls</li>
        <li>Short educational posts</li>
      </ul>
      <p className="mb-4">Different formats can help you communicate different types of information.</p>
      <p className="mb-12">For example, a quick tip may work well as a short video, while a detailed list may work better as a carousel.</p>

      {/* Section 11 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">11 / Don't Forget About Local and Seasonal Content</h2>
      <p className="mb-4">Local businesses can also create content around events, seasons, and important dates.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Festival offers</li>
        <li>Local events</li>
        <li>Seasonal products</li>
        <li>Holiday greetings</li>
        <li>Special business announcements</li>
        <li>Local customer stories</li>
      </ul>
      <p className="mb-12">This can make your content feel more relevant to the people you actually want to reach.</p>

      {/* Section 12 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">12 / Track What Works</h2>
      <p className="mb-4">You don't have to guess whether your content is working.</p>
      <p className="mb-4">Look at your social media insights regularly.</p>
      <p className="mb-4">Pay attention to:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Reach</li>
        <li>Engagement</li>
        <li>Shares</li>
        <li>Saves</li>
        <li>Comments</li>
        <li>Profile visits</li>
        <li>Website clicks</li>
        <li>Enquiries</li>
      </ul>
      <p className="mb-4">If certain types of content consistently perform better, create more content around those topics.</p>
      <p className="mb-12">For example, if educational carousels get more saves and shares than promotional posts, you may want to increase educational content.</p>

      {/* Section 13 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">13 / Don't Stop Because One Post Performs Poorly</h2>
      <p className="mb-4">Not every post will perform well.</p>
      <p className="mb-4">One post may receive hundreds of views while another gets very little attention.</p>
      <p className="mb-4">That's normal.</p>
      <p className="mb-4">Social media performance can change depending on the topic, format, audience, timing, and other factors.</p>
      <p className="mb-4">Instead of judging your entire strategy based on one post, look at your results over a longer period.</p>
      <p className="mb-12">The goal is to understand what works and gradually improve.</p>

      {/* Section 14 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">14 / A Simple Weekly Plan for Small Businesses</h2>
      <p className="mb-8">If you're just starting, here's a simple weekly structure you can follow:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Monday — Educate</h3>
      <p className="mb-6">Share a useful tip or answer a common customer question.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Tuesday — Brand</h3>
      <p className="mb-6">Show your business, team, workplace, or story.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Wednesday — Showcase</h3>
      <p className="mb-6">Show a product, service, project, or previous work.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Thursday — Engage</h3>
      <p className="mb-6">Ask your audience a question or share something they can interact with.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Friday — Promote</h3>
      <p className="mb-6">Highlight a product, service, offer, or upcoming event.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Weekend — Optional</h3>
      <p className="mb-8">Share lighter content, behind-the-scenes content, customer experiences, or seasonal posts.</p>

      <p className="mb-4">You don't have to follow this exact schedule.</p>
      <p className="mb-12">Use it as a starting point and adjust it based on your business.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">So, How Often Should You Post?</h2>
      <p className="mb-4">For many small businesses, <strong>3–5 useful posts per week</strong> can be a practical starting point.</p>
      <p className="mb-4">But the exact number isn't what matters most.</p>
      <p className="mb-4">A business that consistently creates three good posts every week can have a stronger presence than a business that posts seven times one week and then stops for several weeks.</p>
      <p className="mb-12">Focus on creating a routine you can actually maintain.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Social media doesn't have to become a daily struggle.</p>
      <p className="mb-4">You don't need to constantly search for new ideas or post just for the sake of posting.</p>
      <p className="mb-4">Start with a simple schedule.</p>
      <p className="mb-4">Understand your customers.</p>
      <p className="mb-4">Create content around their questions and interests.</p>
      <p className="mb-4">Show your products, services, and work.</p>
      <p className="mb-4">Mix educational, promotional, engagement, and brand content.</p>
      <p className="mb-4">Most importantly, stay consistent.</p>
      <p className="mb-12 font-bold">Good social media isn't about posting more. It's about posting with purpose.</p>

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
            Need Help Managing Your <br className="hidden sm:block" />
            {' '}Business <span className="text-[#f3945f]">Content?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          Let's create a content plan that works for your business.
        </p>

        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center justify-between w-max mx-auto bg-[#ff863c] text-white !min-h-[52px] !h-[52px] lg:!min-h-[40px] lg:!h-[40px] xl:!min-h-[42px] xl:!h-[42px] min-[1400px]:!min-h-[52px] min-[1400px]:!h-[52px] !p-0 !pl-8 lg:!pl-5 xl:!pl-6 min-[1400px]:!pl-8 rounded-full hover:bg-[#fa7726] transition-all duration-300 group shadow-[0_4px_0_#d45f1a] lg:shadow-[0_3px_0_#d45f1a] min-[1400px]:shadow-[0_4px_0_#d45f1a] active:shadow-none active:translate-y-1"
        >
          <span className="font-bold text-[16px] lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-[16px] pr-5 lg:pr-3.5 xl:pr-4 min-[1400px]:pr-5">Talk to Us</span>
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
