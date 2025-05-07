"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/data/prodData";

const PRODUCTS_PER_PAGE = 3;
const ANIMATION_DURATION = 600; // ms

export default function ProductCards() {
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(true);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPage((prev) => (prev + 1) % totalPages);
        setFade(true);
      }, ANIMATION_DURATION);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalPages]);

  const startIdx = page * PRODUCTS_PER_PAGE;
  const visibleProducts = products.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  return (
    <div className="w-full">
      {/* Product Cards Grid */}
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: 340 }}>
        {visibleProducts.map((product, idx) => {
          const isSpecial = ["אילן", "אלה", "אמה"].includes(product.name);
          return (
            <div
              key={product.name}
              className={`flex flex-col items-center bg-white rounded-2xl md:rounded-3xl ${isSpecial ? 'p-0 md:p-0' : 'p-4 md:p-7'} shadow-lg md:shadow-xl h-full animate-fade-in transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group relative border border-blue-100 hover:border-blue-400 hover:ring-2 hover:ring-blue-100 focus-within:ring-2 focus-within:ring-blue-200 ${isSpecial ? 'overflow-hidden' : ''} mx-auto w-full max-w-sm`}
              style={isSpecial ? { minHeight: 340, background: 'linear-gradient(135deg, #e0e7ff 0%, #fff 100%)' } : { minHeight: 280 }}>
              <div className={`relative ${isSpecial ? 'w-40 h-40 md:w-56 md:h-56 mt-2 mb-2 md:mt-4 md:mb-4' : 'w-24 h-24 md:w-32 md:h-32 mb-3 md:mb-5'} rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 group-hover:scale-105 transition-transform duration-300 shadow-md border-4 border-blue-300`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  style={{ objectFit: 'cover' }}
                  sizes={isSpecial ? '224px' : '128px'}
                  priority={idx === 0}
                />
              </div>
              <h3 className={`text-lg md:text-2xl font-bold text-blue-900 ${isSpecial ? 'mt-2 md:mt-4 mb-1 md:mb-2' : 'mb-1 md:mb-2'} text-center`}>
                {product.name}
              </h3>
              <p className={`text-xs md:text-base text-blue-700 text-center ${isSpecial ? 'mb-2 md:mb-3 font-semibold' : 'mb-2 md:mb-3 line-clamp-3'}`}>
                {product.description}
              </p>
              <span className={`text-[10px] md:text-xs px-2 md:px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold mt-auto shadow-sm ${isSpecial ? 'mb-3 md:mb-6' : ''}`}>
                {product.tag}
              </span>
              {isSpecial && (
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl md:rounded-3xl" style={{background: 'radial-gradient(circle at 60% 20%, #a5b4fc77 0%, #fff0 70%)'}}></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 md:mt-10 gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setFade(false); setTimeout(() => { setPage(idx); setFade(true); }, ANIMATION_DURATION); }}
            className={`h-2.5 w-2.5 rounded-full border-2 border-blue-200 transition-all duration-300 focus:outline-none ${
              idx === page ? "bg-blue-700 scale-125 shadow" : "bg-gray-200"
            }`}
            aria-label={`Show products ${idx + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        /* Clamp text lines for description */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
