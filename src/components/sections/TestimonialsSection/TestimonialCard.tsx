import Image from "next/image";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors h-full flex flex-col">
      <Quote className="w-8 h-8 text-[#f59e0b] mb-4 flex-shrink-0" />
      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-5 italic flex-1">
        &ldquo;{testimonial.review}&rdquo;
      </p>
      <div className="flex mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div className="font-bold text-white text-sm">{testimonial.name}</div>
          <div className="text-white/70 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
