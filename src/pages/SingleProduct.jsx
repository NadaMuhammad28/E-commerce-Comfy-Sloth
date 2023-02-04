import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProductsContext } from "../context/ProductsContect";
import { single_product_url as url } from "../utils/constants";
import Loading from "../components/shared/Loade";
import Error from "./ErrorPage";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import "../components/products/singleProduct/product.css";

//single product components
import Images from "../components/products/singleProduct/Images";
import Stars from "../components/products/singleProduct/Stars";
import FormatPrice from "../components/products/FormatPrice";
import Colors from "../components/products/singleProduct/colors";
import AddToCart from "../components/products/AddToCart";
import { Grid } from "@mui/material";
const SingleProduct = () => {
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    singleProduct: product,
    issingleProductLoading: loading,
    singleProductErr: err,
  } = useProductsContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (err) {
    setTimeout(() => {
      navigate("/");
    }, 1000);
    return <Error />;
  }
  if (loading) return <Loading />;

  ////////////////////////////////

  const {
    id: sku,
    stock,
    price,
    company: brand,
    reviews,
    stars,
    images,
    description,
    name,
    colors,
  } = product;
  return (
    <main className="sec-wrapper">
      <div className="container">
        <section className="product-wrapper">
          <Grid2 container spacing={6}>
            <Grid2 item xs={12} md={5}>
              <Images images={images} />
            </Grid2>
            <Grid2 item md={6}>
              <div className="product-content">
                <h2>{name}</h2>
                <Stars reviews={reviews} stars={stars} />
                <FormatPrice price={price} />
                <p className="product-desc ">{description} </p>
                <p className="product-available p-info">
                  <span>Available:</span>
                  {stock > 0 ? "in stock" : "out of stock"}
                </p>
                <p className="product-sku p-info">
                  <span>SKU:</span>
                  {sku}
                </p>
                <p className="product-brand p-info">
                  <span>Brand:</span>
                  {brand}
                </p>
                <hr />
                {stock > 0 && <AddToCart product={product} />}
              </div>
            </Grid2>
          </Grid2>
        </section>
      </div>
    </main>
  );
};

export default SingleProduct;
