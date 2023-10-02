import {BiSolidStar} from 'react-icons/bi'
import { useState } from "react";
import product from '../assets/product-1.webp'

function Card() {
    const [show, setShow] = useState("");



  return (
    <>
      <div onMouseEnter={()=> setShow('chartshow')} onMouseLeave={()=> setShow('')} className="w-45 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg relative">
        <img
          className="h-45 w-full object-cover object-center"
          src={product}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="mb-2 text-base font-medium  text-gray-900">
          Realme GT Master Edition
          </h2>
          <div className=" mt-2.5 mb-5">
          
					<span className="flex w-fit justify-center items-center gap-2 bg-[#C8E9E9] text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"> <BiSolidStar color='#FFE900'/> <span>5.0 <span className='text-gray-600'>(123)</span></span>  </span>
				</div>
          <div className="flex items-center">
            
            <p className="mr-2 text-lg font-semibold text-gray-900 ">
              $20.00
            </p>
            <p className="text-xs  font-md text-gray-500 line-through ">
              $25.00
            </p>
            <p className="ml-auto text-md font-medium text-green-500">
              -20%
            </p>
          </div>
        </div>
        <div className={`absolute bg-blue-500 text-white text-md font-semibold h-20 w-full flex justify-center pt-2 -bottom-9 opacity-0 cursor-pointer  ${show}`}> Add to Cart </div>
      </div>
    </>
  );
}

export default Card;