import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  const skills = [
    { name: "C", icon: "🔵" },
    { name: "C++", icon: "💠" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },

    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },

    { name: "Git / GitHub", icon: "🐙" },

    { name: "Burp Suite", icon: "🛡️" },
    { name: "Nmap", icon: "📡" },
    { name: "Wireshark", icon: "🦈" },
    { name: "OWASP Top 10", icon: "⚠️" },
    { name: "Metasploit", icon: "💣" },
  ];

  return (
    <section id="skills" className="pt-28 pb-28 px-6 relative z-10">
      <h2 className="text-center text-5xl font-bold text-purpleNeon mb-12">
        Skills
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            className="
              p-6 rounded-xl bg-white/5 backdrop-blur-lg
              border border-white/10 shadow-lg
              hover:bg-white/10 hover:border-purpleNeon/40
              hover:shadow-purpleNeon/20 transition text-center
            "
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
