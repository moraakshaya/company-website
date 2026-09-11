"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container flex justify-between items-center h-16">
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
          className="hidden md:flex items-center gap-6 h-12 px-8 rounded-full border transition-all duration-300 backdrop-blur-md"
          style={{
            backgroundColor: "var(--color-teal)",
            borderColor: "transparent",
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

            {/* Dropdown Menu */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2"
            >
              <div
                className="flex flex-col p-2 radius-md"
                style={{
                  backgroundColor: "var(--color-ivory)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-md)"
                }}
              >
                <Link href="/services/website-design" className="px-4 py-2 text-sm rounded transition-colors hover:bg-teal text-brown hover:text-ivory">Website Design & Development</Link>
                <Link href="/services/logo-branding" className="px-4 py-2 text-sm rounded transition-colors hover:bg-teal text-brown hover:text-ivory">Logo & Branding</Link>
                <Link href="/services/social-media" className="px-4 py-2 text-sm rounded transition-colors hover:bg-teal text-brown hover:text-ivory">Social Media</Link>
                <Link href="/services/seo" className="px-4 py-2 text-sm rounded transition-colors hover:bg-teal text-brown hover:text-ivory">SEO</Link>
                <Link href="/services/online-advertising" className="px-4 py-2 text-sm rounded transition-colors hover:bg-teal text-brown hover:text-ivory">Online Advertising</Link>
                <Link href="/services/content-creation" className="px-4 py-2 text-sm rounded transition-colors hover:bg-teal text-brown hover:text-ivory">Content Creation</Link>

                <div className="h-px w-full my-2" style={{ backgroundColor: "var(--border-light)" }}></div>

                <Link href="/services" className="px-4 py-2 text-sm font-bold rounded transition-colors hover:bg-peach" style={{ color: "var(--color-orange)" }}>
                  View All Services →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/our-works" className="nav-link !text-ivory hover:!text-orange transition-colors">Our Works</Link>
          <Link href="/gallery" className="nav-link !text-ivory hover:!text-orange transition-colors">Gallery</Link>
          <Link href="/blog" className="nav-link !text-ivory hover:!text-orange transition-colors">Blog</Link>
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <div className="hidden md:flex items-center h-full z-50">
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
          borderBottom: isMobileMenuOpen ? "1px solid var(--border-light)" : "none",
          boxShadow: isMobileMenuOpen ? "var(--shadow-md)" : "none",
          maxHeight: isMobileMenuOpen ? "100vh" : "0"
        }}
      >
        <div className="container flex flex-col py-6 gap-6">
          <Link href="/about" onClick={closeMenu} className="nav-link text-xl hover:text-orange active:text-orange transition-colors">About</Link>

          <div className="flex flex-col">
            <button
              onClick={toggleServices}
              className="flex justify-between items-center w-full text-left nav-link text-xl hover:text-orange active:text-orange transition-colors"
            >
              Services
              <span className="text-2xl leading-none" style={{ color: "var(--color-orange)" }}>
                {isServicesOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "opacity-100 mt-4 max-h-[500px]" : "max-h-0 opacity-0"}`}
            >
              <Link href="/services/website-design" onClick={closeMenu} className="pl-4 text-base transition-colors hover:text-orange active:text-orange text-muted">Website Design & Development</Link>
              <Link href="/services/logo-branding" onClick={closeMenu} className="pl-4 text-base transition-colors hover:text-orange active:text-orange text-muted">Logo & Branding</Link>
              <Link href="/services/social-media" onClick={closeMenu} className="pl-4 text-base transition-colors hover:text-orange active:text-orange text-muted">Social Media</Link>
              <Link href="/services/seo" onClick={closeMenu} className="pl-4 text-base transition-colors hover:text-orange active:text-orange text-muted">SEO</Link>
              <Link href="/services/online-advertising" onClick={closeMenu} className="pl-4 text-base transition-colors hover:text-orange active:text-orange text-muted">Online Advertising</Link>
              <Link href="/services/content-creation" onClick={closeMenu} className="pl-4 text-base transition-colors hover:text-orange active:text-orange text-muted">Content Creation</Link>
              <Link href="/services" onClick={closeMenu} className="pl-4 text-base font-bold transition-colors hover:text-brown active:text-brown text-orange">View All Services →</Link>
            </div>
          </div>

          <Link href="/our-works" onClick={closeMenu} className="nav-link text-xl hover:text-orange active:text-orange transition-colors">Our Works</Link>
          <Link href="/gallery" onClick={closeMenu} className="nav-link text-xl hover:text-orange active:text-orange transition-colors">Gallery</Link>
          <Link href="/blog" onClick={closeMenu} className="nav-link text-xl hover:text-orange active:text-orange transition-colors">Blog</Link>

          <div className="pt-4 mt-2 border-t" style={{ borderColor: "var(--border-light)" }}>
            <Link href="/contact" onClick={closeMenu} className="btn !min-h-12 !h-12 !p-0 !pl-6 flex items-center justify-between w-full" style={{ backgroundColor: "var(--color-orange)", color: "var(--color-ivory)" }}>
              <span className="font-semibold">Contact Us</span>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center relative z-10 border border-black/5">
                <Image src="/icons/contact-3d.jpg" alt="Contact 3D Icon" width={48} height={48} className="w-full h-full object-contain p-2 animate-ring-periodic" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
