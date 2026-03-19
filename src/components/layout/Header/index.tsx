"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants/navigation";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active nav item based on scroll position
      const sectionIds = NAV_ITEMS.map((i) => i.href.replace("#", ""));
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return; // page links — normal navigation
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
            className="h-9 lg:h-12 w-auto object-contain max-w-[120px] lg:max-w-none"
            priority
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-[#1e4d8c] bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-[#1e4d8c] hover:bg-blue-50"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Mobile: icon-only call button */}
          <a
            href={siteConfig.contact.phoneHref}
            className="lg:hidden flex items-center gap-1.5 bg-[#1e4d8c] text-white px-3 py-2 rounded-full text-xs font-semibold"
            aria-label={`Gọi ngay ${siteConfig.contact.phone}`}
          >
            <Phone className="w-3.5 h-3.5" />
            Gọi ngay
          </a>
          {/* Desktop: full phone number */}
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden lg:flex items-center gap-2 bg-[#1e4d8c] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#153870] transition-colors"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
