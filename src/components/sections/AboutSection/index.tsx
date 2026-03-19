import { CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import RevealWrapper from "@/components/common/RevealWrapper";

export default function AboutSection() {
  const highlights = [
    "Thợ lành nghề, thi công đúng kỹ thuật",
    "Vật liệu chất lượng cao, bền bỉ theo thời gian",
    "Bảo hành rõ ràng, hỗ trợ tận tâm",
    "Khảo sát & tư vấn miễn phí tại công trình",
  ];

  return (
    <section className="py-14 md:py-20 bg-white" aria-label="Giới thiệu Linh Khương">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <RevealWrapper direction="left">
            <p className="text-[#1e4d8c] text-sm font-semibold uppercase tracking-widest mb-2">
              Đôi nét về
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-2">
              MÁI HIÊN MÁI XẾP{" "}
              <span className="text-[#1e4d8c]">Linh Khương</span>
            </h2>
            <div className="w-16 h-1 bg-[#1e4d8c] rounded-full mb-6" />

            <div className="bg-gradient-to-br from-white to-blue-50 border-l-4 border-[#1e4d8c] rounded-xl p-5 md:p-6 shadow-sm mb-6">
              <p className="text-gray-700 leading-relaxed text-base">
                <strong className="text-[#f59e0b]">Cửa Cuốn – Mái Hiên Mái Xếp Linh Khương</strong> là
                đơn vị chuyên tư vấn, thiết kế và thi công <strong>cửa cuốn</strong>, mái hiên,
                mái xếp di động tại TP.HCM. Với đội ngũ thợ lành nghề, thi công
                đúng kỹ thuật, vật liệu chất lượng và chế độ bảo hành rõ ràng,{" "}
                <strong>Linh Khương</strong> cam kết mang đến giải pháp{" "}
                <strong>cửa cuốn, mái hiên</strong> bền đẹp, hiệu quả và tiết kiệm chi phí.
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
              Gọi ngay: {siteConfig.contact.phone}
            </a>
          </RevealWrapper>

          {/* Images */}
          <RevealWrapper direction="right" delay={1}>
            <div className="relative grid grid-cols-2 gap-4 pb-6">
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[5/4]">
                <Image
                  src="http://maihienngoctruc.com/thumbs/500x400x1/upload/news/ab2-1770360916-1770567529.png.webp"
                  alt="Đội thợ thi công mái hiên mái xếp Linh Khương tại TP.HCM"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[5/4] mt-6">
                <Image
                  src="http://maihienngoctruc.com/thumbs/500x400x1/upload/news/ab1-1770360916-1770567529.png.webp"
                  alt="Công trình mái xếp di động thi công chuyên nghiệp"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#1e4d8c] text-white rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs opacity-90">Năm kinh nghiệm</div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
