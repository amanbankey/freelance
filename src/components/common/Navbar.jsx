// import React, {useEffect, useState , useRef} from "react";
// import { NavLink } from "react-router-dom";

// const NAV_ITEMS = [
//     { label: "Home", to: "/" },
//     { label: "About", to: "/about" },
//     {
//       label: "Services",
//       to: "/services",
//       mega: {
//         columns: [
//           {
//             title: "Structural Engineering",
//             icon: "🏗️",
//             links: ["Structural Design", "Load Analysis", "Foundation Design", "Seismic Analysis"],
//           },
//           {
//             title: "Civil Engineering",
//             icon: "🛣️",
//             links: ["Road Design", "Drainage Systems", "Site Development", "Infrastructure Planning"],
//           },
//           {
//             title: "Construction Management",
//             icon: "🏢",
//             links: ["Project Planning", "Quality Control", "Cost Estimation", "Site Supervision"],
//           },
//           {
//             title: "Consulting",
//             icon: "📋",
//             links: ["Feasibility Study", "Technical Audits", "BOQ Preparation", "Vastu Consultation"],
//           },
//         ],
//         sidebar: [
//           "Request a Quote",
//           "Download Brochure",
//           "Our Projects",
//           "Certifications",
//           "Client Testimonials",
//           "Career Opportunities",
//         ],
//       },
//     },
//     { label: "Contact Us", to: "/contact" },
//     { label: "Products", to: "/products",  products: [
//     {
//       id: 1,
//       carName: "BMW",
//       modelName: "X5",
//       year: 2024,
//       price: "₹95 Lakh",
//       image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
//       fuelType: "Petrol",
//       transmission: "Automatic"
//     },
//     {
//       id: 2,
//       carName: "Audi",
//       modelName: "A6",
//       year: 2023,
//       price: "₹70 Lakh",
//       image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
//       fuelType: "Diesel",
//       transmission: "Automatic"
//     },
//     {
//       id: 3,
//       carName: "Mercedes",
//       modelName: "C-Class",
//       year: 2024,
//       price: "₹65 Lakh",
//       image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
//       fuelType: "Petrol",
//       transmission: "Automatic"
//     },
//     {
//       id: 4,
//       carName: "Toyota",
//       modelName: "Fortuner",
//       year: 2024,
//       price: "₹52 Lakh",
//       image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
//       fuelType: "Diesel",
//       transmission: "Manual"
//     }
//   ] },
//   ];

//   // ─── DUMMY ICON BLOCKS ────────────────────────────────────────────────────────
//   const IconBlock = ({ icon, title, links }) => (
//     <div className="group cursor-pointer">
//       <div className="w-full h-28 bg-gray-50 rounded-xl flex flex-col items-center justify-center border border-gray-100 mb-2 transition-all duration-200 group-hover:bg-blue-50 group-hover:border-blue-200">
//         <span className="text-4xl mb-1">{icon}</span>
//         <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">{title.split(" ")[0]}</span>
//       </div>
//       <p className="text-[13px] font-semibold text-gray-800 text-center leading-snug mb-1">{title}</p>
//       <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
//         {links.slice(0, 2).map((link, i) => (
//           <a key={i} href="#" className="text-[11px] text-gray-500 underline hover:text-blue-600 transition-colors duration-150">
//             {link}
//           </a>
//         ))}
//       </div>
//     </div>
//   );

// const Navbar = () => {
//     const [activeMenu, setActiveMenu] = useState(null);
//     const [searchOpen, setSearchOpen] = useState(false);
//     const [searchVal, setSearchVal] = useState("");
//     const navRef = useRef(null);

//     // Close on outside click
//     useEffect(() => {
//       const handler = (e) => {
//         if (navRef.current && !navRef.current.contains(e.target)) {
//           setActiveMenu(null);
//           setSearchOpen(false);
//         }
//       };
//       document.addEventListener("mousedown", handler);
//       return () => document.removeEventListener("mousedown", handler);
//     }, []);

//     const toggleMenu = (label) => {
//       setActiveMenu((prev) => (prev === label ? null : label));
//       setSearchOpen(false);
//     };

//   return (

// <header ref={navRef} className="sticky top-0 z-50 bg-white shadow-sm ">

// {/* ── TOP BAR ── */}
// <div className="flex items-center justify-between px-6 h-14 max-w-screen-2xl mx-auto ">

//   {/* Logo */}
//   <NavLink to="/" className="flex-shrink-0">
//     <img
//       src="https://bbengineers.co.in/image/new_logo.png"
//       alt="BB Engineers logo"
//       className="h-10 w-auto object-contain"
//     />
//   </NavLink>

//   {/* Center Nav */}
//   <nav className="flex items-center gap-1">
//     {NAV_ITEMS.map((item) => {
//       const hasMega = !!item.mega;
//       const isActive = activeMenu === item.label;

//       return (
//         <button
//           key={item.label}
//           onClick={() => hasMega ? toggleMenu(item.label) : setActiveMenu(null)}
//           className={[
//             "relative px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200",
//             "text-gray-800 hover:bg-gray-100 hover:text-blue-700",
//             isActive ? "bg-gray-100 text-blue-700" : "",
//           ].join(" ")}
//         >
//           {hasMega ? (
//             <span className="flex items-center gap-1">
//               {item.label}
//               {/* Chevron rotates smoothly */}
//               <svg
//                 className={[
//                   "w-3.5 h-3.5 transition-transform duration-300 ",
//                   isActive ? "rotate-180" : "rotate-0",
//                 ].join(" ")}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </span>
//           ) : (
//             <NavLink
//               to={item.to}
//               className="block"
//               onClick={() => setActiveMenu(null)}
//             >
//               {item.label}
//             </NavLink>
//           )}

//           {/* Active underline indicator */}
//           <span
//             className={[
//               "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5  rounded-full transition-all duration-300",
//               isActive ? "w-3/4" : "w-0",
//             ].join(" ")}
//           />
//         </button>
//       );
//     })}
//   </nav>

//   {/* Right Side */}
//   <div className="flex items-center gap-2">

//     {/* Search slide-in */}
//     <div className="flex items-center">
//       <div
//         className={[
//           "overflow-hidden transition-all duration-500 ease-in-out",
//           searchOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0",
//         ].join(" ")}
//       >
//         <input
//           autoFocus={searchOpen}
//           type="text"
//           value={searchVal}
//           onChange={(e) => setSearchVal(e.target.value)}
//           placeholder="Search..."
//           className="w-48 border-b-2 border-blue-500 outline-none text-sm px-2 py-1 bg-transparent text-gray-800 placeholder-gray-400"
//         />
//       </div>

//       <button
//         onClick={() => {
//           setSearchOpen((s) => !s);
//           setActiveMenu(null);
//           if (searchOpen) setSearchVal("");
//         }}
//         className="ml-1 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
//         aria-label="Toggle search"
//       >
//         {searchOpen ? (
//           <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         ) : (
//           <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//             <circle cx="11" cy="11" r="8" />
//             <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
//           </svg>
//         )}
//       </button>
//     </div>

//     {/* Request Quote CTA */}
//     <a
//       href="/contact"
//       className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm"
//     >
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
//       </svg>
//       Request Quote
//     </a>
//   </div>
// </div>

// {/* ── MEGA MENU DROPDOWN ── */}
// {NAV_ITEMS.filter((i) => i.mega).map((item) => (
//   <div
//     key={item.label}
//     className={[
//       "absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden z-40 mx-40",
//       "transition-all duration-500 ease-in-out",
//       activeMenu === item.label
//         ? "max-h-[500px] opacity-100 translate-y-0 group"
//         : "max-h-0 opacity-0 -translate-y-2 pointer-events-none",
//     ].join(" ")}
//   >

//     <div className="max-w-screen-2xl mx-auto flex group-hover:text-gray-900">

//       {/* Grid columns */}
//       <div className="flex-1 px-8 py-8 grid grid-cols-4 gap-6">
//         {item.mega.columns.map((col, i) => (
//           <div
//             key={i}
//             className={[
//               "transition-all duration-500",
//               activeMenu === item.label
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-3",
//             ].join(" ")}
//             style={{ transitionDelay: activeMenu === item.label ? `${i * 60}ms` : "0ms" }}
//           >
//             <IconBlock icon={col.icon} title={col.title} links={col.links} />
//           </div>
//         ))}
//       </div>

//       {/* Sidebar */}
//       <div className="w-52 border-l border-gray-100 px-6 py-8 flex-shrink-0 bg-gray-50">
//         <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Quick Links</p>
//         <ul className="space-y-3">
//           {item.mega.sidebar.map((s, i) => (
//             <li
//               key={i}
//               className={[
//                 "transition-all duration-500",
//                 activeMenu === item.label
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-2",
//               ].join(" ")}
//               style={{ transitionDelay: activeMenu === item.label ? `${(i + 4) * 50}ms` : "0ms" }}
//             >
//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all duration-150 group"
//               >
//                 <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-150" />
//                 {s}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>

//   </div>
// ))}

// {/* Backdrop blur overlay when menu is open */}
// <div
//   className={[
//     "fixed inset-0 top-14 bg-black/10 backdrop-blur-[1px] z-30 transition-opacity duration-300",
//     activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
//   ].join(" ")}
//   onClick={() => setActiveMenu(null)}
// />

// </header>

//   );
// };

// export default Navbar;

import { useState, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
// import img from '../../assets/Images/fixture.png'
import sheet from "../../assets/Images/sheet.jpg";
import pipe from "../../assets/Images/pipe.jpg";
import toolFixture from "../../assets/Images/toolFixture.jpg";
import emboss from "../../assets/Images/embossSheet.jpg";

import designDevelopment from "../../assets/Images/designDevelopment.jpg";
import machineries from "../../assets/Images/mechineries.jpg";

// ── Tesla Logo SVG ────────────────────────────────────────────────────────────
const TeslaLogo = () => (
  <svg className="h-5 w-auto" viewBox="0 0 342 35" fill="currentColor">
    <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.2L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 7-7h-31.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v7h30.3l-31 27 .1 7h39.6a9.8 9.8 0 0 0 7-7H204l33-27.2zM109.6 7h21.4l.5.1v8.2l-.5.1h-14.2l-.2.5v7l.2.4h14.2l.5.2v8.3l-.5.1h-21.4l-.5.1v7l.5.1H141a9.7 9.7 0 0 0 7-7V.1l-38.4-.1v7zm87.5 0h21.4l.5.1v8.2l-.5.1h-14.2l-.2.5v7l.2.4h14.2l.5.2v8.3l-.5.1h-21.4l-.5.1v7l.5.1H228a9.7 9.7 0 0 0 7-7V.1l-38.4-.1v7zm-52.4-7a9.7 9.7 0 0 0-9.6 9.6v16a9.7 9.7 0 0 0 9.6 9.5h19a9.7 9.7 0 0 0 9.6-9.6v-16a9.7 9.7 0 0 0-9.7-9.5h-19zm16.3 6.8c1.6 0 2.8 1.2 2.8 2.9V26c0 1.6-1.2 2.9-2.8 2.9h-13.6c-1.6 0-2.9-1.3-2.9-2.9V9.7c0-1.7 1.3-2.9 2.9-2.9h13.6z" />
  </svg>
);

// ── Dummy SVG Illustrations ───────────────────────────────────────────────────
const CarIllustration = ({ color = "#888" }) => (
  <svg viewBox="0 0 200 100" className="w-full h-full">
    <ellipse cx="100" cy="90" rx="85" ry="7" fill="#e0e0e0" opacity="0.6" />
    <path
      d="M25,68 C25,68 38,38 65,34 L100,30 L135,34 C162,38 175,68 175,68 Z"
      fill={color}
    />
    <path d="M60,34 C65,20 85,16 100,16 C115,16 135,20 140,34" fill={color} />
    <rect x="25" y="68" width="150" height="14" rx="4" fill={color} />
    <path d="M62,33 C68,20 132,20 138,33" fill="rgba(200,230,255,0.6)" />
    <circle cx="52" cy="82" r="9" fill="#222" />
    <circle cx="52" cy="82" r="4.5" fill="#555" />
    <circle cx="148" cy="82" r="9" fill="#222" />
    <circle cx="148" cy="82" r="4.5" fill="#555" />
    <rect
      x="25"
      y="65"
      width="9"
      height="5"
      rx="1"
      fill="#fffbe0"
      opacity="0.9"
    />
    <rect
      x="166"
      y="65"
      width="9"
      height="5"
      rx="1"
      fill="#ff8080"
      opacity="0.9"
    />
  </svg>
);

const CybertruckIllustration = () => (
  <svg viewBox="0 0 200 100" className="w-full h-full">
    <ellipse cx="100" cy="90" rx="85" ry="7" fill="#e0e0e0" opacity="0.5" />
    <polygon points="22,70 55,36 130,36 175,70" fill="#3a3a3a" />
    <rect x="22" y="70" width="153" height="13" rx="2" fill="#2a2a2a" />
    <polygon points="55,36 68,18 125,18 130,36" fill="#333" />
    <circle
      cx="48"
      cy="83"
      r="9"
      fill="#1a1a1a"
      stroke="#555"
      strokeWidth="1.5"
    />
    <circle cx="48" cy="83" r="4" fill="#444" />
    <circle
      cx="148"
      cy="83"
      r="9"
      fill="#1a1a1a"
      stroke="#555"
      strokeWidth="1.5"
    />
    <circle cx="148" cy="83" r="4" fill="#444" />
    <rect x="72" y="38" width="58" height="2.5" fill="rgba(180,220,255,0.7)" />
    <rect
      x="22"
      y="63"
      width="10"
      height="4"
      rx="1"
      fill="#fffbe0"
      opacity="0.8"
    />
  </svg>
);

const EnergyIllustration = ({ type }) => {
  if (type === "solar")
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="20" y="40" width="160" height="55" rx="4" fill="#1a3a5c" />
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={45 + i * 38}
            y1="40"
            x2={45 + i * 38}
            y2="95"
            stroke="#2a5a8c"
            strokeWidth="1.5"
          />
        ))}
        {[0, 1].map((i) => (
          <line
            key={i}
            x1="20"
            y1={58 + i * 20}
            x2="180"
            y2={58 + i * 20}
            stroke="#2a5a8c"
            strokeWidth="1.5"
          />
        ))}
        <line
          x1="100"
          y1="95"
          x2="100"
          y2="110"
          stroke="#888"
          strokeWidth="3"
        />
        <rect x="60" y="108" width="80" height="6" rx="3" fill="#555" />
      </svg>
    );
  if (type === "powerwall")
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect
          x="55"
          y="15"
          width="90"
          height="100"
          rx="8"
          fill="#e8e8e8"
          stroke="#ccc"
          strokeWidth="1"
        />
        <rect x="65" y="25" width="70" height="80" rx="4" fill="#1a1a1a" />
        <text
          x="100"
          y="72"
          textAnchor="middle"
          fontSize="11"
          fill="#fff"
          fontWeight="bold"
        >
          POWERWALL
        </text>
        <rect x="90" y="110" width="20" height="6" rx="2" fill="#aaa" />
      </svg>
    );
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect
        x="30"
        y="20"
        width="140"
        height="90"
        rx="6"
        fill="#f0f0f0"
        stroke="#ddd"
      />
      <rect x="45" y="30" width="110" height="70" rx="4" fill="#1a3a5c" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={55 + i * 35}
          y="40"
          width="25"
          height="50"
          rx="2"
          fill="#2a5a8c"
        />
      ))}
    </svg>
  );
};

const ChargingIllustration = ({ type }) => {
  if (type === "plug")
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <circle cx="100" cy="55" r="32" fill="#00a550" opacity="0.15" />
        <circle cx="100" cy="55" r="24" fill="#00a550" opacity="0.3" />
        <path d="M100,25 L108,55 L100,48 L92,55 Z" fill="#00a550" />
        <ellipse cx="100" cy="60" rx="10" ry="14" fill="#333" />
        <path
          d="M80,70 Q70,90 90,100 Q110,110 120,90 Q130,70 100,80"
          fill="none"
          stroke="#555"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  if (type === "supercharger")
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect
          x="80"
          y="10"
          width="40"
          height="90"
          rx="6"
          fill="#e0e0e0"
          stroke="#ccc"
          strokeWidth="1"
        />
        <rect x="85" y="15" width="30" height="50" rx="3" fill="#1a1a2e" />
        <rect
          x="88"
          y="20"
          width="24"
          height="8"
          rx="2"
          fill="#00a550"
          opacity="0.8"
        />
        <path
          d="M100,75 L100,100"
          stroke="#555"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M96,65 L104,75 L100,73 L100,85 L96,75 L100,77 Z"
          fill="#e8a020"
        />
      </svg>
    );
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect
        x="70"
        y="15"
        width="60"
        height="80"
        rx="8"
        fill="#e8e8e8"
        stroke="#ccc"
      />
      <rect x="76" y="22" width="48" height="45" rx="4" fill="#1a1a2e" />
      <path
        d="M90,90 L90,105 Q100,112 110,105 L110,90"
        fill="none"
        stroke="#888"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

const FSDIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    <rect width="200" height="120" fill="#f5f5f5" rx="4" />
    <rect x="90" y="0" width="20" height="120" fill="#e0e0e0" />
    <rect x="98" y="0" width="4" height="120" fill="white" />
    <rect
      x="65"
      y="65"
      width="38"
      height="22"
      rx="3"
      fill="#4a90e2"
      opacity="0.9"
    />
    <rect
      x="95"
      y="35"
      width="28"
      height="16"
      rx="2"
      fill="#7ec8e3"
      opacity="0.85"
    />
    <path
      d="M72,76 L110,25"
      stroke="#4a90e2"
      strokeWidth="1"
      strokeDasharray="3,3"
      opacity="0.5"
    />
    <circle cx="100" cy="100" r="3.5" fill="#4a90e2" opacity="0.7" />
  </svg>
);

const NAV_DATA = {
  Products: {
    title: "Products",
    grid: [
      {
        name: "Sheet Metal Components",
        img: sheet,
        sub: ["Learn"],
        details: [
          { data: "Power Press Machines " },
          { data: "2D Laser Cutting Machine " },
          { data: "Aluminum Embossing " },
          { data: "Netting Machine" },
          { data: "Hydraulic Riveting Machine  " },
        ],
        para: "Car sheet metal forms the structural outer body of a vehicle, providing strength, durability, and aerodynamic shape. Made from high-quality steel or aluminum, it ensures safety while maintaining a lightweight design. Precision engineering allows smooth finishes, corrosion resistance, and impact protection, making it essential for both performance and long-term reliability of modern automobiles.",
      },
      {
        name: "Pipe Bending Components",
        img: pipe,
        sub: ["Learn", "Shop"],
        details: [
          { data: "3-Axis Pipe Bending Machine " },
          { data: "Robotic Welding" },
          { data: "Forklift  for pipe handling " },
          {
            data: "TIG & MIG Welding Stations Fabrication Bench & Pipe Cutting Tools",
          },
        ],
        para: "Pipe bending components are essential in creating precise and durable curved structures used in automotive, construction, and industrial applications. Manufactured with high-quality materials, they ensure strength, accuracy, and smooth finishes. Advanced bending techniques help maintain consistency and performance, making these components reliable for complex designs and long-lasting structural integrity.",
      },

      {
        name: "Tooling And Fixture",
        img: toolFixture,
        sub: ["Learn", "Find"],
        details: [
          { data: "MIG & Spot Welding Fixtures" },
          { data: "Robotic Welding Fixture Assembly" },
          { data: "CAD/CAM Design Support" },
          { data: "Die & Jig Fabrication Area" },
          { data: "First-Time-Right Development Approach" },
        ],
        para: "Tooling and fixtures are critical in manufacturing processes, ensuring precision, consistency, and efficiency during production. They securely hold and guide components, reducing errors and improving quality. Designed with durability and accuracy in mind, these systems support complex operations, enhance productivity, and play a vital role in achieving reliable and cost-effective manufacturing outcomes.",
      },
      {
        name: "EMBOSS SHEET & PARTS",
        img: emboss,
        sub: ["Learn", "Order"],
        details: [
          { data: "Improved strength and rigidity" },
          { data: "Better grip and anti-slip surface" },
          { data: "Attractive textured appearance" },
          { data: "High durability and corrosion resistance" },
        ],
        para: "Emboss sheet and parts are specially designed metal components featuring raised or patterned surfaces for enhanced strength, grip, and visual appeal. Manufactured with precision, they offer durability, corrosion resistance, and consistent quality. Widely used in automotive, industrial, and decorative applications, embossing improves functionality while adding a refined and professional finish.",
      },
      // { name: "Special Purpose Machines SPA", img: '',    sub: ["Learn","Order"],  el: <ChargingIllustration type="supercharger" />  },
    ],
    sidebar: [
      "Help Me Charge",
      "Charging Calculator",
      "Charging With NACS",
      "Supercharger Voting",
      "Host a Supercharger",
    ],
    links: [
      { title: "Sheet Metal Components" },
      { title: "Pipe Bending Components" },
      { title: "Tooling And Fixture" },
      { title: "Welding And Joining" },
      { title: "Special Purpose Machines SPA" },
    ],
  },

  Services: {
    title: "Services",
    grid: [
      {
        name: "Design & Development",
        img: designDevelopment,
        sub: ["Learn"],
        details: [
          { data: "Part Design with precision and accuracy" },
          { data: "Part Simulation for performance testing" },
          { data: "Development of other stamping parts" },
          { data: "Aluminium emboss parts manufacturing" },
          { data: "Focus on quality, efficiency, and innovation" },
        ],
        para: "Design and development play a vital role in creating high-quality industrial components with precision and innovation. From concept to final production, advanced tools and techniques ensure accuracy, efficiency, and performance. This process includes detailed part design, simulation, and development of specialized components, delivering reliable and cost-effective solutions for various industrial applications.",
      },
      {
        name: "Machineries",
        img: machineries,
        sub: ["View Jobs"],
        details: [
          { data: "High production efficiency" },
          { data: "Uniform and precise mesh design" },
          { data: "Durable and long-lasting output" },
          { data: "Suitable for multiple industrial applications" },
        ],
        para: "Machines are advanced industrial systems used to produce high-quality nets for applications such as packaging, agriculture, and safety. Designed for precision and efficiency, they ensure uniform mesh structure and durability. With reliable performance and easy operation, these machines support large-scale production while maintaining consistent quality and strength.",
      },
      // { name: "Assemble and Integration",         sub: ["Read"],        el: <svg viewBox="0 0 200 120" className="w-full h-full"><rect x="30" y="20" width="140" height="90" rx="6" fill="#f0f0f0" stroke="#ddd" /><text x="100" y="75" textAnchor="middle" fontSize="28">📰</text></svg> },
      // { name: "Quality Assurance",       sub: ["See Events"],  el: <svg viewBox="0 0 200 120" className="w-full h-full"><rect x="30" y="15" width="140" height="100" rx="6" fill="#f0f0f0" stroke="#ddd" /><text x="100" y="76" textAnchor="middle" fontSize="28">📅</text></svg> },
    ],
    sidebar: [
      "Customer Stories",
      "Blog",
      "Investor Relations",
      "Press",
      "Contact",
    ],
    links: [{ title: "" }, { title: "" }, { title: "" }, { title: "" }],
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  // const [searchVal,  setSearchVal]    = useState("");
  const [menuVisible, setMenuVisible] = useState(false); // controls animation class
  const closeTimer = useRef(null);
  const openTimer = useRef(null);

  const openMenu = useCallback(
    (key) => {
      clearTimeout(closeTimer.current);
      if (activeMenu !== key) {
        // if switching menus: swap instantly content, keep open
        setMenuVisible(false);
        openTimer.current = setTimeout(
          () => {
            setActiveMenu(key);
            setMenuVisible(true);
          },
          activeMenu ? 80 : 0
        );
      } else {
        setMenuVisible(true);
      }
      setActiveMenu(key);
    },
    [activeMenu]
  );

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setMenuVisible(false);
      setTimeout(() => setActiveMenu(null), 350);
    }, 120);
  }, []);

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  const data = activeMenu ? NAV_DATA[activeMenu] : null;
  console.log("data", data);

  return (
    <div className="">
      <div className=" fixed  top-4  left-0 w-full z-[1000]  ">
        <nav
          className=" max-w-7xl  z-50 bg-white/50 = backdrop-blur-lg   rounded-2xl mx-auto"
          onMouseLeave={closeMenu}
        >
          <div className="flex items-center justify-between px-6 h-[65px] max-w-screen-2xl mx-auto">
            <NavLink to="/" className="flex-shrink-0 text-black  duration-200">
              <img
                src="https://bbengineers.co.in/image/new_logo.png"
                alt="BB Engineers logo"
                className="h-10 w-auto object-contain"
              />
            </NavLink>

            <div className=" flex items-center gap-3  ">
              <span className="  py-1 transition">
                <NavLink
                  to="/"
                  className="font-medium text-gray-800text-[#2B2B2B] hover:text-[#E28A2D]  hover:rounded-2xl  "
                >
                  Home
                </NavLink>
              </span>
              <span className="  py-1 transition">
                <NavLink
                  to="/about"
                  className=" font-medium text-[#2B2B2B] hover:text-[#E28A2D]"
                >
                  {" "}
                  About{" "}
                </NavLink>
              </span>

              {Object.keys(NAV_DATA).map((key, i) => {
                const isActive = activeMenu === key;
                // console.log("d-------------", key,  )
                return (
                  <button
                    key={key}
                    onMouseEnter={() => {
                      openMenu(key);
                      setSearchOpen(false);
                    }}
                    onClick={() => openMenu(key)}
                    className={[
                      "relative  h-[52px]  font-medium text-center ",
                      "text-[#2B2B2B] hover:text-[#E28A2D]",
                      isActive ? "text-black " : "",
                    ].join(" ")}
                  >
                    {key}

                    {/* <span
                    className={[
                      "absolute bottom-0 left-4 right-4 h-[2px] bg-black rounded-full transition-all duration-300 ease-out",
                      isActive && menuVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
                    ].join(" ")}
                    style={{ transformOrigin: "center" }}
                  /> */}
                  </button>
                );
              })}
              <span className="  py-1 transition  px-2 rounded-lg">
                <NavLink
                  to="/contact"
                  className=" font-medium text-[#2B2B2B] hover:text-[#E28A2D]"
                >
                  Contact
                </NavLink>
              </span>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <div className="flex items-center ">
                {/* <div
                className={[
                  "overflow-hidden transition-all duration-400 ease-in-out",
                  searchOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0",
                ].join(" ")}
              >
                <input
                  autoFocus={searchOpen}
                  type="text"
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  placeholder="Search ..."
                  className="w-44 border-b placeholder-black  border-black outline-none text-[13px] px-1 py-0.5 bg-transparent text-gray-800 "
                />
              </div> */}
                <div className="gap-3 flex items-center">
                  {/* <button
                onClick={() => { setSearchOpen(s => !s); setActiveMenu(null); if (searchOpen) setSearchVal(""); }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
              >
              
              </button> */}

                  <button className="uppercase border-2 border-black px-2 py-2 rounded-lg text-xs hover:bg-[#F9981C]">
                    <NavLink to="/contact#contact-form">Request quote</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            onMouseEnter={cancelClose}
            onMouseLeave={closeMenu}
            className={[
              "absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden z-40 ",
              "transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              activeMenu && menuVisible
                ? "max-h-[520px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-1 pointer-events-none",
            ].join(" ")}
          >
            {data && (
              <div className="w-full mx-auto flex justify-center items-center text-center border-2 border-green-500 ">
                {/* Grid */}

                <div className="border-2 border-red-500 px-10 mx-auto ">
                <div className="flex items-center px-5 py-8 border-2 border-red-500  w-full max-w-7xl">
                  {/* <div className=" flex items-center  px-5 py-8 border-2 border-green-500 mx-auto"> */}
                    <div
                      className={[
                        "grid gap-x-2 gap-y-6 ",
                        data.grid.length <= 4 ? "grid-cols-4" : "grid-cols-4",
                      ].join(" ")}
                    >
                      {data.grid.map((item, i) => (
                        <div
                          key={item.name}
                          className="group cursor-pointer border-2 border-black"
                          style={{
                            transition: `opacity 0.35s ease ${
                              i * 45
                            }ms, transform 0.35s ease ${i * 45}ms`,
                            opacity: menuVisible ? 1 : 0,
                            transform: menuVisible
                              ? "translateY(0)"
                              : "translateY(10px)",
                          }}
                        >
                          <div
                            className="w-full h-28 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center  mb-2 transition-all
                       duration-250 group-hover:border-gray-300 group-hover:shadow-sm"
                          >
                            <NavLink
                              to={`/${data?.title
                                ?.toLowerCase()
                                .replace(/\s+/g, "-")}/${encodeURIComponent(
                                item.name
                              )}`}
                              state={{
                                name: item.name,
                                img: item.img,
                                details: item.details,
                                para: item.para,
                              }}
                              className="block text-gray-700  text-center  hover:bg-gray-100  py-2 rounded-md 
                             transition"
                            >
                              {/* <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Grid-Current-Offers.jpg"/> */}
                              <img src={item.img} />
                            </NavLink>
                          </div>
                          <p className="text-[13px] font-semibold text-gray-900 text-center leading-tight mb-1 transition-colors duration-150 group-hover:text-black">
                            {item.name}
                          </p>
                          <div className="flex items-center justify-center gap-3">
                            {item.sub.map((lnk, j) => (
                              <a
                                key={j}
                                href="#"
                                className="text-[11px] text-gray-500 underline underline-offset-2 hover:text-black transition-colors duration-150"
                              ></a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="w-52 border-l border-gray-100 px-6 py-8 flex-shrink-0"
                  style={{
                    transition:
                      "opacity 0.4s ease 120ms, transform 0.4s ease 120ms",
                    opacity: menuVisible ? 1 : 0,
                    transform: menuVisible
                      ? "translateX(0)"
                      : "translateX(8px)",
                  }}
                >
                  <ul className="space-y-[10px]">
                    {data.sidebar.map((s, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="block text-[13px] text-gray-500 hover:text-gray-900 transition-all duration-150 hover:translate-x-0.5"
                        ></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Dim backdrop */}
        <div
          onClick={() => {
            setMenuVisible(false);
            setTimeout(() => setActiveMenu(null), 350);
          }}
          className={[
            "fixed  top-[52px] bg-black/15 z-30 transition-opacity duration-350",
            activeMenu && menuVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          ].join(" ")}
        />

        {/* Demo page content */}
        {/* <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gray-50"> */}
        {/* <p className="text-sm text-gray-400 mb-3 tracking-widest uppercase">Tesla Navbar Clone</p> */}
        {/* <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Hover the nav above</h1> */}

        {/* </div> */}
      </div>
    </div>
  );
}
