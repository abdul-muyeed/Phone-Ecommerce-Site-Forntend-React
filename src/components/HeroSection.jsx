import { Carousel } from 'react-responsive-carousel';
import { BiRightArrowAlt } from "react-icons/bi";
import slide from '../assets/home.jpg'
import { useState } from "react";

function HeroSection (){

    const [slider] = useState([
        {
          slide: slide,
          legend: 'Legend 1'
        },
        {
          slide: slide,
          legend: 'Legend 2'
        },
        {
          slide: slide,
          legend: 'Legend 3'
        }
      
      ])

    return (
        <>
        <section>
      <Carousel autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={3000}  transitionTime={500} infiniteLoop={true} emulateTouch={true}>
                {
                  slider.map((i, index) => {
                    return (
                    <div key={index} className="h-[590px] relative ">
                      <img className="h-full" src='src/assets/home.jpg' />
                    <div className="absolute legends">
                      <p className="max-w-2xl mb-32 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hello World</p>
                      <button className=" flex justify-center items-center py-2 px-3 bg-red-600 text-white font-semibold border border-red-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Shop Now <BiRightArrowAlt size={23}/> </button>
                    </div>
                    </div>
                    )
                  }
                    
                  )
                }
            </Carousel>

      </section>
        </>
    );
}

export default HeroSection;