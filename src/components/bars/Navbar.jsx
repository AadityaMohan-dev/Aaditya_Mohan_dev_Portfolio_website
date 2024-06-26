import React, { useContext, useState } from 'react'
import About from '../About';
import Resume from '../Resume';
import Contact from '../Contact';
import Projects from '../Projects';
import { NavContext } from '../Context/NavContext';

function Navbar() {
  const [selected, setSelected] = useState("about");
  const [component, setComponent] = useState(<About/>)
  const [title, setTitle] = useState("About Me")

  // const {
  //   // selected,
  //   // component,
  //   // title,
  //   // setComponent,
  //   // setSelected,
  //   // setTitle,
  // } = useContext(NavContext)
  
  return (
    <>
    <div id="container-navbar" className='flex justify-between'>
        <div id="heading" className='w-96 h-10 items-center px-5 pt-3'>
            <h1 className='font-customFont text-4xl'>{title}</h1>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FAB005/horizontal-line.png" alt="horizontal-line"/>
        </div>
        <div id="menu" className='hidden lg:block'>
            <ul className='flex items-center bg-zinc-800 justify-around w-screen h-14  max-w-lg rounded-xl overflow-hidden shadow-lg'>
                <li className={`cursor-pointer hover:text-yellow-400 font-semibold uppercase ${selected == "about" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("about"),setComponent(<About/>),setTitle("About Me")}}>About</li>
                <li className={`cursor-pointer hover:text-yellow-400 font-semibold uppercase ${selected == "resume" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("resume"),setComponent(<Resume/>), setTitle("My Resume")}}>resume</li>
                <li className={`cursor-pointer hover:text-yellow-400 font-semibold uppercase ${selected == "project" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("project"),setComponent(<Projects/>), setTitle("My Projects")}}>Projects</li>
                <li className={`cursor-pointer hover:text-yellow-400 font-semibold uppercase ${selected == "contact" ? "text-yellow-400" : "text-white"}`} onClick={()=>{setSelected("contact"),setComponent(<Contact/>),setTitle("Contact Form")}}>Contact</li>
            </ul>
        </div>
    </div>
    <div id="main-content" className="px-5 pt-8 ">
      {component}
    </div>
    </>
  )
}

export default Navbar