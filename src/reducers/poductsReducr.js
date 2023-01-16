import {
  START_FETCHING,
  FETCH_DATA,
  END_FETCHING,
  PRODUCTS_ERR_FETCHING,
} from "../utils/actions";

const reducer = (state, action) => {
  if (action.type == START_FETCHING) {
    return {
      ...state,
      isProductsLoading: true,
    };
  }
  if (action.type == FETCH_DATA) {
    const fetured = action.payload.filter((p) => p.featured == true);
    return {
      ...state,
      isProductsLoading: true,
      products: action.payload,
      feturedProducts: fetured,
    };
  }
  if (action.type == END_FETCHING) {
    return {
      ...state,
      isProductsLoading: false,
    };
  }

  if (action.type == PRODUCTS_ERR_FETCHING) {
    return {
      ...state,
      productsErr: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
