"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-90">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Jadoo Logo"
              width={110}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-18 text-gray-700">
            <Link href="#">Destinations</Link>
            <Link href="#">Hotels</Link>
            <Link href="#">Flights</Link>
            <Link href="#">Bookings</Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <button>Login</button>
          <button className="border px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
            Sign up
          </button>
          <span className="text-sm cursor-pointer">EN ▾</span>
        </div>

        <button
          className="md:hidden text-2xl z-50 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#FDEEDC] shadow-2xl transform transition-transform duration-300 z-40
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            className="self-end text-2xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <div className="flex flex-col gap-6 text-lg text-[#1E1E4B] font-medium">
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Destinations
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Hotels
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Flights
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Bookings
            </Link>
          </div>

          <div className="my-6 border-t border-gray-300"></div>

          <div className="flex flex-col gap-4">
            <button className="text-left text-[#1E1E4B]">Login</button>

            <button className="bg-yellow-400 px-4 py-3 rounded-lg font-medium shadow-md">
              Sign up
            </button>

            <div className="flex items-center gap-1 text-[#1E1E4B] cursor-pointer">
              <span>EN</span>
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="mt-auto text-sm text-gray-500">Travel the world</div>
        </div>
      </div>
    </header>
  );
}
