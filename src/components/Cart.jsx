import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <>
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
          <Box className="btn-send">
            <Button colorScheme="teal" variant="outline">
              Realizar la compra
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Cart;
