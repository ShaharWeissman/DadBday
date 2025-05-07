"use client";
import Image from "next/image";
import aboutData from "@/data/aboutData";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col items-center justify-center p-8 pt-32 relative overflow-hidden font-heebo" dir="rtl">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Waves */}
        <div className="absolute top-0 left-0 w-full h-40 opacity-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#4F46E5"
            />
          </svg>
        </div>

        {/* Circles */}
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-blue-200 opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-indigo-200 opacity-20 animate-float-slow-reverse"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rotate-45 bg-blue-300 opacity-10 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 transform rotate-12 bg-indigo-300 opacity-10 animate-spin-slow-reverse"></div>

        {/* Dotted Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#4F46E5_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
      </div>

      {/* Title Section */}
      <div className="relative w-full max-w-4xl mx-auto mb-16 animate-bounce-in">
        <div className="rounded-3xl bg-white/70 shadow-2xl border-2 border-blue-200 px-8 py-10 backdrop-blur-md relative overflow-hidden text-center">
          <span className="absolute top-4 right-8 text-blue-500 text-2xl md:text-3xl font-black select-none pointer-events-none rotate-12">✨ הסיפור שלנו ✨</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 bg-clip-text tracking-tight drop-shadow-xl mt-8 mb-4">
            הסיפור שלנו
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            מסע מרתק של 70 שנה, מלא בהרפתקאות, המצאות, ורגעים מיוחדים
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col gap-24">
        {aboutData.map((item, idx) => (
          <section
            key={item.title}
            className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} animate-fade-in`}
            dir="rtl"
          >
            {/* Image side */}
            <div className="w-full md:w-1/2 group">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-[480px] relative bg-gradient-to-br from-blue-100 to-indigo-50 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-blue-200/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-end text-right space-y-6" dir="rtl">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 w-full transform transition-all duration-500 hover:shadow-2xl hover:bg-white/90">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 18s ease-in-out infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        @keyframes spin-slow-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.85) translateY(40px); }
          60% { opacity: 1; transform: scale(1.05) translateY(-10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-bounce-in {
          animation: bounce-in 1.1s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) scale(var(--scale)) rotate(var(--rotation));
            opacity: 0.07;
          }
          25% {
            transform: translate(20px, -15px) scale(var(--scale)) rotate(calc(var(--rotation) + 5deg));
            opacity: 0.05;
          }
          50% {
            transform: translate(-5px, 20px) scale(var(--scale)) rotate(calc(var(--rotation) - 3deg));
            opacity: 0.09;
          }
          75% {
            transform: translate(-15px, -10px) scale(var(--scale)) rotate(calc(var(--rotation) + 2deg));
            opacity: 0.06;
          }
        }
        .animate-float-random {
          animation: float-random 12s ease-in-out infinite;
          animation-delay: calc(var(--delay) * -1s);
        }
      `}</style>
    </main>
  );
}
