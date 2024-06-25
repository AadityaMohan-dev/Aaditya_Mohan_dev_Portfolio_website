import React from 'react'
import Profile from '../../assets/Profile.png'
import 'remixicon/fonts/remixicon.css'

function Sidebar() {
  return (
    <>
    <div id="container-sidebar" className='w-full'>
        <div id="profile-pic"className='flex justify-center items-center w-full'>
            <div id="img" className='rounded-xl w-36 bg-zinc-800 overflow-hidden  h-36 items-center flex justify-center '>
                <img src={Profile} alt="" />
            </div>
        </div>
        <div id="info" className='flex flex-col justify-center items-center w-full py-3 gap-3'>
            <h1 className='text-xl font-semibold'>Aaditya Mohan</h1>
            <div id="degination" className='p-1 rounded  bg-zinc-800  w-36 flex justify-center items-center font-semibold'><h2>Web Developer</h2></div>
            <div id="data" className='flex justify-between items-center gap-5'>
                <div id="icon" className='flex flex-col gap-5 my-3'>
                <div id="mail-icon" className='px-3 py-1 mt-1 rounded bg-zinc-800'><i class="ri-mail-line text-yellow-400 text-xl"></i></div>
                <div id="phone-icon" className='px-3 py-1 rounded bg-zinc-800'><i class="ri-phone-line text-yellow-400 text-xl"></i></div>
                <div id="birthday-icon" className='px-3 py-1 rounded bg-zinc-800'><i class="ri-cake-line text-yellow-400 text-xl"></i></div>
                <div id="address-icon" className='px-3 py-1 rounded bg-zinc-800'><i class="ri-map-pin-2-line text-yellow-400 text-xl"></i></div>
                </div>
                <div id="cont" className='w-full'>
                    <div id="mail" className='pb-1'>
                    <label htmlFor="email" className='text-xs font-semibold uppercase'>Email</label>
                    <p className='text-sm font-semibold'>aadimohan51@gmail.com</p>
                    </div>
                    <div id="phone" className='py-1'>
                    <label htmlFor="phone" className='text-xs font-semibold uppercase'>phone</label>
                    <p className='text-sm font-semibold'>(+91) 8881685609</p>
                    </div>
                    <div id="birthday" className='py-2'>
                    <label htmlFor="email" className='text-xs font-semibold uppercase'>Birthday</label>
                    <p className='text-sm font-semibold'>19 April 2000</p>
                    </div>
                    <div id="adress" className='pt-2'>
                    <label htmlFor="email" className='text-xs font-semibold uppercase'>Address</label>
                    <p className='text-sm font-semibold'>Greter Noida, India</p>
                    </div>
                </div>
            </div>
            
            <div id="socials" className='grid grid-cols-3 gap-5'>
                <a href='https://github.com/AadityaMohan-dev'><i class="ri-github-fill text-2xl cursor-pointer  hover:text-yellow-400 text-yellow-300"></i></a>
                <a href='https://www.instagram.com/aaditya._.mohan?igsh=eHZwZnFzZXB4aDFu&utm_source=qr'><i class="ri-instagram-fill text-2xl cursor-pointer  hover:text-yellow-400 text-yellow-300"></i></a>
                <a href='https://linkedin.com/in/aaditya-mohan'><i class="ri-linkedin-box-fill text-2xl cursor-pointer  hover:text-yellow-400 text-yellow-300"></i></a>
                </div>
            
            
           
        </div>
    </div>
    </>
  )
}

export default Sidebar