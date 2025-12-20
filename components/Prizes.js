"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";
import BlurText from "@/components/BlurText";

/* ================= PRIZE CARD ================= */
const PrizeCard = ({ title, prize }) => {
  return (
    <div
      className="
        relative rounded-2xl p-[1px]
        bg-gradient-to-br from-white/25 via-white/10 to-transparent
        hover:from-cyan-400/40 hover:to-blue-500/40
        transition-all duration-500
      "
    >
      <div
        className="
          rounded-2xl bg-white/5 backdrop-blur-md
          px-8 py-6 text-center
          hover:-translate-y-2
          hover:shadow-[0_20px_60px_rgba(56,189,248,0.35)]
          transition-all duration-500
        "
      >
        <BlurText
          text={title}
          delay={50}
          animateBy="letters"
          direction="top"
          className="text-white text-xl font-semibold mb-3"
        />

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="text-3xl md:text-4xl font-bold"
        >
          {prize}
        </GradientText>
      </div>
    </div>
  );
};

/* ================= CTA ================= */
const RegisterCTA = () => {
  return (
    <div className="w-full flex justify-center mb-20 pt-20" id="prizes">
      <div
        className="
          flex flex-col xl:flex-row-reverse items-center gap-8
          bg-white/80
          rounded-3xl
          px-8 py-6
          w-[90%] sm:w-[75%] md:w-[65%] xl:w-[55%]
        "
      >
        {/* Image with heavily trimmed corners */}
        <div className="relative h-[130px] sm:h-[150px] xl:h-[170px] w-full xl:w-[260px] overflow-hidden">
          <Image
            src="/Hackathon.jpg"
            alt="Hackathon"
            fill
            className="object-cover rounded-[3rem]"
          />
        </div>

        <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full">
          <BlurText
            text="Register for the workshops and the hackathon"
            delay={60}
            animateBy="words"
            direction="top"
            className="text-gray-900 text-xl md:text-2xl font-extrabold"
          />

          <button
            className="
              relative mt-5
              w-40 h-14
              hover:w-44
              transition-all duration-300
            "
          >
            {/* <Image
              src="/register here button.png"
              alt="Register"
              fill
              className="object-contain"
            /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= PRIZES ================= */
export default function Prizes() {
  return (
    <section className="relative w-full py-28 px-6 overflow-hidden">

      {/* ===== SAME BACKGROUND AS HOME / FAQ ===== */}
      <div className="absolute inset-0 -z-20">
        <div className="h-full w-full bg-gray-950 overflow-hidden">
          <div className="relative h-full w-full bg-gray-900/40 backdrop-blur-xl">
            {/* glow blobs */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        <RegisterCTA />

        {/* ================= HACKATHON ================= */}
        <div className="flex justify-center mb-16">
          <BlurText
            text="Hackathon Prizes"
            delay={80}
            animateBy="letters"
            direction="top"
            className="text-5xl md:text-6xl font-bold text-white text-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
          <PrizeCard title="Winner" prize="₹50,000" />
          <PrizeCard title="First Runner Up" prize="₹30,000" />
          <PrizeCard title="Second Runner Up" prize="₹20,000" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <PrizeCard title="Top 25 Teams" prize="Free DevFest T-shirts" />
          <PrizeCard title="All Participants" prize="Free Devfolio T-shirts" />
        </div>

        {/* ================= GAMEJAM ================= */}
        <div className="flex justify-center mt-32 mb-16">
          <BlurText
            text="GameJam Prizes"
            delay={80}
            animateBy="letters"
            direction="top"
            className="text-5xl md:text-6xl font-bold text-white text-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
          <PrizeCard title="Winner" prize="TBA" />
          <PrizeCard title="First Runner Up" prize="TBA" />
          <PrizeCard title="Second Runner Up" prize="TBA" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <PrizeCard title="Top 25 Teams" prize="TBA" />
          <PrizeCard title="All Participants" prize="TBA" />
        </div>
      </div>
    </section>
  );
}
