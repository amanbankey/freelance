import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Newsletter = () => {
  return (
    <div className="w-full">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <div className="flex items-center gap-4 text-center md:text-left">

          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center">
            <TfiEmail className="text-orange-400 text-4xl" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Stay updated with latest news & updates
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">

          <input
            type="email"
            placeholder="Email Address..."
            className="w-full sm:w-72 md:w-80 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none rounded-l-md sm:rounded-none sm:rounded-l-md"
          />

          <button className="bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition rounded-md sm:rounded-none sm:rounded-r-md">
            SUBSCRIBE
          </button>

        </div>

      </div>

    </div>
  );
};

export default Newsletter;