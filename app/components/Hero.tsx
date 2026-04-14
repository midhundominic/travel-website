import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F8]">
      <div className="absolute top-0 right-0 w-full md:w-[46%] h-[60%] md:h-full z-0 pointer-events-none">
        <Image
          src="/Decore.png"
          alt="background shape"
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-2 items-center gap-0">
        <div>
          <p className="text-[#DF6951] font-semibold uppercase mb-4 text-sm">
            Best destinations around the world
          </p>

          <h1 className="text-4xl md:text-7xl font-bold text-[#1E1E4B] leading-tight">
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <button className="bg-yellow-400 px-6 py-3 rounded-lg font-medium shadow-md">
              Find out more
            </button>

            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 flex items-center justify-center bg-red-400 rounded-full text-white transition group-hover:scale-110">
                <Play size={18} fill="white" stroke="white" />
              </div>

              <span className="text-gray-700 group-hover:text-black transition">
                Play Demo
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center mt-10 md:mt-0 w-full">
          {/*  Plane */}
          <div className="hidden md:block absolute top-[10%] md:-left-[5%] lg:-left-[10%] xl:-left-[2%] w-28 h-28 lg:w-40 lg:h-40 z-0">
            <Image
              src="/plane.svg"
              alt="left flight"
              fill
              className="object-contain"
            />
          </div>

          <Image
            src="/Traveller.png"
            alt="Traveler"
            width={1000}
            height={1000}
            className="object-contain relative z-10"
          />

          {/* Plane */}
          <div className="hidden md:block absolute top-[10%] md:-right-[5%] lg:-right-[8%] xl:-right-[12%] w-28 h-28 lg:w-40 lg:h-40 z-0">
            <Image
              src="/plane.svg"
              alt="right flight"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
