"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatActions() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      <a
        href={siteConfig.contact.zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-full shadow-lg font-semibold text-sm transition-all hover:scale-105"
        aria-label="Chat Zalo"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Zalo</span>
      </a>

      <a
        href={siteConfig.contact.phoneHref}
        className="relative flex items-center gap-2 bg-[#1e4d8c] hover:bg-[#153870] text-white px-4 py-2.5 rounded-full shadow-lg font-semibold text-sm transition-all hover:scale-105"
        aria-label="Gọi ngay"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#1e4d8c] opacity-30" />
        <Phone className="w-4 h-4 relative z-10" />
        <span className="relative z-10">{siteConfig.contact.phone}</span>
      </a>
    </div>
  );
}
