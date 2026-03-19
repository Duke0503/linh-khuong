import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatActions from "@/components/common/FloatActions";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
// VideoSection: tạm ẩn — chưa có video thực tế
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        <div id="hero"><HeroSlider /></div>
        <div id="gioi-thieu"><AboutSection /></div>
        <div id="dich-vu"><ServicesSection /></div>
        <WhyChooseUs />
        <div id="du-an"><BeforeAfterSection /></div>
        {/* <VideoSection /> — bật lại khi có video thực tế */}
        <TestimonialsSection />
        <div id="lien-he"><ContactSection /></div>
      </main>
      <Footer />
      <FloatActions />
    </>
  );
}
