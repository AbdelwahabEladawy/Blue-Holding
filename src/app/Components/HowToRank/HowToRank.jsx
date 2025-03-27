import React from "react";
import Image from "next/image";
import icon1 from "../../../assets/icons/howicon1.png";
import icon2 from "../../../assets/icons/howicon2.png";
import icon3 from "../../../assets/icons/howicon3.png";
import light from "../../../assets/icons/light.png";


function HowToRank() {
  return (
    <div className="bg-[#000E22] py-16 px-4 relative overflow-hidden">
      <div className=" mx-auto relative z-10  px-5 sm:px-10 lg:px-20">
      <div className="content">
        <h2 className="text-[48px] font-bold text-white text-center mb-4">
        How to Rank
        </h2>
        <p className="text-[24px] text-center text-white mb-10">
        Master the Game: Understand What It Takes to Climb the Leaderboard!
        </p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Score Big Card */}
          <div className="group card relative ">
            <div className="absolute -inset-0.5  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative bg-transparent border border-[#0096D7] rounded-2xl p-8 text-center transition-all duration-800  h-full overflow-hidden">
              <div className=" mx-auto mb-6  w-[185px] h-[185px] rounded-full flex items-center justify-center light-bg cont   " >
                {/* <div className=" flex justify-center items-center"></div> */}
                <Image src={icon1} alt="Score Big" className="w-[75%] z-10 " />
              </div>
              <h3 className="text-[32px] mt-8 mb-3 font-bold text-[#007AAD]   transition-colors duration-300">
                Score Big
              </h3>
              <p className="text-[#EBEBEB]  transition-colors duration-300">
                Your score is the primary factor in ranking. Answer correctly to
                earn points, and aim for perfection to stay ahead
              </p>
            </div>
          </div>

          {/* Fewer Trials Card */}
          <div className="group card  relative">
            <div className="absolute -inset-0.5  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative bg-transparent border border-[#0096D7] rounded-2xl p-8 text-center transition-all duration-300  h-full overflow-hidden">
              <div className=" mx-auto mb-6  w-[185px] h-[185px] rounded-full flex items-center justify-center  light-bg cont" >
                {/* <div className=" flex justify-center items-center"></div> */}
                <Image src={icon2} alt="fewer Trials" className="w-[75%] z-10 " />
              </div>
              <h3 className="text-[32px] mt-8 mb-3 font-bold text-[#007AAD] transition-colors duration-300">
              Fewer Trials
              </h3>
              <p className="text-[#EBEBEB]  transition-colors duration-300">
              Efficiency matters! The fewer attempts you need to complete a level, the better your ranking will be
              </p>
            </div>
          </div>

          {/* Beat the Clock Card */}
          <div className="group card relative">
            <div className="absolute -inset-0.5  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative bg-transparent border border-[#0096D7] rounded-2xl p-8 text-center transition-all duration-300  h-full overflow-hidden">
              <div className=" mx-auto mb-6  w-[185px] h-[185px] rounded-full flex items-center justify-center  light-bg cont" >
                {/* <div className=" flex justify-center items-center"></div> */}
                <Image src={icon3} alt="Score Big" className="w-[75%] z-10 " />
              </div>
              <h3 className="text-[32px] mt-8 mb-3 font-bold text-[#007AAD]   transition-colors duration-300">
              Beat the Clock
              </h3>
              <p className="text-[#EBEBEB]  transition-colors duration-300">
              Speed is key! Complete the challenges faster to climb the leaderboard and secure your spot at the top
              </p>
            </div>
          </div>
        </div>
      </div>



      
    </div>
  );
}

export default HowToRank;
