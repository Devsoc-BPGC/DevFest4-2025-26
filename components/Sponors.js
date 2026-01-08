import Image from "next/image";
import BlurText from "./BlurText";

const sponsors = [
  { src: "/gold1.png", alt: "Gold Sponsor 1" },
  { src: "/aws.svg", alt: "AWS" },
  { src: "/blinkit.jpeg", alt: "Blinkit" },
  { src: "/igd.jpeg", alt: "IGDC" },
  { src: "/nexon.jpeg", alt: "Nexon" },
];

export default function Sponsors() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 mt-5">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-16 flex justify-center">
          <BlurText
            text="In Association With"
            delay={200}
            className="text-3xl md:text-5xl font-bold text-white"
            animateBy="words"
            direction="top"
          />
        </div>

        {/* Equal Sized Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {sponsors.map((s, index) => (
            <div
              key={index}
              className="relative w-48 h-28 bg-white/30 p-4 rounded-lg shadow-lg flex items-center justify-center"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
