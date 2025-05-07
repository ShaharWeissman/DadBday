"use client";
import Image from "next/image";
import { products } from "@/data/prodData";
import { useState } from "react";


type Product = (typeof products)[number];

export default function ProductsPage() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 pt-28 px-2 flex flex-col items-center overflow-x-hidden relative font-heebo">
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 z-0 opacity-40 animate-spin-slow pointer-events-none select-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#60a5fa"
            d="M47.8,-62.7C59.4,-55.2,64.7,-37.4,68.6,-20.3C72.5,-3.2,75,13.2,69.7,28.2C64.4,43.2,51.2,56.7,36.5,63.7C21.8,70.7,5.9,71.1,-10.2,73.2C-26.2,75.3,-42.4,79.1,-54.2,71.1C-66,63.2,-73.5,43.6,-71.1,26.7C-68.7,9.8,-56.4,-4.5,-48.1,-18.3C-39.7,-32.1,-35.3,-45.3,-26.1,-54.2C-16.9,-63.1,-2.8,-67.7,13.4,-72.2C29.6,-76.7,59.4,-70.2,47.8,-62.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-72 h-72 z-0 opacity-30 animate-bounce-slow pointer-events-none select-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3b82f6"
            d="M42.1,-68.5C53.6,-62.3,61.6,-53.2,68.9,-42.5C76.2,-31.8,82.8,-19.5,81.4,-7.1C80,5.3,70.7,17.7,63.8,31.2C56.9,44.7,52.4,59.2,42.6,66.7C32.8,74.2,17.7,74.7,3.7,69.7C-10.3,64.7,-20.6,54.2,-33.4,48.3C-46.2,42.4,-61.6,41.1,-68.4,32.8C-75.2,24.5,-73.4,9.2,-69.5,-5.3C-65.6,-19.8,-59.7,-33.4,-50.7,-40.2C-41.7,-47.1,-29.7,-47.2,-18.3,-51.3C-6.9,-55.4,4,-63.6,16.8,-68.4C29.6,-73.1,44.7,-74.7,42.1,-68.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute top-20 right-1/4 w-32 h-32 z-0 opacity-30 animate-wiggle pointer-events-none select-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#93c5fd"
            d="M41.6,-65.2C55.7,-55.4,68.6,-44.4,74.8,-30.6C81,-16.9,80.6,-0.4,76.6,14.9C72.6,30.2,65,44.3,53.5,54.7C41.9,65.1,26.5,71.8,10.1,71.4C-6.4,71,-22.7,63.6,-34.1,53.2C-45.6,42.7,-52.2,29.2,-60.1,14.6C-68.1,0.1,-77.4,-15.6,-73.6,-27.3C-69.8,-39,-52.9,-46.7,-38.2,-56.2C-23.5,-65.8,-11.8,-77.2,0.1,-77.4C12,-77.6,24,-66.6,41.6,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      {/* Decorative SVG background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 pointer-events-none w-[900px] h-[320px] opacity-40 blur-2xl select-none">
        <svg
          width="900"
          height="320"
          viewBox="0 0 900 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse
            cx="450"
            cy="160"
            rx="430"
            ry="110"
            fill="url(#paint0_radial)"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(450 160) scale(430 110)"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f0f9ff" stopOpacity="0.8" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Heading and Subheading */}
      <section className="w-full max-w-3xl mx-auto mb-10 px-2 md:px-0 text-right animate-bounce-in">
        <div className="rounded-3xl bg-white/70 shadow-2xl border-2 border-blue-200 px-6 py-8 md:py-10 md:px-12 backdrop-blur-md relative overflow-hidden">
          <span className="absolute top-4 right-8 text-blue-500 text-2xl md:text-3xl font-black select-none pointer-events-none rotate-12">
            ✨ דף מוצרים ✨
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 bg-clip-text mb-3 md:mb-4 drop-shadow-xl mt-12">
            המוצרים של אבא
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl whitespace-pre-line leading-relaxed">
            מהפטנט הראשון ועד רעיונות שלא ביקשו אישור — כל ההמצאות במקום אחד.
            במהלך השנים, אבא לא הפסיק לחשוב, לאלתר, ולהמציא. פה תמצאו את המיטב
            שבמיטב: מוצרים מקוריים, פתרונות לא־נחוצים לבעיות שלא קיימות, והרבה
            קסם ויסמני חלק מהם אמיתיים. חלק מהם רק הוא מבין. וכן — כולם גאוניים
            בדרכם.
          </p>
          <span className="absolute bottom-4 left-8 text-yellow-400 text-3xl md:text-4xl font-black select-none pointer-events-none animate-wiggle">
            🪄
          </span>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <button
              key={product.name}
              className="bg-white rounded-xl shadow-md border-2 border-blue-100 p-0 flex flex-col items-center transition-all duration-300 group focus:outline-none cursor-pointer hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.06] hover:border-blue-400 active:scale-95 hover:rotate-1 animate-groove-card"
              onClick={() => setModalProduct(product)}
              tabIndex={0}
              aria-label={`הצג ${product.name}`}
              type="button"
              style={{ WebkitTapHighlightColor: "transparent" }}>
              <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-t-xl bg-neutral-100 group-hover:bg-blue-50 transition-colors duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-3 group-hover:drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-4 flex flex-col items-center">
                <h3 className="text-base md:text-lg font-extrabold text-blue-700 mb-1 text-center group-hover:text-indigo-600 transition-colors duration-300 tracking-wide drop-shadow">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 text-center group-hover:text-blue-500 transition-colors duration-300 font-semibold">
                  {product.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-100/90 via-blue-50/90 to-indigo-100/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setModalProduct(null)}>
          <div
            className="relative bg-white/90 rounded-3xl shadow-2xl p-0 md:p-10 max-w-2xl w-[95vw] flex flex-col items-center animate-scale-in overflow-hidden border-4 border-blue-300"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-8 right-1/2 translate-x-1/2 z-10 text-4xl md:text-5xl text-white bg-gradient-to-br from-blue-500 via-indigo-400 to-blue-400 rounded-full shadow-2xl p-3 hover:scale-125 hover:rotate-12 hover:bg-blue-400 focus:outline-none border-4 border-white transition-all duration-300"
              onClick={() => setModalProduct(null)}
              aria-label="סגור"
              style={{ WebkitTapHighlightColor: "transparent" }}>
              <span className="sr-only">סגור</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10">
                <line x1="24" y1="8" x2="8" y2="24" />
                <line x1="8" y1="8" x2="24" y2="24" />
              </svg>
            </button>
            <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
              <Image
                src={modalProduct.image}
                alt={modalProduct.name}
                fill
                className="object-contain rounded-2xl shadow-xl"
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>
            <div className="text-xl md:text-2xl text-blue-900 font-bold text-center mt-4 mb-2">
              {modalProduct.name}
            </div>
            <div className="text-base md:text-lg text-gray-700 text-center mb-4 px-4">
              {modalProduct.description}
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 24s linear infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-32px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(6deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(40px);
          }
          60% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes groove-card {
          0% {
            box-shadow: 0 0 0 0 #3b82f6;
          }
          50% {
            box-shadow: 0 4px 32px 0 #3b82f633;
          }
          100% {
            box-shadow: 0 0 0 0 #3b82f6;
          }
        }
        .animate-groove-card:hover {
          animation: groove-card 1.6s cubic-bezier(0.4, 0, 0.2, 1) 1;
        }
      `}</style>
    </main>
  );
}
