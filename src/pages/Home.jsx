import Header from "../components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide from '../assets/home.jpg'


function Home() {
 

 
  return (
    <>
      <Header/>
      <section>
      <Carousel autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={3000}  transitionTime={500} infiniteLoop={true} emulateTouch={true}>
                <div className="h-screen">
                    <img className="h-4/5" src={slide} />
                    <p className="legends">Legend 1</p>
                </div>
                <div className="h-screen">
                    <img className="h-4/5" src={slide} />
                    <p className="legends">Legend 2</p>
                </div>
                <div className="h-screen">
                    <img className="h-4/5" src={slide} />
                    <p className="legends ">Legend 3</p>
                </div>
            </Carousel>

      </section>
    </>
  )
}
export default Home
