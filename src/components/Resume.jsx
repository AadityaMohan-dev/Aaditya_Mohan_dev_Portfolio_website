import React from "react";
import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="container mx-auto p-4  xl:h-[700px] lg:h-[600px] lg:overflow-y-auto">
      {/* Education Section */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-between items-center pb-2">
          <div className="flex items-center gap-3">
            <div className="text-yellow-400 text-2xl font-thin">
              <i className="ri-graduation-cap-line"></i>
            </div>
            <h1 className="text-2xl">Education</h1>
          </div>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 mb-3 bg-gradient-to-br from-orange-600 to-yellow-400 text-white rounded-lg shadow-md hover:from-orange-700 hover:to-yellow-500"
          >
            Download My Resume
          </a>
        </div>
        <div className="p-5 bg-zinc-800 rounded-xl shadow-xl">
          <div className="flex flex-wrap justify-between">
            <div className="font-semibold">Dr A P J Abdul Kalam Technical University</div>
            <span className="text-gray-400 text-xs">Greater Noida, India</span>
          </div>
          <div className="flex flex-wrap justify-between mt-2">
            <span className="text-xs text-gray-400">Computer Science and Engineering</span>
            <div className="text-yellow-400 text-xs font-semibold">2018 - 2022</div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 py-1">
          <div className="text-yellow-400 text-2xl font-thin">
            <i className="ri-bookmark-line"></i>
          </div>
          <h1 className="text-2xl">Experience</h1>
        </div>
        <div className="p-5 bg-zinc-800 rounded-xl shadow-xl">
          <div className="flex flex-wrap justify-between">
            <div className="text-xl font-semibold">Full Stack Developer (Software Engineer)</div>
            <span className="text-xs text-gray-400">Chennai, India</span>
          </div>
          <div className="flex flex-wrap justify-between py-3">
            <div className="text-gray-400 text-xs">Hexaware Technology</div>
            <div className="text-yellow-400 text-xs font-semibold">Aug, 2022 - May, 2025</div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-md mt-2">
            <li>Developed scalable web applications using Java and Spring Boot.</li>
            <li>Enhanced UI/UX using React.js and improved operational efficiency.</li>
            <li>Integrated state management solutions using Redux.</li>
            <li>Mentored junior developers and conducted code reviews.</li>
            <li>Optimized SQL queries for faster database performance.</li>
            <li>Collaborated with cross-functional teams in Agile environments.</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 py-5">
          <div className="text-yellow-400 text-2xl">
            <i className="ri-macbook-line"></i>
          </div>
          <h1 className="text-2xl">My Skills</h1>
        </div>
        <div className="p-5 bg-zinc-800 rounded-xl shadow-xl">
          <ul className="flex flex-wrap gap-4">
            {[ "Java", "Spring Boot","React", "MySQL", "MongoDB", "Postman", "TailwindCSS", "JavaScript", "TypeScript", "Langchain", "PostgresSQL", "HTML", "CSS", "Git", "GitHub","Python", "MongoDB",].map((skill) => (
              <li
                key={skill}
                className="text-xs font-semibold border border-white p-2 rounded-lg shadow-md cursor-pointer hover:bg-white hover:text-gray-800 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
