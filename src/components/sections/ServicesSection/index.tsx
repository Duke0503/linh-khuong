"use client";

import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/constants/services";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "./ServiceCard";
import RevealWrapper from "@/components/common/RevealWrapper";

export default function ServicesSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplayRef.current]
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

        <RevealWrapper direction="up" delay={1} className="relative group">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="flex-none w-[78vw] sm:w-[46vw] md:w-[34vw] lg:w-[26vw] xl:w-[22vw] mr-4"
                >
                  <ServiceCard
                    service={service}
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 26vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 rounded-full bg-white shadow-md hover:bg-[#1e4d8c] hover:text-white text-gray-700 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Dịch vụ trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 rounded-full bg-white shadow-md hover:bg-[#1e4d8c] hover:text-white text-gray-700 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Dịch vụ tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </RevealWrapper>
      </div>
    </section>
  );
}
