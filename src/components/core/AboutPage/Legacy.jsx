import React , {useState}from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
    {
      label: "OUR VISION",
      title: "ONE MAN'S DREAM",
      name: "Mr. Saroj Ranajn Parida CEO ",
      role: "FOUNDER AND VISIONARY, O. P. JINDAL GROUP",
      description: "To be a trusted partner delivering precision-engineered solutions for mobility, infrastructure and innovation — with a commitment to quality, reliability, and sustainable growth.",
      image: "https://picsum.photos/seed/portrait1/600/500",
    },
    {
      label: "OUR MISSION",
      title: "BUILDING A NATION",
      name: "Mr. P Rao   - Plant Head",
      role: "FOUNDER AND VISIONARY, O. P. JINDAL GROUP",
      description: "To provide precision-engineered solutions in sheet metal, pipe bending, and tooling by upholding the highest standards of quality, fostering innovation, delivering on time and building lasting value for our customers and stakeholders.",
      image: "https://picsum.photos/seed/portrait2/600/500",
    },
 
  ];

const Legacy = () => {

    const [current, setCurrent] = useState(0);
 
    // Go to previous slide
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
   
    // Go to next slide
    const nextSlide = () => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
   
    const slide = slides[current];

  return (
     <div className="relative w-full bg-gray-300 overflow-hidden min-h-screen flex items-center justify-center" >
 
   <div className='flex justify-center items-center'>  
      <img
        src={slide.image}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
      />
 
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gray-800 opacity-30" />
 
      {/* ── LEFT Arrow ── */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-700 transition"
      >
        <FiChevronLeft size={20} className="text-white" />
      </button>
 
      {/* ── RIGHT Arrow ── */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-700 transition"
      >
        <FiChevronRight size={20} className="text-white" />
      </button>
 
      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-16 sm:px-24 py-12 flex flex-col md:flex-row items-center gap-8">
 
        {/* LEFT: Text */}
        <div className="flex-1">
 
          {/* Label */}
          <p className="text-gray-700 text-xs font-semibold tracking-widest uppercase mb-3">
            {slide.label}
          </p>
 
          {/* Big Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 uppercase leading-tight mb-5">
            {slide.title}
          </h1>
 
          {/* Person Name & Role */}
          <p className="text-gray-800 text-xs font-bold tracking-wide uppercase">
            {slide.name}
          </p>
          <p className="text-gray-800 text-xs font-bold tracking-wide uppercase mb-6">
            {/* {slide.role} */}
          </p>
 
          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base mb-8 max-w-sm">
            {slide.description}
          </p>
 
 
        </div>
 
        {/* RIGHT: Person Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={slide.image}
            alt={slide.name}
            className="w-48 sm:w-64 md:w-80 object-cover grayscale"
          />
        </div>
 
      </div>
 
      {/* ── Slide Dots ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-blue-400 w-4" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      </div>
 
    </div>
  )
}

export default Legacy