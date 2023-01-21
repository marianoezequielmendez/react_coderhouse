import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import Sections from "./Sections";

const NavBar = () => {
  return (
    <>
      <Container
        maxW="100rem"
        bg="linear-gradient(25deg, #057ffe, #5e95f5, #0595f0)"
        color="#262626"
      >
        <Flex alignContent="canter">
          <Box p="2" color="white">
            <Heading>Brand</Heading>
          </Box>
          <Spacer />
          <Sections />
          <Spacer />
          <Box p="2" color="white" className="flex">
            <Flex>
              <CartWidget />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
