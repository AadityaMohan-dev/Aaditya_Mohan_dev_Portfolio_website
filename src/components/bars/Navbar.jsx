import React from 'react'

function Navbar() {
  return (
    <>
    <div id="container-navbar" className='flex justify-between'>
        <div id="heading" className='w-96 h-10 items-center px-5 pt-3'>
            <h1 className='font-customFont text-4xl'>About Me</h1>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FAB005/horizontal-line.png" alt="horizontal-line"/>
        </div>
        <div id="menu">
            <ul className='flex items-center bg-zinc-800 justify-around w-screen h-14  max-w-lg rounded-xl overflow-hidden shadow-lg'>
                <li className='cursor-pointer hover:text-yellow-400 font-semibold uppercase'>About</li>
                <li className='cursor-pointer hover:text-yellow-400 font-semibold uppercase'>resume</li>
                <li className='cursor-pointer hover:text-yellow-400 font-semibold uppercase'>Projects</li>
                <li className='cursor-pointer hover:text-yellow-400 font-semibold uppercase'>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar