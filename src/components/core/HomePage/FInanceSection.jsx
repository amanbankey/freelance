
import { useEffect, useRef, useState } from "react";
import fixture from '../../../assets/Images/fixture.png'
import sheet from '../../../assets/Images/sheet.png'
import pipe from '../../../assets/Images/pipe.png'
import printer from '../../../assets/Images/printer.png'
import unified from '../../../assets/videos/unified.mp4'
import press from '../../../assets/Images/press.png'
import single from '../../../assets/Images/single.png'
import construct from '../../../assets/Images/construct.jpg'



const CARD_DEFS = [
  { id: "cg",  fx: -340, fy: -250, fr: -22, fs: 0.65 }, // top-left
  { id: "cb",  fx:  340, fy: -250, fr:  22, fs: 0.65 }, // top-right


  { id: "cp",  fx: -310, fy:  270, fr: -16, fs: 0.65 }, // bottom-left
  { id: "cph", fx:  310, fy:  270, fr:  16, fs: 0.65 }, // bottom-right


  { id: "afd", fx: -700, fy: 0, fr: 0, fs: 0.65 },
 
  { id: "fdf", fx:  700, fy: 0, fr: 0, fs: 0.65 },

];

function lerp(a, b, t) { return a + (b - a) * t; }
function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

export default function FinanceSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

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

  const t = easeInOut(Math.max(0, Math.min(1, (progress - 0.05) / 0.38))); //0.38

  const getStyle = (def, extraStyle = {}) => ({
    position: "absolute",
    transform: `translate(${lerp(def.fx, 0, t)}px, ${lerp(def.fy, 0, t)}px) rotate(${lerp(def.fr, 0, t)}deg) scale(${lerp(def.fs, 1, t)})`,
    opacity: Math.min(1, t * 2.2),
    transition: "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease",
    ...extraStyle,
  });

  const textOpacity = Math.max(0, 1 - t * 1.4);

  return (
    <div className="bg-white min-h-screen font-sans">

         {/* <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full object-cover"
            src={unified}
            autoPlay
            loop
            muted
            playsInline
          />
   {/* 400vh */}
      <div ref={sectionRef} style={{ height: "400vh" }} className="relative">

        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          <h2
            className="absolute text-7xl md:text-8xl font-black text-blue-600 text-center leading-tight pointer-events-none select-none"
            style={{
              opacity: textOpacity,
              transition: "opacity 0.4s ease",
              zIndex: 1,
            }}
          >
            Product<br /> And Portfolio
          </h2>

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 10 }}
          >
          
            <div className="relative" style={{ width: 260, height: 270 }}>

              <div
                style={getStyle(CARD_DEFS[0], { top: 0, left: 0, zIndex: 13 })}
                className="w-48 h-52 rounded-3xl p-4 shadow-2xl"
              >
               <img src={printer} className="h-44 "/>
              </div>

              <div
                style={getStyle(CARD_DEFS[1], { top: 10, right: 0, zIndex: 11 })}
                className="w-48 h-44 rounded-3xl   border-[3px] border-[#5aacff] shadow-2xl"
              >
                <img src={construct} className="h-44 rounded-3xl" />
              
              </div>

              <div
                style={getStyle(CARD_DEFS[2], { top: 10, left: 30, zIndex: 15 })}
                className="w-48 h-52 rounded-3xl p-4  shadow-2xl text-center"
              >
                 <img src={pipe} className="h-44 rounded-3xl" />
               
              </div>

              <div
                style={getStyle(CARD_DEFS[3], { top: -5, right: -5, zIndex: 9 })}
                className="w-48 h-52 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br  flex flex-col items-center justify-center"
              >
                 <img src={sheet} className="h-44 rounded-3xl"/>
              </div>

                
              <div
                style={getStyle(CARD_DEFS[4], { top: -10, left: 10, zIndex: 9 })}
                className="w-52 h-52 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br  flex flex-col items-center justify-center"
              >
                 <img src={press} className="h-44 w-44 rounded-3xl"/>
              </div>

              <div
                style={getStyle(CARD_DEFS[5], { top: -10, right: 5, zIndex: 9 })}
                className="w-52 h-52 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br  flex flex-col items-center justify-center"
              >
                 <img src={single} className="h-full w-full rounded-3xl"/>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
