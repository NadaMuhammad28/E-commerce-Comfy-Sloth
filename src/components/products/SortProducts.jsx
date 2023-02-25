import { useFilterContext } from "../../context/FilterProductsContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ViewButtons from "./Filters/ViewButtons";
import Search from "./Filters/Search";
import { FaFilter } from "react-icons/fa";
import { BiSort } from "react-icons/bi";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { sortOptions } from "../../utils/constants";
const SortProducts = () => {
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
        <Grid2 item xs={12} sm={3.5} md={1.5}>
          <ViewButtons />
        </Grid2>

        <Grid2
          item
          display={{ xs: "none", sm: "flex" }}
          xs={12}
          sm={8.5}
          justifyContent={{ sm: "flex-end", md: "flex-start" }}
          md={5.5}
          lg={6}
          container
          direction={"row"}
          alignItems="center"
        >
          <Grid2
            item
            lg={3}
            container
            justifyContent={{ xs: "flex-end", sm: "stretch" }}
          >
            <Search updateFilters={updateFilters} text={text} />
          </Grid2>
          <Grid2 item lg={9}>
            <p className="search-res-len">{products.length} products found</p>
          </Grid2>
        </Grid2>

        <Grid2
          item
          container
          xs={8}
          sm={9}
          md={4}
          lg={3.5}
          alignItems="center"
          paddingY={4}
          // justifyContent={{ xs: "start", md: "flex-end" }}
        >
          <form className=" form-sort-wrapper">
            <div className="sort-label">
              <BiSort /> <span> sort by</span>
            </div>
            <Select
              className="mui-select"
              style={{
                width: "100%",
                textTransform: "capitalize",
              }}
              id="sort"
              onChange={(e) => handleSorting(e)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {sortOptions.map((op) => {
                return (
                  <MenuItem name={op} value={op} key={op}>
                    {op}
                  </MenuItem>
                );
              })}
            </Select>
          </form>
        </Grid2>

        {/* is filter modal open? */}
        <Grid2
          item
          xs={4}
          sm={3}
          md={1}
          container
          justifyContent="flex-end"
          padding={0}
        >
          <button
            onClick={() => {
              showFliters();
            }}
            className="filter-modal-btn"
          >
            <FaFilter /> <span>filter </span>
          </button>
        </Grid2>
      </Grid2>
    </header>
  );
};

export default SortProducts;
