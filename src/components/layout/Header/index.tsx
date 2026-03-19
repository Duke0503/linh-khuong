"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
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

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNav(e, "#hero")} className="flex-shrink-0">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-[#1e4d8c] hover:bg-blue-50 transition-colors"
            >
              {item.label}
            </a>
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
          <MobileMenu onNav={handleNav} />
        </div>
      </div>
    </header>
  );
}
