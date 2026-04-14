"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    image: "/testimonials/user1.png",
    text: `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`,
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    image: "/testimonials/user1.png",
    text: `"Amazing service! Everything was smooth and well organized. I would definitely recommend this to everyone planning a trip."`,
  },
  {
    name: "Sarah Lee",
    location: "New York, USA",
    image: "/testimonials/user1.png",
    text: `"A wonderful experience from start to finish. Great support and seamless booking process!"`,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const active = testimonials[current];
  const nextTestimonial = testimonials[(current + 1) % testimonials.length];

  return (
    <section className="py-30 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-muted font-primary font-semibold mb-4">TESTIMONIALS</p>

          <h2 className="text-3xl md:text-5xl font-secondary font-bold text-primary leading-tight mb-10">
            What People Say <br /> About Us.
          </h2>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                  current === index ? "bg-[#1E1E4B]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 lg:mt-0">
          <div className="absolute top-8 left-4 md:top-12 md:left-8 w-full max-w-[90%] md:max-w-[450px] h-[220px] md:h-[260px] bg-white/40 rounded-2xl shadow-md p-6 flex flex-col justify-end z-10 transition-all">
            <h4 className="font-semibold text-[#1E1E4B] mb-1">
              {nextTestimonial.name}
            </h4>

            <p className="text-gray-400 text-sm">{nextTestimonial.location}</p>
          </div>

          <div className="relative z-20 bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-[90%] md:max-w-[450px] h-[220px] md:h-[240px] flex flex-col transition-all">
            <div className="absolute -top-8 left-8">
              <Image
                src={active.image}
                alt={active.name}
                width={60}
                height={60}
                className="rounded-full border-4 border-white"
              />
            </div>

            <p className="text-gray-600 mb-6 mt-6 leading-relaxed">
              {active.text}
            </p>

            <h4 className="font-primary font-semibold text-[#1E1E4B]">{active.name}</h4>

            <p className="text-inline text-sm">{active.location}</p>
          </div>

          <div className="relative lg:absolute lg:-right-8 top-12 lg:top-1/2 lg:-translate-y-1/2 flex flex-row lg:flex-col justify-center gap-4 transition-all">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <ChevronUp />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
