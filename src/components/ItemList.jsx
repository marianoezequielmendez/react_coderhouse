import React from "react";
import Item from "./Item";
import { Box, Flex, Spacer, Wrap } from "@chakra-ui/react";

const ItemList = ({ products }) => {
  return (
    <div>
      <Flex wrap="wrap" justify="center">
        <Box m="5">
          <Item />
        </Box>
        <Box m="5">
          <Item />
        </Box>
        <Box m="5">
          <Item />
        </Box>
        <Box m="5">
          <Item />
        </Box>
      </Flex>
    </div>
  );
};

export default ItemList;
