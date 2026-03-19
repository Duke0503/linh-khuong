"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatActions() {
  return (
    <>
      {/* Mobile: sticky bar at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-200 shadow-lg"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={siteConfig.contact.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1e4d8c] text-white py-4 font-semibold text-sm active:opacity-80 transition-opacity"
          aria-label={`Gọi ngay ${siteConfig.contact.phone}`}
        >
          <span className="relative flex">
            <span className="absolute inset-0 rounded-full animate-ping bg-white opacity-30" />
            <Phone className="w-5 h-5 relative" />
          </span>
          Gọi ngay
        </a>
        <div className="w-px bg-white/20" />
        <a
          href={siteConfig.contact.zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#0068ff] text-white py-4 font-semibold text-sm active:opacity-80 transition-opacity"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="w-5 h-5" />
          Zalo
        </a>
      </div>

      {/* Desktop: floating buttons bottom-right */}
      <div className="hidden lg:flex fixed bottom-6 right-5 z-50 flex-col gap-3 items-end">
        <a
          href={siteConfig.contact.zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat Zalo"
          className="group flex items-center gap-2 bg-[#0068ff] hover:bg-[#0055cc] text-white px-4 py-2.5 rounded-full shadow-lg font-semibold text-sm transition-all hover:scale-105"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Zalo</span>
        </a>

        <a
          href={siteConfig.contact.phoneHref}
          title={`Gọi ${siteConfig.contact.phone}`}
          className="relative group flex items-center gap-2 bg-[#1e4d8c] hover:bg-[#153870] text-white px-4 py-2.5 rounded-full shadow-lg font-semibold text-sm transition-all hover:scale-105"
          aria-label={`Gọi ngay ${siteConfig.contact.phone}`}
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#1e4d8c] opacity-30 pointer-events-none" />
          <Phone className="w-4 h-4 relative z-10" />
          <span className="relative z-10">{siteConfig.contact.phone}</span>
        </a>
      </div>
    </>
  );
}
