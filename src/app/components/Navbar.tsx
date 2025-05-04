"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState, useRef } from "react";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <button
      className="px-6 py-2 rounded-xl font-semibold text-blue-800 bg-white shadow-sm border border-blue-200 hover:bg-blue-50 hover:text-blue-900 hover:shadow-md active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 cursor-pointer"
    >
      {children}
    </button>
  </Link>
);

export default function Navbar() {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowCompanyMenu(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = window.setTimeout(() => {
      setShowCompanyMenu(false);
    }, 500);
  }

  // Mobile menu toggle
  function toggleMobileMenu() {
    setMobileMenuOpen((open) => !open);
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl shadow-md z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/hero/logo.jpg"
            width={120}
            height={60}
            alt="Amir70 Logo"
            className="rounded-2xl shadow-lg object-contain"
          />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-200 hover:bg-blue-50 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="פתח תפריט"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-5 font-semibold text-base">
          <li>
            <NavItem href="/">דף הבית</NavItem>
          </li>
          <li>
            <NavItem href="/about">הסיפור שלנו</NavItem>
          </li>
          <li>
            <NavItem href="/products">מוצרים</NavItem>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <button
              className="px-6 py-2 rounded-xl font-semibold text-blue-800 bg-white shadow-sm border border-blue-200 hover:bg-blue-50 hover:text-blue-900 hover:shadow-md active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 cursor-pointer"
            >
              החברה
            </button>
            <ul
              className={clsx(
                "absolute top-full left-0 mt-1 w-56 rounded-xl shadow-lg ring-1 ring-blue-200 bg-white p-3 transition-all duration-200 ease-out z-50 flex flex-col gap-2 border border-blue-100",
                {
                  "opacity-0 pointer-events-none scale-98": !showCompanyMenu,
                  "opacity-100 pointer-events-auto scale-100": showCompanyMenu,
                }
              )}
            >
              <li>
                <Link href="/organization">
                  <span className="block w-full px-4 py-2 rounded-lg text-blue-800 font-semibold hover:bg-blue-50 hover:text-blue-900 transition-colors border border-transparent hover:border-blue-200 cursor-pointer">
                    עץ החברה
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <span className="block w-full px-4 py-2 rounded-lg text-blue-800 font-semibold hover:bg-blue-50 hover:text-blue-900 transition-colors border border-transparent hover:border-blue-200 cursor-pointer">
                    הצטרפו אלינו
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/timeline">
              <button
                className="px-7 py-2 rounded-xl font-semibold text-white bg-blue-700 shadow-sm border border-blue-700 hover:bg-blue-800 hover:shadow-md active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 cursor-pointer"
              >
                ציר זמן
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white border-t border-blue-100 shadow-lg flex flex-col gap-2 py-4 z-50 md:hidden animate-fade-in">
            <li>
              <NavItem href="/">דף הבית</NavItem>
            </li>
            <li>
              <NavItem href="/about">הסיפור שלנו</NavItem>
            </li>
            <li>
              <NavItem href="/products">מוצרים</NavItem>
            </li>
            <li>
              <Link href="/organization">
                <span className="block w-full px-4 py-2 rounded-lg text-blue-800 font-semibold hover:bg-blue-50 hover:text-blue-900 transition-colors border border-transparent hover:border-blue-200 cursor-pointer">
                  עץ החברה
                </span>
              </Link>
            </li>
            <li>
              <Link href="/join">
                <span className="block w-full px-4 py-2 rounded-lg text-blue-800 font-semibold hover:bg-blue-50 hover:text-blue-900 transition-colors border border-transparent hover:border-blue-200 cursor-pointer">
                  הצטרפו אלינו
                </span>
              </Link>
            </li>
            <li>
              <Link href="/timeline">
                <button
                  className="w-full px-7 py-2 rounded-xl font-semibold text-white bg-blue-700 shadow-sm border border-blue-700 hover:bg-blue-800 hover:shadow-md active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 cursor-pointer mt-2"
                >
                  ציר זמן
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
