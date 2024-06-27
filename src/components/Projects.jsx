import React from 'react'
import bg from '.././assets/firstbank.jpg'
import bg2 from '../assets/portfolio.jpg'
function Projects() {
  return (
    <>
    <div id="container-project" className='py-5 lg:h-[490px] lg:overflow-y-auto'>
    <div class="grid xl:grid-cols-3 gap-5 justify-center py-10">
      <div id="prom-dev" className=" p-5 max-w-lg rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
        <div id="head-1" className='flex gap-5'>
        <div id="icn" className="text-yellow-500 text-xl"><i class="ri-suitcase-line"></i></div>
        <div id="i-data" className="">
            <label htmlFor="" className="font-semibold text-xl">First Bank</label>
            <p className="text-xs"></p>
        </div>
        </div>
        <div id="img" className='pt-3'><img src={bg} alt="" className='rounded-lg border border-black hover:shadow-2xl hover:shadow-yellow-600 hover:border-none'/></div>
      </div>


      <div id="prom-dev" className=" p-5 max-w-lg rounded-xl overflow-hidden shadow-xl  bg-zinc-800">
        <div id="head-1" className='flex gap-5'>
        <div id="icn" className="text-yellow-500 text-xl"><i class="ri-suitcase-line"></i></div>
        <div id="i-data" className="">
            <label htmlFor="" className="font-semibold text-xl">Portfolio Website</label>
            <p className="text-xs"></p>
        </div>
        </div>
        <div id="img" className='pt-3'><img src={bg2} alt="" className='rounded-lg  border border-black hover:shadow-2xl hover:shadow-yellow-600 hover:border-none'/></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Projects