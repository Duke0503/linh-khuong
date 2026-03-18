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
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[88px] md:pt-[112px]">
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <BeforeAfterSection />
        <VideoSection />
        <TestimonialsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatActions />
    </>
  );
}
