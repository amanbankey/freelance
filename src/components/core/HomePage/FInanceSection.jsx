



// import { useEffect, useRef, useState } from "react";

// const CARDS = [
//   {
//     id: "exchange",
//     from: { x: -350, y: -250, r: -20, s: 0.7 },
//     to:   { x: -120, y: -80,  r: -8,  s: 1   },
//   },
//   {
//     id: "eur",
//     from: { x:  350, y: -250, r:  20, s: 0.7 },
//     to:   { x:   70, y: -90,  r:  6,  s: 1   },
//   },
//   {
//     id: "contact",
//     from: { x: -320, y:  260, r: -15, s: 0.7 },
//     to:   { x: -100, y:  80,  r: -4,  s: 1   },
//   },
//   {
//     id: "photo",
//     from: { x:  320, y:  260, r:  15, s: 0.7 },
//     to:   { x:   90, y:  75,  r:  5,  s: 1   },
//   },
// ];

// function lerp(a, b, t) { return a + (b - a) * t; }
// function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

// export default function FInanceSection() {
    
//   const sectionRef = useRef(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const p = Math.max(0, Math.min(1,
//         (-rect.top + window.innerHeight * 0.55) / (rect.height - window.innerHeight)
//       ));
//       setProgress(p);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const t = easeInOut(Math.max(0, Math.min(1, (progress - 0.05) / 0.4)));

//   const getStyle = (card) => ({
//     position: "absolute",
//     transform: `translate(${lerp(card.from.x, card.to.x, t)}px, ${lerp(card.from.y, card.to.y, t)}px) rotate(${lerp(card.from.r, card.to.r, t)}deg) scale(${lerp(card.from.s, card.to.s, t)})`,
//     opacity: Math.min(1, t * 2),
//     transition: "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease",
//   });

//   const textOpacity = Math.max(0.15, 1 - t * 0.6);

//   return (
//     <div className="bg-white min-h-screen font-sans">

//       <div className="h-screen flex flex-col items-center justify-center">
      
//         <p className="mt-6 text-gray-300 text-sm tracking-widest">↓ SCROLL</p>
//       </div>

//       <div ref={sectionRef} style={{ height: "400vh" }} className="relative">
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

//           <h2
//             className="absolute text-7xl md:text-8xl font-black text-[#ff3c00] text-center leading-tight pointer-events-none z-10 select-none"
//             style={{ opacity: textOpacity, transition: "opacity 0.5s ease" }}
//           >
//             Unify your<br />finances
//           </h2>

//           <div className="absolute inset-0 flex items-center justify-center z-20">
//             <div className="relative" style={{ width: 360, height: 340 }}>

//               <div style={getStyle(CARDS[0])} className="w-48 rounded-3xl p-5 bg-[#2ed283] shadow-2xl">
//                 <p className="text-xs text-white/70 mb-2 flex items-center gap-1">
//                   <span>⇄</span> Exchange
//                 </p>
//                 <p className="text-xl font-black text-white leading-snug">
//                   − €500.00<br />+ zł2,179.92
//                 </p>
//                 <span className="inline-block mt-4 text-xs bg-white/25 text-white px-3 py-1 rounded-full">
//                   Approved
//                 </span>
//               </div>

//               <div style={getStyle(CARDS[1])} className="w-52 rounded-3xl p-4 bg-white border-[3px] border-[#5aacff] shadow-2xl">
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="text-xl">🇪🇺</span>
//                   <span className="font-bold text-gray-700">EUR</span>
//                   <span className="text-gray-400 text-xs">∨</span>
//                 </div>
//                 <p className="text-3xl font-black text-gray-900">€ 100</p>
//                 <p className="text-xs text-gray-400 mt-1">Balance: €4,921.22</p>
//                 <button className="mt-3 w-full py-2 border border-gray-200 rounded-xl text-sm text-gray-600 bg-white hover:bg-gray-50 transition-colors">
//                   Send
//                 </button>
//               </div>

//               <div style={getStyle(CARDS[2])} className="w-48 rounded-3xl p-4 bg-[#ffe6f4] shadow-2xl text-center">
//                 <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 mx-auto mb-2 flex items-center justify-center text-white font-black text-sm">
//                   JT
//                 </div>
//                 <p className="font-bold text-[#c850a0]">Jane Thomas</p>
//                 <p className="text-xs text-gray-400 mt-2">🔒 Secure payment</p>
//                 <button className="mt-3 w-full py-2 border border-pink-200 rounded-xl text-sm text-[#c850a0] bg-white hover:bg-pink-50 transition-colors">
//                   Send
//                 </button>
//               </div>

//               <div
//                 style={getStyle(CARDS[3])}
//                 className="w-44 h-32 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500 flex flex-col items-center justify-center"
//               >
//                 <span className="text-4xl">☕</span>
//                 <p className="text-white text-xs font-semibold mt-1">Buy me a coffee!</p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>

//       <div className="h-screen flex items-center justify-center bg-gray-50">
//         <div className="flex items-center gap-5">
//           <div className="w-16 h-16 bg-[#3dd68c] rounded-2xl flex items-center justify-center shadow-lg">
//             <span className="text-white text-4xl font-light leading-none">+</span>
//           </div>
//           <span className="text-7xl font-black text-[#3dd68c]">Add</span>
//         </div>
//       </div>

//     </div>
//   );
// }



import { useEffect, useRef, useState } from "react";

// Cards fly in from 4 corners → land at their final CSS-defined stacked positions
// Final positions are set via inline top/left/right so they naturally overlap like the image
const CARD_DEFS = [
  { id: "cg",  fx: -340, fy: -250, fr: -22, fs: 0.65 }, // top-left
  { id: "cb",  fx:  340, fy: -250, fr:  22, fs: 0.65 }, // top-right
  { id: "cp",  fx: -310, fy:  270, fr: -16, fs: 0.65 }, // bottom-left
  { id: "cph", fx:  310, fy:  270, fr:  16, fs: 0.65 }, // bottom-right
];

function lerp(a, b, t) { return a + (b - a) * t; }
function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

export default function FinanceSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const p = Math.max(0, Math.min(1,
        (-rect.top + window.innerHeight * 0.6) / (rect.height - window.innerHeight)
      ));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ONE single t for ALL cards — they all move together
  const t = easeInOut(Math.max(0, Math.min(1, (progress - 0.05) / 0.38)));

  // Each card: translate from off-screen → 0,0 (their natural CSS stack position)
  const getStyle = (def, extraStyle = {}) => ({
    position: "absolute",
    transform: `translate(${lerp(def.fx, 0, t)}px, ${lerp(def.fy, 0, t)}px) rotate(${lerp(def.fr, 0, t)}deg) scale(${lerp(def.fs, 1, t)})`,
    opacity: Math.min(1, t * 2.2),
    transition: "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease",
    ...extraStyle,
  });

  // Text: fully visible → completely hidden as cards arrive
  const textOpacity = Math.max(0, 1 - t * 1.4);

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* HERO — before scroll */}
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="mt-6 text-gray-300 text-sm tracking-widest">↓ SCROLL</p>
      </div>

      {/* STICKY SECTION */}
      <div ref={sectionRef} style={{ height: "400vh" }} className="relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* CENTER TEXT — fades out completely as cards arrive */}
          <h2
            className="absolute text-7xl md:text-8xl font-black text-[#ff3c00] text-center leading-tight pointer-events-none select-none"
            style={{
              opacity: textOpacity,
              transition: "opacity 0.4s ease",
              zIndex: 1,
            }}
          >
            Unify your<br />finances
          </h2>

          {/* CARDS CLUSTER — stacked on top of text, z-index higher */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 10 }}
          >
            {/*
              cards-wrap is the origin point.
              Each card has absolute top/left/right to form the natural overlapping cluster.
              The translate animation brings them from off-screen to (0,0) relative offset,
              so they land exactly on their CSS-defined positions.
            */}
            <div className="relative" style={{ width: 260, height: 270 }}>

              {/* Green Exchange Card — top-left of cluster */}
              <div
                style={getStyle(CARD_DEFS[0], { top: 0, left: 0, zIndex: 13 })}
                className="w-44 rounded-3xl p-4 bg-[#2ed283] shadow-2xl"
              >
                <p className="text-xs text-white/70 mb-2 flex items-center gap-1">
                  <span>⇄</span> Exchange
                </p>
                <p className="text-lg font-black text-white leading-snug">
                  − €500.00<br />+ zł2,179.92
                </p>
                <span className="inline-block mt-3 text-xs bg-white/25 text-white px-3 py-1 rounded-full">
                  Approved
                </span>
              </div>

              {/* Blue EUR Card — top-right, slightly behind green */}
              <div
                style={getStyle(CARD_DEFS[1], { top: 10, right: 0, zIndex: 11 })}
                className="w-48 rounded-3xl p-4 bg-white border-[3px] border-[#5aacff] shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🇪🇺</span>
                  <span className="font-bold text-gray-700 text-sm">EUR</span>
                  <span className="text-gray-400 text-xs">∨</span>
                </div>
                <p className="text-2xl font-black text-gray-900">€ 100</p>
                <p className="text-xs text-gray-400 mt-1">Balance: €4,921.22</p>
                <button className="mt-3 w-full py-2 border border-gray-200 rounded-xl text-sm text-gray-600 bg-white">
                  Send
                </button>
              </div>

              {/* Pink Jane Thomas — center-front, most prominent */}
              <div
                style={getStyle(CARD_DEFS[2], { bottom: 0, left: 30, zIndex: 15 })}
                className="w-44 rounded-3xl p-4 bg-[#ffe6f4] shadow-2xl text-center"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 mx-auto mb-2 flex items-center justify-center text-white font-black text-sm">
                  JT
                </div>
                <p className="font-bold text-[#c850a0] text-sm">Jane Thomas</p>
                <p className="text-xs text-gray-400 mt-1">🔒 Secure payment</p>
                <button className="mt-3 w-full py-2 border border-pink-200 rounded-xl text-sm text-[#c850a0] bg-white">
                  Send
                </button>
              </div>

              {/* Photo / Coffee card — top-right behind blue */}
              <div
                style={getStyle(CARD_DEFS[3], { top: -10, right: -5, zIndex: 9 })}
                className="w-36 h-28 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500 flex flex-col items-center justify-center"
              >
                <span className="text-3xl">☕</span>
                <p className="text-white text-xs font-semibold mt-1 text-center">Coffee time!</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* AFTER SECTION */}
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-[#3dd68c] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl font-light leading-none">+</span>
          </div>
          <span className="text-7xl font-black text-[#3dd68c]">Add</span>
        </div>
      </div>

    </div>
  );
}
