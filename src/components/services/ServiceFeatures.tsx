"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceFeaturesProps {
  features?: string[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <>
      {/* ── Desktop View (Clean 2-Column Grid, Untouched) ── */}
      <div className="hidden md:grid md:grid-cols-2 gap-y-3.5 gap-x-6 mb-12 w-full">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-[20px] h-[20px] rounded-full bg-[#f37636] flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-[#645c55] text-[0.95rem] font-medium">{item}</span>
          </div>
        ))}
      </div>

      {/* ── Mobile View (Single Row, Looping Continuously Right-to-Left) ── */}
      <div className="block md:hidden w-full overflow-hidden mb-10 py-1 relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <motion.div
          className="flex items-center gap-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...features, ...features].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/80 border border-[#f37636]/20 shadow-xs shrink-0 whitespace-nowrap"
            >
              <div className="w-[18px] h-[18px] rounded-full bg-[#f37636] flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[#43261a] text-[0.9rem] font-medium whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
