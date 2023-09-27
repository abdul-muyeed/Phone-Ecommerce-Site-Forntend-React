import "./index.css";
import Logo from "./assets/logo";
import { useState } from "react";
import {
  BiSolidChevronDown,
  BiMenuAltLeft,
  BiSearch,
  BiUserCircle,
  BiHeart,
  BiCart,
} from "react-icons/bi";
const iconNum = `flex justify-center items-center absolute w-4 h-4 right-[-10px] top-[-5px]  bg-sky-500 rounded-xl text-xs font-semibold text-white`;
const run = () => {
  const desplegable = document.getElementById("desplegable");
  const turn = document.getElementById("turn");

  desplegable.classList.toggle("hidden");
  turn.classList.toggle("rotate-180");
};


function App() {
  const [Categories] = useState(['Item 1', 'Item 2'])
  const [MenuBar] = useState(['Home', 'Shop', 'About', 'Contact'])

 
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="flex justify-center mt-2git sm:hidden"><Logo /></div>
            <div className="flex sm:justify-between justify-evenly items-center py-5">
            <span className=""><BiMenuAltLeft size={23} className=" sm:hidden text-gray-600" /></span>
              <span className="hidden sm:block"><Logo /></span>
              <div className="flex justify-between items-center">
                <input
                  className="border-2 border-sky-400 sm:w-96 w-40 p-[0.375rem] pl-3 text-sm outline-none rounded-l-md placeholder-black"
                  type="text"
                  placeholder="Search your product here..."
                />
                <div className="bg-sky-500 py-[6.9px] sm:py-[6.5px] px-2 rounded-r-md cursor-pointer">
                  <BiSearch color="white" size={22} />
                </div>
              </div>
              <div className="flex justify-between items-center sm:space-x-5 space-x-2 cursor-pointer">
                <span>
                  <BiUserCircle  className="icon-size"/>
                </span>
                <span className="relative cursor-pointer">
                  <div className={`${iconNum}`}>0</div>
                  <BiHeart  className="icon-size" />
                </span>
                <span className="relative cursor-pointer">
                  <span className={`${iconNum}`}>0</span>
                  <BiCart className="icon-size" />
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="container">
            <div className="hidden mt-4 sm:flex justify-center items-center space-x-5">
              <div className="opcion-con-desplegable relative" onClick={run}>
                <div className="flex justify-center items-center cursor-pointer space-x-1">
                  <BiMenuAltLeft size={20} className=" text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">
                    Categories
                  </span>
                  <BiSolidChevronDown
                    className="text-gray-600 duration-300"
                    id="turn"
                  />
                </div>
                <ul className=" absolute ml-4 mt-3 p-2 hidden bg-slate-300" id="desplegable">
                  {
                    Categories.map((item, index) => {
                      return <li key={index} className="text-sm font-semibold text-gray-600 cursor-pointer">
                        {item}
                      </li>
                    })
                  }
                </ul>
              </div>
              <ul className="flex justify-center items-center space-x-5">
                {
                  MenuBar.map((item, index) => {
                    return <li key={index} className="text-sm font-semibold text-gray-600 cursor-pointer">
                      {item}
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default App;
