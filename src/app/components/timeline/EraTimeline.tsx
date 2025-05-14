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
          {eras.map((eraItem, idx) => {
            // Different styles for each era button
            const buttonStyles = [
              "bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700", // Era 1
              "bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700", // Era 2
              "bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700", // Era 3
              "bg-gradient-to-br from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"  // Era 4
            ];
            
            const activeStyles = [
              "border-indigo-200", // Era 1
              "border-emerald-200", // Era 2
              "border-amber-200", // Era 3
              "border-rose-200"  // Era 4
            ];
            
            const textStyles = [
              "text-indigo-800", // Era 1
              "text-emerald-800", // Era 2
              "text-amber-800", // Era 3
              "text-rose-800"  // Era 4
            ];
            
            const buttonStyle = buttonStyles[idx % buttonStyles.length];
            const activeStyle = activeStyles[idx % activeStyles.length];
            const textStyle = textStyles[idx % textStyles.length];
            
            return (
              <div key={idx} className="flex flex-col items-center">
                <button
                  className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-md transition-all duration-300 text-white ${
                    idx === safeCurrent 
                      ? `${buttonStyle} scale-110 shadow-lg border-4 ${activeStyle}` 
                      : `${buttonStyle}`
                  }`}
                  onClick={() => setCurrent(idx)}
                  aria-label={eraItem.title}
                >
                  <span className="text-lg md:text-xl font-bold">{idx + 1}</span>
                  <span className="text-xs md:text-sm font-medium">{eraItem.yearRange}</span>
                </button>
                <span className={`mt-2 text-sm md:text-base font-medium ${textStyle} text-center`}>
                  {eraItem.title}
                </span>
                <span className="text-xs md:text-sm text-gray-600">
                  {eraItem.titleEn}
                </span>
              </div>
            );
          })}
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
      {/* Era Title and Description - Consistent format with just color changes */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-8 text-center">
        {/* Color themes for each era */}
        <h2 className={`text-3xl md:text-4xl font-bold mb-1 ${
          safeCurrent === 0 ? 'text-indigo-900' :
          safeCurrent === 1 ? 'text-emerald-900' :
          safeCurrent === 2 ? 'text-amber-900' :
          'text-rose-900'
        }`}>{era.title}</h2>
        
        <div className={`w-24 h-1 mx-auto mb-2 ${
          safeCurrent === 0 ? 'bg-indigo-600' :
          safeCurrent === 1 ? 'bg-emerald-600' :
          safeCurrent === 2 ? 'bg-amber-600' :
          'bg-rose-600'
        }`}></div>
        
        <h3 className={`text-xl md:text-2xl font-medium mb-2 ${
          safeCurrent === 0 ? 'text-indigo-700' :
          safeCurrent === 1 ? 'text-emerald-700' :
          safeCurrent === 2 ? 'text-amber-700' :
          'text-rose-700'
        }`}>{era.titleEn}</h3>
        
        <div className={`inline-block px-3 py-1 rounded-full text-sm mb-3 ${
          safeCurrent === 0 ? 'bg-indigo-100 text-indigo-800' :
          safeCurrent === 1 ? 'bg-emerald-100 text-emerald-800' :
          safeCurrent === 2 ? 'bg-amber-100 text-amber-800' :
          'bg-rose-100 text-rose-800'
        }`}>{era.yearRange}</div>
        
        <p className="text-lg text-gray-700">{era.description}</p>
      </div>
      {/* Unified grid layout with color themes for each era */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {era.cards.map((card, idx) => {
            // Common layouts for all eras
            const positions = [
              "md:col-span-6", // Half width
              "md:col-span-3", // Quarter width
              "md:col-span-3", // Quarter width
              "md:col-span-4", // Third width
              "md:col-span-4", // Third width
              "md:col-span-4"  // Third width
            ];
            
            // Get current era's theme colors
            const themeColors = {
              bg: safeCurrent === 0 ? 'bg-indigo-50' :
                  safeCurrent === 1 ? 'bg-emerald-50' :
                  safeCurrent === 2 ? 'bg-amber-50' :
                  'bg-rose-50',
              border: safeCurrent === 0 ? 'border-indigo-200' :
                      safeCurrent === 1 ? 'border-emerald-200' :
                      safeCurrent === 2 ? 'border-amber-200' :
                      'border-rose-200',
              text: safeCurrent === 0 ? 'text-indigo-800' :
                    safeCurrent === 1 ? 'text-emerald-800' :
                    safeCurrent === 2 ? 'text-amber-800' :
                    'text-rose-800',
              shadow: safeCurrent === 0 ? 'shadow-indigo-100' :
                      safeCurrent === 1 ? 'shadow-emerald-100' :
                      safeCurrent === 2 ? 'shadow-amber-100' :
                      'shadow-rose-100'
            };
            
            const position = positions[idx % positions.length];
            
            return (
              <div key={idx} className={`${position}`}>
                <div className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${themeColors.bg} border ${themeColors.border}`}>
                  {/* Image on top */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <button
                      className="w-full h-full relative focus:outline-none"
                      onClick={() => setModal(card)}
                      aria-label="הצג תמונה מוגדלת"
                      style={{ cursor: 'zoom-in' }}
                    >
                      <Image
                        src={card.image}
                        alt={card.text}
                        fill
                        className="object-contain"
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1200px) 100vw, 400px"
                        priority={idx === 0}
                      />
                    </button>
                  </div>
                  
                  {/* Text below image - right aligned for Hebrew */}
                  <div className="p-3">
                    <p className={`text-sm md:text-base leading-tight ${themeColors.text} text-right`}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=Dancing+Script:wght@400;500;600&family=Roboto+Mono:wght@400;500&display=swap');

        .font-handwriting {
          font-family: 'Caveat', 'Dancing Script', cursive;
        }

        .font-mono {
          font-family: 'Roboto Mono', monospace;
        }

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
        .motion-safe\:animate-fadein {
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
