import { useFilterContext } from "../../context/FilterProductsContext";

const FilterProducts = () => {
  const { categories, changeCategory } = useFilterContext();
  return (
    <section className="filters-wrapper">
      <h5>Category</h5>

      <div className="categories-wrapper d-flex-col">
        {categories &&
          categories.map((cat) => {
            return (
              <button
                name={cat}
                key={cat}
                onClick={(e) => changeCategory(e.target.name)}
              >
                {cat}
              </button>
            );
          })}
      </div>
    </section>
  );
};

export default FilterProducts;
