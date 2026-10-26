import Link from "next/link";
import HeroSlider from "@/components/home/HeroSlider";
import About from "@/components/home/About";
import OurWork from "@/components/home/OurWork";
import WhyProdbiz from "@/components/home/WhyProdbiz";
import HowWeWork from "@/components/home/HowWeWork";
import Services from "@/components/home/Services";
import Clients from "@/components/home/Clients";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSlider />
      <OurWork />
      <About />
      <HowWeWork />
      <WhyProdbiz />
      <Services />
      <Clients />
      <VideoTestimonials />
      <CtaSection />
    </main>
  );
}
