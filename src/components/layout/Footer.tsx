import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#184a41] text-white py-16 lg:py-12 xl:py-14 min-[1400px]:py-20 rounded-t-[32px] overflow-hidden mt-10">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 xl:px-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 xl:gap-8 min-[1400px]:gap-8">

          {/* Left Column - Brand & Info */}
          <div className="lg:col-span-4 flex flex-col pr-0 lg:pr-4 xl:pr-6 min-[1400px]:pr-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 mb-6 lg:mb-3.5 xl:mb-5 min-[1400px]:mb-6">
              <img src="/company-logo/footer-logo.png" alt="Prodbiz Solutions Logo" className="w-[50px] h-[50px] lg:w-[38px] lg:h-[38px] xl:w-[44px] xl:h-[44px] min-[1400px]:w-[50px] min-[1400px]:h-[50px] object-cover shadow-lg" />
              <span className="text-2xl lg:text-[18px] xl:text-[21px] min-[1400px]:text-2xl mt-5 lg:mt-2.5 xl:mt-3.5 min-[1400px]:mt-5 font-black tracking-tight text-white uppercase">Prodbiz Solutions</span>
            </Link>

            <div className="mb-8 lg:mb-4 xl:mb-6 min-[1400px]:mb-8 max-w-[400px]">
              <p className="text-white font-bold text-[16px] lg:text-[13px] xl:text-[14.5px] min-[1400px]:text-[16px] leading-snug mb-3 lg:mb-2 min-[1400px]:mb-3">
                Building brands. Creating digital experiences. Helping businesses grow.
              </p>
              <p className="text-white/80 text-[15px] lg:text-[12px] xl:text-[13.5px] min-[1400px]:text-[15px] leading-relaxed">
                We help businesses with branding, websites, social media, creative design and digital marketing — from individual requirements to complete digital solutions.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 lg:gap-2 xl:gap-3 min-[1400px]:gap-4">
              <a href="#" className="w-10 h-10 lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] min-[1400px]:w-10 min-[1400px]:h-10 rounded-full bg-gradient-to-b from-[#ff9e60] to-[#df5a0a] flex items-center justify-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group" aria-label="LinkedIn">
                <svg className="w-[18px] h-[18px] lg:w-[13px] lg:h-[13px] xl:w-[15px] xl:h-[15px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] min-[1400px]:w-10 min-[1400px]:h-10 rounded-full bg-gradient-to-b from-[#ff9e60] to-[#df5a0a] flex items-center justify-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group" aria-label="Instagram">
                <svg className="w-[18px] h-[18px] lg:w-[13px] lg:h-[13px] xl:w-[15px] xl:h-[15px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] min-[1400px]:w-10 min-[1400px]:h-10 rounded-full bg-gradient-to-b from-[#ff9e60] to-[#df5a0a] flex items-center justify-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group" aria-label="Facebook">
                <svg className="w-[18px] h-[18px] lg:w-[13px] lg:h-[13px] xl:w-[15px] xl:h-[15px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] min-[1400px]:w-10 min-[1400px]:h-10 rounded-full bg-gradient-to-b from-[#ff9e60] to-[#df5a0a] flex items-center justify-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group" aria-label="X (Twitter)">
                <svg className="w-[18px] h-[18px] lg:w-[13px] lg:h-[13px] xl:w-[15px] xl:h-[15px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] min-[1400px]:w-10 min-[1400px]:h-10 rounded-full bg-gradient-to-b from-[#ff9e60] to-[#df5a0a] flex items-center justify-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group" aria-label="YouTube">
                <svg className="w-[18px] h-[18px] lg:w-[13px] lg:h-[13px] xl:w-[15px] xl:h-[15px] min-[1400px]:w-[18px] min-[1400px]:h-[18px] text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
            </div>
          </div>

          {/* Right Column - Contact & Links */}
          <div className="lg:col-span-8 flex flex-col">

            {/* Contact Info Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-3 xl:gap-5 min-[1400px]:gap-8 mb-8 lg:mb-4 xl:mb-6 min-[1400px]:mb-8">

              {/* Phone */}
              <div className="flex items-center gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4">
                <div className="w-[46px] h-[46px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] min-[1400px]:w-[46px] min-[1400px]:h-[46px] rounded-full bg-[#126b64] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                  <svg className="w-5 h-5 lg:w-[15px] lg:h-[15px] xl:w-[17px] xl:h-[17px] min-[1400px]:w-5 min-[1400px]:h-5 text-[#ff863c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[17px] lg:text-[13.5px] xl:text-[15px] min-[1400px]:text-[17px] mb-0.5 tracking-wide">PHONE</span>
                  <span className="text-white/80 text-[14px] lg:text-[11.5px] xl:text-[13px] min-[1400px]:text-[14px] leading-snug">+91 8977742255</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4">
                <div className="w-[46px] h-[46px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] min-[1400px]:w-[46px] min-[1400px]:h-[46px] rounded-full bg-[#126b64] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                  <svg className="w-5 h-5 lg:w-[15px] lg:h-[15px] xl:w-[17px] xl:h-[17px] min-[1400px]:w-5 min-[1400px]:h-5 text-[#ff863c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-white font-bold text-[17px] lg:text-[13.5px] xl:text-[15px] min-[1400px]:text-[17px] mb-0.5 tracking-wide">EMAIL</span>
                  <a href="mailto:info@prodbizsolutions.com" className="text-white/80 text-[14px] lg:text-[11.5px] xl:text-[13px] min-[1400px]:text-[14px] hover:text-[#ff863c] transition-colors truncate">info@prodbizsolutions.com</a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4">
                <div className="w-[46px] h-[46px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] min-[1400px]:w-[46px] min-[1400px]:h-[46px] rounded-full bg-[#126b64] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                  <svg className="w-5 h-5 lg:w-[15px] lg:h-[15px] xl:w-[17px] xl:h-[17px] min-[1400px]:w-5 min-[1400px]:h-5 text-[#ff863c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[17px] lg:text-[13.5px] xl:text-[15px] min-[1400px]:text-[17px] mb-0.5 tracking-wide">WORKING HOURS</span>
                  <span className="text-white/80 text-[14px] lg:text-[11.5px] xl:text-[13px] min-[1400px]:text-[14px] leading-snug">Mon to Sat: 10AM to 7PM</span>
                </div>
              </div>

            </div>

            {/* Dashed Separator */}
            <div className="w-full border-t-[1.5px] border-dashed border-white/20 mb-8 lg:mb-4 xl:mb-6 min-[1400px]:mb-8"></div>

            {/* Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4 xl:gap-6 min-[1400px]:gap-8">

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-extrabold text-[18px] lg:text-[14.5px] xl:text-[16px] min-[1400px]:text-[18px] mb-6 lg:mb-3 xl:mb-4 min-[1400px]:mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-12 lg:after:w-8 xl:after:w-10 min-[1400px]:after:w-12 after:h-[3px] after:bg-[#15b9bc] after:rounded-full">Quick Links</h4>
                <ul className="flex flex-col gap-3.5 lg:gap-1.5 xl:gap-2.5 min-[1400px]:gap-3.5">
                  {['Home', 'About Us', 'Our Work', 'Gallery', 'Blog', 'Contact Us'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-white/80 hover:text-[#ff863c] text-[15px] lg:text-[12px] xl:text-[13.5px] min-[1400px]:text-[15px] font-medium transition-all duration-300 hover:translate-x-2 inline-block">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-extrabold text-[18px] lg:text-[14.5px] xl:text-[16px] min-[1400px]:text-[18px] mb-6 lg:mb-3 xl:mb-4 min-[1400px]:mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-12 lg:after:w-8 xl:after:w-10 min-[1400px]:after:w-12 after:h-[3px] after:bg-[#15b9bc] after:rounded-full">Services</h4>
                <ul className="flex flex-col gap-3.5 lg:gap-1.5 xl:gap-2.5 min-[1400px]:gap-3.5">
                  {['Website Design & Development', 'Logo & Branding', 'Social Media Marketing', 'SEO', 'Online Advertising', 'Content Creation'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-white/80 hover:text-[#ff863c] text-[15px] lg:text-[12px] xl:text-[13.5px] min-[1400px]:text-[15px] font-medium transition-all duration-300 hover:translate-x-2 inline-block">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office Address */}
              <div>
                <h4 className="text-white font-extrabold text-[18px] lg:text-[14.5px] xl:text-[16px] min-[1400px]:text-[18px] mb-6 lg:mb-3 xl:mb-4 min-[1400px]:mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-12 lg:after:w-8 xl:after:w-10 min-[1400px]:after:w-12 after:h-[3px] after:bg-[#15b9bc] after:rounded-full">Office Address</h4>
                <ul className="flex flex-col gap-5 lg:gap-2.5 xl:gap-4 min-[1400px]:gap-5">
                  <li className="flex items-start gap-4 lg:gap-2.5 xl:gap-3.5 min-[1400px]:gap-4 text-white/80 text-[15px] lg:text-[11.5px] xl:text-[13px] min-[1400px]:text-[15px] leading-relaxed">
                    <div className="w-[46px] h-[46px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] min-[1400px]:w-[46px] min-[1400px]:h-[46px] rounded-full bg-[#126b64] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                      <svg className="w-5 h-5 lg:w-[15px] lg:h-[15px] xl:w-[17px] xl:h-[17px] min-[1400px]:w-5 min-[1400px]:h-5 text-[#ff863c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span className="pt-1 lg:pt-0">Flat No: 101, 1st Floor, Sri Ikon Residency,<br />Plot No 496, Near Miyapur, Mathrusree Nagar,<br />Hyderabad, Telangana – 500049.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-16 lg:mt-6 xl:mt-10 min-[1400px]:mt-16 pt-8 lg:pt-3.5 xl:pt-5 min-[1400px]:pt-8 border-t border-white/10 flex items-center justify-center">
          <p className="text-white/60 text-[14px] lg:text-[11.5px] xl:text-[13px] min-[1400px]:text-[14px] font-medium text-center">
            © 2026 Prodbiz Solutions. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
