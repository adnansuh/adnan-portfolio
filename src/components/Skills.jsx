import React from "react";
import { motion } from "framer-motion";

// Parent container stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay each skill animation
    },
  },
};

// Each skill animation
const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git / GitHub", icon: "🐙" },
  ];

  return (
    <section id="skills" className="pt-28 pb-28 px-6">
      <h2 className="text-center text-5xl font-bold text-purpleNeon mb-12">
        Skills
      </h2>

      {/* Stagger container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg
                       hover:bg-white/10 hover:border-purpleNeon/40 hover:shadow-purpleNeon/20
                       transition text-center cursor-default"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-gray-300 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
