import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "../shared/Loade";
import { useProductsContext } from "../../context/ProductsContect";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

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

          <div className="featured-products-slider-wrapper">
            {products.length !== 0 ? (
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                {/* {products &&
                  products.map((product) => {
                    return (
                      <Link>
                        <article>
                          <img src={product.image} alt={product.name} />

                          <div>
                            <h5>{product.name}</h5>
                            {}
                          </div>
                        </article>
                      </Link>
                    );
                  })} */}
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
              </OwlCarousel>
            ) : (
              <Loader />
            )}
          </div>

          <Link to="products">all products</Link>
        </div>
      </div>
    </section>
  );
};

export default Temp;
