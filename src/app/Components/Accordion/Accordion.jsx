"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
      >
        <span className={`font-medium transition-colors duration-300 ${
          isOpen ? 'text-primary    ' : 'text-black'
        }`}>{title}</span>
        <ChevronDown 
          className={`h-5 w-5 transform transition-all duration-800 ${
            isOpen ? 'rotate-180 text-primary' : 'text-black'
          }`} 
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <AccordionItem title="How do I join the game?">
        <p className='text-[#8D8D8D] text-[14px]'>Explanation of how to join the game...</p>
      </AccordionItem>
      
      <AccordionItem title="When will the next level be available?">
        <p className='text-[#8D8D8D] text-[14px]'>Information about next level availability...</p>
      </AccordionItem>
      
      <AccordionItem title="How is the leaderboard calculated?">
        <p className='text-[#8D8D8D] text-[14px]'>Details about leaderboard calculation...</p>
      </AccordionItem>
      
      <AccordionItem title="Can I replay a level?">
        <p className='text-[#8D8D8D] text-[14px]'>Explanation about level replays...</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;