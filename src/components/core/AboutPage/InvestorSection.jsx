import React, {useState} from 'react'

import { FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";


// ✅ Add your award logos here - replace image src with your own
const awards = [
  { id: 1, image: "https://picsum.photos/seed/aima/200/120", alt: "AIMA Award" },
  { id: 2, image: "https://picsum.photos/seed/ey/200/120", alt: "EY Entrepreneur of the Year" },
  { id: 3, image: "https://picsum.photos/seed/forbes/200/120", alt: "Forbes" },
  { id: 4, image: "https://picsum.photos/seed/award4/200/120", alt: "Award 4" },
  { id: 5, image: "https://picsum.photos/seed/award5/200/120", alt: "Award 5" },
];

const VISIBLE = 3;

const InvestorSection = () => {
    const [startIndex, setStartIndex] = useState(0);
 
    // Go to previous
    const prev = () => {
      if (startIndex > 0) setStartIndex(startIndex - 1);
    };
   
    // Go to next
    const next = () => {
      if (startIndex + VISIBLE < awards.length) setStartIndex(startIndex + 1);
    };
   
    // Slice awards to show only visible ones
    const visibleAwards = awards.slice(startIndex, startIndex + VISIBLE);

  return (
    <div>
     <section >
         <div className="bg-white px-4 py-8 flex justify-center">
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden px-8 py-10"
        style={{ background: "linear-gradient(135deg, #0a1f44 60%, #0e3a5c 100%)" }}
      >
        <img
          src="https://picsum.photos/seed/wave/900/200"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
 
     
        <div className="relative z-10">
          <p className="text-white text-xs font-bold tracking-widest uppercase mb-2">
            Find out how do we create value
          </p>
 
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide mb-4">
            Creating Enduring Value for Shareholders
          </h2>
 
          <a
            href="#"
            className="text-blue-400 text-xs font-bold tracking-widest uppercase hover:underline"
          >
            Visit Investor Section
          </a>
        </div>
      </div>
    </div> 
    </section>

    <section>
    <div className="bg-gray-300 px-4 py-14">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
 
       
        <div className="sm:w-48 flex-shrink-0 text-left">
          <h3 className="text-gray-600 text-xl sm:text-3xl font-light leading-snug">
            Awards and Recognition
          </h3>
        </div>
 
     
        <div className="flex items-center gap-3 flex-1">
 
         
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="text-gray-500 hover:text-gray-800 disabled:opacity-30 transition"
          >
            <FiChevronLeft size={24} />
          </button>
 
          <div className="flex gap-4 flex-1 justify-center">
            {visibleAwards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-2xl flex flex-col items-center justify-between p-4 w-32 sm:w-40 flex-shrink-0"
                style={{ minHeight: "140px" }}
              >
                <img
                  src={award.image}
                  alt={award.alt}
                  className="w-full h-16 object-contain"
                />
 
                <div className="self-end mt-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <FiPlus size={14} className="text-gray-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          <button
            onClick={next}
            disabled={startIndex + VISIBLE >= awards.length}
            className="text-gray-500 hover:text-gray-800 disabled:opacity-30 transition"
          >
            <FiChevronRight size={24} />
          </button>
 
        </div>
      </div>
    </div>
    </section>
       
    </div>
  )
}

export default InvestorSection