import React from "react";

function About() {
  return (
    <>
      <div id="container-about">
        <div id="about" className="py-3">
          <p>
            I am a motivated and enthusiastic Full Stack Software Engineer with a strong
            foundation in web development and a passion for creating innovative
            solutions. Seeking for an opportunity to leverage my skills,
            contribute to a dynamic team, and continue learning and growing in
            the field of software engineering.
          </p>
        </div>
        <div id="what-doing" className="py-3">
            <h1 className="font-semibold text-2xl">What I'm Doing</h1>
            <div id="wd-cards" className="pt-5 flex justify-around">
                <div id="web-dev" className="flex gap-5 p-5 max-w-sm rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <div id="icn" className="text-yellow-500 text-2xl"><i class="ri-window-fill"></i></div>
                    <div id="i-data" className="">
                        <label htmlFor="" className="font-semibold text-sm">Web Development</label>
                        <p className="text-xs">High quality development of sites at the professional level using MERN, MEAN and SpringBoot.</p>
                    </div>
                </div>
                <div id="prom-dev" className="flex gap-5 p-5 max-w-sm rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <div id="icn" className="text-yellow-500 text-2xl"><i class="ri-links-line"></i></div>
                    <div id="i-data" className="">
                        <label htmlFor="" className="font-semibold text-sm">Langchain Development</label>
                        <p className="text-xs">High quality development of backend services at the professional level using Langchain.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="testimonials" className="py-3">
        <h1 className="font-semibold text-2xl">Testimonials</h1>
        <div id="wd-cards" className="pt-5 flex justify-around">
        <div id="prom-dev" className="flex gap-5 p-5 max-w-sm rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <div id="icn" className="text-yellow-500 text-2xl"><i class="ri-links-line"></i></div>
                    <div id="i-data" className="">
                        <label htmlFor="" className="font-semibold text-sm">Langchain Development</label>
                        <p className="text-xs">High quality development of backend services at the professional level using Langchain.</p>
                    </div>
                </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
