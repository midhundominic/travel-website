"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* LOGO + DESC */}
          <div>
            <h2 className="text-3xl font-bold text-[#1E1E4B] relative inline-block">
              Jadoo.
            </h2>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-[#1E1E4B] mb-4">Company</h4>
            <ul className="space-y-3 text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-[#1E1E4B] mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>

          {/* MORE */}
          <div>
            <h4 className="font-semibold text-[#1E1E4B] mb-4">More</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>

          {/* SOCIAL + APP */}
          <div>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mb-6">
              {/* FACEBOOK */}
              <div className="w-10 h-10 rounded-full border flex items-center justify-center shadow-sm hover:shadow-md transition">
                <Image
                  src="/social/facebook.svg"
                  alt="facebook"
                  width={10}
                  height={10}
                />
              </div>

              {/* INSTAGRAM (GRADIENT BG) */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-sm">
                <Image
                  src="/social/instagram.svg"
                  alt="instagram"
                  width={16}
                  height={16}
                />
              </div>

              {/* TWITTER */}
              <div className="w-10 h-10 rounded-full border flex items-center justify-center shadow-sm hover:shadow-md transition">
                <Image
                  src="/social/twitter.svg"
                  alt="twitter"
                  width={16}
                  height={16}
                />
              </div>
            </div>

            {/* APP TEXT */}
            <h4 className="text-[#5E6282] mb-4 font-medium">
              Discover our app
            </h4>

            {/* STORE BUTTONS */}
            <div className="flex gap-3">
              <Image
                src="/social/google-play.svg"
                alt="google play"
                width={120}
                height={40}
              />

              <Image
                src="/social/app-store.svg"
                alt="app store"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          All rights reserved@jadoo.co
        </div>
      </div>
    </footer>
  );
}
