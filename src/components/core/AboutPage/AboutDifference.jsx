// import React from 'react'
// import { FiPlus } from "react-icons/fi";
 
// import vikram from '../../../assets/Images/vikram.jpg'
// import suresh from '../../../assets/Images/suresh.jpg'
// import rohan from '../../../assets/Images/rohan.jpg'
// import anil from '../../../assets/Images/anil.jpg'


// const images = {
//     topLeft: vikram,
//     topCenter: suresh,
//     topRight: rohan,
//     bottomLeft: anil,
//     bottomCenter: "https://picsum.photos/seed/workers/250/300",
    
//     bottomRight: "https://picsum.photos/seed/mining/200/200",
//   };

// const AboutDifference = () => {

//   return (
//     <div className="bg-white h-full  w-full   flex flex-col items-center justify-center px-4 py-16">
 
//     <p className="text-center text-gray-500 text-sm sm:text-xl max-w-2xl mb-10 leading-relaxed">
//       At BB Engineers, we believe in creating long-term value and believe what's good for the
//       planet is good for the business.
//     </p>
//     <div className="relative w-full max-w-7xl  ">

//       <div className="relative flex items-start justify-center gap-6 sm:gap-10 mt-4  min-h-80">

//         <div className="absolute left-56 top-24 w-24 h-24  sm:w-44 sm:h-44 rounded-3xl overflow-hidden flex-shrink-0">
//           <img
//             src={images.topLeft}
//             alt="factory"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute right-96 w-36  sm:w-64 sm:h-80  rounded-3xl overflow-hidden flex-shrink-0 ">
//           <img
//             src={images.topCenter}
//             alt="tower"
//             className="w-full h-full object-cover"
//           />
//           {/* <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
//             <FiPlus size={14} />
//           </div> */}
//         </div>

//         <div className="absolute right-10 top-16 w-20 h-20 sm:w-44 sm:h-44 rounded-3xl overflow-hidden flex-shrink-0 ">
//           <img
//             src={images.topRight}
//             alt="city"
//             className="w-full h-full object-cover"
//           />
//           {/* <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
//             <FiPlus size={14} />
//           </div> */}
//         </div>

//       </div>

//       <h2
//         className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest my-6"
//         style={{ color: "#29B6E8", fontFamily: "sans-serif" }}
//       >
//         Meet Our Team
//       </h2>

//       <div className="relative flex items-start justify-center gap-6 sm:gap-10 mt-4  min-h-80">

//         <div className="absolute left-8 top-28 w-20 h-20 sm:w-44 sm:h-44 rounded-3xl overflow-hidden flex-shrink-0 mt-8">
//           <img
//             src={images.bottomLeft}
//             alt="nature"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute left-80 -top-5 w-36 sm:w-64 sm:h-80 rounded-3xl overflow-hidden flex-shrink-0">
//           <img
//             src={images.bottomCenter}
//             alt="workers"
//             className="w-full h-full object-cover "
//           />
//           {/* <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
//             <FiPlus size={14} />
//           </div> */}
//         </div>

//         <div className="absolute right-44 bottom-0 w-28 h-28 sm:w-56 sm:h-60 rounded-3xl overflow-hidden flex-shrink-0 mt-4">
//           <img
//             src={images.bottomRight}
//             alt="mining"
//             className="w-full h-full object-cover"
//           />
//           {/* <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
//             <FiPlus size={14} />
//           </div> */}
//         </div>

//       </div>
//     </div>
//   </div>
//   )
// }

// export default AboutDifference








import React, { useEffect, useRef, useState } from 'react'
import { FiPlus } from "react-icons/fi";

import vikram from '../../../assets/Images/vikram.jpg'
import suresh from '../../../assets/Images/suresh.jpg'
import rohan from '../../../assets/Images/rohan.jpg'
import anil from '../../../assets/Images/anil.jpg'

const images = {
  topLeft: vikram,
  topCenter: suresh,
  topRight: rohan,
  bottomLeft: anil,
  bottomCenter: "https://picsum.photos/seed/workers/250/300",
  bottomRight: "https://picsum.photos/seed/mining/200/200",
};

const AboutDifference = () => {

  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-white h-full w-full flex flex-col items-center justify-center px-4 py-16">

      <p className="text-center text-gray-500 text-sm sm:text-xl max-w-2xl mb-10 leading-relaxed">
        At BB Engineers, we believe in creating long-term value and believe what's good for the
        planet is good for the business.
      </p>

      <div className="relative w-full max-w-7xl">

        {/* TOP */}
        <div className="relative flex items-start justify-center mt-4 min-h-80">

          <div
            className="absolute left-56 top-24 w-24 h-24 sm:w-44 sm:h-44 rounded-3xl overflow-hidden"
            style={{
              transition: "all 1s ease",
              clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)"
            }}
          >
            <img src={images.topLeft} className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute right-96 w-36 sm:w-64 sm:h-80 rounded-3xl overflow-hidden"
            style={{
              transition: "all 1s ease 0.2s",
              clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)"
            }}
          >
            <img src={images.topCenter} className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute right-10 top-16 w-20 h-20 sm:w-44 sm:h-44 rounded-3xl overflow-hidden"
            style={{
              transition: "all 1s ease 0.4s",
              clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)"
            }}
          >
            <img src={images.topRight} className="w-full h-full object-cover" />
          </div>

        </div>

        {/* HEADING */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest my-6"
          style={{ color: "#29B6E8" }}>
          Meet Our Team
        </h2>

        {/* BOTTOM */}
        <div className="relative flex items-start justify-center mt-4 min-h-80">

          <div
            className="absolute left-8 top-28 w-20 h-20 sm:w-44 sm:h-44 rounded-3xl overflow-hidden"
            style={{
              transition: "all 1s ease 0.6s",
              clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)"
            }}
          >
            <img src={images.bottomLeft} className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute left-80 -top-5 w-36 sm:w-64 sm:h-80 rounded-3xl overflow-hidden"
            style={{
              transition: "all 1s ease 0.8s",
              clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)"
            }}
          >
            <img src={images.bottomCenter} className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute right-44 bottom-0 w-28 h-28 sm:w-56 sm:h-60 rounded-3xl overflow-hidden"
            style={{
              transition: "all 1s ease 1s",
              clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)"
            }}
          >
            <img src={images.bottomRight} className="w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutDifference