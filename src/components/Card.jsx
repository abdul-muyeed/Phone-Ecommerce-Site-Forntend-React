/* eslint-disable react/prop-types */
import { BiSolidStar, BiHeart } from "react-icons/bi";
import { useState } from "react";
import Alert from "./Alert";
import { useDispatch } from "react-redux";
import { addtoCart, totalItems, totalPrice } from "./CartSlice";
import { Link } from "react-router-dom";

function Card(props) {
  // eslint-disable-next-line react/prop-types

  const dispatch = useDispatch();

  const product = props.product;

  const {
    _id,
    name,
    price,
    discount,
    ram,
    colorObj,
    rom,
    image,
    rating,
    numReviews,
  } = product;
  const payload = {
    id: _id,
    name: name,
    price: discount,
    image: image[0],
    color: colorObj.value[0],
    ram: ram[0],
    rom: rom[0],
    quantity: 1,
    shippingCost: 0,
  };
  const addToCartBtn = () => {
    dispatch(addtoCart(payload));
    dispatch(totalPrice());
    dispatch(totalItems());

    showAlert("successful", "Added to Cart", "green", "");
  };
  const [show, setShow] = useState("");
  const [view, setview] = useState("hidden");
  const [status, setStatus] = useState("");
  const [message, setmessage] = useState("");
  const [color, setcolor] = useState("");

  const showAlert = (status, message, color, show) => {
    setStatus(status);
    setmessage(message);
    setcolor(color);
    setview(show);
    setTimeout(() => {
      setview("hidden");
    }, 2000);
  };

  return (
    <>
      <Alert status={status} message={message} color={color} show={view} />

      <div
        onMouseEnter={() => setShow("chartshow")}
        onMouseLeave={() => setShow("")}
        className="w-45 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg relative"
      >
        <img
          className="h-45 w-full object-cover object-center"
          src={image[0]}
          alt="Product Image"
        />
        <div className="p-4">
          <Link to={`../product/${_id}`}>
            <h2 className="mb-2 text-base font-medium  text-gray-900">
              {name}
            </h2>
          </Link>
          <div className="flex  flex-col  h-20">
            <div className=" mt-2.5 mb-5 flex justify-between">
              <span className="flex w-fit justify-center items-center gap-2 bg-[#C8E9E9] text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                {" "}
                <BiSolidStar color="#FFD700" />{" "}
                <span>
                  {rating} <span className="text-gray-600">({numReviews})</span>
                </span>{" "}
              </span>
              <BiHeart color="red" />
            </div>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 ">
                ${discount}
              </p>
              <p className="text-xs  font-md text-gray-500 line-through ">
                ${price}
              </p>
              <p className="ml-auto text-md font-medium text-green-500">
                {Math.round(((price - discount) / price) * 100)}% off
              </p>
            </div>
          </div>
        </div>
        <div
          className={`absolute bg-blue-500 text-white text-md font-semibold h-20 w-full flex justify-center pt-2 -bottom-9 opacity-0 cursor-pointer  ${show}`}
          onClick={addToCartBtn}
        >
          {" "}
          Add to Cart{" "}
        </div>
      </div>
    </>
  );
}

export default Card;
