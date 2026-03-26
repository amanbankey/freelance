import React from 'react'
import img from '../assets/Images/about.jpg'

const ServicesItem = () => {

  return (
      <section className="relative w-full h-[70vh] mx-auto flex items-center ">
                   <img
                     src={img}
                     alt="Safety"
                     className="absolute inset-0 w-full h-full object-cover"
                   />
           
                   <div className="flex z-50 text-white flex-col w-full ">
                     <div className="md:w-9/12 relative  py-24 mx-auto  ">
                       <div className="flex items-center mb-4">
                         <span className="text-sm tracking-widest font-semibold  uppercase"></span>
                       </div>
           
                       <div className="max-w-7xl mx-auto px-0 py-1  flex flex-col md:flex-row items-center gap-8 ">
                         {/* Left Column - Heading */}
                         <div className="lg:w-5/12 text-left">
                           <h2 className={`text-base  font-bold leading-tight  `}>
                             Services 
                           </h2>
                         </div>
           
                         {/* Right Column - Paragraph */}
                         <div className="lg:w-1/2">
                           <p className="text-sm tracking-widest text-gray-600 font-medium "></p>
                         </div>
                       </div>
                       <div className="text-left text-5xl  text-white  flex  z-10  w-8/12 ">
                         <p>Top quality bearings for top quality performance in the automotive industry.</p>
                       </div>
                     </div>
           
                     {/* <div className=' z-10 border-red-300 border-4   '> */}
           
                     {/* </div> */}
                   </div>
                 </section>
  )
}

export default ServicesItem