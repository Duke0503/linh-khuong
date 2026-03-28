"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { NAV_ITEMS } from "@/shared/constants/navigation";
import { siteConfig } from "@/config/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

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
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-[200] bg-white transition-all duration-300",
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-2" : "border-b border-gray-100 py-3 lg:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNav(e, "#hero")} className="flex-shrink-0">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={180}
            height={60}
            className="h-10 lg:h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className={cn(
                  "text-[15px] font-semibold tracking-wide transition-colors duration-200 relative py-2",
                  isActive
                    ? "text-[#1e4d8c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e4d8c]"
                    : "text-gray-600 hover:text-[#1e4d8c]"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <MobileMenu onNav={handleNav} />
          
          {/* Desktop Call */}
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden lg:flex items-center gap-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#0f2447] px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="bg-white/30 p-1 rounded-full">
              <Phone className="w-4 h-4" />
            </div>
            {siteConfig.contact.phone}
          </a>
          
          {/* Mobile Call CTA */}
          <a
            href={siteConfig.contact.phoneHref}
            className="lg:hidden flex items-center gap-2 bg-[#f59e0b] active:bg-[#d97706] text-[#0f2447] px-4 py-2 rounded-md text-sm font-bold shadow-sm"
            aria-label={`Gọi ngay ${siteConfig.contact.phone}`}
          >
            <Phone className="w-4 h-4" />
            Gọi Ngay
          </a>
        </div>
      </div>
    </header>
  );
}
