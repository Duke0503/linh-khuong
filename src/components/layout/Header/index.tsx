"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants/navigation";
import { siteConfig } from "@/config/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      )}
    >
      {/* Top bar — desktop only */}
      <div className="bg-[#1e4d8c] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span>Chuyên nghiệp – Chất lượng – Uy tín</span>
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-1 font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone className="w-3 h-3" />
            Hotline: {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "text-gray-700 hover:text-[#1e4d8c] hover:bg-red-50",
                  item.href === "/" && "text-[#1e4d8c] font-semibold"
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {item.children && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-[#1e4d8c] first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden md:flex items-center gap-2 bg-[#1e4d8c] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#153870] transition-colors"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.contact.phone}
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
