import Link from "next/link";
import HeroSlider from "@/components/home/HeroSlider";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      {/* DUMMY SECOND SECTION TO SHOW SCROLLING */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title mx-auto text-brown">What We Do Best</h2>
          </div>
          
          <div className="grid grid-3 gap-lg">
            <div className="card">
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-peach text-orange font-bold">01</div>
              <h3 className="text-xl mb-3 text-brown">Website Design</h3>
              <p className="text-muted">Beautiful, responsive, and high-converting websites tailored to your brand.</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-peach text-orange font-bold">02</div>
              <h3 className="text-xl mb-3 text-brown">SEO Optimization</h3>
              <p className="text-muted">Rank higher on search engines and attract more organic traffic to your site.</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-peach text-orange font-bold">03</div>
              <h3 className="text-xl mb-3 text-brown">Content Creation</h3>
              <p className="text-muted">Engaging and meaningful content that resonates with your target audience.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
