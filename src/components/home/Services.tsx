"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const servicesList = [
  {
    id: "01",
    title: "Logo & Branding",
    subtitle: "Build a Brand People Remember.",
    desc: "We create professional visual identities that help your business look consistent, recognizable and trustworthy.",
    offerings: [
      "Logo Design", "Brand Identity", "Business Cards", "Letterheads", "Brochures & Profiles", "Brand Guidelines", "Marketing Materials"
    ],
    forWho: "New businesses • Rebranding • Growing businesses",
    linkText: "EXPLORE BRANDING",
    linkHref: "/services/branding",
    gradientFrom: "#ffa76b",
    gradientTo: "#ff5e00",
    shadowColor: "rgba(255, 94, 0, 0.4)",
    image: "/home-page/services/fireandtuns.png",
  },
  {
    id: "02",
    title: "Web Design & Development",
    subtitle: "Give Your Business a Professional Online Presence.",
    desc: "We design and develop responsive websites that clearly present your business, services and products while making it easy for customers to connect with you.",
    offerings: [
      "Business Websites", "Company Websites", "Service Websites", "Landing Pages", "E-commerce Websites", "Website Redesign", "Website Maintenance"
    ],
    forWho: "Clinics • Hospitals • Restaurants • Real Estate • Manufacturers • Shops",
    linkText: "EXPLORE WEB DESIGN",
    linkHref: "/services/web-design",
    gradientFrom: "#0fdbe6",
    gradientTo: "#047880",
    shadowColor: "rgba(4, 120, 128, 0.4)",
    image: "/home-page/services/shriswara.png",
  },
  {
    id: "03",
    title: "Social Media & Content",
    subtitle: "Keep Your Business Visible and Connected.",
    desc: "We create professional content that helps your business stay active on social media and communicate with your customers.",
    offerings: [
      "Social Media Posts", "Reels & Short Videos", "Promotional Creatives", "Festival & Occasion Posts", "Product & Service Content", "Social Media Management"
    ],
    forWho: "Local businesses • Brands • Professionals • Growing companies",
    linkText: "EXPLORE SOCIAL MEDIA",
    linkHref: "/services/social-media",
    gradientFrom: "#ffdd6b",
    gradientTo: "#eab308",
    shadowColor: "rgba(234, 179, 8, 0.4)",
    image: "/home-page/services/esthetix.png",
  },
  {
    id: "04",
    title: "SEO & Online Advertising",
    subtitle: "Help Customers Find Your Business Online.",
    desc: "We help businesses improve their online visibility and reach potential customers through search engines and online advertising.",
    offerings: [
      "Search Engine Optimization", "Local SEO", "Google Business Profile", "Google Ads", "Social Media Advertising", "Lead Generation Campaigns"
    ],
    forWho: "Businesses looking for more visibility, enquiries and customers.",
    linkText: "EXPLORE DIGITAL MARKETING",
    linkHref: "/services/digital-marketing",
    gradientFrom: "#b785f5",
    gradientTo: "#7c3aed",
    shadowColor: "rgba(124, 58, 237, 0.4)",
    image: "/home-page/services/russh.png",
  },
  {
    id: "05",
    title: "Creative Design",
    subtitle: "Create Marketing Materials That Get Noticed.",
    desc: "Need something specific for your business? We create professional visual materials for both digital and offline use.",
    offerings: [
      "Posters", "Banners", "Brochures", "Flyers", "Advertisements", "Presentation Designs", "Menus", "Promotional Materials"
    ],
    forWho: "Events • Offers • Campaigns • Businesses • Products • Services",
    linkText: "EXPLORE CREATIVE DESIGN",
    linkHref: "/services/creative-design",
    gradientFrom: "#ff8c5a",
    gradientTo: "#ea580c",
    shadowColor: "rgba(234, 88, 12, 0.4)",
    image: "/home-page/services/broucher.png",
  },
  {
    id: "06",
    title: "Ongoing Digital Support",
    subtitle: "Need Someone to Handle the Digital Side?",
    desc: "We can continue supporting your business after the initial project with regular updates, content, marketing and other digital requirements.",
    offerings: [
      "Website Updates", "Social Media Support", "SEO Support", "Advertising Management", "Creative Requirements", "Digital Consultation"
    ],
    forWho: "Businesses that need ongoing digital support without managing everything themselves.",
    linkText: "TALK TO US",
    linkHref: "/contact",
    gradientFrom: "#67d5ff",
    gradientTo: "#0284c7",
    shadowColor: "rgba(2, 132, 199, 0.4)",
    image: "/home-page/services/ricch.png",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesList.length);
    }, 4500); // 4.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-[#fffff0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 relative z-10">

        {/* Header Block */}
        <div className="text-center w-full max-w-[800px] mx-auto mb-16 lg:mb-20 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#ff863c]"></span>
            <p className="text-[14px] font-extrabold text-[#ff863c] uppercase tracking-widest">WHAT WE PROVIDE</p>
          </div>
          <h2 className="w-full section-title text-[clamp(26px,7.2vw,36px)] sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#492c28] mb-6 leading-[1.15] tracking-tight">
            Everything Your <br className="hidden md:block" />
            Business <br className="block sm:hidden" />
            Needs <span className="text-[#047880]">to Grow.</span>
          </h2>
          <p className="text-lg md:text-[19px] text-[#492c28]/70 leading-relaxed mx-auto font-medium">
            We create the digital and marketing materials your business needs. From a single creative or a new logo to a complete website and ongoing digital marketing, we provide flexible digital services that fit your business and your goals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[1000px] mx-auto pb-12 sm:pb-0 sm:min-h-[480px]">

          <div className="relative w-full sm:w-[calc(100%-4rem)] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] ml-0 sm:ml-16 mt-32 sm:mt-0 min-h-[660px] sm:min-h-[460px]">

            {servicesList.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 pointer-events-none ${isActive ? 'z-10' : 'z-0'}`}
                >

                  {/* Overlapping Left Image/Box matching Image 2 perfectly */}
                  <div className={`absolute -top-24 sm:top-1/2 left-1/2 sm:-left-16 -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/2 z-20 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div
                      className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[28px] overflow-hidden flex flex-col items-center justify-center text-white transition-transform duration-700 relative shadow-2xl"
                      style={{
                        boxShadow: isActive ? `0 30px 60px -12px rgba(73, 44, 40, 0.5)` : 'none',
                        transform: isActive ? 'scale(1)' : 'scale(0.95)'
                      }}
                    >
                      {/* Base Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          transform: isActive ? 'scale(1.05)' : 'scale(1)'
                        }}
                      />
                      {/* 3D Border & Highlights */}
                      <div className="absolute inset-0 rounded-[28px] border border-black/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),inset_0_-2px_8px_rgba(0,0,0,0.06)] pointer-events-none" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className={`absolute inset-0 p-6 pt-36 pb-8 sm:pt-12 sm:pl-[260px] md:pl-[340px] sm:pr-24 md:pr-32 sm:py-12 flex flex-col h-full justify-center text-center sm:text-left transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-[50ms] ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
                    {/* Top Category / ID Text */}
                    <p className="text-[12px] md:text-[13px] font-extrabold text-[#ff863c] uppercase tracking-widest mb-2">
                      {service.id} — {service.title}
                    </p>

                    {/* Subtitle / Main Title */}
                    <h3 className="w-full text-[22px] md:text-[28px] font-extrabold text-[#2a1714] mb-4 leading-snug">
                      {service.subtitle}
                    </h3>

                    {/* Description */}
                    <p className="text-[#492c28]/60 text-[15px] md:text-base leading-relaxed mb-6 max-w-xl">
                      {service.desc}
                    </p>

                    {/* Pills for Offerings */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 mb-8 max-w-xl">
                      {service.offerings.map((item, idx) => (
                        <span key={idx} className="text-[12px] font-semibold bg-[#f5f5f5] text-[#492c28]/70 px-3 py-1.5 rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Teal Button with 3D Arrow Icon */}
                    <div>
                      <Link
                        href={service.linkHref}
                        className="group inline-flex items-center gap-3 bg-[#047880] text-white pl-7 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-[#114e4b] transition-all hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-lg whitespace-nowrap capitalize"
                      >
                        {service.linkText.toLowerCase()}
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center relative z-10 border border-black/5 group-hover:scale-110 transition-transform">
                          <img src="/icons/about-arrow-3d.jpg" alt="Arrow Icon" className="w-full h-full object-contain p-0.5 group-hover:animate-ring" />
                        </div>
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}

            {/* Mobile Pagination (Horizontal dots near bottom border with slight gap) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden z-30">
              {servicesList.map((srv, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setActiveIndex(idx)}
                    className="h-1.5 rounded-full transition-all duration-500 ease-in-out"
                    style={{
                      width: isActive ? '24px' : '6px',
                      background: isActive ? '#492c28' : '#000000',
                      opacity: isActive ? 1 : 0.15,
                    }}
                    aria-label={`Go to service ${idx + 1}`}
                  />
                );
              })}
            </div>

          </div>
          <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex-col gap-2 z-30 hidden sm:flex">
            {servicesList.map((srv, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-1.5 rounded-full transition-all duration-500 ease-in-out hover:opacity-100 focus:outline-none`}
                  style={{
                    height: isActive ? '24px' : '6px',
                    background: isActive ? '#492c28' : '#000000',
                    opacity: isActive ? 1 : 0.15,
                  }}
                  aria-label={`Go to service ${idx + 1}`}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
