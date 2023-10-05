import image1 from '../assets/s21-1.webp'
import image2 from '../assets/s21-2.webp'
import image3 from '../assets/s21-3.webp'
import image4 from '../assets/s21-4.webp'
import { useState } from 'react'
import Rating from '../components/Rating'
import { BiCheck } from 'react-icons/bi'
function Product() {
    const [image, setImage] =useState(image1)
    const [quantity, setQuantity] = useState(1)
    const [colors] = useState(['red', 'blue', 'green'])
    const [roms] = useState(['64GB', '128GB', '256GB','512GB','1TB'])
    const [rams] = useState(['4GB', '8GB', '16GB','32GB','64GB'])
    const [details] = useState(['Product Details', 'Review', 'FAQ'])
    const [shownum,setShownum] = useState(0)
    const handleQuantity = (e) => {
      let a = e.target.value
      if(a < 1){
      setQuantity(1)
    }else if(a > 20){
      setQuantity(20)
    }else{
      setQuantity(a)
    }
  }
    
  return (
    <>
      <section className='bg-[#F9FAFB]'>
        <div  className='container'>
            <div className='grid grid-cols-2 gap-5 bg-white py-1'>
                <div>
                    <img src={image} alt="" />
                    <div className='flex justify-evenly items-center'>
                    <img onClick={()=> setImage(image1)} src={image1} className='h-20 w-20 border border-gray-300' alt="" />
                    <img onClick={()=> setImage(image2)} src={image2} className='h-20 w-20 border border-gray-300' alt="" />
                    <img onClick={()=> setImage(image3)} src={image3} className='h-20 w-20 border border-gray-300' alt="" />
                    <img onClick={()=> setImage(image4)} src={image4} className='h-20 w-20 border border-gray-300' alt="" />
                    </div>
                    
                </div>
                <div>
                    <h1 className='text-3xl'>Samsung Galaxy S23 Ultra 5G</h1>
                    <div className='font-semibold'>৳ 117,990 <span className='line-through text-sm text-gray-500'>৳ 120,000</span></div>
                    <br />
                    <div className='mb-5 flex justify-start gap-3 items-center'>
                    <label htmlFor="">Quantity :</label>
                    <div className="flex h-10 w-20  rounded-lg relative bg-transparent mt-1">
    <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-600 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={()=> setQuantity(quantity < 1 ? 1 : quantity-1)}>
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  " name="custom-input-number" onChange={handleQuantity} value={quantity}></input>
  <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-600 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={()=> setQuantity(quantity >= 20 ? 20 : quantity+1)}>
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div>
                    <span className='text-sm font-semibold text-white bg-green-600 px-2 py-1'>IN STOCK</span>
                    
                </div>
                <div className='mb-5'>
                <Rating rating={22}/>
                </div>
                <div className='mb-5'>
                <ul className='flex gap-2'>
                <span>Color : </span>

                {
                    colors.map((color, index) => {
                      return(
                        <>
                        <li key={index} className='relative'>
                    <input className='input-color z-50 absolute cursor-pointer opacity-0 h-6 w-6' type="radio" name='color' />
                    <span className={`inline-block cursor-pointer bg-${color}-600 h-6 w-6 rounded-full overflow-hidden`}>
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
                      rams.map((ram, index) => {
                        return(
                          <>
                            <li key={index}  className='relative'>
                    <input className='input-spec z-50 absolute cursor-pointer opacity-0  h-6 w-full' type="radio" name='ram' />
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
                      roms.map((rom, index) => {
                        return(
                          <>
                            <li key={index}  className='relative'>
                    <input className='input-spec z-50 absolute cursor-pointer opacity-0  h-6 w-full' type="radio" name='rom' />
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
                  <button type="button" className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Add to Cart</button>
                  <button type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Buy Now</button>
                </div>
                <div>
                  <div className='text-xs'>Brand: <span className='text-blue-400'>Samsung</span></div>
                  <div className='text-xs'>Tag: <span className='text-blue-400'> Mobile, Samsung</span></div>
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