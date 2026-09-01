import { useState } from "react";
import logo from "../assets/logo.svg";
import logo_dark from "../assets/logo_dark.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "./../context/theme/useTheme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Courses", href: "#courses" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#1E1F1F] dark:bg-primary shadow-lg md:mx-48 md:mt-5 md:rounded-xl sm:px-6 px-4 md:h-12 sm:h-16 h-12 flex items-center justify-between">
        {/* Logo */}
        {theme === "light" ? (
          <img src={logo} alt="logo" className="md:h-24 mt-2 sm:h-28 h-20 " />
        ) : (
          <img
            src={logo_dark}
            alt="logo"
            className="md:h-24 mt-2 sm:h-28 h-20"
          />
        )}

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-300 dark:text-black text-sm hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-primary dark:bg-gray-300 dark:text-black text-black text-sm font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Get in Touch
            </a>
          </li>
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "light" ? (
              <DarkModeIcon className="text-gray-300 text-sm hover:text-primary transition-colors duration-200 cursor-pointer" />
            ) : (
              <LightModeIcon className="text-black text-sm hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
            )}
          </button>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`
            absolute top-11 left-0 z-40 w-full
            flex flex-col gap-4
            bg-[#1E1F1F] px-6 py-5
            shadow-lg dark:bg-primary
            md:hidden

            transition-all duration-500 ease-in-out

            ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0 pointer-events-none"
            }
          `}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 dark:text-black text-sm hover:text-primary transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary dark:bg-black text-black dark:text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity duration-200 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
            <button onClick={toggleTheme} className="cursor-pointer">
              {theme === "light" ? (
                <DarkModeIcon className="text-gray-300 text-sm transition-colors duration-200 cursor-pointer" />
              ) : (
                <LightModeIcon className="text-black text-sm transition-colors duration-200 cursor-pointer" />
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
