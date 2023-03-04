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
  Stack,
  Heading,
  Image,
  Text,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const Checkout = () => {
  const { cart, setCart, cartItems, setCartItems } = useContext(CounterContext);

  let precioTotal = 0;
  cartItems.map((item) => {
    precioTotal += item[1] * item[2];
  });

  return (
    <>
      <Flex justify="center">
        <Heading>
          Complete los datos. Pronto estará disfrutando con la más ricas
          empanadas.
        </Heading>
      </Flex>
      <br />
      <br />
      <Flex justify="center">
        <Card maxW="md">
          <CardHeader>
            <Flex spacing="4" justify="center">
              <Heading size="md">Su pedido</Heading>
            </Flex>
          </CardHeader>
          <CardBody>
            {cartItems.map((item) => (
              <Text py="2" id={item.id}>
                {item[0]}, {item[2]} uni. Total de: ${item[1] * item[2]}
              </Text>
            ))}
            <br />
            <Text>El total de su cuenta es: ${precioTotal}</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://cdn.smartkarrot.com/wp-content/uploads/2020/09/Satisfied-Customers.png"
            alt="Cliente feliz"
          />
        </Card>
      </Flex>
      <br />
      <br />
      <Container className="cart-container">
        <FormControl>
          <Box>
            <FormLabel>¿Cuál es tu nombre?</FormLabel>
            <Input type="text" />
            <FormLabel>Dirección</FormLabel>
            <Input type="text" />
          </Box>
          <FormLabel>Observaciones</FormLabel>
          <Textarea></Textarea>
          <br />
          <br />
          <Flex justify="center">
            <Box className="btn-send">
              <Link to={`/brief`}>
                <Button as={Button} colorScheme="teal" size="md" mx="2" m="5">
                  Realizar la compra
                </Button>
              </Link>
            </Box>
          </Flex>
        </FormControl>
      </Container>
    </>
  );
};

export default Checkout;
