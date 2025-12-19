import Image from "next/image";
import BlurText from "./BlurText";
import GradientText from "./GradientText";

export default function Sponsors() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title Sponsor */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <BlurText
              text="Title Sponsor"
              delay={200}
              className="text-3xl md:text-4xl font-bold text-white"
              animateBy="words"
              direction="top"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/title.png"
              alt="Title Sponsor"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <BlurText
              text="Gold Tier"
              delay={200}
              className="text-3xl md:text-4xl font-bold text-yellow-400"
              animateBy="words"
              direction="top"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <Image
              src="/gold1.png"
              alt="Gold Sponsor 1"
              width={200}
              height={100}
              className="object-contain"
            />
            <Image
              src="/gold2.png"
              alt="Gold Sponsor 2"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <BlurText
              text="Silver Tier"
              delay={200}
              className="text-3xl md:text-4xl font-bold text-gray-300"
              animateBy="words"
              direction="bottom"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <Image
              src="/silver1.png"
              alt="Silver Sponsor 1"
              width={150}
              height={80}
              className="object-contain"
            />
            <Image
              src="/silver2.png"
              alt="Silver Sponsor 2"
              width={150}
              height={80}
              className="object-contain"
            />
            <Image
              src="/silver3.png"
              alt="Silver Sponsor 3"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
