import React, {useState, useRef, useEffect} from 'react'

import about from '../../../assets/videos/about.mp4'

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
      button: 'View More Details',
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
       
       <div>
      <section className="transparent relative z-50 left-0">
        {/* Background container */}
        <div className="relative h-80vh max-w-screen overflow-hidden">
 
          {/* Video — single element, src swaps */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full object-cover"
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />
 
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40" />
 
          {/* Foreground content — fades in/out */}
          <div
            className={[
              'relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-8 lg:px-16',
              'transition-all duration-300 ease-in-out',
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3',
            ].join(' ')}
          >
            <div className="max-w-3xl">
 
              {/* Heading */}
              <div className="mb-4 md:mb-6 text-white text-7xl font-semibold">
                {slide.heading}
              </div>
  
              <div className='text-xl text-white'  > {slide.des} </div>
              {/* List */}
              <div className="mb-4 md:mb-6 text-white text-xl">
                {/* <ul className="flex gap-10">
                  {slide.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul> */}
              </div>
 
              {/* Button */}
              <div className="mb-16 md:mb-20 lg:mb-24">
                <button className="text-white px-5 py-2 bg-[#1D75BC] rounded-lg">
                  {slide.button}
                </button>
              </div>
 
            </div>
          </div>
 
          {/* Bottom section — untouched */}
          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 mb-4 md:mb-0" />
            </div>
          </div>
 
          {/* Slide indicator dots */}
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
      </section>
    </div>

    </div>
  )
}

export default AboutSection