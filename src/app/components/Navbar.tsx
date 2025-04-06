"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
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
    <Button variant="outline">{children}</Button>
  </Link>
);

export default function Navbar() {
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function handleMouseEnter() {
    // Clear any hide timer when mouse enters
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowCompanyMenu(true);
  }

  function handleMouseLeave() {
    // Wait 500ms before hiding the dropdown
    timeoutRef.current = window.setTimeout(() => {
      setShowCompanyMenu(false);
    }, 500);
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/amir70.png"
            width={100}
            height={50}
            alt="Amir70 Logo"
            className="object-contain"
          />
        </div>

        {/* Nav Links */}
        <ul className="flex-1 flex justify-center items-center gap-6 uppercase font-semibold text-sm">
          <li>
            <NavItem href="/about">About</NavItem>
          </li>
          <li>
            <NavItem href="/products">Products</NavItem>
          </li>

          {/* Company Dropdown with Delay on Mouse Leave */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Button variant="outline">Company</Button>
            <ul
              className={clsx(
                "absolute top-full left-0 mt-1 w-40 rounded-md shadow-lg ring-1 ring-gray-300 bg-white p-2 transition-all duration-300 ease-out",
                {
                  "opacity-0 pointer-events-none scale-95": !showCompanyMenu,
                  "opacity-100 pointer-events-auto scale-100": showCompanyMenu,
                }
              )}>
              <li>
                <Link href="/organization">
                  <span className="cursor-pointer block w-full px-2 py-2 rounded-md text-bluey hover:bg-gray-100 transition-colors">
                    Organization
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <span className="cursor-pointer block w-full px-2 py-2 rounded-md text-bluey hover:bg-gray-100 transition-colors">
                    Join Us
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <NavItem href="/">Home</NavItem>
          </li>
        </ul>

        {/* Timeline Button */}
        <div>
          <Link href="/timeline">
            <Button variant="filled">Timeline</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
