
// import { useEffect, useRef, useState } from "react";
// import fixture from '../../../assets/Images/fixture.png'
// import sheet from '../../../assets/Images/sheet.png'
// import pipe from '../../../assets/Images/pipe.png'
// import printer from '../../../assets/Images/printer.png'
// import unified from '../../../assets/videos/unified.mp4'
// import press from '../../../assets/Images/press.png'
// import single from '../../../assets/Images/single.png'
// import construct from '../../../assets/Images/construct.jpg'
// import corousal from '../../../assets/Images/corousal.jpg'


// const CARD_DEFS = [
//   { id: "cg",  fx: -340, fy: -250, fr: -22, fs: 0.65 }, // top-left
//   { id: "cb",  fx:  340, fy: -250, fr:  22, fs: 0.65 }, // top-right


//   { id: "cp",  fx: -310, fy:  270, fr: -16, fs: 0.65 }, // bottom-left
//   { id: "cph", fx:  310, fy:  270, fr:  16, fs: 0.65 }, // bottom-right


//   { id: "afd", fx: -700, fy: 0, fr: 0, fs: 0.65 },
 
//   { id: "fdf", fx:  700, fy: 0, fr: 0, fs: 0.65 },

// ];

// const PRODUCTS = [
//   { img: printer, label: "3D Printers",    bg: "#2ed283" },
//   { img: construct, label: "Construction", bg: "#5aacff" },
//   { img: pipe,    label: "Pipe Systems",   bg: "#ffe6f4" },
//   { img: sheet,   label: "Sheet Metal",    bg: "#fbbf24" },
//   { img: press,   label: "Press Machines", bg: "#f97316" },
//   { img: single,  label: "Single Units",   bg: "#a78bfa" },
// ];

// function lerp(a, b, t) { return a + (b - a) * t; }
// function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

// export default function FinanceSection() {
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const p = Math.max(0, Math.min(1,
//         (-rect.top + window.innerHeight * 0.6) / (rect.height - window.innerHeight)
//       ));
//       setProgress(p);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const t = easeInOut(Math.max(0, Math.min(1, (progress - 0.05) / 0.38))); //0.38

//   const getStyle = (def, extraStyle = {}) => ({
//     position: "absolute",
//     transform: `translate(${lerp(def.fx, 0, t)}px, ${lerp(def.fy, 0, t)}px) rotate(${lerp(def.fr, 0, t)}deg) scale(${lerp(def.fs, 1, t)})`,
//     opacity: Math.min(1, t * 2.2),
//     transition: "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease",
//     ...extraStyle,
//   });

//   const textOpacity = Math.max(0, 1 - t * 1.4);

//   return (
//     <div className="bg-white min-h-screen font-sans bg" style={{backgroundImage: `url(${corousal})`}} >

//          {/* <video
//             ref={videoRef}
//             className="absolute top-0 left-0 w-full object-cover"
//             src={unified}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//    {/* 400vh */}


//       <div ref={sectionRef} style={{ height: "150vh" }} className="relative">

//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

//           <h2
//             className="absolute text-7xl md:text-8xl font-black text-blue-600 text-center leading-tight pointer-events-none select-none"
//             style={{
//               opacity: textOpacity,
//               transition: "opacity 0.7s ease",
//               zIndex: 1,
//             }}
//           >
//             Product<br /> And Portfolio
//           </h2>

//           <div
//             className="absolute inset-0 flex items-center justify-center"
//             style={{ zIndex: 10 }}
//           >
          
//             <div className="relative" style={{ width: 260, height: 270 }}>

//               <div
//                 style={getStyle(CARD_DEFS[0], { top: 0, left: 0, zIndex: 13 })}
// //                 className="w-52 h-44 rounded-3xl   shadow-2xl"
// //               >
// //                <img src={printer} className="w-52 h-44"/>
//                 className="w-48 h-52 rounded-3xl p-4 shadow-2xl"
//               >
//                <img src={printer} className="h-44 "/>
//               </div>

//               <div
//                 style={getStyle(CARD_DEFS[1], { top: 10, right: 0, zIndex: 11 })}
//               //   className="w-52 h-44 rounded-3xl   shadow-2xl"
//               // >
//               //   <img src={fixture} className="w-52 h-44" />
//                 className="w-48 h-44 rounded-3xl   border-[3px] border-[#5aacff] shadow-2xl"
//               >
//                 <img src={construct} className="h-44 rounded-3xl" />
              
//               </div>

//               <div
//                 style={getStyle(CARD_DEFS[2], { top: 10, left: 30, zIndex: 15 })}
//               //   className="w-52 h-44 rounded-3xl   shadow-2xl text-center"
//               // >
//               //    <img src={pipe} className="w-52 h-44" />
//                 className="w-48 h-52 rounded-3xl p-4  shadow-2xl text-center"
//               >
//                  <img src={pipe} className="h-44 rounded-3xl" />
               
//               </div>

//               <div
//                 style={getStyle(CARD_DEFS[3], { top: -5, right: -5, zIndex: 9 })}
//               //   className="w-52 h-44 rounded-3xl shadow-2xl overflow-hidden  flex flex-col items-center justify-center"
//               // >
//               //    <img src={sheet} className="w-52 h-44"/>
//                 className="w-48 h-52 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br  flex flex-col items-center justify-center"
//               >
//                  <img src={sheet} className="h-44 rounded-3xl"/>
//               </div>

                
//               <div
//                 style={getStyle(CARD_DEFS[4], { top: -10, left: 10, zIndex: 9 })}
//               //   className="w-52 h-44 rounded-3xl shadow-2xl overflow-hidden  flex flex-col items-center justify-center"
//               // >
//               //    <img src={press} className="w-52 h-44"/>
//                 className="w-52 h-52 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br  flex flex-col items-center justify-center"
//               >
//                  <img src={press} className="h-44 w-44 rounded-3xl"/>
//               </div>

//               <div
//                 style={getStyle(CARD_DEFS[5], { top: -10, right: 5, zIndex: 9 })}
//               //   className="w-52 h-44 rounded-3xl shadow-2xl overflow-hidden  flex flex-col items-center justify-center"
//               // >
//               //    <img src={single} className="w-52 h-44" />
//                 className="w-52 h-52 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br  flex flex-col items-center justify-center"
//               >
//                  <img src={single} className="h-full w-full rounded-3xl"/>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }





import { useEffect, useRef } from "react";
import sheet from "../../../assets/Images/sheet.png";
import pipe from "../../../assets/Images/pipe.png";
import printer from "../../../assets/Images/printer.png";
import press from "../../../assets/Images/press.png";
import single from "../../../assets/Images/single.png";
import construct from "../../../assets/Images/construct.jpg";

const images = [printer, construct, pipe, sheet, press, single];

export default function PremiumRotateCenter() {
  const ringRef = useRef(null);

  useEffect(() => {
    let angle = 0;

    const animate = () => {
      angle += 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${angle}deg)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative h-[100vh]  flex items-center justify-center bg-gradient-to-br from-[#f9fafb] via-[#eef2ff] to-[#e0f2fe] overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute w-[500px]  h-[500px] bg-blue-300/30 blur-[140px] rounded-full"></div>

      {/* TITLE */}
      <div className="absolute top-20  text-center">
        <h2 className="text-5xl font-bold text-gray-800">
          Our Products
        </h2>
        <p className="text-gray-500 mt-3">
          Premium engineering solutions
        </p>
      </div>

      <div className="relative w-[420px]  h-[420px] flex items-center justify-center" style={{ perspective: "1200px" }}>



        <div
  ref={ringRef}
  className="absolute top-20 left-0 w-full h-full flex items-center justify-center"
  style={{
    transformStyle: "preserve-3d",
      transformOrigin: "center center"
  }}
>
  {images.map((img, i) => {
    const angle = (360 / images.length) * i;

    return (
      <div
        key={i}
        className="absolute w-52 h-72 rounded-3xl"
        style={{
          transform: `
            rotateY(${angle}deg)
            translateZ(240px)
          `,
        }}
      >
        <div className="w-full h-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-500 hover:scale-105">

          <img
            src={img}
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>

        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
}