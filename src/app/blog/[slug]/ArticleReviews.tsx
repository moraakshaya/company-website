/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleReviews() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Before choosing a business, many customers look for reviews.
      </p>
      <p className="mb-4">
        They may check Google, social media, or other online platforms to see what previous customers have said about their experience.
      </p>
      <p className="mb-4">
        A few positive reviews can help a potential customer feel more confident about contacting your business.
      </p>
      <p className="mb-4">
        Reviews aren't a replacement for good products or services, but they can help show people what it is like to work with your business.
      </p>
      <p className="mb-12 font-bold">
        Here are some ways online reviews can help your business grow.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Reviews Build Trust</h2>
      <p className="mb-4">Customers naturally want to know whether they can trust a business before spending their money.</p>
      <p className="mb-4">Reviews give them an opportunity to see experiences from other customers.</p>
      <p className="mb-4">For example, someone looking for a:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Hospital</li>
        <li>Restaurant</li>
        <li>Salon</li>
        <li>Hotel</li>
        <li>Website company</li>
        <li>Home service</li>
        <li>Retail store</li>
      </ul>
      <p className="mb-4">may compare businesses before making a decision.</p>
      <p className="mb-12 font-bold">Seeing genuine positive experiences can make a business feel more trustworthy.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Customers Often Check Reviews Before Choosing</h2>
      <p className="mb-4">When people have several options, reviews can become one of the factors they consider.</p>
      <p className="mb-4">Imagine two businesses offering similar services.</p>
      <p className="mb-4">One has very few reviews and the other has many genuine reviews from customers.</p>
      <p className="mb-4">A potential customer may feel more comfortable exploring the business with stronger customer feedback.</p>
      <p className="mb-12">Reviews can therefore help businesses make a better first impression online.</p>

            {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/images/seo_mockup.jpg', alt: 'Article Inline Image 1' },
          { src: '/images/website_devices.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / Reviews Show Real Customer Experiences</h2>
      <p className="mb-4">Your website can tell people how good your business is.</p>
      <p className="mb-4">But customers may also want to hear from people who have actually used your products or services.</p>
      <p className="mb-4">Reviews can answer questions such as:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Was the service good?</li>
        <li>Was the staff helpful?</li>
        <li>Was the product worth it?</li>
        <li>Was the process easy?</li>
        <li>Did the business respond quickly?</li>
        <li>Was the overall experience positive?</li>
      </ul>
      <p className="mb-12">These real experiences can provide useful information that a normal advertisement cannot.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Positive Reviews Can Influence Buying Decisions</h2>
      <p className="mb-4">A customer may already be interested in your business but still be unsure about contacting you.</p>
      <p className="mb-4">A few good reviews can provide that extra confidence.</p>
      <p className="mb-8">For example:</p>
      <p className="mb-8 font-bold italic">"The website looks good."</p>
      <p className="mb-4">might get someone interested.</p>
      <p className="mb-4">But seeing several customers talk positively about their experience can make them more comfortable taking the next step.</p>
      <p className="mb-12">Reviews can help reduce some of the uncertainty that comes with choosing a business for the first time.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / Reviews Can Strengthen Your Online Presence</h2>
      <p className="mb-4">Customer reviews are another way for people to interact with your business online.</p>
      <p className="mb-4">They can add fresh customer experiences to your online presence and give visitors more information about your business.</p>
      <p className="mb-4">For local businesses especially, keeping your business profile updated and encouraging genuine customer feedback can be useful.</p>
      <p className="mb-4">Your online presence isn't only your website. It can include:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Google Business Profile</li>
        <li>Social media</li>
        <li>Business directories</li>
        <li>Review platforms</li>
        <li>Your website</li>
      </ul>
      <p className="mb-12">Reviews can become an important part of that overall presence.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / Reviews Give You Valuable Feedback</h2>
      <p className="mb-4">Reviews aren't only useful for potential customers.</p>
      <p className="mb-4">They can also help you understand your own business better.</p>
      <p className="mb-6">Customers may point out things you didn't notice. For example:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Positive feedback</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Friendly staff</li>
        <li>Fast service</li>
        <li>Good quality</li>
        <li>Easy communication</li>
      </ul>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Areas for improvement</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Slow response</li>
        <li>Confusing process</li>
        <li>Delayed delivery</li>
        <li>Difficult booking experience</li>
      </ul>

      <p className="mb-12">This feedback can help you identify what is working and what could be improved.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / Responding to Reviews Shows You Care</h2>
      <p className="mb-4">Getting reviews is only one part of managing your online reputation.</p>
      <p className="mb-4">It's also a good idea to respond to them.</p>
      <p className="mb-4">For positive reviews, a simple thank-you can show appreciation.</p>
      <p className="mb-4">For negative reviews, respond professionally and try to understand the customer's concern.</p>
      <p className="mb-4">Avoid arguing publicly or responding emotionally. Instead, keep your response:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Polite</li>
        <li>Professional</li>
        <li>Helpful</li>
        <li>Respectful</li>
      </ul>
      <p className="mb-12">Even when a review is negative, the way you respond can influence how other people view your business.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / Don't Buy or Fake Reviews</h2>
      <p className="mb-4">It's tempting to try to increase the number of reviews quickly.</p>
      <p className="mb-4">But fake reviews can damage your reputation if customers discover them.</p>
      <p className="mb-4">Instead, focus on getting genuine feedback from real customers.</p>
      <p className="mb-4">A smaller number of authentic reviews is much more valuable than a large number of reviews that don't reflect real experiences.</p>
      <p className="mb-12">Your goal should be to make it easy for satisfied customers to share their honest experience.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / Make It Easy for Customers to Leave a Review</h2>
      <p className="mb-4">Sometimes customers are happy with your service but simply don't think about leaving a review.</p>
      <p className="mb-4">You can politely ask them after a successful experience.</p>
      <p className="mb-6">For example, after completing a project or service, you can say:</p>
      
      <p className="mb-6 font-bold italic">"We're glad you were happy with our service. If you have a moment, we'd really appreciate your feedback."</p>

      <p className="mb-4">You can provide a direct review link or tell them where they can leave their feedback.</p>
      <p className="mb-12">The easier the process is, the more likely customers are to complete it.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / Use Reviews Across Your Marketing</h2>
      <p className="mb-4">Positive customer feedback doesn't have to stay on your review platform.</p>
      <p className="mb-4">With appropriate customer permission, useful testimonials can also be featured on your:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Website</li>
        <li>Social media</li>
        <li>Brochures</li>
        <li>Presentations</li>
        <li>Advertisements</li>
        <li>Service pages</li>
      </ul>
      <p className="mb-4">For example, a website can have a dedicated <strong>Customer Reviews</strong> or <strong>What Our Clients Say</strong> section.</p>
      <p className="mb-12">This allows visitors who are discovering your business through another channel to see customer experiences too.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">A Simple Review Strategy</h2>
      <p className="mb-8">You don't need a complicated system to start.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 1 — Provide a Good Experience</h3>
      <p className="mb-6">Good reviews usually begin with good products or services.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 2 — Ask at the Right Time</h3>
      <p className="mb-6">Ask customers after they have had a positive experience.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 3 — Make It Easy</h3>
      <p className="mb-6">Give them a simple way to leave feedback.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 4 — Respond</h3>
      <p className="mb-6">Thank customers for positive reviews and handle negative feedback professionally.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 5 — Learn From Feedback</h3>
      <p className="mb-6">Look for repeated comments and use them to improve your business.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Step 6 — Keep Going</h3>
      <p className="mb-8">Don't expect dozens of reviews overnight. Building genuine customer feedback takes time.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">Online reviews can be a valuable part of your business's online presence.</p>
      <p className="mb-4">They can help potential customers understand your business, build confidence, and make decisions more comfortably.</p>
      <p className="mb-4">But the best review strategy isn't simply about collecting more reviews.</p>
      <p className="mb-6">It's about <strong>providing a good experience, encouraging genuine feedback, responding professionally, and learning from what customers say.</strong></p>
      
      <p className="mb-12">When your customers are happy and willing to share their experience, their words can become one of the most useful ways to introduce your business to new customers.</p>

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
            Want to Build a Stronger <br className="hidden sm:block" />
            {' '}Online <span className="text-[#f3945f]">Presence?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          From websites and branding to social media, SEO, and online advertising, we can help your business build a professional presence that customers can trust.
        </p>

        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center justify-between w-max mx-auto bg-[#ff863c] text-white !min-h-[52px] !h-[52px] !p-0 !pl-8 rounded-full hover:bg-[#fa7726] transition-all duration-300 group shadow-[0_4px_0_#d45f1a] active:shadow-none active:translate-y-1"
        >
          <span className="font-bold text-[16px] pr-5">Start Your Project</span>
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
