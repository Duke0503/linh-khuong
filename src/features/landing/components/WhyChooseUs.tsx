import { Award, ShieldCheck, Tag, Package, Clock, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { REASONS } from "@/shared/constants/why-choose-us";
import type { Reason } from "@/shared/types";
import { siteConfig } from "@/config/site";
import SectionHeader from "@/shared/components/common/SectionHeader";
import RevealWrapper from "@/shared/components/common/RevealWrapper";

const ICON_MAP: Record<Reason["icon"], LucideIcon> = {
  award: Award,
  "shield-check": ShieldCheck,
  tag: Tag,
  package: Package,
  clock: Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-white" aria-label="Vì sao chọn Linh Khương">
      <div className="max-w-7xl mx-auto px-4">
        <RevealWrapper direction="up">
          <SectionHeader
            eyebrow="Cam kết của chúng tôi"
            title={
              <>
                Vì Sao Chọn <span className="text-[#1e4d8c]">Linh Khương</span>?
              </>
            }
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left — first 3 reasons */}
          <div className="space-y-6">
            {REASONS.slice(0, 3).map((r, i) => (
              <RevealWrapper key={r.title} direction="left" delay={(i + 1) as 1 | 2 | 3}>
                <ReasonItem reason={r} />
              </RevealWrapper>
            ))}
          </div>

          {/* Center image — desktop only */}
          <RevealWrapper direction="up" delay={1} className="hidden lg:block">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 bg-[#1e4d8c]/10 rounded-3xl rotate-6" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/cuahang.jpg"
                    alt={`Cửa hàng ${siteConfig.name}`}
                    width={400}
                    height={400}
                    className="w-full object-cover"
                    sizes="(max-width: 768px) 80vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Right — remaining reasons + CTA */}
          <div className="space-y-6">
            {REASONS.slice(3).map((r, i) => (
              <RevealWrapper key={r.title} direction="right" delay={(i + 1) as 1 | 2 | 3}>
                <ReasonItem reason={r} />
              </RevealWrapper>
            ))}
            <RevealWrapper direction="right" delay={4}>
              <div className="bg-gradient-to-br from-[#1e4d8c] to-[#153870] rounded-2xl p-5 text-white">
                <h3 className="font-bold text-lg mb-2">Báo giá miễn phí trong ngày!</h3>
                <p className="text-base opacity-90 mb-3">
                  Gọi ngay — thợ khảo sát tận nơi, báo giá chi tiết, không phát sinh, không ép mua.
                </p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-block bg-white text-[#1e4d8c] font-bold px-5 py-2.5 rounded-full text-base hover:shadow-lg transition-shadow"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonItem({ reason }: { reason: Reason }) {
  const Icon = ICON_MAP[reason.icon];
  return (
    <div className="flex gap-4 group">
      <div className="bg-blue-50 group-hover:bg-[#1e4d8c] rounded-xl p-3 flex-shrink-0 transition-colors duration-300 h-fit">
        <Icon className="w-6 h-6 text-[#1e4d8c] group-hover:text-white transition-colors duration-300" />
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#1e4d8c] transition-colors">
          {reason.title}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed">{reason.desc}</p>
      </div>
    </div>
  );
}
