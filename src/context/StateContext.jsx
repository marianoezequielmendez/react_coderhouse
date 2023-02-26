import React, { Children, useState } from "react";
import { CounterContext } from "./CounterContext";

const StateContext = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter, cart, setCart }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateContext;
