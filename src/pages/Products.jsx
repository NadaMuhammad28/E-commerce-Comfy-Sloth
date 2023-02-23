import ProductsList from "../components/products/productList";
import SortProducts from "../components/products/SortProducts";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import "../components/products/products.css";
import { useFilterContext } from "../context/FilterProductsContext";
import FiltersModal from "../components/products/FiltersModal";
const ProductsPage = () => {
  const { isFiltersModalOpen } = useFilterContext();

  return (
    <section className="products sec-wrapper container">
      <Grid2
        container
        spacing={{ xs: 3 }}
        direction="column"
        style={{ width: "100%" }}
      >
        {/* filters */}
        <Grid2 item xs={12}>
          <SortProducts />
        </Grid2>

        <Grid2 item xs={12}>
          <ProductsList />
        </Grid2>
      </Grid2>
      {isFiltersModalOpen && <div className="overlay"></div>}
      {isFiltersModalOpen && <FiltersModal />}
    </section>
  );
};

export default ProductsPage;
