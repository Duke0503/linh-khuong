"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn as ZoomInIcon,
  ZoomOut,
  RotateCcw,
  RotateCw,
} from "lucide-react";
import RevealWrapper from "@/components/common/RevealWrapper";

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
}

const GALLERY: GalleryItem[] = [
  { src: "/products/mai-xep-san-tennis.jpg",       alt: "Thi công mái xếp sân tennis tại TP.HCM",          label: "Mái Xếp Sân Tennis"   },
  { src: "/products/mai-xep-ho-boi.jpg",            alt: "Mái xếp che hồ bơi xanh dương tại TP.HCM",              label: "Mái Xếp Hồ Bơi"       },
  { src: "/products/mai-xep-nhieu-tang-nha-pho.jpg",alt: "Mái xếp di động nhà phố nhiều tầng",  label: "Mái Xếp Nhà Phố"      },
  { src: "/products/mai-xep-nha-hang-dem.jpg",      alt: "Mái xếp nhà hàng ban đêm Linh Khương",    label: "Mái Xếp Nhà Hàng"     },
  { src: "/products/mai-hien-nau-nha-pho-logo.jpg", alt: "Thi công mái hiên nhà phố tại TP.HCM",             label: "Mái Hiên Nhà Phố"     },
  { src: "/products/mai-hien-xanh-shop-logo.jpg",   alt: "Mái hiên cửa hàng có logo Linh Khương",            label: "Mái Hiên Cửa Hàng"    },
  { src: "/products/mai-hien-quan-hai-san.jpg",     alt: "Mái hiên quán hải sản Thanh Xuân",        label: "Mái Hiên Quán Ăn"     },
  { src: "/products/cua-cuon-xam-biet-thu.jpg",     alt: "Cửa cuốn xám biệt thự sạch đẹp",            label: "Cửa Cuốn Biệt Thự"   },
  { src: "/products/cua-cuon-xanh-la.jpg",          alt: "Cửa cuốn màu xanh lá nổi bật",             label: "Cửa Cuốn Màu Xanh"   },
  { src: "/products/cua-cuon-vang-shop.jpg",        alt: "Cửa cuốn vàng shop cửa hàng",       label: "Cửa Cuốn Cửa Hàng"   },
  { src: "/products/cua-cuon-thong-gio.jpg",        alt: "Cửa cuốn thông gió lắp đặt tại TP.HCM",           label: "Cửa Cuốn Thông Gió"  },
  { src: "/products/mai-che-hanh-lang-nha-may.jpg", alt: "Mái che hành lang nhà máy khu công nghiệp",    label: "Mái Che Nhà Máy"      },
];

const ZOOM_LEVELS = [1, 1.5, 2, 3];

export default function BeforeAfterSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Keep autoplay plugin instance stable across renders
  const autoplayRef = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplayRef.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Reset transform when switching images
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoom(1);
    setRotation(0);
  };
  const closeLightbox = () => setLightboxIndex(null);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
    setZoom(1);
    setRotation(0);
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));
    setZoom(1);
    setRotation(0);
  }, []);

  const zoomIn = () =>
    setZoom((z) => {
      const next = ZOOM_LEVELS.find((l) => l > z);
      return next ?? ZOOM_LEVELS[ZOOM_LEVELS.length - 1];
    });

  const zoomOut = () =>
    setZoom((z) => {
      const prev = [...ZOOM_LEVELS].reverse().find((l) => l < z);
      return prev ?? ZOOM_LEVELS[0];
    });

  const rotateLeft  = () => setRotation((r) => r - 90);
  const rotateRight = () => setRotation((r) => r + 90);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "+")          zoomIn();
      if (e.key === "-")          zoomOut();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, lightboxPrev, lightboxNext]);

  const isOpen = lightboxIndex !== null;
  const current = isOpen ? GALLERY[lightboxIndex] : null;

  return (
    <section className="py-14 md:py-20 bg-gray-900" aria-label="Hình ảnh công trình thực tế">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <RevealWrapper direction="up" className="text-center mb-10">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-2">
            Thực tế thi công
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Hình Ảnh Công Trình
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Những công trình đã thi công — chất lượng nói lên tất cả
          </p>
          <div className="w-16 h-1 bg-[#1e4d8c] rounded-full mx-auto mt-3" />
        </RevealWrapper>

        {/* Carousel */}
        <RevealWrapper direction="up" delay={1} className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {GALLERY.map((item, i) => (
                <div
                  key={item.src}
                  className="relative flex-none w-[78vw] sm:w-[46vw] md:w-[34vw] lg:w-[26vw] xl:w-[21vw] aspect-[4/3] cursor-zoom-in rounded-xl overflow-hidden shadow-lg"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                    <ZoomInIcon className="w-7 h-7 text-white drop-shadow-lg opacity-0 group-hover:opacity-0 [div:hover>&]:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-3 py-2">
                    <p className="text-white text-xs font-semibold truncate">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Tiếp"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </RevealWrapper>

        <p className="text-center text-gray-600 text-xs mt-4">
          {GALLERY.length} công trình thực tế &nbsp;·&nbsp; Nhấn ảnh để xem lớn hơn
        </p>
      </div>

      {/* ─── Lightbox ─── */}
      {isOpen && current && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/60 text-sm select-none">
              {lightboxIndex! + 1} / {GALLERY.length}
            </span>
            <span className="text-white font-semibold text-sm truncate max-w-[60%] text-center">
              {current.label}
            </span>
            <button
              onClick={closeLightbox}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image area — overflow hidden to clip zoomed image neatly */}
          <div
            className="relative flex items-center justify-center w-full"
            style={{ height: "calc(100vh - 120px)", overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              style={{
                maxWidth: "90vw",
                maxHeight: "calc(100vh - 140px)",
                objectFit: "contain",
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                userSelect: "none",
                display: "block",
              }}
              draggable={false}
            />
          </div>

          {/* Toolbar — Ant Design style */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ToolbarBtn onClick={zoomOut}    disabled={zoom <= ZOOM_LEVELS[0]}                     title="Thu nhỏ">
              <ZoomOut className="w-4 h-4" />
            </ToolbarBtn>

            <span className="text-white/70 text-xs w-10 text-center select-none font-mono">
              {Math.round(zoom * 100)}%
            </span>

            <ToolbarBtn onClick={zoomIn}     disabled={zoom >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1]} title="Phóng to">
              <ZoomInIcon className="w-4 h-4" />
            </ToolbarBtn>

            <div className="w-px h-5 bg-white/20 mx-1" />

            <ToolbarBtn onClick={rotateLeft}  title="Xoay trái">
              <RotateCcw className="w-4 h-4" />
            </ToolbarBtn>
            <ToolbarBtn onClick={rotateRight} title="Xoay phải">
              <RotateCw className="w-4 h-4" />
            </ToolbarBtn>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}

function ToolbarBtn({
  children,
  onClick,
  disabled,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className="w-8 h-8 flex items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
