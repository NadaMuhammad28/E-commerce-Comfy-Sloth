import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/FiltersReducer";
import { useProductsContext } from "./ProductsContect";
//actions
import {
  LOAD_WHOLE_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  SORT_PRODUCTS,
  CHANGE_SORT_TYPE,
} from "../utils/actions";
const filterContext = React.createContext();

const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const initialState = {
    products: [],
    filteredProducts: [],
    grid_view: true,
    sort: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("ans sort", state.sort);
  useEffect(() => {
    dispatch({ type: LOAD_WHOLE_PRODUCTS, payload: products });
  }, [products]);

  // useEffect(() => {
  //   dispatch({ type: SORT_PRODUCTS, payload: sortOp }), [sortOp, state];
  // });
  const handleSorting = (e) => {
    console.log(e.target.value);
    dispatch({ type: CHANGE_SORT_TYPE, payload: e.target.value });
    dispatch({ type: SORT_PRODUCTS });
  };

  const showGridView = () => {
    dispatch({ type: GRID_VIEW });
  };
  const showListView = () => {
    dispatch({ type: LIST_VIEW });
  };
  return (
    <filterContext.Provider
      value={{
        ...state,
        showListView,
        showGridView,

        handleSorting,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(filterContext);
};

export { FilterContextProvider, useFilterContext, filterContext };
