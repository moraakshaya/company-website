"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Srikanth Reddy",
    role: "Managing Director",
    image: "/about/team/team-1.png",
  },
  {
    id: "team-2",
    name: "Praveen Reddy",
    role: "CEO",
    image: "/about/team/team-2.png",
  },
  {
    id: "team-3",
    name: "Pravanya Reddy",
    role: "COO",
    image: "/about/team/team-3.png",
  },
];

function TeamCard3D({
  member,
  index,
  isMobile = false,
}: {
  member: TeamMember;
  index: number;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.12 }}
      className="w-full"
    >
      <div
        style={{
          background:
            "linear-gradient(145deg, rgba(225, 215, 217, 0.62) 0%, rgba(212, 198, 202, 0.38) 55%, rgba(235, 226, 228, 0.22) 100%)",
          borderColor: "rgba(255, 255, 255, 0.85)",
        }}
        className="group relative select-none rounded-[2rem] max-[439px]:rounded-2xl lg:rounded-[1.4rem] xl:rounded-[1.75rem] min-[1400px]:rounded-[2rem] border p-5 max-[439px]:p-3.5 sm:p-6 lg:p-3 xl:p-4 min-[1400px]:p-6 flex flex-col items-center text-center shadow-[0_10px_25px_rgba(73,44,40,0.06)] hover:shadow-[0_22px_45px_rgba(73,44,40,0.15)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.025] cursor-default overflow-hidden"
      >
        {/* Image Frame */}
        <div className="relative w-full aspect-[4/4.8] rounded-[1.4rem] max-[439px]:rounded-xl lg:rounded-[1rem] xl:rounded-[1.2rem] min-[1400px]:rounded-[1.4rem] overflow-hidden mb-5 max-[439px]:mb-3 lg:mb-2.5 xl:mb-3.5 min-[1400px]:mb-5 shadow-[0_6px_20px_rgba(73,44,40,0.07)] bg-white">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Name and Role */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl max-[439px]:text-[17px] sm:text-2xl lg:text-[15px] xl:text-[17px] min-[1400px]:text-2xl font-extrabold text-[#2d1e18] tracking-tight leading-snug">
            {member.name}
          </h3>
          <p className="text-sm max-[439px]:text-[12.5px] lg:!text-[11px] xl:!text-[12px] min-[1400px]:!text-sm font-bold text-[#047880] mt-1.5 max-[439px]:mt-0.5 lg:mt-0.5 xl:mt-1 min-[1400px]:mt-1.5 tracking-wide">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch swipe support for smooth mobile interaction
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0 && currentIndex < TEAM_MEMBERS.length - 1) {
        // Swiped left -> advance (images move left)
        setCurrentIndex((prev) => prev + 1);
      } else if (diffX < 0 && currentIndex > 0) {
        // Swiped right -> retreat (images move right)
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <section className="relative z-20 w-full py-16 max-[439px]:py-8 md:py-24 lg:py-12 xl:py-12 min-[1400px]:py-28 bg-ivory overflow-hidden">
      <div className="w-full px-6 max-[439px]:px-4 sm:px-10 md:px-12 lg:px-8 xl:px-12 min-[1400px]:px-20 max-w-[1340px] mx-auto">

        {/* ========================================================
            TOP SECTION HEADER (CENTERED)
            ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-14 max-[439px]:mb-6 sm:mb-16 lg:mb-5 xl:mb-7 min-[1400px]:mb-16">
          {/* Eyebrow Label */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 max-[439px]:mb-2 max-[439px]:text-[12px] lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4 lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px]"
          >
            THE PEOPLE BEHIND PRODBIZ
          </motion.p>

          {/* Main Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl max-[439px]:text-[23px] sm:text-4xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[40px] min-[1400px]:xl:text-[46px] font-extrabold text-[#492c28] mb-6 max-[439px]:mb-3 lg:mb-2 xl:mb-2.5 min-[1400px]:mb-6 leading-[1.18] max-[439px]:leading-snug lg:leading-[1.15] min-[1400px]:leading-[1.18] tracking-tight"
          >
            Meet the People Who<br />
            <span className="text-[#047880]">Lead Our Vision.</span>
          </motion.h2>

          {/* Descriptive Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#492c28]/85 text-base sm:text-lg leading-relaxed font-['Inter',sans-serif] max-w-5xl lg:max-w-2xl xl:max-w-3xl min-[1400px]:max-w-5xl mx-auto"
          >
            <p className="text-base max-[439px]:text-[13.5px] max-[439px]:leading-normal sm:text-lg lg:!text-[13px] xl:!text-[13px] min-[1400px]:!text-lg leading-relaxed lg:!leading-[1.5] xl:!leading-[1.5] min-[1400px]:leading-relaxed">
              Prodbiz is led by a team that brings together different skills, experience, and ideas.
              Each of us plays an important role in guiding the company, working with clients, and
              making sure every project moves in the right direction. Together, we work towards building
              strong relationships and delivering work that helps businesses move forward.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
            MOBILE VIEW: SINGLE ROW CAROUSEL WITH CONDITIONAL ARROWS & DOT PAGINATION
            ======================================================== */}
        <div className="block md:hidden w-full max-w-[340px] max-[439px]:max-w-[280px] mx-auto relative px-2">
          {/* Single Row Track */}
          <div className="overflow-hidden w-full rounded-[2.1rem] max-[439px]:rounded-2xl">
            <motion.div
              className="flex flex-row"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {TEAM_MEMBERS.map((member, index) => (
                <div key={member.id} className="w-full shrink-0">
                  <TeamCard3D member={member} index={index} isMobile />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left Arrow: Rendered on left side if images need to move right side (currentIndex > 0) */}
          <AnimatePresence initial={false}>
            {currentIndex > 0 && (
              <motion.button
                key="prev-team-member"
                initial={{ opacity: 0, scale: 0.8, x: -8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -8 }}
                transition={{ duration: 0.2 }}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="absolute -left-3 max-[439px]:-left-2 top-[38%] -translate-y-1/2 z-30 w-11 max-[439px]:w-8 h-11 max-[439px]:h-8 rounded-full bg-white/95 backdrop-blur-md shadow-[0_6px_20px_rgba(73,44,40,0.18)] border border-white flex items-center justify-center text-[#2d1e18] hover:bg-[#047880] hover:text-white active:scale-90 transition-all cursor-pointer [&>svg]:max-[439px]:w-4 [&>svg]:max-[439px]:h-4"
                aria-label="Previous team member"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Right Arrow: Rendered on right side if images need to move left side (currentIndex < TEAM_MEMBERS.length - 1) */}
          <AnimatePresence initial={false}>
            {currentIndex < TEAM_MEMBERS.length - 1 && (
              <motion.button
                key="next-team-member"
                initial={{ opacity: 0, scale: 0.8, x: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 8 }}
                transition={{ duration: 0.2 }}
                onClick={() => setCurrentIndex((prev) => Math.min(TEAM_MEMBERS.length - 1, prev + 1))}
                className="absolute -right-3 max-[439px]:-right-2 top-[38%] -translate-y-1/2 z-30 w-11 max-[439px]:w-8 h-11 max-[439px]:h-8 rounded-full bg-white/95 backdrop-blur-md shadow-[0_6px_20px_rgba(73,44,40,0.18)] border border-white flex items-center justify-center text-[#2d1e18] hover:bg-[#047880] hover:text-white active:scale-90 transition-all cursor-pointer [&>svg]:max-[439px]:w-4 [&>svg]:max-[439px]:h-4"
                aria-label="Next team member"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Dot Pagination at Bottom */}
          <div className="flex items-center justify-center gap-2.5 max-[439px]:gap-2 mt-6 max-[439px]:mt-4">
            {TEAM_MEMBERS.map((member, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={member.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to ${member.name}`}
                  className={`h-2.5 max-[439px]:h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 max-[439px]:w-5 bg-[#047880] shadow-[0_2px_8px_rgba(4,120,128,0.35)]"
                      : "w-2.5 max-[439px]:w-1.5 bg-[#492c28]/25 hover:bg-[#492c28]/45"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* ========================================================
            DESKTOP VIEW: 3-COLUMN 3D GLASSMORPHIC GRID
            ======================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-7 lg:gap-4 xl:gap-5 min-[1400px]:gap-9 max-w-5xl lg:max-w-[700px] xl:max-w-[800px] min-[1400px]:max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard3D key={member.id} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
