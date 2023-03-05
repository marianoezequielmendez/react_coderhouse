import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Button } from "@chakra-ui/react";

const CartWidget = () => {
  const { cart } = useContext(CounterContext);
  return (
    <>
      <Button colorScheme="gray" size="md" color="#262626">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{cart}</span>
      </Button>
    </>
  );
};

export default CartWidget;
