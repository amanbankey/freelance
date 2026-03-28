import React from 'react'
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

  return (
    <div> 
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


        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10  ">
          

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