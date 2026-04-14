"use client";

import Image from "next/image";
import { Send } from "lucide-react";

export default function Subscribe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="relative mt-8 md:mt-0">
          <div className="absolute -top-5 -right-5 md:-top-6 md:-right-6 w-14 h-14 md:w-16 md:h-16 bg-linear-to-b from-[#6C63FF] to-[#5A54E8] rounded-full flex items-center justify-center shadow-lg z-20">
            <Send className="text-white w-6 h-6" />
          </div>

          <div className="absolute -right-8 -bottom-10 md:-right-16 md:-bottom-16 w-32 h-32 md:w-26 md:h-36 opacity-70 z-0 pointer-events-none">
            <Image
              src="/plus2.svg"
              alt="plus pattern"
              fill
              className="object-contain"
            />
          </div>

          <div
            className="
              relative bg-[#F3F0FF] py-16 px-6 md:px-16 text-center overflow-hidden
              rounded-tl-[80px] md:rounded-tl-[120px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] z-10
            "
          >
            <div className="absolute left-0 bottom-0 w-64 h-64 md:w-72 md:h-72 opacity-20 z-0 pointer-events-none">
              <Image
                src="/subscribe/left-ellipse.svg"
                alt="left decor"
                fill
                className="object-contain object-bottom-left"
              />
            </div>

            <div className="absolute right-0 top-0 w-64 h-64 md:w-72 md:h-72 opacity-20 z-0 pointer-events-none">
              <Image
                src="/subscribe/right-ellipse.svg"
                alt="right decor"
                fill
                className="object-contain object-top-right"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl text-inline md:text-3xl lg:text-[33px] font-primary semibold leading-tight md:leading-snug max-w-2xl mx-auto mb-10 md:mb-14">
                Subscribe to get information, latest news and other interesting
                offers about Jadoo
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex items-center bg-white px-5 py-4 md:py-3 md:h-14 rounded-lg w-full md:w-105 shadow-sm">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent outline-none text-sm md:text-base text-gray-700 placeholder-gray-400"
                  />
                </div>

                <button className="bg-[#FF7A59] hover:bg-[#ff6a45] text-white px-8 py-4 md:py-3 md:h-14 rounded-lg font-medium transition text-sm md:text-base w-full md:w-auto shadow-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
