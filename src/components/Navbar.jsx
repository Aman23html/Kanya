import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/KJF_Logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
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
      {/* ======= Top Bar ======= */}
      <div className="bg-[#1e2424] text-white text-[14px] py-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6 md:px-12">
        {/* Left Tagline */}
        <p className="flex items-center gap-1 text-[#b9fff4] font-medium text-sm">
          Help Others <span className="text-red-500">❤️</span> Help Yourself
        </p>

        {/* Middle Contact Info */}
        <div className="flex items-center gap-4 text-[#c9e8e3] text-sm flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <MdEmail className="text-[#6dd3c6] text-[16px]" />
            <a
              href="mailto:account@sevapatra.org"
              className="hover:underline hover:text-[#6dd3c6]"
            >
               kanyajagritifoundation@gmail.com
            </a>
          </div>
          <span className="hidden sm:block text-gray-500">|</span>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#6dd3c6] text-[14px]" />
            <a href="tel:9102971230" className="hover:underline hover:text-[#6dd3c6]">
              9503618951
            </a>
          </div>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-3 text-[#6dd3c6]">
          <span className="text-white text-sm font-medium">Social Media</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF7F50] transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF7F50] transition"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF7F50] transition"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>

      {/* ======= Main Navbar ======= */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-2 md:py-3">
          {/* ===== Logo Section ===== */}
          <Link
            to="/"
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-[1.03]"
          >
            <div
              className="flex items-center gap-1 md:gap-2 animate-fade-in-up"
              style={{ animation: "fadeInUp 0.8s ease-in-out" }}
            >
              <img
                src={logo}
                alt="Kanya Jagriti Silhouette"
                className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="flex flex-col leading-none">
                <div className="flex items-end gap-0.5">
                  <span className="text-[1rem] md:text-[1.25rem] font-extrabold text-black tracking-wider transition-colors duration-500 group-hover:text-[#FF7F50]">
                    KANYA
                  </span>
                </div>
                <span className="text-[10px] md:text-[11px] text-gray-700 tracking-[2px] uppercase font-medium">
                  Jagriti Foundation
                </span>
              </div>
            </div>
            <div className="w-[140px] md:w-[180px] border-t border-gray-500 mt-0.5 md:mt-[3px] group-hover:border-[#FF7F50] transition-colors duration-500"></div>
            <p className="text-[8px] md:text-[10px] italic text-gray-600 mt-0.5 transition-opacity duration-500 group-hover:opacity-80">
              Breaking Barriers, Building Dreams...
            </p>
          </Link>

          {/* ===== Desktop Nav ===== */}
          <nav className="hidden md:flex items-center gap-7 text-[16px]">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>
            <NavLink to="/projects" className={navLinkClasses}>
              Projects
            </NavLink>
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
              className="bg-[#FF7F50] text-white px-5 py-2 rounded-full font-semibold
             hover:bg-[#ff8f66] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Donate
            </NavLink>
          </nav>

          {/* ===== Mobile Hamburger ===== */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
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

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3 text-[17px] font-medium bg-linear-to-b from-white/95 to-[#fefefe]/90 shadow-md border-t border-[#e6e6e6] backdrop-blur-md">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/projects", label: "Projects" },
            { to: "/testimonials", label: "Testimonials" },
            { to: "/media", label: "Media" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all duration-200 ${
                  isActive ? "text-[#FF7F50]" : "text-[#004f4f]"
                } hover:text-[#FF7F50]`
              }
            >
              {label}
            </NavLink>
          ))}
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
