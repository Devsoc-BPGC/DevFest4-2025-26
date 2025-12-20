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
        <BlurText
          text="HACKATHON & GAMEJAM"
          delay={100}
          animateBy="letters"
          direction=""
          className="text-white mt-14 font-bold mb-6 md:mb-10 text-4xl md:text-5xl lg:text-6xl flex items-center justify-center hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
        />
        
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg md:text-xl lg:text-2xl mb-10 hover:text-gray-100 transition-colors duration-300 cursor-pointer">
          Welcome to the ultimate coding challenge! Join us for an exciting journey of innovation and creativity.
        </div>

        <div className="flex flex-col items-center justify-center w-full min-h-[50vh] mb-5">
          <div className="w-[70%] max-w-4xl pointer-events-none mb-6 group">
            <div className="w-full h-64 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-[1.02] transition-all duration-300">
              <span className="text-3xl md:text-4xl font-bold text-center group-hover:text-white transition-colors duration-300">
                INSERT HACKATHON
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center mt-10 px-4">
          <div className="flex items-center justify-center lg:pl-10 mb-6 lg:mb-0 group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
              WELCOME TO THE SEAMLESS AI/BLOCKCHAIN HACKATHON!
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[40%] h-32 bg-gradient-to-r from-green-900 to-blue-900 rounded-lg mb-8 hover:from-green-800 hover:to-blue-800 hover:scale-[1.02] transition-all duration-300 cursor-pointer"></div>
        </div>

        <div className="flex flex-col w-full justify-between items-center mt-10 px-4">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
            PURPOSE OF THIS HACKATHON
          </div>
          <div className="w-full max-w-4xl h-54 bg-cyan-900 rounded-lg flex items-center justify-center mb-5 group hover:bg-cyan-800 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <span className="text-2xl md:text-3xl font-bold text-center p-4 group-hover:text-white transition-colors duration-300">
              insert purpose
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center mt-10 px-4">
          <div className="w-full h-32 bg-gradient-to-r from-blue-900 to-green-900 rounded-lg p-2 hover:from-blue-800 hover:to-green-800 hover:scale-[1.02] transition-all duration-300 cursor-pointer"></div>
          <div className="flex items-center justify-center lg:pl-10 mb-6 lg:mb-0 group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
              WE HAVE STRUCTURED THE HACKATHON INTO THREE DISTINCT TRACKS TO HELP PARTICIPANTS CHANNEL THEIR EFFORTS AND EXPERTISE:
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-10 px-4">
          <div className="w-full lg:w-[60%] mx-auto lg:ml-[20%]">
            <div className="flex flex-col space-y-8">
              <div className="space-y-2 group p-4 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-pointer">
                <div className="text-xl md:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  AI APPLICATIONS:
                </div>
                <div className="text-gray-300 pl-4 group-hover:text-white transition-colors duration-300">
                  Build practical solutions that showcase the power of AI in domains like customer engagement, personal finance, and healthcare.
                </div>
              </div>
              <div className="space-y-2 group p-4 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-pointer">
                <div className="text-xl md:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  AI BENCHMARKING:
                </div>
                <div className="text-gray-300 pl-4 group-hover:text-white transition-colors duration-300">
                  Evaluate and optimize the performance of AI models to improve efficiency, reduce biases, and enhance real-world usability.
                </div>
              </div>
              <div className="space-y-2 group p-4 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-pointer">
                <div className="text-xl md:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  BLOCKCHAIN PAYMENT SYSTEMS:
                </div>
                <div className="text-gray-300 pl-4 group-hover:text-white transition-colors duration-300">
                  Explore blockchain's potential to revolutionize payments by designing secure, scalable, and decentralized systems.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 mb-20 px-4">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center mt-10 px-4 group">
              <div className="w-full h-32 bg-gradient-to-r from-red-900 to-yellow-900 rounded-lg m-2 hover:from-red-800 hover:to-yellow-800 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <BlurText
                  text="PROBLEM STATEMENTS:"
                  delay={100}
                  animateBy="letters"
                  direction=""
                  className="text-white mt-4 font-bold mb-6 md:mb-8 text-4xl md:text-5xl lg:text-6xl flex items-center justify-center hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col w-[80%] mx-auto mt-12 group p-6 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-pointer">
            <div className="w-full text-center text-2xl md:text-3xl font-bold my-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              Track 1: input title
            </div>
            <div className="space-y-4 text-gray-300 group-hover:text-white transition-colors duration-300">
              <div className="font-bold">input task:</div>
              <div>
                <br /><br />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[80%] mx-auto mt-12 group p-6 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-pointer">
            <div className="w-full text-center text-2xl md:text-3xl font-bold my-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              Track 2: input title
            </div>
            <div className="space-y-4 text-gray-300 group-hover:text-white transition-colors duration-300">
              <div className="font-bold">input task:</div>
              <div>
                <br /><br />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[80%] mx-auto mt-12 group p-6 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-pointer">
            <div className="w-full text-center text-2-3xl md:text-3xl font-bold my-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              Track 3: input title
            </div>
            <div className="space-y-4 text-gray-300 group-hover:text-white transition-colors duration-300">
              <div className="font-bold">input task:</div>
              <div>
                <br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Hackathon;