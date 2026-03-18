import Image from "next/image";
import { Play } from "lucide-react";
import type { Video } from "@/types";

interface VideoThumbProps {
  video: Video;
  isActive: boolean;
  onClick: () => void;
}

export default function VideoThumb({ video, isActive, onClick }: VideoThumbProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 relative group rounded-xl overflow-hidden border-2 transition-all ${
        isActive ? "border-[#1e4d8c] shadow-lg" : "border-transparent hover:border-gray-300"
      }`}
      aria-label={`Xem video: ${video.title}`}
    >
      <div className="relative w-36 lg:w-full h-24 lg:h-28">
        <Image
          src={video.smallThumb}
          alt={video.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 144px, 20vw"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Play className="w-6 h-6 text-white" fill="white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-2">
        <p className="text-white text-xs font-semibold line-clamp-1">{video.title}</p>
      </div>
    </button>
  );
}
