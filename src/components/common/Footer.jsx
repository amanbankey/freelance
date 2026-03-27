import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Newsletter from "./NewLetter";

const Footer = () => {
  return (
    <div className="relative bg-[#f5f7fa] mx-auto">
        <div className="absolute -top-14 left-40">    <Newsletter  /></div>
   
        <footer className="max-w-7xl flex items-center justify-center bg-[#f5f7fa]  px-6 md:px-12 lg:px-20 py-12 text-sm text-gray-600 mx-auto">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1  ">

        {/* Column 1 */}
        <div>
          <h3 className="text-blue-900 font-semibold mb-4 uppercase">
            BUSINESSESS
          </h3>
          <ul className="space-y-2">
            <li>JSW Steel</li>
            <li>JSW Energy</li>
            <li>JSW Infrastructure</li>
            <li>JSW Cement</li>
            <li>JSW Ventures</li>
            <li>JSW Paints</li>
            <li>JSW Realty</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="mt-6 sm:mt-0">
          <ul className="space-y-2 mt-6 sm:mt-10">
            <li>JSW Defence</li>
            <li>JSW MG Motor India</li>
            <li>JSW Industrial Parks</li>
            <li>JSW One</li>
            <li>JSW Techno Projects Management Limited</li>
            <li>JSW Projects limited</li>
            <li>Creixent Special Steels Limited</li>
            <li>Sapphire Airlines Pvt Ltd</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-3 text-blue-900 font-semibold">
            <li>INVESTORS</li>
            <li>ABOUT US</li>
            <li>SPORTS</li>
            <li>FOUNDATION</li>
            <li>SITEMAP</li>
            <li>SUSTAINABILITY</li>
            <li>CAREERS</li>
            <li>NEWSROOM</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="md:col-span-2 lg:col-span-2  w-80">
          <p className="mb-2 text-gray-500">Privacy Policy</p>
          <p className="mb-6 text-gray-500">
            Copyright © BB Engineers 2025 All rights reserved
          </p>

          <h4 className="mb-3 text-gray-700">Social Media</h4>

          <div className="flex gap-4 text-gray-500 text-lg">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaXTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

      </div>

    </footer> </div>
  
  );
};

export default Footer;