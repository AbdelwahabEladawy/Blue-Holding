"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all number rank images
import one from "../../../assets/images/one.png";
import two from "../../../assets/images/two.png";
import three from "../../../assets/images/three.png";
import four from "../../../assets/images/four.png";
import five from "../../../assets/images/five.png";
import six from "../../../assets/images/six.png";
import seven from "../../../assets/images/seven.png";
import eight from "../../../assets/images/eight.png";

// Import all competitor images
import win1 from "../../../assets/images/win1.png";
import win2 from "../../../assets/images/win2.png";
import win3 from "../../../assets/images/win3.svg";
import win4 from "../../../assets/images/win4.svg";
import win5 from "../../../assets/images/win5.png";
import win6 from "../../../assets/images/win6.png";
import win8 from "../../../assets/images/win6.png";

const competitorsData = [
  {
    id: 1,
    num: one,
    originalRank: 1,
    image: win1,
    points: 100,
    time: 45.6,
    attempts: 12
  },
  {
    id: 2,
    num: two,
    originalRank: 2,
    image: win2,
    points: 98,
    time: 52.3,
    attempts: 15
  },
  {
    id: 3,
    num: three,
    originalRank: 3,
    image: win3, 
    points: 95,
    time: 38.7,
    attempts: 10
  },
  {
    id: 4,
    num: four,
    originalRank: 4,
    image: win4,
    points: 92,
    time: 59.2,
    attempts: 18
  },
  {
    id: 5,
    num: five,
    originalRank: 5,
    image: win5,
    points: 85,
    time: 47.5,
    attempts: 14
  },
  {
    id: 6,
    num: six,
    originalRank: 6,
    image: win6,
    points: 82,
    time: 35.9,
    attempts: 8
  },
  {
    id: 7,
    num: seven,
    originalRank: 7,
    image: win4,
    points: 78,
    time: 55.1,
    attempts: 16
  },
  {
    id: 8,
    num: eight,
    originalRank: 8,
    image: win8,
    points: 75,
    time: 42.8,
    attempts: 11
  }
];

export default function CompSlider() {
  const [activeTab, setActiveTab] = useState('Higher Scores');
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    // Check on mount and add resize listener
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    
    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const tabs = [
    'Higher Scores', 
    'Faster Completion', 
    'Minimum Attempts'
  ];

  // Sorting function remains the same as in previous implementation
  const sortCompetitors = () => {
    const sortedCompetitors = [...competitorsData];
    
    switch(activeTab) {
      case 'Higher Scores':
        return sortedCompetitors.sort((a, b) => b.points - a.points)
          .map((competitor, index) => ({
            ...competitor,
            displayRank: index + 1
          }));
      case 'Faster Completion':
        return sortedCompetitors.sort((a, b) => a.time - b.time)
          .map((competitor, index) => ({
            ...competitor,
            displayRank: index + 1
          }));
      case 'Minimum Attempts':
        return sortedCompetitors.sort((a, b) => a.attempts - b.attempts)
          .map((competitor, index) => ({
            ...competitor,
            displayRank: index + 1
          }));
      default:
        return sortedCompetitors;
    }
  };

  const sortedCompetitors = sortCompetitors();

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, sortedCompetitors.length - 6));
  };

  const renderTabContent = (competitor) => {
    switch(activeTab) {
      case 'Higher Scores':
        return `${competitor.points} points`;
      case 'Faster Completion':
        return `${competitor.time} sec`;
      case 'Minimum Attempts':
        return `${competitor.attempts} attempts`;
      default:
        return '';
    }
  };

  // Mapping display ranks to number images
  const getRankImage = (competitor) => {
    switch(competitor.displayRank) {
      case 1: return one;
      case 2: return two;
      case 3: return three;
      case 4: return four;
      case 5: return five;
      case 6: return six;
      case 7: return seven;
      case 8: return eight;
      default: return one;
    }
  };

  // Render mobile view (vertical list with desktop-like cards)
  const renderMobileView = () => {
    return (
      <div className="w-full mx-auto lg:px-4 bg-[#F3F3F3] mt-10">
        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-6 py-3 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-4 rounded-md transition-colors ${
                activeTab === tab 
                  ? 'bg-[#F3F3F3] text-primary' 
                  : ' text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Vertical List */}
        <div className="space-y-4 relative mb-20">
          {sortedCompetitors.map((competitor) => (
            <div 
              key={competitor.id} 
              className="w-[70%] flex-shrink-0 m-auto relative pt-10"
            >
              <div className=" rounded-2xl overflow-hidden shadow-sm mb-4">
                <div className="">
                  <Image 
                    src={competitor.image} 
                    alt={`Competitor ${competitor.id}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-[0%] left-[48%] rounded-full w-8 h-8 flex items-center justify-center">
                    <Image src={getRankImage(competitor)} alt="Rank" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="font-semibold">{renderTabContent(competitor)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render desktop slider view (unchanged)
  const renderDesktopSlider = () => {
    return (
      <div className="w-full mx-auto  bg-[#F3F3F3] mt-10">
        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-6 py-3 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-4 rounded-md transition-colors ${
                activeTab === tab 
                  ? 'bg-[#F3F3F3] text-primary' 
                  : ' text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => {
                setActiveTab(tab);
                setStartIndex(0);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="relative flex items-center lg:mb-20">
          {/* Previous Button */}
          {startIndex > 0 && (
            <button 
              onClick={handlePrev} 
              className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronLeft className="text-gray-600" />
            </button>
          )}

          {/* Competitors Slider */}
          <div className="overflow-hidden w-full   mb-10">
            <div className="flex space-x-4 px-10" >
              {sortedCompetitors.slice(startIndex, startIndex + 6).map((competitor) => (
                <div 
                  key={competitor.id} 
                  className="w-1/6 flex-shrink-0 relative pt-10 "
                >
                  <div className=" rounded-2xl overflow-hidden shadow-sm mb-5 ">
                    <div className="">
                      <Image 
                        src={competitor.image} 
                        alt={`Competitor ${competitor.id}`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-[0%] left-[45%] rounded-full w-8 h-8 flex items-center justify-center">
                        <Image src={getRankImage(competitor)} alt="Rank" />
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <p className="font-semibold">{renderTabContent(competitor)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {startIndex < sortedCompetitors.length - 6 && (
            <button 
              onClick={handleNext} 
              className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronRight className="text-gray-600" />
            </button>
          )}
        </div>
      </div>
    );
  };

  // Conditional rendering based on screen size
  return isMobile ? renderMobileView() : renderDesktopSlider();
}