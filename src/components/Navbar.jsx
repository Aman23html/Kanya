import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/KJF_Logo.webp";

// ✅ Unified route structure (same as App.jsx)
const projectItems = [
  { name: "Young Girls Empowerment", path: "/projects/young-girls-empowerment" },
  { name: "Tribal Girl Children Care", path: "/projects/tribal-girl-children-care" },
  { name: "Food, Clothing, Shelter & Medical Help", path: "/projects/food-clothing-shelter-medical-help" },
  { name: "Environment Protection", path: "/projects/environment-protection" },
  { name: "Legal Help", path: "/projects/legal-help" },
  { name: "Financial Independence", path: "/projects/financial-independence" },
  { name: "Volunteer Engagement Program", path: "/projects/volunteer-engagement-program" },
  { name: "Mothers’ Wellness Care", path: "/projects/mothers-wellness-care" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [mobileProjectOpen, setMobileProjectOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `relative font-medium tracking-wide transition-all duration-300
     ${isActive ? "text-[#FF7F50]" : "text-[#004f4f]"}
     hover:text-[#FF7F50] after:content-[''] after:absolute after:left-0 
     after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#FF7F50]
     hover:after:w-full after:transition-all after:duration-300`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ===== Top Info Bar ===== */}
      <div className="bg-[#1e2424] text-white text-[13px] py-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6 md:px-12">
        <p className="flex items-center gap-1 text-[#b9fff4] font-medium text-sm">
          Help Others <span className="text-red-500">❤️</span> Help Yourself
        </p>

        <div className="flex items-center gap-4 text-[#c9e8e3] text-sm flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <MdEmail className="text-[#6dd3c6] text-[16px]" />
            <a href="mailto:kanyajagritifoundation@gmail.com" className="hover:underline hover:text-[#6dd3c6]">
              kanyajagritifoundation@gmail.com
            </a>
          </div>

          <span className="hidden sm:block text-gray-500">|</span>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#6dd3c6] text-[14px]" />
            <a href="tel:9503618951" className="hover:underline hover:text-[#6dd3c6]">
              9503618951
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[#6dd3c6]">
          <span className="text-white text-sm font-medium">Social Media</span>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#FF7F50] transition">
            <FaFacebookF size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#FF7F50] transition">
            <FaInstagram size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FF7F50] transition">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.06)]"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-2 md:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Kanya Jagriti Foundation"
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-sm"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[1rem] md:text-[1.15rem] font-extrabold text-black group-hover:text-[#FF7F50] transition-colors">
                KANYA
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-700 tracking-[2px] uppercase font-medium">
                Jagriti Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-[16px]">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProjectOpen(true)}
              onMouseLeave={() => setProjectOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer group text-[#004f4f] hover:text-[#FF7F50]">
                <Link to="/projects" className="hover:text-[#FF7F50]">
                  Projects
                </Link>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    projectOpen ? "rotate-180 text-[#FF7F50]" : ""
                  }`}
                />
              </div>

              <div
                className={`absolute top-full left-0 bg-white shadow-lg rounded-xl border border-gray-100 mt-2 transition-all duration-300 overflow-hidden z-50 ${
                  projectOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible"
                }`}
              >
                {projectItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#fff2ed] hover:text-[#FF7F50] transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/testimonials" className={navLinkClasses}>
              Testimonials
            </NavLink>
            <NavLink to="/media" className={navLinkClasses}>
              Media
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>

            <NavLink
              to="/donate"
              className="bg-[#FF7F50] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#ff8f66] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Donate
            </NavLink>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              to="/donate"
              className="bg-[#FF7F50] text-white px-3 py-2 rounded-full text-sm font-semibold shadow-sm mr-2"
            >
              Donate
            </Link>

            <button
              className="flex flex-col justify-center items-center w-9 h-9 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`h-[3px] w-6 bg-[#007272] rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`h-[3px] w-6 bg-[#007272] rounded my-[5px] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-[3px] w-6 bg-[#007272] rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[700px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3 text-[17px] font-medium bg-white/95 shadow-md border-t border-[#e6e6e6] backdrop-blur-md">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-[#004f4f] hover:text-[#FF7F50]">
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-[#004f4f] hover:text-[#FF7F50]">
            About
          </NavLink>

          {/* Mobile Projects Dropdown */}
          <div>
            <button
              onClick={() => setMobileProjectOpen(!mobileProjectOpen)}
              className="flex justify-between items-center w-full text-[#004f4f] hover:text-[#FF7F50] transition-all"
            >
              <span>Projects</span>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  mobileProjectOpen ? "rotate-180 text-[#FF7F50]" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                mobileProjectOpen ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              {projectItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileProjectOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fff2ed] hover:text-[#FF7F50] rounded-lg transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/testimonials" onClick={() => setMenuOpen(false)} className="text-[#004f4f] hover:text-[#FF7F50]">
            Testimonials
          </NavLink>
          <NavLink to="/media" onClick={() => setMenuOpen(false)} className="text-[#004f4f] hover:text-[#FF7F50]">
            Media
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-[#004f4f] hover:text-[#FF7F50]">
            Contact
          </NavLink>

          <NavLink
            to="/donate"
            onClick={() => setMenuOpen(false)}
            className="bg-[#FF7F50] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#e26e45] transition-all duration-300 text-center shadow-sm"
          >
            Donate
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
