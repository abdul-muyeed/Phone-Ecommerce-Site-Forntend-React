import "./index.css";
import Logo from "./assets/logo";
import { BiSearch, BiUserCircle, BiHeart, BiCart } from "react-icons/bi";
const iconNum = `flex justify-center items-center absolute w-4 h-4 right-[-10px] top-[-5px]  bg-sky-500 rounded-xl text-xs font-semibold text-white`;

function app() {
  return (
    <>
      <header className="container">
        <nav className="flex justify-between items-center py-3">
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
        </nav>
      </header>
    </>
  );
}
export default app;
