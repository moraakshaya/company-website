"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Lightbulb } from "lucide-react";

interface ValueCardData {
  id: string;
  title: string;
  description: string;
  extendedDetails: {
    heading: string;
    points: string[];
  };
  cardGradient: string;
  borderColor: string;
  shadowGlow: string;
  insetHighlight: number;
  titleColor: string;
  descColor: string;
  linkColor: string;
  iconGradient: string;
  iconColor: string;
  arrowGradient: string;
  arrowColor: string;
  glareAlpha: number;
  renderIcon: () => React.ReactNode;
}

const VALUES_DATA: ValueCardData[] = [
  {
    id: "clear",
    title: "Clear",
    description: "We communicate openly and keep things easy to understand.",
    extendedDetails: {
      heading: "Clarity in Everything We Deliver",
      points: [
        "Transparent timelines, budgets, and expectations from day one.",
        "Jargon-free communication so everyone stays on the same page.",
        "Simple, elegant design choices that cut through digital noise.",
      ],
    },
    // Brand Lavender Crystal Glass (#d3c5c7)
    cardGradient: "linear-gradient(145deg, rgba(219, 206, 208, 0.90) 0%, rgba(203, 189, 191, 0.75) 100%)",
    borderColor: "rgba(255, 255, 255, 0.85)",
    shadowGlow: "rgba(100, 75, 90, 0.05)",
    insetHighlight: 0.9,
    titleColor: "#2d1e18",
    descColor: "#5c4a45",
    linkColor: "#e05a2b",
    iconGradient: "linear-gradient(135deg, rgba(7, 122, 134, 0.95) 0%, rgba(4, 90, 99, 0.95) 100%)",
    iconColor: "#ffffff",
    arrowGradient: "linear-gradient(135deg, #d8ccd0 0%, #c8b9bc 100%)",
    arrowColor: "#2d1e18",
    glareAlpha: 0.35,
    // Modern communication dialogue icon with 3 solid dots
    renderIcon: () => (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <circle cx="8" cy="12" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="16" cy="12" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "creative",
    title: "Creative",
    description: "We bring fresh ideas to every project.",
    extendedDetails: {
      heading: "Fresh Thinking & Original Design",
      points: [
        "Unconventional concepts that help your brand stand out.",
        "Blending strategic logic with expressive artistry.",
        "Continuous exploration of emerging digital trends and aesthetics.",
      ],
    },
    // Luminous Emerald/Teal Jewel Glass
    cardGradient: "linear-gradient(145deg, rgba(7, 122, 134, 0.95) 0%, rgba(4, 90, 99, 0.88) 100%)",
    borderColor: "rgba(255, 255, 255, 0.32)",
    shadowGlow: "rgba(6, 110, 121, 0.12)",
    insetHighlight: 0.45,
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.9)",
    linkColor: "#ffffff",
    iconGradient: "linear-gradient(135deg, rgba(225, 218, 214, 0.95) 0%, rgba(206, 197, 193, 0.85) 100%)",
    iconColor: "#2d1e18",
    arrowGradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 245, 245, 0.92) 100%)",
    arrowColor: "#2d1e18",
    glareAlpha: 0.22,
    // Proper iconic lightbulb from Lucide
    renderIcon: () => (
      <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
    ),
  },
  {
    id: "reliable",
    title: "Reliable",
    description: "We take our work seriously and value our commitments.",
    extendedDetails: {
      heading: "Dependability You Can Build On",
      points: [
        "Milestones met with consistent quality and dependability.",
        "Long-term partnership focus rather than one-off delivery.",
        "Rigorous QA testing so products perform flawlessly in production.",
      ],
    },
    // Brand Lavender Crystal Glass (#d3c5c7)
    cardGradient: "linear-gradient(145deg, rgba(219, 206, 208, 0.90) 0%, rgba(203, 189, 191, 0.75) 100%)",
    borderColor: "rgba(255, 255, 255, 0.85)",
    shadowGlow: "rgba(100, 75, 90, 0.05)",
    insetHighlight: 0.9,
    titleColor: "#2d1e18",
    descColor: "#5c4a45",
    linkColor: "#e05a2b",
    iconGradient: "linear-gradient(135deg, rgba(7, 122, 134, 0.95) 0%, rgba(4, 90, 99, 0.95) 100%)",
    iconColor: "#ffffff",
    arrowGradient: "linear-gradient(135deg, #d8ccd0 0%, #c8b9bc 100%)",
    arrowColor: "#2d1e18",
    glareAlpha: 0.35,
    // Modern verified security shield checkmark
    renderIcon: () => (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: "detail-focused",
    title: "Detail-Focused",
    description: "We care about the small things that make the final work better.",
    extendedDetails: {
      heading: "Obsession with Nuance and Precision",
      points: [
        "Pixel-perfect responsive craft across every screen viewport.",
        "Micro-interactions and fluid motion that enhance usability.",
        "Clean, maintainable architecture under the hood.",
      ],
    },
    // Brand Lavender Crystal Glass (#d3c5c7)
    cardGradient: "linear-gradient(145deg, rgba(219, 206, 208, 0.90) 0%, rgba(203, 189, 191, 0.75) 100%)",
    borderColor: "rgba(255, 255, 255, 0.85)",
    shadowGlow: "rgba(100, 75, 90, 0.05)",
    insetHighlight: 0.9,
    titleColor: "#2d1e18",
    descColor: "#5c4a45",
    linkColor: "#e05a2b",
    iconGradient: "linear-gradient(135deg, rgba(7, 122, 134, 0.95) 0%, rgba(4, 90, 99, 0.95) 100%)",
    iconColor: "#ffffff",
    arrowGradient: "linear-gradient(135deg, #d8ccd0 0%, #c8b9bc 100%)",
    arrowColor: "#2d1e18",
    glareAlpha: 0.35,
    // Precision focus crosshair target with reticle
    renderIcon: () => (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <line x1="12" y1="1" x2="12" y2="4.5" />
        <line x1="12" y1="19.5" x2="12" y2="23" />
        <line x1="1" y1="12" x2="4.5" y2="12" />
        <line x1="19.5" y1="12" x2="23" y2="12" />
      </svg>
    ),
  },
];

interface CardProps {
  card: ValueCardData;
  index: number;
}

function ValueCard3D({ card, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics-based spring dampening
  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations based on cursor offset (-0.5 to 0.5)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [11, -11]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-11, 11]);

  // Specular Glare / Sheen coordinates
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], [10, 90]);

  // Dynamic 3D shadow cast opposite to tilt (gentle & subtle)
  const shadowX = useTransform(smoothMouseX, [-0.5, 0.5], [6, -6]);
  const shadowY = useTransform(smoothMouseY, [-0.5, 0.5], [10, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="perspective-[1200px] w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: card.cardGradient,
          borderColor: card.borderColor,
          boxShadow: useMotionTemplate`
            ${shadowX}px ${shadowY}px 18px ${card.shadowGlow},
            0 4px 14px -3px rgba(0, 0, 0, 0.03),
            inset 0 1.5px 1.5px 0 rgba(255, 255, 255, ${card.insetHighlight}),
            inset 0 -1px 1px 0 rgba(0, 0, 0, 0.03)
          `,
        }}
        whileHover={{
          scale: 1.028,
          transition: { type: "spring", stiffness: 350, damping: 25 },
        }}
        className="group relative select-none rounded-[28px] sm:rounded-[32px] border backdrop-blur-2xl backdrop-saturate-[180%] p-7 sm:p-8 flex flex-col justify-between min-h-[255px] sm:min-h-[270px] transition-all duration-300 overflow-hidden cursor-default"
      >
        {/* Dynamic Specular Light Glare (Follows cursor across glass) */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${card.glareAlpha}) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 80%)`,
          }}
        />

        {/* TOP ROW: Icon Badge + Top-Right Action Arrow Button */}
        <div
          className="flex items-center justify-between w-full"
          style={{ transform: "translateZ(44px)", transformStyle: "preserve-3d" }}
        >
          {/* Top-Left Circular Glass Icon Badge */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 border border-white/70 backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
            style={{
              background: card.iconGradient,
              color: card.iconColor,
              transform: "translateZ(12px)",
              boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.7), 0 3px 8px rgba(0, 0, 0, 0.04)",
            }}
          >
            {card.renderIcon()}
          </div>

          {/* Top-Right Circular Action Arrow Button */}
          <div
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 border border-white/80 backdrop-blur-md transition-all duration-300 group-hover:scale-110 shadow-sm"
            style={{
              background: card.arrowGradient,
              color: card.arrowColor,
              transform: "translateZ(16px)",
              boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 3px 8px rgba(0, 0, 0, 0.04)",
            }}
          >
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* CONTENT: Title & Description Floating with 3D Depth */}
        <div
          className="mt-6 sm:mt-8"
          style={{ transform: "translateZ(28px)", transformStyle: "preserve-3d" }}
        >
          <h3
            className="text-2xl sm:text-[26px] font-extrabold tracking-tight mb-2.5"
            style={{ color: card.titleColor }}
          >
            {card.title}
          </h3>
          <p
            className="text-[15px] sm:text-[16px] leading-[1.55] font-['Inter',sans-serif]"
            style={{ color: card.descColor }}
          >
            {card.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OurValues() {
  return (
    <section className="relative z-20 w-full py-16 md:py-24 lg:py-12 xl:py-12 min-[1400px]:py-28 bg-ivory overflow-hidden">
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">

          {/* ========================================================
              LEFT COLUMN: Header & Value Statement
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Eyebrow Label matching ThinkingBehindWork & OurStory */}
            <p className="section-label mb-4">WHAT MATTERS TO US</p>

            {/* Main Section Heading matching ThinkingBehindWork */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-[#492c28] mb-6 tracking-tight flex flex-col items-start gap-1 md:gap-3 leading-tight">
              <span>The Values Behind</span>
              <span className="text-[#047880]">Our Work.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-[#492c28]/85 text-base sm:text-lg leading-relaxed max-w-md font-['Inter',sans-serif]">
              We&apos;re not just about what we do, but how we do it. These values shape
              our work, our team, and the experience we create for our clients.
            </p>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: 2x2 Interactive 3D Glassmorphic Cards Grid
              ======================================================== */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {VALUES_DATA.map((card, idx) => (
                <ValueCard3D
                  key={card.id}
                  card={card}
                  index={idx}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
