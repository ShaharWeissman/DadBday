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
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full flex flex-col items-center">
          {/* Section Title and Subtitle */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 text-center tracking-tight">Simple productivity</h2>
          <p className="text-lg md:text-xl text-blue-700 mb-10 text-center max-w-2xl">Plan your day with clarity. Forget distracting digital apps and embrace these small, sturdy pieces of paper.</p>

          {/* Product Cards Grid */}
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-4 gap-8 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            style={{ minHeight: 300 }}
          >
            {visibleProducts.map((product, idx) => (
              <div
                key={product.name}
                className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg h-full animate-fade-in transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group relative"
                style={{ minHeight: 320 }}
              >
                <div className="relative w-28 h-28 mb-4 rounded-xl overflow-hidden bg-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    style={{ objectFit: 'cover' }}
                    sizes="112px"
                    priority={idx === 0}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1 text-center">{product.name}</h3>
                <p className="text-sm md:text-base text-blue-700 text-center mb-2">{product.description}</p>
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-semibold mt-auto">{product.tag}</span>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setFade(false); setTimeout(() => { setPage(idx); setFade(true); }, ANIMATION_DURATION); }}
                className={`h-3 w-3 rounded-full border-2 border-blue-200 transition-all duration-300 focus:outline-none ${
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
          `}</style>
        </div>
      </div>
    </div>
  );
}
