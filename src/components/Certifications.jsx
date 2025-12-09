import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="pt-28 pb-28 px-8 max-w-6xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
      >
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Certified Penetration Tester */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-lg
            border border-white/10 hover:border-primary 
            transition-all duration-300
          "
        >
          <h3 className="text-2xl font-semibold text-accent mb-3">
            Certified Penetration Tester
          </h3>

          <p className="text-gray-300 mb-4">
            Red Team Hacker Academy — Cybersecurity & Ethical Hacking
          </p>

          <a
            href="/cpt.pdf"
            download
            className="
              inline-flex items-center gap-2 px-5 py-3 
              bg-primary text-black font-semibold rounded-lg 
              shadow-lg hover:bg-accent transition
            "
          >
            <FaDownload /> Download Certificate
          </a>
        </motion.div>

        {/* MERN Stack Certification */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-lg
            border border-white/10 hover:border-primary 
            transition-all duration-300
          "
        >
          <h3 className="text-2xl font-semibold text-accent mb-3">
            MERN Stack Certification
          </h3>

          <p className="text-gray-300 mb-4">Coding Ninjas — MERN Track</p>

          <a
            href="/mern-certificate.pdf"
            download
            className="
              inline-flex items-center gap-2 px-5 py-3 
              bg-primary text-black font-semibold rounded-lg 
              shadow-lg hover:bg-accent transition
            "
          >
            <FaDownload /> Download Certificate
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;
