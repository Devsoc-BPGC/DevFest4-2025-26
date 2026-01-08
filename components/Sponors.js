import Image from "next/image";
import BlurText from "./BlurText";

const sponsors = [
  { src: "/title2.png", alt: "Title Sponsor", width: 200, height: 120 },
  { src: "/gold1.png", alt: "Gold Sponsor 1", width: 200, height: 100 },
  { src: "/gold2.png", alt: "Gold Sponsor 2", width: 200, height: 100 },
  { src: "/silver1.png", alt: "Silver Sponsor 1", width: 200, height: 120 },
  { src: "/silver2.png", alt: "Silver Sponsor 2", width: 200, height: 120 },
  { src: "/silver3.png", alt: "Silver Sponsor 3", width: 200, height: 120 },
  { src: "/aws.svg", alt: "AWS", width: 200, height: 120 },
  { src: "/blinkit.jpeg", alt: "Blinkit", width: 200, height: 120 },
  { src: "/igd.jpeg", alt: "IGDC", width: 200, height: 120 },
  { src: "/nexon.jpeg", alt: "Nexon", width: 200, height: 120 },
];

export default function Sponsors() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 mt-5">
      
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-16 flex justify-center">
          <BlurText
            text="Sponsors"
            delay={200}
            className="text-3xl md:text-5xl font-bold text-white"
            animateBy="words"
            direction="top"
          />
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {sponsors.map((s, index) => (
            <Image

              key={index}
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              className="object-contain bg-white/30 p-4 rounded-lg shadow-lg"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
