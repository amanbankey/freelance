import React, {useState, useEffect} from 'react'
import img from '../assets/Images/about.jpg'

import { useParams } from "react-router-dom";
// import Products from "../assets/Images/products.jpg";
import { useLocation } from "react-router-dom";

const Services = [
    "Deep Groove Ball Bearings",
    "Taper Roller Bearings",
    "Special Purpose Ball Bearings",
    "Double Row Angular Contact Ball Bearings",
    "Hub Unit Bearings",
    "Clutch Release Bearings",
    "Centre Bearings",
    "Magneto Bearings",
    "Carbo-nitrided Bearings",
    "Seize-Resistant Bearings",
  ];

const ServicesItem = () => {

  const location = useLocation();
  const { id } = useParams();

  const services = location.state;
  const title = decodeURIComponent(id);

  console.log("dat----------a", services);

  const [started, setStarted] = useState(false)
   
    useEffect(() => {
      // first frame pe scale(0.85) dikhao, phir turant grow karo
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setStarted(true))
      })
      return () => cancelAnimationFrame(raf)
    }, [])
  

  return (
    <div> 
 
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

             
                 <section className="w-full bg-white">
        <div
          className="
        max-w-5xl mx-auto
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
        py-8 sm:py-10 md:py-12 lg:py-16
      "
        >
          {/* ── Heading ── */}
          <h2
            className="
          text-lg sm:text-xl md:text-2xl
          font-semibold text-gray-900
          mb-3 sm:mb-4
        "
          >
            Products and Services
          </h2>

          {/* ── Description paragraph ── */}
          <p
            className="
          text-sm sm:text-base
          text-gray-700
          leading-relaxed sm:leading-7
          mb-5 sm:mb-6 md:mb-7
        "
          >
           {services.para}
          </p>

          {/* ── "The product range includes –" ── */}
          <p
            className="
          text-sm sm:text-base
          text-gray-700
          mb-4 sm:mb-5
        "
          >
            The product range includes –
          </p>

          <ul className="space-y-2 sm:space-y-2.5 pl-1">
            {services.details.map((item, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-3.5">
                {/* Bullet dot exactly like screenshot */}
                <span className="mt-[7px] sm:mt-[8px] flex-shrink-0 w-[6px] h-[6px] rounded-full bg-gray-600" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item.data}
                </span>
              </li>
            ))}
          </ul>
        </div>


        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10  mb-20">
          

          <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                Product Images
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Explore our manufacturing tools and product visuals
              </p>
            </div>
            <div
              className="grid 
              grid-cols-2 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-3 sm:gap-4 md:gap-5"
            >
              {services.images.map((img, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-xl bg-gray-100"
                >
                  <img
                    src={img.img}
                    alt="factory tool"
                    className="
                      w-full 
                      h-32 sm:h-40 md:h-48 lg:h-52 
                      object-cover 
                      transition-transform duration-300 
                      group-hover:scale-105
                    "
                  />
                </div>
              ))}
            </div>
          </div>
   
      </section>


                 </div>
  )
}

export default ServicesItem