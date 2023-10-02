import Header from "../components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from "../components/HeroSection";
import Trending from "../components/Trending";
import { useState } from "react";
import Card from "../components/Card";


function Home() {
  const items = ['Relevent', 'New Arrival','Best Selling','Top Rated']
  const [active, setActive] = useState(0)


 
  return (
    <>
      <Header/>
      <HeroSection/>
      <Trending />
      <section className="bg-[#f5f5f5]">
        <div className="container">
          <div className="h-screen">
            <div className="flex justify-between bg-white shadow-md rounded-3xl overflow-hidden mb-5">
            <ul className="flex justify-start">
              {items.map((item, index) => {
                if(index === active){
                  return <li key={index} onClick={(()=>{setActive(index)})} className="border-r-2 py-3 px-5 text-white transition ease-in duration-200 font-semibold bg-red-500 cursor-pointer">{item}</li>
                }else{
                  return <li key={index} onClick={(()=>{setActive(index)})}  className="border-r-2 py-3 px-5 transition ease-in duration-200 cursor-pointer">{item}</li>
                }
              })}
            </ul>
            <div className="border-l-2 py-3 px-5">All Products</div>
            </div>
            <div className="grid grid-cols-5 gap-4 ">
              
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>

            
          </div>
        </div>
      </section>
      
      
    </>
  )
}
export default Home
