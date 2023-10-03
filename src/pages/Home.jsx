import Header from "../components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from "../components/HeroSection";
import Trending from "../components/Trending";
import ProductPreview from "../components/ProductPreview";
import Footer from "../components/Footer";






function Home() {
  


 
  return (
    <>
      
      <Header/>
      <HeroSection/>
      <Trending />
      <ProductPreview />
      <Footer/>
      </>
  )
}
export default Home
