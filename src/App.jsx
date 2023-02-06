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
import PrivateRoute from "./pages/PrivateRoute";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <SideBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
