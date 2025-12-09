import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// Parent animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Child animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function Education() {
  const educationData = [
    {
      title: "Toc H Institute of Science & Technology",
      subtitle: "B.Tech in Computer Science",
      year: "Expected Graduation: 2026",
      logo: "/logos/toch.png",
      link: "https://tistcochin.edu.in/",
    },
    {
      title: "Red Team Hacker Academy",
      subtitle: "Certified Penetration Tester",
      year: "Cybersecurity & Ethical Hacking (2025)",
      logo: "/logos/redteam.png",
      link: "https://redteamacademy.com/",
    },
    {
      title: "Coding Ninjas",
      subtitle: "MERN Stack Developer Track",
      year: "2025",
      logo: "/logos/codingninjas.svg",
      link: "https://www.codingninjas.com/",
    },
  ];

  return (
    <section id="education" className="pt-28 pb-28 px-6">
      <h2 className="text-center text-5xl font-bold text-primary mb-12">
        Education
      </h2>

      {/* Stagger container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto flex flex-col gap-10"
      >
        {educationData.map((item, index) => (
          <motion.a
            key={index}
            variants={cardVariants}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-between gap-6 p-6
              rounded-2xl bg-white/5 backdrop-blur-lg
              border border-white/10 shadow-lg
              hover:bg-white/10 hover:border-primary
              hover:shadow-[0_0_25px_var(--primary)]
              transition cursor-pointer
            "
          >
            {/* Left Section */}
            <div className="flex items-center gap-6">
              <img
                src={item.logo}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
              />

              <div>
                <h3 className="text-2xl font-semibold text-accent">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-1">{item.subtitle}</p>
                <p className="text-gray-400 text-sm">{item.year}</p>
              </div>
            </div>

            {/* Arrow Icon */}
            <FiArrowUpRight
              className="
                text-accent text-3xl opacity-0 -translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300
              "
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Education;
