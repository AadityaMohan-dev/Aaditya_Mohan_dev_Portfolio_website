import React from "react";
import janani from '.././assets/janani.png';
import yash from '.././assets/yash.png';
import uddeshya from '.././assets/uddeshya.png';

function About() {
  return (
    <div className="lg:h-[490px] xl:h-screen lg:overflow-y-auto px-4 md:px-8">
      <div className="py-10 lg:py-5 text-wrap text-center md:text-left">
        <p className="text-lg md:text-xl">
          I am a creative <span className="font-bold">"Full Stack Developer"</span> from Greater Noida, India working in web development. I enjoy
          turning complex problems into simple, beautiful, and intuitive designs.
          My job is to build your website so that it is functional and user-friendly but attractive at the same time.
        </p>
      </div>
      <div className="py-5">
        <h1 className="font-semibold text-3xl text-center md:text-left">What I'm Doing</h1>
        <div className="pt-5 flex flex-col md:flex-row gap-5 md:justify-between">
          <div className="flex gap-5 p-5 w-full md:w-1/2 rounded-xl shadow-xl bg-zinc-800">
            <div className="text-yellow-500 text-2xl"><i className="ri-window-fill"></i></div>
            <div>
              <label className="font-semibold text-sm">Web Development</label>
              <p className="text-xs">High-quality development of sites at the professional level using MERN, MEAN, and SpringBoot.</p>
            </div>
          </div>
          <div className="flex gap-5 p-5 w-full md:w-1/2 rounded-xl shadow-xl bg-zinc-800">
            <div className="text-yellow-500 text-2xl"><i className="ri-links-line"></i></div>
            <div>
              <label className="font-semibold text-sm">Langchain Development</label>
              <p className="text-xs">High-quality development of backend services at the professional level using Langchain.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h1 className="font-semibold text-2xl text-center md:text-left">Testimonials</h1>
        <div className="pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[{
            img: uddeshya,
            name: "Uddeshya Patel",
            position: "Software Engineer",
            review: "His expertise and attention to detail are unmatched."
          }, {
            img: janani,
            name: "Kamireddi Janani",
            position: "Software Engineer",
            review: "His expertise and attention to detail are unmatched."
          }, {
            img: yash,
            name: "RB Yashvith Ballal",
            position: "Software Engineer",
            review: "His way of thinking is out of the box, creative and problem-solving skill is very good."
          }].map((testimonial, index) => (
            <div key={index} className="flex gap-5 p-5 rounded-xl shadow-xl bg-zinc-800">
              <div><img src={testimonial.img} alt={testimonial.name} className="w-20 md:w-28 rounded-full" /></div>
              <div>
                <div className="flex justify-between items-center">
                  <label className="font-semibold text-lg">{testimonial.name}</label>
                  <i className="ri-linkedin-box-fill text-xl cursor-pointer text-yellow-400 hover:text-white"></i>
                </div>
                <p className="text-xs text-gray-400">{testimonial.position}</p>
                <p className="text-xs">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;