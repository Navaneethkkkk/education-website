import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for mobile toggle

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-amber-50 shadow-md">
        <div className="flex justify-between items-center px-5 md:px-10 h-[10vh]">
          {/* Logo + title */}
          <div className="flex items-center gap-3">
            <img className="w-10 rounded-full" src={logo} alt="logo" />
            <h1 className="text-2xl md:text-3xl font-serif font-semibold">
              Learn with me
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold">
            <Link to="/" className="hover:text-violet-600">
              Home
            </Link>
            <Link to="/Services" className="hover:text-violet-600">
              Services
            </Link>
            <Link to="/Courses" className="hover:text-violet-600">
              Courses
            </Link>
            <Link to="/Contact" className="hover:text-violet-600">
              Contact Us
            </Link>
            <Link to="/Feedbacks" className="hover:text-violet-600">
              Feedbacks
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-amber-50 border-t border-gray-200">
            <ul className="flex flex-col items-center gap-4 py-4 text-lg font-semibold">
              <Link
                to="/"
                className="hover:text-violet-600"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/Services"
                className="hover:text-violet-600"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/Courses"
                className="hover:text-violet-600"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/Contact"
                className="hover:text-violet-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/Feedbacks"
                className="hover:text-violet-600"
                onClick={() => setMenuOpen(false)}
              >
                Feedbacks
              </Link>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
