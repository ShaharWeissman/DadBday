"use client"; // For React hooks (App Router)

import { useState } from "react";
import Image from "next/image";
import timelineData from "@/data/timelineData";

export default function TimelinePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex < timelineData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const currentItem = timelineData[currentIndex];

  return (
    <div className="min-h-screen mt-6 flex items-center justify-center bg-gradient-to-br from-white to-blue-50 p-6 relative">
      {/* Left Arrow (only if not on first slide) */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-10 bg-bluey text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:bg-blue-700 shadow-xl">
          &lt;
        </button>
      )}

      {/* Right Arrow (only if not on last slide) */}
      {currentIndex < timelineData.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-10 bg-bluey text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:bg-blue-700 shadow-xl">
          &gt;
        </button>
      )}

      {/* The main card */}
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-8">
        {/* Year range */}
        <h2 className="text-4xl font-bold text-bluey text-center mb-8">
          {currentItem.yearRange}
        </h2>

        {/* Image + Text */}
        <div className="flex flex-col items-center">
          {/* Image box with a border */}
          <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-md border-4 border-blue-300">
            <Image
              src={currentItem.image}
              alt={currentItem.yearRange}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700 text-xl mt-6 text-center leading-relaxed">
            {currentItem.text}
          </p>
        </div>
      </div>
    </div>
  );
}
