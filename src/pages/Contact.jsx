import React, { useState,useEffect } from "react";
import img from '../../src/assets/Images/about.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useLocation } from "react-router-dom";


const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    business: "",
    message: "",
    notRobot: false,
  });
const [started, setStarted] = useState(false)
 
  useEffect(() => {
   
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStarted(true))
    })
    return () => cancelAnimationFrame(raf)
  }, [])


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>

      {/* <section className="relative w-full h-[70vh] mx-auto flex items-center ">
        <img
          src={img}
          alt="Safety"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="flex z-50 text-white flex-col w-full ">
          <div className="md:w-9/12 relative  py-24 mx-auto  ">
            <div className="flex items-center mb-4">
              <span className="text-sm tracking-widest font-semibold  uppercase"></span>
            </div>

            <div className="max-w-7xl mx-auto px-0 py-1  flex flex-col md:flex-row items-center gap-8 ">
            
              <div className="lg:w-5/12 text-left">
                <h2 className={`text-base  font-bold leading-tight  `}>
                 Contact us
                </h2>
              </div>

            
              <div className="lg:w-1/2">
                <p className="text-sm tracking-widest text-gray-600 font-medium "></p>
              </div>
            </div>
            <div className="text-left text-5xl  text-white  flex  z-10  w-8/12 ">
              <p>Innovative. Sustainable. Future Ready.</p>
            </div>
          </div>

    
        </div>
      </section> */}

          <section className="relative w-full h-[70vh] mx-auto flex items-center overflow-hidden">
        
              <div
                className="absolute w-full h-full will-change-transform bg-white"
                style={{
                  transform:    started ? 'scale(1)'    : 'scale(0.88)',
                  borderRadius: started ? '0px'         : '20px',
                  overflow:     'hidden',
                  transition: started
                    ? 'transform 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : 'none',
                }}
              >
                <img
                  src={img}
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
        
        
              <div
                className="absolute bg-black/45"
                style={{
                  
                  borderRadius: started ? '0px' : '20px',
                  overflow:     'hidden',
                  transition: started
                    ? 'border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : 'none',
                }}
              />
        
              <div
                className="flex z-50 text-white flex-col w-full"
                style={{
                  opacity:   started ? 1 : 0,
                  transform: started ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 900ms ease-out 400ms, transform 900ms ease-out 400ms',
                }}
              >
                <div className="md:w-9/12 relative py-24 mx-auto w-full px-6 md:px-0">
        
                  {/* label */}
                  <div className="flex items-center mb-4">
                    <span className="text-sm tracking-widest font-semibold uppercase" />
                  </div>
        
                  {/* About us row */}
                  <div className="max-w-7xl mx-auto px-0 py-1 flex flex-col md:flex-row items-center gap-8">
                    <div className="lg:w-5/12 text-left">
                      <h2 className="text-base font-bold leading-tight">
                        About us
                      </h2>
                    </div>
                    <div className="lg:w-1/2">
                      <p className="text-sm tracking-widest text-gray-300 font-medium" />
                    </div>
                  </div>
        
                  {/* Main headline */}
                  <div className="text-left text-3xl sm:text-4xl md:text-5xl text-white flex z-10 w-full md:w-8/12 mt-4">
                    <p className="leading-snug">
                      Innovative. Sustainable. Future Ready.
                    </p>
                  </div>
        
                </div>
              </div>
        
              </section>


      <section id="contact-form">
        <div className="bg-white min-h-screen px-4 py-12 flex flex-col items-center">
      
          <p className="text-gray-700 text-sm sm:text-base text-center max-w-xl mb-8 leading-relaxed">
            "Your questions matter to us. Fill out the form below, and our team
            will respond promptly to start the conversation and assist you!"
          </p>

    
          <div className="w-full max-w-2xl bg-gray-100 rounded-xl p-4 sm:p-6" >
        
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name*"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white rounded-lg px-4 py-4 text-sm text-gray-500 outline-none w-full border-0"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name*"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white rounded-lg px-4 py-4 text-sm text-gray-500 outline-none w-full border-0"
              />
            </div>

      
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="email"
                name="email"
                placeholder="Enter email address*"
                value={formData.email}
                onChange={handleChange}
                className="bg-white rounded-lg px-4 py-4 text-sm text-gray-500 outline-none w-full border-0"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile no*"
                value={formData.mobile}
                onChange={handleChange}
                className="bg-white rounded-lg px-4 py-4 text-sm text-gray-500 outline-none w-full border-0"
              />
            </div>

        
            <div className="mb-3">
              <select
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="bg-white rounded-lg px-4 py-4 text-sm text-gray-500 outline-none w-full border-0 appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Business*
                </option>
                <option value="steel">Steel</option>
                <option value="energy">Energy</option>
                <option value="cement">Cement</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="sports">Sports</option>
              </select>
            </div>

     
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-white rounded-lg px-4 py-4 text-sm text-gray-500 outline-none w-full border-0 resize-none"
              />
            </div>

         
            <div className="mb-6">
              <div className="bg-gray-200 border border-gray-300 rounded flex items-center justify-between px-4 py-3 w-64">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="notRobot"
                    checked={formData.notRobot}
                    onChange={handleChange}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">I'm not a robot</span>
                </div>
                <div className="text-right">
                  <p className="text-blue-500 text-lg font-bold leading-none">
                    reCAPTCHA
                  </p>
                  <p className="text-gray-400 text-xs">Privacy - Terms</p>
                </div>
              </div>
            </div>

      
            <button
              onClick={handleSubmit}
              className="bg-blue-400 hover:bg-blue-500 text-white text-xs font-bold tracking-widest uppercase px-10 py-3 rounded transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </section>

      <section  className="mb-20">
         <div className="bg-white px-4 py-8 flex justify-center">
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden px-8 py-10 border-2 border-black"
        style={{ background: "linear-gradient(135deg, #0a1f44 60%, #0e3a5c 100%)" }}
      >
      
        <img
          src="https://picsum.photos/seed/wave/900/200"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
 
       
        <div className="relative z-10 flex w-full max-w-7xl justify-evenly ">
      
        <div className="flex  justify-evenly gap-9 "> 
         <div className="flex flex-col w-80  text-center">
           <span className="text-white text-sm   font-normal  ">
             PL-1 PAG/G-63/5 MIDC Kurli, Chakan Industrial Area Ph-3,    
          </span>
          <span className="text-white text-sm   font-normal   mb-4">
         Taluka Khed, Pune - 410501,
          </span>
         </div>
         
         <div className="text-white text-xs font-bold tracking-widest uppercase mb-2 flex gap-x-2 ">
            <div className="text-base gap-x-3"><IoLocationOutline className="text-xl"/> </div> <div> BB Engineer Center</div>  
          </div>

         <div  className="flex flex-col w-80  text-center"> 
          <span className="text-white text-sm   font-normal">
          PL-2 Gat No. 51, Near Hotel Moi Grand, Nighoje Moi Road,
          </span>
          <span className="text-white text-sm   font-normal mb-4">
          At .Moi, PO Kurli Tal. Khed Dist Pune-410501,
          </span>
         </div>
         </div>
        
 
          {/* <div>
            <div className="flex items-center gap-x-2"> 
              <div >
                 <span>
                   <BsTelephone className="text-white"/>
                </span>
              </div> 

              <div className="text-white "> <span className="space-x-2">+91-8956575693 </span> <span>+91-9096682903 </span></div>

            </div>
           
          </div> */}
         
          {/* <div
           
            className="border-b border-white  w-full text-xs font-bold tracking-widest uppercase hover:underline"
          >

          </div> */}
        </div>
      </div>
    </div> 
    </section>


    </div>
  );
};

export default Contact;
