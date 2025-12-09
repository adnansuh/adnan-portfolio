import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative z-10 
        pt-28 pb-28 px-6 
        bg-transparent 
        backdrop-blur-[2px]
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-purpleNeon mb-4">
          Get in Touch
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
          Whether you want to collaborate, hire me, or just say hello — I'm always 
          excited to connect. Let’s build something secure, modern, and meaningful together!
        </p>

        {/* Contact Card */}
        <div 
          className="
            max-w-xl mx-auto p-8 rounded-2xl 
            bg-black/30 backdrop-blur-xl
            border border-purple-500/20
            shadow-[0_0_25px_rgba(168,85,247,0.25)]
            hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]
            transition-all duration-500
          "
        >
          {/* Email */}
          <div className="flex items-center gap-4 mb-6 text-gray-200">
            <FaEnvelope className="text-purpleNeon text-xl" />
            <a
              href="mailto:adnansuhail88@gmail.com"
              className="hover:text-purpleNeon transition"
            >
              adnansuhail88@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 mb-6 text-gray-200">
            <FaGithub className="text-purpleNeon text-xl" />
            <a
              href="https://github.com/adnansuh"
              target="_blank"
              className="hover:text-purpleNeon transition"
            >
              github.com/adnansuh
            </a>
          </div>

          {/* LinkedIn - Updated */}
          <div className="flex items-center gap-4 mb-6 text-gray-200">
            <FaLinkedin className="text-purpleNeon text-xl" />
            <a
              href="https://www.linkedin.com/in/adnan-suhail-39432a244"
              target="_blank"
              className="hover:text-purpleNeon transition"
            >
              linkedin.com/in/adnan-suhail-39432a244
            </a>
          </div>

          {/* WhatsApp - Updated phone number */}
          <div className="flex items-center gap-4 text-gray-200">
            <FaWhatsapp className="text-purpleNeon text-xl" />
            <a
              href="https://wa.me/919846913180"
              target="_blank"
              className="hover:text-purpleNeon transition"
            >
              +91 9846913180
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-purpleNeon mb-6">
            My Location
          </h3>

          <div
            className="
              relative rounded-2xl overflow-hidden
              border border-purple-500/30 
              backdrop-blur-xl
              bg-black/20
              shadow-[0_0_25px_5px_rgba(168,85,247,0.35)]
              hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.6)]
              transition-all duration-500
            "
            style={{ height: "380px" }}
          >
            {/* Dark Mode Map */}
            <iframe
              title="google-map-dark"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) saturate(180%) brightness(90%) contrast(110%)",
              }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6644218715987!2d76.25050747450821!3d9.96185287369099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d5c8da44ec9%3A0x457d96a11ec74f48!2sN%20H%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1765266133990!5m2!1sen!2sin"
            ></iframe>

            {/* Neon Location Pin */}
            <div
              className="
                absolute z-20 pointer-events-none
                left-1/2 top-1/2 
                transform -translate-x-1/2 -translate-y-1/2
                w-6 h-6 rounded-full
                bg-purple-500
                shadow-[0_0_25px_8px_rgba(168,85,247,0.9)]
                animate-pulse
              "
            ></div>

            {/* Outer Glow Ring */}
            <div
              className="
                absolute z-10 pointer-events-none
                left-1/2 top-1/2 
                transform -translate-x-1/2 -translate-y-1/2
                w-12 h-12 rounded-full
                border-2 border-purple-400/50
                animate-ping
              "
            ></div>

            {/* Glow Overlay */}
            <div className="
              pointer-events-none absolute inset-0 rounded-2xl 
              shadow-[0_0_50px_15px_rgba(168,85,247,0.4)] opacity-40
            "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
