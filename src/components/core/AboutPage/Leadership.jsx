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
            JSW is more than a business; it's a brand defined by innovation, excellence, and
            sustainability. From a regional player to a global powerhouse, we've grown while staying
            true to our core values in every step we take.
          </p>
 
          {/* Person Name & Title */}
          <div className="mb-6">
            <p className="font-bold text-gray-900 text-sm tracking-wide uppercase">
              Sajjan Jindal
            </p>
            <p className="text-gray-500 text-sm">Chairman</p>
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