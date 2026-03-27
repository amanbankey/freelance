import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Newsletter = () => {

  return (
    <section className="w-full bg-[#f5f7fa] px-4 sm:px-6 md:px-10 lg:px-20 py-6  ">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <div className="flex items-center gap-4 text-center md:text-left">
          
          {/* Icon */}
          <div className="w-12 h-12  flex items-center justify-center">
            <span className=" text-2xl">
            <TfiEmail  className="text-orange-400 text-5xl"/>
            </span>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              At vero eos et accusamus et iusto oddummy..
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">

          <input
            type="email"
            placeholder="Email Address.."
            className="w-full sm:w-72 md:w-80 px-4 py-3 bg-gray-100 outline-none text-gray-700"
          />

          <button className="bg-blue-700 text-white px-6 py-3 text-sm font-medium hover:bg-blue-800 transition">
            SUBSCRIBE
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;