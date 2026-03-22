import React from "react";
import world from "../../../assets/World.jpg";

const MapSection = () => {
  return (
    <div>
      <section
  className="h-screen bg-cover bg-center flex items-center justify-center relative"
  style={{ backgroundImage: `url(${world})` }}
> <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore The World
          </h1>

          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Discover opportunities, connect globally, and expand your reach
            across the world.
          </p>

          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default MapSection;
