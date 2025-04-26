"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Recommends() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-xl">
      {/* First Image */}
      <Image
        src="/images/recommends2.jpg" // ← your first company image
        alt="Company View 1"
        fill
        className={`absolute inset-0 object-cover transition-opacity duration-2000 ease-in-out ${
          showFirst ? "opacity-100" : "opacity-0"
        }`}
        priority
      />

      {/* Second Image */}
      <Image
        src="/images/recommends.jpg" // ← your second company image
        alt="Company View 2"
        fill
        className={`absolute inset-0 object-cover transition-opacity duration-2000 ease-in-out ${
          showFirst ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Optional overlay for extra polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
    </div>
  );
}
