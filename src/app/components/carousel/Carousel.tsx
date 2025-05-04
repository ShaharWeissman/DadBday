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
    <section className="py-16 w-full bg-[#495872] min-h-[500px] flex flex-col items-center">
      <div className="relative w-full flex justify-center items-center">
        {/* Prev Button */}
        <button
          aria-label="Previous"
          onClick={() => setCurrent(prevIdx)}
          className="absolute left-4 md:left-16 z-10 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-blue-700 text-2xl transition-all duration-200 cursor-pointer top-1/2 -translate-y-1/2"
        >
          ‹
        </button>
        {/* Next Button */}
        <button
          aria-label="Next"
          onClick={() => setCurrent(nextIdx)}
          className="absolute right-4 md:right-16 z-10 bg-white/80 hover:bg-blue-100 border border-blue-200 rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-blue-700 text-2xl transition-all duration-200 cursor-pointer top-1/2 -translate-y-1/2"
        >
          ›
        </button>
        {/* Carousel Card */}
        <div className="relative flex flex-row items-center justify-center w-full max-w-6xl">
          {/* Previous Slide (peek, blurred) */}
          <div className="hidden md:flex flex-col items-center justify-center w-[150px] h-[120px] mr-[-40px] z-0 opacity-60 blur-[2px] rounded-xl overflow-hidden bg-[#e5eefa] shadow-lg transition-all duration-500">
            <Image
              src={carouselImages[prevIdx]}
              alt={`Slide ${prevIdx + 1}`}
              fill
              className="object-contain"
              style={{ objectFit: 'contain', background: '#e5eefa' }}
            />
          </div>
          {/* Main Slide */}
          <div className="flex-1 flex items-center justify-center min-w-0">
            <div className="mx-auto w-full max-w-[900px] aspect-[16/9] bg-[#e5eefa] rounded-2xl shadow-2xl border-4 border-[#b0c7e6] flex items-center justify-center overflow-hidden relative">
              <Image
                src={carouselImages[current]}
                alt={`Slide ${current + 1}`}
                fill
                className="object-contain"
                style={{ objectFit: 'contain', background: '#e5eefa' }}
                priority
              />
            </div>
          </div>
          {/* Next Slide (peek, blurred) */}
          <div className="hidden md:flex flex-col items-center justify-center w-[150px] h-[120px] ml-[-40px] z-0 opacity-60 blur-[2px] rounded-xl overflow-hidden bg-[#e5eefa] shadow-lg transition-all duration-500">
            <Image
              src={carouselImages[nextIdx]}
              alt={`Slide ${nextIdx + 1}`}
              fill
              className="object-contain"
              style={{ objectFit: 'contain', background: '#e5eefa' }}
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
