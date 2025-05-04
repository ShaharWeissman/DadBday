"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const recommendations = [
  {
    name: "McDonald's",
    quote: "If Amir was on the menu – he'd be a Happy Meal for the soul.",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png",
  },
  {
    name: "Microsoft",
    quote: "Amir has more uptime than our servers. And that’s saying a lot.",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png",
  },
  {
    name: "Apple",
    quote: "If Amir was a product, he’d be the iAmir.",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
  },
  {
    name: "DocuSign",
    quote: "We’ve seen millions of signatures, but Amir’s signs off with style.",
    logo: "https://1000logos.net/wp-content/uploads/2020/08/DocuSign-Logo.png",
  },
  {
    name: "IDF",
    quote: "במבחן גיוס הכריזמה – אמיר היה סיירת.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IDF_Logo.svg",
  },
  {
    name: "Israeli Air Force",
    quote: "אמיר הוא כמו מטוס קרב – חד, מהיר, ותמיד מגיע גבוה.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Israeli_Air_Force_emblem.png",
  },
  {
    name: "NASA",
    quote: "Amir’s BBQ is the most out-of-this-world discovery we've made.",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/NASA-Logo.png",
  },
  {
    name: "Google",
    quote: "We searched the world. Amir was the top result.",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
  },
  {
    name: "Amazon",
    quote: "Prime charisma, next-day delivery.",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo.png",
  },
  {
    name: "Facebook",
    quote: "If Amir made a post, it would go viral in seconds.",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
  },
  {
    name: "Spotify",
    quote: "Amir's playlist: 100% hits, 0% skips.",
    logo: "https://1000logos.net/wp-content/uploads/2017/08/Spotify-logo.png",
  },
  {
    name: "Tesla",
    quote: "If Amir was a car, he'd run on pure inspiration.",
    logo: "https://1000logos.net/wp-content/uploads/2018/02/Tesla-Logo.png",
  },
  {
    name: "Intel",
    quote: "Amir is the processor of every great idea.",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Intel-Logo.png",
  },
  {
    name: "RedBull",
    quote: "Amir gives everyone wings.",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Red-Bull-Logo.png",
  },
  {
    name: "Waze",
    quote: "Wherever Amir goes, everyone follows.",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Waze-logo.png",
  },
  {
    name: "Disney",
    quote: "Amir brings magic to every day.",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Disney-Logo.png",
  },
  {
    name: "חברה כלשהי",
    quote: "במבחן גיוס הכריזמה – אמיר היה סיירת.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IDF_Logo.svg",
  },
  {
    name: "עוד חברה",
    quote: "אמיר הוא כמו מטוס קרב – חד, מהיר, ותמיד מגיע גבוה.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Israeli_Air_Force_emblem.png",
  },
];

const PAGE_SIZE = 6;

export default function Recommends() {
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPage((prev) => (prev + 1) % Math.ceil(recommendations.length / PAGE_SIZE));
        setFade(true);
      }, 450);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentRecs = recommendations.slice(start, end);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-2">
        <h2 className="text-right text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 tracking-tight drop-shadow-lg" dir="rtl">לקוחותינו ממליצים</h2>
        <div className="relative min-h-[340px]">
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {currentRecs.map((rec, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-4 flex flex-col items-center text-right text-blue-900 text-center md:text-right shadow-md hover:shadow-lg transition bg-white scale-95"
                dir="rtl"
              >
                <div className="w-16 h-16 relative mb-2">
                  <Image
                    src={rec.logo}
                    alt={rec.name}
                    fill
                    className="rounded-full object-contain"
                    sizes="64px"
                    priority={idx < 2}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-right" dir="rtl">{rec.name}</h3>
                <p className="text-gray-600 text-xs text-right" dir="rtl">{rec.quote}</p>
              </div>
            ))}
          </div>
          {/* Page Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(recommendations.length / PAGE_SIZE) }).map((_, i) => (
              <button
                key={i}
                className={`h-2.5 w-2.5 rounded-full border-2 border-blue-300 transition-all duration-300 ${
                  i === page ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setPage(i);
                    setFade(true);
                  }, 450);
                }}
                aria-label={`Show page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
