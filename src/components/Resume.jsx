import React from "react";

function Resume() {
  return (
    <section id="resume" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-purpleNeon">Resume</h2>

      <p className="text-gray-300 mb-8">
        You can download my resume using the button below.
      </p>

      <a
        href="/resume.pdf" 
        download
        className="px-6 py-3 bg-purpleAccent hover:bg-purpleNeon transition text-black font-semibold rounded-lg shadow-lg"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
