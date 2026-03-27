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
    <div className=" "> 
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">

      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Scope and Promise
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Scope Card (Blue Glow) */}
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

        {/* Promise Card (Orange Glow) */}
        <Card borderColor="border-orange-400" glowColor="bg-orange-400">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white mb-6 shadow-md">
            <Flag size={28} />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Promise
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
    </div>
  );
};

export default ScopePromise;