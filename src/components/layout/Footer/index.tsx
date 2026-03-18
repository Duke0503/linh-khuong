import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site";
import { NAV_ITEMS } from "@/constants/navigation";
import { SERVICES } from "@/constants/services";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={50}
            className="h-12 w-auto object-contain brightness-0 invert mb-4"
          />
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
                <Link
                  href={item.href}
                  className="hover:text-[#1e4d8c] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#1e4d8c]">›</span>
                  {item.label}
                </Link>
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
                <Link href={s.href} className="hover:text-[#1e4d8c] transition-colors">
                  {s.title}
                </Link>
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
          <p>© 2024 {siteConfig.fullName}. All rights reserved.</p>
          <p>Thiết kế: Linh Khương Team</p>
        </div>
      </div>
    </footer>
  );
}
