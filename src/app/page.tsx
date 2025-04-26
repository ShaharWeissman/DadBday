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
      <main className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900">
            Welcome to Dad’s 70th Celebration!
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            We’re celebrating 70 years of epic jokes, legendary BBQ, and
            fatherly wisdom.
          </p>
          <Button
            onClick={handleStartParty}
            variant="filled"
            className="px-8 py-4 font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all">
            Start the Party
          </Button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/logo.jpg"
            alt="Dad's Logo"
            width={350}
            height={350}
            className="rounded-xl shadow-xl object-cover"
            priority
          />
        </div>
      </main>

      {/* Carousel Section */}
      <section className="w-full bg-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Carousel />
        </div>
      </section>

      {/* Company Showcase */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Recommends />
        </div>
      </section>

      {/* Customer Gallery Text */}
      <section className="w-full bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Customer Gallery
          </h2>
          <p className="text-lg text-gray-700">
            This section will showcase a gallery of our satisfied customers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
