import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Sections from "./Sections";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="teal" color="#262626">
        <Flex alignContent="canter">
          <Box p="2" color="white">
            <Heading>
              <Link to={"/"}>Brand</Link>
            </Heading>
          </Box>
          <Spacer />
          <Sections />
          <Spacer />
          <Box p="2" color="white" className="flex">
            <Flex>
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
