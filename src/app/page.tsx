"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import Button from "@/app/components/ui/Button";
import Carousel from "@/app/components/carousel/Carousel";
import Footer from "@/app/components/footer/Footer";
import Recommends from "./components/recomends/Recommends";

export default function Home() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleStartParty = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/timeline");
    }, 700);
  };

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br from-white to-blue-50 transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <main className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 px-6 py-20 pt-32 bg-white rounded-3xl shadow-2xl">
        {/* Text (Hebrew, right) */}
        <div className="flex-1 space-y-8 text-right md:pr-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            ברוכים הבאים לאתר של אמיר ליום הולדת 70!
          </h1>
          <p className="text-2xl md:text-3xl text-blue-700 font-semibold leading-relaxed">
            70 שנות ניהול חוצה דורות, גאונות, פתרונות יצירתיים, וסטארטאפ אחד ששמו: משפחה.
            <br />
            <span className="text-base text-gray-500 font-normal">All angels come</span>
          </p>
          <Button
            onClick={handleStartParty}
            variant="filled"
            size="lg"
            shadow
            className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 border-none text-2xl px-12 py-5 hover:from-blue-800 hover:to-blue-500 focus:ring-blue-300 transition-all duration-300 animate-bounce-slow"
          >
            🎉 בואו נתחיל את המסיבה 🎉
          </Button>
        </div>
        {/* Photo (left) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-100 via-blue-200 to-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-200">
            <Image
              src="/images/logo.jpg"
              alt="Dad's Logo"
              fill
              className="object-cover rounded-full shadow-xl"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-white/80 px-4 py-2 rounded-xl shadow text-blue-700 font-bold text-lg border border-blue-200 animate-pulse">
              אמיר 70
            </div>
          </div>
        </div>
      </main>

      {/* Carousel Section */}
      <section className="w-full bg-gray-700 py-12 rounded-3xl shadow-2xl mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <Carousel />
        </div>
      </section>

      {/* Company Showcase */}
      <section className="w-full bg-white py-12 rounded-3xl shadow-2xl mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <Recommends />
        </div>
      </section>

      {/* Customer Gallery Text */}
      <section className="w-full bg-gray-100 py-12 rounded-3xl shadow-2xl mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
          </h2>
          <p className="text-lg text-gray-700">
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
