import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
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
  return (
    // <ScrollContainer>
    //   <ScrollPage>
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

          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    //   </ScrollPage>
    // </ScrollContainer>
  );
}

export default App;
