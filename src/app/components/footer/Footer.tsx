"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-blue-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex flex-wrap justify-center gap-8 text-blue-700 font-semibold text-base">
          <li>
            <Link href="/">דף הבית</Link>
          </li>
          <li>
            <Link href="/about">על אמיר</Link>
          </li>
          <li>
            <Link href="/products">מוצרים</Link>
          </li>
          <li>
            <Link href="/organization">החברה</Link>
          </li>
          <li>
            <Link href="/timeline">ציר זמן</Link>
          </li>
        </ul>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Amir 70. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
