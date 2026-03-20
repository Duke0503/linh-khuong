"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Zalo wordmark — chữ "Zalo" trắng */}
      <text x="50" y="64" textAnchor="middle" fontSize="38" fontWeight="900"
        fill="white" fontFamily="'Arial Black', Arial, sans-serif" letterSpacing="-1">
        Zalo
      </text>
    </svg>
  );
}

export default function FloatActions() {
  return (
    /* Floating buttons — right side, both mobile & desktop */
    <div className="fixed bottom-8 right-4 z-[999] flex flex-col gap-3 items-center">

      {/* Zalo */}
      <a
        href={siteConfig.contact.zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        title="Nhắn Zalo"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0068ff] text-white active:scale-95 transition-transform ring-2 ring-white"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35), 0 0 0 3px rgba(255,255,255,0.9)" }}
      >
        {/* ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#0068ff] animate-ripple pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-[#0068ff] animate-ripple-delay pointer-events-none" />
        <ZaloIcon className="relative z-10 w-10 h-10" />
        {/* label tooltip */}
        <span className="absolute right-full mr-2.5 whitespace-nowrap bg-black/75 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 hidden lg:block">
          Nhắn Zalo
        </span>
      </a>

      {/* Phone */}
      <a
        href={siteConfig.contact.phoneHref}
        aria-label={`Gọi ngay ${siteConfig.contact.phone}`}
        title={`Gọi ${siteConfig.contact.phone}`}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1e4d8c] text-white active:scale-95 transition-transform animate-ring-pulse ring-2 ring-white"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35), 0 0 0 3px rgba(255,255,255,0.9)" }}
      >
        <span className="absolute inset-0 rounded-full bg-[#1e4d8c] animate-ripple pointer-events-none" style={{ animationDelay: "0.5s" }} />
        <span className="absolute inset-0 rounded-full bg-[#1e4d8c] animate-ripple-delay pointer-events-none" />
        <Phone className="relative z-10 w-7 h-7" />
      </a>

    </div>
  );
}
