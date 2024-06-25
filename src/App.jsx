import "./App.css";
import About from "./components/About";
import Navbar from "./components/bars/Navbar";
import Sidebar from "./components/bars/Sidebar";

function App() {
  

  return (
  <>
  <div id="container" className="flex justify-around w-screen h-screen p-8 gap-5">
    <div id="side-bar" className="w-96   bg-zinc-900  p-5 pt-10  rounded-xl overflow-hidden shadow-lg"><Sidebar/></div>
    <div id="content" className="w-full  bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
    <div id="navbar">
    <Navbar/>
    </div>
    
    </div>
  </div>
  
  </>
  )
}

export default App;
