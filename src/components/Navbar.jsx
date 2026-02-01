import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { links } from "../data/data";
import { Link } from "react-router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-40 transition-all duration-300
        ${scrolled ? "bg-cream text-soil shadow-sm" : "bg-transparent text-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight font-bold"
        >
          Ruts to Real
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.url}
              className="text-lg font-medium hover:opacity-70 transition"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/book-session"
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition
              ${scrolled
                ? "bg-soil text-cream hover:opacity-90"
                : "bg-cream text-soil hover:opacity-90"}
            `}
          >
            Book Session
          </Link>
        </div>

        {/* Mobile toggle */}
        <label htmlFor="drawer" className="md:hidden cursor-pointer">
          <FiMenu size={22} />
        </label>
      </div>

      {/* Mobile Drawer */}
      <input id="drawer" type="checkbox" className="peer hidden" />

      <div
        className="
          fixed top-0 right-0 h-fit w-[75%]
          bg-soil text-white
          translate-x-full peer-checked:translate-x-0
          transition-transform duration-300
          md:hidden z-50
          flex flex-col p-6
        "
      >
        <div className="flex justify-between items-center mb-10">
          <span className="font-serif text-lg">Menu</span>
          <label htmlFor="drawer" className="cursor-pointer">
            <FiX size={22} />
          </label>
        </div>

        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <label key={link.label} htmlFor="drawer">
              <Link
                to={link.url}
                className="text-md font-medium hover:opacity-70"
              >
                {link.label}
              </Link>
            </label>
          ))}
        </div>

        <Link
          to="/book-session"
          className="mt-8 w-full py-3 rounded-md bg-cream text-soil text-center font-medium hover:opacity-90"
        >
          Book Session
        </Link>
      </div>
    </nav>
  );
}
