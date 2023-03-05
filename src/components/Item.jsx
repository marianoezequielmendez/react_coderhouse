import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemQuantitySelector from "./ItemQuantitySelector";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Spacer,
  Flex,
} from "@chakra-ui/react";

// Componente Description
const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "empanadas");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <>
      {products.map((item) => (
        <Card maxW="sm" key={item.id} m={5}>
          <CardBody>
            <Image
              src={item.imagen}
              alt={`Imagen de la empanada ${item.nombre} `}
              borderRadius="lg"
              className="itemImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.nombre}</Heading>
              <Text className="textCardItem">{item.descripcion}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${item.precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Flex w="100%" spacing={4} direction="row" align="center">
              <Spacer />
              <ButtonGroup spacing="2">
                <ItemQuantitySelector />
              </ButtonGroup>
              <Spacer />
            </Flex>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Item;
