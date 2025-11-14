import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#007272] to-[#004f4f] text-white pt-14 pb-8 mt-12 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#008080]/20 blur-3xl opacity-40"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10 z-10">
        
        {/* Foundation Info */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-[#F8F9FA]">
            KANYA JAGRITI FOUNDATION
          </h4>
          <p className="text-white/80 leading-relaxed mb-3">
            C/o Mira Panja,Jharnapara, Nr. Babloo Dharamshala, 
            Dhanbad Hirapur, Dhanbad, Dhanbad- 826001, Jharkhand
          </p>
          <p className="text-white/80">
            Email:{" "}
            <a
              href="mailto:kanyajagritifoundation@gmail.com"
              className="hover:text-[#FF7F50] transition-colors"
            >
              kanyajagritifoundation@gmail.com
            </a>
            <br />
            Phone:{" "}
            <a
              href="tel:9503618951"
              className="hover:text-[#FF7F50] transition-colors"
            >
              9503618951
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-xl font-semibold mb-4 text-[#F8F9FA]">Quick Links</h5>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/" className="hover:text-[#FF7F50] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FF7F50] transition-colors">About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#FF7F50] transition-colors">Projects</Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-[#FF7F50] transition-colors">Donate</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#FF7F50] transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#FF7F50] transition-colors">Terms & conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#FF7F50] transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-[#FF7F50] transition-colors">Refund/Cancellation</Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Connect */}
        <div>
          <h5 className="text-xl font-semibold mb-4 text-[#F8F9FA]">Connect With Us</h5>
          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://www.facebook.com/share/1A4pGNGkeE/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#FF7F50] p-3 rounded-full transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/kanyajagritifoundation3/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#FF7F50] p-3 rounded-full transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/kanya-jagriti-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#FF7F50] p-3 rounded-full transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://t.me/kanyajagritifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#FF7F50] p-3 rounded-full transition-all duration-300"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbBexbJDJ6GzIB9zIe09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#FF7F50] p-3 rounded-full transition-all duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="relative text-center text-white/80 text-sm mt-8 px-4">
        <p className="italic text-[#F4B6C2] text-base mb-2">
          “Breaking barriers, building dreams…”
        </p>
        <p className="text-white/70">
          © {new Date().getFullYear()} Kanya Jagriti Foundation — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
