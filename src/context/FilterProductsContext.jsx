import React, { useContext, useReducer } from "react";
import reducer from "../reducers/FiltersReducer";
const filterContext = React.createContext();
const initialState = {
  products: [],
  filteredProducts: [],
  grid_view: true,
};
const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <filterContext.Provider>{children}</filterContext.Provider>;
};

const useFilterContext = () => {
  return useContext(filterContext);
};

export { FilterContextProvider, useFilterContext, filterContext };
