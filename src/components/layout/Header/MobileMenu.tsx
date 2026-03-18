"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants/navigation";
import { siteConfig } from "@/config/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Mở menu"
      >
        {/* Hamburger icon */}
        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-0 flex flex-col">
        {/* Header */}
        <div className="bg-[#1e4d8c] p-4 flex items-center justify-between flex-shrink-0">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={130}
            height={40}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <button onClick={closeMenu} aria-label="Đóng menu">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* CTA */}
        <div className="p-4 bg-red-50 flex-shrink-0">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center justify-center gap-2 bg-[#1e4d8c] text-white px-4 py-3 rounded-lg font-semibold w-full"
          >
            <Phone className="w-4 h-4" />
            Gọi ngay: {siteConfig.contact.phone}
          </a>
        </div>

        {/* Nav */}
        <nav className="overflow-y-auto flex-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="flex-1 px-5 py-3.5 text-sm font-medium text-gray-800 hover:text-[#1e4d8c] transition-colors"
                  onClick={() => !item.children && closeMenu()}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    className="px-4 py-3.5"
                    aria-label={`Mở rộng ${item.label}`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-gray-500 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.label && (
                <div className="bg-gray-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-8 py-2.5 text-sm text-gray-600 hover:text-[#1e4d8c] transition-colors"
                      onClick={closeMenu}
                    >
                      • {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
