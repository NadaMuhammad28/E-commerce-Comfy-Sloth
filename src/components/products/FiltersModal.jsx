import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useFilterContext } from "../../context/FilterProductsContext";
import { isMAtched, generateFilters, formatPrice } from "../../utils/helpers";
import SelectOptions from "./Filters/select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FiltersModal = () => {
  const {
    closeFilters,
    isFiltersModalOpen,

    updateFilters,
    filters,
    clearFilters,
    products,
  } = useFilterContext();
  let modalClass = isFiltersModalOpen ? "modal-opend" : "modal-closed";
  let {
    isFreeShippingChecked,
    color,
    category,
    company,
    minPrice,
    price,
    maxPrice,
  } = filters;

  // let colors = deleteDuplicates(products, "colors");

  let { companies, categories, colors } = generateFilters(
    products,
    "company",
    "category",
    "colors"
  );

  return (
    <div className="filter-modal-wrapper d-flex overlay">
      <div className={modalClass} style={{ height: "90vh", margin: "auto" }}>
        <header className="d-flex">
          <button onClick={() => closeFilters()}>
            <AiOutlineClose />
          </button>
          <h4>Filter By</h4>
          <button type="button" onClick={clearFilters}>
            clear filters
          </button>
        </header>
        <div className="filters-form-wrapper d-flex">
          <form className="d-flex-col filters-form">
            {/*=============================================================================================================== */}

            {/* COLORS */}
            <div className="colors-wrapper ">
              <label>colors </label>
              <div className="p-clrs-container d-flex">
                {colors &&
                  colors.map((clr, index) => {
                    return (
                      <button
                        onClick={updateFilters}
                        name="color"
                        key={index}
                        value={clr}
                        className="product-clr-op"
                        style={{ backgroundColor: ` ${clr}` }}
                      >
                        {clr == "all" ? "all" : ""}
                        <div
                          className={
                            isMAtched(clr, color)
                              ? "clr-checked"
                              : "clr-overlay"
                          }
                        >
                          {isMAtched(clr, color) ? <BsCheckLg /> : ""}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/*=============================================================================================================== */}

            {/* CATEGORIES */}
            <div className="categories-wrapper d-flex-col">
              <label htmlFor="categories">Categories</label>
              <Select
                style={{
                  margin: "0 !important",
                  padding: "0",
                  textTransform: "capitalize",
                }}
                id="categories"
                name="category"
                value={category}
                onChange={updateFilters}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {categories &&
                  categories.map((cat) => {
                    return (
                      <MenuItem name={cat} value={cat} key={cat}>
                        {cat}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
            {/*=============================================================================================================== */}

            {/* companies */}

            <div className="categories-wrapper d-flex-col">
              <label htmlFor="companies">Companies</label>
              <Select
                style={{
                  margin: "0 !important",
                  padding: "0",
                  textTransform: "capitalize",
                }}
                id="companies"
                name="company"
                value={company}
                onChange={updateFilters}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {companies &&
                  companies.map((company) => {
                    return (
                      <MenuItem name={company} value={company} key={company}>
                        {company}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
            {/*=============================================================================================================== */}

            {/* PRICE */}

            <div className="categories-wrapper d-flex-col">
              <label htmlFor="price">Price</label>
              <span> {formatPrice(price)}</span>
              <input
                color="red"
                type="range"
                id="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilters}
                name="price"
              />
            </div>

            {/*=============================================================================================================== */}

            {/*SHIPPING  */}
            <div className="categories-wrapper d-flex-col">
              <label htmlFor="freeshipping">free shipping </label>
              <input
                type="checkbox"
                id="freeshipping"
                onChange={updateFilters}
                name="isFreeShippingChecked"
                checked={isFreeShippingChecked}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;
