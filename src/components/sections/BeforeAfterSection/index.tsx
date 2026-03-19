"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/common/RevealWrapper";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 2), 98));
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section className="py-14 md:py-20 bg-gray-900" aria-label="Trước và sau thi công">
      <div className="max-w-7xl mx-auto px-4">
        <RevealWrapper direction="up" className="text-center mb-10">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-2">
            Kết quả thực tế
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Trước Và Sau Thi Công
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Kéo thanh trượt để so sánh — Chuyên nghiệp – Chất lượng – Uy tín
          </p>
          <div className="w-16 h-1 bg-[#1e4d8c] rounded-full mx-auto mt-3" />
        </RevealWrapper>

        {/* Before/After Slider */}
        <div
          ref={containerRef}
          className="relative select-none overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize mx-auto max-w-4xl"
          style={{ WebkitUserSelect: "none" }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* After image (full width, bottom layer) */}
          <div className="relative w-full aspect-[2/1] md:aspect-[3/1] min-h-[200px]">
            <Image
              src="http://maihienngoctruc.com/thumbs/1200x415x1/upload/news/after-1770887971.png.webp"
              alt="Sau thi công"
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute bottom-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              SAU
            </div>
          </div>

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative w-full h-full" style={{ width: `${100 / (sliderPos / 100)}%` }}>
              <Image
                src="http://maihienngoctruc.com/thumbs/1200x415x1/upload/news/befo-1770887564.png.webp"
                alt="Trước thi công"
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <div className="absolute bottom-3 left-4 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              TRƯỚC
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#1e4d8c]">
              <span className="text-[#1e4d8c] text-xs font-bold select-none">⟺</span>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-4">
          ← Kéo để so sánh trước / sau →
        </p>
      </div>
    </section>
  );
}
