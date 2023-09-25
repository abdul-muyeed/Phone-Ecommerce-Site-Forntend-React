import "./index.css";
import Logo from "./assets/logo";
import {
  BiSolidChevronDown,
  BiMenuAltLeft,
  BiSearch,
  BiUserCircle,
  BiHeart,
  BiCart,
} from "react-icons/bi";
const iconNum = `flex justify-center items-center absolute w-4 h-4 right-[-10px] top-[-5px]  bg-sky-500 rounded-xl text-xs font-semibold text-white`;

const run = (e) => {
  console.log(e.target);
  const desplegable = document.getElementById("desplegable");
  const turn = document.getElementById("turn");

  // Alternar la clase "hidden" para mostrar u ocultar el desplegable
  desplegable.classList.toggle("hidden");
  turn.classList.toggle("rotate-180");
};
function app() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="flex justify-between items-center py-5">
              <Logo />
              <div className="flex justify-between items-center">
                <input
                  className="border-2 border-sky-400 w-96 p-[0.375rem] pl-3 text-sm outline-none rounded-l-md placeholder-black"
                  type="text"
                  placeholder="Search your product here..."
                />
                <div className="bg-sky-500 py-[6.5px] px-2 rounded-r-md cursor-pointer">
                  <BiSearch color="white" size={22} />
                </div>
              </div>
              <div className="flex justify-between items-center space-x-5 cursor-pointer">
                <span>
                  <BiUserCircle size={28} />
                </span>
                <span className="relative cursor-pointer">
                  <div className={`${iconNum}`}>0</div>
                  <BiHeart size={28} />
                </span>
                <span className="relative cursor-pointer">
                  <span className={`${iconNum}`}>0</span>
                  <BiCart size={28} />
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="container">
            <div className=" mt-4 flex justify-center items-center space-x-5">
              <div className="opcion-con-desplegable" onClick={run}>
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
                <ul className="ml-4 hidden" id="desplegable">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Gestion de citas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Polizas
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="flex justify-center items-center space-x-5">
                <li className="text-sm font-semibold text-gray-600 cursor-pointer">
                  Home
                </li>
                <li className="text-sm font-semibold text-gray-600 cursor-pointer">
                  Shop
                </li>
                <li className="text-sm font-semibold text-gray-600 cursor-pointer">
                  About
                </li>
                <li className="text-sm font-semibold text-gray-600 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default app;
