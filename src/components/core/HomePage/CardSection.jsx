
import { useState } from "react";

const CARDS = [
  { id: 1, title: "Mountain Escape", desc: "Serene peaks await", bg: "bg-blue-700", emoji: "🏔️" },
  { id: 2, title: "Ocean Breeze", desc: "Feel the waves", bg: "bg-teal-700", emoji: "🌊" },
  { id: 3, title: "City Lights", desc: "Urban adventures", bg: "bg-violet-700", emoji: "🌆" },
  { id: 4, title: "Desert Sun", desc: "Golden horizons", bg: "bg-amber-700", emoji: "🏜️" },
  { id: 5, title: "Forest Walk", desc: "Nature's embrace", bg: "bg-green-700", emoji: "🌲" },
  { id: 6, title: "Snowy Peaks", desc: "Winter wonderland", bg: "bg-sky-700", emoji: "❄️" },
  { id: 7, title: "Sunset Cove", desc: "Golden hour magic", bg: "bg-orange-700", emoji: "🌅" },
  { id: 8, title: "Cherry Blossom", desc: "Spring in full bloom", bg: "bg-pink-700", emoji: "🌸" },
  { id: 9, title: "Starry Night", desc: "Infinite cosmos", bg: "bg-indigo-900", emoji: "🌙" },
  { id: 10, title: "Tropical Isle", desc: "Paradise found", bg: "bg-emerald-700", emoji: "🌴" },
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Card Carousel</h1>

      {/* Carousel Row */}
      <div className="flex items-center justify-center gap-4 w-full">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white border border-gray-300 text-gray-700 text-xl flex items-center justify-center shadow hover:bg-gray-50 active:scale-95 transition-all"
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
                className={`absolute flex flex-col items-center justify-center rounded-2xl text-white transition-all duration-400 ease-out
                  ${card.bg}
                  ${isActive ? "w-48 h-72 cursor-default ring-4 ring-white/40" : "w-40 h-56 cursor-pointer"}
                `}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <span className={`${isActive ? "text-5xl" : "text-3xl"} mb-3 transition-all duration-400`}>
                  {card.emoji}
                </span>
                <p className={`font-medium text-center ${isActive ? "text-lg" : "text-sm"} transition-all duration-400`}>
                  {card.title}
                </p>
                {isActive && (
                  <p className="text-xs text-white/70 text-center mt-1 px-2">{card.desc}</p>
                )}
                <span className="mt-3 text-xs bg-white/20 rounded-full px-3 py-0.5">
                  Card {card.id}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white border border-gray-300 text-gray-700 text-xl flex items-center justify-center shadow hover:bg-gray-50 active:scale-95 transition-all"
        >
          ›
        </button>
      </div>

      {/* Dot Indicators */}
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
