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
import ProductList from "./components/ProductList";
import Checkout from "./pages/Checkout";
import NotLoggedin from "./components/NotLoggedin";
import PrivateRoute from "./components/PrivateRoute";

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
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/checkout" element={
        
        <PrivateRoute>
          <Checkout/>
        </PrivateRoute>
        
        } />
        <Route path="/notloggedin" element={<NotLoggedin/>} />
        <Route path="*" element={<Error/>} />

        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}
export default App;
