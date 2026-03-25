
import { useState, useEffect } from "react";


const CARDS = [
  { id: 1, title: "Mountain Escape", desc: "Serene peaks await", bg: "bg-blue-700", emoji: "https://bbengineers.co.in/image/21.png" },
  { id: 2, title: "Ocean Breeze", desc: "Feel the waves", bg: "bg-teal-700", emoji: "https://bbengineers.co.in/image/20.jpg" },
  { id: 3, title: "City Lights", desc: "Urban adventures", bg: "bg-violet-700", emoji: "https://bbengineers.co.in/image/19.png" },
  { id: 4, title: "Desert Sun", desc: "Golden horizons", bg: "bg-amber-700", emoji: "https://bbengineers.co.in/image/12.jpg" },
  { id: 5, title: "Forest Walk", desc: "Nature's embrace", bg: "bg-green-700", emoji: "https://bbengineers.co.in/image/15.png" },
  { id: 6, title: "Snowy Peaks", desc: "Winter wonderland", bg: "bg-sky-700", emoji: "https://bbengineers.co.in/image/18.png" },
  { id: 7, title: "Sunset Cove", desc: "Golden hour magic", bg: "bg-orange-700", emoji: "https://bbengineers.co.in/image/14.jpg" },
  { id: 8, title: "Cherry Blossom", desc: "Spring in full bloom", bg: "bg-pink-700", emoji: "https://bbengineers.co.in/image/11.jpg" },
  { id: 9, title: "Starry Night", desc: "Infinite cosmos", bg: "bg-indigo-900", emoji: "https://bbengineers.co.in/image/13.jpg" },
  { id: 10, title: "Tropical Isle", desc: "Paradise found", bg: "bg-emerald-700", emoji: "https://bbengineers.co.in/image/16.png" },
];

export default function CardSection() {
  const [active, setActive] = useState(4);

  const prev = () => setActive((i) => (i - 1 + CARDS.length) % CARDS.length);
  const next = () => setActive((i) => (i + 1) % CARDS.length);

  const getPos = (i) => {
    let diff = i - active;
    if (diff > CARDS.length / 2) diff -= CARDS.length;
    if (diff < -CARDS.length / 2) diff += CARDS.length;
    return diff;
  };

  const visibleRange = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <span> TRUSTED PARTNERS</span>
      <h1 className="text-2xl font-semibold text-gray-800 mb-8"> Our Big Partners </h1>

      {/* Carousel Row */}
      <div className="flex items-center justify-center gap-4 w-full">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white  text-gray-700 text-xl flex items-center justify-center shadow hover:bg-gray-50 active:scale-95 transition-all"
        >
          ‹
        </button>

        {/* Cards Container */}
        <div className="relative flex items-center justify-center w-full max-w-2xl h-80 overflow-hidden">
          {CARDS.map((card, i) => {
            const pos = getPos(i);
            const absPos = Math.abs(pos);

            if (absPos > visibleRange) return null;

            const isActive = pos === 0;

            // Inline styles for dynamic transforms
            const scale = isActive ? 1 : Math.max(0.62, 1 - absPos * 0.14);
            const translateX = pos * (isActive ? 0 : 148);
            const zIndex = 10 - absPos;
            const opacity = absPos > 2 ? 0 : Math.max(0.45, 1 - absPos * 0.25);

            return (
              <div
                key={card.id}
                onClick={() => !isActive && setActive(i)}
                className={`absolute flex flex-col items-center justify-center  text-white transition-all duration-400 ease-out
                 
                  ${isActive ? "w-48 h-72 cursor-default " : "w-40 h-56 cursor-pointer"}
                `}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                {/* <span className={`${isActive ? "text-5xl" : "text-3xl"} mb-3 transition-all duration-400`}> */}
                
                   <img src={card.emoji} />
                {/* </span> */}
                <p className={`font-medium text-blue-400 text-center ${isActive ? "text-lg" : "text-sm"} transition-all duration-400`}>
                  {/* {card.title} */}
                </p>
                {isActive && (
                  <p className="text-xs text-black text-center mt-1 px-2">
                    {/* {card.desc} */}
                    </p>
                )}
          
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white border border-gray-300 text-gray-700 text-xl flex items-center justify-center shadow hover:bg-gray-50 active:scale-95 transition-all"
        >
          ›
        </button>
      </div>

      <div className="flex items-center gap-1.5 mt-6">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-5 bg-gray-800" : "w-1.5 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
