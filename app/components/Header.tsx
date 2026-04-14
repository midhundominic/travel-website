"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
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

        <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14 text-gray-800 font-medium">
          <Link href="#" className="hover:text-black">
            Destinations
          </Link>
          <Link href="#" className="hover:text-black">
            Hotels
          </Link>
          <Link href="#" className="hover:text-black">
            Flights
          </Link>
          <Link href="#" className="hover:text-black">
            Bookings
          </Link>
          <button className="hover:text-black">Login</button>

          <button className="border border-gray-800 px-5 py-2 rounded-[5px] hover:bg-yellow-400 hover:border-transparent transition">
            Sign up
          </button>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <span>EN</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <button
          className="md:hidden text-2xl z-50 text-black ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#FDEEDC] shadow-2xl transform transition-transform duration-300 z-50
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
