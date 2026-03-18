"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "http://maihienngoctruc.com/thumbs/1920x920x1/upload/photo/z752373709798756f60bb09fe4cfb00416aa63a7fc78e6-1770783791.jpg.webp",
    alt: "Mái Hiên Mái Xếp Di Động Linh Khương",
    title: "Mái Hiên – Mái Xếp",
    subtitle: "Di Động Cao Cấp",
    desc: "Giải pháp che nắng mưa linh hoạt, bền đẹp cho nhà ở, quán cà phê, nhà hàng",
  },
  {
    src: "http://maihienngoctruc.com/thumbs/1920x920x1/upload/photo/unnamed-1770785430.jpg.webp",
    alt: "Thi Công Mái Che Chuyên Nghiệp",
    title: "Thi Công Chuyên Nghiệp",
    subtitle: "Bảo Hành Dài Hạn",
    desc: "Đội ngũ thợ lành nghề, vật liệu cao cấp, thi công đúng kỹ thuật tại TP.HCM",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden" aria-label="Hero banner">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div className="embla__slide relative" key={i}>
              <div className="relative w-full h-[55vw] max-h-[700px] min-h-[300px] md:min-h-[420px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
                    <div className="max-w-xl">
                      <div className="inline-block bg-[#1e4d8c] text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-3 md:mb-4 animate-fade-in">
                        CƠ KHÍ LINH KHƯƠNG
                      </div>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-1 md:mb-2">
                        {slide.title}
                      </h1>
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#f59e0b] mb-3 md:mb-4">
                        {slide.subtitle}
                      </h2>
                      <p className="text-sm md:text-base text-white/90 mb-5 md:mb-7 leading-relaxed max-w-md">
                        {slide.desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="tel:0972677687"
                          className="flex items-center gap-2 bg-[#1e4d8c] hover:bg-[#153870] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-colors shadow-lg"
                        >
                          <Phone className="w-4 h-4" />
                          Gọi ngay
                        </a>
                        <Link
                          href="/san-pham"
                          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-colors"
                        >
                          Xem sản phẩm
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1e4d8c]/90 backdrop-blur-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-4 divide-x divide-white/30">
          {[
            { num: "10+", label: "Năm kinh nghiệm" },
            { num: "500+", label: "Công trình đã thi công" },
            { num: "100%", label: "Khách hàng hài lòng" },
            { num: "24/7", label: "Hỗ trợ khách hàng" },
          ].map((stat) => (
            <div key={stat.label} className="text-center text-white px-4">
              <div className="text-xl font-bold">{stat.num}</div>
              <div className="text-xs opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
