"use client";
// @flow strict
import { useState } from "react";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsList, BsX } from "react-icons/bs";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/about", label: "ABOUT" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/skills", label: "SKILLS" },
    { href: "/education", label: "EDUCATION" },
    { href: "/projects", label: "PROJECTS" },
  ];

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-white hover:text-pink transition-colors text-3xl font-bold"
            onClick={closeMenu}
          >
            {personalData.name.toUpperCase()}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href={link.href}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink">
                  {link.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-pink transition-colors duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <BsX size={28} className="text-pink" />
          ) : (
            <BsList size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={closeMenu}
        >
          <div
            className="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-black/95 border-l border-purple/30 shadow-elegant animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="absolute top-5 right-5">
                <button
                  onClick={closeMenu}
                  className="p-2 text-white hover:text-pink transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <BsX size={28} />
                </button>
              </div>

              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-3 px-4 rounded-lg border border-purple/30 bg-black/50 hover:bg-purple/20 hover:border-pink/50 transition-all duration-300 group"
                    >
                      <div className="text-base text-white group-hover:text-pink transition-colors duration-300 font-medium">
                        {link.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto mb-8 pt-8 border-t border-purple/30">
                <div className="text-sm text-white/60 text-center">
                  {personalData.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;