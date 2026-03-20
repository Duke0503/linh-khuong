import { Header, Footer } from "@/shared/components/layout";
import { FloatActions, TrustBar } from "@/shared/components/common";
import {
  HeroSlider,
  ServicesSection,
  WhyChooseUs,
  BeforeAfterSection,
  TestimonialsSection,
  ContactSection,
} from "@/features/landing/components";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        <div id="hero"><HeroSlider /></div>
        <TrustBar />
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
