import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HeroSlider() {
  return (
    <section className="relative w-full" aria-label="Hero banner">
      {/* Hidden H1 for SEO — Google reads this */}
      <h1 className="sr-only">
        Mái Hiên Mái Xếp Linh Khương — Thi Công Mái Che, Cửa Cuốn Uy Tín Tại Bình Dương & TP.HCM
      </h1>
      <div className="relative w-full">
        {/* Banner image — tỉ lệ gốc, không crop */}
        <Image
          src="/banner_lk.png"
          alt="Linh Khương - Thi Công Mái Hiên, Mái Xếp Di Động Uy Tín TP.HCM"
          width={1920}
          height={640}
          className="w-full h-auto block"
          priority
          sizes="100vw"
        />

        {/* Gradient overlay phía dưới để button nổi trên ảnh */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* CTA buttons */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2 bg-[#1e4d8c] hover:bg-[#153870] active:scale-95 text-white px-5 py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all shadow-lg whitespace-nowrap min-h-[48px]"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            Liên hệ ngay
          </a>
          <a
            href={siteConfig.contact.zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0068ff] hover:bg-[#0055cc] active:scale-95 text-white px-5 py-3 md:px-7 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all shadow-lg whitespace-nowrap min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            Zalo
          </a>
        </div>
      </div>
    </section>
  );
}
