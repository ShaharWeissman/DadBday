"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import timelineData from "@/data/timelineData";

interface EraTimelineProps {
  current: number;
  setCurrent: (idx: number) => void;
  leftRightNav?: boolean;
}

export default function EraTimeline({ current, setCurrent, leftRightNav = true }: EraTimelineProps) {
  const [modal, setModal] = useState<{ image: string; text: string } | null>(null);
  const eras = timelineData;

  // Defensive: clamp current to valid range
  const safeCurrent = Math.max(0, Math.min(current, eras.length - 1));
  const era = eras[safeCurrent];

  return (
    <section className="w-full min-h-screen flex flex-col items-center select-none bg-gradient-to-b from-blue-50 via-white to-blue-100 motion-safe:animate-fadein pt-24 md:pt-40 px-2 mobile-px">
      <h2 className="text-2xl md:text-5xl font-bold text-blue-900 mb-6 md:mb-8 text-center tracking-tight drop-shadow-lg mobile-text-sm">
        המסע בזמן
      </h2>
      <div className="relative w-full max-w-7xl flex flex-col items-center mb-6 md:mb-10 px-1 md:px-4">
        {/* Left Navigation Button */}
        {leftRightNav && (
          <button
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 bg-white border-2 border-blue-300 rounded-full w-9 h-9 md:w-12 md:h-12 shadow-lg flex items-center justify-center text-blue-700 text-2xl md:text-3xl font-bold z-30 hover:bg-blue-50 transition disabled:opacity-30 cursor-pointer mobile-hide"
            onClick={() => setCurrent(Math.max(0, safeCurrent - 1))}
            disabled={safeCurrent === 0}
            aria-label="הקודם"
            style={{ cursor: 'pointer' }}
          >
            &#8592;
          </button>
        )}
        {/* Era Selection Buttons */}
        <div className="w-full flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          {eras.map((eraItem, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <button
                className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                  idx === safeCurrent 
                    ? 'bg-blue-600 text-white scale-110 shadow-lg border-4 border-white' 
                    : 'bg-white text-blue-800 hover:bg-blue-100'
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={eraItem.title}
              >
                <span className="text-lg md:text-xl font-bold">{idx + 1}</span>
              </button>
              <span className="mt-2 text-sm md:text-base font-medium text-blue-900 text-center">
                {eraItem.title}
              </span>
              <span className="text-xs md:text-sm text-blue-600">
                {eraItem.titleEn}
              </span>
            </div>
          ))}
        </div>
        {/* Right Navigation Button */}
        {leftRightNav && (
          <button
            className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white border-2 border-blue-300 rounded-full w-12 h-12 shadow-lg flex items-center justify-center text-blue-700 text-3xl font-bold z-30 hover:bg-blue-50 transition disabled:opacity-30 cursor-pointer"
            onClick={() => setCurrent(Math.min(eras.length - 1, safeCurrent + 1))}
            disabled={safeCurrent === eras.length - 1}
            aria-label="הבא"
            style={{ cursor: 'pointer' }}
          >
            &#8594;
          </button>
        )}
      </div>
      {/* Era Description */}
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 mb-6 md:mb-10">
        <h3 className="text-xl md:text-3xl font-bold text-blue-800 text-center mb-2 md:mb-4">
          {era.title}
        </h3>
        <p className="text-base md:text-xl text-blue-700 text-center font-medium animate-fade-in mb-2 mobile-text-sm">
          {era.description}
        </p>
      </div>
      {/* Slide show grid: 1 image per row on mobile, 2-3 on desktop */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 items-start justify-center mt-3">
        {era.cards.map((card, idx) => (
          <figure key={idx} className="flex flex-col items-center bg-blue-50 rounded-2xl shadow-lg p-2 md:p-4 mobile-card-slim">
            <button
              className="relative w-full h-44 md:h-72 rounded-xl overflow-hidden mb-2 md:mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 focus:outline-none group"
              onClick={() => setModal(card)}
              aria-label="הצג תמונה מוגדלת"
              style={{ cursor: 'zoom-in' }}
            >
              <Image
                src={card.image}
                alt={card.text}
                fill
                className="object-cover rounded-xl transition-all duration-700 group-hover:brightness-90"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1200px) 100vw, 400px"
                priority={idx === 0}
              />
              <span className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-20 bg-black/20 rounded-xl" />
            </button>
            <figcaption className="text-xs md:text-lg text-blue-900 text-center font-semibold mt-1 md:mt-2 mobile-text-sm">
              {card.text}
            </figcaption>
          </figure>
        ))}
      </div>
      {/* Modal for image preview */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl p-3 md:p-6 max-w-xs md:max-w-2xl w-full flex flex-col items-center animate-scale-in mobile-card-slim"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 left-2 md:top-4 md:left-4 text-2xl md:text-3xl text-blue-700 bg-white rounded-full shadow p-2 hover:bg-blue-100 focus:outline-none"
              onClick={() => setModal(null)}
              aria-label="סגור"
            >
              ×
            </button>
            <div className="relative w-full h-60 md:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 mb-2 md:mb-4">
              <Image
                src={modal.image}
                alt={modal.text}
                fill
                className="object-contain rounded-2xl"
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 1200px) 100vw, 600px"
                priority
              />
            </div>
            <div className="text-base md:text-xl text-blue-900 font-semibold text-center mt-1 md:mt-2 mobile-text-sm">
              {modal.text}
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(40px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .motion-safe\\:animate-fadein {
          animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </section>
  );
}
