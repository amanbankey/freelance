import React, {useState, useRef, useEffect} from 'react'

import about from '../../../assets/videos/about.mp4'
import { NavLink } from 'react-router-dom'

import { FiArrowUpRight } from "react-icons/fi";
import program from '../../../assets/Images/programming.jpg'
import bb from '../../../assets/Images/bb.jpg'
import mobile from '../../../assets/Images/mobile.png'
import software from '../../../assets/Images/software.png'

const INTERVAL = 5000

const SLIDES = [
    {
      video: about,
      title: 'ABOUT B B Engineers',
      heading: (
        <>
          {/* World Class <span className="text-[#F9981C]"> Engineering </span> Services Provider */}

          <span className='text-[#F9981C]'></span>
          Precision Engineering, One Roof Solution
        </>
      ),
      des: 'Empowering industry leaders with precision, innovation, and reliability—B B Engineers is your trusted “one roof solution” for advanced stamping, embossing, tooling assembly, fixture development, and integration. Based in Chakan, Pune, our team delivers expertise across automotive and non-automotive sectors, streamlining your processes and driving sustainable growth.',
      list: ['Commercial', 'Domestic', 'Industrial'],
      button: 'More About',
    },
   
  ]

const AboutSection = () => {
     const [current, setCurrent] = useState(0)
        const [textVisible, setTextVisible] = useState(true)
        const videoRef = useRef(null)
       
        useEffect(() => {
          const timer = setInterval(() => {
            // 1. Fade text out
            setTextVisible(false)
       
            // 2. After fade-out (300ms), switch slide & fade text back in
            setTimeout(() => {
              setCurrent((prev) => (prev + 1) % SLIDES.length)
              setTextVisible(true)
            }, 5000)
          }, INTERVAL)
       
          return () => clearInterval(timer)
        }, [])
       
        // Swap video src when slide index changes
        useEffect(() => {
          if (videoRef.current) {
            videoRef.current.src = SLIDES[current].video
            videoRef.current.load()
            videoRef.current.play()
          }
        }, [current])
       
        const slide = SLIDES[current]

  return (
    <div>
       
       {/* <div>
      <section className="transparent relative z-50 left-0 ">
       
        <div className="relative  max-w-screen  border-2 border-green-400">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full object-cover stretch"
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-b   max-w-7xl mx-auto " />
 
          <div
            className={[
              'relative z-10 flex flex-col justify-center min-h-screen  max-w-7xl mx-auto',
              'transition-all duration-300 ease-in-out',
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3',
            ].join(' ')}
          >
            <div className='max-w-7xl w-full mx-auto  '> 
               <div className="max-w-3xl   ">
 
          
              <span className='text-white'> {slide.title}</span>
              <div className="mb-4 md:mb-6 text-white text-5xl font-semibold">
                {slide.heading}
              </div>
  
              <div className='text-xl text-white'  > {slide.des} </div>
           
              <div className="mb-16 md:mb-20 lg:mb-24 mt-5">
                <NavLink to='/about'> 
                 <button className="text-white px-5 py-2 bg-[#1D75BC] rounded-lg">
                  {slide.button}
                </button>
                </NavLink>
               
              </div>
 
             </div>
           </div>
          
          </div>
 
          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 mb-4 md:mb-0" />
            </div>
          </div>
 
 
        
        <div className="w-full bg-[#f5f5f5] py-10 sm:py-12 px-4 flex justify-center">
          <div className="w-full max-w-6xl bg-white rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 md:p-10">
        
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black leading-tight max-w-md">
                Our Comprehensive <br /> Insurance Plans
              </h2>
        
              <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
                From life and health to vehicle and property, we offer a wide range of insurance plans tailored to protect what matters most to you. Explore our flexible and affordable options, designed to provide peace of mind in every aspect of your life.
              </p>
            </div>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
        
              <div className="bg-[#f1f1f1] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                      Our Promise
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                      Our scope includes delivering complete end-to-end engineering solutions including stamping, welding, laser cutting, and tooling.
                    </p>
                  </div>
        
                  <img src={program} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                </div>
        
                <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
                    <FiArrowUpRight />
                  </div>
                  <p className="text-xs sm:text-sm">Learn more</p>
                </div>
              </div>
        
              <div className="bg-[#f4c84c] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="bg-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                      Web Development Service
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                      We promise quality, reliability, and on-time delivery with strong commitment to customer satisfaction.
                    </p>
                  </div>
        
                  <img src={mobile} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                </div>
        
                <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-blue-600 flex items-center justify-center rounded-full">
                    <FiArrowUpRight />
                  </div>
                  <p className="text-xs sm:text-sm">Learn more</p>
                </div>
              </div>
        
              <div className="bg-blue-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="bg-white text-black px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                      Management Target
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Achieving product excellence through zero-defect manufacturing, legal compliance, and transparent business processes
                    </p>
                  </div>
        
                  <img src={bb} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                </div>
        
                <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-blue-600 flex items-center justify-center rounded-full">
                    <FiArrowUpRight />
                  </div>
                  <p className="text-xs sm:text-sm">Learn more</p>
                </div>
              </div>
        
              <div className="bg-[#f1f1f1] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                      Strategies
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                      Ensuring product excellence through quality and innovation.
                    </p>
                  </div>
        
                  <img src={software} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                </div>
        
                <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
                    <FiArrowUpRight />
                  </div>
                  <p className="text-xs sm:text-sm">Learn more</p>
                </div>
              </div>
        
            </div>
          </div>
        </div>

         
        </div>
      </section>
    </div> */}

<div className="w-full relative">

{/* VIDEO SECTION */}
<div className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-full overflow-hidden relative">
  <video
    className="w-full h-full object-cover  "
    src={about}
    autoPlay
    loop
    muted
    playsInline
  />
</div>

 
<div className="relative -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 z-10">

  <div className="w-full bg-[#f5f5f5] py-10 sm:py-12 px-4 flex justify-center">
    <div className="w-full max-w-6xl bg-white rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 md:p-10">

      {/* <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-8 md:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black leading-tight max-w-md">
          Our Comprehensive <br /> Insurance Plans
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
          From life and health to vehicle and property, we offer a wide range of insurance plans tailored to protect what matters most to you. Explore our flexible and affordable options, designed to provide peace of mind in every aspect of your life.
        </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

        {/* CARD 1 */}
        <div className="bg-[#f1f1f1] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                Our Scope
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                Our scope includes delivering complete end-to-end engineering solutions including stamping, welding, laser cutting, and tooling.
              </p>
            </div>
            <img src={program} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <FiArrowUpRight />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#f4c84c] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="bg-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
              Our Promise
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                We promise quality, reliability, and on-time delivery with strong commitment to customer satisfaction.
              </p>
            </div>
            <img src={mobile} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-blue-600 flex items-center justify-center rounded-full">
              <FiArrowUpRight />
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-blue-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="bg-white text-black px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                Management Target
              </span>
              <p className="text-xs sm:text-sm leading-relaxed">
                Achieving product excellence through zero-defect manufacturing, legal compliance, and transparent business processes
              </p>
            </div>
            <img src={bb} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-blue-600 flex items-center justify-center rounded-full">
              <FiArrowUpRight />
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#f1f1f1] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                Strategies
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                Ensuring product excellence through quality and innovation.
              </p>
            </div>
            <img src={software} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-6">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <FiArrowUpRight />
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</div>

</div>


    </div>
  )
}

export default AboutSection







     {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setTextVisible(false)
                  setTimeout(() => {
                    setCurrent(i)
                    setTextVisible(true)
                  }, 350)
                }}
                className={[
                  'w-2 h-2 rounded-full transition-all duration-300',
                  i === current
                    ? 'bg-[#F9981C] w-6'
                    : 'bg-white/50 hover:bg-white/80',
                ].join(' ')}
              />
            ))}
          </div> */}