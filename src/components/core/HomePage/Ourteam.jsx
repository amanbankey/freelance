

import React, {useEffect, useState, useRef }from 'react'

const TEAM = [
  {
    name: 'Anil Sharma',
    role: 'Electrician',
    img: 'https://bbengineers.co.in/image/ayo2.jpg',
  },
  {
    name: 'Rohan Deshmukh',
    role: 'Cleaner',
    img: 'https://bbengineers.co.in/image/ayo3.jpg',
  },
  {
    name: 'Suresh Patil',
    role: 'Home Maintenance',
    img: 'https://bbengineers.co.in/image/ayo4.jpg',
  },
  {
    name: 'Vikram Gupta',
    role: 'Plumber',
    img: 'https://bbengineers.co.in/image/ayo5.jpg',
  },
 

]

const Ourteam = () => {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -400 : 400,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full overflow-hidden">

      {/* ── Dark top header ── */}
      <div className="bg-[#1a2640] w-full pt-16 pb-52 px-4 text-center z-20">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3">
          Meet Our Team
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Our Professional Team
        </h2>
        <div className="w-12 h-1 bg-[#1D75BC] rounded-full mx-auto mb-6" />
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          B B Engineers has 10+ years of experience with providing wide area of specialty services
          works listed below.
        </p>
      </div>

      {/* ── Cards slider (overlaps dark bg) ── */}
      <div className="relative bg-gray-100 pb-16">
        <div className="-mt-40 px-6 lg:px-16">

          {/* Arrow buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 lg:left-4 top-8 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#1D75BC] hover:text-white transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-2 lg:right-4 top-8 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#1D75BC] hover:text-white transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 z-20"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TEAM.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}


const TeamCard = ({ member }) => {
  return (
    <div className="group flex-shrink-0 w-72 lg:w-80 cursor-pointer">

      {/* Image */}
      <div className="w-full h-72 lg:h-80 overflow-hidden rounded-sm">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name + role — name lifts up on hover */}
      <div className="pt-4 pb-2 bg-white px-4 py-4 text-center">
        <h3
          className="text-lg font-bold text-gray-900 transition-transform duration-300 ease-out group-hover:-translate-y-1"
        >
          {member.name}
        </h3>
        <p className="text-sm text-gray-400 mt-0.5 transition-all duration-300 group-hover:text-[#1D75BC]">
          {member.role}
        </p>

        {/* Social icons — appear on hover */}
        <div className="flex items-center justify-center gap-4 mt-3 overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-400 ease-in-out">
          {/* Facebook */}
          <a href="#" className="text-gray-400 hover:text-[#1D75BC] transition-colors duration-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="#" className="text-gray-400 hover:text-[#1D75BC] transition-colors duration-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-gray-400 hover:text-[#1D75BC] transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Ourteam