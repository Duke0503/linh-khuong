"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VIDEOS } from "@/constants/videos";
import SectionHeader from "@/components/common/SectionHeader";
import VideoThumb from "./VideoThumb";

export default function VideoSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  const active = VIDEOS[activeIdx];

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    setPlaying(false);
  };

  return (
    <section className="py-14 md:py-20 bg-gray-50" aria-label="Video thực tế">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Thực tế công trình"
          title="Video Thi Công Thực Tế"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main video player */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
                  title={active.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={active.thumb}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4">
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-16 h-16 md:w-20 md:h-20 bg-[#1e4d8c] hover:bg-[#153870] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
                      aria-label={`Phát video: ${active.title}`}
                    >
                      <Play className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="white" />
                    </button>
                    <p className="text-white font-semibold text-lg">{active.title}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Thumbnail list */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {VIDEOS.map((v, i) => (
              <VideoThumb
                key={v.id}
                video={v}
                isActive={i === activeIdx}
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
