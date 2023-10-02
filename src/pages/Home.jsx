import Header from "../components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from "../components/HeroSection";
import iphone from '../assets/iphone.jpg'
import samsung from '../assets/samsung.webp'
import headphone from '../assets/headphone.jpg'
import headphone1 from '../assets/headphone-1.jpg'
import { BiSolidHot } from "react-icons/bi";

function Home() {

  

 
  return (
    <>
      <Header/>
      <HeroSection/>
      <section>
        <div className="container">
          <div className="h-screen mt-10">
            <div className="grid grid-row-2 grid-flow-col gap-4">
              <div className=" row-span-2  rounded-2xl overflow-hidden relative">
                <img src={iphone} className="h-full w-full" alt="" />
                <div className="absolute top-[37%] left-10">
                <h1 className="mb-3 text-white font-semibold text-lg">IPHONE</h1>
                <button className="flex ml-1 justify-center text-sm items-center py-1 px-2 bg-red-600 text-white font-semibold border border-red-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200"> Shop Here</button>
                </div>
                
              </div>
              <div className="row-span-1 rounded-2xl overflow-hidden relative">
                <img src={headphone1} className="h-full w-full" alt="" />
                <div className="absolute top-[35%] left-10">
                <h1 className="flex justify-center text-md items-center text-red-600 font-semibold ">HOT DEAL !! <BiSolidHot/></h1>
                <p className="text-white">50% OFF</p>
                </div>
              </div>
              <div className=" row-span-1 rounded-2xl  overflow-hidden relative">
                <img src={headphone} className="h-full w-full" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="mb-3 font-semibold text-lg">HEADPHONE</h1>
                <button className="flex ml-1 justify-center text-sm items-center py-1 px-2 bg-red-600 text-white font-semibold border border-red-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200"> Shop Here</button>
                </div>
              </div>
              
              <div className="row-span-2 rounded-2xl overflow-hidden relative">
                <img src={samsung} className="h-full w-full" alt="" />
                <div className="absolute top-[37%] left-10">
                <h1 className="mb-3 text-white font-semibold text-lg">SAMSUNG</h1>
                <button className="flex ml-1 justify-center text-sm items-center py-1 px-2 bg-red-600 text-white font-semibold border border-red-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200"> Shop Here</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </>
  )
}
export default Home
