import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Flex,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Icon, createIcon } from "@chakra-ui/react";

const Cart = () => {
  let precioTotal = 0;
  const { cart, setCart, cartItems, setCartItems } = useContext(CounterContext);
  cartItems.map((item) => {
    precioTotal += item[1] * item[2];
  });

  const eliminarItem = (e) => {
    setCartItems(cartItems.filter((i) => i != e));
  };

  const VerificarCart = ({ cantidadProductos }) => {
    if (cantidadProductos > 0) {
      return (
        <Link to={`/checkout`}>
          <Button as={Button} colorScheme="teal" size="md" mx="2">
            Realizar pedido
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          as={Button}
          colorScheme="teal"
          size="md"
          mx="2"
          onClick={() => alert("El carro debe tener al menos un producto.")}
        >
          Realizar pedido
        </Button>
      );
    }
  };

  return (
    <>
      <Flex justify="center">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Producto</Th>
                <Th>Cantidad</Th>
                <Th>Precio total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((item) => (
                <Tr key={item.id}>
                  <Td>{item[0]}</Td>
                  <Td>{item[2]}</Td>
                  <Td>${item[1] * item[2]}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      color="#f6f6f6"
                      onClick={() => {
                        eliminarItem(item);
                        setCart(cart - item[2]);
                      }}
                    >
                      <span className="material-symbols-outlined">Delete</span>
                    </Button>
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>${precioTotal}</Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <br />
      <br />
      <Flex w="100%" spacing={4} direction="row" align="center">
        <Spacer />
        <ButtonGroup spacing="2">
          <VerificarCart cantidadProductos={cart} />
        </ButtonGroup>
        <Spacer />
      </Flex>
    </>
  );
};

export default Cart;
