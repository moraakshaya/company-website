"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FolderHeart, Users, PenTool, Globe } from "lucide-react";

function Counter({ from = 0, to, suffix }: { from?: number; to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, suffix]);

  return (
    <span
      ref={nodeRef}
      className="font-serif font-bold text-3xl sm:text-4xl md:text-[44px] lg:text-[22px] xl:text-[25px] min-[1400px]:text-[48px] text-white tracking-tight leading-none"
    >
      {to}{suffix}
    </span>
  );
}

const milestones = [
  {
    icon: FolderHeart,
    blobColor: "bg-[#fde2cb]",
    sparkleColor: "text-[#ff863c]",
    value: 15,
    suffix: "+",
    label: "Projects Completed"
  },
  {
    icon: Users,
    blobColor: "bg-[#dcd1de]",
    sparkleColor: "text-[#b8aab9]",
    value: 20,
    suffix: "+",
    label: "Business Served"
  },
  {
    icon: PenTool,
    blobColor: "bg-[#c8e6df]",
    sparkleColor: "text-[#047880]",
    value: 300,
    suffix: "+",
    label: "Creative Designs"
  },
  {
    icon: Globe,
    blobColor: "bg-[#fde2cb]",
    sparkleColor: "text-[#ff863c]",
    value: 10,
    suffix: "+",
    label: "Website Built"
  }
];

export default function Milestones() {
  return (
    <section className="relative z-20 w-full py-8 md:py-14 lg:py-12 xl:py-12 min-[1400px]:py-14 bg-ivory">
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-4 xl:px-6 min-[1400px]:px-20 max-w-[1340px] lg:max-w-[800px] xl:max-w-[900px] min-[1400px]:max-w-[1340px] mx-auto">
        <div className="relative bg-[#174d44] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[1.4rem] xl:rounded-[1.6rem] min-[1400px]:rounded-[2.5rem] py-10 px-4 sm:py-12 sm:px-6 md:py-14 md:px-8 lg:py-5 lg:px-3 xl:py-6 xl:px-4 min-[1400px]:py-14 min-[1400px]:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0 relative">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center relative px-2 sm:px-4 lg:px-2 xl:px-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Vertical Divider for Desktop */}
                {index !== milestones.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 lg:h-9 xl:h-10 min-[1400px]:h-20 bg-white/15" />
                )}

                {/* Blob Badge with Icon & 3 Radiant Rays */}
                <div className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] lg:w-[38px] lg:h-[38px] xl:w-[42px] xl:h-[42px] min-[1400px]:w-[68px] min-[1400px]:h-[68px] flex items-center justify-center mb-5 sm:mb-6 lg:mb-2 xl:mb-2.5 min-[1400px]:mb-6">
                  {/* Organic Pastel Blob */}
                  <div
                    className={`absolute inset-0 w-full h-full ${item.blobColor} rounded-[42%_58%_70%_30%/45%_45%_55%_55%] transform rotate-12 shadow-sm`}
                  />

                  {/* Icon */}
                  <div className="relative z-10 text-[#174d44]">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-8 min-[1400px]:h-8" strokeWidth={2.4} />
                  </div>

                  {/* 3 Radiating Doodle Rays on Top-Right */}
                  <div className="absolute -top-1 -right-2.5 sm:-right-3 lg:-top-0.5 lg:-right-2 xl:-top-1 xl:-right-2.5 min-[1400px]:-top-1 min-[1400px]:-right-3 pointer-events-none select-none z-20">
                    <svg
                      className={`w-5 h-5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 min-[1400px]:w-5 min-[1400px]:h-5 overflow-visible ${item.sparkleColor}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <line x1="5" y1="11" x2="15" y2="4" />
                      <line x1="7" y1="14" x2="17" y2="13" />
                      <line x1="6" y1="17" x2="13" y2="20" />
                    </svg>
                  </div>
                </div>

                {/* Stat Number */}
                <div className="mb-1.5 sm:mb-2 lg:mb-0.5 xl:mb-1 min-[1400px]:mb-2">
                  <Counter from={0} to={item.value} suffix={item.suffix} />
                </div>

                {/* Stat Label */}
                <p className="text-[#f5f8f6]/90 font-serif text-sm sm:text-[15px] md:text-base lg:!text-[10.5px] xl:!text-[11.5px] min-[1400px]:!text-base font-medium tracking-normal leading-tight lg:!leading-tight min-[1400px]:leading-normal">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

