import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/signin.jsx";
import LogIn from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import SignOut from "./components/signout";

function App() {
  return (
    <>
    

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/xxx" element={<Error/>} /> */}
        <Route path="*" element={<Error/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}
export default App;
