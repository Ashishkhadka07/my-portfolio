import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group relative flex items-center gap-2">
            <div className="relative bg-blue-600 px-3 py-2 rounded-lg">
              <span className="text-2xl font-bold text-white">
                AK
              </span>
            </div>
            <span className="hidden sm:block text-gray-900 font-semibold text-lg tracking-wide">
              <span className="text-blue-600">&lt;</span>
              Developer
              <span className="text-blue-600">/&gt;</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {/* Active indicator */}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full"></span>
                )}

                <span className="relative">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <span>Let's Talk</span>
              <span>→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <HiMenuAlt3
                size={24}
                className={`absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
              />
              <HiX
                size={24}
                className={`absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out ${isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 ${location.pathname === link.path
                    ? "bg-blue-50 text-blue-600 border-l-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 p-2"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="mt-4 block text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Let's Talk →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
