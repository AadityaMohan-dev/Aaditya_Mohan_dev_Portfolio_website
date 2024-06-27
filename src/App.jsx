import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import { NavContextProvider } from "./components/Context/NavContext";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Navbar from "./components/bars/Navbar";
import Sidebar from "./components/bars/Sidebar";

function App() {
  return (
    <>
      <div
        id="container"
        className="flex flex-col md:flex-row md:justify-around w-screen md:h-screen md:p-8 gap-5"
      >
        <div
          id="side-bar"
          className="w-full md:w-96   bg-zinc-900   pt-5  rounded-xl overflow-hidden shadow-lg "
        >
          <div id="heading" className="w-96 h-10 items-center px-5 block md:hidden">
              <h1 className="text-4xl">Portfolio</h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FAB005/horizontal-line.png"
                alt="horizontal-line"
              />
            </div>
          <div className="p-5"><Sidebar /></div>
        </div>
        <div
          id="content"
          className="w-full  bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
        >
          <div id="navbar" className="hidden sm:block">
            <Navbar/>
            
          </div>
          <div
            id="content"
            className="flex p-5 sm:hidden  flex-col justify-center"
          >
            <div id="heading" className="w-96 h-10 items-center px-1">
              <h1 className="font-customFont text-4xl">About Me</h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FAB005/horizontal-line.png"
                alt="horizontal-line"
              />
            </div>
            <div id="div">
              <About />
            </div>
            <div id="heading" className="w-96 h-10 items-center px-1 py-5">
              <h1 className="font-customFont text-4xl">My Resume</h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FAB005/horizontal-line.png"
                alt="horizontal-line"
              />
            </div>
            <div id="div" className="py-10 pt-20">
              <Resume />
            </div>
            <div id="heading" className="w-96 h-10 items-center px-1">
              <h1 className="font-customFont text-4xl">My Projects</h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FAB005/horizontal-line.png"
                alt="horizontal-line"
              />
            </div>
            <div id="div" className="py-10">
              <Projects />
            </div>
            <div id="heading" className="w-96 h-10 items-center px-1">
              <h1 className="font-customFont text-4xl">Contact Form</h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FAB005/horizontal-line.png"
                alt="horizontal-line"
              />
            </div>
            <div id="div" className="py-10">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
