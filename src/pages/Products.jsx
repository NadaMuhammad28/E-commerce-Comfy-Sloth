import ProductsList from "../components/products/productList";
import FilterProducts from "../components/products/FilterProducts";
import SortProducts from "../components/products/SortProducts";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import "../components/products/products.css";
const ProductsPage = () => {
  return (
    <main className="products sec-wrapper">
      <div className="container">
        <Grid2 container spacing={{ xs: 3 }} alignItems="center">
          {/* filters */}
          <Grid2 item xs={3}>
            <FilterProducts />
          </Grid2>

          {/* sort and products subgrid */}
          <Grid2 item xs={9}>
            <Grid2 container direction="column">
              {/* sort */}
              <Grid2 item xs={12}>
                <SortProducts />
              </Grid2>
              {/* products */}
              <Grid2
                item
                xs={12}
                container
                alignItems="center"
                justifyContent="center"
              >
                <ProductsList />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
    </main>
  );
};

export default ProductsPage;
