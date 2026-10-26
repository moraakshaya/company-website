"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-16 lg:py-[96px] min-[1400px]:py-24 bg-[#fffff0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 relative z-10">

        {/* CTA Card */}
        <div className="relative rounded-[24px] bg-[#184a41] p-5 sm:p-8 md:p-12 lg:py-8 lg:px-10 xl:py-10 xl:px-14 min-[1400px]:py-10 min-[1400px]:px-16 flex flex-col shadow-xl min-h-[400px] lg:min-h-[350px] xl:min-h-[380px] min-[1400px]:min-h-[400px] justify-center overflow-hidden lg:overflow-visible">

          {/* Main Content (Text & Buttons) */}
          <div className="w-full lg:max-w-[55%] xl:max-w-[52%] min-[1400px]:max-w-none text-left relative z-10 flex flex-col pt-4 lg:pt-0 min-[1400px]:pt-4 pointer-events-none">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[50px] font-bold text-white mb-6 lg:mb-2.5 xl:mb-3 min-[1400px]:mb-6 !leading-[1.15] tracking-tight max-w-[900px] pointer-events-auto">
              Let’s Build Something That Works for <span className="text-[#ff863c]">Your Business.</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-base md:text-[17px] lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-[17px] text-white/80 leading-relaxed lg:leading-normal xl:leading-normal min-[1400px]:leading-relaxed max-w-[500px] mb-4 lg:mb-2 xl:mb-2.5 min-[1400px]:mb-4 font-medium pointer-events-auto">
              Whether you need a single creative, a new website, stronger branding, better online visibility, or a complete digital solution — let's talk about what your business needs.
            </p>
            <p className="text-base md:text-[17px] lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-[17px] text-white/90 font-bold max-w-[500px] mb-8 lg:mb-5 xl:mb-6 min-[1400px]:mb-8 pointer-events-auto">
              Have a project in mind? Let's make it happen.
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-4 relative z-10 w-full sm:w-auto pointer-events-auto">

              {/* Secondary Button (Hollow) - Talk to Us */}
              <Link
                href="/contact"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-between gap-2 sm:gap-5 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-5 border-[1.5px] border-white/90 text-white pl-3.5 sm:pl-7 pr-1 sm:pr-1.5 lg:pl-3.5 lg:pr-1 xl:pl-4 xl:pr-1.5 min-[1400px]:pl-7 min-[1400px]:pr-1.5 h-[48px] sm:h-[56px] lg:h-[36px] xl:h-[38px] min-[1400px]:h-[56px] rounded-full font-extrabold text-[12.5px] sm:text-[16px] lg:text-[12px] xl:text-[13px] min-[1400px]:text-[16px] tracking-wide hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Talk to Us</span>
                <div className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[28px] lg:h-[28px] xl:w-[30px] xl:h-[30px] min-[1400px]:w-[44px] min-[1400px]:h-[44px] rounded-full border-[2px] border-white flex items-center justify-center bg-gradient-to-br from-[#126b64] to-[#052b29] shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Telephone%20Receiver.png"
                    alt="Phone"
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 min-[1400px]:w-6 min-[1400px]:h-6 object-contain drop-shadow-lg"
                  />
                </div>
              </Link>

              {/* Primary Button (Orange) - Start Your Project */}
              <Link
                href="/contact"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-between gap-2 sm:gap-5 lg:gap-2.5 xl:gap-3 min-[1400px]:gap-5 bg-[#ff863c] text-white pl-3.5 sm:pl-7 pr-1 sm:pr-1.5 lg:pl-3.5 lg:pr-1 xl:pl-4 xl:pr-1.5 min-[1400px]:pl-7 min-[1400px]:pr-1.5 h-[48px] sm:h-[56px] lg:h-[36px] xl:h-[38px] min-[1400px]:h-[56px] rounded-full font-extrabold text-[12.5px] sm:text-[16px] lg:text-[12px] xl:text-[13px] min-[1400px]:text-[16px] tracking-wide hover:bg-[#f27b32] transition-all active:scale-95 shadow-lg whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <div className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[28px] lg:h-[28px] xl:w-[30px] xl:h-[30px] min-[1400px]:w-[44px] min-[1400px]:h-[44px] rounded-full border-[2px] border-white flex items-center justify-center bg-gradient-to-br from-[#ffa46b] to-[#c75000] shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0">
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png"
                    alt="Rocket"
                    className="w-5 h-5 sm:w-7 sm:h-7 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 min-[1400px]:w-7 min-[1400px]:h-7 object-contain drop-shadow-lg scale-110 translate-x-[1px] -translate-y-[1px]"
                  />
                </div>
              </Link>

            </div>
          </div>

          {/* Right Column (Concentric Semi-circles Graphic Background) */}
          {/* This is positioned absolutely relative to the main CTA Card to avoid clipping on the left and guarantee perfect bottom alignment */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px] pointer-events-none z-0">
            <div className="absolute bottom-0 right-0 w-full lg:w-[50%] flex justify-center translate-y-1/2 z-0">
              <div className="relative w-[600px] h-[600px] lg:w-[500px] lg:h-[500px] xl:w-[580px] xl:h-[580px] min-[1400px]:w-[700px] min-[1400px]:h-[700px]">
                {/* Concentric Circles Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-white/[0.03] border border-white/10 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="absolute w-[420px] h-[420px] lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] min-[1400px]:w-[500px] min-[1400px]:h-[500px] rounded-full bg-white/[0.04] border border-white/10 shadow-[inset_0_0_80px_rgba(255,255,255,0.03)]"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
                    className="absolute w-[240px] h-[240px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px] min-[1400px]:w-[300px] min-[1400px]:h-[300px] rounded-full bg-white/[0.05] border border-white/10 shadow-[inset_0_0_60px_rgba(255,255,255,0.04)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Icons (Mathematically placed on tracks) */}
          {/* Icons are outside the overflow-hidden container so they can pop out of the borders! */}
          <div className="absolute bottom-0 right-0 w-full lg:w-[50%] flex justify-center translate-y-1/2 z-[1] lg:z-10 pointer-events-none opacity-20 sm:opacity-25 lg:opacity-100 transition-opacity duration-300">
            <div className="relative w-[600px] h-[600px] lg:w-[500px] lg:h-[500px] xl:w-[580px] xl:h-[580px] min-[1400px]:w-[700px] min-[1400px]:h-[700px]">

              {/* Floating Icons (Mathematically placed on tracks) */}

              {/* Middle Track - Icon 1 */}
              <div className="absolute top-[35%] left-[18%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none lg:pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-500">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}>
                  <img src="/home-page/final-cta/img-4.png" alt="Creative Design" className="w-[60px] h-[60px] lg:w-[46px] lg:h-[46px] xl:w-[52px] xl:h-[52px] min-[1400px]:w-[60px] min-[1400px]:h-[60px] object-contain drop-shadow-xl animate-float [animation-delay:0ms]" />
                </motion.div>
              </div>

              {/* Inner Track - Icon 2 */}
              <div className="absolute top-[32%] left-[40%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none lg:pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-500">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}>
                  <img src="/home-page/final-cta/img-3.png" alt="Visibility" className="w-[60px] h-[60px] lg:w-[46px] lg:h-[46px] xl:w-[52px] xl:h-[52px] min-[1400px]:w-[60px] min-[1400px]:h-[60px] object-contain drop-shadow-xl animate-float [animation-delay:500ms]" />
                </motion.div>
              </div>

              {/* Middle Track - Icon 3 */}
              <div className="absolute top-[16%] right-[28%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none lg:pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-500">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}>
                  <img src="/home-page/final-cta/img-2.png" alt="Website" className="w-[60px] h-[60px] lg:w-[58px] lg:h-[58px] xl:w-[68px] xl:h-[68px] min-[1400px]:w-[80px] min-[1400px]:h-[80px] object-contain drop-shadow-xl animate-float [animation-delay:1000ms]" />
                </motion.div>
              </div>

              {/* Inner Track Top - Icon 5 */}
              <div className="absolute left-[50%] lg:left-[70%] top-[calc(50%-120px)] lg:top-[calc(65%-150px)] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none lg:pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-500">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}>
                  <img src="/home-page/final-cta/img-7.png" alt="Growth" className="w-[60px] h-[60px] lg:w-[58px] lg:h-[58px] xl:w-[68px] xl:h-[68px] min-[1400px]:w-[80px] min-[1400px]:h-[80px] object-contain drop-shadow-xl animate-float [animation-delay:2000ms]" />
                </motion.div>
              </div>

              {/* Outer Track - Icon 6 */}
              <div className="absolute top-[2%] right-[52%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none lg:pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-500">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}>
                  <img src="/home-page/final-cta/img-6.png" alt="Social Media" className="w-[60px] h-[60px] lg:w-[46px] lg:h-[46px] xl:w-[52px] xl:h-[52px] min-[1400px]:w-[60px] min-[1400px]:h-[60px] object-contain drop-shadow-xl animate-float [animation-delay:2500ms]" />
                </motion.div>
              </div>

              {/* Outer Track Bottom Right - Icon 7 */}
              <div className="absolute top-[20%] right-[-0%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none lg:pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-500">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}>
                  <img src="/home-page/final-cta/img-5.png" alt="Social Media" className="w-[60px] h-[60px] lg:w-[46px] lg:h-[46px] xl:w-[52px] xl:h-[52px] min-[1400px]:w-[60px] min-[1400px]:h-[60px] object-contain drop-shadow-xl animate-float [animation-delay:3000ms]" />
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
