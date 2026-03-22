import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HeroSlider() {
  return (
    <section className="relative w-full" aria-label="Hero banner">
      {/* Hidden H1 for SEO — Google reads this */}
      <h1 className="sr-only">
        Cửa Cuốn Linh Khương — Thi Công Mái Hiên, Mái Xếp Uy Tín TP.HCM
      </h1>
      <div className="relative w-full">
        <Image
          src="/banner_main.png"
          alt="Linh Khương - Thi Công Mái Hiên, Mái Xếp Di Động Uy Tín TP.HCM"
          title="Cửa Cuốn Mái Hiên Linh Khương"
          width={1920}
          height={640}
          className="w-full h-auto block"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>

      {/* Mobile: buttons bên dưới ảnh, không che text */}
      <div className="flex md:hidden gap-3 justify-center px-4 py-3 bg-[#0f2447]">
        <a
          href={siteConfig.contact.phoneHref}
          className="flex items-center gap-2 bg-[#1e4d8c] text-white px-5 py-3 rounded-full font-semibold text-sm flex-1 justify-center min-h-[48px]"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          Liên hệ ngay
        </a>
        <a
          href={siteConfig.contact.zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0068ff] text-white px-5 py-3 rounded-full font-semibold text-sm flex-1 justify-center min-h-[48px]"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          Zalo
        </a>
      </div>
    </section>
  );
}
