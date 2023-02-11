import React from "react";
import { useState } from "react";
import { Stack, Button } from "@chakra-ui/react";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const suma = () => {
    setCounter(counter + 1);
  };

  const resta = () => {
    counter <= 0
      ? console.log("No puede tener números negativos")
      : setCounter(counter - 1);
  };

  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button onClick={resta} colorScheme="teal" size="md">
          -
        </Button>
        <h2>{counter}</h2>
        <Button onClick={suma} colorScheme="teal" size="md">
          +
        </Button>
      </Stack>
    </>
  );
};

export default ItemCount;
