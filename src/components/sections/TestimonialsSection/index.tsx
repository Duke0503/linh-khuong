"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants/testimonials";
import SectionHeader from "@/components/common/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import RevealWrapper from "@/components/common/RevealWrapper";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="py-14 md:py-20 bg-gradient-to-br from-[#1e4d8c] to-[#153870]"
      aria-label="Đánh giá khách hàng"
    >
      <div className="max-w-7xl mx-auto px-4">
        <RevealWrapper direction="up">
        <SectionHeader
          eyebrow="Khách hàng nói gì"
          title={
            <>
              Khách Hàng Nói Gì Về{" "}
              <span className="text-[#f59e0b]">Linh Khương</span>?
            </>
          }
          light
        />
        </RevealWrapper>

        {/* Mobile: carousel */}
        <div className="relative lg:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-4">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="embla__slide px-1">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-[#1e4d8c] p-2 rounded-full transition-colors shadow-md"
            aria-label="Trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-[#1e4d8c] p-2 rounded-full transition-colors shadow-md"
            aria-label="Sau"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
