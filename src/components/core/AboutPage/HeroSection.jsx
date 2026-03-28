import React,  { useEffect, useState } from 'react'
import img from '../../../assets/Images/about.jpg'

const HeroSection = () => {
  const [started, setStarted] = useState(false)
 
  useEffect(() => {
    // first frame pe scale(0.85) dikhao, phir turant grow karo
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStarted(true))
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className='relative  z-10 top-0    '>
         
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


    {/* <section className="relative w-full h-[70vh] mx-auto flex items-center ">
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
      
        <div className="lg:w-5/12 text-left">
          <h2 className={`text-base  font-bold leading-tight  `}>
          About us
          </h2>
        </div>

      
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
 
        </div>
        
       
       </section> */}


{/* <section className="relative w-full h-[70vh] mx-auto flex items-center overflow-hidden">

 <div
   className="absolute  w-full h-full will-change-transform bg-white rounded-xl"
   style={{
     transform: started ? 'scale(1)'    : 'scale(0.88)',

     transition: started
       ? 'transform 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 1200ms ease-out'
       : 'none',
   }}
 >
   <img
     src={img}
     alt="About Us"
     className="w-full h-full object-cover "
   />
 </div>


 <div className="absolute  bg-black/45" />

 <div
   className="flex z-50 text-white flex-col w-full"
   style={{
     opacity:   started ? 1 : 0,
     transform: started ? 'translateY(0)' : 'translateY(24px)',
     transition: 'opacity 900ms ease-out 400ms, transform 900ms ease-out 400ms',
   }}
 >
   <div className="md:w-9/12 relative py-24 mx-auto w-full px-6 md:px-0">


     <div className="flex items-center mb-4">
       <span className="text-sm tracking-widest font-semibold uppercase" />
     </div>


     <div className="max-w-7xl mx-auto px-0 py-1 flex flex-col md:flex-row items-center gap-8">
       <div className="lg:w-5/12 text-left">
         <h2 className="text-base font-bold leading-tight">
           About us
         </h2>
       </div>
       <div className="lg:w-1/2">
         <p className="text-sm tracking-widest text-gray-300 font-medium" />
       </div>
     </div>


     <div className="text-left text-3xl sm:text-4xl md:text-5xl text-white flex z-10 w-full md:w-8/12 mt-4">
       <p className="leading-snug">
         Innovative. Sustainable. Future Ready.
       </p>
     </div>

   </div>
 </div>

</section> */}


      <section className="relative w-full h-[70vh] mx-auto flex items-center overflow-hidden">

      <div
        className="absolute w-full h-full will-change-transform bg-white"
        style={{
          transform:    started ? 'scale(1)'    : 'scale(0.88)',
          borderRadius: started ? '0px'         : '20px',
          overflow:     'hidden',
          transition: started
            ? 'transform 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            : 'none',
        }}
      >
        <img
          src={img}
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>


      <div
        className="absolute bg-black/45"
        style={{
          
          borderRadius: started ? '0px' : '20px',
          overflow:     'hidden',
          transition: started
            ? 'border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            : 'none',
        }}
      />

      <div
        className="flex z-50 text-white flex-col w-full"
        style={{
          opacity:   started ? 1 : 0,
          transform: started ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 900ms ease-out 400ms, transform 900ms ease-out 400ms',
        }}
      >
        <div className="md:w-9/12 relative py-24 mx-auto w-full px-6 md:px-0">

          {/* label */}
          <div className="flex items-center mb-4">
            <span className="text-sm tracking-widest font-semibold uppercase" />
          </div>

          {/* About us row */}
          <div className="max-w-7xl mx-auto px-0 py-1 flex flex-col md:flex-row items-center gap-8">
            <div className="lg:w-5/12 text-left">
              <h2 className="text-base font-bold leading-tight">
                About us
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-sm tracking-widest text-gray-300 font-medium" />
            </div>
          </div>

          {/* Main headline */}
          <div className="text-left text-3xl sm:text-4xl md:text-5xl text-white flex z-10 w-full md:w-8/12 mt-4">
            <p className="leading-snug">
              Innovative. Sustainable. Future Ready.
            </p>
          </div>

        </div>
      </div>

      </section>


  </div>
  )
}

export default HeroSection