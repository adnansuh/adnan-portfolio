import React from "react";
import {
  FaDownload,
  FaShieldAlt,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";

function Resume() {
  return (
    <section
      id="resume"
      className="
        relative z-10
        py-24 px-6 
        bg-transparent 
        backdrop-blur-[2px]
        text-white
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-5xl font-extrabold text-center text-purpleNeon mb-12">
          My Resume
        </h2>

        {/* RESUME CARD */}
        <div
          className="
            bg-black/40 border border-purple-500/40 
            rounded-2xl p-10 backdrop-blur-xl
            shadow-[0_0_25px_rgba(168,85,247,0.25)]
            hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]
            transition-all duration-500
          "
        >
          {/* Summary */}
          <h3 className="text-3xl font-bold mb-4 text-purpleNeon">
            Professional Summary
          </h3>

          <p className="text-gray-300 leading-relaxed mb-10 text-lg">
            MERN Stack Developer & Certified Penetration Tester skilled in
            building secure, scalable applications. Passionate about modern UI,
            cloud-ready backend systems, and ethical hacking. Dedicated to
            crafting software that is fast, clean, and hack-resistant.
          </p>

          {/* SKILLS SECTION */}
          <h3 className="text-3xl font-bold mb-6 text-purpleNeon">Skills</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {/* Development */}
            <div className="p-6 rounded-xl bg-black/30 border border-purple-500/20 shadow">
              <FaLaptopCode className="text-purpleNeon text-3xl mb-3" />
              <h4 className="text-xl font-semibold mb-3 text-purpleAccent">
                Development
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>HTML / CSS / JavaScript</li>
                <li>React.js / Next.js</li>
                <li>Node.js / Express.js</li>
              </ul>
            </div>

            {/* Backend & Database */}
            <div className="p-6 rounded-xl bg-black/30 border border-purple-500/20 shadow">
              <FaNetworkWired className="text-purpleNeon text-3xl mb-3" />
              <h4 className="text-xl font-semibold mb-3 text-purpleAccent">
                Backend & Database
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>MongoDB / Mongoose</li>
                <li>REST APIs</li>
                <li>Authentication & JWT</li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="p-6 rounded-xl bg-black/30 border border-purple-500/20 shadow">
              <FaShieldAlt className="text-purpleNeon text-3xl mb-3" />
              <h4 className="text-xl font-semibold mb-3 text-purpleAccent">
                Cybersecurity
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>Penetration Testing</li>
                <li>Burp Suite, Nmap, Wireshark</li>
                <li>OWASP Top 10</li>
              </ul>
            </div>

          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="text-center mt-10">
            <a
              href="/resume.pdf"
              download
              className="
                inline-flex items-center gap-3
                px-8 py-4 text-lg font-semibold
                bg-purpleNeon text-black rounded-xl
                shadow-[0_0_20px_rgba(168,85,247,0.8)]
                hover:bg-purpleAccent hover:shadow-[0_0_35px_rgba(168,85,247,1)]
                transition-all duration-300
              "
            >
              <FaDownload />
              Download Resume (PDF)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;
