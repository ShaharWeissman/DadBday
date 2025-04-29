// src/app/components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { carouselImages } from "@/data/carouselData";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = carouselImages.length;

  // Auto‑rotate every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(id);
  }, [length]);

  // Helpers
  const prevIdx = (current - 1 + length) % length;
  const nextIdx = (current + 1) % length;

  return (
    <section className="py-12 w-full">
      {/* Header */}
      <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-8 tracking-tight bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
        זכרונות נבחרים
      </h2>

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center px-2 md:px-8">
        {/* Prev Button */}
        <button
          aria-label="Previous"
          onClick={() => setCurrent(prevIdx)}
          className="absolute left-0 z-10 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-blue-700 text-2xl transition-all duration-200 cursor-pointer md:-left-6 top-1/2 -translate-y-1/2"
        >
          ‹
        </button>
        {/* Next Button */}
        <button
          aria-label="Next"
          onClick={() => setCurrent(nextIdx)}
          className="absolute right-0 z-10 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-blue-700 text-2xl transition-all duration-200 cursor-pointer md:-right-6 top-1/2 -translate-y-1/2"
        >
          ›
        </button>

        {/* Slides */}
        <div className="w-full flex items-center justify-center gap-4">
          {/* Previous Slide (peek) */}
          <div className="hidden md:block flex-none w-1/5 aspect-video relative overflow-hidden rounded-2xl shadow-lg scale-95 opacity-60 blur-[2px] transition-all duration-700">
            <Image
              src={carouselImages[prevIdx]}
              alt={`Slide ${prevIdx + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Current Slide */}
          <div className="flex-1 min-w-0 max-w-[700px] aspect-video relative overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-200 bg-white/80 scale-105 transition-all duration-700 animate-fade-in">
            <Image
              src={carouselImages[current]}
              alt={`Slide ${current + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next Slide (peek) */}
          <div className="hidden md:block flex-none w-1/5 aspect-video relative overflow-hidden rounded-2xl shadow-lg scale-95 opacity-60 blur-[2px] transition-all duration-700">
            <Image
              src={carouselImages[nextIdx]}
              alt={`Slide ${nextIdx + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="mt-8 flex justify-center space-x-3">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer border-2 border-white shadow-sm ${
              idx === current ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.97); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </section>
  );
}
