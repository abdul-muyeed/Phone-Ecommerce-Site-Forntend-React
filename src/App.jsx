import "./index.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
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
import AdminLogin from "./pages/Admin/AdminLogin";
import Layout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import AdminProduct from "./pages/Admin/Product";

function App() {
  



  const url = window.location.href.split("/")[3].substring(0, 5);
  
  if(url === "admin"){
    return(
      <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/home" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="product"  element={<AdminProduct />} />

          </Route>
        </Routes>
      
      </BrowserRouter>
      </>
    )
  }else{
    return (
      <>
      
  
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/logIn" element={<LogIn/>} />
          <Route path="/product/:id" element={<Product/>} />
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
  
}
export default App;
