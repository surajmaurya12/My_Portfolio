import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load from localStorage or default to false
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Name on Left */}
        <a href="/" className="text-lg sm:text-xl font-extrabold italic text-blue-700 dark:text-blue-400 tracking-widest hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300">
          SURAJ MAURYA
        </a>

        {/* Nav Links */}
        <ul className="hidden sm:flex gap-8 items-center text-gray-700 dark:text-gray-200 font-medium text-sm">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition text-sm"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
