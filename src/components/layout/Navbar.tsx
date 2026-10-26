"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (backdropRef.current && backdropRef.current.contains(target)) {
        closeMenu();
        return;
      }
      if (headerRef.current && !headerRef.current.contains(target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-[1000] flex items-center transition-all duration-300 ${scrolled || isMobileMenuOpen
        ? "pt-5 pb-4 sm:pt-5 sm:pb-5 bg-[#fffff0] shadow-md"
        : "pt-6 pb-5 sm:pt-7 sm:pb-6 bg-[#fffff0]/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none"
        }`}
    >
      <div className="container flex justify-between items-center w-full">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center z-50 transition-transform hover:scale-105"
        >
          <Image
            src="/company-logo/logo1.png"
            alt="Prodbiz Logo"
            width={160}
            height={48}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION - PILL SHAPE */}
        <nav
          className="hidden md:flex items-center gap-4 min-[1400px]:gap-6 h-12 px-6 min-[1400px]:px-8 rounded-full transition-all duration-300 backdrop-blur-md"
          style={{
            backgroundColor: "var(--color-teal)",
            boxShadow: scrolled ? "var(--shadow-md)" : "none",
            color: "var(--color-ivory)"
          }}
        >
          <Link href="/about" className="nav-link !text-ivory hover:!text-orange transition-colors">About</Link>

          <div className="relative group h-full flex items-center">
            <button className="nav-link flex items-center gap-2 h-full cursor-pointer !text-ivory hover:!text-orange transition-colors">
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Mega Menu Dropdown */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] min-[1400px]:w-[850px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-4"
            >
              <div className="bg-[#fffff9] rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row p-2">

                {/* Left Side (Description) */}
                <div className="w-full md:w-[35%] p-5 min-[1400px]:p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#fffdfa] to-[#ffeedc] rounded-2xl relative overflow-hidden">
                  {/* Decorative curved shape */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#ffcca0] rounded-full opacity-60"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-[22px] min-[1400px]:text-[28px] font-bold text-[#492c28] mb-1 tracking-tight">Services</h3>
                    <div className="h-1 bg-[#ff863c] w-8 min-[1400px]:w-10 mb-3 min-[1400px]:mb-5 rounded-full mx-auto"></div>
                    <p className="text-[13px] min-[1400px]:text-[15px] text-[#796864] leading-relaxed mb-0 font-medium max-w-[190px] min-[1400px]:max-w-[220px]">
                      We help you build the digital experiences of the future with our comprehensive services.
                    </p>
                  </div>
                </div>

                {/* Right Side (Grid of Services) */}
                <div className="w-full md:w-[65%] p-5 min-[1400px]:p-8 grid grid-cols-2 gap-x-5 gap-y-4 min-[1400px]:gap-x-8 min-[1400px]:gap-y-8">

                  {/* Service 1 - Website Design */}
                  <Link href="/services/website-design" className="flex items-center gap-3 min-[1400px]:gap-4 group p-2 -m-2 rounded-2xl hover:bg-white/50 transition-colors">
                    <Image
                      src="/images/navbar-dropdown/website.png"
                      alt="Website Design"
                      width={56}
                      height={56}
                      className="w-11 h-11 min-[1400px]:w-14 min-[1400px]:h-14 object-contain flex-shrink-0 group-hover:-translate-y-1 transition-transform drop-shadow-md"
                    />
                    <div>
                      <h4 className="text-[14px] min-[1400px]:text-[16px] font-bold text-[#492c28] mb-0.5 group-hover:text-[#047880] transition-colors">Website Design</h4>
                      <p className="text-[12px] min-[1400px]:text-[13px] text-[#796864] font-medium leading-tight">Custom web development</p>
                    </div>
                  </Link>

                  {/* Service 2 - Logo & Branding */}
                  <Link href="/services/logo-branding" className="flex items-center gap-3 min-[1400px]:gap-4 group p-2 -m-2 rounded-2xl hover:bg-white/50 transition-colors">
                    <Image
                      src="/images/navbar-dropdown/logoandbranding.png"
                      alt="Logo & Branding"
                      width={56}
                      height={56}
                      className="w-11 h-11 min-[1400px]:w-14 min-[1400px]:h-14 object-contain flex-shrink-0 group-hover:-translate-y-1 transition-transform drop-shadow-md"
                    />
                    <div>
                      <h4 className="text-[14px] min-[1400px]:text-[16px] font-bold text-[#492c28] mb-0.5 group-hover:text-[#047880] transition-colors">Logo & Branding</h4>
                      <p className="text-[12px] min-[1400px]:text-[13px] text-[#796864] font-medium leading-tight">Brand identity design</p>
                    </div>
                  </Link>

                  {/* Service 3 - Social Media Marketing */}
                  <Link href="/services/social-media" className="flex items-center gap-3 min-[1400px]:gap-4 group p-2 -m-2 rounded-2xl hover:bg-white/50 transition-colors">
                    <Image
                      src="/images/navbar-dropdown/socialmedia.png"
                      alt="Social Media Marketing"
                      width={56}
                      height={56}
                      className="w-11 h-11 min-[1400px]:w-14 min-[1400px]:h-14 object-contain flex-shrink-0 group-hover:-translate-y-1 transition-transform drop-shadow-md"
                    />
                    <div>
                      <h4 className="text-[14px] min-[1400px]:text-[16px] font-bold text-[#492c28] mb-0.5 group-hover:text-[#047880] transition-colors">Social Media Marketing</h4>
                      <p className="text-[12px] min-[1400px]:text-[13px] text-[#796864] font-medium leading-tight">Engaging social campaigns</p>
                    </div>
                  </Link>

                  {/* Service 4 - Content Creation */}
                  <Link href="/services/content-creation" className="flex items-center gap-3 min-[1400px]:gap-4 group p-2 -m-2 rounded-2xl hover:bg-white/50 transition-colors">
                    <Image
                      src="/images/navbar-dropdown/contentcreation.png"
                      alt="Content Creation"
                      width={56}
                      height={56}
                      className="w-11 h-11 min-[1400px]:w-14 min-[1400px]:h-14 object-contain flex-shrink-0 group-hover:-translate-y-1 transition-transform drop-shadow-md"
                    />
                    <div>
                      <h4 className="text-[14px] min-[1400px]:text-[16px] font-bold text-[#492c28] mb-0.5 group-hover:text-[#047880] transition-colors">Content Creation</h4>
                      <p className="text-[12px] min-[1400px]:text-[13px] text-[#796864] font-medium leading-tight">Compelling copy & media</p>
                    </div>
                  </Link>

                  {/* Service 5 - Online Ads */}
                  <Link href="/services/online-advertising" className="flex items-center gap-3 min-[1400px]:gap-4 group p-2 -m-2 rounded-2xl hover:bg-white/50 transition-colors">
                    <Image
                      src="/images/navbar-dropdown/onlineads.png"
                      alt="Online Ads"
                      width={56}
                      height={56}
                      className="w-11 h-11 min-[1400px]:w-14 min-[1400px]:h-14 object-contain flex-shrink-0 group-hover:-translate-y-1 transition-transform drop-shadow-md"
                    />
                    <div>
                      <h4 className="text-[14px] min-[1400px]:text-[16px] font-bold text-[#492c28] mb-0.5 group-hover:text-[#047880] transition-colors">Online Ads</h4>
                      <p className="text-[12px] min-[1400px]:text-[13px] text-[#796864] font-medium leading-tight">Targeted digital marketing</p>
                    </div>
                  </Link>

                  {/* Service 6 - SEO */}
                  <Link href="/services/seo" className="flex items-center gap-3 min-[1400px]:gap-4 group p-2 -m-2 rounded-2xl hover:bg-white/50 transition-colors">
                    <Image
                      src="/images/navbar-dropdown/seo.png"
                      alt="SEO"
                      width={56}
                      height={56}
                      className="w-11 h-11 min-[1400px]:w-14 min-[1400px]:h-14 object-contain flex-shrink-0 group-hover:-translate-y-1 transition-transform drop-shadow-md"
                    />
                    <div>
                      <h4 className="text-[14px] min-[1400px]:text-[16px] font-bold text-[#492c28] mb-0.5 group-hover:text-[#047880] transition-colors">SEO</h4>
                      <p className="text-[12px] min-[1400px]:text-[13px] text-[#796864] font-medium leading-tight">Search engine optimization</p>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>

          <Link href="/our-works" className="nav-link !text-ivory hover:!text-orange transition-colors">Our Works</Link>
          <Link href="/gallery" className="nav-link !text-ivory hover:!text-orange transition-colors">Gallery</Link>
          <Link href="/blog" className="nav-link !text-ivory hover:!text-orange transition-colors">Blog</Link>
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <div className="hidden md:flex items-center z-50">
          <Link href="/contact" className="btn !min-h-10 !h-10 !p-0 !pl-5 flex items-center gap-3 transition-transform hover:scale-105 group" style={{ backgroundColor: "var(--color-orange)", color: "var(--color-ivory)" }}>
            <span className="font-semibold text-sm">Contact Us</span>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center relative z-10 border border-black/5">
              <Image src="/icons/contact-3d.jpg" alt="Contact 3D Icon" width={40} height={40} className="w-full h-full object-contain p-0.5 group-hover:animate-ring" />
            </div>
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden flex items-center justify-center p-2 z-50 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          style={{ color: isMobileMenuOpen ? "var(--color-brown)" : "var(--color-teal)" }}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          backgroundColor: "var(--color-ivory)",
          borderBottom: "none",
          boxShadow: isMobileMenuOpen ? "var(--shadow-md)" : "none",
          maxHeight: isMobileMenuOpen ? "100vh" : "0"
        }}
      >
        <div className="container flex flex-col py-5 gap-3">
          <Link
            href="/about"
            onClick={closeMenu}
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-[#492c28]/10 shadow-[0_4px_16px_rgba(73,44,40,0.05)] text-lg font-bold text-[#492c28] hover:text-orange active:scale-[0.99] transition-all"
          >
            <span>About</span>
          </Link>

          <div className="flex flex-col w-full rounded-2xl bg-white/70 backdrop-blur-md border border-[#492c28]/10 shadow-[0_4px_16px_rgba(73,44,40,0.05)] transition-all overflow-hidden">
            <button
              onClick={toggleServices}
              className="flex justify-between items-center w-full px-5 py-3.5 text-left text-lg font-bold text-[#492c28] hover:text-orange active:text-orange transition-colors"
            >
              <span>Services</span>
              <span className="text-2xl leading-none text-orange font-semibold">
                {isServicesOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`flex flex-col gap-2.5 px-3.5 transition-all duration-300 ease-in-out mobile-services-dropdown ${isServicesOpen ? "opacity-100 pb-3.5 max-h-[165px] overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden pointer-events-none pb-0"}`}
            >
              <Link href="/services/website-design" onClick={closeMenu} className="px-3.5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#492c28]/08 shadow-sm text-[14.5px] font-semibold text-[#492c28] hover:text-orange transition-all">Website Design & Development</Link>
              <Link href="/services/logo-branding" onClick={closeMenu} className="px-3.5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#492c28]/08 shadow-sm text-[14.5px] font-semibold text-[#492c28] hover:text-orange transition-all">Logo & Branding</Link>
              <Link href="/services/social-media" onClick={closeMenu} className="px-3.5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#492c28]/08 shadow-sm text-[14.5px] font-semibold text-[#492c28] hover:text-orange transition-all">Social Media</Link>
              <Link href="/services/seo" onClick={closeMenu} className="px-3.5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#492c28]/08 shadow-sm text-[14.5px] font-semibold text-[#492c28] hover:text-orange transition-all">SEO</Link>
              <Link href="/services/online-advertising" onClick={closeMenu} className="px-3.5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#492c28]/08 shadow-sm text-[14.5px] font-semibold text-[#492c28] hover:text-orange transition-all">Online Advertising</Link>
              <Link href="/services/content-creation" onClick={closeMenu} className="px-3.5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#492c28]/08 shadow-sm text-[14.5px] font-semibold text-[#492c28] hover:text-orange transition-all">Content Creation</Link>
            </div>
          </div>

          <Link
            href="/our-works"
            onClick={closeMenu}
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-[#492c28]/10 shadow-[0_4px_16px_rgba(73,44,40,0.05)] text-lg font-bold text-[#492c28] hover:text-orange active:scale-[0.99] transition-all"
          >
            <span>Our Works</span>
          </Link>

          <Link
            href="/gallery"
            onClick={closeMenu}
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-[#492c28]/10 shadow-[0_4px_16px_rgba(73,44,40,0.05)] text-lg font-bold text-[#492c28] hover:text-orange active:scale-[0.99] transition-all"
          >
            <span>Gallery</span>
          </Link>

          <Link
            href="/blog"
            onClick={closeMenu}
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-[#492c28]/10 shadow-[0_4px_16px_rgba(73,44,40,0.05)] text-lg font-bold text-[#492c28] hover:text-orange active:scale-[0.99] transition-all"
          >
            <span>Blog</span>
          </Link>

          <div className="pt-2 mt-1">
            <Link href="/contact" onClick={closeMenu} className="btn !min-h-12 !h-12 !p-0 !pl-6 flex items-center justify-between w-full shadow-lg" style={{ backgroundColor: "var(--color-orange)", color: "var(--color-ivory)" }}>
              <span className="font-semibold">Contact Us</span>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center relative z-10 border border-black/5">
                <Image src="/icons/contact-3d.jpg" alt="Contact 3D Icon" width={48} height={48} className="w-full h-full object-contain p-2 animate-ring-periodic" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE BACKDROP OVERLAY (Transparent click-outside target) */}
      <div
        ref={backdropRef}
        onClick={closeMenu}
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-transparent z-[-1] ${
          isMobileMenuOpen ? "pointer-events-auto block" : "pointer-events-none hidden"
        }`}
        aria-hidden="true"
      />
    </header>
  );
}
