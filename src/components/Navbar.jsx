import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 
          className="text-2xl font-bold tracking-wide text-purpleNeon cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Adnan<span className="text-purpleAccent">.</span>
        </h1>

        {/* Menu */}
        <ul className="flex gap-10 text-gray-200 font-medium">
          {["home", "about", "skills", "education", "certifications"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-purpleNeon transition duration-200 capitalize"
            >
              {item}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
