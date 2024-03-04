import { SimpleGrid, Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box>
      <Box bg={{base:"green", md:"blue", lg:"orange"}} w="200px" h="200px" />

      <SimpleGrid py="10px" columns={4} minChildWidth="250px" spacing={10}>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
      <Box bg="#f2f2f2" h="200px" border="1px solid"></Box>
    </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
