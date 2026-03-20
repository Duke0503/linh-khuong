import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/shared/types";

interface ServiceCardProps {
  service: Service;
  sizes?: string;
}

export default function ServiceCard({ service, sizes = "25vw" }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1e4d8c]/40 shadow-md hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
