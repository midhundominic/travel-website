"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div>
            <h2 className="text-3xl primary font-bold text-[#1E1E4B] relative inline-block">
              Jadoo.
            </h2>

            <p className="text-inline mt-4 text-sm leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h4 className="font-primary bold text-primary mb-4">Company</h4>
            <ul className="space-y-3 text-inline">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E1E4B] mb-4">Contact</h4>
            <ul className="space-y-3 text-inline">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E1E4B] mb-4">More</h4>
            <ul className="space-y-3 text-inline">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>

          <div>
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center shadow-sm hover:shadow-md transition">
                <Image
                  src="/social/facebook-icon.svg"
                  alt="facebook"
                  width={12}
                  height={12}
                />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-sm">
                <Image
                  src="/social/instagram.svg"
                  alt="instagram"
                  width={16}
                  height={16}
                />
              </div>

              <div className="w-10 h-10 rounded-full border flex items-center justify-center shadow-sm hover:shadow-md transition">
                <Image
                  src="/social/twitter.svg"
                  alt="twitter"
                  width={16}
                  height={16}
                />
              </div>
            </div>

            <h4 className="text-[#5E6282] mb-4 font-medium">
              Discover our app
            </h4>

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

        <div className="text-center mt-16 text-gray-400 text-sm">
          All rights reserved@jadoo.co
        </div>
      </div>
    </footer>
  );
}
