import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS_ITEMS } from "@/constants/news";
import SectionHeader from "@/components/common/SectionHeader";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const [featured, ...rest] = NEWS_ITEMS;

  return (
    <section className="py-14 md:py-20 bg-gray-50" aria-label="Tin tức">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Cập nhật mới nhất"
            title="Tin Tức"
            center={false}
          />
          <Link
            href="/tin-tuc"
            className="hidden md:flex items-center gap-2 text-[#1e4d8c] font-semibold text-sm hover:gap-3 transition-all mb-2 flex-shrink-0"
          >
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NewsCard item={featured} variant="featured" />
          </div>

          <div className="space-y-4">
            {rest.map((item) => (
              <NewsCard key={item.slug} item={item} variant="compact" />
            ))}

            <Link
              href="/tin-tuc"
              className="flex md:hidden items-center justify-center gap-2 text-[#1e4d8c] font-semibold text-sm py-3 border border-[#1e4d8c] rounded-xl hover:bg-red-50 transition-colors"
            >
              Xem tất cả tin tức <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
