"use client";

import Image from "next/image";

const services = [
  {
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "/category-weather.png",
  },
  {
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "/category-plane.png",
  },
  {
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: "/mic.png",
  },

  {
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
    icon: "/category-customization.png",
  },
];

export default function Category() {
  return (
    <section className="relative py-20 bg-[#F8F8F8] overflow-hidden">

      <div className="absolute top-10 right-2 md:top-20 md:right-20 w-20 h-20 md:w-32 md:h-32 opacity-70">
        <Image src="/plus.svg" alt="pattern" fill className="object-contain" />
      </div>

      <div className="text-center mb-16">
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          Category
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E4B] mt-2">
          We Offer Best Services
        </h2>
      </div>


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {services.map((item, index) => (
          <div key={index} className="relative group">
        
            <div
              className="absolute -bottom-6 -left-6 w-25 h-25 bg-[#DF6951] rounded-tl-[30px] rounded-br-[10px] opacity-0 scale-75  group-hover:opacity-100 group-hover:scale-100  transition-all duration-300 z-0"
            ></div>

    
            <div className="relative z-10 text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
   
              <div className="relative flex justify-center mb-6 z-10">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="relative z-10"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#1E1E4B] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
