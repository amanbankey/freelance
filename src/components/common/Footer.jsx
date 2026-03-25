

import React from 'react'

import { FaWhatsapp, FaInstagram, FaTwitter, FaYoutube , } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    // <div>
    <footer className="bg-[#343a40] text-white border-t border-blue-200 pt-10 pb-4 px-2 md:px-16 max-w-11/12 mx-auto">
    <div className="max-w-7xl mx-auto flex flex-col gap-4 ">
      
      {/* Logo Section */}
      <div className='flex flex-row justify-around  m-4'>
         <div className="md:col-span-1 flex "> 
            
        <h2 className="lg:text-xl font-bold mb-2 text-xs sm:text-lg">
          <img src='https://bbengineers.co.in/image/logo.png' className='w-16'  /> <span className="text-gray-500"></span>
        </h2>
      </div>
  
      {/* Help & Company Section */}
      <div className="flex flex-col sm:flex-row md:col-span-2 md:gap-16 sm:gap-2 gap-1">
        <div className="w-fit text-left">
          <h3 className="font-semibold mb-2 text-[0.55rem] sm:text-lg">Help</h3>
          <ul className="text-[0.5rem] sm:text-sm space-y-1">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="w-fit text-left ">
          <h3 className="font-semibold mb-2 text-[0.55rem] sm:text-lg">Company</h3>
          <ul className="space-y-2 text-[0.5rem] sm:text-sm">
            <li>About us</li>
            <li>Our Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
  
      {/* Address & Contact Section */}
      <div className="md:col-span-2 flex flex-col gap-4">
        <div className="w-fit">
          <h2 className="text-left sm:text-lg text-sm">Our Address</h2>
          <div className="flex flex-row gap-2 w-fit">
            <div className="flex items-center justify-center sm:h-10 sm:w-10 h-5 w-5 rounded-full text-[#002209] bg-gray-500">
              <MdLocationOn className='sm:text-xl text-sm'/>
            </div>
            <div className="flex flex-col w-fit h-fit text-[0.6rem] sm:text-sm">
              <span>Plot No. PAGG635, MIDC Kurli,

Chakan Industrial Estate,.</span> 
              <span>Taluka Khed, District Pune 401 501, Maharashtra, India</span>
            </div>
          </div>
        </div>
        <div className="w-fit">
          <h2 className="text-left sm:text-lg text-sm">Quick Support</h2>
          <div className="flex flex-row gap-2 w-fit">
            <div className="flex items-center justify-center sm:h-10 sm:w-10 h-5 w-5 rounded-full text-[#002209] bg-gray-500">
              <IoCall className='sm:text-xl text-sm' /></div>
            <div className="flex flex-col text-[0.6rem] sm:text-sm">
              <span>+91-8956575693</span>
              {/* <span>(301) 580-7410</span> */}
            </div>
          </div>
        </div>
      </div>

      </div>
     
    </div>
  
    <hr className="my-6 border-t border-blue-400" />
  
    {/* Footer Bottom */}
    <div className="max-w-7xl mx-auto font-semibold flex flex-row justify-between items-center text-sm px-1 gap-2 sm:gap-0">
      <p className="text-[0.6rem] sm:text-xs md:text-sm">© 2026 BBE Engineers. All Rights Reserved.</p>
      <div className="flex sm:gap-3 gap-0.5 items-center text-[0.5rem] sm:text-xs">
        <h2 className='text-[0.6rem] sm:text-xs md:text-sm'>Follow Us :</h2>
        <ul className="flex gap-2 text-[0.6rem] sm:text-xs md:text-sm text-orange-500">
          {/* Social media icons can go here */}
          <li className=''>
            <FaWhatsapp  className='text-gray-300'/></li>
          <li><FaInstagram className='text-gray-300' /></li>
           <li> <FaYoutube className='text-gray-300' /></li>  
           <li><FaTwitter className='text-gray-300' /> </li>
        </ul>
      </div>
    </div>
  </footer>
  
    // </div>
  )
}

export default Footer

