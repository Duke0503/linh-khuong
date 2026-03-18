import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { NewsItem } from "@/types";

interface NewsCardProps {
  item: NewsItem;
  variant?: "featured" | "compact";
}

export default function NewsCard({ item, variant = "compact" }: NewsCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/${item.slug}`}
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute top-3 left-3 bg-[#1e4d8c] text-white text-xs font-bold px-3 py-1 rounded-full">
            Tin tức
          </div>
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Ngày {item.date}
          </div>
          <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-2 group-hover:text-[#1e4d8c] transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
          <div className="mt-4 flex items-center gap-2 text-[#1e4d8c] text-sm font-semibold">
            Xem thêm <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/${item.slug}`}
      className="group flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="96px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
          <Calendar className="w-3 h-3" />
          {item.date}
        </div>
        <h3 className="font-semibold text-gray-800 text-sm group-hover:text-[#1e4d8c] transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item.excerpt}</p>
      </div>
    </Link>
  );
}
