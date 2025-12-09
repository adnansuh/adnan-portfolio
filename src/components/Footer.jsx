import React from "react";

function Footer() {
  return (
    <footer
      className="
        py-6 text-center bg-dark2 
        border-t border-primary/40
        shadow-[0_-0_15px_var(--primary)]
        transition-all duration-300
      "
    >
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold hover:text-accent transition">
          Adnan Suhail
        </span>{" "}
        — Built with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
