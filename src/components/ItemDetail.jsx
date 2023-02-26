import React, { useContext } from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { CounterContext } from "../context/CounterContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Center,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { counter, setCounter, cart, setCart } = useContext(CounterContext);
  return (
    <>
      <Center mt={10}>
        <Card maxW="sm">
          <CardBody>
            <Center>
              <Image
                src={product.imagen}
                alt={`Imagen de la empanada ${product.nombre} `}
                borderRadius="lg"
                className="itemImage"
              />
            </Center>
            <Stack mt="6" spacing="5">
              <Heading size="md">{product.nombre}</Heading>
              <Text>{product.descripcion}</Text>
              <Flex>
                <Box>
                  <Text color="blue.600" fontSize="2xl">
                    ${product.precio}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize="2xl">Stock: {product.stock}</Text>
                </Box>
              </Flex>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="12">
              <ItemQuantitySelector stock={product.stock} />
              <Button
                onClick={() => setCart(cart + counter)}
                colorScheme="teal"
              >
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
          <Button
            onClick={() => setCounter(0)}
            variant="ghost"
            colorScheme="teal"
          >
            <Link to={"/catalogue"}>Volver</Link>
          </Button>
        </Card>
      </Center>
    </>
  );
};

export default ItemDetail;
