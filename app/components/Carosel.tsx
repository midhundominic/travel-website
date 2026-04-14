"use client";

import Image from "next/image";

const logos = [
  "/logos/axon.jpg",
  "/logos/jetstar.jpg",
  "/logos/expedia.jpg",
  "/logos/qantas.jpg",
  "/logos/alitalia.jpg",
];

export default function LogoCarousel() {
  return (
    <section className="py-20 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-full mx-auto px-6">

        <div className="relative w-full overflow-hidden">

          {/* TRACK */}
          <div className="flex w-max animate-logo-scroll">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-10 min-w-[150px] grayscale hover:grayscale-0 transition"
              >
                <Image
                  src={logo}
                  alt="brand"
                  width={130}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}