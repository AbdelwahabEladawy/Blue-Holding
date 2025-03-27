import { Rocket } from "lucide-react"
import Navbar from "../Navbar/Navbar"
import ranking from "../../../assets/images/ranking.png"
import wavee from "../../../assets/images/wave.svg"
import Image from "next/image"

export default function Hero() {
  return (
    <>
      <div className=" w-full overflow-hidden relative lg:h-[950px] h-[600px] sm:h-[1100px] ">
        <Navbar />

        <div className="hero h lg:bg-bottom bg-top-center overflow-hidden relative z-10 bg-blue-500 ">
          <div className="text-center pt-28 ">
            <h1 className="flex items-center justify-center text-white text-4xl md:text-6xl font-bold mb-4">
              <span className="mr-4 text-5xl">🏆</span>
              <span>Top Performers</span>
            </h1>
            <h2 className="text-white text-xl md:text-3xl">Who's Leading the Way?</h2>

            <button className="bg-white m-auto mt-10 text-primary rounded-xl py-6 px-14 flex items-center justify-center text-2xl sm:text-3xl font-semibold mb-12 hover:bg-blue-50 transition-colors">
              <Rocket className="mr-2 sm:h-7 sm:w-7 w-5 h-5 text-primary" />
              Start Game
            </button>

            {/* Podium container with relative positioning */}
            <div className="relative flex justify-center items-center h-[200px] sm:h-[550px] md:h-[800px] lg:h-[450px]  lg:mt-24">
              {/* Wave positioned above the podium with absolute positioning */}
              <div className="absolute 2xl:top-[42%] lg:top-[65%] top-[80%] sm:top-[73%] md:top-[68%] w-full z-20">
                <Image src={wavee || "/placeholder.svg"} alt="Wave" className="w-full" />
              </div>

              {/* Podium image positioned below the wave */}
              <div className="lg:pt-24 z-10 ">
                <Image src={ranking || "/placeholder.svg"} alt="Ranking podium" className="relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

