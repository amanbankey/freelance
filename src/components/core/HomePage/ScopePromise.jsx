// import React from 'react'
// import { Briefcase, Flag } from "lucide-react";

// const ScopePromise = () => {

//   return (
//     <section className="relative py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
      
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//         Scope and Promise
//       </h2>

//       {/* Cards Container */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* Card 1 */}
//         <div className="backdrop-blur-lg bg-white/40 border-2 border-blue-400  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          
//           <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white mb-6 shadow-md">
//             <Briefcase size={28} />
//           </div>

//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Our Scope
//           </h3>

//           <p className="text-gray-600 leading-relaxed">
//             Our scope includes delivering complete end-to-end engineering
//             solutions including stamping, welding, laser cutting, and tooling.
//             We ensure high precision, innovation, and efficiency across all
//             industrial applications.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="backdrop-blur-lg bg-white/40 border-2 border-orange-400 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          
//           <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white mb-6 shadow-md">
//             <Flag size={28} />
//           </div>

//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Our Promise
//           </h3>

//           <p className="text-gray-600 leading-relaxed">
//             We promise quality, reliability, and on-time delivery. Our goal is to
//             provide innovative and sustainable solutions with transparency and
//             strong commitment to customer satisfaction.
//           </p>
//         </div>

//       </div>

//       {/* Decorative Blur Circles */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-60 h-40 bg-orange-600 opacity-30 rounded-full blur-3xl"></div>
      
//     </section>
//   )
// }

// export default ScopePromise



// import React, { useRef } from "react";
// import { Briefcase, Flag } from "lucide-react";

// const Card = ({ children, borderColor }) => {
//   const cardRef = useRef(null);
//   const animationRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const rotateY = ((x - rect.width / 2) / rect.width) * 15;
//     const rotateX = ((y - rect.height / 2) / rect.height) * -15;

//     cancelAnimationFrame(animationRef.current);

//     animationRef.current = requestAnimationFrame(() => {
//       card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`;
//     });
//   };

//   const handleMouseLeave = () => {
//     const card = cardRef.current;

//     cancelAnimationFrame(animationRef.current);

//     animationRef.current = requestAnimationFrame(() => {
//       card.style.transform =
//         "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className={`transition-transform duration-300 ease-out will-change-transform backdrop-blur-lg bg-white/40 border-2 ${borderColor} rounded-2xl p-8 shadow-lg cursor-pointer`}
//       style={{ transformStyle: "preserve-3d" }}
//     >
//       {children}
//     </div>
//   );
// };

// const ScopePromise = () => {
//   return (
//     <section className="relative py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//         Scope and Promise
//       </h2>

//       {/* Cards */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* Scope Card */}
//         <Card borderColor="border-blue-400">
//           <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
//             <Briefcase size={28} />
//           </div>

//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Our Scope
//           </h3>

//           <p className="text-gray-600 leading-relaxed">
//             Our scope includes delivering complete end-to-end engineering
//             solutions including stamping, welding, laser cutting, and tooling.
//             We ensure high precision, innovation, and efficiency across all
//             industrial applications.
//           </p>
//         </Card>

//         {/* Promise Card */}
//         <Card borderColor="border-orange-400">
//           <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white mb-6 shadow-md transition-transform duration-300 group-hover:scale-110">
//             <Flag size={28} />
//           </div>

//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Our Promise
//           </h3>

//           <p className="text-gray-600 leading-relaxed">
//             We promise quality, reliability, and on-time delivery. Our goal is to
//             provide innovative and sustainable solutions with transparency and
//             strong commitment to customer satisfaction.
//           </p>
//         </Card>

//       </div>

//       {/* Background Blur Effects */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-60 h-40 bg-orange-400 opacity-30 rounded-full blur-3xl"></div>

//     </section>
//   );
// };

// export default ScopePromise;

import { FiArrowUpRight } from "react-icons/fi";
import program from '../../../assets/Images/programming.jpg'
import bb from '../../../assets/Images/bb.jpg'
import mobile from '../../../assets/Images/mobile.png'
import software from '../../../assets/Images/software.png'

import React, { useRef } from "react";
import { Briefcase, Flag } from "lucide-react";

const Card = ({ children, borderColor, glowColor }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const animationRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    const rotateX = ((y - rect.height / 2) / rect.height) * -15;

    cancelAnimationFrame(animationRef.current);

    animationRef.current = requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = 1;
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;

    cancelAnimationFrame(animationRef.current);

    animationRef.current = requestAnimationFrame(() => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      glow.style.opacity = 0;
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-300 ease-out will-change-transform backdrop-blur-lg bg-white/40 border-2 ${borderColor} rounded-2xl p-8 shadow-lg cursor-pointer`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow Effect */}
      <div
        ref={glowRef}
        className={`absolute w-40 h-40 ${glowColor} opacity-0 rounded-full blur-3xl pointer-events-none transition-opacity duration-300`}
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {children}
    </div>
  );
};

const ScopePromise = () => {
  return (
    <div> 
    {/* <div className=" "> 
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">

      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Scope and Promise
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

       
        <Card borderColor="border-blue-400" glowColor="bg-blue-400">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white mb-6 shadow-md">
            <Briefcase size={28} />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Scope
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Our scope includes delivering complete end-to-end engineering
            solutions including stamping, welding, laser cutting, and tooling.
          </p>
        </Card>

        
        <Card borderColor="border-orange-400 transition-all duration-500 ease-out scale-105 border-b-8 -translate-y-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)]" glowColor="bg-orange-400">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white mb-6 shadow-md">
            <Flag size={28} />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
          
          </h3>

          <p className="text-gray-600 leading-relaxed">
            We promise quality, reliability, and on-time delivery with strong
            commitment to customer satisfaction.
          </p>
        </Card>

      </div>

      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-40 bg-orange-400 opacity-30 rounded-full blur-3xl"></div>

    </section>
    </div> */}



    {/* <div className="w-full bg-[#f5f5f5] py-10 px-4 flex justify-center">
    <div className="w-full max-w-6xl bg-white rounded-[30px] p-6 md:p-10">

      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
          Our Comprehensive <br /> Insurance Plans
        </h2>

        <p className="text-gray-500 text-sm md:text-base max-w-md">
          From life and health to vehicle and property, we offer a wide range of insurance plans tailored to protect what matters most to you. Explore our flexible and affordable options, designed to provide peace of mind in every aspect of your life.
        </p>

       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div className="bg-[#f1f1f1] rounded-2xl p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
          <div className='flex'>
            <div> 
            <div  > 
                <span className="bg-yellow-300 px-3 py-1 rounded text-sm font-semibold">
                Our Promise
            </span>
            </div>
            <div>
              <p className="text-sm">
              Our scope includes delivering complete end-to-end engineering solutions including stamping, welding, laser cutting, and tooling.
              </p>
            </div>

            </div>
          
            <div>
            <img src={program} className='w-40 h-36' />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-6">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
            <FiArrowUpRight />
            </div>
            <p className="text-sm">Learn more</p>
          </div>
        </div>

        <div className="bg-[#f4c84c] rounded-2xl p-6 flex flex-col justify-between  border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
           <div className='flex ' >
            <div>  <div>
            <span className="bg-white px-3 py-1 rounded text-sm font-semibold">
              Web Development Service
            </span>
          </div>
          <div>
            <p className="text-sm">
            We promise quality, reliability, and on-time delivery with strong commitment to customer satisfaction.
            </p>
          </div>
          </div>
         

          <div> 
            <img src={mobile} className='w-40 h-36' />
          </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center rounded-full">
             <FiArrowUpRight />
            </div>
            <p className="text-sm">Learn more</p>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
          <div className='flex  '> 
            <div>  <div>
            <span className="bg-white text-black px-3 py-1 rounded text-sm font-semibold">
              Management Target
            </span>
          </div>
          <div>
         
              <p>Achieving product excellence through zero-defect manufacturing, legal compliance, and transparent business processes</p>
         
          </div></div>
         
          <div>
            <img src={bb} className='w-40 h-36' />
          </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center rounded-full">
             <FiArrowUpRight />
            </div>
            <p className="text-sm">Learn more</p>
          </div>
        </div>

        <div className="bg-[#f1f1f1] rounded-2xl p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
           <div className='flex '>
          <div>
            <div> <span className="bg-yellow-300 px-3 py-1 rounded text-sm font-semibold">
             
              Strategies
            </span> </div>
            <div> 
             
                <p>Ensuring product excellence through quality and innovation.</p>
               
            </div>
           
          </div>
          <div> 
            <img src={software} className='w-40 h-36' />
          </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
             <FiArrowUpRight />
            </div>
            <p className="text-sm">Learn more</p>
          </div>
        </div>

      </div>
    </div>
  </div> */}

{/* <div className="w-full bg-[#f5f5f5] py-10 sm:py-12 px-4 flex justify-center">
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
</div> */}


  </div>
  );
};

export default ScopePromise;