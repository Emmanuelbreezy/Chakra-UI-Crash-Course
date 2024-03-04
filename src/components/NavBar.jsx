/* eslint-disable react/prop-types */
import { Flex, IconButton, Box, Text, HStack, Heading } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";

const NavBar = ({ onToggle }) => {
  return (
    <Flex
      as="nav"
      p="10px 20px"
      alignItems="center"
      justify={{ base: "space-between", lg: "flex-end" }}
      bg="white"
    >
      <HStack display={{ base: "flex", lg: "none" }}>
        <IconButton
          variant="ghost"
          aria-label=""
          icon={<FiMenu />}
          onClick={onToggle}
        />
        <Heading fontSize="30px">Tasa.</Heading>
      </HStack>
      <Flex alignItems="center" gap="10px">
        <IconButton
          variant="ghost"
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
