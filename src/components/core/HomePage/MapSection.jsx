import React from "react";
import world from "../../../assets/World.jpg";
import map from "../../../assets/Images/map.jpg"; 
import india from "../../../assets/Images/india.jpg";

import plant1 from "../../../assets/Images/plant1.jpg";
import plant2 from "../../../assets/Images/plant2.jpg";

const address =
  "PL-1 PAG/G-63/5 MIDC Kurli, Chakan Industrial Area Ph-3, Taluka Khed, Pune - 410501, MH, India";

  const openLocation = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  };

  const add = "PL-2 Gat No. 51, Near Hotel Moi Grand, Nighoje Moi Road, At .Moi, PO Kurli Tal. Khed Dist Pune-410501, MH, INDIA";
 
  const openLoc = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(add)}`;
    window.open(url, "_blank");
  };

const MapSection = () => {
  return (
    <div className="">
      <section
  className="h-screen bg-cover bg-center flex items-center justify-center relative "
  style={{ backgroundImage: `url(${map})` }}
> <div className="absolute inset-0 bg-black/60"></div>

        <div className="flex justify-center items-center z-10 text-center  text-white px-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {/* Explore The World */}
          </h1>
            
            <div className="flex justify-center max-w-5xl "> 
               
               <div  className="flex items-center flex-col">
                    <div onClick={openLocation} className="cursor-pointer "> 
                      <img src={plant1}  />
                    </div>

                    <div  className="hover:cursor-pointer w-80 "> 
                       <span> PL-1 PAG/G-63/5 MIDC Kurli, Chakan Industrial Area Ph-3, Taluka Khed, Pune - 410501, MH, India </span>
                    </div>
               </div>

               <div className="flex items-center flex-col"> 

                    <div onClick={openLoc} className="cursor-pointer "> 
                       <img src={india}  />
                    </div>

                    <div className="w-80 "> 
                       <span className="hover:cursor-pointer"> 
                            PL-2 Gat No. 51, Near Hotel Moi Grand, Nighoje Moi Road, At .Moi, PO Kurli Tal. Khed Dist Pune-410501, MH, INDIA
                        </span>  
                    </div> 

               </div>

            </div>

            <div onClick={openLocation} className="cursor-pointer "> 
              <img src={india}  />
            </div>
        

          {/* <p className="text-lg md:text-xl mb-6 text-gray-200">
            Discover opportunities, connect globally, and expand your reach
            across the world.
          </p> */}

          {/* <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition duration-300">
            Get Started
          </button> */}

          {/* <button
            
            className="absolute top-[40%] left-[60%] text-white w-4 h-4 rounded-full"
          >
           Location 
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default MapSection;
