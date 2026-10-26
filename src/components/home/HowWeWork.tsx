import React from 'react';
import Link from 'next/link';

const HowWeWork = () => {
  return (
    <section className="py-20 lg:py-[96px] min-[1400px]:py-32 bg-[#fffff0] relative overflow-hidden">
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        
        {/* Header Block */}
        <div className="text-center w-full max-w-[800px] lg:max-w-full min-[1400px]:max-w-[800px] mx-auto mb-16 lg:mb-4 xl:mb-5 min-[1400px]:mb-20">
          <p className="section-label mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4 inline-flex lg:text-[11px] xl:text-[12px] min-[1400px]:text-[14px]">HOW WE WORK</p>
          <h2 className="w-full section-title lg:w-full lg:max-w-full lg:mx-auto lg:text-center min-[1400px]:max-w-[900px] min-[1400px]:mx-0 text-3xl sm:text-4xl md:text-5xl lg:text-[28px] xl:text-[32px] min-[1400px]:text-[52px] font-extrabold text-[#492c28] mb-6 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-6 leading-[1.1] lg:leading-[1.15] min-[1400px]:leading-[1.1] tracking-tight md:whitespace-nowrap">
            Here&apos;s How <span className="text-[#047880]">We Do It<span className="text-[#ff863c]">.</span></span>
          </h2>
          <p className="text-lg md:text-xl lg:text-[13px] xl:text-[13.5px] min-[1400px]:text-xl text-[#492c28]/80 leading-relaxed lg:leading-normal xl:leading-normal min-[1400px]:leading-relaxed max-w-[750px] lg:max-w-[650px] xl:max-w-[720px] min-[1400px]:max-w-[750px] mx-auto font-medium">
            Whether you need a single creative, a new brand identity, a website, social media support, digital marketing, or a complete digital solution — we start by understanding what your business actually needs.
          </p>
        </div>


        {/* Timeline Section */}
        <div className="relative mb-20 lg:mb-6 xl:mb-8 min-[1400px]:mb-28 max-w-[1200px] mx-auto px-2 lg:px-0">
          {/* Grid Layout for Steps */}
          <div className="flex flex-col gap-12 lg:gap-6 xl:gap-8 min-[1400px]:gap-8 lg:grid lg:grid-cols-3 relative z-10">
            {/* Row 1 */}
            <StepItem number="01" title="Tell Us What You Need" subtitle="Start With Your Requirement" hasDesktopLine>
              <p>Tell us about your business and what you&apos;re looking for.</p>
              <p className="font-bold text-[#114e4b] mt-3 lg:mt-1.5 xl:mt-2 min-[1400px]:mt-3">Small requirement or complete project — just tell us what you need.</p>
              <div className="text-[15px] lg:text-[12px] xl:text-[13px] min-[1400px]:text-[15px] italic font-medium space-y-1 mt-4 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-4 text-[#ff863c]">
                <p>&ldquo;I need a new logo.&rdquo;</p>
                <p>&ldquo;We need social media posts.&rdquo;</p>
                <p>&ldquo;I need a website.&rdquo;</p>
                <p>&ldquo;We want more customers to find us online.&rdquo;</p>
              </div>
            </StepItem>
            
            <StepItem number="02" title="Understand & Plan" subtitle="We Find the Right Approach" hasDesktopLine>
              <p>We understand your business, goals and requirements, then suggest the right solution.</p>
              <p className="font-bold text-[#114e4b] mt-4 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-4">One-time work &bull; Complete projects &bull; Ongoing support</p>
            </StepItem>
            
            <StepItem number="03" title="Create" subtitle="We Turn the Plan Into Reality">
              <p>Our team gets to work on the required design, development, content or marketing — based on your project.</p>
              <p className="font-bold text-[#114e4b] mt-4 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-4">From one creative to a complete digital solution.</p>
            </StepItem>
            
            {/* Row 2 (offset in grid to match the user schema) */}
            <div className="hidden lg:block" /> {/* Empty cell to offset 04 to center */}
            <StepItem number="04" title="Review & Refine" subtitle="Your Feedback Matters" hasDesktopLine>
              <p>We share the work with you, collect your feedback and make the required refinements before finalizing it.</p>
              <p className="font-bold text-[#114e4b] mt-4 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-4">We work with you, not just for you.</p>
            </StepItem>
            
            <StepItem number="05" title="Deliver & Support" subtitle="Ready to Go Further" hasMobileLine={false}>
              <p>Once approved, we deliver or launch your project.</p>
              <p className="mt-4 lg:mt-2 xl:mt-2.5 min-[1400px]:mt-4">Need ongoing help? We can continue supporting your <strong className="font-bold text-[#114e4b]">social media, SEO, advertising, website and creative needs.</strong></p>
            </StepItem>
          </div>
        </div>

      </div>
    </section>
  );
};

// Helper component for steps
const StepItem = ({ number, title, subtitle, children, hasDesktopLine = false, hasMobileLine = true }: { number: string, title: React.ReactNode, subtitle?: React.ReactNode, children?: React.ReactNode, hasDesktopLine?: boolean, hasMobileLine?: boolean }) => {
  return (
    <div className="flex lg:flex-col gap-6 lg:gap-4 xl:gap-5 min-[1400px]:gap-8 items-start lg:items-center relative group/step">
      {/* Mobile vertical line */}
      {hasMobileLine && (
        <div className="lg:hidden absolute top-[56px] bottom-[-48px] left-[27px] w-[2px] bg-[#114e4b]/20 z-0" />
      )}
      
      {/* Desktop horizontal line */}
      {hasDesktopLine && (
        <div className="hidden lg:block absolute top-[27px] lg:top-[22px] xl:top-[24px] min-[1400px]:top-[27px] left-[50%] w-full h-[2px] bg-[#114e4b]/20 z-0" />
      )}

      {/* The node */}
      <div className="w-14 h-14 lg:w-11 lg:h-11 xl:w-12 xl:h-12 min-[1400px]:w-14 min-[1400px]:h-14 shrink-0 rounded-full bg-white border-[3px] border-[#114e4b] text-[#114e4b] flex items-center justify-center font-extrabold text-xl lg:text-base xl:text-lg min-[1400px]:text-xl ring-8 lg:ring-4 xl:ring-6 min-[1400px]:ring-8 ring-[#fffff0] relative z-10 transition-transform duration-300 group-hover/step:scale-110 group-hover/step:bg-[#114e4b] group-hover/step:text-white">
        {number}
      </div>
      
      {/* The content */}
      <div className="text-left lg:text-center pt-2 lg:pt-0 w-full lg:max-w-[320px]">
        <h4 className="text-xl md:text-2xl lg:text-[16px] xl:text-[18px] min-[1400px]:text-2xl font-extrabold text-[#492c28] leading-snug mb-2 lg:mb-1 xl:mb-1 min-[1400px]:mb-2">{title}</h4>
        {subtitle && <p className="font-extrabold text-[#114e4b] mb-4 lg:mb-1.5 xl:mb-2 min-[1400px]:mb-4 text-lg lg:text-[13px] xl:text-[14px] min-[1400px]:text-lg">{subtitle}</p>}
        <div className="text-[#492c28]/80 text-base lg:text-[12px] xl:text-[13px] min-[1400px]:text-base leading-relaxed [&_p]:text-base lg:[&_p]:text-[12px] xl:[&_p]:text-[13px] min-[1400px]:[&_p]:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
