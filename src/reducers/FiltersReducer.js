import { LOAD_WHOLE_PRODUCTS } from "../utils/actions";
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

    default:
      return state;
  }
};

export default reducer;
