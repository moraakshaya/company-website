"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTemplate, PenTool, Megaphone, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// --- Types & Portfolio Items ---
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  filter: string;
  image: string;
  height: string;
  bgColor: string;
  gallery: string[];
  clientOverview: string;
  services: string[];
  challenge: string;
  link?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

const filters = [
  "WEBSITES",
  "LOGO DESIGN",
  "BUSINESS CARDS",
  "BROCHURES",
  "FLYERS",
  "MENU CARDS",
  "HOARDINGS",
  "AUTO ADS",
  "VIDEO EDITING & REELS",
  "SOCIAL MEDIA MANAGEMENT"
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "RICCH HOTELS",
    category: "Website Design",
    filter: "WEBSITES",
    image: "/our-work/websites/ricch-website-3.png",
    height: "380px",
    bgColor: "bg-[#184a41]",
    link: "https://ricchhotels.com",
    gallery: [
      "/our-work/websites/ricch-website-1.png",
      "/our-work/websites/ricch-website-2.png",
      "/our-work/websites/ricch-website-3.png",
    ],
    clientOverview: "Ricch Hotels needed an elegant, mobile-friendly website to showcase luxury room stays, banquet spaces, and enable direct room inquiries.",
    services: [
      "Luxury UI/UX Design",
      "Mobile-First Layout",
      "Room Showcase & Gallery",
      "Online Booking Flow"
    ],
    challenge: "Presenting hospitality amenities, room tiers, and booking inquiries seamlessly across mobile and desktop devices."
  },
  {
    id: 2,
    title: "RUSSH HOSPITAL",
    category: "Website Design",
    filter: "WEBSITES",
    image: "/our-work/websites/russh-website-1.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    link: "https://russhhospital.com",
    gallery: [
      "/our-work/websites/russh-website-1.png",
      "/our-work/websites/russh-website-2.png",
      "/our-work/websites/russh-website-3.png",
    ],
    clientOverview: "Russh Hospital needed a modern, responsive website to showcase their medical specialties and streamline patient appointment bookings.",
    services: [
      "UI/UX Design",
      "Responsive Web Design",
      "Frontend Development",
      "Doctor Booking Flow"
    ],
    challenge: "Organizing multi-department doctor schedules, services, and emergency contacts into an intuitive mobile-first interface."
  },
  {
    id: 3,
    title: "SHRISWARAA HOSPITAL",
    category: "Website Design",
    filter: "WEBSITES",
    image: "/our-work/websites/shriswaraa-website-1.png",
    height: "380px",
    bgColor: "bg-[#ff863c]",
    link: "https://www.shriswaraamultispecialityhospital.com/",
    gallery: [
      "/our-work/websites/shriswaraa-website-1.png",
      "/our-work/websites/shriswaraa-website-2.png",
      "/our-work/websites/shriswaraa-website-3.png",
    ],
    clientOverview: "Shriswaraa Hospital needed a comprehensive healthcare web presence to highlight medical departments, consultant schedules, and emergency care.",
    services: [
      "Healthcare Web Design",
      "Responsive Layout",
      "Department Showcase",
      "Appointment Inquiry System"
    ],
    challenge: "Structuring high-volume medical information clearly so patients and families can quickly locate treatment details and book visits."
  },
  {
    id: 4,
    title: "GVR INFOSYSTEM",
    category: "Website Design",
    filter: "WEBSITES",
    image: "/our-work/websites/gvr-website-2.png",
    height: "380px",
    bgColor: "bg-[#492c28]",
    link: "https://www.gvrinfosystems.com/",
    gallery: [
      "/our-work/websites/gvr-website-1.png",
      "/our-work/websites/gvr-website-2.png",
      "/our-work/websites/gvr-website-3.png",
    ],
    clientOverview: "GVR Infosystem required a modern IT corporate website to highlight their enterprise software services, cloud solutions, and consulting capabilities.",
    services: [
      "Corporate UI/UX Design",
      "Technology Showcase",
      "Responsive Frontend",
      "B2B Lead Generation Flow"
    ],
    challenge: "Communicating complex technical IT consulting solutions into clean, persuasive web copy and interactive feature sections."
  },
  {
    id: 5,
    title: "PADMAVATHI HOSPITAL",
    category: "Website Design",
    filter: "WEBSITES",
    image: "/our-work/websites/padmavati-website-2.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    link: "https://www.padmavathimedicalcenter.com/",
    gallery: [
      "/our-work/websites/padmavati-website-1.png",
      "/our-work/websites/padmavati-website-2.png",
      "/our-work/websites/padmavati-website-3.png",
    ],
    clientOverview: "Padmavathi Hospital required a patient-first hospital website to provide transparent details on clinical care, doctor profiles, and emergency admission.",
    services: [
      "Clinical Web Design",
      "Emergency Services Hub",
      "Doctor Directory",
      "Patient Contact System"
    ],
    challenge: "Designing an accessible, high-contrast, fast-loading healthcare portal optimized for urgent mobile queries and patient assistance."
  },
  {
    id: 6,
    title: "FIRE & TUNS",
    category: "Logo Design",
    filter: "LOGO DESIGN",
    image: "/our-work/logos/fireandtuns-1.png",
    height: "380px",
    bgColor: "bg-[#492c28]",
    gallery: [
      "/our-work/logos/fireandtuns-1.png",
      "/our-work/logos/fireandtuns-2.png",
      "/our-work/logos/fireandtuns-3.png",
    ],
    clientOverview: "Fire & Tuns needed a bold, energetic visual identity and distinctive logo mark that embodies their distinct brand presence and culinary rhythm.",
    services: [
      "Logo Concept & Design",
      "Brand Identity System",
      "Custom Brand Iconography",
      "Typography & Color Guide"
    ],
    challenge: "Designing a high-contrast, versatile brand mark that scales effortlessly across physical signage, merchandise, and digital channels."
  },
  {
    id: 7,
    title: "RICCH HOTELS",
    category: "Logo Design",
    filter: "LOGO DESIGN",
    image: "/our-work/logos/ricch-1.png",
    height: "380px",
    bgColor: "bg-[#184a41]",
    gallery: [
      "/our-work/logos/ricch-1.png",
      "/our-work/logos/ricch-2.png",
      "/our-work/logos/ricch-3.png",
    ],
    clientOverview: "Ricch Hotels required an elegant, timeless monogram and corporate insignia to reflect their luxury hospitality experience.",
    services: [
      "Luxury Monogram Design",
      "Brand Crest & Emblem",
      "Hospitality Identity Palette",
      "Stationery & Collateral Guidelines"
    ],
    challenge: "Crafting a sophisticated insignia with delicate vector geometry that reproduces impeccably on architectural signage, uniform embroidery, and mobile screens."
  },
  {
    id: 8,
    title: "TERRACE POND",
    category: "Logo Design",
    filter: "LOGO DESIGN",
    image: "/our-work/logos/terracepond-1.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/logos/terracepond-1.png",
      "/our-work/logos/terracepond-2.png",
      "/our-work/logos/terracepond-3.png",
    ],
    clientOverview: "Terrace Pond needed a modern, tranquil logo identity that captures the serene aesthetic of nature, water, and open terrace architecture.",
    services: [
      "Brand Identity Design",
      "Symbol & Wordmark Creation",
      "Color Harmony Guide",
      "Visual Brand Standards"
    ],
    challenge: "Balancing fluid organic forms with structured geometric lettering to convey calm sophistication and premium architectural craftsmanship."
  },
  {
    id: 9,
    title: "PRODBIZ",
    category: "Business Cards",
    filter: "BUSINESS CARDS",
    image: "/our-work/businesscards/prodbiz.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/businesscards/prodbiz.png",
    ],
    clientOverview: "ProdBiz needed a sophisticated, modern corporate business card design that showcases executive branding with clean contact hierarchy.",
    services: [
      "Executive Business Card Layout",
      "Brand Color Palette & Accents",
      "Typography & Contact Hierarchy",
      "Print & Finish Specifications"
    ],
    challenge: "Designing a compact, memorable card format that balances digital elements and brand sophistication without visual clutter."
  },
  {
    id: 10,
    title: "ESTHETIX DENTAL",
    category: "Video Editing & Reels",
    filter: "VIDEO EDITING & REELS",
    image: "/our-work/videoeditingandreels/esthetix-poster.jpg",
    height: "380px",
    bgColor: "bg-[#047880]",
    isVideo: true,
    videoUrl: "/our-work/videoeditingandreels/esthetix.mp4",
    gallery: ["/our-work/videoeditingandreels/esthetix-poster.jpg"],
    clientOverview: "Complete end-to-end video production for Esthetix Dental. Our team handled everything from on-site shooting with professional lighting and cinema gear to post-production editing, creating engaging patient-education reels.",
    services: [
      "On-Site Clinical Shoot",
      "Professional Lighting & Audio",
      "Precision Reel Editing",
      "Motion Graphics & Captions"
    ],
    challenge: "Capturing authentic clinical treatments and dentist expertise on camera in a non-intimidating, cinematic way, followed by tight, rhythm-based editing to keep viewers hooked."
  },
  {
    id: 11,
    title: "FIRE & TUNS",
    category: "Video Editing & Reels",
    filter: "VIDEO EDITING & REELS",
    image: "/our-work/videoeditingandreels/fireandtuns-poster.jpg",
    height: "380px",
    bgColor: "bg-[#492c28]",
    isVideo: true,
    videoUrl: "/our-work/videoeditingandreels/fireandtuns.mp4",
    gallery: ["/our-work/videoeditingandreels/fireandtuns-poster.jpg"],
    clientOverview: "Full-service on-location shoot and high-energy reel production for Fire & Tuns. We captured sizzling culinary action and ambient dining with professional camera rigs, then edited the footage with beat-matched cuts and rich color grading.",
    services: [
      "On-Location Food & Ambience Shoot",
      "Cinematic Slow-Motion Capture",
      "Beat-Synced Video Editing",
      "Sound Design & Color Grading"
    ],
    challenge: "Filming live culinary flames and fast kitchen pacing without disrupting service, then cutting and color-tuning the footage to ignite appetite in short-form feeds."
  },
  {
    id: 12,
    title: "RICCH HOTELS",
    category: "Video Editing & Reels",
    filter: "VIDEO EDITING & REELS",
    image: "/our-work/videoeditingandreels/ricchhotel-poster.jpg",
    height: "380px",
    bgColor: "bg-[#184a41]",
    isVideo: true,
    videoUrl: "/our-work/videoeditingandreels/ricchhotel.mp4",
    gallery: ["/our-work/videoeditingandreels/ricchhotel-poster.jpg"],
    clientOverview: "Turnkey luxury hospitality shoot and reel production for Ricch Hotels. We directed and shot the complete property on-site — from luxury suites to grand banquet spaces — and crafted seamless cinematic reel edits designed for high social engagement.",
    services: [
      "Property & Suite Camera Shoot",
      "Architectural Lighting Setup",
      "Cinematic Transition Editing",
      "Color Grading & Audio Mastering"
    ],
    challenge: "Composing wide architectural shots and intimate suite details with consistent luxury lighting, then editing seamless vertical transitions to maximize viewer retention."
  },
  {
    id: 13,
    title: "RUSSH HOSPITAL",
    category: "Video Editing & Reels",
    filter: "VIDEO EDITING & REELS",
    image: "/our-work/videoeditingandreels/russh-poster.jpg",
    height: "380px",
    bgColor: "bg-[#047880]",
    isVideo: true,
    videoUrl: "/our-work/videoeditingandreels/russh.mp4",
    gallery: ["/our-work/videoeditingandreels/russh-poster.jpg"],
    clientOverview: "End-to-end healthcare documentary and awareness reels for Russh Hospital. Our crew managed on-site filming of advanced medical equipment and doctor interviews, followed by meticulous video editing with on-screen medical pointers.",
    services: [
      "On-Site Hospital Shoot",
      "Doctor Interviews & B-Roll",
      "High-Paced Reel Editing",
      "Custom Motion Subtitles"
    ],
    challenge: "Balancing sensitive patient environments with professional camera gear, and distilling complex medical treatments into engaging, shareable 30-second reels."
  },
  {
    id: 14,
    title: "SHRISWARAA HOSPITAL",
    category: "Video Editing & Reels",
    filter: "VIDEO EDITING & REELS",
    image: "/our-work/videoeditingandreels/shriswaraa-poster.jpg",
    height: "380px",
    bgColor: "bg-[#ff863c]",
    isVideo: true,
    videoUrl: "/our-work/videoeditingandreels/shriswaraa.mp4",
    gallery: ["/our-work/videoeditingandreels/shriswaraa-poster.jpg"],
    clientOverview: "Comprehensive shoot and post-production reel series for Shriswaraa Hospital. We planned, directed, and shot patient journey stories and specialty departments, editing every clip with clarity, pacing, and engaging kinetic subtitles.",
    services: [
      "Full Production On-Site Shoot",
      "Direction & Lighting Setup",
      "Dynamic Short-Form Editing",
      "Engaging Kinetic Typography"
    ],
    challenge: "Translating clinical expertise and emergency care into trustworthy, humanized visual storytelling through deliberate shooting angles and crisp editing."
  },
  {
    id: 15,
    title: "TERRACE POND",
    category: "Video Editing & Reels",
    filter: "VIDEO EDITING & REELS",
    image: "/our-work/videoeditingandreels/terracepond-poster.jpg",
    height: "380px",
    bgColor: "bg-[#047880]",
    isVideo: true,
    videoUrl: "/our-work/videoeditingandreels/terracepond.mp4",
    gallery: ["/our-work/videoeditingandreels/terracepond-poster.jpg"],
    clientOverview: "Cinematic on-site capture and reel production for Terrace Pond. Our production crew captured golden-hour landscapes, waterfront gatherings, and architectural viewpoints, followed by rhythmic editing with ambient soundscapes.",
    services: [
      "On-Site Scenic & Event Shoot",
      "Stabilized Gimbal & Camera Angles",
      "Paced Narrative Editing",
      "Atmospheric Sound Design"
    ],
    challenge: "Capturing the subtle, tranquil nuances of natural water and evening light on camera, and editing them with rhythm that evokes a true sensory destination experience."
  },
  {
    id: 16,
    title: "RICCH HOTELS",
    category: "Brochures",
    filter: "BROCHURES",
    image: "/our-work/brouchers/ricch.png",
    height: "380px",
    bgColor: "bg-[#184a41]",
    gallery: [
      "/our-work/brouchers/ricch.png",
    ],
    clientOverview: "Luxury hospitality brochure designed for Ricch Hotels, presenting premium suite accommodations, event halls, and exclusive dining packages.",
    services: [
      "Luxury Brochure Layout",
      "Hospitality Asset Showcase",
      "Typography & Color Harmony",
      "Print & Foil Finishing Specs"
    ],
    challenge: "Curating expansive banquet and hotel stay offerings into an elegant, unhurried multi-page brochure format."
  },
  {
    id: 17,
    title: "SHRISWARAA HOSPITAL",
    category: "Brochures",
    filter: "BROCHURES",
    image: "/our-work/brouchers/shri.png",
    height: "380px",
    bgColor: "bg-[#ff863c]",
    gallery: [
      "/our-work/brouchers/shri.png",
    ],
    clientOverview: "Comprehensive healthcare service brochure designed for Shriswaraa Hospital, highlighting clinical departments, consultant doctors, and diagnostic facilities.",
    services: [
      "Medical Information Architecture",
      "Departmental Breakdown",
      "Emergency Care Highlights",
      "High-Quality Print Layout"
    ],
    challenge: "Presenting complex clinical capabilities, doctor credentials, and health packages in a reassuring, easily digestible layout for patients."
  },
  {
    id: 18,
    title: "LALITHA",
    category: "Brochures",
    filter: "BROCHURES",
    image: "/our-work/brouchers/lalitha.png",
    height: "380px",
    bgColor: "bg-[#492c28]",
    gallery: [
      "/our-work/brouchers/lalitha.png",
    ],
    clientOverview: "Exquisite jewelry and retail collection brochure designed for Lalitha, spotlighting signature craftsmanship, bridal designs, and festive offers.",
    services: [
      "Catalog & Brochure Grid",
      "High-Resolution Product Styling",
      "Editorial Typography",
      "Premium Print Specifications"
    ],
    challenge: "Balancing high-end jewelry imagery with promotional pricing clarity while preserving brand prestige."
  },
  {
    id: 19,
    title: "ESTHETIX DENTAL",
    category: "Flyers",
    filter: "FLYERS",
    image: "/our-work/flyers/esth-1.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/flyers/esth-1.png",
      "/our-work/flyers/esth-2.png",
      "/our-work/flyers/esth-3.png",
    ],
    clientOverview: "Informative dental clinic promotional flyer suite designed for Esthetix Dental, highlighting specialized treatments, cosmetic dentistry, and dental health packages.",
    services: [
      "Dental Clinic Flyer Design",
      "Treatment & Pricing Layout",
      "Patient Education Graphics",
      "Print & Digital Formats"
    ],
    challenge: "Organizing medical procedures and consultation packages into an approachable, reassuring layout that builds patient confidence."
  },
  {
    id: 20,
    title: "RUSSH HOSPITAL",
    category: "Flyers",
    filter: "FLYERS",
    image: "/our-work/flyers/russh-1.jpg",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/flyers/russh-1.jpg",
      "/our-work/flyers/russh-2.jpg",
      "/our-work/flyers/russh-3.jpg",
    ],
    clientOverview: "Clinical healthcare flyer designs created for Russh Hospital, spotlighting seasonal health checkups, emergency care facilities, and specialist doctor clinics.",
    services: [
      "Hospital Campaign Flyers",
      "Specialty Clinic Highlights",
      "Emergency Contact Prominence",
      "Print Production Specifications"
    ],
    challenge: "Structuring multi-specialty checkup camps and emergency helpline details clearly to maximize patient outreach and inquiries."
  },
  {
    id: 21,
    title: "SHRISWARAA HOSPITAL",
    category: "Flyers",
    filter: "FLYERS",
    image: "/our-work/flyers/shri-1.png",
    height: "380px",
    bgColor: "bg-[#ff863c]",
    gallery: [
      "/our-work/flyers/shri-1.png",
      "/our-work/flyers/shri-2.png",
      "/our-work/flyers/shri-3.png",
    ],
    clientOverview: "Targeted healthcare announcement and health camp flyers crafted for Shriswaraa Hospital to drive community health awareness and consultation bookings.",
    services: [
      "Health Camp Promotional Flyers",
      "Doctor Profile Callouts",
      "Visual Medical Hierarchy",
      "High-Quality Print Prep"
    ],
    challenge: "Balancing clinical depth with clean visual hierarchy so patient families can quickly understand health checkup benefits and registration steps."
  },
  {
    id: 22,
    title: "TERRACE POND",
    category: "Flyers",
    filter: "FLYERS",
    image: "/our-work/flyers/terracepond-1.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/flyers/terracepond-1.png",
      "/our-work/flyers/terracepond-2.png",
      "/our-work/flyers/terracepond-3.png",
    ],
    clientOverview: "Lifestyle and venue promotional flyers created for Terrace Pond, capturing ambient scenic beauty, open-air gatherings, and event bookings.",
    services: [
      "Scenic Venue Flyers",
      "Event Showcase Layout",
      "Atmospheric Typography",
      "Print & Social Collateral"
    ],
    challenge: "Translating tranquil outdoor atmosphere and premium event hospitality into an eye-catching, informative promotional flyer layout."
  },
  {
    id: 23,
    title: "RICCH HOTELS",
    category: "Flyers",
    filter: "FLYERS",
    image: "/our-work/flyers/ricchhotel-1.png",
    height: "380px",
    bgColor: "bg-[#184a41]",
    gallery: [
      "/our-work/flyers/ricchhotel-1.png",
      "/our-work/flyers/ricchhotel-2.jpg",
      "/our-work/flyers/ricchhotel-3.png",
    ],
    clientOverview: "Luxury hospitality and weekend staycation flyer series designed for Ricch Hotels, highlighting room packages, banquet spaces, and premier guest amenities.",
    services: [
      "Hospitality Offer Flyers",
      "Room & Suite Highlights",
      "Package Pricing Display",
      "Direct Booking Call-to-Actions"
    ],
    challenge: "Showcasing premium room amenities and limited-time hospitality packages with enticing visual hierarchy that drives direct reservations."
  },
  {
    id: 24,
    title: "RICCH",
    category: "Flyers",
    filter: "FLYERS",
    image: "/our-work/flyers/ricch-1.png",
    height: "380px",
    bgColor: "bg-[#492c28]",
    gallery: [
      "/our-work/flyers/ricch-1.png",
      "/our-work/flyers/ricch-2.png",
      "/our-work/flyers/ricch-3.png",
    ],
    clientOverview: "Culinary and restaurant promotional flyers designed for Ricch, showcasing signature chef dishes, weekend food festivals, and banquet catering.",
    services: [
      "Restaurant Event Flyers",
      "Appetizing Food Typography",
      "Festival Offer Banners",
      "Print & Handout Layout"
    ],
    challenge: "Creating mouth-watering visual layouts that highlight seasonal culinary specials and drive weekend table bookings."
  },
  {
    id: 25,
    title: "ESTHETIX DENTAL",
    category: "Social Media",
    filter: "SOCIAL MEDIA MANAGEMENT",
    image: "/our-work/socialmedia/esth-2.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/socialmedia/esth-1.png",
      "/our-work/socialmedia/esth-2.png",
    ],
    clientOverview: "Comprehensive social media feed curation and patient engagement creatives for Esthetix Dental, spotlighting smile makeovers, dental hygiene tips, and clinic offers.",
    services: [
      "Instagram Grid Architecture",
      "Patient Education Posts",
      "Offer & Camp Carousels",
      "Story & Highlight Branding"
    ],
    challenge: "Transforming complex clinical dentistry procedures into clean, aesthetically pleasing, and reassuring social media graphics that drive direct appointment inquiries."
  },
  {
    id: 26,
    title: "FIRE & TUNS",
    category: "Social Media",
    filter: "SOCIAL MEDIA MANAGEMENT",
    image: "/our-work/socialmedia/fireandtuns-1.png",
    height: "380px",
    bgColor: "bg-[#492c28]",
    gallery: [
      "/our-work/socialmedia/fireandtuns-1.png",
      "/our-work/socialmedia/fireandtuns-2.png",
      "/our-work/socialmedia/fireandtuns-3.png",
      "/our-work/socialmedia/fireandtns-4.png",
    ],
    clientOverview: "High-flavor, visually appetizing social media content suite crafted for Fire & Tuns, featuring weekly chef specials, weekend dining buzz, and interactive foodie stories.",
    services: [
      "Culinary Content Strategy",
      "Appetizing Food Creatives",
      "Weekend Buzz Campaigns",
      "Community Engagement Posts"
    ],
    challenge: "Creating mouth-watering visual rhythm across Instagram grid posts and stories that captures culinary sizzle and converts viewers into dining guests."
  },
  {
    id: 27,
    title: "RUSSH HOSPITAL",
    category: "Social Media",
    filter: "SOCIAL MEDIA MANAGEMENT",
    image: "/our-work/socialmedia/russh-2.png",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/socialmedia/russh-1.png",
      "/our-work/socialmedia/russh-2.png",
    ],
    clientOverview: "Trust-building healthcare social media campaign management for Russh Hospital, communicating preventative health advice, doctor schedules, and emergency care access.",
    services: [
      "Healthcare Post Design",
      "Doctor Feature Creatives",
      "Health Day Campaigns",
      "Emergency & Helpline Awareness"
    ],
    challenge: "Balancing medical credibility and clinical accuracy with warm, empathetic visual storytelling that resonates with families and community followers."
  },
  {
    id: 28,
    title: "RICCH HOTELS",
    category: "Menu Cards",
    filter: "MENU CARDS",
    image: "/our-work/menucards/ricch-1.png",
    height: "380px",
    bgColor: "bg-[#184a41]",
    gallery: [
      "/our-work/menucards/ricch-1.png",
      "/our-work/menucards/ricch-2.png",
    ],
    clientOverview: "Sophisticated multi-course dining and banquet menu card design crafted for Ricch Hotels, blending fine-dining elegance with clear typographic dish categorization.",
    services: [
      "Luxury Menu Layout & Typography",
      "Multi-Cuisine Section Hierarchy",
      "Chef Specials & Pricing System",
      "Premium Texture & Print Layout"
    ],
    challenge: "Arranging diverse multi-cuisine culinary offerings into an organized, legible hierarchy while preserving a premium hospitality feel."
  },
  {
    id: 29,
    title: "LALITHA",
    category: "Auto Ads",
    filter: "AUTO ADS",
    image: "/our-work/autoads/lalitha-1.jpg",
    height: "380px",
    bgColor: "bg-[#184a41]",
    gallery: [
      "/our-work/autoads/lalitha-1.jpg",
      "/our-work/autoads/lalitha-2.jpg",
      "/our-work/autoads/lalitha-3.jpg",
    ],
    clientOverview: "Dynamic outdoor transit advertising graphics designed for Lalitha across auto-rickshaw backs and hood wraps, ensuring high brand visibility across busy city roads.",
    services: [
      "Transit Auto Ad Layout",
      "High-Contrast Brand Visuals",
      "Vehicle Proportion Sizing",
      "Outdoor Print & Vinyl Prep"
    ],
    challenge: "Structuring key promotional messaging, brand identity, and contact information into an instantly readable format for moving urban traffic."
  },
  {
    id: 30,
    title: "SHRISWARAA HOSPITAL",
    category: "Hoardings",
    filter: "HOARDINGS",
    image: "/our-work/hoardings/shri-1.png",
    height: "380px",
    bgColor: "bg-[#ff863c]",
    gallery: [
      "/our-work/hoardings/shri-1.png",
      "/our-work/hoardings/shri-2.png",
      "/our-work/hoardings/shri-3.jpg",
    ],
    clientOverview: "High-impact outdoor hoarding and billboard designs crafted for Shriswaraa Hospital to enhance citywide visibility, emergency awareness, and healthcare services.",
    services: [
      "Large-Format Hoarding Design",
      "High-Contrast Visual Hierarchy",
      "Outdoor Print Specifications",
      "Emergency & Specialty Highlights"
    ],
    challenge: "Designing large-format outdoor graphics that communicate hospital specialties and 24/7 emergency contacts clearly within 3 seconds to passing motorists."
  },
  {
    id: 31,
    title: "RUSSH HOSPITAL",
    category: "Hoardings",
    filter: "HOARDINGS",
    image: "/our-work/hoardings/russh.jpg",
    height: "380px",
    bgColor: "bg-[#047880]",
    gallery: [
      "/our-work/hoardings/russh.jpg",
    ],
    clientOverview: "Prominent outdoor hoarding and billboard graphics created for Russh Hospital to highlight multi-specialty clinical departments and emergency response.",
    services: [
      "Large-Format Hoarding Layout",
      "Emergency Hotline Prominence",
      "Doctor Specialty Highlights",
      "Outdoor Print Specs"
    ],
    challenge: "Ensuring critical hospital service offerings and emergency telephone numbers remain instantly recognizable and readable from fast-moving traffic."
  },
];

// --- Modal Component ---
const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Normalize images: use project.gallery if available and non-empty, otherwise fallback to project.image
  const images: string[] =
    Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : project.image
        ? [project.image]
        : [];

  const hasMultipleImages = images.length > 1;

  // Prevent background scrolling and handle keyboard left/right arrow navigation
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (!hasMultipleImages) return;
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, images.length, onClose]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultipleImages) return;
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultipleImages) return;
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 max-[439px]:p-2.5 sm:p-4 md:p-8 lg:p-6 xl:p-8 min-[1400px]:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer" onClick={onClose}></div>

      <motion.div
        className="relative bg-white w-full max-w-6xl lg:max-w-[660px] xl:max-w-[760px] min-[1400px]:max-w-6xl h-[82dvh] max-[439px]:h-[88dvh] max-h-[85dvh] max-[439px]:max-h-[90dvh] md:h-[80vh] md:max-h-[90vh] lg:h-[66vh] lg:max-h-[470px] xl:h-[70vh] xl:max-h-[530px] min-[1400px]:h-[80vh] min-[1400px]:max-h-[90vh] rounded-2xl max-[439px]:rounded-2xl sm:rounded-3xl lg:rounded-2xl xl:rounded-3xl min-[1400px]:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 max-[439px]:top-2.5 right-3 max-[439px]:right-2.5 sm:top-4 sm:right-4 lg:top-2.5 lg:right-2.5 xl:top-3 xl:right-3 min-[1400px]:top-4 min-[1400px]:right-4 z-30 w-9 max-[439px]:w-7.5 h-9 max-[439px]:h-7.5 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-10 min-[1400px]:h-10 bg-black/50 hover:bg-black/70 text-white backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-lg"
          aria-label="Close modal"
        >
          <X size={18} strokeWidth={2.5} className="w-4.5 max-[439px]:w-3.5 h-4.5 max-[439px]:h-3.5 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-5 min-[1400px]:h-5" />
        </button>

        {/* Left Side: Media (Full responsive contain with ambient backdrop so no image gets cut on mobile or desktop) */}
        <div className="w-full md:w-1/2 h-[280px] max-[439px]:h-[200px] sm:h-[340px] md:h-full shrink-0 relative bg-[#130c0a] overflow-hidden flex items-center justify-center">
          {project.isVideo ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
              <video
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                muted
                playsInline
                loop
                poster={project.image}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <>
              {/* Ambient blurred backdrop so brand colors naturally expand into background without empty black bars */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <img
                  src={images[currentImageIndex] || project.image}
                  alt=""
                  className="w-full h-full object-cover blur-2xl opacity-40 scale-125"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              </div>

              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex] || project.image}
                  alt={`${project.title} image ${currentImageIndex + 1}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 60 : direction < 0 ? -60 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full object-contain select-none p-2 sm:p-3 md:p-4"
                />
              </AnimatePresence>

              {/* Carousel Controls - Only rendered if there are 2 or more images */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous slide"
                    className="absolute left-3 max-[439px]:left-2 sm:left-4 lg:left-2 xl:left-3 min-[1400px]:left-4 top-1/2 -translate-y-1/2 w-8 max-[439px]:w-7 h-8 max-[439px]:h-7 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-10 min-[1400px]:h-10 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-md z-20 cursor-pointer"
                  >
                    <ChevronLeft size={20} className="w-5 max-[439px]:w-4 h-5 max-[439px]:h-4 sm:w-6 sm:h-6 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-6 min-[1400px]:h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next slide"
                    className="absolute right-3 max-[439px]:right-2 sm:right-4 lg:right-2 xl:right-3 min-[1400px]:right-4 top-1/2 -translate-y-1/2 w-8 max-[439px]:w-7 h-8 max-[439px]:h-7 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 min-[1400px]:w-10 min-[1400px]:h-10 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-md z-20 cursor-pointer"
                  >
                    <ChevronRight size={20} className="w-5 max-[439px]:w-4 h-5 max-[439px]:h-4 sm:w-6 sm:h-6 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-6 min-[1400px]:h-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-3 max-[439px]:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 bg-black/30 backdrop-blur-sm px-2.5 max-[439px]:px-2 py-1 max-[439px]:py-0.5 rounded-full">
                    {images.map((_: string, i: number) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDirection(i > currentImageIndex ? 1 : -1);
                          setCurrentImageIndex(i);
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentImageIndex ? "w-5 sm:w-6 bg-[#ff863c]" : "w-1.5 bg-white/60 hover:bg-white"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Right Side: Content (Scrollable on mobile) */}
        <div
          className="w-full md:w-1/2 flex-1 min-h-0 p-5 max-[439px]:p-4 max-[439px]:pt-3 sm:p-6 md:p-12 lg:p-5 xl:p-6 min-[1400px]:p-12 overflow-y-auto overscroll-contain bg-[var(--color-ivory)] scroll-smooth relative [scrollbar-width:thin] [scrollbar-color:#ff863c_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#ff863c]/50 hover:[&::-webkit-scrollbar-thumb]:bg-[#ff863c] [&::-webkit-scrollbar-thumb]:rounded-full shadow-[0_-8px_16px_rgba(0,0,0,0.06)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 max-[439px]:gap-2 mb-2 max-[439px]:mb-1 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-2">
              <div className="w-8 max-[439px]:w-5 h-[3px] max-[439px]:h-[2px] lg:w-5 lg:h-[2px] xl:w-6 xl:h-[2.5px] min-[1400px]:w-8 min-[1400px]:h-[3px] bg-[#ff863c] rounded-full"></div>
              <div className="uppercase tracking-widest text-xs max-[439px]:text-[10px] sm:text-sm lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-sm font-black text-[#ff863c]">{project.category}</div>
            </div>
            <h2 className="text-2xl max-[439px]:text-[17px] max-[439px]:leading-snug sm:text-3xl md:text-5xl lg:text-[22px] xl:text-[24px] min-[1400px]:text-5xl font-black text-[#492c28] mb-4 max-[439px]:mb-2 md:mb-8 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-8 leading-tight lg:leading-[1.15]" style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>{project.title}</h2>

            <div className="space-y-5 max-[439px]:space-y-3 sm:space-y-6 md:space-y-8 lg:space-y-2 xl:space-y-2.5 min-[1400px]:space-y-8">
              <div>
                <h3 className="text-xs max-[439px]:text-[10px] lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-xs font-bold text-[#492c28] uppercase tracking-widest mb-2 max-[439px]:mb-1 sm:mb-3 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-3 opacity-60">The Brief</h3>
                <p className="text-[#796864] leading-relaxed text-sm max-[439px]:text-[12px] md:text-base lg:text-[11.5px] xl:text-[12px] min-[1400px]:text-base font-medium lg:leading-[1.45] xl:leading-[1.5] font-['Inter',sans-serif]">{project.clientOverview}</p>
              </div>

              {project.services && project.services.length > 0 && (
                <div>
                  <h3 className="text-xs max-[439px]:text-[10px] lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-xs font-bold text-[#492c28] uppercase tracking-widest mb-2 max-[439px]:mb-1 sm:mb-3 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-3 opacity-60">What We Did</h3>
                  <ul className="grid grid-cols-2 gap-y-2.5 max-[439px]:gap-y-1.5 sm:gap-y-3 lg:gap-y-1 xl:gap-y-1.5 min-[1400px]:gap-y-3 gap-x-4 max-[439px]:gap-x-2">
                    {project.services.map((service: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-[#796864] text-xs max-[439px]:text-[11px] sm:text-sm lg:text-[11.5px] xl:text-[12px] min-[1400px]:text-sm font-bold font-['Inter',sans-serif]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff863c]" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xs max-[439px]:text-[10px] lg:text-[10px] xl:text-[10.5px] min-[1400px]:text-xs font-bold text-[#492c28] uppercase tracking-widest mb-2 max-[439px]:mb-1 sm:mb-3 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-3 opacity-60">Challenge & Solution</h3>
                <p className="text-[#796864] leading-relaxed text-sm max-[439px]:text-[12px] md:text-base lg:text-[11.5px] xl:text-[12px] min-[1400px]:text-base font-medium lg:leading-[1.45] xl:leading-[1.5] font-['Inter',sans-serif]">{project.challenge}</p>
              </div>

              {(project.filter === "WEBSITES" || project.category === "Website Design") && (
                <div className="pt-4 max-[439px]:pt-2.5 md:pt-6 lg:pt-1.5 xl:pt-2 min-[1400px]:pt-6 pb-2 max-[439px]:pb-1 md:pb-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 lg:gap-1.5 xl:gap-1.5 min-[1400px]:gap-2 w-full sm:w-auto px-6 max-[439px]:px-4 sm:px-8 py-3.5 max-[439px]:py-2.5 sm:py-4 lg:px-3 lg:py-1.5 xl:px-3.5 xl:py-1.5 min-[1400px]:px-8 min-[1400px]:py-4 bg-[#492c28] text-white rounded-full font-bold uppercase tracking-widest max-[439px]:tracking-wider lg:tracking-wider xl:tracking-wider min-[1400px]:tracking-widest text-xs max-[439px]:text-[10.5px] sm:text-sm lg:text-[9px] xl:text-[9.5px] min-[1400px]:text-sm hover:bg-[#ff863c] transition-colors shadow-xl hover:-translate-y-1 duration-300"
                  >
                    Visit Live Project <ExternalLink size={16} className="w-4 h-4 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 min-[1400px]:w-4 min-[1400px]:h-4 shrink-0" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function OurWorksPage() {
  const [activeFilter, setActiveFilter] = useState("WEBSITES");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1400) {
        setItemsPerPage(9); // >= 1400px: 3 cards * 3 rows = 9
      } else {
        setItemsPerPage(6); // Mobile (1 col * 6) & 1024-1400px (2 cols * 3 rows) = 6
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("works-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredItems = portfolioItems.filter(
    (item) => item.filter === activeFilter
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <main className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: "var(--color-ivory)" }}>
      {/* Hero Outer Wrapper */}
      <div className="w-full px-3 sm:px-4 md:px-4 pt-24 sm:pt-24 md:pt-28 lg:pt-[92px] xl:pt-[96px] min-[1400px]:pt-28 pb-8 md:pb-0 overflow-hidden md:overflow-visible">
        <section
          className="relative w-full max-w-[1400px] mx-auto rounded-[2rem] sm:rounded-[2.5rem] md:rounded-none overflow-hidden md:overflow-visible flex flex-col items-center justify-center px-4 sm:px-8 md:px-0 py-10 sm:py-14 md:py-0 h-[480px] sm:h-[540px] md:h-auto md:min-h-0 bg-[#6b2d14] md:bg-transparent"
        >
          {/* Warm radial glow — mobile only (matches about page hero) */}
          <div
            className="absolute inset-0 pointer-events-none z-0 md:hidden"
            style={{
              background:
                "radial-gradient(ellipse 70% 75% at 65% 50%, #8c3d1e 0%, #7a3318 25%, #6b2d14 55%, #4a1e0a 80%, #361508 100%)",
            }}
          />

          {/* Grain/noise texture overlay — mobile only (matches about page hero) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 md:hidden"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Hero Content (Text) */}
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
            {/* Label */}
            <motion.div
              className="flex items-center justify-center gap-2.5 sm:gap-3 mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              {/* Horizontal Line */}
              <div className="w-10 lg:w-7 xl:w-8 min-[1400px]:w-10 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-orange)" }}></div>
              <span className="uppercase tracking-[0.25em] font-bold text-sm md:text-base lg:text-[12px] xl:text-[13px] min-[1400px]:text-base pt-0.5" style={{ color: "var(--color-orange)" }}>
                Our Work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-center flex flex-col items-center mb-6 md:mb-8 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span
                className="text-[32px] md:text-[50px] lg:text-[36px] xl:text-[42px] min-[1400px]:text-[56px] font-black leading-tight tracking-tight text-white md:text-[var(--color-brown)]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Things We’ve
              </span>
              <span
                className="text-[2.2rem] md:text-[3.2rem] lg:text-[2.2rem] xl:text-[2.6rem] min-[1400px]:text-[4rem] leading-[0.9] mt-2 md:mt-0 lg:mt-0.5 xl:mt-1 min-[1400px]:mt-2 text-[#00bee8] md:text-[#184a41]"
                style={{ fontFamily: "'Playlist', 'Kaushan Script', cursive" }}
              >
                Built, Designed &amp; Created.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-center max-w-2xl lg:max-w-xl xl:max-w-2xl text-[14px] md:text-[16px] lg:text-[13.5px] xl:text-[15px] min-[1400px]:text-[16px] leading-relaxed mb-0 md:mb-10 lg:mb-3 xl:mb-4 min-[1400px]:mb-10 text-white/90 md:text-[var(--color-text)] font-medium"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              A collection of websites, brands, campaigns and creative work we’ve made <br className="hidden md:block" /> for businesses like yours.
            </motion.p>
          </div>

          {/* The Mockup Showcase — background image with low opacity on mobile screen, normal showcase on desktop */}
          <div className="absolute inset-0 md:relative md:inset-auto w-full flex justify-center items-center md:items-start mt-0 md:-mt-12 lg:mt-1 xl:mt-2 min-[1400px]:-mt-12 h-full md:h-[600px] lg:h-[360px] xl:h-[420px] min-[1400px]:h-[600px] pointer-events-none md:pointer-events-auto z-0 md:z-10 opacity-20 sm:opacity-25 md:opacity-100 transition-opacity duration-300 overflow-hidden md:overflow-visible">
            <div className="relative w-full lg:w-[1200px] h-full lg:h-[600px] flex justify-center items-center md:items-start shrink-0 lg:scale-[0.59] xl:scale-[0.69] min-[1400px]:scale-100 origin-top">

              {/* --- DECORATIVE ICONS & LINES --- */}

              {/* Top Left Decoration (Web Icon) */}
              <motion.div className="absolute top-[-10%] md:top-[-5%] lg:top-[2%] left-[15%] md:left-[25%] lg:left-[33%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <div className="relative">
                  <img src="/our-work/web-icon.png" alt="Web Icon" className="w-[50px] md:w-[70px] lg:w-[90px] h-auto object-contain pointer-events-none relative z-10" />

                  {/* Dashed line to Phone */}
                  <svg className="absolute top-5 left-[80%] pointer-events-none overflow-visible z-0" width="120" height="60">
                    <path d="M 0 0 Q 55 -40 110 40" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="4,6" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

              {/* Top Right Decoration (Mar Icon) */}
              <motion.div className="absolute top-[-5%] md:top-[0%] lg:top-[0%] right-[15%] md:right-[28%] lg:right-[35%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <div className="relative">
                  <img src="/our-work/mar-icon.png" alt="Marketing Icon" className="w-[40px] md:w-[60px] lg:w-[90px] h-auto object-contain pointer-events-none relative z-10" />

                  {/* Dashed line to Phone */}
                  <svg className="absolute top-[40%] -left-16 pointer-events-none overflow-visible z-0" width="60" height="40">
                    <path d="M 60 10 Q 30 -10 0 20" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,6" strokeLinecap="round" />
                  </svg>

                  {/* Dashed line to Mockup */}
                  <svg className="absolute top-[80%] -right-4 pointer-events-none overflow-visible z-0" width="40" height="60">
                    <path d="M 0 0 Q 20 20 30 60" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,6" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

              {/* Bottom Left Decoration (Logo Icon) */}
              <motion.div className="absolute bottom-[35%] md:bottom-[40%] lg:bottom-[33%] left-[15%] md:left-[25%] lg:left-[37%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                <div className="relative">
                  <img src="/our-work/logo-icon.png" alt="Logo Icon" className="w-[35px] md:w-[55px] lg:w-[55px] h-auto object-contain pointer-events-none relative z-10" />

                  {/* Dashed line to Mockup */}
                  <svg className="absolute -top-[60px] -left-[60px] pointer-events-none overflow-visible z-0" width="100" height="100">
                    <path d="M 0 0 Q 40 50 80 90" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,8" strokeLinecap="round" />
                  </svg>

                  {/* Dashed line to Phone */}
                  <svg className="absolute top-0 left-[20px] md:left-[30px] pointer-events-none overflow-visible z-0" width="200" height="60">
                    <path d="M 0 40 Q 100 80 200 0" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,8" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.div>

              {/* Middle Right Decoration (Marketing Icon) */}
              <motion.div className="absolute top-[30%] md:top-[35%] lg:top-[35%] right-[5%] md:right-[18%] lg:right-[22%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                <img src="/our-work/marketing-icon.png" alt="Digital Marketing Icon" className="w-[25px] md:w-[40px] lg:w-[55px] h-auto object-contain pointer-events-none" />
              </motion.div>

              {/* Dashed Line Between Right Mockups */}
              <motion.div className="absolute top-[32%] md:top-[35%] lg:top-[36%] right-[20%] md:right-[24%] lg:right-[26%] z-15 hidden md:block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                <svg className="pointer-events-none overflow-visible" width="80" height="100">
                  <path d="M 20 0 Q 80 50 0 100" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeDasharray="6,8" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Central Phone Mockup */}
              <motion.div
                className="relative z-30 w-[180px] sm:w-[220px] md:w-[320px] lg:w-[340px] -left-8 sm:-left-12 md:left-0"
                initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                <img src="/our-work/phone.png" className="w-full h-auto drop-shadow-2xl" alt="Phone App" />
              </motion.div>

              {/* Top Left (Website) */}
              <motion.div
                className="absolute top-24 sm:top-28 md:top-0 lg:top-0 left-2 sm:left-6 md:left-20 lg:left-48 w-[130px] sm:w-[150px] md:w-[220px] lg:w-[260px] z-20 !rotate-[-12deg]"
                initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              >
                <img src="/our-work/left-top.png" className="w-full h-auto drop-shadow-xl" alt="Website Design" />
              </motion.div>

              {/* Bottom Left (Branding) */}
              <motion.div
                className="absolute bottom-16 sm:bottom-28 md:bottom-48 lg:bottom-[220px] left-4 sm:left-8 md:left-28 lg:left-56 w-[120px] sm:w-[130px] md:w-[190px] lg:w-[230px] z-20 rotate-[12deg]"
                initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
              >
                <img src="/our-work/left-bottom.png" className="w-full h-auto drop-shadow-xl" alt="Branding Identity" />
              </motion.div>

              {/* Top Right (Social Media) */}
              <motion.div
                className="absolute top-24 sm:top-28 md:top-12 lg:top-20 right-12 sm:right-16 md:right-32 lg:right-64 w-[135px] sm:w-[160px] md:w-[230px] lg:w-[280px] z-20 !rotate-[-8deg]"
                initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              >
                <img src="/our-work/right-top.png" className="w-full h-auto drop-shadow-xl" alt="Social Media Campaigns" />
              </motion.div>

              {/* Bottom Right (Digital Marketing) */}
              <motion.div
                className="absolute bottom-14 sm:bottom-24 md:bottom-40 lg:bottom-[200px] right-4 sm:right-12 md:right-36 lg:right-72 w-[120px] sm:w-[130px] md:w-[180px] lg:w-[180px] z-20 !rotate-[10deg]"
                initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}
              >
                <img src="/our-work/right-bottom.png" className="w-full h-auto drop-shadow-xl" alt="Digital Marketing" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Explore Our Work Section */}
      <section className="w-full pb-20 max-[439px]:pb-10 md:pb-32 lg:pb-16 xl:pb-20 min-[1400px]:pb-32 relative z-20 [--card-scale:1] lg:[--card-scale:0.72] xl:[--card-scale:0.84] min-[1400px]:[--card-scale:1]">
        <div className="w-full max-w-[1400px] lg:max-w-[940px] xl:max-w-[1140px] min-[1400px]:max-w-[1400px] mx-auto px-4 md:px-8 lg:px-6 xl:px-8 min-[1400px]:px-8">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 max-[439px]:mb-6 md:mb-20 lg:mb-7 xl:mb-9 min-[1400px]:mb-20">
            <motion.div
              className="flex items-center gap-2.5 sm:gap-3 mb-4 max-[439px]:mb-2.5 sm:mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <div className="w-8 max-[439px]:w-6 sm:w-10 lg:w-6 xl:w-7 min-[1400px]:w-10 h-[2px] bg-[#ff863c]"></div>
              <span className="uppercase tracking-[0.2em] font-bold text-sm max-[439px]:text-[12px] lg:text-[10px] xl:text-[11px] min-[1400px]:text-sm text-[#ff863c]">
                EXPLORE OUR WORK
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl max-[439px]:text-[23px] max-[439px]:leading-[1.2] md:text-5xl lg:text-[24px] xl:text-[27px] min-[1400px]:text-6xl font-black text-[#492c28] mb-4 max-[439px]:mb-2.5 sm:mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6 tracking-tight leading-tight lg:leading-[1.15] min-[1400px]:leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              See What We’ve <span className="text-[#047880]">Created</span>.
            </motion.h2>

            <motion.p
              className="text-base max-[439px]:text-[13.5px] max-[439px]:leading-normal md:text-lg lg:text-[12px] xl:text-[12.5px] min-[1400px]:text-lg text-[#5d4945] max-w-2xl lg:max-w-[450px] xl:max-w-[500px] min-[1400px]:max-w-2xl font-medium leading-relaxed lg:leading-[1.5] xl:leading-[1.5] min-[1400px]:leading-relaxed"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              Take a look at some of the websites, branding, social media designs, and marketing work we’ve created for businesses across different industries.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 max-[439px]:gap-6 lg:gap-6 xl:gap-8 min-[1400px]:gap-16 items-start w-full">
            {/* Sidebar Filters */}
            <motion.div
              className="w-full lg:w-[195px] xl:w-[225px] min-[1400px]:w-[280px] shrink-0 flex flex-row lg:flex-col flex-nowrap lg:flex-wrap gap-2 max-[439px]:gap-1.5 md:gap-3 lg:gap-1.5 xl:gap-2 min-[1400px]:gap-3 overflow-x-auto lg:overflow-visible no-scrollbar pb-3 max-[439px]:pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:sticky lg:top-32 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`shrink-0 whitespace-nowrap px-5 max-[439px]:px-3.5 py-3 max-[439px]:py-2 lg:px-3.5 lg:py-2 xl:px-4 xl:py-2.5 min-[1400px]:px-5 min-[1400px]:py-3 rounded-full lg:rounded-lg xl:rounded-xl min-[1400px]:rounded-xl text-center lg:text-left text-xs max-[439px]:text-[11px] max-[439px]:tracking-wide md:text-sm lg:text-[11px] xl:text-[12px] min-[1400px]:text-sm font-bold tracking-wider uppercase transition-all duration-300 w-auto lg:w-full inline-flex items-center justify-center lg:block ${activeFilter === filter
                    ? "bg-[#492c28] text-white shadow-md"
                    : "bg-gray-100 lg:bg-transparent text-[#796864] hover:bg-gray-200 lg:hover:bg-[#492c28]/5 hover:text-[#492c28]"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            {/* Cards Grid Container (Responsive: Mobile 1 col x 6, 1024-1400px 2 cols x 3, >1400px 3 cols x 3) */}
            <div id="works-grid" className="w-full flex-1 flex flex-col scroll-mt-28">
              <motion.div
                className="w-full grid grid-cols-1 lg:grid-cols-2 min-[1400px]:grid-cols-3 gap-6 max-[439px]:gap-4.5 lg:gap-5 min-[1400px]:gap-6"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              >
                {paginatedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    onClick={() => setSelectedProject(item)}
                    className={`relative group rounded-2xl max-[439px]:rounded-xl lg:rounded-xl xl:rounded-2xl min-[1400px]:rounded-2xl overflow-hidden cursor-pointer w-full h-[340px] max-[439px]:h-[260px] sm:h-[360px] lg:h-[320px] xl:h-[340px] min-[1400px]:h-[350px] ${item.bgColor} shadow-sm hover:shadow-xl transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />

                    {/* Video Play Icon overlay for Video types */}
                    {item.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-16 h-16 max-[439px]:w-12 max-[439px]:h-12 lg:w-11 lg:h-11 xl:w-13 xl:h-13 min-[1400px]:w-16 min-[1400px]:h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff863c] transition-all duration-300 border border-white/20">
                          <svg className="w-6 h-6 max-[439px]:w-4.5 max-[439px]:h-4.5 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 min-[1400px]:w-6 min-[1400px]:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                    )}

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>



                    {/* Content Bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-5 max-[439px]:p-3.5 lg:p-3.5 xl:p-4 min-[1400px]:p-5 flex justify-between items-end z-10">
                      <div className="flex flex-col justify-end">
                        <h3 className="text-white text-lg max-[439px]:text-[15px] lg:text-[14px] xl:text-[16px] min-[1400px]:text-lg font-bold leading-tight tracking-wide mb-1 drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-xs max-[439px]:text-[10px] lg:text-[10.5px] xl:text-[11px] min-[1400px]:text-xs font-medium tracking-wider uppercase drop-shadow-md">
                          {item.category}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="w-12 h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10 min-[1400px]:w-12 min-[1400px]:h-12 rounded-full bg-[#184a41] flex items-center justify-center text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[inset_0px_-4px_6px_rgba(0,0,0,0.5),inset_0px_2px_4px_rgba(255,255,255,0.25),0px_10px_20px_rgba(0,0,0,0.4)] border border-[#0f302b] hover:brightness-125 group/btn">
                        <svg className="w-6 h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 min-[1400px]:w-6 min-[1400px]:h-6 transition-transform duration-300 group-hover/btn:translate-x-1.5 group-hover/btn:scale-110 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <motion.div
                  className="mt-12 max-[439px]:mt-7 lg:mt-8 xl:mt-10 min-[1400px]:mt-12 flex justify-center items-center gap-4 max-[439px]:gap-2 lg:gap-3 xl:gap-3.5 min-[1400px]:gap-4 w-full"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                  <button
                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 max-[439px]:w-8 max-[439px]:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full flex items-center justify-center bg-gray-100 text-[#492c28] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff863c] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    &larr;
                  </button>

                  <div className="flex gap-2 max-[439px]:gap-1.5 lg:gap-1.5 xl:gap-2 min-[1400px]:gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`w-10 h-10 max-[439px]:w-8 max-[439px]:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full flex items-center justify-center font-bold text-sm max-[439px]:text-xs lg:text-xs xl:text-xs min-[1400px]:text-sm transition-all duration-300 shadow-sm ${currentPage === i + 1
                          ? "bg-[#492c28] text-white"
                          : "bg-gray-100 text-[#796864] hover:bg-gray-200"
                          }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 max-[439px]:w-8 max-[439px]:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full flex items-center justify-center bg-gray-100 text-[#492c28] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff863c] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    &rarr;
                  </button>
                </motion.div>
              )}
            </div>
          </div>


        </div>
      </section>

      {/* Project Modal Render */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
