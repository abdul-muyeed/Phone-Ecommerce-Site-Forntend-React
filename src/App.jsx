import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/signin.jsx";
import LogIn from "./pages/login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
    

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}
export default App;
