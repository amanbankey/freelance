import React, {useState, useEffect, useRef} from 'react'
import header from '../../../assets/videos/header.mp4'
import header2 from '../../../assets/videos/header2.mp4'
import { HiMenuAlt3 } from "react-icons/hi";
const SLIDES = [
    {
      video: header,
      heading: (
        <>
          World Class <span className="text-[#F9981C]"> Engineering </span> Services Provider
        </>
      ),
      list: ['Commercial', 'Domestic', 'Industrial'],
      button: 'View More Details',
    },
    {
      video: header2,
      heading: (
        <>
          Trusted <span className="text-[#F9981C]"> Structural </span> Design Solutions
        </>
      ),
      list: ['Residential', 'High-Rise', 'Infrastructure'],
      button: 'Explore Projects',
    },
    // {
    //   video: header,
    //   heading: (
    //     <>
    //       Delivering <span className="text-[#F9981C]"> Excellence </span> Since Inception
    //     </>
    //   ),
    //   list: ['Planning', 'Execution', 'Handover'],
    //   button: 'Get a Free Quote',
    // },
  ]

  const INTERVAL = 5000

const HeroSection = () => {

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
      console.log("timer" , timer );
   
      return () => clearInterval(timer)
    }, [])
   
    // Swap video src when slide index changes
    // useEffect(() => {
    //   if (videoRef.current) {
    //     videoRef.current.src = SLIDES[current].video
    //     videoRef.current.load()
    //     videoRef.current.play()
    //   }
    // }, [current])


    useEffect(() => {
      const video = videoRef.current;
    
      if (!video) return;
    
      video.src = SLIDES[current].video;
    
      video.onloadeddata = () => {
        video.play().catch(() => {console.log("error")});
      };
    
    }, [current]);

 
    const slide = SLIDES[current]

  return (

    // <div className='relative  z-10 top-0  bg-transparent '>
         
    //   <div className=' '>
    //   <section className="transparent relative z-10 left-0 ">
       
    //     <div className="relative  max-w-screen  ">
    //     <div className='sticky top-0 h-screen  z-10  '>
          
    //       <video
    //         ref={videoRef}
    //         className="absolute top-0 left-0 w-full object-cover"
    //         src={slide.video}
    //         autoPlay
    //         loop
    //         muted
    //         playsInline
    //       />
 
    //       <div className="absolute inset-0 bg-gradient-to-b    max-w-7xl mx-auto " />
 
    //       <div
    //         className={[
    //           'relative z-10 flex flex-col justify-center items-center min-h-screen w-full   mx-auto',
    //           'transition-all duration-300 ease-in-out',
    //           textVisible
    //             ? 'opacity-100 translate-y-0'
    //             : 'opacity-0 translate-y-3',
    //         ].join(' ')}
    //       >
    //         <div className='  max-w-7xl  w-full  '>
    //         <div className="max-w-3xl flex  justify-end  ">
              
    //           <div className=' '> 
    //           <div className="mb-4 md:mb-6 text-white text-7xl font-semibold">
    //             {slide.heading}
    //           </div>
 
    //           <div className="mb-4 md:mb-6 text-white text-xl">
    //             <ul className="flex gap-10">
    //               {slide.list.map((item) => (
    //                 <li key={item}>{item}</li>
    //               ))}
    //             </ul>
    //           </div>
 
    //           {/* Button */}
    //           {/* <div className="mb-16 md:mb-20 lg:mb-24">
    //             <button className="text-white px-5 py-2 bg-[#1D75BC] rounded-lg">
    //               {slide.button}
    //             </button>
    //           </div> */}
  
    //         </div>
    //         </div>

    //          </div>
    //       </div>
 
    //       <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16">
    //         <div className="flex flex-wrap justify-between items-center">
    //           <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 mb-4 md:mb-0" />
    //         </div>
    //       </div>
 
    //       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
    //         {SLIDES.map((_, i) => (
    //           <button
    //             key={i}
    //             onClick={() => {
    //               setTextVisible(false)
    //               setTimeout(() => {
    //                 setCurrent(i)
    //                 setTextVisible(true)
    //               }, 350)
    //             }}
    //             className={[
    //               'w-2 h-2 rounded-full transition-all duration-300',
    //               i === current
    //                 ? 'bg-[#F9981C] w-6'
    //                 : 'bg-white/50 hover:bg-white/80',
    //             ].join(' ')}
    //           />
    //         ))}
    //       </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    // </div>


    
    <div className='relative z-10 top-0 bg-transparent'>

  <div className=''>
    <section className="transparent relative z-10 left-0">

      <div className="relative max-w-screen">
        <div className='sticky top-0 h-screen z-10'>

          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-b max-w-7xl mx-auto" />

          <div
            className={[
              'relative z-10 flex flex-col justify-center items-center min-h-screen w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12',
              'transition-all duration-300 ease-in-out',
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3',
            ].join(' ')}
          >
            <div className='max-w-7xl w-full'>
              <div className="w-full flex justify-center sm:justify-end">

                <div className='w-full sm:w-auto'>
                  {/* Heading */}
                  <div className="mb-4 md:mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                    {slide.heading}
                  </div>

                  {/* List */}
                  <div className="mb-4 md:mb-6 text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                      {slide.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 mb-4 md:mb-0" />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
          </div>

        </div>
      </div>
    </section>
  </div>

</div>
  )
}

export default HeroSection