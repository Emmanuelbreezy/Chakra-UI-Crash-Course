import { Flex, IconButton, Box, Text, HStack, Heading } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" justify="space-between">
      <Heading as="h1">Dashboard</Heading>
      <Flex alignItems="center" gap="10px">
        <IconButton
          w="auto"
          aria-label="notification"
          icon={<BellIcon boxSize="20px" />}
        />
        <HStack alignItems="center" gap="3px">
          <Box w="auto" bg="gray.200" p="5px">
            EM
          </Box>
          <Text as="span">Techwithemma</Text>
        </HStack>
      </Flex>
    </Flex>
    // <Flex bg="gray.200" justifyContent="space-between" wrap="wrap" gap="2px">
    //   <Box flexGrow="1" w="100px" h="100px" bg="orange">1</Box>
    //   <Box w="100px" h="100px" bg="blue">2</Box>
    //   <Box flex="3" w="100px" h="100px" bg="red">3</Box>
    //   <Box w="100px" h="100px" bg="yellow">4</Box>
    // </Flex>
  );
};

export default NavBar;
