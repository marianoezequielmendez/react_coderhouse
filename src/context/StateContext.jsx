import React, { Children } from "react";
import { ProductContext } from "./ProductContext";

const StateContext = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export default StateContext;
