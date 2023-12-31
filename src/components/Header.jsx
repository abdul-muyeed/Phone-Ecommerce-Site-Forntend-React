import Logo from "../assets/logo";
import { useState, useEffect } from "react";
import {
  BiSolidChevronDown,
  BiMenuAltLeft,
  BiSearch,
  BiUserCircle,
  BiHeart,
  BiCart,
  BiXCircle,
  BiX,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userData from './userData.jsx'





const iconNum = `flex justify-center items-center absolute w-4 h-4 right-[-10px] top-[-5px]  bg-sky-500 rounded-xl text-xs font-semibold text-white`;
const run = () => {
  const desplegable = document.getElementById("desplegable");
  const turn = document.getElementById("turn");

  desplegable.classList.toggle("hidden");
  turn.classList.toggle("rotate-180");
};
const run1 = () => {
  const desplegable = document.getElementById("subnav");
  const turn = document.getElementById("turn1");

  desplegable.classList.toggle("hidden");
  turn.classList.toggle("rotate-180");
};

function Header() {
  const x = useSelector(state => state.productReducer.product)
   console.log(x)
  const count = useSelector((state) => state.cartReducer.totalItems  );
  const products = useSelector((state) => state.cartReducer.cart);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const [user, setUser] = useState([])
  console.log(products);
  const getUserData = async () => {
    let data = await userData()
    setUser(data)
  }

  
  
  
  const [Categories] = useState([
    {
      url: "/item1",
      name: "item1",
    },
    {
      url: "/item2",
      name: "item2",
    },
  ]);
  const [MenuBar] = useState([
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/",
      name: "Shop",
    },
    {
      url: "/",
      name: "About",
    },
    {
      url: "/",
      name: "Contact",
    },
  ]);
  const [show, setShow] = useState("hidden");
  const [drop, setDrop] = useState("top-[-999px]");
  const subcart = () => {
    const subcart = document.getElementById('subcart')
    subcart.classList.toggle('active')
  }

  
  useEffect(() => {
    getUserData()
  },[])
  const handleLogout = async () => {
    const res = await fetch(`/api/logout/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data)
    if(res.status === 200){
      window.location.reload()
    }else{
      alert("Something went wrong", res.status)
    }
    
  }
  console.log(user) 
    
  return (
    <>
    <div className='z-10 fixed h-full bg-white  right-0 subcart flex flex-col active shadow-lg' id='subcart'>
      <div className="h-full relative">
      <div className="flex justify-between p-2 bg-slate-400" >
      <div>Shopping Cart (1)</div>
      <div className="cursor-pointer" onClick={subcart}><BiX size={22}/></div>
      </div>
      {
        products.map((item, index) => {
          return(<>
          <div key={index} className="flex gap-2 items-center border-b">
        <div><img className="h-20 w-20 border m-1" src={item.image} alt="" /></div>
        <div><h1 className="text-sm">{item.name}</h1>
        <div>{item.quantity} x ৳{item.price}</div>
        </div>
        <div>
          <BiX size={22}/>
        </div>
      </div>
        
          </>)
            
      })
      }
        <div className="absolute w-full bottom-0">

        <div className="border-y py-2">
                    <div className="flex justify-between px-2">
                        <div className="text-left font-semibold">Subtotal</div>
                        <div className="text-right">৳ {totalPrice}</div>
                    </div>
                    <div className="flex justify-between border-b px-2">
                        <div className="text-left font-semibold">Shipping</div>
                        <div className="text-right">৳ 0</div>
                    </div>
                    <div className="flex justify-between pt-2 px-2">
                        <div className="text-left font-semibold">Total</div>
                      <div className="text-right">৳{totalPrice}</div>
                    </div>
                </div>
                <div className="flex justify-evenly items-center my-5">
                  <Link to="/checkout">
                  <button className=" bg-sky-500 text-white px-5 py-2 rounded-lg hover:bg-sky-700 "> Checkout</button>
                  </Link>
                  <Link to="/cart">
                  <button className=" bg-sky-500 text-white px-5 py-2 rounded-lg hover:bg-sky-700 "> View Cart</button>
                  </Link>
                    
                    

                </div>
          
          </div>

      </div>
      

    </div>
      <div
        className={` fixed ${drop} flex w-screen h-screen bg-gray-300 bg-opacity-75 align-center z-50 sm:hidden transition-all duration-500 ease-linear `}
      >
        <div className="flex justify-center items-center w-full h-full text-center ">
          <BiXCircle
            size={30}
            className="absolute top-32 right-1/2 transform  translate-x-1/2"
            onClick={() => setDrop("top-[-999px]")}
          />
          <ul className="shadow-md shadow-black-500/20 bg-[#F9FAFB] p-10 space-y-5">
            {MenuBar.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-sm font-semibold text-gray-600 cursor-pointer"
                >
                  {" "}
                  <Link to={item.url}>{item.name}</Link>
                </li>
              );
            })}
            <div className="flex justify-center items-center">
              <div className="opcion-con-desplegable relative" onClick={run1}>
                <div className="flex justify-center items-center cursor-pointer space-x-1">
                  <span className="text-sm font-semibold text-gray-600">
                    Categories
                  </span>
                  <BiSolidChevronDown
                    className="text-gray-600 duration-300"
                    id="turn1"
                  />
                </div>
                <ul
                  className=" absolute ml-4 mt-3 p-4 hidden bg-slate-300"
                  id="subnav"
                >
                  {Categories.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-sm font-semibold text-gray-600 cursor-pointer"
                      >
                        {" "}
                        <Link to={item.url}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <header className=" border-b border-gray-300">
        <nav>
          <div className="container bg-white">
            <div className="flex justify-center mt-2 sm:hidden">
              {" "}
              <Link to="/">
                <Logo />
              </Link>{" "}
            </div>
            <div className="flex sm:justify-between justify-evenly items-center py-3 sm:py-5">
              <span className="hidden sm:block">
                {" "}
                <Link to="/">
                  <Logo />
                </Link>
              </span>
              <div className="flex justify-between items-center">
                <span className="sm:hidden mr-1">
                  <BiMenuAltLeft
                    size={30}
                    className="sm:hidden text-gray-600"
                    onClick={() => setDrop("top-0")}
                  />
                </span>
                <input
                  className="border-2 border-sky-400 sm:w-96 w-40 p-[0.375rem] pl-3 text-sm outline-none rounded-l-md placeholder-black"
                  type="text"
                  placeholder="Search your product here..."
                />
                <div className="bg-sky-500 py-[6.9px] sm:py-[6.5px] px-2 rounded-r-md cursor-pointer">
                  <BiSearch color="white" size={22} />
                </div>
              </div>
              <div className="flex justify-between items-center sm:space-x-5 space-x-2 cursor-pointer ">
                <span className="relative">
                  <div
                    className={`absolute ml-4 mt-3 p-2 top-2 md:top-4 left-[-40px] bg-slate-300 z-10 w-36 text-center ${show}`}
                    onMouseEnter={() => setShow("")}
                    onMouseLeave={() => setShow("hidden")}
                  >
                    <span className="text-sm">Welcome</span>
                    <ul>
                      <li>
                        <div>
                        <Link
                          to="/login"
                          className="text-sm font-semibold text-gray-600 cursor-pointer"
                        >
                          {
                            user ? user.name : 'Login'
                          }
                          
                        </Link>
                        </div>
                        
                      </li>
                      <li>
                        {
                          user ? (<Link
                          className="text-sm font-semibold text-gray-600 cursor-pointer" onClick={handleLogout}
                        >
                          Logout
                        </Link>) : (<Link
                          to="/signin"
                          className="text-sm font-semibold text-gray-600 cursor-pointer"
                        >
                          Sign Up
                        </Link>)
                        }
                        
                      </li>
                    </ul>
                  </div>
                  <BiUserCircle
                    className="icon-size"
                    onMouseEnter={() => setShow("")}
                    onMouseLeave={() => setShow("hidden")}
                  />
                </span>
                <span className="relative cursor-pointer">
                  <div className={`${iconNum}`}>0</div>
                  <BiHeart className="icon-size" />
                </span>
                <span className="relative cursor-pointer">
                  <span className={`${iconNum}`}>{count}</span>
                  <BiCart onClick={subcart} className="icon-size" />
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className=" bg-[#F9FAFB]">
            <div className="container">
              <div className="hidden py-4 sm:flex justify-center items-center space-x-5">
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
                  <ul
                    className=" absolute ml-4 mt-3 p-2 hidden bg-slate-300 z-10"
                    id="desplegable"
                  >
                    {Categories.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-sm font-semibold text-gray-600 cursor-pointer"
                        >
                          {" "}
                          <Link to={item.url}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <ul className="flex justify-center items-center space-x-5 z-1">
                  {MenuBar.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-sm font-semibold text-gray-600 cursor-pointer"
                      >
                        {" "}
                        <Link to={item.url}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;


