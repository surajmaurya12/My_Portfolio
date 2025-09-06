import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode setup
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Navbar links
  const links = ["home", "about", "skills", "projects","certificates", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="/"
          className="text-lg sm:text-xl font-extrabold italic text-blue-700 dark:text-blue-400 tracking-widest hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300"
        >
          SURAJ MAURYA
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-200 font-medium text-sm">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Dark Mode + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition text-sm"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col gap-6 py-6 px-6 text-gray-700 dark:text-gray-200 font-medium text-base">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)} // close after click
                  className="block hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
