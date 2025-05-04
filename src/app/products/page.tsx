"use client";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "הפרה ששברה את רגלה",
    description: "סיפור בלתי נשכח על פרה אמיצה, הרפתקאות, והרבה צחוק בחווה.",
    imageSrc: "/images/products/cow.png",
    imageAlt: "הפרה ששברה את רגלה",
    gallery: [
      "/images/products/cow1.png",
      "/images/products/cow2.png",
      "/images/products/cow3.png"
    ],
    people: [
      { name: "אילן", image: "/images/products/ilan.png" },
      { name: "אלה", image: "/images/products/ella.png" }
    ]
  }
];

export default function ProductsPage() {
  const product = products[0];
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 pt-32 min-h-screen flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto px-6 rounded-3xl shadow-2xl bg-white p-0 flex flex-col items-center relative overflow-hidden">
        {/* Hero Image with floating effect */}
        <div className="relative w-full h-80 md:h-[420px] rounded-t-3xl overflow-visible flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className="object-contain drop-shadow-2xl scale-110 animate-float"
            sizes="100vw"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-blue-700/80 text-white px-4 py-2 rounded-xl shadow text-lg font-bold tracking-widest">
            {product.title}
          </div>
        </div>
        {/* Description with glass effect */}
        <div className="w-full px-6 py-6 bg-white/80 backdrop-blur-sm rounded-b-3xl shadow-lg flex flex-col items-center -mt-6 z-10">
          <p className="text-xl md:text-2xl text-blue-900 text-center font-semibold mb-6 bg-blue-50/60 px-4 py-2 rounded-xl shadow">
            {product.description}
          </p>
          {/* People Row */}
          <div className="flex justify-center gap-8 mb-8">
            {product.people.map((person) => (
              <div key={person.name} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-blue-100 overflow-hidden mb-2 flex items-center justify-center shadow-lg border-2 border-blue-200 group-hover:scale-110 transition-transform duration-300">
                  <Image src={person.image} alt={person.name} width={80} height={80} className="object-cover" />
                </div>
                <span className="text-blue-900 font-bold text-lg mt-1 group-hover:text-blue-600 transition-colors duration-200">{person.name}</span>
              </div>
            ))}
          </div>
          {/* Gallery with parallax hover */}
          <div className="flex gap-4 justify-center mt-2 flex-wrap">
            {product.gallery.map((img, idx) => (
              <div key={img} className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-blue-200 bg-white transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                <Image src={img} alt={product.title + " " + (idx+1)} width={128} height={128} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1.1); }
          50% { transform: translateY(-12px) scale(1.13); }
          100% { transform: translateY(0) scale(1.1); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
