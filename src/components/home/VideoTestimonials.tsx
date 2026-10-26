"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, title: 'Dr. Naveen Reddy', company: 'Managing Director,\nRussh Super\nSpeciality Hospital', videoUrl: '/home-page/video-testinomials/video-1.mp4' },
  { id: 2, title: 'Dr. Sreedhar Reddy', company: 'Co-Founder, Ricch\nHotels', videoUrl: '/home-page/video-testinomials/video-2.mp4' },
  { id: 3, title: 'Dr. Bhaskar Reddy', company: 'Consultant\nPediatrician', videoUrl: '/home-page/video-testinomials/video-3.mp4' },
  { id: 4, title: 'Dr. M. Swetha', company: 'Managing Partner,\nShri Swaraa\nMultispeciality\nHospital', videoUrl: '/home-page/video-testinomials/video-4.mp4' },
  { id: 5, title: 'Dr. Sridhar', company: 'Padmavathi Hospitals', videoUrl: '/home-page/video-testinomials/video-5.mp4' },
];

const VideoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Center on 3rd item
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Reset playing state when index changes
  useEffect(() => {
    if (playingIndex !== null && playingIndex !== currentIndex) {
      if (videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex]!.pause();
      }
      setPlayingIndex(null);
    }
  }, [currentIndex, playingIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-[96px] min-[1400px]:py-28 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">

        {/* Header */}
        <div className="text-center w-full max-w-[850px] lg:max-w-full min-[1400px]:max-w-[850px] mx-auto mb-14 lg:mb-4 xl:mb-5 min-[1400px]:mb-20 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4">
            <span className="w-8 h-[2px] bg-[#ff863c]"></span>
            <p className="text-[14px] lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px] font-extrabold text-[#ff863c] uppercase tracking-widest">Video Testimonials</p>
            {/* <span className="w-8 h-[2px] bg-[#ff863c]"></span> */}
          </div>
          <h2 className="w-full section-title lg:w-full lg:max-w-full lg:mx-auto lg:text-center min-[1400px]:max-w-[900px] min-[1400px]:mx-0 text-3xl sm:text-4xl md:text-5xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[56px] font-extrabold text-[#492c28] mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6 leading-[1.1] lg:leading-[1.15] min-[1400px]:leading-[1.1] tracking-tight">
            Real Stories. <span className="text-[#047880]">Real Results.</span>
          </h2>
          <p className="text-xl lg:text-[13.5px] xl:text-[15px] min-[1400px]:text-xl text-[#047880] font-bold italic mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4">
            "Here’s what our clients say"
          </p>
          <p className="text-lg md:text-[19px] lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-[19px] text-[#492c28]/70 leading-relaxed lg:leading-normal xl:leading-normal min-[1400px]:leading-relaxed mx-auto max-w-[700px] lg:max-w-[650px] xl:max-w-[700px] min-[1400px]:max-w-[700px] font-medium">
            Hear directly from our clients about their experience working with Prodbiz and how our solutions helped their businesses.
          </p>
        </div>

        {/* Coverflow Slider */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[350px] xl:h-[380px] min-[1400px]:h-[650px] flex items-center justify-center">

          {testimonials.map((item, index) => {

            // Calculate relative distance from center
            let diff = index - currentIndex;

            // Handle wrap around for infinite looping visual
            const half = Math.floor(testimonials.length / 2);
            if (diff > half) diff -= testimonials.length;
            if (diff < -half) diff += testimonials.length;

            const absDiff = Math.abs(diff);
            const isCenter = diff === 0;

            // Positioning Logic
            const xOffset = diff * 105; // percentage of its own width
            const scale = 1 - absDiff * 0.15; // 1, 0.85, 0.7
            const opacity = isCenter ? 1 : Math.max(0.3, 1 - absDiff * 0.4);
            const zIndex = 50 - absDiff;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: `${xOffset}%`,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(index);
                }}
                className={`absolute w-[60%] sm:w-[40%] md:w-[30%] lg:w-[185px] xl:w-[205px] min-[1400px]:w-[22%] aspect-[9/16] rounded-[2rem] lg:rounded-[1.25rem] xl:rounded-[1.5rem] min-[1400px]:rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.15)] bg-white ${isCenter ? 'border-2 border-white' : 'border border-transparent'}`}
              >

                {/* Visual Fading Overlay for side cards */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-white/40 z-30 transition-opacity duration-300 pointer-events-none"></div>
                )}

                {/* Dark Gradient Overlay - fades when playing */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#184a41]/60 to-[#047880]/60 z-10 transition-opacity duration-300 ${isCenter && playingIndex !== index ? 'opacity-40' : 'opacity-10'}`}></div>

                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={item.videoUrl}
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Play/Pause Area */}
                <div
                  className={`absolute inset-0 z-30 transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isCenter) {
                      if (playingIndex === index) {
                        videoRefs.current[index]?.pause();
                        setPlayingIndex(null);
                      } else {
                        videoRefs.current[index]?.play();
                        if (videoRefs.current[index]) {
                          videoRefs.current[index]!.muted = false; // unmute on explicit play
                        }
                        setPlayingIndex(index);
                      }
                    }
                  }}
                >
                  <div className={`
                    absolute transition-all duration-500 shadow-xl border border-white/30 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer group hover:scale-110
                    ${playingIndex === index
                      ? 'bottom-4 right-4 md:bottom-5 md:right-5 lg:bottom-3 lg:right-3 min-[1400px]:bottom-5 min-[1400px]:right-5 w-10 h-10 md:w-12 md:h-12 lg:w-8 lg:h-8 xl:w-9 xl:h-9 min-[1400px]:w-12 min-[1400px]:h-12 opacity-60 hover:opacity-100'
                      : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-12 lg:h-12 xl:w-14 xl:h-14 min-[1400px]:w-20 min-[1400px]:h-20 opacity-100'}
                  `}>
                    <div className="bg-white rounded-full flex items-center justify-center text-[#184a41] shadow-md transition-transform duration-300 w-[75%] h-[75%] group-hover:scale-95">
                      {playingIndex === index ? (
                        <svg className="w-[45%] h-[45%]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                      ) : (
                        <svg className="w-[50%] h-[50%] ml-[5%]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tag/Info overlay - left bottom */}
                <div className={`absolute bottom-0 left-0 w-full p-4 md:p-5 lg:p-3 xl:p-3.5 min-[1400px]:p-5 pt-16 lg:pt-10 min-[1400px]:pt-16 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 pointer-events-none ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-col items-start w-full pr-12 md:pr-16 lg:pr-8 xl:pr-10 min-[1400px]:pr-16 drop-shadow-lg">
                    <p className="text-white font-extrabold text-[16px] md:text-[19px] lg:text-[13px] xl:text-[14px] min-[1400px]:text-[19px] leading-tight mb-1">{item.title}</p>
                    <p className="text-white font-semibold text-[13px] md:text-[15px] lg:text-[10px] xl:text-[11px] min-[1400px]:text-[15px] leading-snug whitespace-pre-line opacity-90">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-3 xl:left-5 min-[1400px]:left-[5%] z-50 w-10 h-10 md:w-12 md:h-12 lg:w-9 lg:h-9 xl:w-10 xl:h-10 min-[1400px]:w-12 min-[1400px]:h-12 rounded-full bg-[#126b64] text-white flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 min-[1400px]:w-6 min-[1400px]:h-6 drop-shadow-sm pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-3 xl:right-5 min-[1400px]:right-[5%] z-50 w-10 h-10 md:w-12 md:h-12 lg:w-9 lg:h-9 xl:w-10 xl:h-10 min-[1400px]:w-12 min-[1400px]:h-12 rounded-full bg-[#126b64] text-white flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 min-[1400px]:w-6 min-[1400px]:h-6 drop-shadow-sm pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

        </div>

      </div>
    </section>
  );
};

export default VideoTestimonials;
