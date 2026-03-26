import React from 'react'
import { FiPlus } from "react-icons/fi";
 
// https://www.jsw.in/wp-content/uploads/2025/05/sajjan-jindal-profile-scaled.webp

const images = {
    topLeft: "https://picsum.photos/seed/factory/200/200",
    topCenter: "https://picsum.photos/seed/tower/300/300",
    topRight: "https://picsum.photos/seed/city/150/150",
    bottomLeft: "https://picsum.photos/seed/nature/150/150",
    bottomCenter: "https://picsum.photos/seed/workers/250/300",
    
    bottomRight: "https://picsum.photos/seed/mining/200/200",
  };

const AboutDifference = () => {
  return (
    <div className="bg-white h-full  w-full   flex flex-col items-center justify-center px-4 py-16">
 
    {/* Top Description Text */}
    <p className="text-center text-gray-500 text-sm sm:text-xl max-w-2xl mb-10 leading-relaxed">
      At BB Engineers, we believe in creating long-term value and believe what's good for the
      planet is good for the business.
    </p>

    {/* Main Content Area */}
    <div className="relative w-full max-w-7xl  ">

      {/* ── ROW 1: Three images on top ── */}
      <div className="relative flex items-start justify-center gap-6 sm:gap-10 mt-4  min-h-80">

        {/* Top Left Image - medium */}
        <div className="absolute left-56 top-24 w-24 h-24  sm:w-44 sm:h-44 rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src={images.topLeft}
            alt="factory"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Center Image - largest */}
        <div className="absolute right-96 w-36  sm:w-64 sm:h-80  rounded-3xl overflow-hidden flex-shrink-0 ">
          <img
            src={images.topCenter}
            alt="tower"
            className="w-full h-full object-cover"
          />
          {/* Plus icon on top right of image */}
          <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
            <FiPlus size={14} />
          </div>
        </div>

        {/* Top Right Image - small */}
        <div className="absolute right-10 top-16 w-20 h-20 sm:w-44 sm:h-44 rounded-3xl overflow-hidden flex-shrink-0 ">
          <img
            src={images.topRight}
            alt="city"
            className="w-full h-full object-cover"
          />
          {/* Plus icon */}
          <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
            <FiPlus size={14} />
          </div>
        </div>

      </div>

      {/* ── Heading in the Middle ── */}
      <h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest my-6"
        style={{ color: "#29B6E8", fontFamily: "sans-serif" }}
      >
        MAKING A DIFFERENCE
      </h2>

      {/* ── ROW 2: Three images on bottom ── */}
      <div className="relative flex items-start justify-center gap-6 sm:gap-10 mt-4  min-h-80">

        {/* Bottom Left Image - small */}
        <div className="absolute left-8 top-28 w-20 h-20 sm:w-44 sm:h-44 rounded-3xl overflow-hidden flex-shrink-0 mt-8">
          <img
            src={images.bottomLeft}
            alt="nature"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Center Image - tallest */}
        <div className="absolute left-80 -top-5 w-36 sm:w-64 sm:h-80 rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src={images.bottomCenter}
            alt="workers"
            className="w-full h-full object-cover "
          />
          {/* Plus icon */}
          <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
            <FiPlus size={14} />
          </div>
        </div>

        {/* Bottom Right Image - medium */}
        <div className="absolute right-44 bottom-0 w-28 h-28 sm:w-56 sm:h-60 rounded-3xl overflow-hidden flex-shrink-0 mt-4">
          <img
            src={images.bottomRight}
            alt="mining"
            className="w-full h-full object-cover"
          />
          {/* Plus icon */}
          <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
            <FiPlus size={14} />
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default AboutDifference