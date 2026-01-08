"use client";

import { Orbitron } from "next/font/google";
import BlurText from "@/components/BlurText";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const Hackathon = () => {
  return (
    <div className={`w-full p-2 md:p-4 ${orbitron.className} bg-black text-white`}>
      
      {/* TITLE */}
      <BlurText
        text="HACKATHON"
        delay={100}
        animateBy="letters"
        direction=""
        className="text-white mt-14 font-bold mb-6 md:mb-10 text-4xl md:text-5xl lg:text-6xl flex items-center justify-center hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
      />

      {/* SUBTITLE */}
      <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg md:text-xl lg:text-2xl mb-10 hover:text-gray-100 transition-colors duration-300 cursor-pointer">
        Welcome to the ultimate coding challenge! Join us for an exciting journey of innovation and creativity.
      </div>

      {/* PRIZE POOL SECTION */}
      <div className="flex flex-col items-center justify-center w-full mb-12">
        <div className="w-[80%] max-w-3xl bg-gradient-to-r from-yellow-700 to-orange-800 rounded-lg p-6 text-center hover:scale-[1.02] transition-all duration-300 cursor-pointer">
          <div className="text-3xl md:text-4xl font-extrabold text-white">
            PRIZE POOL: ₹1,00,000 + TONS OF GOODIES
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hackathon;
