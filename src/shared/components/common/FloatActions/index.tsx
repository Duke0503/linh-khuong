"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="64" textAnchor="middle" fontSize="38" fontWeight="900"
        fill="white" fontFamily="'Arial Black', Arial, sans-serif" letterSpacing="-1">
        Zalo
      </text>
    </svg>
  );
}

export default function FloatActions() {
  return (
    <div className="fixed bottom-6 right-4 lg:bottom-10 lg:right-10 z-[999] flex flex-col gap-4 items-end pointer-events-none">

      {/* Zalo */}
      <div className="pointer-events-auto flex items-center gap-3 group relative">
        <span className="hidden sm:flex px-3 py-1.5 bg-white/90 backdrop-blur-md text-[#0068ff] text-sm font-bold rounded-lg shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Nhắn Zalo Ngay
        </span>
        <a
          href={siteConfig.contact.zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-[#0052cc] to-[#338aff] text-white overflow-hidden shadow-[0_10px_30px_rgba(0,104,255,0.4)] hover:shadow-[0_15px_40px_rgba(0,104,255,0.6)] hover:-translate-y-1 transition-all duration-300 active:scale-95 border-2 border-white/50"
        >
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
          
          <ZaloIcon className="relative z-10 w-9 h-9 lg:w-11 lg:h-11 drop-shadow-md" />
        </a>
      </div>

      {/* Phone Hotline Component */}
      <div className="pointer-events-auto flex items-center gap-3 group relative">
        <span className="flex sm:hidden px-3 py-1.5 bg-yellow-400 text-[#0f2447] text-sm font-bold rounded-l-full shadow-lg absolute right-full mr-2 pointer-events-none whitespace-nowrap animate-pulse">
          Gọi Khảo Sát
        </span>
        <span className="hidden sm:flex px-3 py-1.5 bg-yellow-400 text-[#0f2447] text-sm font-bold rounded-lg shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Gọi Miễn Phí
        </span>
        <a
          href={siteConfig.contact.phoneHref}
          aria-label={`Gọi ngay ${siteConfig.contact.phone}`}
          className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-300 text-[#0f2447] overflow-visible shadow-[0_10px_30px_rgba(250,204,21,0.5)] hover:shadow-[0_15px_40px_rgba(250,204,21,0.7)] hover:-translate-y-1 transition-all duration-300 active:scale-95 border-2 border-white/80"
        >
          {/* Pulse Rings */}
          <span className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-ping opacity-60"></span>
          <span className="absolute -inset-2 rounded-full border border-yellow-300 animate-ping opacity-40" style={{ animationDelay: '0.4s' }}></span>
          
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
          
          <Phone className="relative z-10 w-7 h-7 lg:w-9 lg:h-9 animate-[wiggle_1.5s_ease-in-out_infinite]" />
        </a>
      </div>

    </div>
  );
}
