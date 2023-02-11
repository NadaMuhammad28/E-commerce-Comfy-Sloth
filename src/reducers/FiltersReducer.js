import {
  LOAD_WHOLE_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  SORT_PRODUCTS,
  CHANGE_SORT_TYPE,
} from "../utils/actions";
const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_WHOLE_PRODUCTS: {
      //this is to initialize products and filtered products to the products fetched from the api
      //we fetched it from the products context
      //to not map the same array ref to both of the whole products and the filterd ones ==> use spread operator

      return {
        ...state,
        products: [...action.payload],
        filteredProducts: [...action.payload],
      };
    }

    case GRID_VIEW: {
      return { ...state, grid_view: true };
    }
    case LIST_VIEW: {
      return { ...state, grid_view: false };
    }
    case CHANGE_SORT_TYPE: {
      return { ...state, sort: action.payload };
    }

    ////////////////////////////////////////////////////////////////
    case SORT_PRODUCTS: {
      const { filteredProducts, sort } = state;
      let tempProducts = [];
      if (sort === "Price (Lowest)") {
        tempProducts = filteredProducts.sort((a, b) => a.price - b.price);

        return { ...state, filteredProducts: tempProducts };
      }
      if (sort === "Price (Highest)") {
        tempProducts = filteredProducts.sort((a, b) => b.price - a.price);
        return { ...state, filteredProducts: tempProducts };
      }

      if (sort === "Name (A-Z)") {
        tempProducts = filteredProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return { ...state, filteredProducts: tempProducts };
      }
      if (sort === "Name (Z-A)") {
        tempProducts = filteredProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return { ...state, filteredProducts: tempProducts };
      } else {
        return state;
      }
    }
    /////////////////////////////////////////////////////////////////////////////////
    default:
      return state;
  }
};

export default reducer;
