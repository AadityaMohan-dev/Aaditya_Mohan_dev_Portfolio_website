import React from "react";
import janani from '.././assets/janani.png'
import yash from '.././assets/yash.png'
import uddeshya from '.././assets/uddeshya.png'
function About() {
  return (
    <>
      <div id="container-about" className="lg:h-[490px] lg:overflow-y-auto">
        <div id="about" className="py-10 lg:py-3 text-wrap">
          <p>
            I am a creative "Full Stack Developer" from Greater Noida, India working in web development. I enjoy 
            turning complex problems into simple, beautiful and intutive designs.
            My job is to build your website so that it is functional and user-friendly but attractive at the same time.
          </p>
        </div>
        <div id="what-doing" className="py-3">
            <h1 className="font-semibold text-2xl">What I'm Doing</h1>
            <div id="wd-cards" className="pt-5 flex flex-col xl:flex-row gap-5 md:justify-between">
                <div id="web-dev" className="flex gap-5 p-5 max-w-full  xl:max-w-full rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <div id="icn" className="text-yellow-500 text-2xl"><i class="ri-window-fill"></i></div>
                    <div id="i-data" className="">
                        <label htmlFor="" className="font-semibold text-sm">Web Development</label>
                        <p className="text-xs">High quality development of sites at the professional level using MERN, MEAN and SpringBoot.</p>
                    </div>
                </div>
                <div id="prom-dev" className="flex gap-5 p-5 max-w-full xl:max-w-full rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <div id="icn" className="text-yellow-500 text-2xl"><i class="ri-links-line"></i></div>
                    <div id="i-data" className="">
                        <label htmlFor="" className="font-semibold text-sm">Langchain Development</label>
                        <p className="text-xs">High quality development of backend services at the professional level using Langchain.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="testimonials" className="pt-3">
        <h1 className="font-semibold text-2xl">Testimonials</h1>
        <div id="wd-cards" className="pt-4 grid xl:grid-cols-3 gap-5 ">
                <div id="prom-dev" className="flex gap-5 p-5 max-w-xl rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <div id="icn-img" className=""><img src={uddeshya} alt=""  className="w-28"/></div>
                    <div id="i-data" className="">
                        <div id="head" className="flex justify-between">
                        <label htmlFor="" className="font-semibold text-lg">Uddeshya Patel</label>
                        <i class="ri-linkedin-box-fill text-xl cursor-pointer text-yellow-400 hover:text-white"></i>
                        </div>
                        <p className="text-xs text-gray-400">Software Engineer</p>
                        <p className="text-xs">His experties and attention to detail are unmatched.</p>
                    </div>
                </div>
                <div id="prom-dev" className="flex gap-5 p-5 max-w-xl rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <div id="icn-img" className=""><img src={janani} alt=""  className="w-28"/></div>
                    <div id="i-data" className="">
                        <div id="head" className="flex justify-between">
                            <label htmlFor="" className="font-semibold text-lg">Kamireddi Janani</label>
                        <i class="ri-linkedin-box-fill text-xl cursor-pointer text-yellow-400 hover:text-white"></i>
                        </div>
                        <p className="text-xs text-gray-400">Software Engineer </p>
                        <p className="text-xs">His experties and attention to detail are unmatched.</p>
                    </div>
                </div>
                <div id="prom-dev" className="flex gap-5 p-5 max-w-xl rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
                    <legend id="icn-img" className=""><img src={yash} alt=""  className="w-28"/></legend>
                    <div id="i-data" className="">
                        <div id="head" className="flex justify-between">
                        <label htmlFor="" className="font-semibold text-lg">RB Yashvith Ballal</label>
                        <i class="ri-linkedin-box-fill text-xl cursor-pointer text-yellow-400 hover:text-white"></i>
                        </div>
                        <p className="text-xs text-gray-400">Software Engineer </p>
                        <p className="text-xs">His way of thinking is out of the box, creative and problem soliving skill is very good.</p>
                    </div>
                </div>
               
        </div>
        
        </div>
      </div>
    </>
  );
}

export default About;
