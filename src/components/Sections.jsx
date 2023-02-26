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
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="gray"
              size="md"
              mx="2"
              rightIcon={<ChevronDownIcon />}
            >
              Categories
            </MenuButton>
            <MenuList>
              <Link to={`/category/${"Clasicas"}`}>
                <MenuItem>Clásicas</MenuItem>
              </Link>
              <Link to={`/category/${"Especiales"}`}>
                <MenuItem>Especiales</MenuItem>
              </Link>
              <Link to={`/category/${"Vegetarianas"}`}>
                <MenuItem>Vegetarianas</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </ul>
    </>
  );
};

export default Sections;
