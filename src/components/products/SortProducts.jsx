import { useFilterContext } from "../../context/FilterProductsContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ViewButtons from "./Filters/ViewButtons";
import Search from "./Filters/Search";
import { BiFilterAlt } from "react-icons/bi";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
    handleSorting,
    showFliters,
    updateFilters,
    filters,
  } = useFilterContext();
  let { text } = filters;

  return (
    <header className="sort-wrapper">
      <Grid2
        alignItems="center"
        container
        spacing={1}
        paddingX={2}
        // direction={{ xs: "column", md: "row" }}
      >
        <Grid2 item xs={6} md={1.5}>
          <ViewButtons />
        </Grid2>

        <Grid2 item xl={2}>
          <Search updateFilters={updateFilters} text={text} />
        </Grid2>

        {/*  */}
        <Grid2 lg={3} xl={2}>
          <p>{products.length} products found</p>
        </Grid2>
        {/* <Grid2 item xs={0} lg={2.5} xl={3}>
          <hr />
        </Grid2> */}
        <Grid2
          item
          container
          xs={8}
          lg={5}
          alignItems="center"
          justifyContent={{ xs: "start", md: "flex-end" }}
        >
          <form className="">
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

        {/* is filter modal open? */}
        <Grid2 item xl={1} style={{ backgroundColor: "red" }}>
          <button
            onClick={() => {
              showFliters();
            }}
            className="filter-modal-btn"
          >
            <BiFilterAlt /> filter
          </button>
        </Grid2>
      </Grid2>
    </header>
  );
};

export default SortProducts;
