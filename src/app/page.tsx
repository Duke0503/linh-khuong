import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatActions from "@/components/common/FloatActions";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import VideoSection from "@/components/sections/VideoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[80px] pb-[64px] lg:pb-0">
        <div id="hero"><HeroSlider /></div>
        <div id="gioi-thieu"><AboutSection /></div>
        <div id="dich-vu"><ServicesSection /></div>
        <WhyChooseUs />
        <div id="du-an"><BeforeAfterSection /></div>
        <VideoSection />
        <TestimonialsSection />
        <div id="lien-he"><ContactSection /></div>
      </main>
      <Footer />
      <FloatActions />
    </>
  );
}
