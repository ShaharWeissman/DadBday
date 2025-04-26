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
    <section className="py-12 bg-gray-100">
      {/* Header */}
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Featured Memories
      </h2>

      {/* 3‑panel carousel */}
      <div className="flex items-center justify-center space-x-4 px-4">
        {/* Previous */}
        <div className="flex-none w-1/4 aspect-video relative overflow-hidden rounded-lg shadow-lg opacity-50 hover:opacity-75 transition-opacity duration-500">
          <Image
            src={carouselImages[prevIdx]}
            alt={`Slide ${prevIdx + 1}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Current */}
        <div className="flex-none w-1/2 aspect-video relative overflow-hidden rounded-xl shadow-2xl transform scale-105 transition-transform duration-700 ease-in-out">
          <Image
            src={carouselImages[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Next */}
        <div className="flex-none w-1/4 aspect-video relative overflow-hidden rounded-lg shadow-lg opacity-50 hover:opacity-75 transition-opacity duration-500">
          <Image
            src={carouselImages[nextIdx]}
            alt={`Slide ${nextIdx + 1}`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="mt-6 flex justify-center space-x-3">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              idx === current ? "bg-blue-600" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
