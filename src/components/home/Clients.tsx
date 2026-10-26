"use client";
import React from 'react';

const row1Clients = [
  { name: "HEALTHCARE+", logo: "/home-page/client-logos/shriswara.png" },
  { name: "HOMEOPATHY CARE", logo: "/home-page/client-logos/russh.png" },
  { name: "TECH SOLUTIONS", logo: "/home-page/client-logos/ricchhotels.png" },
  { name: "GROWING BIZ", logo: "/home-page/client-logos/esthetix.png" },
  { name: "REAL ESTATE", logo: "/home-page/client-logos/fireandtunes.png" },
  { name: "GLOBAL LOGISTICS", logo: "/home-page/client-logos/terracepond.png" },
  { name: "LOCAL CAFE", logo: "/home-page/client-logos/pranaa.png" },
  { name: "FINANCE HUB", logo: "/home-page/client-logos/padmavati.png" },
  { name: "ECO STORE", logo: "/home-page/client-logos/ayucare.png" },
];

const row2Clients = [
  { name: "PADMAVATI HOSPITAL", logo: "/home-page/client-logos/gvr.png" },
  { name: "PADMAVATI HOSPITAL", logo: "/home-page/client-logos/trcr.png" },
  { name: "THE ROYAL CLUB OF RIDERS", logo: "/home-page/client-logos/trini.png" },
  { name: "PADMAVATI HOSPITAL", logo: "/home-page/client-logos/tvv.png" },
  { name: "PADMAVATI HOSPITAL", logo: "/home-page/client-logos/govt.png" },
  { name: "PADMAVATI HOSPITAL", logo: "/home-page/client-logos/intendpitch.png" },
  { name: "PADMAVATI HOSPITAL", logo: "/home-page/client-logos/bluelan.png" },
  { name: "PADMAVATI HOSPITAL", logo: "/home-page/client-logos/neeraj.png" },
];

const Clients = () => {
  return (
    <section className="py-20 lg:py-[96px] min-[1400px]:py-28 bg-[#fffff0] relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">

        {/* Header */}
        <div className="text-center w-full max-w-[850px] lg:max-w-full min-[1400px]:max-w-[850px] mx-auto mb-8 lg:mb-6 xl:mb-7 min-[1400px]:mb-16 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4">
            <span className="w-8 h-[2px] bg-[#ff863c]"></span>
            <p className="text-[14px] lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px] font-extrabold text-[#ff863c] uppercase tracking-widest">CLIENTS</p>
          </div>
          <h2 className="w-full section-title lg:w-full lg:max-w-full lg:mx-auto lg:text-center min-[1400px]:max-w-[900px] min-[1400px]:mx-0 text-3xl sm:text-4xl md:text-5xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[56px] font-extrabold text-[#492c28] mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6 leading-[1.1] lg:leading-[1.15] min-[1400px]:leading-[1.1] tracking-tight">
            Businesses We’ve <span className="text-[#047880]">Worked With.</span>
          </h2>
          <p className="text-lg md:text-[19px] lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-[19px] text-[#492c28]/70 leading-relaxed lg:leading-normal xl:leading-normal min-[1400px]:leading-relaxed mx-auto max-w-[700px] lg:max-w-[580px] xl:max-w-[640px] min-[1400px]:max-w-[700px] font-medium">
            From healthcare and hospitality to homeopathy and other growing businesses, we’re proud to work with businesses across different industries.
          </p>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-8 lg:gap-4 xl:gap-5 min-[1400px]:gap-8 select-none pt-4 pb-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[70px] sm:before:w-[150px] before:bg-gradient-to-r before:from-[#fffff0] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[70px] sm:after:w-[150px] after:bg-gradient-to-l after:from-[#fffff0] after:to-transparent">

          {/* First Row (Left to Right) */}
          <div className="flex w-max animate-marquee-reverse gap-4 sm:gap-8 lg:gap-4 xl:gap-5 min-[1400px]:gap-8 items-center hover:[animation-play-state:paused]">
            {[...row1Clients, ...row1Clients, ...row1Clients].map((client, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center w-[116px] h-[116px] sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-[112px] lg:h-[112px] xl:w-[126px] xl:h-[126px] min-[1400px]:w-44 min-[1400px]:h-44 shrink-0 rounded-xl sm:rounded-2xl bg-white border-2 border-[#184a41] shadow-[0_0_15px_rgba(24,74,65,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(24,74,65,0.4)] hover:-translate-y-2 group p-4 sm:p-6 lg:p-3 xl:p-3.5 min-[1400px]:p-6"
              >
                {/* Logo Image */}
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain opacity-100 transition-all duration-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_6px_10px_rgba(0,0,0,0.2)] group-hover:scale-110 relative z-10"
                />
              </div>
            ))}
          </div>

          {/* Second Row (Right to Left) */}
          <div className="flex w-max animate-marquee gap-4 sm:gap-8 lg:gap-4 xl:gap-5 min-[1400px]:gap-8 items-center hover:[animation-play-state:paused]">
            {[...row2Clients, ...row2Clients, ...row2Clients].map((client, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center w-[116px] h-[116px] sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-[112px] lg:h-[112px] xl:w-[126px] xl:h-[126px] min-[1400px]:w-44 min-[1400px]:h-44 shrink-0 rounded-xl sm:rounded-2xl bg-white border-2 border-[#184a41] shadow-[0_0_15px_rgba(24,74,65,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(24,74,65,0.4)] hover:-translate-y-2 group p-2 sm:p-2 lg:p-1.5 xl:p-2 min-[1400px]:p-2"
              >
                {/* Logo Image */}
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain opacity-100 transition-all duration-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_6px_10px_rgba(0,0,0,0.2)] group-hover:scale-110 relative z-10"
                />
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Inline styles for marquee animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 45s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Clients;
