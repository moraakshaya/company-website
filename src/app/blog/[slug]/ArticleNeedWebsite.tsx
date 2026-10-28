/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { ArticleImageCarousel } from './ArticleImageCarousel';
import Link from 'next/link';

export function ArticleNeedWebsite() {
  return (
    <article className="text-[#5d4945] text-[1.05rem] leading-[1.8] font-['Inter',sans-serif]">
      <p className="text-xl sm:text-2xl leading-relaxed text-[#492c28] font-medium mb-8">
        Today, customers often search online before choosing a business.
      </p>
      <p className="mb-4">
        They may want to know what you offer, where you're located, how to contact you, what your products look like, or whether other customers have worked with you before.
      </p>
      <p className="mb-4">
        A social media page can help, but it doesn't always give your business a complete place to share everything customers need to know.
      </p>
      <p className="mb-4">
        That's where a website can help.
      </p>
      <p className="mb-12 font-bold">
        A website gives your business a place customers can visit anytime to learn about your services, products, location, contact details, and more.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">01 / Your Business Is Open Online 24/7</h2>
      <p className="mb-4">Your physical business may have fixed working hours.</p>
      <p className="mb-4">Your website doesn't.</p>
      <p className="mb-4">A customer can visit your website in the morning, evening, or even outside your business hours.</p>
      <p className="mb-4">They can check:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What your business does</li>
        <li>Your services</li>
        <li>Your products</li>
        <li>Your location</li>
        <li>Your contact details</li>
        <li>Your business information</li>
      </ul>
      <p className="mb-12">Even when you're not available to answer a phone call, your website can provide basic information.</p>

      {/* Section 2 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">02 / Customers Can Find Important Information in One Place</h2>
      <p className="mb-4">Without a website, customers may have to search through different platforms to find information about your business.</p>
      <p className="mb-4">One page might have your phone number.</p>
      <p className="mb-4">Another might show your services.</p>
      <p className="mb-4">Someone else may have posted your location.</p>
      <p className="mb-6">A website brings important information together in one place. For example, your website can include:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">About</h3>
      <p className="mb-6">Tell customers who you are and what your business does.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Services</h3>
      <p className="mb-6">Explain the services you provide.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Products</h3>
      <p className="mb-6">Show your products, features, or offerings.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Gallery</h3>
      <p className="mb-6">Show your work, products, space, or business.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Contact</h3>
      <p className="mb-8">Provide your phone number, email, location, enquiry form, or other contact options.</p>

      <p className="mb-12">This makes it easier for customers to understand your business.</p>

      {/* Two Images Side by Side */}
      <ArticleImageCarousel
        images={[
          { src: '/blog-details/article-7.jpg', alt: 'Article Inline Image 1' },
          { src: '/blog-details/article-4.jpg', alt: 'Article Inline Image 2' },
        ]}
      />

      {/* Section 3 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">03 / A Website Makes Your Business Look More Professional</h2>
      <p className="mb-4">Your online presence creates an impression before a customer contacts you.</p>
      <p className="mb-4">A well-designed website can help your business look more established and professional.</p>
      <p className="mb-4">This doesn't mean your website needs complicated animations or hundreds of pages.</p>
      <p className="mb-4">A simple website with:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Clear information</li>
        <li>Good images</li>
        <li>Easy navigation</li>
        <li>Professional branding</li>
        <li>Mobile-friendly design</li>
        <li>Clear contact options</li>
      </ul>
      <p className="mb-12">can be enough to create a strong first impression.</p>

      {/* Section 4 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">04 / Your Website Belongs to Your Business</h2>
      <p className="mb-4">Social media platforms are useful, but your business is still operating on someone else's platform.</p>
      <p className="mb-4">Your website gives you a space that is built specifically for your business.</p>
      <p className="mb-4">You decide:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>What information to show</li>
        <li>How your brand looks</li>
        <li>Which services to highlight</li>
        <li>What customers see first</li>
        <li>How people contact you</li>
        <li>How your work is presented</li>
      </ul>
      <p className="mb-12">Your website can grow and change as your business grows.</p>

      {/* Section 5 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">05 / It Helps Customers Understand What You Offer</h2>
      <p className="mb-4">Sometimes customers don't know everything about a business before contacting it.</p>
      <p className="mb-6">A website can answer their basic questions before they make an enquiry. For example:</p>

      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">What services do you provide?</li>
        <li className="font-bold">Where are you located?</li>
        <li className="font-bold">What products do you sell?</li>
        <li className="font-bold">Who are your services for?</li>
        <li className="font-bold">How can I contact you?</li>
        <li className="font-bold">Can I see your previous work?</li>
      </ul>

      <p className="mb-12">The clearer your website is, the easier it becomes for customers to decide whether your business is right for them.</p>

      {/* Section 6 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">06 / A Website Can Help People Find You Through Search</h2>
      <p className="mb-4">People don't always search for a specific business name.</p>
      <p className="mb-4">They may search for things like:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>"Website designer near me"</li>
        <li>"Best salon in [location]"</li>
        <li>"Home interior designer"</li>
        <li>"Digital marketing company"</li>
        <li>"Restaurant near me"</li>
        <li>"Dental clinic"</li>
      </ul>
      <p className="mb-4">A properly structured website can help your business appear in relevant search results.</p>
      <p className="mb-12">SEO is not an overnight process, but having useful website content gives search engines more information about your business and the services you provide.</p>

      {/* Section 7 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">07 / You Can Show Your Real Work</h2>
      <p className="mb-4">One of the best things about having a website is the ability to show customers what you actually do.</p>
      <p className="mb-4">Depending on your business, you can showcase:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Previous projects</li>
        <li>Products</li>
        <li>Services</li>
        <li>Customer testimonials</li>
        <li>Before-and-after work</li>
        <li>Case studies</li>
        <li>Photos</li>
        <li>Videos</li>
      </ul>
      <p className="mb-4">For a service business, this can be especially useful.</p>
      <p className="mb-12">Instead of simply saying <strong>"We provide quality service,"</strong> you can show examples of your work.</p>

      {/* Section 8 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">08 / It Can Bring Customers From Different Platforms</h2>
      <p className="mb-4">Your customers may discover your business through different places.</p>
      <p className="mb-4">For example:</p>

      <ul className="list-none mb-6 space-y-2">
        <li className="font-bold">Instagram &rarr; Website</li>
        <li className="font-bold">Google &rarr; Website</li>
        <li className="font-bold">Facebook &rarr; Website</li>
        <li className="font-bold">Online Advertisement &rarr; Website</li>
        <li className="font-bold">Business Card &rarr; Website</li>
      </ul>

      <p className="mb-4">Your website can become the central place where people go after discovering your business elsewhere.</p>
      <p className="mb-12">You can also add your website link to your social media profiles, advertisements, email signatures, and printed materials.</p>

      {/* Section 9 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">09 / A Website Can Make Enquiries Easier</h2>
      <p className="mb-4">A good website should make it simple for customers to take the next step.</p>
      <p className="mb-4">Depending on your business, this could be:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Call Us</li>
        <li>WhatsApp Us</li>
        <li>Send an Enquiry</li>
        <li>Book an Appointment</li>
        <li>Get a Quote</li>
        <li>Visit Us</li>
        <li>Email Us</li>
      </ul>
      <p className="mb-4">You don't need to make customers search for your contact information.</p>
      <p className="mb-12">Make the next step clear and easy.</p>

      {/* Section 10 */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#492c28] font-['Manrope',sans-serif] mt-12 mb-6">10 / You Don't Need a Huge Website</h2>
      <p className="mb-4">One common misconception is that every business needs a large website.</p>
      <p className="mb-4">That's not true.</p>
      <p className="mb-6">A small business may only need a few well-designed pages. For example:</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Home</h3>
      <p className="mb-6">A quick introduction to the business.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">About</h3>
      <p className="mb-6">Your business story and information.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Services</h3>
      <p className="mb-6">What you offer.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Work / Gallery</h3>
      <p className="mb-6">Examples of your work.</p>

      <h3 className="text-xl font-bold text-[#492c28] font-['Manrope',sans-serif] mb-2">Contact</h3>
      <p className="mb-8">Phone, email, location, enquiry form, or other contact options.</p>

      <p className="mb-4">The right website depends on what your business actually needs.</p>
      <p className="mb-12">A simple, useful website is better than a large website filled with unnecessary information.</p>

      <hr className="my-12 border-[#f5ece0]" />

      {/* Bottom Sections */}
      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Website vs Social Media</h2>
      <p className="mb-6">Social media and websites don't have to compete with each other. They can work together.</p>

      <div className="overflow-x-auto mb-12 rounded-2xl border border-[#e8dac8] bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#fff8f0]">
              <th className="p-5 sm:p-6 font-bold text-[#492c28] border-b border-r border-[#e8dac8] w-1/2">Website</th>
              <th className="p-5 sm:p-6 font-bold text-[#492c28] border-b border-[#e8dac8] w-1/2">Social Media</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-r border-[#e8dac8]">Detailed business information</td>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-[#e8dac8]">Quick updates</td>
            </tr>
            <tr>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-r border-[#e8dac8]">Services and products</td>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-[#e8dac8]">Regular content</td>
            </tr>
            <tr>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-r border-[#e8dac8]">Portfolio and work</td>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-[#e8dac8]">Engagement</td>
            </tr>
            <tr>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-r border-[#e8dac8]">Contact information</td>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-[#e8dac8]">Conversations</td>
            </tr>
            <tr>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-r border-[#e8dac8]">SEO and search visibility</td>
              <td className="p-5 sm:p-6 text-[#5d4945] border-b border-[#e8dac8]">Audience building</td>
            </tr>
            <tr>
              <td className="p-5 sm:p-6 text-[#5d4945] border-r border-[#e8dac8]">Your own business space</td>
              <td className="p-5 sm:p-6 text-[#5d4945]">Platform-based presence</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">Social media can help people discover and interact with your business.</p>
      <p className="mb-12">Your website can give them a complete place to learn more and take action.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Does Every Business Need a Website?</h2>
      <p className="mb-4">For many businesses, having a website can be very useful.</p>
      <p className="mb-4">It can be especially valuable if you want to:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Build a professional online presence</li>
        <li>Show your services</li>
        <li>Generate enquiries</li>
        <li>Display your work</li>
        <li>Help customers find important information</li>
        <li>Improve your visibility in search</li>
        <li>Give customers a place to learn about your business</li>
      </ul>
      <p className="mb-4">But the website should match the business.</p>
      <p className="mb-4">A local service business may need a simple informative website.</p>
      <p className="mb-4">An online store may need product pages and online payments.</p>
      <p className="mb-4">A larger company may need a much more detailed website.</p>
      <p className="mb-12 font-bold">The important thing is to build something that serves a real purpose.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">A Simple Website Checklist</h2>
      <p className="mb-4">Before launching your website, make sure customers can easily find:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Your business name</li>
        <li>What you do</li>
        <li>Your services or products</li>
        <li>Your location</li>
        <li>Your phone number</li>
        <li>Your email or enquiry option</li>
        <li>Your working hours, if relevant</li>
        <li>Your social media links</li>
        <li>Examples of your work</li>
        <li>Customer reviews or testimonials, if available</li>
      </ul>
      <p className="mb-12 font-bold">And most importantly, make sure the website works properly on mobile phones, tablets, and desktops.</p>

      <h2 className="text-[30px] leading-[1.3] font-extrabold text-[#492c28] font-['Manrope',sans-serif] mb-6">Final Thoughts</h2>
      <p className="mb-4">A website isn't just another online profile.</p>
      <p className="mb-4">It can become the central place where customers learn about your business, explore your services, see your work, and decide whether to contact you.</p>
      <p className="mb-4">You don't need a complicated website to get started.</p>
      <p className="mb-4">You need a website that is <strong>clear, professional, useful, easy to navigate, and built around your customers.</strong></p>
      <p className="mb-12">If people are already searching for your business online, giving them a professional place to find you can make a big difference.</p>

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
            Thinking About a Website <br className="hidden sm:block" />
            {' '}for Your <span className="text-[#f3945f]">Business?</span>
          </h3>

          {/* Right Sparkles */}
          <div className="relative w-14 h-14 sm:w-28 sm:h-28 shrink-0 pointer-events-none -ml-3 sm:-ml-6">
            <Image src="/blog-details/cta-rightside.png" alt="Decorative Right" fill className="object-contain" />
          </div>
        </div>

        <p className="text-white/90 mb-10 text-[1.05rem] sm:text-[1.1rem] leading-relaxed relative z-10 font-['Inter',sans-serif] w-full max-w-full sm:max-w-2xl mx-auto">
          Whether you need a simple business website, service-based website, portfolio, or a more complete online presence, we can help you create something that works for your business.
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
