/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleMistakes() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Social media can be a great way for businesses to connect with customers, showcase their work, promote their services, and build awareness.
      </p>
      <p className="mb-4">
        But simply having a social media account isn't enough.
      </p>
      <p className="mb-4">
        Small mistakes in the way you create and manage your content can affect how people see your business.
      </p>
      <p className="mb-4">
        The good news is that most of these mistakes are easy to fix.
      </p>
      <p className="mb-12 font-bold">
        Here are 7 common social media mistakes businesses should avoid.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Posting Inconsistently</h2>
      <p className="mb-4">One of the most common mistakes is being active for a few days and then disappearing for weeks.</p>
      <p className="mb-4">For example, a business might publish several posts during one week and then stop posting completely.</p>
      <p className="mb-4">This makes it difficult to build a consistent online presence.</p>
      <p className="mb-4">You don't necessarily need to post every day.</p>
      <p className="mb-4">Instead, choose a realistic schedule that your business can maintain.</p>
      <p className="mb-4">For example:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>3 posts per week</li>
        <li>4 posts per week</li>
        <li>5 posts per week</li>
      </ul>
      <p className="mb-4">The exact number isn't as important as consistency.</p>
      <p className="mb-12 font-bold">A simple schedule you can maintain is better than an ambitious schedule you can't follow.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Making Every Post About Selling</h2>
      <p className="mb-4">Social media shouldn't feel like one long advertisement.</p>
      <p className="mb-4">If every post says:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">"Buy now."</li>
        <li className="font-bold">"Contact us today."</li>
        <li className="font-bold">"Get our service."</li>
      </ul>
      <p className="mb-8">people may eventually stop paying attention. Instead, create a mix of content.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Educational</h3>
      <p className="mb-6">Share useful tips and information.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Promotional</h3>
      <p className="mb-6">Talk about products, services, offers, and launches.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Brand</h3>
      <p className="mb-6">Show your team, business, story, or behind-the-scenes activities.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Engagement</h3>
      <p className="mb-6">Ask questions and encourage people to interact.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Work</h3>
      <p className="mb-8">Show completed projects, products, or customer experiences.</p>

      <p className="mb-12">A good balance makes your social media presence more useful and interesting.</p>

            {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/images/social_media_mockup.jpg', alt: 'Article Inline Image 1' },
          { src: '/images/calendar_mockup.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Not Knowing Who You're Talking To</h2>
      <p className="mb-4">Your content should be created for your customers, not just for your business.</p>
      <p className="mb-4">Before creating a post, think about:</p>
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">Who is this for?</li>
        <li className="font-bold">What do they want to know?</li>
        <li className="font-bold">What problem are they trying to solve?</li>
      </ul>
      <p className="mb-4">For example, a website company shouldn't only post technical information about development.</p>
      <p className="mb-4">Potential customers may be more interested in:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>How much a website costs</li>
        <li>How long it takes</li>
        <li>Why they need one</li>
        <li>What pages their website should have</li>
        <li>How a website can generate enquiries</li>
      </ul>
      <p className="mb-12">When you understand your audience, creating relevant content becomes much easier.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Using Unclear or Complicated Content</h2>
      <p className="mb-4">Your social media posts don't need to sound complicated to sound professional.</p>
      <p className="mb-4">Long sentences, technical terms, and generic business phrases can make your content difficult to understand.</p>
      <p className="mb-8">Instead, keep your message clear. For example:</p>

      <p className="mb-2 font-bold">Instead of:</p>
      <p className="mb-6 italic">"Leveraging innovative digital solutions to maximize your organization's online potential."</p>

      <p className="mb-2 font-bold">Try:</p>
      <p className="mb-8 italic">"We help businesses build a stronger online presence with websites, content, SEO, and digital marketing."</p>

      <p className="mb-12">Clear communication is easier for customers to understand and remember.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Using Poor-Quality Visuals</h2>
      <p className="mb-4">Social media is highly visual.</p>
      <p className="mb-4">Poor-quality images, blurry graphics, stretched logos, inconsistent colours, and cluttered designs can make your business look less professional.</p>
      <p className="mb-4">Make sure your social media visuals are:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>High quality</li>
        <li>Easy to read</li>
        <li>Properly sized</li>
        <li>Consistent with your brand</li>
        <li>Relevant to the content</li>
      </ul>
      <p className="mb-4">Your social media page should feel like an extension of your business.</p>
      <p className="mb-12">A consistent visual style can also make your posts easier to recognize.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Not Showing Your Real Work</h2>
      <p className="mb-4">Businesses often talk about what they can do without showing examples.</p>
      <p className="mb-8">If you provide a service, show people what you've actually done. For example:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">A Designer</h3>
      <p className="mb-6">Can show completed designs.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">A Restaurant</h3>
      <p className="mb-6">Can show food, ambience, and customer experiences.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">A Construction Company</h3>
      <p className="mb-6">Can show completed projects and progress.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">A Digital Agency</h3>
      <p className="mb-6">Can show websites, branding, content, and marketing work.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">A Salon</h3>
      <p className="mb-8">Can show hairstyles, treatments, and customer results.</p>

      <p className="mb-12">Real examples can help potential customers understand your quality and build confidence in your business.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Not Having a Clear Call-to-Action</h2>
      <p className="mb-4">A customer may like your post but still not know what to do next.</p>
      <p className="mb-8">That's where a clear call-to-action helps. Depending on your goal, you could use:</p>

      <ul className="list-none mb-8 space-y-3">
        <li className="font-bold">Learn More &rarr;</li>
        <li className="font-bold">Contact Us &rarr;</li>
        <li className="font-bold">Call Us &rarr;</li>
        <li className="font-bold">WhatsApp Us &rarr;</li>
        <li className="font-bold">Get a Quote &rarr;</li>
        <li className="font-bold">Book an Appointment &rarr;</li>
        <li className="font-bold">Visit Our Website &rarr;</li>
      </ul>

      <p className="mb-12">You don't need a call-to-action on every single post, but promotional and service-focused posts should make the next step clear.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Ignoring Comments and Messages</h2>
      <p className="mb-4">Social media isn't only about publishing posts.</p>
      <p className="mb-4">It's also about communicating with people.</p>
      <p className="mb-4">If someone comments on your post or sends you a message, try to respond in a reasonable amount of time.</p>
      <p className="mb-4">Ignoring questions or enquiries can make potential customers feel like the business isn't interested.</p>
      <p className="mb-4">Respond to:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Questions</li>
        <li>Comments</li>
        <li>Enquiries</li>
        <li>Reviews</li>
        <li>Feedback</li>
      </ul>
      <p className="mb-12">Even a simple response can make your business feel more approachable.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Copying Competitors</h2>
      <p className="mb-4">It's useful to look at what other businesses are doing.</p>
      <p className="mb-4">But copying their content isn't a good long-term strategy.</p>
      <p className="mb-4">Your business has its own:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Experience</li>
        <li>Customers</li>
        <li>Work</li>
        <li>Story</li>
        <li>Strengths</li>
        <li>Personality</li>
      </ul>
      <p className="mb-8">Use those things to create original content. Instead of asking:</p>
      <p className="mb-4 font-bold">"What are my competitors posting?"</p>
      <p className="mb-4">also ask:</p>
      <p className="mb-12 font-bold">"What can my business share that is useful to our customers?"</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Posting Without a Purpose</h2>
      <p className="mb-4">Before publishing a post, ask yourself:</p>
      <p className="mb-6 font-bold">"What is this post supposed to achieve?"</p>
      <p className="mb-4">It could be to:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Educate</li>
        <li>Inform</li>
        <li>Build trust</li>
        <li>Promote a service</li>
        <li>Showcase your work</li>
        <li>Generate enquiries</li>
        <li>Increase awareness</li>
        <li>Start a conversation</li>
      </ul>
      <p className="mb-12">When every post has a purpose, your social media strategy becomes more focused.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">A Simple Social Media Checklist</h2>
      <p className="mb-8">Before publishing your next post, quickly check:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Content</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Is the message clear?</li>
        <li>Is it useful or relevant?</li>
        <li>Is it written for your customers?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Design</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Is the image or graphic high quality?</li>
        <li>Is the text easy to read?</li>
        <li>Does it match your brand?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Purpose</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Why am I posting this?</li>
        <li>What do I want people to do?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Consistency</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Does this fit our overall content plan?</li>
        <li>Are we posting regularly?</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Action</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Does the customer know what to do next when necessary?</li>
      </ul>

      <p className="mb-12">These simple checks can help improve the quality of your social media content.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Social media doesn't have to be complicated.</p>
      <p className="mb-4">You don't need to post constantly or follow every trend.</p>
      <p className="mb-6">Start by avoiding the basics:</p>
      
      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">Don't disappear for weeks.</li>
        <li className="font-bold">Don't make every post an advertisement.</li>
        <li className="font-bold">Don't ignore your audience.</li>
        <li className="font-bold">Don't use unclear or poor-quality content.</li>
        <li className="font-bold">Don't forget to show your real work.</li>
      </ul>
      
      <p className="mb-4">Instead, focus on creating content that is <strong>clear, useful, consistent, and relevant to your customers.</strong></p>
      <p className="mb-12">Over time, a well-managed social media presence can help your business build awareness, trust, and stronger relationships with customers.</p>

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
            Need Help With Your Business <br className="hidden sm:block" />
            {' '}Social <span className="text-[#f3945f]">Media?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          From content planning and social media posts to promotional creatives and digital marketing, we can help you build a consistent online presence.
          <br /><br />
          Let's create content that represents your business.
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
