import React, { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";
import { Link } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Box,
  Textarea,
  Flex,
  Heading,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

const Checkout = () => {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const db = getFirestore();
  const { setCart, cartItems, setCartItems, setIdOrden } =
    useContext(CounterContext);
  const [cliente, setCliente] = useState("");
  const [direccion, setDireccion] = useState("");
  const [observacion, setObservacion] = useState("");
  let random = Math.trunc(Math.random() * 1000);

  let precioTotal = 0;
  cartItems.map((item) => {
    precioTotal += item[1] * item[2];
  });

  const VerificaFormulario = ({ name, address }) => {
    if (name && address) {
      return (
        <Link to={`/brief`}>
          <Button
            as={Button}
            colorScheme="teal"
            size="md"
            mx="2"
            m="5"
            onClick={() => {
              enviarDatosDB(cartItems);
            }}
          >
            Realizar la compra
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
          m="5"
          onClick={() => {
            alert("El nombre y la dirección son obligatorios.");
          }}
        >
          Realizar la compra
        </Button>
      );
    }
  };

  const enviarDatosDB = (item) => {
    let idPedido = "000" + random;
    let productosCantidades = "";
    let precioTotal = 0;
    setIdOrden(idPedido);
    setCart(0);
    setCartItems([]);

    item.map((i) => {
      precioTotal += i[1] * i[2];
      productosCantidades += `${i[0]} (${i[2]}), `;
    });

    setDoc(doc(db, "ordenes", idPedido), {
      productos_: productosCantidades,
      precio_total_: precioTotal,
      cliente_: cliente,
      direccion_: direccion,
      observacion_: observacion,
      fecha_: hoy.toUTCString(),
    });
  };

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
            <FormLabel>¿Cuál es tu nombre?*</FormLabel>
            <Input
              type="text"
              onChange={(e) => {
                setCliente(e.target.value);
              }}
            />
            <FormLabel>Dirección*</FormLabel>
            <Input
              type="text"
              onChange={(e) => {
                setDireccion(e.target.value);
              }}
            />
          </Box>
          <FormLabel>Observaciones</FormLabel>
          <Textarea
            onChange={(e) => {
              setObservacion(e.target.value);
            }}
          ></Textarea>
          <br />
          <br />
          <Flex justify="center">
            <Box className="btn-send">
              <VerificaFormulario name={cliente} address={direccion} />
            </Box>
          </Flex>
        </FormControl>
      </Container>
    </>
  );
};

export default Checkout;
