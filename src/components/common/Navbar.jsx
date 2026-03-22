import React, {useEffect, useState , useRef} from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    {
      label: "Services",
      to: "/services",
      mega: {
        columns: [
          {
            title: "Structural Engineering",
            icon: "🏗️",
            links: ["Structural Design", "Load Analysis", "Foundation Design", "Seismic Analysis"],
          },
          {
            title: "Civil Engineering",
            icon: "🛣️",
            links: ["Road Design", "Drainage Systems", "Site Development", "Infrastructure Planning"],
          },
          {
            title: "Construction Management",
            icon: "🏢",
            links: ["Project Planning", "Quality Control", "Cost Estimation", "Site Supervision"],
          },
          {
            title: "Consulting",
            icon: "📋",
            links: ["Feasibility Study", "Technical Audits", "BOQ Preparation", "Vastu Consultation"],
          },
        ],
        sidebar: [
          "Request a Quote",
          "Download Brochure",
          "Our Projects",
          "Certifications",
          "Client Testimonials",
          "Career Opportunities",
        ],
      },
    },
    { label: "Contact Us", to: "/contact" },
  ];
   
  // ─── DUMMY ICON BLOCKS ────────────────────────────────────────────────────────
  const IconBlock = ({ icon, title, links }) => (
    <div className="group cursor-pointer">
      <div className="w-full h-28 bg-gray-50 rounded-xl flex flex-col items-center justify-center border border-gray-100 mb-2 transition-all duration-200 group-hover:bg-blue-50 group-hover:border-blue-200">
        <span className="text-4xl mb-1">{icon}</span>
        <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">{title.split(" ")[0]}</span>
      </div>
      <p className="text-[13px] font-semibold text-gray-800 text-center leading-snug mb-1">{title}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        {links.slice(0, 2).map((link, i) => (
          <a key={i} href="#" className="text-[11px] text-gray-500 underline hover:text-blue-600 transition-colors duration-150">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
 
  
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const navRef = useRef(null);
   
    // Close on outside click
    useEffect(() => {
      const handler = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setActiveMenu(null);
          setSearchOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []);
   
    const toggleMenu = (label) => {
      setActiveMenu((prev) => (prev === label ? null : label));
      setSearchOpen(false);
    };
   

  return (

<header ref={navRef} className="sticky top-0 z-50 bg-white shadow-sm ">
 
{/* ── TOP BAR ── */}
<div className="flex items-center justify-between px-6 h-14 max-w-screen-2xl mx-auto ">

  {/* Logo */}
  <NavLink to="/" className="flex-shrink-0">
    <img
      src="https://bbengineers.co.in/image/new_logo.png"
      alt="BB Engineers logo"
      className="h-10 w-auto object-contain"
    />
  </NavLink>

  {/* Center Nav */}
  <nav className="flex items-center gap-1">
    {NAV_ITEMS.map((item) => {
      const hasMega = !!item.mega;
      const isActive = activeMenu === item.label;

      return (
        <button
          key={item.label}
          onClick={() => hasMega ? toggleMenu(item.label) : setActiveMenu(null)}
          className={[
            "relative px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200",
            "text-gray-800 hover:bg-gray-100 hover:text-blue-700",
            isActive ? "bg-gray-100 text-blue-700" : "",
          ].join(" ")}
        >
          {hasMega ? (
            <span className="flex items-center gap-1">
              {item.label}
              {/* Chevron rotates smoothly */}
              <svg
                className={[
                  "w-3.5 h-3.5 transition-transform duration-300 ",
                  isActive ? "rotate-180" : "rotate-0",
                ].join(" ")}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          ) : (
            <NavLink
              to={item.to}
              className="block"
              onClick={() => setActiveMenu(null)}
            >
              {item.label}
            </NavLink>
          )}

          {/* Active underline indicator */}
          <span
            className={[
              "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5  rounded-full transition-all duration-300",
              isActive ? "w-3/4" : "w-0",
            ].join(" ")}
          />
        </button>
      );
    })}
  </nav>

  {/* Right Side */}
  <div className="flex items-center gap-2">

    {/* Search slide-in */}
    <div className="flex items-center">
      <div
        className={[
          "overflow-hidden transition-all duration-500 ease-in-out",
          searchOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0",
        ].join(" ")}
      >
        <input
          autoFocus={searchOpen}
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search..."
          className="w-48 border-b-2 border-blue-500 outline-none text-sm px-2 py-1 bg-transparent text-gray-800 placeholder-gray-400"
        />
      </div>

      <button
        onClick={() => {
          setSearchOpen((s) => !s);
          setActiveMenu(null);
          if (searchOpen) setSearchVal("");
        }}
        className="ml-1 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle search"
      >
        {searchOpen ? (
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
        )}
      </button>
    </div>

    {/* Request Quote CTA */}
    <a
      href="/contact"
      className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
      </svg>
      Request Quote
    </a>
  </div>
</div>

{/* ── MEGA MENU DROPDOWN ── */}
{NAV_ITEMS.filter((i) => i.mega).map((item) => (
  <div
    key={item.label}
    className={[
      "absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden z-40 mx-40",
      "transition-all duration-500 ease-in-out",
      activeMenu === item.label
        ? "max-h-[500px] opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-2 pointer-events-none",
    ].join(" ")}
  >
    <div className="max-w-screen-2xl mx-auto flex">

      {/* Grid columns */}
      <div className="flex-1 px-8 py-8 grid grid-cols-4 gap-6">
        {item.mega.columns.map((col, i) => (
          <div
            key={i}
            className={[
              "transition-all duration-500",
              activeMenu === item.label
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: activeMenu === item.label ? `${i * 60}ms` : "0ms" }}
          >
            <IconBlock icon={col.icon} title={col.title} links={col.links} />
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="w-52 border-l border-gray-100 px-6 py-8 flex-shrink-0 bg-gray-50">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Quick Links</p>
        <ul className="space-y-3">
          {item.mega.sidebar.map((s, i) => (
            <li
              key={i}
              className={[
                "transition-all duration-500",
                activeMenu === item.label
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2",
              ].join(" ")}
              style={{ transitionDelay: activeMenu === item.label ? `${(i + 4) * 50}ms` : "0ms" }}
            >
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 hover:translate-x-1 transition-all duration-150 group"
              >
                <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-150" />
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}

{/* Backdrop blur overlay when menu is open */}
<div
  className={[
    "fixed inset-0 top-14 bg-black/10 backdrop-blur-[1px] z-30 transition-opacity duration-300",
    activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
  ].join(" ")}
  onClick={() => setActiveMenu(null)}
/>
</header>

  );
};

export default Navbar;
