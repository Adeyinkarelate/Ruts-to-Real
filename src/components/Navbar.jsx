import { FiMenu, FiX } from "react-icons/fi";
import { links } from "../data/data";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav
      className="
        w-full fixed top-0 z-40 
      bg-[#f7f5f0]/80 text-[#2b3828]
        md:backdrop-blur-lg md:border-b md:border-[#e3e1d8]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="font-serif text-xl tracking-tight">Ruts to Real</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.url}
              className="text-sm font-medium hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}

          <Link to="/book-session" className="px-4 py-2 rounded-md bg-[#a5b58f] text-[#1d2617] text-sm font-medium shadow-sm hover:bg-[#92a47c]">
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
        fixed top-0 right-0 w-[75%]
        bg-soil text-white shadow-xl
        translate-x-full peer-checked:translate-x-0
        transition-all duration-300 md:hidden
        flex flex-col p-6 z-50
      "
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-serif text-lg">Menu</span>
          <label htmlFor="drawer" className="cursor-pointer">
            <FiX size={22} />
          </label>
        </div>

        <div className="flex flex-col gap-5 ps-4">
          {links.map((link) => (
            <label key={link.label} htmlFor="drawer">
              <a
                href={link.href}
                className="text-base font-medium hover:opacity-70"
              >
                {link.label}
              </a>
            </label>
          ))}
        </div>

        <label htmlFor="drawer" className="mt-auto cursor-pointer">
          <button className="w-full py-2 rounded-md bg-[#a5b58f] text-[#1d2617] text-sm font-medium shadow-sm hover:bg-[#92a47c]">
            Book Session
          </button>
        </label>
      </div>
    </nav>
  );
}
