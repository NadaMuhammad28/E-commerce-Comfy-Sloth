import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/FiltersReducer";
import { useProductsContext } from "./ProductsContect";
//actions
import { LOAD_WHOLE_PRODUCTS } from "../utils/actions";
const filterContext = React.createContext();
const initialState = {
  products: [],
  filteredProducts: [],
  grid_view: false,
};
const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_WHOLE_PRODUCTS, payload: products });
  }, [products]);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <filterContext.Provider value={{ ...state }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(filterContext);
};

export { FilterContextProvider, useFilterContext, filterContext };
