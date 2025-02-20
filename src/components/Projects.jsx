import React from 'react'
import ProjectData from './data_files/ProjectData'

function Projects() {
  return (
    <div className='container mx-auto py-5 lg:h-[600px] lg:overflow-y-auto'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center py-10'>
        {ProjectData.map((data, index) => (
          <div key={index} className='p-5 max-w-lg rounded-xl overflow-hidden shadow-xl bg-zinc-800'>
            <div className='flex gap-5'>
              <div className='text-yellow-500 text-xl'>
                <i className='ri-suitcase-line'></i>
              </div>
              <div>
                <label className='font-semibold text-xl'>{data.name}</label>
              </div>
            </div>
            <div className='pt-3'>
              <img 
                src={data.image} 
                alt={data.name} 
                className='w-full h-auto rounded-lg border border-black hover:shadow-2xl hover:shadow-yellow-600 hover:border-none'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
