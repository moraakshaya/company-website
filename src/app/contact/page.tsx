"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function ContactPage() {
  const servicesList = [
    "Website Design & Development",
    "Website Redesign",
    "Logo & Branding",
    "Social Media & Content Marketing",
    "SEO",
    "Online Advertising",
    "Content & Creative Design",
    "Website Maintenance",
    "Other"
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* HERO HEADER SECTION */}
      <section className="w-full relative min-h-[55vh] pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 flex flex-col items-center justify-center text-center rounded-b-[2.5rem] sm:rounded-b-[3.5rem] shadow-[0_10px_30px_-10px_rgba(24,74,65,0.4)] z-10 overflow-hidden bg-[url('/contact-page/contact-hero.jpg')] bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 pointer-events-none z-0"></div>

        {/* Very faint grain/noise texture overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
          {/* Category Badge */}
          <span className="bg-[#f37636] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 font-['Inter',sans-serif] shadow-sm">
            CONTACT US
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold text-white leading-[1.2] mb-6 font-['Manrope',sans-serif]">
            Let’s Talk About Your <span className="text-[#2ec4b6]">Business</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[1.1rem] sm:text-[1.25rem] text-white/90 font-medium font-['Inter',sans-serif] leading-relaxed max-w-2xl">
            Have a project in mind? Let’s discuss your goals, ideas, and how we can help your business grow online.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto py-16 lg:py-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column - Contact Form */}
          <div className="flex flex-col text-left">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-[#f37636] font-bold uppercase tracking-wider text-[13px] mb-3 font-['Inter',sans-serif]">
                SEND US A MESSAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#492c28] leading-[1.2] mb-5 font-['Manrope',sans-serif]">
                Got Something in <span className="text-[#047880]">Mind ?</span>
              </h2>
              <div className="text-[#8c8275] text-[1.05rem] leading-relaxed mb-10 font-['Inter',sans-serif]">
                <p className="mb-2">A website? A fresh brand? Better content? More people finding you online?</p>
                <p>Whatever you're thinking, let's make it happen.</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[14px] font-bold text-[#492c28] font-['Manrope',sans-serif]">Name</label>
                  <input type="text" id="name" placeholder="Your Name" className="!bg-transparent backdrop-blur-md !border-2 !border-[#184a41] rounded-xl px-4 py-3.5 focus:outline-none focus:!border-[#184a41] text-[#492c28] placeholder-[#bcaea4] !shadow-[0_8px_20px_rgba(24,74,65,0.08)] hover:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] focus:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] transition-all font-['Inter',sans-serif]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[14px] font-bold text-[#492c28] font-['Manrope',sans-serif]">Company</label>
                  <input type="text" id="company" placeholder="Your Company" className="!bg-transparent backdrop-blur-md !border-2 !border-[#184a41] rounded-xl px-4 py-3.5 focus:outline-none focus:!border-[#184a41] text-[#492c28] placeholder-[#bcaea4] !shadow-[0_8px_20px_rgba(24,74,65,0.08)] hover:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] focus:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] transition-all font-['Inter',sans-serif]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[14px] font-bold text-[#492c28] font-['Manrope',sans-serif]">Phone</label>
                  <input type="tel" id="phone" placeholder="Phone Number" className="!bg-transparent backdrop-blur-md !border-2 !border-[#184a41] rounded-xl px-4 py-3.5 focus:outline-none focus:!border-[#184a41] text-[#492c28] placeholder-[#bcaea4] !shadow-[0_8px_20px_rgba(24,74,65,0.08)] hover:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] focus:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] transition-all font-['Inter',sans-serif]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[14px] font-bold text-[#492c28] font-['Manrope',sans-serif]">Email</label>
                  <input type="email" id="email" placeholder="Email Address" className="!bg-transparent backdrop-blur-md !border-2 !border-[#184a41] rounded-xl px-4 py-3.5 focus:outline-none focus:!border-[#184a41] text-[#492c28] placeholder-[#bcaea4] !shadow-[0_8px_20px_rgba(24,74,65,0.08)] hover:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] focus:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] transition-all font-['Inter',sans-serif]" />
                </div>
              </div>

              <div className="flex flex-col gap-2" ref={dropdownRef}>
                <label className="text-[14px] font-bold text-[#492c28] font-['Manrope',sans-serif]">Subject</label>
                <div className="relative">
                  {/* Hidden input to store value for native form submission if needed */}
                  <input type="hidden" name="subject" value={selectedService} />

                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full !bg-transparent backdrop-blur-md !border-2 !border-solid rounded-xl px-4 py-3.5 focus:outline-none focus:!border-[#184a41] !shadow-[0_8px_20px_rgba(24,74,65,0.08)] hover:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] focus:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] transition-all font-['Inter',sans-serif] text-left flex justify-between items-center ${isDropdownOpen ? '!border-[#184a41] !shadow-[0_8px_25px_rgba(24,74,65,0.12)]' : '!border-[#184a41]'}`}
                  >
                    <span className={selectedService ? "text-[#492c28]" : "text-[#bcaea4]"}>
                      {selectedService || "What can we help you with?"}
                    </span>
                    <svg className={`w-5 h-5 text-[#bcaea4] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div
                      className="absolute z-50 w-full mt-2 bg-[#fffff0]/95 backdrop-blur-xl border-2 border-[#184a41] shadow-[0_12px_40px_rgba(24,74,65,0.15)] rounded-xl overflow-y-auto overflow-x-hidden flex flex-col max-h-[310px] transition-all duration-300 origin-top animate-[dropdownOpen_0.2s_ease-out_forwards]"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedService("");
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 font-['Inter',sans-serif] text-[15px] transition-colors flex-shrink-0 ${!selectedService ? 'bg-[#492c28] text-white font-medium' : 'bg-transparent text-[#8c8275] hover:bg-[#492c28] hover:text-white'}`}
                      >
                        What can we help you with?
                      </button>
                      {servicesList.map((service, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedService(service);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3.5 font-['Inter',sans-serif] text-[15px] border-t border-[#184a41]/20 transition-colors flex-shrink-0 ${selectedService === service ? 'bg-[#492c28] text-white font-medium' : 'text-[#492c28] hover:bg-[#492c28] hover:text-white'}`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[14px] font-bold text-[#492c28] font-['Manrope',sans-serif]">Message</label>
                <textarea id="message" rows={5} placeholder="Your Message..." className="!bg-transparent backdrop-blur-md !border-2 !border-[#184a41] rounded-xl px-4 py-3.5 focus:outline-none focus:!border-[#184a41] text-[#492c28] placeholder-[#bcaea4] !shadow-[0_8px_20px_rgba(24,74,65,0.08)] hover:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] focus:!shadow-[0_8px_25px_rgba(24,74,65,0.12)] transition-all resize-none font-['Inter',sans-serif]"></textarea>
              </div>

              <button
                type="submit"
                className="group flex items-center justify-between gap-5 bg-[#184a41] text-white pl-7 pr-1.5 h-[56px] rounded-full font-extrabold text-[16px] tracking-wide hover:bg-[#12362f] transition-all active:scale-95 mt-4 w-max shadow-lg"
              >
                Let's Talk
                <div className="w-[44px] h-[44px] rounded-full border-[2px] border-white/50 flex items-center justify-center bg-gradient-to-br from-[#126b64] to-[#052b29] shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform overflow-hidden">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Telephone%20Receiver.png"
                    alt="Phone"
                    className="w-6 h-6 object-contain drop-shadow-lg"
                  />
                </div>
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="bg-gradient-to-b from-[#184a41] to-[#0f312a] rounded-[2rem] p-10 lg:p-12 text-left shadow-2xl relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white opacity-[0.03] blur-3xl"></div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/70 font-bold uppercase tracking-wider text-[12px] mb-3 block font-['Inter',sans-serif]">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-[2rem] font-extrabold text-white leading-[1.2] mb-12 font-['Manrope',sans-serif]">
                We'd Love to Hear From You.
              </h3>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Info Item 1 */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md text-[#184a41]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-white font-bold text-[17px] mb-1 font-['Manrope',sans-serif]">Our Office</h4>
                  <p className="text-white/80 text-[15px] font-medium leading-relaxed font-['Inter',sans-serif]">
                    Flat No: 101, 1st Floor, Sri Ikon Residency,<br />
                    Plot No 496, Near Miyapur, Mathrusree Nagar,<br />
                    Hyderabad, Telangana – 500049.
                  </p>
                </div>
              </div>

              {/* Info Item 2 */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md text-[#184a41]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-white font-bold text-[17px] mb-1 font-['Manrope',sans-serif]">Email Support</h4>
                  <p className="text-white/80 text-[15px] font-medium leading-relaxed font-['Inter',sans-serif]">
                    info@prodbizsolutions.com
                  </p>
                </div>
              </div>

              {/* Info Item 3 */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md text-[#184a41]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-white font-bold text-[17px] mb-1 font-['Manrope',sans-serif]">Let's Talk</h4>
                  <p className="text-white/80 text-[15px] font-medium leading-relaxed font-['Inter',sans-serif]">
                    Phone : +91 8977742255
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-8 relative z-10" />

            {/* Social Follow */}
            <div className="flex items-center gap-4 relative z-10">
              <span className="text-white font-bold text-[16px] font-['Manrope',sans-serif]">Follow us :</span>
              <div className="flex gap-2.5">
                <a href="#" className="w-9 h-9 rounded-full bg-[#f37636] flex items-center justify-center text-white hover:bg-[#fa7726] hover:-translate-y-1 transition-all shadow-sm">
                  {/* Twitter */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#f37636] flex items-center justify-center text-white hover:bg-[#fa7726] hover:-translate-y-1 transition-all shadow-sm">
                  {/* LinkedIn */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#f37636] flex items-center justify-center text-white hover:bg-[#fa7726] hover:-translate-y-1 transition-all shadow-sm">
                  {/* Instagram */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full pb-16 lg:pb-24 pt-0 bg-transparent">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#fff8f0] text-[#492c28] px-5 py-2 rounded-full font-bold text-[14px] flex items-center gap-2 shadow-sm border border-[#f37636]/10 font-['Inter',sans-serif]">
              <svg className="w-4 h-4 text-[#f37636]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16M4 12h16M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66" />
              </svg>
              Our Location
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-[3rem] md:text-[3.5rem] font-extrabold text-[#492c28] tracking-tight text-center mx-auto leading-[1.1] mb-12 font-['Manrope',sans-serif]">
            Visit Our Office For In-person<br className="hidden md:block" />{" "}
            <span className="relative inline-block pb-2">
              <span className="text-[#f37636] inline-block font-[family-name:var(--font-caveat)] font-bold text-[1.2em] -rotate-2">
                Meetings
              </span>
              <span className="inline-block mx-3">And</span>
              <span className="text-[#f37636] inline-block font-[family-name:var(--font-caveat)] font-bold text-[1.2em] -rotate-2">
                Consultations
              </span>
              <svg
                className="absolute w-[105%] h-[14px] -bottom-2 -left-[2.5%] text-[#f37636] -z-10"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 10 Q 50 20 100 8"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Map Container Wrapper */}
          <div className="relative w-full mt-10 md:mt-16">
            {/* 3D Map Pin Overlay */}
            <div className="absolute -bottom-8 -left-6 md:-bottom-12 md:-left-10 lg:-bottom-16 lg:-left-16 z-20">
              <img
                src="/contact-page/location.png"
                alt="Location Pin"
                className="w-32 md:w-48 lg:w-56 h-auto drop-shadow-2xl transition-transform hover:scale-105 duration-300"
              />
            </div>

            {/* Map Frame */}
            <div className="w-full h-[400px] lg:h-[550px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(24,74,65,0.15)] relative border-[3px] lg:border-[4px] border-[#2d915f] bg-[#2d915f]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.539820573981!2d78.36394327506979!3d17.494887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e32040fa7d%3A0xbe4ee8fdec67ba1a!2sPRODBIZ%20SOLUTIONS%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sus!4v1716301234567!5m2!1sen!2sus"
                className="w-full h-full grayscale-[10%] contrast-110 rounded-[1.5rem] lg:rounded-[2.5rem]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
