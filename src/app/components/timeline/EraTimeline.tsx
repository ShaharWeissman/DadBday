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
  const [dragging, setDragging] = useState(false);
  const [modal, setModal] = useState<{ image: string; text: string } | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const eras = timelineData;

  // Drag logic
  const handleDrag = (clientX: number) => {
    const bar = barRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = x / rect.width;
    const idx = Math.round(percent * (eras.length - 1));
    setCurrent(idx);
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    document.body.style.cursor = 'grabbing';
    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      window.addEventListener('touchmove', onMove);
      window.addEventListener('touchend', onUp);
    } else {
      clientX = e.clientX;
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    }
    handleDrag(clientX);
  };

  const onMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    let clientX: number;
    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    handleDrag(clientX);
  };

  const onUp = () => {
    setDragging(false);
    document.body.style.cursor = '';
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onUp);
    window.removeEventListener('touchmove', onMove);
    window.removeEventListener('touchend', onUp);
  };

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
        <div className="flex-1 relative flex flex-col items-center w-full">
          <div ref={barRef} className="relative w-full flex items-center">
            <div className="absolute left-0 right-0 top-1/2 h-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full -translate-y-1/2 z-0" />
            {/* Draggable cursor */}
            <div
              className="absolute z-20 top-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `calc(${(safeCurrent / (eras.length - 1)) * 100}% - 1.25rem)` }}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <button
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-700 border-4 border-white shadow-lg flex items-center justify-center cursor-pointer transition-transform duration-200 active:scale-95"
                style={{ touchAction: 'none', cursor: 'pointer' }}
                aria-label="הזז את הסמן בזמן"
              >
                <span className="block w-4 h-4 bg-white rounded-full"></span>
              </button>
            </div>
            {/* Era ticks as sets */}
            <div className="flex w-full justify-between z-10">
              {eras.map((era, idx) => (
                <button
                  key={era.yearRange}
                  className={`relative flex flex-col items-center focus:outline-none group cursor-pointer`}
                  onClick={() => setCurrent(idx)}
                  aria-label={era.yearRange}
                  style={{ cursor: 'pointer' }}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition-all duration-300 shadow-md
                      ${idx === safeCurrent ? 'bg-blue-600 border-blue-900 scale-110' : 'bg-white border-blue-300'}
                      group-hover:scale-105`}
                  >
                    <span className={`block w-2.5 h-2.5 rounded-full ${idx === safeCurrent ? 'bg-white' : 'bg-blue-400'}`} />
                  </span>
                  <span className={`mt-2 text-sm md:text-base font-bold text-blue-900 ${idx === safeCurrent ? 'font-extrabold underline' : ''}`}>{era.yearRange}</span>
                </button>
              ))}
            </div>
          </div>
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
      {/* Era content */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-2 md:p-8 flex flex-col items-center mobile-card-slim">
        <h3 className="text-xl md:text-4xl font-bold text-blue-900 mb-1 md:mb-2 animate-fade-in text-center drop-shadow-lg mobile-text-sm">
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
