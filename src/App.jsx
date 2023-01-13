import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NavBar, Footer, SideBar } from "./components/shared/index";
import {
  Home,
  About,
  Error,
  SingleProduct,
  Products,
  CheckOut,
  Cart,
} from "./pages/index";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />

          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
