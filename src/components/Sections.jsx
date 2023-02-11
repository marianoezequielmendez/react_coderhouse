import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Sections = () => {
  return (
    <>
      <ul className="flex">
        <Flex>
          <Menu>
            <Link to={"/catalogue"}>
              <MenuButton as={Button} colorScheme="gray" size="md" mx="2">
                Catálogo
              </MenuButton>
            </Link>
          </Menu>
          {/* <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorías
            </MenuButton>
            <MenuList>
              <Link to={`/categories/${"Brand 01"}`}>
                <MenuItem>Brand 01</MenuItem>
              </Link>
              <Link to={`/categories/Brand 02`}>
                <MenuItem>Brand 02</MenuItem>
              </Link>
              <Link to={`/categories/${"Brand 03"}`}>
                <MenuItem>Brand 03</MenuItem>
              </Link>
            </MenuList>
          </Menu> */}
        </Flex>
      </ul>
    </>
  );
};

export default Sections;
