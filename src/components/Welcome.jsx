import { Center, Box, Image, Heading, Flex } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <>
      <Center>
        <Box boxSize="xxl" my={"35"}>
          <Flex direction="column" alignItems="center">
            <Heading mb="6">WELCOME</Heading>
            <Image src="https://cdn.discordapp.com/attachments/1072223829801324585/1072228118938517614/Web.jpg"></Image>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default Welcome;
