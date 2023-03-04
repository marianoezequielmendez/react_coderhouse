import React, { Children, useState } from "react";
import { CounterContext } from "./CounterContext";

const StateContext = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <CounterContext.Provider
      value={{ counter, setCounter, cart, setCart, cartItems, setCartItems }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default StateContext;
