"use client"

import Image from "next/image";
import React, { useState } from "react";
import rankList from "../../../assets/images/rankList.png";
import viewIcon from "../../../assets/icons/viewIcon.png";
import fullList from "../../../assets/images/fullList.svg";
import UnlockCompetition from "../UnlockCompetition/UnlockCompetition";

export default function RankingList() {
  const [isFullLeaderboard, setIsFullLeaderboard] = useState(false);

  const toggleLeaderboard = () => {
    setIsFullLeaderboard(!isFullLeaderboard);
  };

  return (
    <>
      {!isFullLeaderboard ? (
        <div className="rankingList mt-28">
          <div className="flex  lg:flex-row flex-col-reverse gap-28">
            <div className=" w-full lg:w-1/2 text-inter">
             <div className="content hidden lg:block">
             <h2 className="mb-4 text-[32px] text-center lg:text-start lg:secHead">See How You Rank!</h2>
              <p className="text-[24px] text-center lg:text-start text-[#8D8D8D]">
                Check out the full leaderboard and see where you stand. Compete
                with your peers to climb to the top
              </p>
             </div>
              <div className="flex justify-center items-center">
                <button 
                  onClick={toggleLeaderboard}
                  className="w-62 h-62 rounded-full bg-radial from-[#0096D7] to-[#007AAF] flex-col justify-center items-center  lg:mt-10"
                >
                  <Image src={viewIcon} className="m-auto mb-4" alt="View Leaderboard" />
                  <p className="px-8 m-auto text-white font-[500] text-[20px] leading-[28px]">
                    View Full Leaderboard
                  </p>
                </button>
              </div>
            </div>

        
           
            <div className="w-full lg:w-1/2 ">
            <div className="content block lg:hidden mb-20">
             <h2 className="mb-4 text-[32px] text-center lg:text-start lg:secHead">See How You Rank!</h2>
              <p className="text-[24px] text-center lg:text-start text-[#8D8D8D]">
                Check out the full leaderboard and see where you stand. Compete
                with your peers to climb to the top
              </p>
             </div>
              <Image src={rankList} alt="Ranking List" />
            </div>
          </div>
        </div>
      ) : (
        <div className="leaderboard-full mt-10 lg:mt-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-4">
              <button 
                onClick={toggleLeaderboard}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                Back to home
              </button>
            </div>
            
            <div className="mt-4">
              <Image 
                src={fullList} 
                alt="Full Leaderboard" 
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {!isFullLeaderboard && <UnlockCompetition />}
    </>
  );
}