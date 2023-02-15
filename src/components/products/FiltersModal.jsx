import { BsCheckLg } from "react-icons/bs";

import { useFilterContext } from "../../context/FilterProductsContext";
import { isMAtched, generateFilters, formatPrice } from "../../utils/helpers";
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
      <div className={modalClass} style={{ width: "90vw", height: "100vh" }}>
        <header>
          <button onClick={() => closeFilters()}>close </button>
        </header>
        <form className="d-flex-col">
          {/*CLEAR FILTERS  */}

          <button type="button" onClick={clearFilters}>
            clear filters
          </button>

          {/* COLORS */}
          <div className="colors-wrapper">
            <span>colors</span>
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
                        isMAtched(clr, color) ? "clr-checked" : "clr-overlay"
                      }
                    >
                      {isMAtched(clr, color) ? <BsCheckLg /> : ""}
                    </div>
                  </button>
                );
              })}
          </div>
          {/* ///////////////////// */}

          {/* CATEGORIES */}
          <div className="categories-wrapper d-flex-col">
            <label htmlFor="categories">Categories</label>
            <select
              id="categories"
              name="category"
              value={category}
              onChange={updateFilters}
            >
              {categories &&
                categories.map((cat) => {
                  return (
                    <option name={cat} value={cat} key={cat}>
                      {cat}
                    </option>
                  );
                })}
            </select>
          </div>

          {/* companies */}

          <div className="categories-wrapper d-flex-col">
            <label htmlFor="companies">Companies</label>
            <select
              id="companies"
              name="company"
              value={company}
              onChange={updateFilters}
            >
              {companies &&
                companies.map((company) => {
                  return (
                    <option name={company} value={company} key={company}>
                      {company}
                    </option>
                  );
                })}
            </select>
          </div>
          {/* PRICE */}

          <div className="categories-wrapper d-flex-col">
            <label htmlFor="price">Price</label>
            <span> {formatPrice(price)}</span>
            <input
              type="range"
              id="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilters}
              name="price"
            />
          </div>

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
  );
};

export default FiltersModal;
