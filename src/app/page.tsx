"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import Button from "@/app/components/ui/Button";
import Carousel from "@/app/components/carousel/Carousel";
import Footer from "@/app/components/footer/Footer";
import Recommends from "./components/recomends/Recommends";
import dynamic from "next/dynamic";
import { orgTreeData } from "@/data/orgData";

const ProductCards = dynamic(() => import("./components/products/ProductCards"), {
  ssr: false,
});

// --- HEADER STYLE CONSTANTS ---
const sectionHeader = "text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 text-center tracking-tight drop-shadow-lg max-w-4xl mx-auto";
const sectionHeaderLight = "text-3xl md:text-4xl font-extrabold text-[#d3e3fa] mb-2 text-center tracking-tight drop-shadow-lg max-w-4xl mx-auto";
const sectionSubHeader = "text-lg md:text-xl text-blue-600 mb-6 text-center font-medium max-w-4xl mx-auto";
const sectionSubHeaderLight = "text-lg md:text-xl text-blue-200 mb-6 text-center font-medium max-w-4xl mx-auto";

// Organization Carousel Component
function OrgCarousel() {
  const [currentMembers, setCurrentMembers] = useState<typeof orgTreeData>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Get all members from the tree (flatten the hierarchy)
  const getAllMembers = (members: typeof orgTreeData = orgTreeData): typeof orgTreeData => {
    let allMembers: typeof orgTreeData = [];
    
    const traverse = (members: typeof orgTreeData) => {
      for (const member of members) {
        allMembers.push(member);
        if (member.children && member.children.length > 0) {
          traverse(member.children);
        }
      }
    };
    
    traverse(members);
    return allMembers;
  };
  
  // Rotate members every 4 seconds
  useEffect(() => {
    const allMembers = getAllMembers();
    
    // Initial set
    const getRandomMembers = () => {
      const shuffled = [...allMembers].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };
    
    setCurrentMembers(getRandomMembers());
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // After fade out, change members and fade in
      setTimeout(() => {
        setCurrentMembers(getRandomMembers());
        setIsTransitioning(false);
      }, 500);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full">
      <div 
        className={`flex flex-col md:flex-row gap-6 w-full justify-center items-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {currentMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center bg-blue-50 rounded-2xl p-4 shadow w-48 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-blue-200 mb-2 flex items-center justify-center overflow-hidden">
              {member.imageSrc ? (
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt || member.name}
                  width={64}
                  height={64}
                  className="object-cover rounded-full"
                />
              ) : (
                <span className="text-xl font-bold text-blue-800">
                  {member.name.charAt(0)}
                </span>
              )}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
            <p className="text-sm md:text-base text-gray-600 text-center">{member.role}</p>
            {member.roleEn && (
              <p className="text-xs text-gray-500 text-center mt-1">{member.roleEn}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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
      <main className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 px-3 py-12 pt-24 bg-white rounded-2xl shadow-xl">
        {/* Text (Hebrew, right) */}
        <div className="flex-1 space-y-6 text-right md:pr-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            ברוכים הבאים לאתר ה70 של מפעל החיים - ויסמן
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 font-semibold leading-relaxed">
            שבעים שנות ניהול חוצה דורות, גאונות, פתרונות יצירתיים, וסטארטאפ אחד ששמו: משפחה.
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
      <section className="w-full py-10 mt-4 bg-[#495872]">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <h2 className={sectionHeaderLight}>
            זכרונות נבחרים
          </h2>
          <p className={sectionSubHeaderLight}>
            רגעים מיוחדים שנשארים איתנו לנצח
          </p>
          <Carousel />
          <div className="mt-6 text-center">
            <Button
              onClick={() => router.push("/timeline")}
              variant="filled"
              size="md"
              className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-6 py-2 shadow-lg transition-all duration-300"
            >
              לצפייה בציר הזמן המלא →
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="mt-6 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className={sectionHeader}>
            המוצרים שלנו
          </h2>
          <p className={sectionSubHeader}>
            המשפחה המדהימה שיצרנו יחד
          </p>
          <div className="w-full max-w-3xl mx-auto">
            <ProductCards />
          </div>
          <div className="mt-6 text-center">
            <Button
              onClick={() => router.push("/products")}
              variant="filled"
              size="md"
              className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-6 py-2 shadow-lg transition-all duration-300"
            >
              לכל המוצרים שלנו →
            </Button>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="mt-6 py-8 bg-[#495872]">
        <div className="max-w-2xl mx-auto rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className={sectionHeaderLight}>
            הארגון שלנו
          </h2>
          <p className={sectionSubHeaderLight}>
            המבנה הארגוני של משפחת וייסמן
          </p>
          <OrgCarousel />
          <div className="mt-6">
            <Button
              onClick={() => router.push("/organization")}
              variant="filled"
              size="md"
              className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-6 py-2 shadow-lg transition-all duration-300"
            >
              לעץ המשפחה המלא →
            </Button>
          </div>
        </div>
      </section>

      {/* Company Showcase */}
      <section className="w-full mt-6 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className={sectionHeader}>
            המלצות
          </h2>
          <p className={sectionSubHeader}>
            מה אומרים עלינו
          </p>
          <Recommends />
          <div className="mt-6 text-center">
            <Button
              onClick={() => router.push("/about")}
              variant="filled"
              size="md"
              className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-6 py-2 shadow-lg transition-all duration-300"
            >
              עוד עלינו →
            </Button>
          </div>
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
