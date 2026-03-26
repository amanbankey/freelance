import React from 'react'
import img from '../../../assets/Images/about.jpg'

const HeroSection = () => {
  return (
    <div className='relative  z-10 top-0  bg-transparent  '>
         
    {/* <section className="transparent relative z-50 left-0">
     
      <div className="relative h-80vh max-w-screen overflow-hidden">
       
        <img
          className="absolute top-0 left-0 w-full object-cover h-[100vh]"
          src={img}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40" />

       
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

          
            <div className="mb-4 md:mb-6 text-white text-7xl font-semibold">
            Innovative. Sustainable. Future Ready.
            </div>

      
            <div className="mb-16 md:mb-20 lg:mb-24">
              <button className="text-white px-5 py-2 bg-[#1D75BC] rounded-lg">
            
              </button>
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
    </section> */}


    <section className="relative w-full h-[70vh] mx-auto flex items-center ">
         <img
           src={img} 
           alt="Safety"
           className="absolute inset-0 w-full h-full object-cover"
         />

        <div className='flex z-50 text-white flex-col w-full '> 
       
        <div className="md:w-9/12 relative  py-24 mx-auto  ">
      <div className="flex items-center mb-4">
       
        <span className="text-sm tracking-widest font-semibold  uppercase">
        </span>
      </div>
    
      <div className="max-w-7xl mx-auto px-0 py-1  flex flex-col md:flex-row items-center gap-8 ">
        {/* Left Column - Heading */}
        <div className="lg:w-5/12 text-left">
          <h2 className={`text-base  font-bold leading-tight  `}>
          About us
          </h2>
        </div>

        {/* Right Column - Paragraph */}
        <div className="lg:w-1/2">
          <p className="text-sm tracking-widest text-gray-600 font-medium ">
         
          </p>
        </div>
      </div>
      <div className="text-left text-5xl  text-white  flex  z-10  w-8/12 ">
            <p>
               Innovative. Sustainable. Future Ready.
            </p>
         </div>
    </div>
 
       {/* <div className=' z-10 border-red-300 border-4   '> */}
        
        {/* </div> */}
        </div>
        
       
       </section>

  </div>
  )
}

export default HeroSection