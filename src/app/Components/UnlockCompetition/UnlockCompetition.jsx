"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Rocket, Lock } from "lucide-react";
import climbing from "../../../assets/images/climbing.png";
import climbingOverLay from "../../../assets/images/climbingOverLay.png";
import muse from "../../../assets/images/muse.png";
import museOverLay from "../../../assets/images/museOverLay.png";
import time from "../../../assets/images/time.png";
import timeOverLay from "../../../assets/images/timeOverLay.png";
import unsolved from "../../../assets/images/unsolved.png";
import unsolvedover from "../../../assets/images/unsolvedover.png";
import direct from "../../../assets/images/direct.png";
import directover from "../../../assets/images/directover.png";
import locked from "../../../assets/images/locked.png";
import lockedover from "../../../assets/images/lockedover.png";
import modalClimb from "../../../assets/images/modalClimb.svg";
import musee from "../../../assets/images/musee.jpg";
import timemodal from "../../../assets/images/timemodal.svg";
import unsolvemodal from "../../../assets/images/unsolvemodal.svg";
import dirModal from "../../../assets/images/dirmodall.png";
import arr from "../../../assets/images/arrow.png";

export default function UnlockCompetition() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      image: climbingOverLay,
      circle: climbing,
      modal:modalClimb,
      link: "https://view.genially.com/6770feda8f8f54fd4b847d98",
      icon: Rocket,
      btn: "Start Game",
      arrow: true,
      title: "Climbing Challenge",
      description: "Ready to Start Climbing Challenge?",
      details: [
        "Understanding our key competitors' market strategies",
        "Identifying product differentiators and unique selling points",
        "Analyzing customer needs and how our solutions compare"
      ]
    },
    {
      id: 2,
      image: museOverLay,
      circle: muse,
      modal:musee,
      link: "https://view.genially.com/6799e5348a8f0733d58460db",
      icon: Rocket,
      btn: "Start Game",
      arrow: true,
      title: "Museum Escape Room",
      description: "Ready to Start Museum Escape Room?",
      details: [
        "Exploring strategic decision-making processes",
        "Identifying key performance indicators",
        "Developing innovative problem-solving approaches"
      ]
    },
    {
      id: 3,
      image: timeOverLay,
      circle: time,
      modal:timemodal,
      link: "https://view.genially.com/6799f65192d62aff6ddb72cc",
      icon: Rocket,
      btn: "Start Game",
      title: "Time Challenge",
      description: "Ready to Start Time Challenge?",
      details: [
        "Analyzing time management strategies",
        "Understanding efficiency metrics",
        "Developing rapid decision-making skills"
      ]
    },
    {
      id: 4,
      image: unsolvedover,
      circle: unsolved,
      modal:unsolvemodal,
      link: "https://view.genially.com/679a012e92d62aff6ddeba97",
      icon: Rocket,
      btn: "Start Game",
      arrow: true,
      title: "Unsolved Mysteries",
      description: "Ready to Solve Unsolved Mysteries?",
      details: [
        "Developing critical thinking skills",
        "Analyzing complex problem scenarios",
        "Identifying hidden patterns and connections"
      ]
    },
    {
      id: 5,
      image: directover,
      circle: direct,
      modal:dirModal,
      link: "https://view.genially.com/679a05d11fdb651c43837e70",
      icon: Rocket,
      btn: "Start Game",
      arrow: true,
      title: "Direct Challenge",
      description: "Ready for the Direct Challenge?",
      details: [
        "Evaluating direct competitive strategies",
        "Understanding market positioning",
        "Developing competitive intelligence"
      ]
    },
    {
      id: 6,
      image: lockedover,
      circle: locked,
      link: "https://example.com/card6",
      icon: Lock,
      btn: "Opens at 12/3",
      title: "Locked Challenge",
      description: "This challenge is currently locked",
      details: [
        "Challenge will be available soon",
        "Prepare for an exciting new experience",
        "Stay tuned for more details"
      ]
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const Modal = ({ card }) => {
    if (!card) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg max-w-xl w-full  relative pb-6 ">
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl"
          >
            ×
          </button>
          
          <div className="text-center">
            <Image 
              src={card.modal} 
              alt={card.title} 
              height={200} 
              className="mx-auto mb-4 w-full rounded-lg"
            />
            
            <h2 className="text-2xl font-bold mb-2 text-start ms-4" >{card.title}</h2>
            <p className="text-gray-600 mb-4 ms-4 text-start">{card.description}</p>
            
            <div className="text-left mb-6 ms-4">
              <p className=" mb-2">This level will test your knowledge on:</p>
              <ul className="list-disc list-inside">
                {card.details.map((detail, index) => (
                  <li key={index} className="mb-1">{detail}</li>
                ))}
              </ul>
            </div>
            <a href={card.link} target="_blank">        <button 
              className={`w-[95%] m-auto py-6 rounded-lg flex items-center justify-center text-white ${
                card.id !== 6 
                  ? "bg-[#0096D7] hover:bg-[#007AAF]" 
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => {
                if (card.id !== 6) {
                  // Add your start game logic here
                  console.log(`Starting game for ${card.title}`);
                  closeModal();
                }
              }}
              disabled={card.id === 6}
            >
              {card.id !== 6 ? (
                <Rocket className="mr-2 w-5 h-5" />
              ) : (
                <Lock className="mr-2 w-5 h-5" />
              )}
             {card.btn}
            </button></a>
    
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-[200px]">
        <div className="content">
          <h2 className="secHead text-center">
            Unlock the Secrets of the Competition!
          </h2>
          <p className="desc text-center">
            Each level is a new room in the escape challenge, filled with
            mysteries and puzzles from the Competition Guide. Answer the
            questions, solve the clues, and progress to the next stage. Are you
            ready to escape?
          </p>
        </div>

        <div className="cards lg:flex justify-center lg:flex-row flex-col flex-wrap items-center gap-8">
          {cards.map((card) => (
            <div key={card.id} className="sm:w-[30%] w-full relative mt-48 mb-14 ms-9 sm:ms-48 lg:ms-0 ">
              <Image src={card.circle} alt="Circle" width={300} height={300} className="sm:ms-10 lg:ms-0" />
              <Image
                src={card.image}
                alt="Overlay"
                width={250}
                height={250}
                className="absolute bottom-[60%] ms-[27px] sm:ms-10 lg:ms-[27px] "
              />
              <button 
                onClick={() => openModal(card)}
                className={`rounded-lg w-[325px] h-[50px] lg:h-[75px] absolute top-[90%]   bg-white shadow-md text-[24px] leading-[40px] flex justify-center items-center   ${
                  card.id !== 6 ? "text-primary" : "text-red-500"
                }`}
                disabled={card.id === 6}
              >
                <span className={`me-3 h-5 w-5 ${
                  card.id !== 6 ? "text-primary" : "text-red-500"
                }`}>
                  <card.icon className="w-5 h-5" />
                </span>
                {card.btn}
              </button>
              <div className="lg:absolute hidden lg:block left-[95%] top-[10%]">
                {card.arrow && <Image src={arr} alt="Arrow" className="w-10 h-10" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal card={selectedCard} />
    </>
  );
}