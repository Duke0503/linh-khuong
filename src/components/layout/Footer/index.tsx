"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site";
import { NAV_ITEMS } from "@/constants/navigation";
import { SERVICES } from "@/constants/services";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg px-2 py-1 inline-block mb-4">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={150}
              height={46}
              className="h-11 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            Chuyên tư vấn, thiết kế và thi công mái hiên, mái xếp, dù che nắng, mái vòm, cửa cuốn
            tại TP.HCM và các tỉnh lân cận.
          </p>
          <a
            href={siteConfig.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </a>
        </div>

        {/* Navigation links */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-[#1e4d8c] pb-2">
            Liên kết nhanh
          </h3>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={item.href.startsWith("#") ? (e) => { e.preventDefault(); scrollTo(item.href); } : undefined}
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[#60a5fa]">›</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-[#1e4d8c] pb-2">
            Dịch vụ
          </h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.title} className="flex items-start gap-2">
                <span className="text-[#1e4d8c] mt-0.5">›</span>
                <a
                  href="#dich-vu"
                  onClick={(e) => { e.preventDefault(); scrollTo("#dich-vu"); }}
                  className="hover:text-[#1e4d8c] transition-colors cursor-pointer"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b border-[#1e4d8c] pb-2">
            Liên hệ
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-3 hover:text-[#1e4d8c] transition-colors"
              >
                <div className="bg-[#1e4d8c] p-2 rounded-full flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.emailHref}
                className="flex items-center gap-3 hover:text-[#1e4d8c] transition-colors"
              >
                <div className="bg-[#1e4d8c] p-2 rounded-full flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-[#1e4d8c] p-2 rounded-full flex-shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-white" />
              </div>
              {siteConfig.contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2025 {siteConfig.fullName}. All rights reserved.</p>
          <p>Thiết kế bởi Innovators Team</p>
        </div>
      </div>
    </footer>
  );
}
