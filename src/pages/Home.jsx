import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from "../components/HeroSection";
import Trending from "../components/Trending";
import ProductPreview from "../components/ProductPreview";
import { useGlobalContext } from "../components/context";





function Home() {

  const name = useGlobalContext()
  


 
  return (
    <>
    {console.log(name)}
    
      <HeroSection/>
      <Trending />
      <ProductPreview />
      
      </>
  )
}
export default Home
