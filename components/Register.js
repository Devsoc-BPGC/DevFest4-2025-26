"use client";
import Image from "next/image";
import BlurText from "@/components/BlurText";

const Register = () => {
  return (
    <div className="relative w-full py-12 px-6 flex items-center justify-center z-10">
      <div
        className="
          flex flex-col xl:flex-row-reverse
          bg-white/80
          w-[80%] md:w-[60%]
          rounded-[30px]
          items-center
          justify-between
          p-4 md:p-6
        "
      >
        <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] w-full xl:w-[400px] xl:flex-shrink-0 p-[2%]">
          <Image 
            src="/Hackathon.jpg" 
            alt="Hackathon"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="flex flex-col justify-center h-full w-full">
          <BlurText
            text="Register for the workshops and the hackathon"
            delay={60}
            animateBy="words"
            direction="top"
            className="text-gray-900 text-lg md:text-xl xl:text-2xl font-extrabold max-w-[80%] pl-[10%] p-[3%]"
          />
          
          <div className="flex items-center justify-center h-[40%] w-full">
            <button
              className="
                relative
                w-[40%] h-full
                bg-transparent
                hover:w-[45%]
                transition-all duration-300
              "
            >
              <Image
                src="/register here button.png"
                alt="Register"
                fill
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;