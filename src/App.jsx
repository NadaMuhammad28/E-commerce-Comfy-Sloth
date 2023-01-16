import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NavBar, Footer, SideBar } from "./components/shared/index";
import { ProductsContext } from "./context/ProductsContect";
import {
  Home,
  About,
  Error,
  SingleProduct,
  Products,
  CheckOut,
  Cart,
} from "./pages/index";
import { NavContext } from "./context/NavContext";
function App() {
  return (
    <ProductsContext>
      <BrowserRouter>
        <div className="p-relative">
          <NavContext>
            <NavBar />
            <SideBar />
          </NavContext>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />

          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductsContext>
  );
}

export default App;
