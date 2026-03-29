import type { Metadata } from "next";
import { CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Header, Footer } from "@/shared/components/layout";

export const metadata: Metadata = {
  title:
    "Về Chúng Tôi — Linh Khương | 8+ Năm Thi Công Cửa Cuốn Mái Hiên TP.HCM",
  description:
    "Hơn 8 năm thi công trực tiếp, 500+ công trình tại TP.HCM, Bình Dương, Đồng Nai. Vật liệu Happadoor chính hãng, không qua thầu phụ.",
};

const highlights = [
  "8+ năm · 500+ công trình · TP.HCM · Bình Dương · Đồng Nai",
  "Kỹ thuật viên trực tiếp thi công — không qua thầu phụ, bạn trả tiền cho thợ",
  "Vật liệu Happadoor chính hãng có CO/CQ · Công nghệ Đức · Đài Loan · Úc",
  "Khảo sát tận nơi & báo giá miễn phí — không phát sinh, không ép mua",
];

const milestones = [
  { year: "2018", text: "Những đơn hàng đầu tiên tại Tân Đông Hiệp — tư vấn, nhập hàng Happadoor và lắp đặt trực tiếp" },
  { year: "2020", text: "Mở rộng sang TP.HCM, thi công 100+ công trình đầu tiên" },
  { year: "2022", text: "Phủ rộng Đồng Nai, đưa Điều Khiển Thông Minh vào dịch vụ" },
  { year: "2024", text: "500+ công trình hoàn thành — bảo hành tất cả bằng hợp đồng" },
  { year: "2026", text: "Ra mắt website, tiếp tục phục vụ 3 tỉnh thành" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Hero */}
        <section className="bg-[#1e4d8c] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Về chúng tôi
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Hơn 8 Năm Tận Tâm —<br className="hidden md:block" /> Linh Khương Không Bán Lời Hứa
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Từ những đơn hàng đầu tiên ở Tân Đông Hiệp đến 500+ công trình trên 3 tỉnh thành —
              mỗi công trình đều do kỹ thuật viên Linh Khương trực tiếp thi công.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text */}
              <div>
                <div className="bg-gradient-to-br from-white to-blue-50 border-l-4 border-[#1e4d8c] rounded-xl p-5 md:p-6 shadow-sm mb-6">
                  <p className="text-gray-700 leading-relaxed text-base">
                                    <strong className="text-[#f59e0b]">Linh Khương</strong> bắt đầu từ những
                    đơn hàng đầu tiên tại khu vực Tân Đông Hiệp — nơi chúng tôi trực tiếp tư
                    vấn, nhập hàng từ Happadoor và tự tay lắp đặt cho từng khách hàng. Hơn 8 năm
                    sau, <strong>500+ công trình</strong> hoàn thành tại TP.HCM, Bình Dương và
                    Đồng Nai là minh chứng cho cam kết chúng tôi giữ: làm đúng, làm đẹp, chịu
                    trách nhiệm đến cùng.
                    <br />
                    <br />
                    Chúng tôi không làm qua thầu phụ. Mỗi công trình đều do kỹ thuật viên Linh
                    Khương trực tiếp thi công —{" "}
                    <strong>bạn trả tiền cho thợ, không trả cho trung gian</strong>.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1e4d8c] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 bg-[#1e4d8c] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#153870] transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Báo giá miễn phí: {siteConfig.contact.phone}
                </a>
              </div>

              {/* Images */}
              <div className="relative grid grid-cols-2 gap-4 pb-6">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[5/4]">
                  <Image
                    src="/cuahang-linhkhuong.jpg"
                    alt="Văn phòng cửa hàng Linh Khương tại Tân Đông Hiệp, Bình Dương"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[5/4] mt-6">
                  <Image
                    src="/products/cua-cuon-xam-biet-thu.jpg"
                    alt="Công trình cửa cuốn thi công trực tiếp Linh Khương"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#1e4d8c] text-white rounded-2xl p-4 shadow-xl">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-xs opacity-90">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 md:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-10">
              Hành Trình Linh Khương
            </h2>
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-blue-100" />
              <div className="space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6 items-start">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="text-[#1e4d8c] font-bold text-sm">{m.year}</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#1e4d8c] flex-shrink-0 mt-1 relative z-10" />
                    <p className="text-gray-700 text-sm md:text-base pt-0.5">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#1e4d8c]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Sẵn sàng tư vấn miễn phí
            </h2>
            <p className="text-white/75 mb-6">
              Khảo sát tận nơi · Báo giá trong ngày · Không ép mua
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e4d8c] px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
              <Link
                href="/#lien-he"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Để lại thông tin
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
