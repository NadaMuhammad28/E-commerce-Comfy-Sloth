import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/FilterProductsContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
const SortProducts = () => {
  const sortOptions = [
    "",
    "Price (Lowest)",
    "Price (Highest)",
    "Name (A-Z)",
    "Name (Z-A)",
  ];
  const {
    filteredProducts: products,
    grid_view,
    showListView,
    showGridView,
    handleSorting,
  } = useFilterContext();

  return (
    <header className="sort-wrapper">
      <Grid2
        alignItems="center"
        container
        spacing={{}}
        // direction={{ xs: "column", md: "row" }}
      >
        <Grid2 item lg={1.5} xl={1}>
          <div className="views-btns-container d-flex">
            <button
              className={
                grid_view ? "view-btn  active-view" : "view-btn  unactive-view"
              }
              onClick={() => showGridView()}
            >
              <BsFillGridFill />
            </button>
            <button
              className={
                !grid_view ? "view-btn  active-view" : "view-btn  unactive-view"
              }
              onClick={() => showListView()}
            >
              <BsList />
            </button>
          </div>
        </Grid2>

        {/*  */}
        <Grid2 lg={3} xl={2}>
          <p>{products.length} products found</p>
        </Grid2>
        <Grid2 item xs={0} lg={2.5} xl={3}>
          <hr />
        </Grid2>
        <Grid2
          item
          container
          xs={8}
          lg={5}
          xl={6}
          alignItems="center"
          justifyContent={{ xs: "start", md: "flex-end" }}
        >
          <form className="d-flex">
            <label htmlFor="sort">Sort By</label>
            <select id="sort" onChange={(e) => handleSorting(e)}>
              {sortOptions.map((op) => {
                return (
                  <option key={op} name={op} value={op}>
                    {op}
                  </option>
                );
              })}
            </select>
          </form>
        </Grid2>
      </Grid2>
    </header>
  );
};

export default SortProducts;
