import { useState } from 'react'
import Rating from '../components/Rating'
import { BiCheck } from 'react-icons/bi'

import Alert from '../components/Alert'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, totalItems, totalPrice } from '../components/CartSlice'

function Product() {
  const products = useSelector(state => state.productReducer.products)
   console.log(products)
  const dispatch = useDispatch()
  const {id} = useParams()
  let product = {}
    products.map((item) =>{
    if(item._id == id){
     product = item
    }
    
  })

  

  const {name, price, discount,image, description,   rating, numReviews, colorObj , brand, ram , rom, tag} = product

    const details = ["Product Details", "Specifications", "Reviews"]
    const [imagepre, setImagepre] =useState(image[0])
    const [quantity, setQuantity] = useState(1)
    
    const [shownum,setShownum] = useState(0)
    const handleQuantity = (e) => {
      let a = e.target.value
      if(a < 2){
      setQuantity(1)
    }else if(a > 20){
      setQuantity(20)
    }else{
      setQuantity(a)
    }
  }
  const addtoCartBtn = () => {
    console.log(payload)
    dispatch(addtoCart(payload))
    dispatch(totalPrice())
    dispatch(totalItems())
  
  showAlert('successful','Added to Cart','green','')
}

    const [view, setview] = useState("hidden");
    const [status, setStatus] = useState("");
    const [message, setmessage] = useState("");
    const [color, setcolor] = useState("");
    const [productColor, setproductColor] = useState("");
    const [productRam, setproductRam] = useState("");
    const [productRom, setproductRom] = useState("");
    
const showAlert = (status,message,color,show) => {
      
  setStatus(status);
  setmessage(message);
  setcolor(color);
  setview(show);
  setTimeout(() => {
    setview('hidden');
  }, 2000);
  }
  const payload = {
    id: id,
    name: name,
    price: discount,
    image: image[0],
    color: productColor,
    ram: productRam,
    rom: productRom,
    quantity: quantity,
    shippingCost: 0
  }

  return (
    <>
    <Alert status={status} message={message} color={color} show={view}/>
      <section className='bg-[#F9FAFB]'>
        <div  className='container'>
            <div className='grid grid-cols-2 gap-5 bg-white py-1 mt-3'>
                <div>
                    <img src={imagepre} alt="" />
                    <div className='flex justify-evenly items-center'>
                    <img onClick={()=> setImagepre(image[0])} src={image[0]} className='h-20 w-20 border border-gray-300 active:border-blue-600' alt="" />
                    <img onClick={()=> setImagepre(image[1])} src={image[1]} className='h-20 w-20 border border-gray-300 active:border-blue-600' alt="" />
                    <img onClick={()=> setImagepre(image[2])} src={image[2]} className='h-20 w-20 border border-gray-300 active:border-blue-600' alt="" />
                    <img onClick={()=> setImagepre(image[3])} src={image[3]} className='h-20 w-20 border border-gray-300 active:border-blue-600' alt="" />
                    </div>
                    
                </div>
                <div>
                    <h1 className='text-3xl'>{name}</h1>
                    <div className='font-semibold'>৳ {discount} <span className='line-through text-sm text-gray-500'>৳ {price}</span></div>
                    <br />
                    <div className='mb-5 flex justify-start gap-3 items-center'>
                    <label htmlFor="">Quantity :</label>
                    <div className="flex h-10 w-20  rounded-lg relative bg-transparent mt-1">
    <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-600 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={()=> setQuantity(quantity < 2 ? 1 : quantity-1)}>
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  " name="custom-input-number" onChange={handleQuantity} value={quantity}></input>
  <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-600 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={()=> setQuantity(quantity >= 20 ? 20 : quantity+1)}>
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div>
                    <span className='text-sm font-semibold text-white bg-green-600 px-2 py-1'>IN STOCK</span>
                    
                </div>
                <div className='mb-5 flex justify-start items-center gap-2'>
                <Rating rating={rating*10}/> <span>({numReviews})</span>
                </div>
                <div className='mb-5'>
                <ul className='flex gap-2'>
                <span>Color : </span>

                {
                    colorObj.value.map((value, index) => {
                      
                      return(
                        <>
                        <li key={index} className='relative'>
                    <input className='input-color z-50 absolute cursor-pointer opacity-0 h-6 w-6' type="radio" name='color' value={value} onChange={(e)=> setproductColor(e.target.value)} checked  />
                    <span className={`inline-block cursor-pointer h-6 w-6 rounded-full overflow-hidden`} style={
                      {
                        backgroundColor: `${value}`
                      }
                    }>
                      <span className='color-check absolute top-1/2 right-1/2 '><BiCheck size={20}/></span>
                    </span>
                  </li>
                        </>
                        
                      )
                    })
                  }
                  
                </ul>
                
                </div>
                <div className='mb-5'>
                  <ul className='flex gap-2'>
                    <span>RAM : </span>
                    {
                      ram.map((ram, index) => {
                        return(
                          <>
                            <li key={index}  className='relative'>
                    <input className='input-spec z-50 absolute cursor-pointer opacity-0  h-6 w-full' type="radio" value={ram} name='ram' onChange={(e)=> setproductRam(e.target.value)} checked/>
                    <span className={`inline-block cursor-pointer border bg-gray-300 h-6 w-15 `}>
                      <span className='h-6 w-15 p-1 text-sm flex justify-center items-center'>{ram}</span>
                    </span>
                  </li>
                          </>
                        )})
                    }
                  
                  
                  </ul>
                </div>
                <div className='mb-5'>
                  <ul className='flex gap-2'>
                    <span>ROM : </span>
                    {
                      rom.map((rom, index) => {
                        return(
                          <>
                            <li key={index}  className='relative'>
                    <input className='input-spec z-50 absolute cursor-pointer opacity-0  h-6 w-full' type="radio" value={rom} name='rom' onChange={(e)=> setproductRom(e.target.value)} checked/>
                    <span className={`inline-block cursor-pointer border bg-gray-300 h-6 w-15 `}>
                      <span className='h-6 w-15 p-1 text-sm flex justify-center items-center'>{rom}</span>
                    </span>
                  </li>
                          </>
                        )})
                    }
                  
                  
                  </ul>
                </div>
                <div className='mb-5'>
                  <button onClick={addtoCartBtn} type="button" className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Add to Cart</button>
                  <button type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Buy Now</button>
                </div>
                <div>
                  <div className='text-xs'>Brand: <span className='text-blue-400'> {brand}</span></div>
                  <div className='text-xs'>Tag: <span className='text-blue-400'>{
                    tag.map((tag, index) => {
                      return(
                        <>
                        <span key={index} className='text-blue-400'>{tag}, </span>
                        </>
                      )
                    })
                  }</span></div>
                </div>
                </div>
                
            </div>
            <div className='my-10 border'>
              <div className='mb-5 bg-slate-300 px-2 py-2'>
                <ul className='flex  gap-3'>
                  {
                    details.map((detail, index) => {
                      if(index == shownum){
                        return(
                          <>
                            <li key={index} className={`text-blue-500 cursor-pointer`} onClick={()=>setShownum(index)}>{detail}</li>
                          </>
                        )
                      }else{
                        return(
                          <>
                            <li key={index} className={`hover:text-blue-500 cursor-pointer`} onClick={()=>setShownum(index)}>{detail}</li>
                          </>
                        )
                      }
                      
                    })
                  }

                </ul>
              </div>
              <div className='bg-white p-3'>
                <p>
                  {description} 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga doloremque quaerat aperiam dolore velit similique temporibus ea quisquam accusamus dolores cupiditate a, ipsum totam molestias nihil! Dolore, ducimus alias.
                </p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Product;