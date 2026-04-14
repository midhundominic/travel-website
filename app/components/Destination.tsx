"use client";

import Image from "next/image";
import { Send } from "lucide-react";

const destinations = [
  {
    title: "Rome, Italy",
    price: "$5.42k",
    days: "10 Days Trip",
    image: "/destination/rome.png",
  },
  {
    title: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
    image: "/destination/london.jpg",
  },
  {
    title: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
    image: "/destination/europe.png",
  },
];

export default function TopDestinations() {
  return (
    <section className="relative py-20 bg-[#F8F8F8] overflow-hidden">
      <div className="absolute right-10 top-[70%] -translate-y-1/2 w-40 h-40 opacity-60">
        <Image
          src="/destination/Decore.svg"
          alt="decor"
          fill
          className="object-contain"
        />
      </div>

      <div className="text-center mb-16">
        <p className="text-[#5E6282] font-medium">Top Selling</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E4B] mt-2">
          Top Destinations
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 relative z-10">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative w-full h-60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-[#1E1E4B]">{item.title}</h3>
                <span className="text-gray-500">{item.price}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Send size={16} color="black" fill="black" />
                <span>{item.days}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
