import React from "react";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Heading,
  ListItem,
} from "@chakra-ui/react";

const Sections = () => {
  const sections = ["Sección 01", "Sección 02", "Sección 03"];
  return (
    <>
      <ul className="flex">
        <Flex>
          {sections.map((section, index) => (
            <Box pr={7} key={index}>
              <li className="list-decoration">{section}</li>
            </Box>
          ))}
        </Flex>
      </ul>
    </>
  );
};

export default Sections;
