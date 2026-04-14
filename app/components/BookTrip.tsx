"use client";

import Image from "next/image";
import { Leaf, Map, Send, Building2, Heart } from "lucide-react";

export default function BookTrip() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#5E6282] font-medium mb-3">Easy and Fast</p>

          <h2 className="text-3xl md:text-6xl font-bold text-[#1E1E4B] leading-tight mb-10">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>

          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-xl">
              <Image
                src="/book-trip/destination.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h4 className="font-semibold text-[#1E1E4B]">
                Choose Destination
              </h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-xl">
              <Image
                src="/book-trip/water-sport.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h4 className="font-semibold text-[#1E1E4B]">Make Payment</h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-teal-700 rounded-xl">
              <Image
                src="/book-trip/taxi.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h4 className="font-semibold text-[#1E1E4B]">
                Reach Airport on Selected Date
              </h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-75 h-75 bg-[#59B1E6] opacity-30 blur-[120px] rounded-full"></div>

          <div className="bg-white rounded-2xl shadow-xl p-5 w-[320px] relative">
            <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
              <Image
                src="/book-trip/greece.jpg"
                alt="Trip to Greece"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-[#1E1E4B] mb-2">
              Trip To Greece
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              14–29 June | by Robbin joseph
            </p>

            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                <Leaf size={16} fill="black" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                <Map size={16} fill="black" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                <Send size={16} fill="black" />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>24 people going</span>
              </div>
              <Heart size={18} color="#4152CA" />
            </div>

            <div className="absolute -right-20 bottom-10 bg-white shadow-lg rounded-xl p-4 w-55">
              <p className="text-xs text-gray-400 mb-1">Ongoing</p>

              <div className="flex gap-3 items-center mb-2">
                <Image
                  src="/book-trip/rome.png"
                  alt="Rome"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold">Trip to Rome</h4>
                  <p className="text-xs text-purple-500">40% completed</p>
                </div>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-[40%] h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
