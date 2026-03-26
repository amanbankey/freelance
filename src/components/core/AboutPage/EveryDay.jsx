import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiSmileyWinkThin } from "react-icons/pi";

const stories = [
    {
      color: "bg-red-300",
      textColor: "text-white",
      title: "Where ancient culture meets modern expression",
    },
    {
      color: "bg-green-300",
      textColor: "text-white",
      title: "Building infrastructure that connects and empowers",
    },
    {
      color: "bg-blue-400",
      textColor: "text-white",
      title: "Restoration that honours the past and inspires the future",
    },
  ];

const EveryDay = () => {
  return (
    
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
        {/* Hero Section with dummy image background */}
        <div className="relative overflow-hidden" style={{ minHeight: "340px" }}>
          {/* Dummy background - replace with your image */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/30" />
 
          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 md:py-24">
            <h1
              className="text-4xl  sm:text-5xl  text-gray-900 mb-6  font-normal"
              style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
            >
              #BETTER EVERYDAY
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-gray-700 leading-relaxed">
            To provide precision-engineered solutions in sheet metal, pipe bending, and tooling by upholding the highest standards of quality, fostering innovation, delivering on time and building lasting value for our customers and stakeholders.

            </p>
          </div>
        </div>
 
        {/* Story Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stories.map((story, i) => (
            <div
              key={i}
              className={`${story.color}  p-6 flex flex-col justify-between`}
              style={{ minHeight: "200px" }}
            >
              {/* Top label */}
              <div>
                <span
                  className="text-xs font-bold tracking-widest uppercase opacity-90"
                  style={{ letterSpacing: "0.15em" }}
                >
                  STORY
                </span>
              </div>
 
              {/* Bottom: title + arrow */}
              <div className="flex items-end justify-between gap-4 mt-8">
                <p className="text-sm sm:text-base font-bold leading-snug">{story.title}</p>
                <button className="flex-shrink-0 w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-white/20 transition-colors">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg> */}
                  <MdKeyboardArrowRight className='w-4 h-4 '/>
                  
                </button>
               
              </div> 
              {/* <PiSmileyWinkThin  className='w-5 h-5'/> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EveryDay