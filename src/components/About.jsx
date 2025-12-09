import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="pt-28 pb-32 px-8 max-w-6xl mx-auto"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary mb-10 text-center"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm <span className="text-primary font-semibold">Adnan Suhail</span>, 
            a passionate MERN Stack Developer who loves building clean, modern, 
            and scalable web applications.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I focus on JavaScript, React, Node.js and continuously improve my 
            Data Structures & Algorithms knowledge to strengthen problem-solving skills.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I enjoy learning new technologies and building projects that help me 
            grow — one step at a time.
          </p>
        </motion.div>

        {/* RIGHT SIDE — GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            p-6 rounded-xl bg-white/5 border border-white/10 
            backdrop-blur-lg shadow-lg
            hover:border-primary transition
          "
        >
          <h3 className="text-2xl font-semibold text-accent mb-4">
            Skills Snapshot
          </h3>

          <ul className="space-y-2 text-gray-300 text-lg">
            <li>⚡ HTML — CSS — JavaScript</li>
            <li>⚡ React.js — Node.js — Express.js</li>
            <li>⚡ MongoDB — REST APIs</li>
            <li>⚡ Git / GitHub</li>
            <li>⚡ Tailwind CSS</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
