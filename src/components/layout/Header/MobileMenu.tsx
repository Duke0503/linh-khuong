"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/constants/navigation";
import { siteConfig } from "@/config/site";

interface MobileMenuProps {
  onNav: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function MobileMenu({ onNav }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onNav(e, href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={`lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors ${open ? "invisible" : ""}`}
        aria-label="Mở menu"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </SheetTrigger>

      {/* [&>button]:hidden — ẩn nút X mặc định của SheetContent */}
      <SheetContent side="left" className="w-72 p-0 flex flex-col [&>button]:hidden">
        {/* Header */}
        <div className="bg-[#1e4d8c] p-4 flex items-center justify-between flex-shrink-0">
          <div className="bg-white rounded-lg px-2 py-1">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={120}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </div>
          <button onClick={() => setOpen(false)} aria-label="Đóng menu">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* CTA */}
        <div className="p-4 bg-blue-50 flex-shrink-0">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center justify-center gap-2 bg-[#1e4d8c] text-white px-4 py-3 rounded-lg font-semibold w-full"
          >
            <Phone className="w-4 h-4" />
            Gọi ngay: {siteConfig.contact.phone}
          </a>
        </div>

        {/* Nav */}
        <nav className="flex-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block px-5 py-3.5 text-sm font-medium text-gray-800 hover:text-[#1e4d8c] hover:bg-blue-50 border-b border-gray-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
