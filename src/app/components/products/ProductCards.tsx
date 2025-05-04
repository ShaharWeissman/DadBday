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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full flex flex-col items-center">
          {/* Section Title and Subtitle */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3 text-center tracking-tight drop-shadow-lg">מוצרים מיוחדים</h2>
          <p className="text-lg md:text-xl text-blue-700 mb-12 text-center max-w-2xl">
            בחרו מוצר שמדבר אליכם מתוך הקולקציה שלנו – כל אחד מהם נוצר באהבה, עם קריצה והומור, בדיוק כמו שאבא אוהב.
          </p>

          {/* Product Cards Grid */}
          <div
            className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            style={{ minHeight: 320 }}
          >
            {visibleProducts.map((product, idx) => (
              <div
                key={product.name}
                className="flex flex-col items-center bg-white rounded-3xl p-7 shadow-xl h-full animate-fade-in transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group relative border border-blue-100"
                style={{ minHeight: 340 }}
              >
                <div className="relative w-32 h-32 mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    style={{ objectFit: 'cover' }}
                    sizes="128px"
                    priority={idx === 0}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2 text-center">{product.name}</h3>
                <p className="text-base md:text-lg text-blue-700 text-center mb-3">{product.description}</p>
                <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold mt-auto shadow-sm">{product.tag}</span>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 gap-2">
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
          `}</style>
        </div>
      </div>
    </section>
  );
}
