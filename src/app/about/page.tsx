"use client";
import Image from "next/image";
import aboutData from "@/data/aboutData";

export default function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 pt-32">
      <div className="max-w-6xl w-full flex flex-col gap-20">
        {aboutData.map((item, idx) => (
          <section
            key={item.title}
            className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image side */}
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-72 md:h-96 relative bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            {/* Text side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
