import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  sizes?: string;
}

export default function ServiceCard({ service, sizes = "25vw" }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-semibold flex items-center gap-1">
            Xem thêm <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2 group-hover:text-[#1e4d8c] transition-colors line-clamp-2">
          {service.title}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2 hidden sm:block">
          {service.desc}
        </p>
      </div>
    </Link>
  );
}
