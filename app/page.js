"use client";

import Image from "next/image";
import { Orbitron } from "next/font/google";
import LetterGlitch from "@/components/LetterGlitch";
import FuzzyText from "@/components/FuzzyText";
import GradientText from "@/components/GradientText";
import CursorAura from "@/components/CursorAura";
import Divider from "@/components/Divider";
import ComingSoonCard from "@/components/ComingSoonCard";
import BlurText from "@/components/BlurText";
import FAQs from "@/components/FAQs";
import Sponsors from "@/components/Sponors";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function Home() {
  return (
    <main className={`${orbitron.className}`}>
    {/* Global cursor aura effect */}
    <CursorAura />
    <div
      id="home"
      className="relative h-screen flex justify-center items-center flex-col overflow-hidden"
    >
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <LetterGlitch
          glitchSpeed={400}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Main hero text (simple) */}
      <div className="flex items-center flex-col z-10">
        <div
          className="cursor-pointer transition-all duration-200
                     hover:scale-110 hover:-translate-y-1
                     hover:drop-shadow-[0_0_35px_rgba(255,232,120,0.9)]"
        >
          <Image src="/devfest2.svg" width={700} height={100} alt="devfest" />
        </div>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className={`text-[8rem] m-0 select-none`}
        >
          5.0
        </GradientText>
      </div>
    </div>

    <Divider />

    {/* Timeline section */}
    <section id="timeline" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <div className="h-screen w-screen bg-gray-950 overflow-hidden">

            <div className="relative h-full w-full overflow-hidden bg-gray-900/40 px-8 py-12 backdrop-blur-xl sm:px-12 flex items-center justify-center">

              {/* Subtle interior glow blobs */}
              <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

            </div>
      </div>
      </div>
      {/* <CursorAura /> */}

      {/* Timeline text styled like home page */}
      <div className="flex items-center flex-col gap-10 z-10">
        <div>

        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={0.2}
          className={`text-[9rem] font-bold`}
        >
          14 Jan
        </FuzzyText>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className={`text-[8rem] m-0 select-none`}
        >
          2026
        </GradientText>
          </div>
        <BlurText
          text="MORE DETAILS COMING SOON..."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-white text-2xl font-bold"
            />
      </div>


    </section>
    <Divider />
    <section id="prizes">
      <ComingSoonCard />
    </section>
    <Divider />
    <section id="hackathons">
      <ComingSoonCard />
    </section>
    <Divider />
    <section id="sponsors">
      <Sponsors />
    </section>
    <Divider />
    {/* About section */}
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden px-8">
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
      
        <div className="h-screen w-screen bg-gray-950 overflow-hidden">

      <div className="relative h-full w-full overflow-hidden bg-gray-900/40 px-8 py-12 backdrop-blur-xl sm:px-12 flex items-center justify-center">
        
        {/* Subtle interior glow blobs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

      </div>
    </div>
      </div>

      {/* Cursor/touch aura */}

      {/* About text in glassmorphic container */}
      <div className="max-w-4xl mx-auto z-10 px-3 text-center">
        <div className="relative rounded-3xl border border-white/25 bg-white/5 bg-clip-padding backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.75)] p-[1px]">
          <div className="rounded-3xl bg-gradient-to-br from-white/12 via-white/4 to-white/0 p-6 md:p-10 lg:p-12 space-y-6">
            <BlurText
              text="About DevFest"
              delay={80}
              animateBy="letters"
              direction="top"
              className="text-white font-bold text-3xl md:text-4xl lg:text-5xl"
            />
            <BlurText
              text="DevFest is the flagship technical event of Developers' Society featuring a diverse array of events — hackathon, gamejam, workshop, codegolf and guest speaker. This unites over 3000 students from all around the country, converging both in-person at the BITS Pilani - Goa campus and through nationwide virtual participation. Come, be a part of this unique blend of learning and celebration!"
              delay={160}
              animateBy="words"
              direction="top"
              className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
    <Divider />
    <section id="team">
      <ComingSoonCard />
    </section>
    <Divider />
    {/* FAQs section */}
    <section
      id="faqs"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 py-16"
    >
      {/* Background matching other sections (no green code) */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <div className="h-full w-full bg-gray-950 overflow-hidden">
          <div className="relative h-full w-full overflow-hidden bg-gray-900/40 px-8 py-12 backdrop-blur-xl sm:px-12 flex items-center justify-center">
            {/* Subtle interior glow blobs */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* FAQs content in glassmorphic container */}
      <div className="max-w-6xl w-full mx-auto z-10">
        <div className="relative rounded-3xl border border-white/25 bg-white/5 bg-clip-padding backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.75)] p-[1px]">
          {/* subtle inner gradient for glass effect */}
          <div className="rounded-3xl bg-gradient-to-br from-white/12 via-white/4 to-white/0 p-4 md:p-8 lg:p-10">
          <FAQs />
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}


