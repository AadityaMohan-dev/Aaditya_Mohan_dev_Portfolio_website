import React from "react";
import resume from ".././assets/resume.pdf";
function Resume() {
  return (
    <>
      <div id="container-resume" className="lg:h-[600px]  lg:overflow-y-scroll">
        <div id="container" className="">
          <div id="row-1" className="flex justify-between pb-1 ">
            <div id="head-1" className="flex gap-3 pb-3 pt-2">
              <div id="icn" className="text-yellow-400 text-2xl font-thin">
                <i class="ri-graduation-cap-line"></i>
              </div>
              <h1 className="text-2xl">Education</h1>
            </div>
            <a
              href={resume}
              target="'_blank'"
              class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-orange-600 to-yellow-400 group-hover:from-orange-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download My Resume
              </span>
            </a>
          </div>
          <div
            id="content"
            className="p-5  max-w-9xl rounded-xl overflow-hidden shadow-xl  bg-zinc-800"
          >
            <div id="row-1" className="flex flex-wrap justify-between">
              <div id="college-name" className="font-semibold">
                Dr A P J Abdul Kalam Technical University
              </div>
              <span id="place" className="text-gray-400 text-xs">
                Greater Noida, India
              </span>
            </div>
            <div id="row-2" className="flex justify-between">
              <span className="text-xs text-gray-400">
                Computer Science and Engineering
              </span>
              <div id="date" className="text-yellow-400 text-xs font-semibold">
                2018 - 2022
              </div>
            </div>
          </div>
        </div>
        <div id="cantainer-2" className="py-2">
          <div id="head-1" className="flex gap-3 py-1">
            <div id="icn" className="text-yellow-400 text-2xl font-thin">
              <i class="ri-bookmark-line"></i>
            </div>
            <h1 className="text-2xl">Experience</h1>
          </div>
          <div
            id="content"
            className="p-5 max-w-9xl rounded-xl overflow-hidden shadow-xl  bg-zinc-800"
          >
            <div id="row-1" className="flex flex-wrap justify-between">
              <div id="college-name" className="text-xl font-semibold">
                Full Stack Developer ( Software Engineer )
              </div>
              <span className="text-xs text-gray-400">Chennai, India</span>
            </div>
            <div id="row-2" className="flex justify-between py-3">
              <div id="place" className="text-gray-400 text-xs">
                Hexaware Technology
              </div>
              <div id="date" className="text-yellow-400 text-xs font-semibold">
                2022 - Present
              </div>
            </div>
            <li className="text-md w-full  pt-2">
            Full-Stack Development: Designed and developed scalable web applications using Java, Spring Boot. {" "}
            </li>
            <li className="text-md w-full  pt-2">
            ReactJS, improving user experience and operational efficiency.{" "}
            </li>

            <li className="text-md w-full  pt-2">
              Efficiently integrated state management solutions using Redux,
              significantly fortifying application stability and scalability.{" "}
            </li>

            <li className="text-md w-full  pt-2">
            Code Quality & Mentorship: Conducted code reviews, identified areas for improvement, and mentored
            junior developers to uphold high coding standards and best practices.{" "}
            </li>

            <li className="text-md w-full  pt-2">
              Database Optimization: Enhanced database performance by optimizing SQL queries and indexing
              strategies, reducing page load times by 20%.{" "}
            </li>

            <li className="text-md w-full  pt-2">
            Agile & Collaboration: Worked in Agile (Scrum) environments, collaborating with cross-functional teams
            to deliver high-quality software solutions.{" "}
            </li>
          </div>
        </div>
        <div id="head-1" className="pb-5">
          <div id="head-3" className="flex gap-3 py-5">
            <div id="icn" className="text-yellow-400 text-2xl">
              <i class="ri-macbook-line"></i>
            </div>
            <h1 className="text-2xl">My Skills</h1>
          </div>
          <div
            id="content"
            className="p-5 max-w-9xl rounded-xl overflow-hidden shadow-xl  bg-zinc-800"
          >
            <div id="row-2" className="">
              <ul className=" flex flex-wrap justify-start gap-5">
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  React
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Angular
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Java
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Spring Boot
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Node JS
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Express JS
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  MySQL
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  MongoDB
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Postman
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  TailwindCSS
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  JavaScript
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  TypeScript
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Langchain
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  Python
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  HTML
                </li>
                <li className="text-xs capitalize font-semibold border cursor-pointer hover:bg-white hover:text-gray-800 border-white p-2 rounded-lg shadow-lg shadow-black">
                  CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
