import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/dev.json";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative z-10 
        min-h-screen 
        flex flex-col lg:flex-row 
        items-center justify-between 
        px-10 lg:px-24 
        pt-32 pb-20 
        text-white
        bg-transparent
        backdrop-blur-[2px]
      "
    >
      {/* LEFT SIDE CONTENT */}
      <div className="max-w-2xl">
        
        {/* Animated Name */}
        <motion.h1
          className="text-5xl lg:text-6xl font-bold leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {"Adnan Suhail".split("").map((char, index) => (
            <motion.span
              key={index}
              className="text-primary inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <h2 className="text-2xl lg:text-3xl mt-4 text-accent font-semibold">
          MERN Stack Developer & Cybersecurity Enthusiast
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I build modern, secure full-stack applications using MongoDB,
          Express.js, React.js, and Node.js.  
          With hands-on penetration testing experience, I ensure the software I build is  
          <span className="text-primary font-medium"> secure and hack-resistant</span>.
        </p>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="
            inline-block mt-8 px-6 py-3 text-lg font-semibold 
            bg-primary text-black rounded-lg 
            hover:bg-accent 
            transition-all shadow-lg
          "
        >
          Get in Touch
        </a>
      </div>

      {/* Right Side Lottie Animation */}
      <div className="w-[300px] lg:w-[450px] mt-10 lg:mt-0">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </section>
  );
}

export default Hero;
