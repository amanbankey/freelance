import React from 'react'

const Leadership = () => {
  return (
    <div>
         <div className="bg-blue-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
 
        {/* LEFT: Text Content */}
        <div className="flex-1 text-left">
 
          {/* Big Heading */}
          <h1 className="text-3xl sm:text-4xl  font-semibold text-gray-900 leading-tight mb-6 uppercase">
            We're not just a business, we're a catalyst for India's growth.
          </h1>
 
          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
          BB  Engineers is a Press Component , Assy. & Roiling  Solution Provider Organization for Automotive and Non Automotive Industries. Location :- Chakan Pune.
          </p>

          <p className='text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md'>Our team delivers end-to-end expertise in stamping assembly fixture design, manufacturing, and integration, streamlining your production processes and minimizing vendor complexity
          </p>

          <p className='text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md'>Two Plant with in-house capabilities of Press Shop, Laser Cutting Machine pipe bending robotic welding etc.
          </p>
 
          {/* Person Name & Title */}
          <div className="mb-6">
            <p className="font-bold text-gray-900 text-sm tracking-wide uppercase">
            Mr. Saroj Ranajn Parida 

            </p>
            <p className="text-gray-500 text-sm">CEO</p>
          </div>
 
          {/* Button */}
          <button className="border-2 border-blue-400 text-blue-400 text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-400 hover:text-white transition-colors duration-200">
            Leadership Team
          </button>
 
        </div>
 
        {/* RIGHT: Person Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={'https://www.jsw.in/wp-content/uploads/2025/05/sajjan-jindal-profile-scaled.webp'}
            alt="Sajjan Jindal"
            className="w-64 sm:w-80 md:w-full object-cover object-top"
          />
        </div>
 
      </div>
    </div>
    </div>
  )
}

export default Leadership