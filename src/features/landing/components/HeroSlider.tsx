import Image from "next/image";
import { Phone, MessageCircle, PenTool } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HeroSlider() {
  return (
    <section className="w-full bg-white flex flex-col" aria-label="Giới thiệu Linh Khương">
      <h1 className="sr-only">
        Cửa Cuốn Linh Khương — Thi Công Mái Hiên, Mái Xếp Uy Tín TP.HCM
      </h1>

      {/* The Banner Image Full Width */}
      <div className="w-full relative shadow-sm">
        <Image
          src="/banner_main.png"
          alt="Cửa Cuốn Mái Hiên Linh Khương"
          width={1920}
          height={640}
          className="w-full h-auto block"
          priority
          fetchPriority="high"
        />
      </div>

      {/* Elegant Action & Trust Strip for High Conversions */}
      <div className="w-full bg-[#1e4d8c] shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Trust Value Prop */}
          <div className="flex items-center gap-4 text-white">
            <div className="hidden md:flex items-center justify-center bg-white/10 p-4 rounded-full">
              <PenTool className="w-8 h-8 text-[#f59e0b]" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-bold tracking-wide mb-1">
                KHẢO SÁT TẬN NƠI - BÁO GIÁ MIỄN PHÍ
              </h2>
              <p className="text-blue-100 text-sm md:text-base font-medium">
                Thi công chuẩn xác. Cam kết không phát sinh chi phí.
              </p>
            </div>
          </div>

          {/* Clean, Readable CTA Buttons */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 sm:gap-4 md:gap-5">
            <a
              href={siteConfig.contact.phoneHref}
              className="group flex flex-1 items-center justify-center gap-3 bg-[#f59e0b] hover:bg-[#d97706] text-[#0f2447] px-6 py-4 md:px-8 md:py-4 rounded-lg font-extrabold text-lg transition-all duration-300 shadow-[0_4px_15px_rgba(245,158,11,0.4)] hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 animate-[wiggle_1s_ease-in-out_infinite]" />
              <span className="whitespace-nowrap">{siteConfig.contact.phone}</span>
            </a>
            
            <a
              href={siteConfig.contact.zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#1e4d8c] px-6 py-4 md:px-8 md:py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="whitespace-nowrap">Nhắn Zalo</span>
            </a>
          </div>

        </div>
      </div>
      
    </section>
  );
}
