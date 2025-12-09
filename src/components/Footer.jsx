import React from "react";

function Footer() {
  return (
    <footer className="py-6 text-center bg-dark2 border-t border-white/10">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Adnan Suhail — Built with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
