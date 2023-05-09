import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NavBar, Footer, SideBar } from "./components/shared/index";
import ORderDone from "./components/stripe/OrderDone";

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
import { Suspense, useEffect } from "react";
import Loader from "./components/shared/Loade";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckOut />
                </PrivateRoute>
              }
            />
            {/* <Route path="/checkout" element={<CheckOut />} /> */}

            <Route path="/order-confirmation" element={<ORderDone />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
