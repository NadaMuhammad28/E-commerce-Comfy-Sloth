import { useProductsContext } from "../../context/ProductsContect";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { useEffect, useState } from "react";
import Loader from "../../components/shared/Loade";
import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
const FeaturedProducts = () => {
  const { feturedProducts: products, isProductsLoading: Loading } =
    useProductsContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (products) {
      if (index < 0) setIndex(products.length - 1);
      if (index > products.length - 1) setIndex(0);
    }
  }, [index, products]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  });
  return (
    <section className="featured-products-section">
      <div className="container">
        <div className="featured-products-wrapper">
          <header>
            <h2>featured produts</h2>
            <div className="underline"></div>
          </header>
          <div className="featured-products-slider-wrapper">
            {products &&
              products.map((product, productIndex) => {
                //slider logics
                let slidePosition = "next-slide";
                if (index === productIndex) slidePosition = "active-slide";
                if (
                  productIndex === index - 1 ||
                  (index === 0 && productIndex == products.length - 1)
                ) {
                  slidePosition = "last-slide";
                }
                return (
                  <article key={product.id} className={slidePosition}>
                    <Link to={`products/${product.id}`}>
                      <img
                        src={product.image}
                        className="product-img"
                        alt={product.name}
                      />
                    </Link>
                    <h4> {product.name}</h4>
                    <p> {product.price}</p>
                  </article>
                );
              })}

            <button className="slide-left" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className="slide-right" onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </div>
          <Link to="products">all products</Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
