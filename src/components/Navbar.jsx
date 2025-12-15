import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close menu on click (mobile)
  };

  const menuItems = ["home", "about", "skills", "education", "certifications"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1
          className="text-2xl font-bold tracking-wide text-primary cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Adnan<span className="text-accent">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-gray-200 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer hover:text-primary transition capitalize"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* THEME TOGGLE */}
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
                absolute w-6 h-6 bg-primary rounded-full 
                shadow-[0_0_15px_var(--primary)]
                transform duration-300 flex items-center justify-center text-black
                ${theme === "purple" ? "translate-x-1" : "translate-x-7"}
              `}
            >
              {theme === "purple" ? <FiMoon size={14} /> : <FiSun size={14} />}
            </span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-200 text-lg">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer hover:text-primary transition capitalize"
              >
                {item}
              </li>
            ))}

            {/* THEME TOGGLE (MOBILE) */}
            <button
              onClick={toggleTheme}
              className="mt-2 px-6 py-2 rounded-full bg-primary text-black font-semibold shadow"
            >
              Switch Theme
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
