import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/10 bg-[#f8f8f7] ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 py-6 px-4 md:flex-row">
        {/* Brand Initial */}
        <div className="text-3xl font-serif tracking-tight text-soil">
          Ruts to Real
        </div>

        {/* Links */}
        <nav className="flex flex-col md:flex-row items-center gap-3 text-md text-gray-600">
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
          <span className="opacity-50">|</span>
          <Link to="/services" className="hover:text-black transition">Services</Link>
          <span className="opacity-50">|</span>
          <Link to="/privacy" className="hover:text-black transition">Privacy Policy</Link>
          <span className="opacity-50">|</span>
          <Link to="/terms" className="hover:text-black transition">Terms & Conditions</Link>
          <span className="opacity-50">|</span>
          <Link to="/disclaimer" className="hover:text-black transition">Coaching Disclaimer</Link>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3 text-gray-600">
          <a href="#" aria-label="Facebook" className="hover:text-black transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-black transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Tiktok" className="hover:text-black transition">
            <FaTiktok size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-md text-gray-500 text-center pb-4">
        © {new Date().getFullYear()} Ruts to Real — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

