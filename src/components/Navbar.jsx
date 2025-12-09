import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1
          className="text-2xl font-bold tracking-wide text-primary cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Adnan<span className="text-accent">.</span>
        </h1>

        {/* Menu + Theme Toggle */}
        <div className="flex items-center gap-10">

          {/* Menu */}
          <ul className="flex gap-10 text-gray-200 font-medium">
            {["home", "about", "skills", "education", "certifications"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="cursor-pointer hover:text-primary transition duration-200 capitalize"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* 🌙 THEME TOGGLE BUTTON 🔥 */}
          <button
            onClick={toggleTheme}
            className="
              relative w-14 h-7 flex items-center 
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-full duration-300 shadow-[0_0_10px_var(--primary)]
              hover:shadow-[0_0_20px_var(--accent)]
            "
          >
            <span
              className={`
                absolute w-6 h-6 bg-primary rounded-full shadow-[0_0_15px_var(--primary)]
                transform duration-300 flex items-center justify-center text-black
                ${theme === 'purple' ? 'translate-x-1' : 'translate-x-7'}
              `}
            >
              {theme === "purple" ? (
                <FiMoon size={14} />
              ) : (
                <FiSun size={14} />
              )}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
