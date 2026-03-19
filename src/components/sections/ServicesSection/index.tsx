"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/constants/services";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "./ServiceCard";
import RevealWrapper from "@/components/common/RevealWrapper";

export default function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-14 md:py-20 bg-gray-50" aria-label="Dịch vụ chính">
      <div className="max-w-7xl mx-auto px-4">
        <RevealWrapper direction="up">
          <SectionHeader
            eyebrow="Chuyên nghiệp – Chất lượng – Uy tín"
            title="Dịch Vụ Chính"
          />
        </RevealWrapper>

        {/* Mobile / tablet carousel */}
        <RevealWrapper direction="up" delay={1} className="relative lg:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container" style={{ gap: "16px" }}>
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="embla__slide"
                  style={{ flex: "0 0 min(calc(50% - 8px), 260px)", minWidth: 0 }}
                >
                  <ServiceCard service={s} sizes="50vw" />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-[#1e4d8c] hover:text-white text-gray-700 p-2.5 rounded-full shadow-md transition-colors z-10 border border-gray-200"
            aria-label="Trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-[#1e4d8c] hover:text-white text-gray-700 p-2.5 rounded-full shadow-md transition-colors z-10 border border-gray-200"
            aria-label="Sau"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </RevealWrapper>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <RevealWrapper
              key={s.title}
              direction="up"
              delay={(i % 4) as 0 | 1 | 2 | 3 | 4}
            >
              <ServiceCard service={s} sizes="25vw" />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
