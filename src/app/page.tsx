"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import Button from "@/app/components/ui/Button";
import Carousel from "@/app/components/carousel/Carousel";
import Footer from "@/app/components/footer/Footer";
import Recommends from "./components/recomends/Recommends";
import dynamic from "next/dynamic";
import { organization } from "@/data/orgData";

const ProductCards = dynamic(() => import("./components/products/ProductCards"), {
  ssr: false,
});

// --- HEADER STYLE CONSTANT ---
const sectionHeader = "text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center tracking-tight drop-shadow-lg";
const sectionHeaderLight = "text-3xl md:text-4xl font-bold text-[#d3e3fa] mb-6 text-center tracking-tight drop-shadow-lg";

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
      <main className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 px-3 py-10 pt-20 bg-white rounded-2xl shadow-xl">
        {/* Text (Hebrew, right) */}
        <div className="flex-1 space-y-6 text-right md:pr-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            ברוכים הבאים לאתר של אמיר ליום הולדת 70!
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 font-semibold leading-relaxed">
            70 שנות ניהול חוצה דורות, גאונות, פתרונות יצירתיים, וסטארטאפ אחד ששמו: משפחה.
            <br />
            <span className="text-base text-gray-500 font-normal">All angels come</span>
          </p>
          <Button
            onClick={handleStartParty}
            variant="filled"
            size="md"
            shadow
            className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 border-none text-xl px-8 py-4 hover:from-blue-800 hover:to-blue-500 focus:ring-blue-300 transition-all duration-300 animate-bounce-slow"
          >
            🎉 בואו נתחיל את המסיבה 🎉
          </Button>
        </div>
        {/* Photo (left) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] bg-gradient-to-br from-blue-100 via-blue-200 to-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-200">
            <Image
              src="/images/logo.jpg"
              alt="Dad's Logo"
              fill
              className="object-cover rounded-full shadow-xl"
              priority
            />
            <div className="absolute bottom-2 right-2 bg-white/80 px-3 py-1 rounded-xl shadow text-blue-700 font-bold text-base border border-blue-200 animate-pulse">
              אמיר 70
            </div>
          </div>
        </div>
      </main>

      {/* Carousel Section */}
      <section className="w-full py-8 mt-2 bg-[#495872]">
        <div className="max-w-5xl mx-auto px-3 md:px-6">
          <h2 className={sectionHeaderLight}>
            זכרונות נבחרים
          </h2>
          <Carousel />
        </div>
      </section>

      {/* Product Section */}
      <section className="mt-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className={sectionHeader}>
            המוצרים שלנו
          </h2>
          <ProductCards />
        </div>
      </section>

      {/* Organization Section */}
      <section className="mt-6 bg-[#495872]">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className={sectionHeaderLight}>
            הארגון שלנו
          </h2>
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
            {organization.map((member) => (
              <div key={member.id} className="flex flex-col items-center bg-blue-50 rounded-2xl p-4 shadow w-48">
                <div className="w-16 h-16 rounded-full bg-blue-200 mb-2 flex items-center justify-center overflow-hidden">
                  {member.imageSrc ? (
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-xl font-bold text-blue-800">
                      {member.title.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1">{member.title}</h3>
                <p className="text-sm md:text-base text-gray-600 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Showcase */}
      <section className="w-full mt-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className={sectionHeader}>
            המלצות
          </h2>
          <Recommends />
        </div>
      </section>

      {/* Customer Gallery Text */}
      <section className="w-full bg-gray-100 py-6 rounded-2xl shadow-xl mt-4">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className={sectionHeader}></h2>
          <p className="text-base text-gray-700"></p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
