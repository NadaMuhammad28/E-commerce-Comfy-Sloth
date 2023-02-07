import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "../shared/Loade";
import { useProductsContext } from "../../context/ProductsContect";
import Slider from "infinite-react-carousel";

const Temp = () => {
  const { feturedProducts: products, isProductsLoading: Loading } =
    useProductsContext();
  return (
    <section className="featured-products-section sec-wrapper">
      <div className="container">
        <div className="featured-products-wrapper">
          <header>
            <Grid2 container spacing={{ xs: 3 }}>
              <Grid2 item md={6}>
                <h3 data-aos="fade-right">
                  custom furniture <br />
                  built only for you
                </h3>
              </Grid2>
              <Grid2
                item
                md={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <p data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quisquam saepe id reiciendis sunt, repudiandae libero amet rem
                  quia quod?
                </p>
              </Grid2>
            </Grid2>
          </header>
          <Slider dots>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
          </Slider>
          <Link to="products">all products</Link>
        </div>
      </div>
    </section>
  );
};

export default Temp;
