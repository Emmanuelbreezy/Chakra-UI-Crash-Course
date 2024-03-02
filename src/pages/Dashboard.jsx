import { Heading, Container, Box, Text } from "@chakra-ui/react";

const Dashboard = () => {
  const boxStyle = {
    p: "10px",
    bg: "blue.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    ":hover": {
      color: "#333",
      bg: "blue.300",
    },
  };
  return (
    <Container as="main" maxW="5xl" py="15px">
      <Heading my="30px" p="10px">
        React Chakra
      </Heading>

      <Text marginLeft="20px">We are learning chakraui</Text>

      <Text ml="20px" color="green.500" fontWeight="500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      <Box sx={boxStyle}>Subscribe to TechWithEmma</Box>

      <Box marginY="10px" p="20px" bg="green.500">
        <Text color="white">
          Lorem dolor sit, amet consectetur adipisicing elit
        </Text>
      </Box>
    </Container>
  );
};

export default Dashboard;
