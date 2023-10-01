import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/signin.jsx";
import LogIn from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
